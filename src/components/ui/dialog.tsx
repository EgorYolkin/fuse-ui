"use client"
import type { ComponentProps } from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
const Dialog = DialogPrimitive.Root
function DialogTrigger({ className, ...props }: DialogPrimitive.Trigger.Props) { return <DialogPrimitive.Trigger data-slot="dialog-trigger" className={cn("cursor-pointer", className)} {...props} /> }
function DialogPortal(props: DialogPrimitive.Portal.Props) { return <DialogPrimitive.Portal {...props} /> }
function DialogBackdrop({ className, ...props }: DialogPrimitive.Backdrop.Props) { return <DialogPrimitive.Backdrop className={cn("fixed inset-0 bg-foreground/35 backdrop-blur-[2px] data-ending:opacity-0 data-starting:opacity-0", className)} {...props} /> }
function DialogViewport({ className, ...props }: DialogPrimitive.Viewport.Props) { return <DialogPrimitive.Viewport className={cn("fixed inset-0 flex items-center justify-center p-4", className)} {...props} /> }
function DialogPopup({ className, ...props }: DialogPrimitive.Popup.Props) { return <DialogPrimitive.Popup className={cn("relative w-full max-w-lg rounded-[2px] border border-border-strong bg-surface p-6 text-text-primary shadow-2xl outline-none", className)} {...props} /> }
function DialogContent({ children, className, showCloseButton = true, ...props }: DialogPrimitive.Popup.Props & { showCloseButton?: boolean }) { return <DialogPortal><DialogBackdrop /><DialogViewport><DialogPopup className={className} {...props}>{children}{showCloseButton && <DialogClose aria-label="Close dialog" className="absolute right-4 top-4"><XIcon /></DialogClose>}</DialogPopup></DialogViewport></DialogPortal> }
function DialogHeader({ className, ...props }: ComponentProps<"div">) { return <div className={cn("flex flex-col gap-2 pr-8", className)} {...props} /> }
function DialogFooter({ className, ...props }: ComponentProps<"div">) { return <div className={cn("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props} /> }
function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) { return <DialogPrimitive.Title className={cn("font-sans text-xl font-semibold text-text-primary", className)} {...props} /> }
function DialogDescription({ className, ...props }: DialogPrimitive.Description.Props) { return <DialogPrimitive.Description className={cn("text-sm leading-relaxed text-text-muted", className)} {...props} /> }
function DialogClose({ className, render, ...props }: DialogPrimitive.Close.Props) { return <DialogPrimitive.Close render={render} className={cn(!render && "inline-flex cursor-pointer items-center justify-center rounded-[2px] border border-transparent p-1 text-text-muted outline-none hover:border-border-subtle hover:bg-background-muted hover:text-text-primary focus-visible:ring-2 focus-visible:ring-ring/30 [&_svg]:size-4", className)} {...props} /> }
export { Dialog, DialogBackdrop, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogPopup, DialogPortal, DialogTitle, DialogTrigger, DialogViewport }
