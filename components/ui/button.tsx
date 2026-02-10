import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono tracking-[0.2em] uppercase text-lg font-bold transition-all duration-150 disabled:pointer-events-none disabled:opacity-25 [&_svg:not([class*='size-'])]:size-4 outline-none relative group cursor-pointer aug-button",
  {
    variants: {
      variant: {
        default: "bg-transparent text-primary",
        destructive: "bg-transparent text-destructive",
      },
      size: {
        default: "h-10 px-6 py-2 [--aug-btn-tl:0.3em] [--aug-btn-tr:0.3em] [--aug-btn-br:0.3em] [--aug-btn-bl:0.3em]",
        sm: "h-8 px-4 py-1.5 text-[10px] [--aug-btn-tl:0.4em] [--aug-btn-tr:0.4em] [--aug-btn-br:0.4em] [--aug-btn-bl:0.4em]",
        lg: "h-12 px-8 py-3 text-lg [--aug-btn-tl:0.3em] [--aug-btn-tr:0.3em] [--aug-btn-br:0.3em] [--aug-btn-bl:0.3em]",
        icon: "size-10 [--aug-btn-tl:0.3em] [--aug-btn-tr:0.3em] [--aug-btn-br:0.3em] [--aug-btn-bl:0.3em]",
        "icon-sm": "size-8 [--aug-btn-tl:0.4em] [--aug-btn-tr:0.4em] [--aug-btn-br:0.4em] [--aug-btn-bl:0.4em]",
        "icon-lg": "size-12 [--aug-btn-tl:0.3em] [--aug-btn-tr:0.3em] [--aug-btn-br:0.3em] [--aug-btn-bl:0.3em]"
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
      data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"
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
