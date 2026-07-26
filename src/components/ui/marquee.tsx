import { Fragment } from "react";
import type { CSSProperties, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  items: string[];
  separator?: string;
  duration?: number;
  respectReducedMotion?: boolean;
}

function Marquee({
  items,
  separator = "·",
  duration = 18,
  respectReducedMotion = true,
  className,
  ...props
}: MarqueeProps) {
  const style = { "--marquee-duration": `${duration}s` } as CSSProperties;
  const label = items.join(` ${separator} `);

  return (
    <div
      className={cn("marquee", className)}
      data-respect-reduced-motion={respectReducedMotion}
      aria-label={label}
      {...props}
    >
      <div className="marquee-track" style={style} aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee-group">
            {items.map((item) => (
              <Fragment key={item}>
                <span className="marquee-item">{item}</span>
                <span className="marquee-separator">{separator}</span>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Marquee };
