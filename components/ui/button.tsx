import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono tracking-[0.2em] uppercase text-lg font-bold transition-all duration-150 disabled:pointer-events-none disabled:opacity-25 [&_svg:not([class*='size-'])]:size-4 outline-none relative overflow-hidden group cursor-pointer [clip-path:var(--clip-button)]",
  {
    variants: {
      variant: {
        default: `
          bg-transparent text-primary border border-primary/50
          hover:bg-primary/10 hover:border-primary hover:text-primary
          shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.2),0_0_0_1px_rgba(var(--glow-rgb),0.15)]
          hover:shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.35),0_0_16px_rgba(var(--glow-rgb),0.4),0_0_24px_rgba(var(--glow-rgb),0.2)]
          before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(var(--glow-rgb),0.2),transparent)]
          before:-translate-x-full hover:before:translate-x-full before:duration-500
          after:absolute after:inset-0 after:bg-[linear-gradient(0deg,transparent_0%,rgba(var(--glow-rgb),0.08)_50%,transparent_100%)]
          after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300
        `,
        destructive: `
          bg-transparent text-destructive border border-destructive/50
          hover:bg-destructive/10 hover:border-destructive
          shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.15),0_0_0_1px_rgba(var(--glow-rgb),0.1)]
          hover:shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.3),0_0_16px_rgba(var(--glow-rgb),0.4),0_0_24px_rgba(var(--glow-rgb),0.2)]
          before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,rgba(var(--glow-rgb),0.2),transparent)]
          before:-translate-x-full hover:before:translate-x-full before:duration-500
          after:absolute after:inset-0 after:bg-[linear-gradient(0deg,transparent_0%,rgba(var(--glow-rgb),0.08)_50%,transparent_100%)]
          after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300
        `,
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 py-1.5 text-[10px]",
        lg: "h-12 px-8 py-3 text-sm",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Comp>
  )
}

export { Button, buttonVariants }
