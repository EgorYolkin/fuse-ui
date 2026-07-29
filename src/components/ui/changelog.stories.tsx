import type { Meta, StoryObj } from "@storybook/react-vite"

import changelog from "../../../CHANGELOG.md?raw"

const meta = {
  title: "Project/Changelog",
  parameters: { layout: "padded", controls: { disable: true } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function ChangelogView() {
  return (
    <article className="mx-auto max-w-3xl border border-border bg-surface text-text-secondary">
      <header className="hatched-header border-b border-border px-5 py-3 font-mono text-xs font-semibold text-text-muted">
        RELEASE NOTES / CHANGELOG.md
      </header>
      <div className="flex flex-col gap-2 p-6">
        {changelog.split("\n").map((line, index) => {
          if (line.startsWith("# ")) return <h1 key={index} className="mb-3 font-sans text-3xl font-semibold text-text-primary">{line.slice(2)}</h1>
          if (line.startsWith("## ")) return <h2 key={index} className="mt-8 border-b border-border pb-2 font-sans text-xl font-semibold text-text-primary first:mt-0">{line.slice(3)}</h2>
          if (line.startsWith("### ")) return <h3 key={index} className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.06em] text-text-primary">{line.slice(4)}</h3>
          if (line.startsWith("- ")) return <p key={index} className="pl-4 text-sm leading-relaxed before:-ml-4 before:mr-2 before:content-['—']">{line.slice(2)}</p>
          if (!line.trim() || line.startsWith("[")) return null
          return <p key={index} className="text-sm leading-relaxed text-text-muted">{line}</p>
        })}
      </div>
    </article>
  )
}

export const Releases: Story = { render: () => <ChangelogView /> }
