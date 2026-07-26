import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./layout";

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  brand: ReactNode;
  center?: ReactNode;
  actions?: ReactNode;
  navigationLabel?: string;
}

function Navbar({
  brand,
  center,
  actions,
  navigationLabel = "Primary navigation",
  className,
  ...props
}: NavbarProps) {
  return (
    <header
      className={cn("sticky top-0 z-20 border-b border-nav-border bg-nav-bg/90 backdrop-blur", className)}
      {...props}
    >
      <Container className="relative flex h-16 items-center justify-between">
        <div className="min-w-0">{brand}</div>
        {center && (
          <div className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 md:block">
            {center}
          </div>
        )}
        {actions && <nav className="flex items-center gap-3" aria-label={navigationLabel}>{actions}</nav>}
      </Container>
    </header>
  );
}

export { Navbar };
