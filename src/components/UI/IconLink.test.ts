import IconLink from "./IconLink.vue";
import { mount } from "@vue/test-utils";

describe("IconLink", () => {
  it("renders an icon", () => {
    const wrapper = mount(IconLink, {
      props: {
        icon: "link",
        link: "www.test-link.com",
      },
    });
    const icon = wrapper.get('[data-test="iconlink-icon"]');
    expect(icon).toBeTruthy();
  });

  it("renders link href", () => {
    const wrapper = mount(IconLink, {
      props: {
        icon: "link",
        link: "www.test-link.com",
      },
    });
    const text = wrapper.get('[data-test="iconlink-text"]');
    expect(text.text()).toBe("www.test-link.com");
  });

  it("renders text prop instead of href if it is supplied", () => {
    const wrapper = mount(IconLink, {
      props: {
        icon: "link",
        link: "www.test-link.com",
        text: "link text",
      },
    });
    const text = wrapper.get('[data-test="iconlink-text"]');
    expect(text.text()).toBe("link text");
  });
});
