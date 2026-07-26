import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function PatternStrip({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("hatched-header border-b border-border px-5 py-3 sm:px-6", className)}
      {...props}
    />
  );
}

export { PatternStrip };
