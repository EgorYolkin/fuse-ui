import type { Meta, StoryObj } from "@storybook/react-vite"

import { Heading, Highlight, HighlightHeading, Kicker, Text } from "./typography"

const meta = {
  title: "Typography/Primitives",
  component: Heading,
  args: { children: "Technical editorial heading", level: 2 },
  argTypes: { level: { control: "select", options: [1, 2, 3, 4, 5, 6] } },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const HeadingPlayground: Story = {}

export const Hierarchy: Story = {
  render: () => (
    <div className="space-y-5">
      {[1, 2, 3, 4, 5, 6].map((level) => <Heading key={level} level={level as 1 | 2 | 3 | 4 | 5 | 6}>Heading level {level}</Heading>)}
    </div>
  ),
}

export const TextStyles: Story = {
  render: () => (
    <div className="max-w-xl space-y-4">
      <Kicker>SYSTEM / TYPOGRAPHY</Kicker>
      <Text>Body copy uses muted semantic color and a relaxed measure for readable product content.</Text>
      <Text>Use <Highlight>highlighted language</Highlight> to create restrained editorial emphasis.</Text>
    </div>
  ),
}

export const HighlightedHeading: Story = {
  render: () => <HighlightHeading lines={["Accessible primitives.", "Deliberate interfaces."]} />,
}
