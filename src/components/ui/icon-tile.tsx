import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IconTileProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

function IconTile({ className, children, ...props }: IconTileProps) {
  return (
    <span className={cn("icon-tile", className)} {...props}>
      {children}
    </span>
  );
}

export { IconTile };
