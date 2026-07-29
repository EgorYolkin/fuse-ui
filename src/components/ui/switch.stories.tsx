import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "storybook/test"

import { Switch } from "./switch"

const meta = {
  title: "Components/Switch",
  component: Switch,
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-text-primary">
      <Switch defaultChecked />
      Enable notifications
    </label>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const control = canvas.getByRole("switch", { name: "Enable notifications" })

    await expect(control).toBeChecked()
    await userEvent.click(control)
    await expect(control).not.toBeChecked()
  },
}

export const States: Story = {
  render: () => (
    <div className="grid gap-4">
      <label className="flex items-center gap-3 text-sm text-text-primary"><Switch /> Off</label>
      <label className="flex items-center gap-3 text-sm text-text-primary"><Switch defaultChecked /> On</label>
      <label className="flex items-center gap-3 text-sm text-text-muted"><Switch disabled /> Disabled</label>
      <label className="flex items-center gap-3 text-sm text-text-muted"><Switch defaultChecked disabled /> On and disabled</label>
    </div>
  ),
}
