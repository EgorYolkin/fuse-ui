import { Fragment, useEffect, useRef, useState } from "react";
import type { CSSProperties, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  items: string[];
  separator?: string;
  duration?: number;
  respectReducedMotion?: boolean;
}

function calculateMarqueeCopies(containerWidth: number, groupWidth: number) {
  if (!Number.isFinite(containerWidth) || !Number.isFinite(groupWidth) || groupWidth <= 0) {
    return 2;
  }

  return Math.max(2, Math.ceil(Math.max(containerWidth, 0) / groupWidth) + 2);
}

function Marquee({
  items,
  separator = "·",
  duration = 18,
  respectReducedMotion = true,
  className,
  ...props
}: MarqueeProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [copyCount, setCopyCount] = useState(2);
  const contentSignature = `${separator}\u0000${items.join("\u0000")}`;

  useEffect(() => {
    const root = rootRef.current;
    const group = groupRef.current;

    if (!root || !group || items.length === 0) return;

    const measure = () => {
      const groupWidth = group.getBoundingClientRect().width;
      if (groupWidth <= 0) return;

      const nextCopyCount = calculateMarqueeCopies(root.clientWidth, groupWidth);
      setCopyCount((current) => current === nextCopyCount ? current : nextCopyCount);
    };

    const frame = window.requestAnimationFrame(measure);
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    observer.observe(group);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [contentSignature, items.length]);

  const safeDuration = Number.isFinite(duration) && duration > 0 ? duration : 18;
  const style = {
    "--marquee-copy-count": copyCount,
    "--marquee-duration": `${safeDuration}s`,
    "--marquee-shift": `${-100 / copyCount}%`,
  } as CSSProperties;
  const label = items.join(` ${separator} `);

  return (
    <div
      ref={rootRef}
      className={cn("marquee", className)}
      data-respect-reduced-motion={respectReducedMotion}
      aria-label={label || undefined}
      {...props}
    >
      {items.length > 0 && (
        <div className="marquee-track" style={style} aria-hidden="true">
          {Array.from({ length: copyCount }, (_, copy) => (
            <div
              key={copy}
              ref={copy === 0 ? groupRef : undefined}
              className="marquee-group"
            >
              {items.map((item, index) => (
                <Fragment key={`${copy}-${index}`}>
                  <span className="marquee-item">{item}</span>
                  <span className="marquee-separator">{separator}</span>
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { calculateMarqueeCopies, Marquee };
