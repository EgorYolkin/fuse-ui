import type { Meta, StoryObj } from "@storybook/react-vite"

import { ScrollCrown } from "./scroll-crown"

const meta = {
  title: "Motion/ScrollCrown",
  component: ScrollCrown,
  parameters: { layout: "fullscreen" },
  args: { label: "Story scroll progress", orientation: "horizontal" },
  argTypes: { orientation: { control: "radio", options: ["horizontal", "vertical"] } },
} satisfies Meta<typeof ScrollCrown>

export default meta
type Story = StoryObj<typeof meta>

export const InteractiveScroll: Story = {
  render: (args) => (
    <div className="min-h-[220vh] bg-background p-6 text-text-primary">
      <div className="sticky top-6 flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-xs text-text-muted">SCROLL THIS STORY</p>
          <p className="mt-2 max-w-sm text-sm text-text-secondary">
            The indicator follows the iframe scroll position from 000 to 100.
          </p>
        </div>
        <ScrollCrown {...args} />
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: InteractiveScroll.render,
}
