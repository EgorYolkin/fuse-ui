import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Heading, Kicker, Text } from "./typography";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  kicker?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
}

function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2", align === "center" && "items-center text-center", className)} {...props}>
      {kicker && <Kicker>{kicker}</Kicker>}
      {title && <Heading className="text-2xl font-semibold sm:text-3xl">{title}</Heading>}
      {description && <Text className="max-w-md">{description}</Text>}
    </div>
  );
}

export { SectionHeading };
