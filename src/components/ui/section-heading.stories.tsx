import type { Meta, StoryObj } from "@storybook/react-vite"

import { SectionHeading } from "./section-heading"

const meta = {
  title: "Typography/SectionHeading",
  component: SectionHeading,
  args: {
    kicker: "COMPONENTS / 01",
    title: "Build interfaces with intent",
    description: "Composable primitives with sharp geometry, semantic tokens, and accessible behavior.",
    align: "left",
    headingLevel: 2,
  },
  argTypes: {
    align: { control: "radio", options: ["left", "center"] },
    headingLevel: { control: "select", options: [1, 2, 3, 4, 5, 6] },
  },
} satisfies Meta<typeof SectionHeading>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Centered: Story = { args: { align: "center" } }

export const TitleOnly: Story = { args: { kicker: undefined, description: undefined } }
