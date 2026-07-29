import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "storybook/test"

import { Checkbox } from "./checkbox"

const meta = { title: "Components/Checkbox", component: Checkbox } satisfies Meta<typeof Checkbox>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => <label className="flex cursor-pointer items-center gap-2 text-sm text-text-primary"><Checkbox defaultChecked /> Enable notifications</label>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole("checkbox", { name: "Enable notifications" })
    await expect(checkbox).toBeChecked()
    await userEvent.click(checkbox)
    await expect(checkbox).not.toBeChecked()
  },
}

export const States: Story = { render: () => <div className="grid gap-3"><label className="flex items-center gap-2 text-sm"><Checkbox /> Unchecked</label><label className="flex items-center gap-2 text-sm"><Checkbox defaultChecked /> Checked</label><label className="flex items-center gap-2 text-sm"><Checkbox indeterminate /> Indeterminate</label><label className="flex items-center gap-2 text-sm opacity-60"><Checkbox disabled /> Disabled</label></div> }
