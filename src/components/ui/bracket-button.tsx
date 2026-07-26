import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BracketButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "ghost";
  responsive?: "always" | "desktop" | "wide";
  children: ReactNode;
}

function BracketButton({
  variant = "ghost",
  responsive = "always",
  className,
  children,
  ...props
}: BracketButtonProps) {
  const isExternal = typeof props.href === "string" && props.href.startsWith("http");

  return (
    <a
      className={cn(
        "camera-button",
        variant === "primary" ? "camera-button-primary" : "camera-button-ghost",
        responsive === "desktop" && "desktop-control",
        responsive === "wide" && "wide-control",
        className,
      )}
      {...props}
      target={isExternal ? "_blank" : props.target}
      rel={isExternal ? "noopener noreferrer" : props.rel}
    >
      {children}
    </a>
  );
}

export { BracketButton };
export type { BracketButtonProps };
