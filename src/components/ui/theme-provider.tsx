"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const themes = ["light", "dark", "system"] as const;

type Theme = (typeof themes)[number];
type ResolvedTheme = Exclude<Theme, "system">;

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  nonce?: string;
}

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function isTheme(value: string | null): value is Theme {
  return value !== null && themes.includes(value as Theme);
}

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveTheme(theme: Theme): ResolvedTheme {
  return theme === "system" ? getSystemTheme() : theme;
}

function applyTheme(theme: ResolvedTheme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

function createThemeScript(defaultTheme: Theme, storageKey: string) {
  const serializedDefault = JSON.stringify(defaultTheme).replaceAll("<", "\\u003c");
  const serializedKey = JSON.stringify(storageKey).replaceAll("<", "\\u003c");

  return `(()=>{const k=${serializedKey},d=${serializedDefault};let s;try{s=localStorage.getItem(k)}catch{}const t=["light","dark","system"].includes(s)?s:d,r=t==="system"?(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):t,e=document.documentElement;e.classList.remove("light","dark");e.classList.add(r);e.dataset.theme=r;e.style.colorScheme=r})()`;
}

function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "fuse-ui-theme",
  nonce,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    defaultTheme === "dark" ? "dark" : "light",
  );

  useEffect(() => {
    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      if (isTheme(storedTheme)) {
        // Storage is client-only; synchronize it after hydration.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setThemeState(storedTheme);
      }
    } catch {
      // Storage may be unavailable in privacy modes. The in-memory theme still works.
    }
  }, [storageKey]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      const nextTheme = resolveTheme(theme);
      applyTheme(nextTheme);
      setResolvedTheme(nextTheme);
    };

    updateTheme();
    if (theme !== "system") return;

    media.addEventListener("change", updateTheme);
    return () => media.removeEventListener("change", updateTheme);
  }, [theme]);

  const setTheme = useCallback(
    (nextTheme: Theme) => {
      setThemeState(nextTheme);
      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch {
        // Keep the theme usable even when persistence is blocked.
      }
    },
    [storageKey],
  );

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [resolvedTheme, setTheme, theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <script
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: createThemeScript(defaultTheme, storageKey),
        }}
      />
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export { ThemeProvider, themes, useTheme };
export type { ResolvedTheme, Theme, ThemeContextValue, ThemeProviderProps };
