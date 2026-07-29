import type { Meta, StoryObj } from "@storybook/react-vite"

import { BracketButton } from "./bracket-button"

const meta = {
  title: "Components/BracketButton",
  component: BracketButton,
  args: {
    children: "Open documentation",
    href: "#documentation",
    variant: "primary",
    responsive: "always",
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "ghost"] },
    responsive: { control: "select", options: ["always", "desktop", "wide"] },
  },
} satisfies Meta<typeof BracketButton>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <BracketButton href="#primary" variant="primary">Primary action</BracketButton>
      <BracketButton href="#ghost" variant="ghost">Ghost action</BracketButton>
    </div>
  ),
}

export const ExternalLink: Story = {
  args: { href: "https://github.com/EgorYolkin/fuse-ui", children: "View on GitHub" },
}
