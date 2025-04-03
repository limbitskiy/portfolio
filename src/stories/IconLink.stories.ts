import type { Meta, StoryObj } from "@storybook/vue3";

import IconLink from "@/components/UI/IconLink.vue";

const meta = {
  title: "IconLink",
  component: IconLink,
  tags: ["autodocs"],
  argTypes: {
    icon: { control: "radio", options: ["link", "github", "gitlab", "unknown"] },
  },
} satisfies Meta<typeof IconLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: "link",
    link: "www.google.com",
  },
};
