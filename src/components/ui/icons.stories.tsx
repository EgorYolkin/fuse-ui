import type { Meta, StoryObj } from "@storybook/react-vite"
import { CheckIcon, LayersIcon, ZapIcon } from "lucide-react"

import { IconList } from "./icon-list"
import { IconTile } from "./icon-tile"
import { GitHubIcon } from "./icons"

const meta = {
  title: "Components/Icons",
  component: IconTile,
  args: { children: <GitHubIcon aria-hidden="true" /> },
} satisfies Meta<typeof IconTile>

export default meta
type Story = StoryObj<typeof meta>

export const Tiles: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconTile aria-label="Fast"><ZapIcon aria-hidden="true" /></IconTile>
      <IconTile aria-label="Composable"><LayersIcon aria-hidden="true" /></IconTile>
      <IconTile aria-label="GitHub"><GitHubIcon aria-hidden="true" /></IconTile>
    </div>
  ),
}

export const FeatureList: Story = {
  render: () => <IconList className="w-[min(90vw,32rem)]" icon={CheckIcon} items={["Accessible React primitives", "Semantic theme tokens", "Restrained motion"]} />,
}

export const GitHub: Story = {
  render: () => <GitHubIcon className="size-10 text-text-primary" role="img" aria-label="GitHub" />,
}
