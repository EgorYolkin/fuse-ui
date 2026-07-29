import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface StaggeredListProps extends HTMLAttributes<HTMLUListElement> {
  /** @deprecated StaggeredList is always vertical. */
  orientation?: "vertical" | "horizontal";
  /** @deprecated Items are no longer visually offset. */
  offset?: boolean;
}

function StaggeredList({
  orientation,
  offset,
  className,
  ...props
}: StaggeredListProps) {
  return (
    <ul
      className={cn("staggered-list", className)}
      data-orientation={orientation}
      data-offset={offset}
      {...props}
    />
  );
}

interface StaggeredListItemProps extends HTMLAttributes<HTMLLIElement> {
  /** @deprecated Item order is determined by DOM order. */
  index?: number;
}

function StaggeredListItem({ index, className, ...props }: StaggeredListItemProps) {
  return <li className={cn("staggered-list-item", className)} data-index={index} {...props} />;
}

export { StaggeredList, StaggeredListItem };
