import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "storybook/test"

import { ThemeProvider } from "./theme-provider"
import { ThemeToggle } from "./theme-toggle"

const meta = {
  title: "Foundations/Theme",
  component: ThemeToggle,
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light" storageKey="fuse-ui-storybook-theme">
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Toggle: Story = {
  beforeEach: () => {
    window.localStorage.removeItem("fuse-ui-storybook-theme")
  },
  args: {
    showLabel: true,
    variant: "outline",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toggle = canvas.getByRole("button", { name: /Light theme/ })

    await userEvent.click(toggle)
    await expect(canvas.getByRole("button", { name: /Dark theme/ })).toHaveAttribute(
      "data-resolved-theme",
      "dark",
    )
  },
}

export const IconOnly: Story = {
  args: {
    showLabel: false,
  },
}
