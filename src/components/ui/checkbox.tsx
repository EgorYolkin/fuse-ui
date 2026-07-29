"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { CheckIcon, MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({ className, children, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn("group/checkbox inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-[1px] border border-border-strong bg-surface text-primary-foreground outline-none transition-colors data-checked:bg-primary data-indeterminate:bg-primary focus-visible:ring-2 focus-visible:ring-ring/30 data-disabled:cursor-not-allowed data-disabled:opacity-50", className)}
      {...props}
    >
      {children ?? (
        <CheckboxPrimitive.Indicator className="flex items-center justify-center data-unchecked:hidden">
          <CheckIcon className="size-3 group-data-indeterminate/checkbox:hidden" aria-hidden="true" />
          <MinusIcon className="hidden size-3 group-data-indeterminate/checkbox:block" aria-hidden="true" />
        </CheckboxPrimitive.Indicator>
      )}
    </CheckboxPrimitive.Root>
  )
}

const CheckboxIndicator = CheckboxPrimitive.Indicator

export { Checkbox, CheckboxIndicator }
