import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import CustomCard from "@/components/CustomCard.vue";
import Vuetify from "vuetify";

describe("CustomCard.vue", () => {
  const localVue = createLocalVue();
  let vuetify: Vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should have data named 'show' with default false when rendered", () => {
    const wrapper = shallowMount(CustomCard);

    expect(wrapper.vm.$data.show).toBe(false);
  });

  it("should show details when icon button clicked", async () => {
    const wrapper = mount(CustomCard, { localVue, vuetify });

    const details = wrapper.find(".v-card__text");
    const button = wrapper.find(".v-btn--icon");

    await button.trigger("click");

    expect(details.isVisible()).toBe(true);
  });
});
