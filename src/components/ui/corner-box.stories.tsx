import type { Meta, StoryObj } from "@storybook/react-vite"

import { CornerBox } from "./corner-box"
import { PatternStrip } from "./pattern-strip"

const meta = {
  title: "Surfaces/CornerBox",
  component: CornerBox,
  args: { full: false },
} satisfies Meta<typeof CornerBox>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <CornerBox {...args} className="w-96 border border-border bg-surface p-6 text-text-primary">
      Registration corners frame this surface.
    </CornerBox>
  ),
}

export const FullCorners: Story = {
  args: { full: true },
  render: Playground.render,
}

export const PatternStripOnly: Story = {
  render: () => (
    <PatternStrip className="w-96 border border-border font-mono text-xs text-text-muted">
      SYSTEM / STATUS
    </PatternStrip>
  ),
}

export const WithPatternStrip: Story = {
  render: () => (
    <CornerBox full className="w-96 border border-border bg-surface">
      <PatternStrip className="font-mono text-xs text-text-muted">SYSTEM / STATUS</PatternStrip>
      <div className="p-6 text-text-primary">PatternStrip provides a technical hatched header.</div>
    </CornerBox>
  ),
}
