import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "./button"
import { Navbar } from "./navbar"

const meta = {
  title: "Navigation/Navbar",
  component: Navbar,
  parameters: { layout: "fullscreen" },
  args: {
    brand: <a href="#home" className="font-semibold text-text-primary">Fuse UI</a>,
    center: <span className="font-mono text-xs text-text-muted">COMPONENT SYSTEM</span>,
    actions: <><a href="#docs" className="text-sm text-text-primary">Docs</a><a href="#github" className="text-sm text-text-primary">GitHub</a></>,
  },
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const NavigationActions: Story = {}

export const ActionGroup: Story = {
  args: {
    actionsLabel: "Application actions",
    actions: <><Button size="sm" variant="ghost">Sign in</Button><Button size="sm">Get started</Button></>,
  },
}
