import { mount } from "@vue/test-utils";
import Autocomplete from "@/components/Autocomplete.vue";
import { nextTick } from "vue";

describe("Autocomplete.vue", () => {
  let wrapper = mount(Autocomplete);
  beforeEach(() => {
    wrapper = mount(Autocomplete);
  });
  it("displays an empty input field and submit button on mount", () => {
    const autocompleteInputField = wrapper.find("#destination");
    const submitButton = wrapper.find("button");
    const autocompleteList = wrapper.find("ul");
    const autocompleteListItem = wrapper.find("li");

    expect(autocompleteInputField.exists()).toBe(true);
    expect(submitButton.exists()).toBe(true);
    expect(autocompleteList.exists()).toBe(true);
    expect(autocompleteList.classes()).toContain("hidden");
    expect(autocompleteListItem.text()).toBe("No results");
  });

  it("displays a list of potential matches as the user types", async () => {
    const autocompleteInputField = wrapper.find("input");

    await autocompleteInputField.setValue("united");
    expect(autocompleteInputField.element.value).toBe("united");

    await autocompleteInputField.trigger("keyup");
    expect(wrapper.find("ul").classes()).not.toContain("hidden");
    expect(wrapper.findAll("li")).toHaveLength(5);
    expect(wrapper.findAll("li")[0].text()).toBe(
      "Tanzania, United Republic of"
    );
    expect(wrapper.findAll("li")[1].text()).toBe("United Arab Emirates");
    expect(wrapper.findAll("li")[2].text()).toBe("United Kingdom");
    expect(wrapper.findAll("li")[3].text()).toBe("United States");
    expect(wrapper.findAll("li")[4].text()).toBe(
      "United States Minor Outlying Islands"
    );
  });

  it("displays 'No results' if a typed in value cannot be found", async () => {
    const autocompleteInputField = wrapper.find("input");

    await autocompleteInputField.setValue("xx");
    expect(autocompleteInputField.element.value).toBe("xx");

    await autocompleteInputField.trigger("keyup");
    expect(wrapper.find("ul").classes()).not.toContain("hidden");
    expect(wrapper.findAll("li")).toHaveLength(1);
    expect(wrapper.findAll("li")[0].text()).toBe("No results");
  });

  it("hitting enter on an item in the menu sets that item's value in the input field", async () => {
    const autocompleteInputField = wrapper.find("input");

    await autocompleteInputField.setValue("united");
    expect(autocompleteInputField.element.value).toBe("united");

    await autocompleteInputField.trigger("keyup");
    expect(wrapper.find("ul").classes()).not.toContain("hidden");
    expect(wrapper.findAll("li")[0].text()).toBe(
      "Tanzania, United Republic of"
    );

    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });
    expect(wrapper.findAll("li")[0].attributes("aria-selected")).toBe("true");

    await wrapper.find("ul").trigger("keydown", { code: "Enter" });
    expect(autocompleteInputField.element.value).toBe(
      "Tanzania, United Republic of"
    );
  });
  it("hitting escape on an item in the menu closes the menu", async () => {
    const autocompleteInputField = wrapper.find("input");

    await autocompleteInputField.setValue("united");
    expect(autocompleteInputField.element.value).toBe("united");

    await autocompleteInputField.trigger("keyup");
    expect(wrapper.find("ul").classes()).not.toContain("hidden");
    expect(wrapper.findAll("li")[0].text()).toBe(
      "Tanzania, United Republic of"
    );

    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });
    expect(wrapper.findAll("li")[0].attributes("aria-selected")).toBe("true");

    await wrapper.find("ul").trigger("keydown", { code: "Escape" });
    expect(wrapper.find("ul").classes()).toContain("hidden");
  });
  it("hitting the up arrow while the menu is open moves focus up the menu.", async () => {
    const autocompleteInputField = wrapper.find("input");

    await autocompleteInputField.setValue("united");
    expect(autocompleteInputField.element.value).toBe("united");

    await autocompleteInputField.trigger("keyup");
    expect(wrapper.find("ul").classes()).not.toContain("hidden");
    expect(wrapper.findAll("li")).toHaveLength(5);

    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });
    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });
    expect(wrapper.findAll("li")[0].attributes("aria-selected")).toBe("false");
    expect(wrapper.findAll("li")[1].attributes("aria-selected")).toBe("true");

    await wrapper.find("ul").trigger("keydown", { code: "ArrowUp" });
    expect(wrapper.findAll("li")[0].attributes("aria-selected")).toBe("true");
    expect(wrapper.findAll("li")[1].attributes("aria-selected")).toBe("false");
  });
  it("if the first option is focused, hitting the up arrow puts focus on the input field and closes the menu", async () => {
    const autocompleteInputField = wrapper.find("input");

    await autocompleteInputField.setValue("united");
    expect(autocompleteInputField.element.value).toBe("united");

    await autocompleteInputField.trigger("keyup");
    expect(wrapper.find("ul").classes()).not.toContain("hidden");
    expect(wrapper.findAll("li")).toHaveLength(5);
    
    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });
    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });
    expect(wrapper.findAll("li")[0].attributes("aria-selected")).toBe("false");
    expect(wrapper.findAll("li")[1].attributes("aria-selected")).toBe("true");
    
    await wrapper.find("ul").trigger("keydown", { code: "ArrowUp" });
    expect(wrapper.findAll("li")[0].attributes("aria-selected")).toBe("true");
    expect(wrapper.findAll("li")[1].attributes("aria-selected")).toBe("false");

    await wrapper.find("ul").trigger("keydown", { code: "ArrowUp" });
    expect(wrapper.find("ul").classes()).toContain("hidden");
    expect(autocompleteInputField.classes()).toContain(
      "autocomplete-isInputFieldFocused"
    );
  });
  // it("down arrow", () => {})
  // it("tab key", () => {})
  // it("hitting spacebar", () => {})
  // it("on focus of input", () => {})
  // it("on input click", () => {})
  // it("on svg click", () => {})
  // it("on document click", () => {})
  // it("hitting submit", () => {})
});
