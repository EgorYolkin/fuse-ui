import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fn, userEvent, within } from "storybook/test"
import { PlusIcon } from "lucide-react"

import { Button } from "./button"

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Save changes",
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    variant: "default",
    size: "default",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("button", { name: "Save changes" }))
    await expect(args.onClick).toHaveBeenCalledOnce()
  },
}

export const AllVariants: Story = {
  args: {
    onClick: undefined,
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      {(["default", "outline", "secondary", "ghost", "destructive", "link"] as const).map(
        (variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        ),
      )}
    </div>
  ),
}

export const Sizes: Story = {
  args: {
    onClick: undefined,
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      {(["xs", "sm", "default", "lg"] as const).map((size) => (
        <Button key={size} size={size}>
          {size}
        </Button>
      ))}
      <Button size="icon" aria-label="Add item">
        <PlusIcon />
      </Button>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    variant: "outline",
  },
}
