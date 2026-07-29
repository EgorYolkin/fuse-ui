import type { Meta, StoryObj } from "@storybook/react-vite"
import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "./badge"
import { StackedPanel, StackedPanelContent, StackedPanelLink } from "./stacked-panel"

const meta = {
  title: "Surfaces/StackedPanel",
  component: StackedPanel,
  args: { size: "default" },
  argTypes: { size: { control: "radio", options: ["default", "compact"] } },
} satisfies Meta<typeof StackedPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Content: Story = {
  render: (args) => (
    <StackedPanel {...args} className="w-96">
      <StackedPanelContent>
        <Badge variant="outline">v0.3.1</Badge>
        <h3 className="mt-4 font-semibold text-text-primary">Ready to ship</h3>
        <p className="mt-2 text-sm text-text-muted">A non-interactive layered information panel.</p>
      </StackedPanelContent>
    </StackedPanel>
  ),
}

export const Link: Story = {
  render: () => (
    <StackedPanel className="w-96">
      <StackedPanelLink href="#components">
        <span className="font-semibold text-text-primary">Browse components</span>
        <ArrowUpRightIcon className="ml-auto size-4" aria-hidden="true" />
      </StackedPanelLink>
    </StackedPanel>
  ),
}

export const Compact: Story = { args: { size: "compact" }, render: Content.render }
