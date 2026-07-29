import type { Meta, StoryObj } from "@storybook/react-vite"
import { CheckIcon, TriangleAlertIcon } from "lucide-react"

import { Badge } from "./badge"

const meta = {
  title: "Components/Badge",
  component: Badge,
  args: { children: "Stable", variant: "default" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "ghost", "destructive"],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">Stable</Badge>
      <Badge variant="outline">Preview</Badge>
      <Badge variant="ghost">Draft</Badge>
      <Badge variant="destructive">Failed</Badge>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-3">
      <Badge variant="outline"><CheckIcon data-icon="inline-start" /> Ready</Badge>
      <Badge variant="destructive"><TriangleAlertIcon data-icon="inline-start" /> Action required</Badge>
    </div>
  ),
}

export const AsLink: Story = {
  render: () => (
    <Badge render={<a href="#release-notes" />} variant="outline">
      Release notes
    </Badge>
  ),
}
