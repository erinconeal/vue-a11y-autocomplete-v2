import { shallowMount } from "@vue/test-utils";
import Autocomplete from "@/components/Autocomplete.vue";

describe("Autocomplete.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Autocomplete, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
