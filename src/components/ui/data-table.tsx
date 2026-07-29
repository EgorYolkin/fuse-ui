"use client"

import { useMemo, useRef, useState, type ReactNode } from "react"
import { SearchIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface DataTableColumn<T> { id: string; header: ReactNode; cell: (row: T) => ReactNode; className?: string }
interface DataTableProps<T> { data: T[]; columns: DataTableColumn<T>[]; getRowId: (row: T, index: number) => string; getSearchValue?: (row: T) => string; filterPlaceholder?: string; filterLabel?: string; emptyMessage?: ReactNode; className?: string }

function DataTable<T>({ data, columns, getRowId, getSearchValue = row => Object.values(row as Record<string, unknown>).join(" "), filterPlaceholder = "Filter rows…", filterLabel = "Filter table", emptyMessage = "No results.", className }: DataTableProps<T>) {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const rows = useMemo(() => { const value = query.trim().toLocaleLowerCase(); return value ? data.filter(row => getSearchValue(row).toLocaleLowerCase().includes(value)) : data }, [data, getSearchValue, query])

  return <div data-slot="data-table" className={cn("overflow-hidden rounded-[2px] border border-border bg-surface", className)}>
    <div className="flex items-center border-b border-border bg-surface-elevated">
      <SearchIcon className="ml-3 size-4 shrink-0 text-text-muted" aria-hidden="true" />
      <input ref={inputRef} type="text" role="searchbox" value={query} onChange={event => setQuery(event.target.value)} placeholder={filterPlaceholder} aria-label={filterLabel} className="h-10 min-w-0 flex-1 border-0 bg-transparent px-3 font-mono text-xs text-text-primary outline-none placeholder:text-text-muted" />
      {query && <button type="button" aria-label="Clear filter" onClick={() => { setQuery(""); inputRef.current?.focus() }} className="inline-flex h-10 w-10 cursor-pointer items-center justify-center border-l border-border bg-transparent text-text-muted outline-none hover:bg-background-muted hover:text-text-primary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"><XIcon className="size-3.5" aria-hidden="true" /></button>}
      <span className="px-3 font-mono text-[0.6875rem] text-text-muted" aria-live="polite">{rows.length}/{data.length}</span>
    </div>
    <div className="overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><thead className="bg-background-muted font-mono text-[0.6875rem] uppercase tracking-[0.04em] text-text-muted"><tr>{columns.map(column => <th key={column.id} scope="col" className={cn("border-b border-border px-4 py-3 font-semibold", column.className)}>{column.header}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={getRowId(row, index)} className="border-b border-border-subtle last:border-b-0 hover:bg-background-muted/60">{columns.map(column => <td key={column.id} className={cn("px-4 py-3 text-text-secondary", column.className)}>{column.cell(row)}</td>)}</tr>)}{rows.length === 0 && <tr><td colSpan={columns.length} className="px-4 py-10 text-center text-text-muted">{emptyMessage}</td></tr>}</tbody></table></div>
  </div>
}
export { DataTable }
export type { DataTableColumn, DataTableProps }
