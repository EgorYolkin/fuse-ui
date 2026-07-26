import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-page px-4 sm:px-gutter", className)} {...props} />;
}

function Stack({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-4", className)} {...props} />;
}

function Cluster({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-wrap items-center gap-4", className)} {...props} />;
}

function Grid({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-4", className)} {...props} />;
}

export { Cluster, Container, Grid, Stack };
