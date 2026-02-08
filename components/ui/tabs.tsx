"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-9 w-fit items-center justify-center p-[3px] gap-1",
        "bg-card border border-primary/30 [clip-path:var(--clip-card)] relative overflow-hidden",
        "shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.15),0_0_0_1px_rgba(var(--glow-rgb),0.1)]",
        "effect-scanline",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 px-3 py-1 text-sm font-medium whitespace-nowrap transition-all duration-300",
        "font-mono uppercase tracking-wider",
        "text-muted-foreground border border-transparent",
        "hover:text-primary hover:bg-primary/5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-primary/30",
        "data-[state=active]:shadow-[inset_0_0_16px_rgba(var(--glow-rgb),0.12),0_0_8px_rgba(var(--glow-rgb),0.15)]",
        "relative z-10",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "flex-1 outline-none",
        "font-mono text-foreground/90",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
