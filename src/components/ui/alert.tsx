import type { HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative grid w-full grid-cols-1 gap-x-3 gap-y-1 border bg-surface p-4 text-sm text-text-primary has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:[&_[data-slot=alert-title]]:col-start-2 has-[>svg]:[&_[data-slot=alert-description]]:col-start-2 [&>svg]:mt-0.5 [&>svg]:size-4",
  {
    variants: {
      variant: {
        default: "border-border-strong",
        info: "border-sky-500/60 bg-sky-500/8 text-sky-950 dark:text-sky-100",
        success: "border-emerald-500/60 bg-emerald-500/8 text-emerald-950 dark:text-emerald-100",
        warning: "border-amber-500/70 bg-amber-500/10 text-amber-950 dark:text-amber-100",
        destructive: "border-destructive/60 bg-destructive/10 text-destructive",
      },
    },
    defaultVariants: { variant: "default" },
  },
)

function Alert({ className, variant, ...props }: HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>) {
  return <div role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
}

function AlertTitle({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="alert-title" className={cn("font-sans font-semibold leading-5", className)} {...props} />
}

function AlertDescription({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="alert-description" className={cn("text-current/75 leading-relaxed [&_p]:leading-relaxed", className)} {...props} />
}

function AlertActions({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("col-span-full mt-2 flex flex-wrap justify-end gap-2", className)} {...props} />
}

export { Alert, AlertActions, AlertDescription, AlertTitle, alertVariants }
