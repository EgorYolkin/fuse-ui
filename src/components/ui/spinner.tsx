import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
interface SpinnerProps extends ComponentProps<"span"> { label?: string; size?: "sm" | "default" | "lg" }
function Spinner({ className, label = "Loading", size = "default", ...props }: SpinnerProps) { return <span data-slot="spinner" data-size={size} role="status" aria-label={label} className={cn("square-spinner", className)} {...props}><span className="square-spinner-shape" aria-hidden="true" /></span> }
export { Spinner }
export type { SpinnerProps }
