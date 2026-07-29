import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "storybook/test"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel"

const meta = { title: "Components/Carousel", component: Carousel, parameters: { layout: "centered" } } satisfies Meta<typeof Carousel>
export default meta
type Story = StoryObj<typeof meta>

const slides = ["FOUNDATIONS", "COMPONENTS", "PATTERNS"]

export const Playground: Story = {
  render: () => (
    <Carousel className="w-[min(70vw,32rem)]" aria-label="Fuse UI sections">
      <CarouselContent>
        {slides.map((slide, index) => <CarouselItem key={slide} aria-label={`${index + 1} of ${slides.length}`}><div className="flex h-64 items-center justify-center border border-border bg-surface"><span className="font-mono text-sm text-text-muted">0{index + 1} / {slide}</span></div></CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const next = canvas.getByRole("button", { name: "Next slide" })
    await expect(next).toBeEnabled()
    await userEvent.click(next)
    await expect(canvas.getByRole("button", { name: "Previous slide" })).toBeEnabled()
  },
}

export const TwoAtATime: Story = { render: () => <Carousel className="w-[min(75vw,42rem)]"><CarouselContent>{slides.map((slide, index) => <CarouselItem key={slide} aria-label={`${index + 1} of ${slides.length}`} className="basis-1/2"><div className="flex h-48 items-center justify-center border border-border bg-surface font-mono text-xs">{slide}</div></CarouselItem>)}</CarouselContent><CarouselPrevious /><CarouselNext /></Carousel> }
