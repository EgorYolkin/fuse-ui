import type { Meta, StoryObj } from "@storybook/react-vite"

import { Footer } from "./footer"

const meta = {
  title: "Navigation/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
  args: {
    brand: "Fuse UI",
    description: "Accessible React components with a technical, editorial visual language.",
    links: [
      { label: "Components", href: "#components" },
      { label: "GitHub", href: "https://github.com/EgorYolkin/fuse-ui" },
      { label: "npm", href: "https://www.npmjs.com/package/@egoryolkin/fuse-ui" },
    ],
    bottom: <><span>MIT License</span><span>React 19</span></>,
  },
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Complete: Story = {}

export const Minimal: Story = {
  args: { description: undefined, links: [], bottom: undefined },
}
