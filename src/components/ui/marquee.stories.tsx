import type { Meta, StoryObj } from "@storybook/react-vite"

import { Marquee } from "./marquee"

const meta = {
  title: "Motion/Marquee",
  component: Marquee,
  parameters: { layout: "fullscreen" },
  args: {
    items: ["Accessible", "Composable", "Themeable", "React 19"],
    separator: "·",
    duration: 18,
    respectReducedMotion: true,
  },
  argTypes: { duration: { control: { type: "range", min: 4, max: 40, step: 1 } } },
} satisfies Meta<typeof Marquee>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const CustomSeparator: Story = {
  args: { separator: "/", duration: 28 },
}

export const Empty: Story = {
  args: { items: [] },
}
