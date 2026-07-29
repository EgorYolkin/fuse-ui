import type { Meta, StoryObj } from "@storybook/react-vite"
import { Skeleton } from "./skeleton"
const meta = { title: "Feedback/Skeleton", component: Skeleton } satisfies Meta<typeof Skeleton>
export default meta
type Story = StoryObj<typeof meta>
export const Card: Story = { render: () => <div className="flex w-80 gap-4 border border-border bg-surface p-4"><Skeleton className="size-12" /><div className="flex flex-1 flex-col gap-2"><Skeleton className="h-4 w-2/3" /><Skeleton className="h-3 w-full" /><Skeleton className="h-3 w-4/5" /></div></div> }
