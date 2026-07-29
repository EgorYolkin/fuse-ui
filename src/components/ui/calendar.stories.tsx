import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Calendar } from "./calendar"
const meta = { title: "Components/Calendar", component: Calendar } satisfies Meta<typeof Calendar>
export default meta
type Story = StoryObj<typeof meta>
function Example() { const [selected, setSelected] = useState<Date | undefined>(new Date(2024, 6, 16)); return <Calendar mode="single" defaultMonth={new Date(2024, 6)} selected={selected} onSelect={setSelected} /> }
export const SingleDate: Story = { render: () => <Example /> }
