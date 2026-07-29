import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fn, userEvent, within } from "storybook/test"

import { Code, CodeBlock } from "./code-block"

const example = `import { Button } from "@egoryolkin/fuse-ui"

export function SaveButton() {
  return <Button variant="default">Save changes</Button>
}`

const meta = {
  title: "Components/Code",
  component: CodeBlock,
  parameters: { layout: "padded" },
  args: { code: example, language: "tsx", label: "button.tsx", showLineNumbers: true, copyable: true },
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  play: async ({ canvasElement }) => {
    const writeText = fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    })

    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("button", { name: "Copy button.tsx" }))
    await expect(writeText).toHaveBeenCalledWith(example)
    await expect(canvas.getByText("Copied")).toBeVisible()
  },
}

export const WithoutLineNumbers: Story = {
  args: { showLineNumbers: false, label: undefined },
}

export const WithoutCopy: Story = {
  args: { copyable: false },
}

export const InlineCode: Story = {
  render: () => <p className="text-text-secondary">Run <Code>npm run storybook</Code> to open the workbench.</p>,
}
