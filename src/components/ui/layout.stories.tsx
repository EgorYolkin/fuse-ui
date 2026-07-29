import type { Meta, StoryObj } from "@storybook/react-vite"

import { Cluster, Container, Grid, Stack } from "./layout"

const meta = {
  title: "Layout/Primitives",
  component: Container,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

const Tile = ({ children }: { children: React.ReactNode }) => (
  <div className="border border-border bg-surface p-4 text-sm text-text-primary">{children}</div>
)

export const ContainerExample: Story = {
  render: () => <Container className="py-8"><Tile>Centered, constrained page content</Tile></Container>,
}

export const StackExample: Story = {
  render: () => <Stack className="w-80"><Tile>First</Tile><Tile>Second</Tile><Tile>Third</Tile></Stack>,
}

export const ClusterExample: Story = {
  render: () => <Cluster className="max-w-md"><Tile>Alpha</Tile><Tile>Beta</Tile><Tile>Gamma</Tile><Tile>Delta</Tile></Cluster>,
}

export const GridExample: Story = {
  render: () => <Grid className="w-full max-w-3xl grid-cols-1 sm:grid-cols-3"><Tile>Column 1</Tile><Tile>Column 2</Tile><Tile>Column 3</Tile></Grid>,
}
