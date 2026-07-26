import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CornerBoxProps extends HTMLAttributes<HTMLDivElement> {
  full?: boolean;
}

function CornerBox({ children, full = false, className, ...props }: CornerBoxProps) {
  return (
    <div
      className={cn("corner-box", full && "corner-box-full", className)}
      {...props}
    >
      {full && <span className="corner-bl" aria-hidden="true" />}
      {full && <span className="corner-br" aria-hidden="true" />}
      {children}
    </div>
  );
}

export { CornerBox };
