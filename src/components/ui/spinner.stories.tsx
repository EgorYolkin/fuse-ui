import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./button"
import { Spinner } from "./spinner"
const meta = { title: "Feedback/Spinner", component: Spinner, args: { size: "default", label: "Loading" }, argTypes: { size: { control: "radio", options: ["sm", "default", "lg"] } } } satisfies Meta<typeof Spinner>
export default meta
type Story = StoryObj<typeof meta>
export const Playground: Story = {}
export const Sizes: Story = { render: () => <div className="flex items-center gap-5"><Spinner size="sm" /><Spinner /><Spinner size="lg" /></div> }
export const InButton: Story = { render: () => <Button disabled><Spinner size="sm" data-icon="inline-start" />Loading</Button> }
