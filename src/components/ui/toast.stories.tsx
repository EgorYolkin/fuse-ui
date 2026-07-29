import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./button"
import { ToastProvider, useToast } from "./toast"
function Demo() { const toast = useToast(); return <Button onClick={() => toast.add({ title: "Component published", description: "Version 0.4.0 is available." })}>Show notification</Button> }
const meta = { title: "Feedback/Toast", component: ToastProvider } satisfies Meta<typeof ToastProvider>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { render: () => <ToastProvider timeout={0}><Demo /></ToastProvider> }
