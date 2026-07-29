import type { Meta, StoryObj } from "@storybook/react-vite"

import { StaggeredList, StaggeredListItem } from "./staggered-list"

const meta = {
  title: "Surfaces/StaggeredList",
  component: StaggeredList,
} satisfies Meta<typeof StaggeredList>

export default meta
type Story = StoryObj<typeof meta>

const items = ["Accessible foundations", "Semantic theme tokens", "Composable layouts", "Restrained motion"]

export const Playground: Story = {
  render: () => (
    <StaggeredList className="w-full max-w-2xl">
      {items.map((item) => <StaggeredListItem key={item}>{item}</StaggeredListItem>)}
    </StaggeredList>
  ),
}
