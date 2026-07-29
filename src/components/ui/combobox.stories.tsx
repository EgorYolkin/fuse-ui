import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "storybook/test"

import { Combobox, ComboboxClear, ComboboxEmpty, ComboboxInput, ComboboxInputGroup, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxPopup, ComboboxPortal, ComboboxPositioner, ComboboxTrigger } from "./combobox"

const frameworks = [{ value: "react", label: "React" }, { value: "vue", label: "Vue" }, { value: "svelte", label: "Svelte" }, { value: "solid", label: "Solid" }, { value: "angular", label: "Angular" }]

const meta = { title: "Components/Combobox", component: ComboboxInputGroup } satisfies Meta<typeof ComboboxInputGroup>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Combobox items={frameworks}>
      <label className="mb-1 block text-sm font-semibold text-text-primary" htmlFor="framework-combobox">Framework</label>
      <ComboboxInputGroup>
        <ComboboxInput id="framework-combobox" placeholder="Filter frameworks…" />
        <ComboboxClear aria-label="Clear selection" />
        <ComboboxTrigger aria-label="Open options" />
      </ComboboxInputGroup>
      <ComboboxPortal><ComboboxPositioner><ComboboxPopup><ComboboxEmpty>No frameworks found.</ComboboxEmpty><ComboboxList>{(item: (typeof frameworks)[number]) => <ComboboxItem key={item.value} value={item}><ComboboxItemIndicator /><span className="col-start-2">{item.label}</span></ComboboxItem>}</ComboboxList></ComboboxPopup></ComboboxPositioner></ComboboxPortal>
    </Combobox>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole("combobox", { name: "Framework" })
    await userEvent.type(input, "Sve")
    const page = within(canvasElement.ownerDocument.body)
    await userEvent.click(await page.findByRole("option", { name: "Svelte" }))
    await expect(input).toHaveValue("Svelte")
  },
}

export const EmptyResult: Story = { ...Playground, play: async ({ canvasElement }) => { const canvas = within(canvasElement); await userEvent.type(canvas.getByRole("combobox", { name: "Framework" }), "Unknown"); const page = within(canvasElement.ownerDocument.body); await expect(await page.findByText("No frameworks found.")).toBeVisible() } }
