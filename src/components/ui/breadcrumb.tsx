import type { ComponentProps, ReactNode } from "react"
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"
import { cn } from "@/lib/utils"
function Breadcrumb(props: ComponentProps<"nav">) { return <nav aria-label="Breadcrumb" data-slot="breadcrumb" {...props} /> }
function BreadcrumbList({ className, ...props }: ComponentProps<"ol">) { return <ol data-slot="breadcrumb-list" className={cn("flex flex-wrap items-center gap-2 font-mono text-xs text-text-muted", className)} {...props} /> }
function BreadcrumbItem({ className, ...props }: ComponentProps<"li">) { return <li data-slot="breadcrumb-item" className={cn("inline-flex items-center gap-2", className)} {...props} /> }
function BreadcrumbLink({ className, ...props }: ComponentProps<"a">) { return <a data-slot="breadcrumb-link" className={cn("cursor-pointer text-text-secondary underline-offset-4 hover:text-text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30", className)} {...props} /> }
function BreadcrumbPage({ className, ...props }: ComponentProps<"span">) { return <span data-slot="breadcrumb-page" aria-current="page" className={cn("font-semibold text-text-primary", className)} {...props} /> }
function BreadcrumbSeparator({ children, className, ...props }: ComponentProps<"li"> & { children?: ReactNode }) { return <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className={cn("text-border-strong [&_svg]:size-3", className)} {...props}>{children ?? <ChevronRightIcon />}</li> }
function BreadcrumbEllipsis({ className, ...props }: ComponentProps<"span">) { return <span data-slot="breadcrumb-ellipsis" aria-label="More" className={cn("inline-flex size-6 items-center justify-center", className)} {...props}><MoreHorizontalIcon className="size-4" aria-hidden="true" /></span> }
export { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator }
