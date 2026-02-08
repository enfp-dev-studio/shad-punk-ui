import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 font-mono tracking-[0.15em] uppercase text-[10px] font-bold transition-all duration-200 [clip-path:var(--clip-badge)] relative overflow-hidden cursor-default w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: `
          bg-card text-primary border border-primary/50 px-2.5 py-1
          shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.15),0_0_0_1px_rgba(var(--glow-rgb),0.1)]
          hover:border-primary/70 hover:text-primary
          hover:shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.25),0_0_8px_rgba(var(--glow-rgb),0.3)]
          before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(var(--glow-rgb),0.12),transparent)]
          before:-translate-x-full hover:before:translate-x-full before:duration-300
        `,
        destructive: `
          bg-destructive/10 text-destructive border border-destructive/50 px-2.5 py-1
          shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.1),0_0_0_1px_rgba(var(--glow-rgb),0.08)]
          hover:border-destructive/70
          hover:shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.2),0_0_8px_rgba(var(--glow-rgb),0.3)]
          before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(var(--glow-rgb),0.12),transparent)]
          before:-translate-x-full hover:before:translate-x-full before:duration-300
        `
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
