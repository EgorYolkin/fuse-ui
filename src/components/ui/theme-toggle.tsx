"use client";

import type { ComponentProps } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { themes, type Theme, useTheme } from "./theme-provider";

const defaultLabels: Record<Theme, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

interface ThemeToggleProps extends Omit<ComponentProps<typeof Button>, "children"> {
  labels?: Partial<Record<Theme, string>>;
  showLabel?: boolean;
}

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === "dark") return <Moon aria-hidden="true" />;
  if (theme === "system") return <Monitor aria-hidden="true" />;
  return <Sun aria-hidden="true" />;
}

function ThemeToggle({
  labels: customLabels,
  showLabel = false,
  className,
  onClick,
  variant = "ghost",
  size,
  ...props
}: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const labels = { ...defaultLabels, ...customLabels };
  const currentIndex = themes.indexOf(theme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];
  const accessibleLabel = `${labels[theme]} theme. Switch to ${labels[nextTheme]}`;

  return (
    <Button
      type="button"
      variant={variant}
      size={size ?? (showLabel ? "default" : "icon")}
      className={cn("theme-toggle", className)}
      aria-label={accessibleLabel}
      title={accessibleLabel}
      data-theme={theme}
      data-resolved-theme={resolvedTheme}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) setTheme(nextTheme);
      }}
      {...props}
    >
      <ThemeIcon theme={theme} />
      {showLabel ? <span>{labels[theme]}</span> : null}
    </Button>
  );
}

export { ThemeToggle };
export type { ThemeToggleProps };
