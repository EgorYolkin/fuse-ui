import { Children } from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StaggeredListProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal";
  offset?: boolean;
}

function StaggeredList({
  orientation = "vertical",
  offset = true,
  className,
  children,
  style,
  ...props
}: StaggeredListProps) {
  const columns = Math.max(Children.count(children), 1);
  const listStyle = {
    ...style,
    "--staggered-columns": columns,
  } as CSSProperties;

  return (
    <div
      className={cn("staggered-list", className)}
      data-orientation={orientation}
      data-offset={offset}
      style={listStyle}
      {...props}
    >
      {children}
    </div>
  );
}

interface StaggeredListItemProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
  children: ReactNode;
}

function StaggeredListItem({ index, className, ...props }: StaggeredListItemProps) {
  return (
    <div
      className={cn("staggered-list-item", className)}
      style={{ "--row-index": index } as CSSProperties}
      {...props}
    />
  );
}

export { StaggeredList, StaggeredListItem };
