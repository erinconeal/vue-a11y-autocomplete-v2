<template>
  <div class="hello">
    <h1>vue-a11y-autocomplete</h1>
    <div class="container">
      <label for="destination">
        <span>Destination</span>
      </label>
      <div class="autocomplete mt-1">
        <input
          aria-owns="autocomplete-options--destination"
          autocapitalize="none"
          type="text"
          autocomplete="off"
          aria-autocomplete="list"
          role="combobox"
          id="destination"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          ref="destination"
          @keyup="onTextBoxKeyUp"
          @keydown="onTextBoxKeyDown"
          @click="onTextBoxClick"
          @focus="onTextBoxFocus"
          v-model="inputValue"
          :class="{ 'autocomplete-isInputFieldFocused': isInputFieldFocused }"
        />
        <svg
          focusable="false"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          @click="onArrowClick"
        >
          <g><polygon points="0 0 22 0 11 17"></polygon></g>
        </svg>
        <ul
          id="autocomplete-options--destination"
          role="listbox"
          :class="{ hidden: !menuOpen }"
          @keydown="onMenuKeyDown"
        >
          <template v-if="results.length">
            <li
              v-for="(option, i) in results"
              :key="option.code"
              role="option"
              tabindex="-1"
              :aria-selected="i === indexCounter"
              :ref="`autocomplete-option-index--${i}`"
              @click="onOptionClick(option)"
            >
              {{ option.name }}
            </li>
          </template>
          <template v-else>
            <li id="autocomplete-option--NoResults">No results</li>
          </template>
        </ul>
        <div aria-live="polite" role="status" class="visually-hidden">
          <span v-if="results.length === 0">No results.</span>
          <span v-else> {{ results.length }} results available. </span>
        </div>
      </div>
      <button type="button" @click="submit" class="btn mt-3">Submit</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import countries from "../countries";

interface Countries {
  name: string;
  code: string;
}

