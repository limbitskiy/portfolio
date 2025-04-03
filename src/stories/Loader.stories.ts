import type { Meta, StoryObj } from "@storybook/vue3";

import Loader from "@/components/Loader.vue";

const meta = {
  title: "Loader",
  component: Loader,
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
