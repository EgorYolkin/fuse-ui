"use client"

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox"
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Combobox = ComboboxPrimitive.Root
const ComboboxPortal = ComboboxPrimitive.Portal
const ComboboxValue = ComboboxPrimitive.Value

function ComboboxInputGroup({ className, ...props }: ComboboxPrimitive.InputGroup.Props) {
  return <ComboboxPrimitive.InputGroup className={cn("flex h-9 w-64 items-center border border-input bg-surface focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30", className)} {...props} />
}

function ComboboxInput({ className, ...props }: ComboboxPrimitive.Input.Props) {
  return <ComboboxPrimitive.Input className={cn("h-full min-w-0 flex-1 border-0 bg-transparent px-3 text-sm text-text-primary outline-none placeholder:text-text-muted", className)} {...props} />
}

function ComboboxTrigger({ className, children, ...props }: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger className={cn("inline-flex h-full w-8 cursor-pointer items-center justify-center border-l border-border bg-transparent text-text-muted outline-none hover:bg-background-muted hover:text-text-primary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring", className)} {...props}>
      {children ?? <ChevronDownIcon className="size-4" aria-hidden="true" />}
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxClear({ className, children, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear className={cn("inline-flex h-full w-8 cursor-pointer items-center justify-center border-l border-border bg-transparent text-text-muted outline-none hover:bg-background-muted hover:text-text-primary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring", className)} {...props}>
      {children ?? <XIcon className="size-3.5" aria-hidden="true" />}
    </ComboboxPrimitive.Clear>
  )
}

function ComboboxPositioner({ className, sideOffset = 4, ...props }: ComboboxPrimitive.Positioner.Props) {
  return <ComboboxPrimitive.Positioner className={cn("z-50 outline-none", className)} sideOffset={sideOffset} {...props} />
}

function ComboboxPopup({ className, ...props }: ComboboxPrimitive.Popup.Props) {
  return <ComboboxPrimitive.Popup className={cn("w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) border border-border-strong bg-popover text-popover-foreground shadow-lg transition-[opacity,transform] duration-100 motion-reduce:transition-none data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0", className)} {...props} />
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return <ComboboxPrimitive.List className={cn("max-h-[min(20rem,var(--available-height))] overflow-y-auto overscroll-contain px-1 pb-1 pt-0 outline-none data-empty:p-0", className)} {...props} />
}

function ComboboxItem({ className, ...props }: ComboboxPrimitive.Item.Props) {
  return <ComboboxPrimitive.Item className={cn("relative grid min-h-9 cursor-pointer grid-cols-[1rem_1fr] items-center gap-2 px-2 py-1.5 text-sm text-text-primary outline-none select-none data-highlighted:bg-primary data-highlighted:text-primary-foreground data-disabled:pointer-events-none data-disabled:opacity-50", className)} {...props} />
}

function ComboboxItemIndicator({ className, children, ...props }: ComboboxPrimitive.ItemIndicator.Props) {
  return <ComboboxPrimitive.ItemIndicator className={cn("col-start-1 flex items-center", className)} {...props}>{children ?? <CheckIcon className="size-3.5" aria-hidden="true" />}</ComboboxPrimitive.ItemIndicator>
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return <ComboboxPrimitive.Empty className={cn("px-3 py-4 text-sm text-text-muted empty:hidden", className)} {...props} />
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return <ComboboxPrimitive.Group className={cn("pb-1 pt-0 last:pb-0", className)} {...props} />
}

function ComboboxGroupLabel({ className, ...props }: ComboboxPrimitive.GroupLabel.Props) {
  return <ComboboxPrimitive.GroupLabel className={cn("px-2 py-1 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.04em] text-text-muted", className)} {...props} />
}

export {
  Combobox,
  ComboboxClear,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxTrigger,
  ComboboxValue,
}
