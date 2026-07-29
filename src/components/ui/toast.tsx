"use client"
import type { ReactNode } from "react"
import { Toast as ToastPrimitive } from "@base-ui/react/toast"
import { XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
interface ToastProviderProps extends ToastPrimitive.Provider.Props { children?: ReactNode }
function ToastList() { const manager = ToastPrimitive.useToastManager(); return <ToastPrimitive.Portal><ToastPrimitive.Viewport className="fixed bottom-4 right-4 flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-2">{manager.toasts.map(toast => <ToastPrimitive.Root key={toast.id} toast={toast} className={cn("relative flex min-h-16 w-full border border-border-strong bg-surface p-4 pr-10 shadow-xl", toast.type === "destructive" && "border-destructive/50 bg-destructive/10")}><ToastPrimitive.Content><ToastPrimitive.Title className="font-sans text-sm font-semibold" /><ToastPrimitive.Description className="mt-1 text-sm text-text-muted" /></ToastPrimitive.Content><ToastPrimitive.Close aria-label="Dismiss notification" className="absolute right-3 top-3 cursor-pointer"><XIcon className="size-4" /></ToastPrimitive.Close></ToastPrimitive.Root>)}</ToastPrimitive.Viewport></ToastPrimitive.Portal> }
function ToastProvider({ children, ...props }: ToastProviderProps) { return <ToastPrimitive.Provider {...props}>{children}<ToastList /></ToastPrimitive.Provider> }
const useToast = ToastPrimitive.useToastManager
const createToastManager = ToastPrimitive.createToastManager
export { createToastManager, ToastProvider, useToast }
export type { ToastProviderProps }
