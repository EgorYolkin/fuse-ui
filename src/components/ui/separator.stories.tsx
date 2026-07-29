import type { Meta, StoryObj } from "@storybook/react-vite"
import { Separator } from "./separator"
const meta = { title: "Layout/Separator", component: Separator, args: { orientation: "horizontal" } } satisfies Meta<typeof Separator>
export default meta
type Story = StoryObj<typeof meta>
export const Horizontal: Story = { render: args => <div className="w-80 border border-border bg-surface p-4"><p className="mb-3 text-sm">Metadata</p><Separator {...args} /><p className="mt-3 text-sm text-text-muted">Component details</p></div> }
export const Vertical: Story = { args: { orientation: "vertical" }, render: args => <div className="flex h-10 items-center gap-3 border border-border bg-surface px-4"><span>Preview</span><Separator {...args} /><span>Code</span></div> }
