import { Children, isValidElement } from "react";
import type { CSSProperties, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface StaggeredListProps extends HTMLAttributes<HTMLUListElement> {
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
  let maxOffsetIndex = 0;

  Children.forEach(children, (child, position) => {
    const childIndex = isValidElement<{ index?: unknown }>(child) &&
      typeof child.props.index === "number"
      ? child.props.index
      : position;
    maxOffsetIndex = Math.max(maxOffsetIndex, childIndex, 0);
  });

  const listStyle = {
    ...style,
    "--staggered-columns": columns,
    "--staggered-max-offset": `${maxOffsetIndex * 3}px`,
  } as CSSProperties;

  return (
    <ul
      className={cn("staggered-list", className)}
      data-orientation={orientation}
      data-offset={offset}
      style={listStyle}
      {...props}
    >
      {children}
    </ul>
  );
}

interface StaggeredListItemProps extends HTMLAttributes<HTMLLIElement> {
  index: number;
}

function StaggeredListItem({ index, className, style, ...props }: StaggeredListItemProps) {
  const itemStyle = {
    ...style,
    "--row-index": Math.max(index, 0),
  } as CSSProperties;

  return (
    <li
      className={cn("staggered-list-item", className)}
      style={itemStyle}
      {...props}
    />
  );
}

export { StaggeredList, StaggeredListItem };
