import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
}

function Heading({ level = 2, className, ...props }: HeadingProps) {
  const Tag = `h${level}` as ElementType;
  return <Tag className={cn("text-text-primary", className)} {...props} />;
}

function Text({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("leading-relaxed text-text-muted", className)} {...props} />;
}

function Kicker({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("section-kicker", className)} {...props} />;
}

function Highlight({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("text-highlight whitespace-nowrap", className)} {...props} />;
}

interface HighlightHeadingProps extends Omit<HeadingProps, "children"> {
  lines: ReactNode[];
}

function HighlightHeading({ lines, className, ...props }: HighlightHeadingProps) {
  return (
    <Heading
      level={1}
      className={cn(
        "mx-auto max-w-[1020px] text-[1.7rem] font-semibold leading-[0.95] tracking-normal sm:text-5xl md:text-6xl lg:text-7xl",
        className,
      )}
      {...props}
    >
      {lines.map((line, index) => (
        <span key={index} className="contents">
          <Highlight>{line}</Highlight>
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </Heading>
  );
}

export { Heading, Highlight, HighlightHeading, Kicker, Text };
