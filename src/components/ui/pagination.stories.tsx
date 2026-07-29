import type { Meta, StoryObj } from "@storybook/react-vite"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./pagination"
const meta = { title: "Navigation/Pagination", component: Pagination } satisfies Meta<typeof Pagination>
export default meta
type Story = StoryObj<typeof meta>
export const Playground: Story = { render: () => <Pagination><PaginationContent><PaginationItem><PaginationPrevious href="#1" /></PaginationItem><PaginationItem><PaginationLink href="#1">1</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="#2" isActive>2</PaginationLink></PaginationItem><PaginationItem><PaginationNext href="#3" /></PaginationItem></PaginationContent></Pagination> }
