import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import VeeValidate from "vee-validate";

import Inspire from "~/pages/inspire";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(VeeValidate);

describe("Inspire", () => {
  it("renders to match snapshot", () => {
    const wrapper = shallowMount(Inspire, {
      localVue
    });
    expect(wrapper).toMatchSnapshot();
  });
});
