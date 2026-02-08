"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-2 w-full overflow-hidden",
        "bg-card border border-primary/20",
        "shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.08)]",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "h-full w-full flex-1 transition-all duration-300 ease-out",
          "bg-linear-to-r from-secondary to-primary",
          "shadow-[0_0_8px_rgba(var(--glow-rgb),0.35)]",
          "relative",
          "after:absolute after:inset-0 after:bg-[repeating-linear-gradient(90deg,transparent,transparent_6px,rgba(0,0,0,0.3)_6px,rgba(0,0,0,0.3)_8px)]"
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
