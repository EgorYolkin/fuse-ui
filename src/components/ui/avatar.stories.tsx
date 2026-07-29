import type { Meta, StoryObj } from "@storybook/react-vite"

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "./avatar"

const portrait = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' fill='%23d5dae1'/%3E%3Ccircle cx='48' cy='38' r='18' fill='%236b7280'/%3E%3Cpath d='M18 96c3-25 14-37 30-37s27 12 30 37' fill='%234b5563'/%3E%3C/svg%3E"
const portraitWarm = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' fill='%23fde68a'/%3E%3Ccircle cx='48' cy='37' r='18' fill='%23b45309'/%3E%3Cpath d='M15 96c4-25 16-37 33-37s29 12 33 37' fill='%2378350f'/%3E%3C/svg%3E"
const portraitCool = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' fill='%23bfdbfe'/%3E%3Ccircle cx='48' cy='37' r='18' fill='%231d4ed8'/%3E%3Cpath d='M15 96c4-25 16-37 33-37s29 12 33 37' fill='%231e3a8a'/%3E%3C/svg%3E"

const meta = { title: "Components/Avatar", component: Avatar, args: { size: "default", shape: "square" }, argTypes: { size: { control: "select", options: ["sm", "default", "lg"] }, shape: { control: "radio", options: ["square", "circle"] } } } satisfies Meta<typeof Avatar>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = { render: (args) => <Avatar {...args}><AvatarImage src={portrait} alt="User portrait" /><AvatarFallback>EY</AvatarFallback></Avatar> }

export const Images: Story = { render: () => <div className="flex items-center gap-3"><Avatar size="lg"><AvatarImage src={portrait} alt="Neutral profile" /><AvatarFallback>NP</AvatarFallback></Avatar><Avatar size="lg" shape="circle"><AvatarImage src={portraitWarm} alt="Warm profile" /><AvatarFallback>WP</AvatarFallback></Avatar><Avatar size="lg"><AvatarImage src={portraitCool} alt="Cool profile" /><AvatarFallback>CP</AvatarFallback></Avatar></div> }

export const Fallbacks: Story = { render: () => <div className="flex items-center gap-3"><Avatar size="sm"><AvatarFallback>EY</AvatarFallback></Avatar><Avatar><AvatarFallback>AK</AvatarFallback></Avatar><Avatar size="lg" shape="circle"><AvatarFallback>MS</AvatarFallback></Avatar></div> }

export const Group: Story = { render: () => <AvatarGroup aria-label="Project members"><Avatar><AvatarFallback>EY</AvatarFallback></Avatar><Avatar><AvatarFallback>AK</AvatarFallback></Avatar><Avatar shape="circle"><AvatarFallback>MS</AvatarFallback></Avatar><AvatarGroupCount>+8</AvatarGroupCount></AvatarGroup> }
