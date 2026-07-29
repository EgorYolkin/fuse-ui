import type { ComponentProps } from "react"
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./button-variants"
function Pagination({ className, ...props }: ComponentProps<"nav">) { return <nav data-slot="pagination" aria-label="Pagination" className={cn("flex w-full justify-center", className)} {...props} /> }
function PaginationContent({ className, ...props }: ComponentProps<"ul">) { return <ul data-slot="pagination-content" className={cn("flex items-center gap-1", className)} {...props} /> }
function PaginationItem(props: ComponentProps<"li">) { return <li data-slot="pagination-item" {...props} /> }
interface PaginationLinkProps extends ComponentProps<"a"> { isActive?: boolean; size?: "default" | "icon" }
function PaginationLink({ className, isActive, size = "icon", ...props }: PaginationLinkProps) { return <a data-slot="pagination-link" aria-current={isActive ? "page" : undefined} className={cn(buttonVariants({ variant: isActive ? "outline" : "ghost", size }), "cursor-pointer", className)} {...props} /> }
function PaginationPrevious({ className, children = "Previous", ...props }: ComponentProps<typeof PaginationLink>) { return <PaginationLink aria-label="Go to previous page" size="default" className={cn("gap-1", className)} {...props}><ChevronLeftIcon />{children}</PaginationLink> }
function PaginationNext({ className, children = "Next", ...props }: ComponentProps<typeof PaginationLink>) { return <PaginationLink aria-label="Go to next page" size="default" className={cn("gap-1", className)} {...props}>{children}<ChevronRightIcon /></PaginationLink> }
function PaginationEllipsis({ className, ...props }: ComponentProps<"span">) { return <span data-slot="pagination-ellipsis" aria-label="More pages" className={cn("flex size-9 items-center justify-center text-text-muted", className)} {...props}><MoreHorizontalIcon className="size-4" /></span> }
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious }
export type { PaginationLinkProps }
