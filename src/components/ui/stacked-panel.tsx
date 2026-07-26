import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface StackedPanelProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "compact";
}

function StackedPanel({
  size = "default",
  className,
  ...props
}: StackedPanelProps) {
  return (
    <div
      className={cn("stacked-panel", className)}
      data-size={size}
      {...props}
    />
  );
}

function StackedPanelLink({ className, href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = typeof href === "string" && href.startsWith("http");

  return (
    <a
      href={href}
      className={cn("stacked-panel-content", className)}
      {...props}
      target={isExternal ? "_blank" : props.target}
      rel={isExternal ? "noopener noreferrer" : props.rel}
    />
  );
}

export { StackedPanel, StackedPanelLink };
