import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "storybook/test"

import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, AccordionTrigger } from "./accordion"

const meta = { title: "Components/Accordion", component: Accordion } satisfies Meta<typeof Accordion>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Accordion defaultValue={["accessibility"]} className="w-[min(90vw,36rem)]">
      <AccordionItem value="accessibility">
        <AccordionHeader><AccordionTrigger>Is it accessible?</AccordionTrigger></AccordionHeader>
        <AccordionPanel>Keyboard navigation, focus management, and ARIA relationships are provided by Base UI.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="theme">
        <AccordionHeader><AccordionTrigger>Does it support themes?</AccordionTrigger></AccordionHeader>
        <AccordionPanel>Every surface uses Fuse UI semantic tokens in light and dark modes.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="disabled" disabled>
        <AccordionHeader><AccordionTrigger>Unavailable section</AccordionTrigger></AccordionHeader>
        <AccordionPanel>This panel cannot be opened.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("button", { name: "Does it support themes?" }))
    await expect(canvas.getByText(/semantic tokens/)).toBeVisible()
  },
}

export const Multiple: Story = {
  render: () => (
    <Accordion multiple defaultValue={["one", "two"]} className="w-[min(90vw,36rem)]">
      <AccordionItem value="one"><AccordionHeader><AccordionTrigger>First panel</AccordionTrigger></AccordionHeader><AccordionPanel>First panel content.</AccordionPanel></AccordionItem>
      <AccordionItem value="two"><AccordionHeader><AccordionTrigger>Second panel</AccordionTrigger></AccordionHeader><AccordionPanel>Second panel content.</AccordionPanel></AccordionItem>
    </Accordion>
  ),
}
