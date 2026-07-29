import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "storybook/test"
import { DataTable, type DataTableColumn } from "./data-table"
type Row = { id: string; name: string; status: string }
const data: Row[] = [{ id: "1", name: "Core components", status: "Stable" }, { id: "2", name: "Calendar package", status: "Preview" }, { id: "3", name: "Theme tokens", status: "Stable" }]
const columns: DataTableColumn<Row>[] = [{ id: "name", header: "Package", cell: row => row.name }, { id: "status", header: "Status", cell: row => row.status }]
const meta = { title: "Data/DataTable", component: DataTable, args: { data: [], columns: [], getRowId: (_row, index) => String(index) } } satisfies Meta<typeof DataTable>
export default meta
type Story = StoryObj<typeof meta>
export const Filterable: Story = { render: () => <DataTable data={data} columns={columns} getRowId={row => row.id} />, play: async ({ canvasElement }) => { const canvas = within(canvasElement); const input = canvas.getByRole("searchbox", { name: "Filter table" }); await userEvent.type(input, "calendar"); await expect(canvas.getByRole("button", { name: "Clear filter" })).toBeVisible(); await userEvent.click(canvas.getByRole("button", { name: "Clear filter" })); await expect(input).toHaveValue("") } }
