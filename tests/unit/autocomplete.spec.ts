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
    expect(wrapper.findAll("li")).toHaveLength(5);
  });

  it("displays 'No results' if a typed in value cannot be found", async () => {
    const autocompleteInputField = wrapper.find("input");

    await autocompleteInputField.setValue("xx");
    expect(autocompleteInputField.element.value).toBe("xx");

    await autocompleteInputField.trigger("keyup");
    expect(wrapper.findAll("li")).toHaveLength(1);
    expect(wrapper.findAll("li")[0].text()).toBe("No results");
  });
});
