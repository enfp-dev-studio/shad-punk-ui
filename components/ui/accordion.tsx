"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border-b border-primary/20 last:border-b-0",
        "effect-separator-bottom",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-4 py-4 px-6 text-left font-mono tracking-wider uppercase text-sm font-bold",
          "text-primary",
          "transition-all duration-300 outline-none group/trigger",
          "hover:text-primary hover:[text-shadow:0_0_8px_rgba(var(--glow-rgb),0.5)]",
          "focus-visible:text-primary focus-visible:[text-shadow:0_0_8px_rgba(var(--glow-rgb),0.5)]",
          "disabled:pointer-events-none disabled:opacity-25",
          "relative overflow-hidden",
          "before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(var(--glow-rgb),0.08),transparent)]",
          "before:-translate-x-full hover:before:translate-x-full before:duration-500 before:pointer-events-none",
          "[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 transition-all duration-300 relative z-10",
            "text-muted-foreground group-hover/trigger:text-primary",
            "group-hover/trigger:drop-shadow-[0_0_4px_rgba(var(--glow-rgb),0.6)]"
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden transition-all duration-300",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        "relative",
        "effect-scanline"
      )}
      {...props}
    >
      <div className={cn(
        "px-6 pb-4 pt-0 font-mono text-sm relative z-10",
        "text-foreground/90",
        className
      )}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
