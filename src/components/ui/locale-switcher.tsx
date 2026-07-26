import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface LocaleOption<T extends string> {
  value: T;
  label: string;
}

interface LocaleSwitcherProps<T extends string> {
  value: T;
  options: LocaleOption<T>[];
  onChange: (value: T) => void;
  label: string;
  className?: string;
}

function LocaleSwitcher<T extends string>({
  value,
  options,
  onChange,
  label,
  className,
}: LocaleSwitcherProps<T>) {
  return (
    <Select
      items={options}
      value={value}
      onValueChange={(nextValue) => {
        if (nextValue) onChange(nextValue as T);
      }}
    >
      <SelectTrigger
        className={cn("locale-switcher", className)}
        aria-label={label}
      >
        <Languages data-icon="inline-start" aria-hidden="true" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        className="locale-switcher-content"
        align="end"
        alignItemWithTrigger={false}
        sideOffset={8}
      >
        <SelectGroup>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="locale-switcher-item"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export { LocaleSwitcher };
export type { LocaleOption };
