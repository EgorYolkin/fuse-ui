"use client"

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { PlusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return <AccordionPrimitive.Root className={cn("w-full min-w-0 border border-border bg-surface", className)} {...props} />
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return <AccordionPrimitive.Item className={cn("min-w-0 border-b border-border last:border-b-0", className)} {...props} />
}

function AccordionHeader({ className, ...props }: AccordionPrimitive.Header.Props) {
  return <AccordionPrimitive.Header className={cn("m-0", className)} {...props} />
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Trigger
      className={cn("group flex min-h-12 w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-4 py-3 text-left text-sm font-semibold text-text-primary transition-colors outline-none hover:bg-background-muted focus-visible:relative focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className)}
      {...props}
    >
      {children}
      <PlusIcon className="size-4 shrink-0 transition-transform duration-150 motion-reduce:transition-none group-data-panel-open:rotate-45" aria-hidden="true" />
    </AccordionPrimitive.Trigger>
  )
}

function AccordionPanel({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      className={cn("w-full min-w-0 h-(--accordion-panel-height) overflow-hidden text-sm text-text-secondary transition-[height] duration-150 motion-reduce:transition-none data-ending-style:h-0 data-starting-style:h-0", className)}
      {...props}
    >
      <div className="border-t border-border-subtle px-4 py-4 leading-relaxed">{children}</div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionHeader, AccordionItem, AccordionPanel, AccordionTrigger }
