"use client"

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"
import { cva, type VariantProps } from "class-variance-authority"
import type { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

const avatarVariants = cva("inline-flex shrink-0 items-center justify-center overflow-hidden border border-border-strong bg-background-muted align-middle font-mono font-semibold text-text-primary select-none", {
  variants: {
    size: { sm: "size-7 text-[0.625rem]", default: "size-9 text-xs", lg: "size-12 text-sm" },
    shape: { square: "rounded-[2px]", circle: "rounded-full" },
  },
  defaultVariants: { size: "default", shape: "square" },
})

function Avatar({ className, size, shape, ...props }: AvatarPrimitive.Root.Props & VariantProps<typeof avatarVariants>) {
  return <AvatarPrimitive.Root data-slot="avatar" className={cn(avatarVariants({ size, shape }), className)} {...props} />
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return <AvatarPrimitive.Image className={cn("size-full object-cover", className)} {...props} />
}

function AvatarFallback({ className, ...props }: AvatarPrimitive.Fallback.Props) {
  return <AvatarPrimitive.Fallback className={cn("flex size-full items-center justify-center uppercase", className)} {...props} />
}

function AvatarGroup({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div role="group" className={cn("flex -space-x-2 [&_[data-slot=avatar]]:ring-2 [&_[data-slot=avatar]]:ring-background", className)} {...props} />
}

function AvatarGroupCount({ className, size, shape, ...props }: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof avatarVariants>) {
  return (
    <span
      data-slot="avatar"
      className={cn(avatarVariants({ size, shape }), "relative bg-surface text-text-muted ring-2 ring-background", className)}
      {...props}
    />
  )
}

export { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage, avatarVariants }
