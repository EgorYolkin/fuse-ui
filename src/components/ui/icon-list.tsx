import type { ComponentType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface IconListProps extends Omit<HTMLAttributes<HTMLUListElement>, "children"> {
  items: string[];
  icon: ComponentType<{ className?: string }>;
}

function IconList({ items, icon: Icon, className, ...props }: IconListProps) {
  return (
    <ul
      className={cn("grid gap-4 text-base leading-relaxed text-text-secondary sm:text-lg", className)}
      {...props}
    >
      {items.map((item) => (
        <li key={item} className="flex items-baseline gap-4">
          <Icon className="size-4 shrink-0 translate-y-0.5 text-text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export { IconList };
