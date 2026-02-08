"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className={cn(
        "relative w-full overflow-x-auto",
        "bg-card text-card-foreground border border-primary/30 [clip-path:var(--clip-card)] overflow-hidden group",
        "shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.15),0_0_0_1px_rgba(var(--glow-rgb),0.1),0_4px_24px_rgba(0,0,0,0.4)]",
        "hover:border-primary/50 hover:shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.25),0_0_16px_rgba(var(--glow-rgb),0.25),0_0_32px_rgba(var(--glow-rgb),0.1)]",
        "transition-all duration-300",
        "effect-scanline"
      )}
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm font-mono relative z-10", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "[&_tr]:border-b [&_tr]:border-primary/20",
        "effect-separator-bottom",
        className
      )}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t border-primary/20 font-medium [&>tr]:last:border-b-0",
        "effect-separator-top",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b border-primary/20 transition-all duration-300",
        "hover:bg-primary/5 hover:shadow-[inset_0_0_16px_rgba(var(--glow-rgb),0.1)]",
        "data-[state=selected]:bg-primary/10 data-[state=selected]:border-primary/30 data-[state=selected]:shadow-[inset_0_0_16px_rgba(var(--glow-rgb),0.15)]",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-4 text-left align-middle font-bold uppercase tracking-wider whitespace-nowrap",
        "text-primary text-xs",
        "group-hover:[text-shadow:0_0_6px_rgba(var(--glow-rgb),0.4)] transition-all duration-300",
        "[&:has([role=checkbox])]:pr-0 :[[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-4 align-middle whitespace-nowrap",
        "text-foreground/90",
        "[&:has([role=checkbox])]:pr-0 :[[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(
        "mt-4 text-sm font-mono tracking-wide",
        "text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
