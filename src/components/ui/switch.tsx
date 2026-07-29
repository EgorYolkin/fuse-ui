"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import { cn } from "@/lib/utils"

function Switch({ className, children, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "group/switch inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-[2px] border border-border-strong bg-surface p-0.5 outline-none transition-colors duration-150 data-checked:bg-primary focus-visible:ring-2 focus-visible:ring-ring/30 data-disabled:cursor-not-allowed data-disabled:opacity-50 motion-reduce:transition-none",
        className,
      )}
      {...props}
    >
      {children ?? <SwitchThumb />}
    </SwitchPrimitive.Root>
  )
}

function SwitchThumb({ className, ...props }: SwitchPrimitive.Thumb.Props) {
  return (
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      className={cn(
        "block size-3.5 translate-x-0 rounded-[1px] bg-text-primary transition-[translate,background-color] duration-150 data-checked:translate-x-4 data-checked:bg-primary-foreground motion-reduce:transition-none",
        className,
      )}
      {...props}
    />
  )
}

export { Switch, SwitchThumb }
