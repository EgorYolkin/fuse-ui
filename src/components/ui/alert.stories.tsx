import type { Meta, StoryObj } from "@storybook/react-vite"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, XCircleIcon } from "lucide-react"

import { Alert, AlertActions, AlertDescription, AlertTitle } from "./alert"
import { Button } from "./button"

const meta = { title: "Components/Alert", component: Alert, args: { variant: "default" }, argTypes: { variant: { control: "select", options: ["default", "info", "success", "warning", "destructive"] } } } satisfies Meta<typeof Alert>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Alert {...args}><InfoIcon aria-hidden="true" /><AlertTitle>System notice</AlertTitle><AlertDescription>The component library has been updated successfully.</AlertDescription></Alert>,
}

export const Variants: Story = {
  render: () => (
    <div className="grid w-full max-w-2xl gap-4">
      <Alert variant="info"><InfoIcon aria-hidden="true" /><AlertTitle>Information</AlertTitle><AlertDescription>A new version is available.</AlertDescription></Alert>
      <Alert variant="success"><CircleCheckIcon aria-hidden="true" /><AlertTitle>Deployment complete</AlertTitle><AlertDescription>All production checks passed.</AlertDescription></Alert>
      <Alert variant="warning"><TriangleAlertIcon aria-hidden="true" /><AlertTitle>Review required</AlertTitle><AlertDescription>Two settings still use default values.</AlertDescription></Alert>
      <Alert variant="destructive"><XCircleIcon aria-hidden="true" /><AlertTitle>Build failed</AlertTitle><AlertDescription>Resolve type errors before publishing.</AlertDescription></Alert>
      <Alert><AlertTitle>Without an icon</AlertTitle><AlertDescription>Icons are optional.</AlertDescription></Alert>
    </div>
  ),
}

export const WithActions: Story = {
  render: () => <Alert variant="warning" className="max-w-xl"><TriangleAlertIcon aria-hidden="true" /><AlertTitle>Unsaved changes</AlertTitle><AlertDescription>Save or discard your changes before leaving.</AlertDescription><AlertActions><Button size="sm" variant="ghost">Discard</Button><Button size="sm">Save</Button></AlertActions></Alert>,
}
