"use client"

import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { cn } from "@/lib/utils"

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      className={cn(
        "flex w-full items-center justify-between gap-4 py-4 px-6 text-left font-mono tracking-wider uppercase text-sm font-bold",
        "text-primary",
        "transition-all duration-300 outline-none group/trigger",
        "hover:text-primary hover:[text-shadow:0_0_8px_rgba(var(--glow-rgb),0.5)]",
        "focus-visible:text-primary focus-visible:[text-shadow:0_0_8px_rgba(var(--glow-rgb),0.5)]",
        "disabled:pointer-events-none disabled:opacity-25",
        "relative overflow-hidden",
        "border-b border-primary/20",
        "before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(var(--glow-rgb),0.08),transparent)]",
        "before:-translate-x-full hover:before:translate-x-full before:duration-500 before:pointer-events-none",
        "effect-separator-bottom",
        className
      )}
      {...props}
    />
  )
}

function CollapsibleContent({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      className={cn(
        "overflow-hidden transition-all duration-300",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        "relative",
        "effect-scanline",
        "px-6 pb-4 pt-0 font-mono text-sm",
        "text-foreground/90",
        className
      )}
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
