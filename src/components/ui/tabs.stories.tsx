import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "storybook/test"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Tabs defaultValue="preview" className="max-w-xl">
      <TabsList aria-label="Component view">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="border border-border bg-surface p-6">
        Interactive component preview
      </TabsContent>
      <TabsContent value="code" className="border border-border bg-surface p-6">
        Installation and usage code
      </TabsContent>
      <TabsContent value="disabled">Unavailable content</TabsContent>
    </Tabs>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("tab", { name: "Code" }))
    await expect(canvas.getByRole("tabpanel", { name: "Code" })).toHaveTextContent("Installation and usage code")
    await expect(canvas.getByRole("tab", { name: "Code" })).toHaveAttribute("aria-selected", "true")
  },
}

export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="max-w-xl">
      <TabsList variant="line" aria-label="Documentation sections">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="api">API</TabsTrigger>
        <TabsTrigger value="examples">Examples</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="api">API content</TabsContent>
      <TabsContent value="examples">Example content</TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="account" orientation="vertical" className="min-h-40">
      <TabsList aria-label="Settings">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings</TabsContent>
      <TabsContent value="security">Security settings</TabsContent>
      <TabsContent value="billing">Billing settings</TabsContent>
    </Tabs>
  ),
}