export default defineComponent({
  name: "HelloWorld",
  data() {
    return {
      keys: {
        enter: "Enter",
        esc: "Escape",
        space: "Space",
        up: "ArrowUp",
        down: "ArrowDown",
        tab: "Tab",
        left: "ArrowLeft",
        right: "ArrowRight"
      },
      inputValue: "",
      isInputFieldFocused: false,
      menuOpen: false,
      results: [] as Countries[],
      indexCounter: -1
    };
  },
  methods: {
    submit() {
      const foundCountry = countries.find(c => c.name === this.inputValue);
      if (foundCountry) {
        alert(`Submitting country ${foundCountry.name}`);
      } else {
        alert("Please submit a valid country from the autocomplete.");
      }
    },
    onMenuKeyDown(t: KeyboardEvent) {
      switch (t.code) {
        // If the first option is focused, set focus to the text box.
        // Otherwise set focus to the previous option.
        case this.keys.up:
          this.onOptionUpArrow(t);
          break;
        // Focus the next menu option. If it’s the last menu option, do nothing.
        case this.keys.down:
          this.onOptionDownArrow(t);
          break;
        // Select the currently highlighted option and focus the text box.
        case this.keys.enter:
          this.onOptionEnter(t);
          break;
        // Select the currently highlighted option and focus the text box.
        case this.keys.space:
          this.onOptionSpace(t);
          break;
        // Hide the menu and focus the text box.
        case this.keys.esc:
          this.onOptionEscape();
          break;
        // Hide the menu.
        case this.keys.tab:
          this.hideMenu();
          this.removeTextBoxFocus();
          break;
        // Focus the text box (so users can continue typing).
        default:
          this.focusTextBox();
      }
    },
    onOptionEnter(e: Event) {
      this.inputValue = (this.results[this.indexCounter] as Countries).name;
      this.hideMenu();
      this.focusTextBox();
      // we don't want form to submit
      e.preventDefault();
    },
    onOptionSpace(e: Event) {
      this.inputValue = (this.results[this.indexCounter] as Countries).name;
      this.hideMenu();
      this.focusTextBox();
      // we don't want a space to be added to text box
      e.preventDefault();
    },
    onOptionEscape() {
      this.clearOptions();
      this.hideMenu();
      this.focusTextBox();
    },
    onOptionDownArrow(e: Event) {
      if (this.indexCounter < this.results.length - 1) {
        this.indexCounter = this.indexCounter + 1;
        this.$nextTick(() => {
          (this.$refs[
            `autocomplete-option-index--${this.indexCounter}`
          ] as any).focus();
        });
      }
      e.preventDefault();
    },
    onOptionUpArrow(e: Event) {
      if (this.indexCounter > 0) {
        this.indexCounter = this.indexCounter - 1;
        this.$nextTick(() => {
          (this.$refs[
            `autocomplete-option-index--${this.indexCounter}`
          ] as any).focus();
        });
      } else {
        this.focusTextBox();
        this.hideMenu();
      }
      e.preventDefault();
    },
    onTextBoxKeyUp(e: KeyboardEvent) {
      if (e.shiftKey) {
        return;
      }

      switch (e.code) {
        case this.keys.esc:
        case this.keys.up:
        case this.keys.left:
        case this.keys.right:
        case this.keys.space:
        case this.keys.enter:
        case this.keys.tab:
          // ignore otherwise the menu will show
          break;
        case this.keys.down:
          this.onTextBoxDownPressed(e);
          break;
        default:
          this.onTextBoxType();
      }
    },
    onTextBoxKeyDown(e: KeyboardEvent) {
      switch (e.code) {
        case this.keys.tab:
          // hide menu
          this.hideMenu();
          this.removeTextBoxFocus();
          break;
        default:
          this.focusTextBox();
      }
    },
    onTextBoxDownPressed(e: Event) {
      const options = this.getOptions();
      this.buildMenu(options);
      this.showMenu();
      this.onOptionDownArrow(e);
    },
    onTextBoxType() {
      const options = this.getOptions();
      this.buildMenu(options);
      this.showMenu();
    },
    getOptions() {
      return countries.filter(country =>
        country.name.toLowerCase().includes(this.inputValue.toLowerCase())
      );
    },
    buildMenu(options: Countries[]) {
      this.clearOptions();
      this.results = options;
      this.$nextTick(() => {
        (document.getElementById(
          "autocomplete-options--destination"
        ) as HTMLUListElement).scrollTop = 0;
      });
    },
    showMenu() {
      this.menuOpen = true;
    },
    hideMenu() {
      this.menuOpen = false;
      this.indexCounter = -1;
      this.clearOptions();
    },
    clearOptions() {
      this.results = [];
    },
    removeTextBoxFocus() {
      this.isInputFieldFocused = false;
    },
    onTextBoxFocus() {
      this.isInputFieldFocused = true;
    },
    focusTextBox() {
      (this.$refs.destination as HTMLInputElement).focus();
    },
    onOptionClick(option: { name: string; code: string }) {
      this.inputValue = option.name;
      this.hideMenu();
      this.focusTextBox();
    },
    onDocumentClick(e: Event) {
      // if clicking anywhere but a descendent of the autocomplete, close the menu
      if (!(e.target as Element).closest("div.autocomplete")) {
        this.hideMenu();
        this.removeTextBoxFocus();
      } else {
        return e;
      }
      return null;
    },
    onTextBoxClick() {
      this.clearOptions();
      const options = this.getOptions();
      this.buildMenu(options);
      this.showMenu();
      // TODO: event: Event
      // if (typeof event.currentTarget.select === 'function') {
      //   event.currentTarget.select();
      // }
    },
    onArrowClick() {
      this.clearOptions();
      const options = this.getOptions();
      this.buildMenu(options);
      this.showMenu();
      this.focusTextBox();
    }
  },
  mounted() {
    document.addEventListener("click", this.onDocumentClick);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.onDocumentClick);
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

.container {
  max-width: 30rem;
  margin: auto;
}

.visually-hidden {
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
}

.autocomplete {
  position: relative;
}

.autocomplete [type="text"] {
  /* -webkit-appearance: none; */
  border-radius: 0;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  font-family: inherit;
  line-height: 1.25;
  padding: 0.5em;
  border: 2px solid #718096;
}

.autocomplete svg {
  position: absolute;
  right: 0.6em;
  width: 1.5em;
  height: 1.5em;
  top: 0.8em;
  fill: #4a5568;
}

.autocomplete [role="listbox"] {
  margin: 0;
  max-height: 12em;
  overflow-y: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;
  font-size: 100%;
  padding: 0;
  position: absolute;
  top: 2.3em;
  width: 100%;
  background-color: #f7fafc;
  border-radius: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  z-index: 2;
  border: 2px solid #718096;
}

.autocomplete [role="option"] {
  line-height: 22px;
  padding: 0.5em;
  display: block;
  border-bottom: 2px solid #718096;
  outline: 0;
  margin: 0;
}

.hidden {
  display: none;
}

.autocomplete [role="option"][aria-selected="true"] {
  background-color: #005ea5;
  border-color: #005ea5;
  color: #ffffff;
}

.autocomplete-isInputFieldFocused {
  outline-offset: 0;
  outline: 3px solid #ecc94b;
}

.btn {
  font-weight: 600;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
  font-size: 0.9em;
  color: #fff;
  margin: 0.2em 0;
  width: 200px;
  text-align: center;
  padding: 12px 24px;
  display: inline-block;
  vertical-align: middle;
}

.mt-1 {
  margin-top: 1rem;
}

.mt-3 {
  margin-top: 3rem;
}
</style>
