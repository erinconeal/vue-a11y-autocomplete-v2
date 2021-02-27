import { mount } from "@vue/test-utils";
import Autocomplete from "@/components/Autocomplete.vue";

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
    await wrapper.vm.$nextTick();
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
    await wrapper.vm.$nextTick();
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
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll("li")[0].attributes("aria-selected")).toBe("false");
    expect(wrapper.findAll("li")[1].attributes("aria-selected")).toBe("true");

    await wrapper.find("ul").trigger("keydown", { code: "ArrowUp" });
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll("li")[0].attributes("aria-selected")).toBe("true");
    expect(wrapper.findAll("li")[1].attributes("aria-selected")).toBe("false");

    await wrapper.find("ul").trigger("keydown", { code: "ArrowUp" });
    expect(wrapper.find("ul").classes()).toContain("hidden");
    expect(autocompleteInputField.classes()).toContain(
      "autocomplete-isInputFieldFocused"
    );
  });
  it("hitting the down arrow in the input field while the input field is empty opens the menu", async () => {
    const autocompleteInputField = wrapper.find("input");
    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });
    expect(wrapper.find("ul").classes()).not.toContain("hidden");
    expect(wrapper.findAll("li")[0].attributes("aria-selected")).toBe("true");
  });
  it("hitting the down arrow in the input field while the input field is populated moves focus to the first item in the menu", async () => {
    const autocompleteInputField = wrapper.find("input");

    await autocompleteInputField.setValue("united");
    expect(autocompleteInputField.element.value).toBe("united");

    await autocompleteInputField.trigger("keyup");
    expect(wrapper.find("ul").classes()).not.toContain("hidden");

    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });
    expect(wrapper.findAll("li")[0].attributes("aria-selected")).toBe("true");
  });
  it("hitting the down arrow in the menu moves focus to the next list item", async () => {
    const autocompleteInputField = wrapper.find("input");
    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });

    expect(wrapper.find("ul").classes()).not.toContain("hidden");
    expect(wrapper.findAll("li")[0].attributes("aria-selected")).toBe("true");

    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });
    expect(wrapper.findAll("li")[0].attributes("aria-selected")).toBe("false");
    expect(wrapper.findAll("li")[1].attributes("aria-selected")).toBe("true");
  });
  it("hitting the down arrow while focus is on the last item keeps focus on the last item", async () => {
    const autocompleteInputField = wrapper.find("input");

    await autocompleteInputField.setValue("lia");
    expect(autocompleteInputField.element.value).toBe("lia");

    await autocompleteInputField.trigger("keyup");
    expect(wrapper.find("ul").classes()).not.toContain("hidden");
    expect(wrapper.findAll("li")).toHaveLength(3);

    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });
    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });
    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });

    expect(wrapper.findAll("li")[0].attributes("aria-selected")).toBe("false");
    expect(wrapper.findAll("li")[1].attributes("aria-selected")).toBe("false");
    expect(wrapper.findAll("li")[2].attributes("aria-selected")).toBe("true");

    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });
    expect(wrapper.findAll("li")[2].attributes("aria-selected")).toBe("true");
  });
  it("hitting spacebar while focus is in the menu selects the currently highlighted option and closes the menu. No extra spaces are added in the input field", async () => {
    const autocompleteInputField = wrapper.find("input");

    await autocompleteInputField.setValue("united");
    expect(autocompleteInputField.element.value).toBe("united");

    await autocompleteInputField.trigger("keyup");
    expect(wrapper.find("ul").classes()).not.toContain("hidden");
    expect(wrapper.findAll("li")[0].text()).toBe(
      "Tanzania, United Republic of"
    );

    await autocompleteInputField.trigger("keyup", { code: "ArrowDown" });
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll("li")[0].attributes("aria-selected")).toBe("true");

    await wrapper.find("ul").trigger("keydown", { code: "Space" });
    expect(autocompleteInputField.element.value).toBe(
      "Tanzania, United Republic of"
    );
    expect(autocompleteInputField.classes()).toContain(
      "autocomplete-isInputFieldFocused"
    );
  });
  it("hitting spacebar while focus is in the empty input field does not display the menu", async () => {
    const autocompleteInputField = wrapper.find("input");
    await autocompleteInputField.trigger("keyup", { code: "Space" });

    expect(wrapper.find("ul").classes()).toContain("hidden");
  });
  it("on clicking on the input field, the menu will display", async () => {
    const autocompleteInputField = wrapper.find("input");
    await autocompleteInputField.trigger("click");

    expect(wrapper.find("ul").classes()).not.toContain("hidden");
  });
  it("on clicking on the arrow svg, the menu will display", async () => {
    const svg = wrapper.find("svg");
    await svg.trigger("click");

    expect(wrapper.find("ul").classes()).not.toContain("hidden");
  });
  // it("on document click close the menu and remove focus from the input field", async () => {
  //   const autocompleteInputField = wrapper.find("input");
  //   await autocompleteInputField.trigger("click");

  //   expect(wrapper.find("ul").classes()).not.toContain("hidden");

  //   const body = wrapper.find("h1");
  //   await body.trigger("click");

  //   expect(wrapper.find("ul").classes()).toContain("hidden");
  // })
  it("on clicking on a menu item, close the menu and set the menu item's name in the input field", () => {})

  // it("hitting submit", () => {})

  // it("NOT SUPPORTED IN VUE-TEST-UTILS: hitting the tab key while focus is on the input field closes the menu and sets focus to the next element in the tab stop order", () => {});
  // it("NOT SUPPORTED IN VUE-TEST-UTILS: hitting the tab key while focus is in the menu closes the menu and sets focus to the next element in the tab stop order", () => {});
  // https://github.com/vuejs/vue-test-utils/issues/966
  // maybe test in e2e (in browser instance)?
});
