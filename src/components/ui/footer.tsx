import type { HTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CornerBox } from "./corner-box";
import { Text } from "./typography";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps extends HTMLAttributes<HTMLElement> {
  brand: ReactNode;
  description?: ReactNode;
  links?: FooterLink[];
  navigationLabel?: string;
  bottom?: ReactNode;
}

function Footer({
  brand,
  description,
  links = [],
  navigationLabel = "Footer navigation",
  bottom,
  className,
  ...props
}: FooterProps) {
  return (
    <footer className={cn("mt-12", className)} {...props}>
      <CornerBox full className="border border-border bg-surface">
        <div className="grid gap-8 px-5 py-8 sm:px-6 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-md">
            <div className="text-xl font-semibold text-text-primary">{brand}</div>
            {description && <Text className="mt-3 text-sm">{description}</Text>}
          </div>

          {links.length > 0 && (
            <nav className="grid gap-2 sm:grid-cols-3" aria-label={navigationLabel}>
              {links.map((link, index) => {
                const external = link.href.startsWith("http");
                return (
                  <a
                    key={`${index}-${link.href}`}
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="footer-link"
                  >
                    {link.label}
                    <ArrowUpRight data-icon="inline-end" className="text-text-muted" aria-hidden="true" />
                  </a>
                );
              })}
            </nav>
          )}
        </div>

        {bottom && (
          <div className="hatched-header flex flex-col gap-2 border-t border-border px-5 py-3 font-mono text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
            {bottom}
          </div>
        )}
      </CornerBox>
    </footer>
  );
}

export { Footer };
export type { FooterLink };
