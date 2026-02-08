import * as React from "react"
import { cn } from "@/lib/utils"
import { ScanlineOverlay } from "@/components/ui/scanline-overlay"

function Card({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"
      className={cn(
        "bg-card text-card-foreground aug-card relative overflow-hidden group",
        "shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.15),0_0_0_1px_rgba(var(--glow-rgb),0.1),0_4px_24px_rgba(0,0,0,0.4)]",
        "hover:shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.25),0_0_16px_rgba(var(--glow-rgb),0.25),0_0_32px_rgba(var(--glow-rgb),0.1)]",
        "transition-all duration-300",
        "*:relative *:z-1",
        className
      )}
      {...props}
    >
      <ScanlineOverlay />
      {children}
    </div>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 py-4",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        "border-b border-primary/20",
        "effect-separator-bottom",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "leading-none font-mono font-bold tracking-wider uppercase text-sm",
        "text-primary",
        "group-hover:[text-shadow:0_0_8px_rgba(var(--glow-rgb),0.5)] transition-all duration-300",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-muted-foreground text-xs font-mono tracking-wide",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-6 py-4 font-mono text-sm",
        "text-foreground/90",
        className
      )}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-6 py-4 gap-3",
        "border-t border-primary/20",
        "effect-separator-top",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
