import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface ScrollCrownProps {
  className?: string;
  label?: string;
  orientation?: "horizontal" | "vertical";
}

function ScrollCrown({
  className,
  label = "Page scroll progress",
  orientation = "horizontal",
}: ScrollCrownProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, nextProgress)));
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const value = Math.round(progress);
  const style = { "--scroll-progress": progress } as CSSProperties;

  return (
    <div
      className={cn(
        "scroll-crown",
        orientation === "vertical" && "scroll-crown-vertical",
        className,
      )}
      style={style}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-orientation={orientation}
    >
      <span className="scroll-crown-track" aria-hidden="true" />
      <output className="scroll-crown-value">{String(value).padStart(3, "0")}</output>
    </div>
  );
}

export { ScrollCrown };
