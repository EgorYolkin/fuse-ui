"use client"

import { createContext, useCallback, useContext, useEffect, useState, type ComponentProps } from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./button"

type CarouselApi = UseEmblaCarouselType[1]
type CarouselOptions = NonNullable<Parameters<typeof useEmblaCarousel>[0]>
type CarouselPlugin = NonNullable<Parameters<typeof useEmblaCarousel>[1]>[number]

interface CarouselProps extends ComponentProps<"div"> {
  opts?: CarouselOptions
  plugins?: CarouselPlugin[]
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

interface CarouselContextValue {
  carouselRef: UseEmblaCarouselType[0]
  api: CarouselApi
  orientation: "horizontal" | "vertical"
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const context = useContext(CarouselContext)
  if (!context) throw new Error("useCarousel must be used within Carousel")
  return context
}

function Carousel({ orientation = "horizontal", opts, plugins, setApi, className, children, "aria-label": ariaLabel = "Carousel", ...props }: CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel({ ...opts, axis: orientation === "horizontal" ? "x" : "y" }, plugins)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateState = useCallback((embla: NonNullable<CarouselApi>) => {
    setCanScrollPrev(embla.canScrollPrev())
    setCanScrollNext(embla.canScrollNext())
  }, [])

  useEffect(() => {
    if (!api) return
    setApi?.(api)
    api.on("reInit", updateState).on("select", updateState)
    api.emit("select")
    return () => { api.off("reInit", updateState).off("select", updateState) }
  }, [api, setApi, updateState])

  return (
    <CarouselContext.Provider value={{ carouselRef, api, orientation, scrollPrev: () => api?.scrollPrev(), scrollNext: () => api?.scrollNext(), canScrollPrev, canScrollNext }}>
      <div data-slot="carousel" data-orientation={orientation} role="region" aria-roledescription="carousel" aria-label={ariaLabel} className={cn("relative", className)} {...props}>{children}</div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel()
  return <div ref={carouselRef} data-slot="carousel-content" className="overflow-hidden"><div className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 h-[24rem] flex-col", className)} {...props} /></div>
}

function CarouselItem({ className, ...props }: ComponentProps<"div">) {
  const { orientation } = useCarousel()
  return <div data-slot="carousel-item" role="group" aria-roledescription="slide" className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)} {...props} />
}

function CarouselPrevious({ className, onClick, children, "aria-label": ariaLabel = "Previous slide", ...props }: ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
  return (
    <Button
      {...props}
      data-slot="carousel-previous"
      type="button"
      variant="outline"
      size="icon-sm"
      disabled={!canScrollPrev || props.disabled}
      aria-label={ariaLabel}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) scrollPrev()
      }}
      className={cn("absolute", orientation === "horizontal" ? "left-2 top-1/2 -translate-y-1/2" : "left-1/2 top-2 -translate-x-1/2 rotate-90", className)}
    >
      {children ?? <ArrowLeftIcon aria-hidden="true" />}
    </Button>
  )
}

function CarouselNext({ className, onClick, children, "aria-label": ariaLabel = "Next slide", ...props }: ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()
  return (
    <Button
      {...props}
      data-slot="carousel-next"
      type="button"
      variant="outline"
      size="icon-sm"
      disabled={!canScrollNext || props.disabled}
      aria-label={ariaLabel}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) scrollNext()
      }}
      className={cn("absolute", orientation === "horizontal" ? "right-2 top-1/2 -translate-y-1/2" : "bottom-2 left-1/2 -translate-x-1/2 rotate-90", className)}
    >
      {children ?? <ArrowRightIcon aria-hidden="true" />}
    </Button>
  )
}

export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, useCarousel }
export type { CarouselApi, CarouselOptions, CarouselPlugin, CarouselProps }
