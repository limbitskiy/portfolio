import type { Meta, StoryObj } from "@storybook/vue3";

import IconText from "@/components/UI/IconText.vue";

const meta = {
  title: "IconText",
  component: IconText,
  tags: ["autodocs"],
  argTypes: {
    icon: { control: "select", options: ["ts", "nuxt", "pinia", "vitest", "vue", "gitlab", "tailwind", "unirender", "quasar", "docker", "mongo"] },
  },
} satisfies Meta<typeof IconText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: "ts",
    text: "www.google.com",
  },
};
