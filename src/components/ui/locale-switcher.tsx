"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface SwitcherOption<T extends string> {
  value: T;
  label: string;
}

interface SwitcherProps<T extends string> {
  value: T;
  options: SwitcherOption<T>[];
  onChange: (value: T) => void;
  label: string;
  className?: string;
  placeholder?: string;
}

function Switcher<T extends string>({
  value,
  options,
  onChange,
  label,
  className,
  placeholder,
}: SwitcherProps<T>) {
  return (
    <SelectPrimitive.Root
      items={options}
      value={value}
      onValueChange={(nextValue) => {
        if (nextValue) onChange(nextValue as T);
      }}
    >
      <SelectPrimitive.Trigger
        className={cn("switcher", className)}
        aria-label={label}
      >
        <SelectPrimitive.Value placeholder={placeholder} className="flex flex-1 text-left" />
        <SelectPrimitive.Icon
          render={<ChevronDownIcon className="size-4 text-text-muted" aria-hidden="true" />}
        />
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Positioner
          className="z-50 outline-none"
          align="end"
          alignItemWithTrigger={false}
          sideOffset={8}
        >
          <SelectPrimitive.Popup className="switcher-content">
            <SelectPrimitive.List>
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  className="switcher-item relative flex cursor-pointer items-center"
                >
                  <SelectPrimitive.ItemText className="flex-1">
                    {option.label}
                  </SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className="absolute right-2 flex size-4 items-center justify-center">
                    <CheckIcon className="size-3.5" aria-hidden="true" />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.List>
          </SelectPrimitive.Popup>
        </SelectPrimitive.Positioner>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

/** @deprecated Use Switcher instead. */
const LocaleSwitcher = Switcher;

/** @deprecated Use SwitcherOption instead. */
type LocaleOption<T extends string> = SwitcherOption<T>;

export { LocaleSwitcher, Switcher };
export type { LocaleOption, SwitcherOption, SwitcherProps };
