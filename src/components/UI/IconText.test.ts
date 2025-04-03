import IconText from "./IconText.vue";
import { mount } from "@vue/test-utils";

let wrapper;

beforeAll(() => {
  wrapper = mount(IconText, {
    props: {
      icon: "link",
      text: "test-text",
    },
  });
});

describe("IconText", () => {
  it("renders an icon", () => {
    const icon = wrapper.get('[data-test="icontext-icon"]');
    expect(icon).toBeTruthy();
  });

  it("renders link href", () => {
    const text = wrapper.get('[data-test="icontext-text"]');
    expect(text.text()).toBe("test-text");
  });
});
