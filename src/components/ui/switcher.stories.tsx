import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fn, userEvent, within } from "storybook/test"

import { Switcher } from "./locale-switcher"

const options = [
  { value: "en", label: "English" },
  { value: "ru", label: "Русский" },
  { value: "de", label: "Deutsch" },
] as const

function SwitcherExample() {
  const [locale, setLocale] = useState<(typeof options)[number]["value"]>("en")
  return <Switcher value={locale} options={[...options]} onChange={setLocale} label="Select language" />
}

const meta = {
  title: "Components/Switcher",
  component: Switcher,
  args: {
    value: "en",
    options: [...options],
    onChange: fn(),
    label: "Select language",
  },
} satisfies Meta<typeof Switcher>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => <SwitcherExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("combobox", { name: "Select language" }))
    const page = within(canvasElement.ownerDocument.body)
    await userEvent.click(await page.findByRole("option", { name: "Русский" }))
    await expect(canvas.getByRole("combobox", { name: "Select language" })).toHaveTextContent("Русский")
  },
}
