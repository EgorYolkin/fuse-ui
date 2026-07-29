import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "storybook/test"
import { Button } from "./button"
import { buttonVariants } from "./button-variants"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
const meta = { title: "Overlays/Dialog", component: Dialog } satisfies Meta<typeof Dialog>
export default meta
type Story = StoryObj<typeof meta>
export const Playground: Story = { render: () => <Dialog><DialogTrigger className={buttonVariants()}>Open dialog</DialogTrigger><DialogContent><DialogHeader><DialogTitle>Publish component?</DialogTitle><DialogDescription>This will make the current version available to consumers.</DialogDescription></DialogHeader><DialogFooter><DialogClose render={<Button variant="outline" />}>Cancel</DialogClose><DialogClose render={<Button />}>Publish</DialogClose></DialogFooter></DialogContent></Dialog>, play: async ({ canvasElement }) => { const canvas = within(canvasElement); await userEvent.click(canvas.getByRole("button", { name: "Open dialog" })); const page = within(canvasElement.ownerDocument.body); await expect(await page.findByRole("dialog")).toBeVisible(); await userEvent.click(page.getByRole("button", { name: "Cancel" })); await expect(page.queryByRole("dialog")).not.toBeInTheDocument() } }
