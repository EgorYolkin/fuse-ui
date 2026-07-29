import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
function Skeleton({ className, ...props }: ComponentProps<"div">) { return <div data-slot="skeleton" aria-hidden="true" className={cn("skeleton bg-background-muted", className)} {...props} /> }
export { Skeleton }
