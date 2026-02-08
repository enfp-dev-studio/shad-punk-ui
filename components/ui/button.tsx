import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono tracking-[0.2em] uppercase text-lg font-bold transition-all duration-150 disabled:pointer-events-none disabled:opacity-25 [&_svg:not([class*='size-'])]:size-4 outline-none relative overflow-hidden group cursor-pointer [clip-path:polygon(0_8px,8px_0,calc(100%-8px)_0,100%_8px,100%_calc(100%-8px),calc(100%-8px)_100%,8px_100%,0_calc(100%-8px))]",
  {
    variants: {
      variant: {
        default: `
          bg-transparent text-primary border border-primary/70
          hover:bg-primary/10 hover:border-primary hover:text-primary
          shadow-[inset_0_1px_0_0_hsl(var(--primary)/0.25),0_0_0_1px_hsl(var(--primary)/0.2)]
          hover:shadow-[inset_0_1px_0_0_hsl(var(--primary)/0.4),0_0_16px_hsl(var(--primary)/0.5),0_0_24px_hsl(var(--primary)/0.3)]
          before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,hsl(var(--primary)/0.25),transparent)]
          before:-translate-x-full hover:before:translate-x-full before:duration-500
          after:absolute after:inset-0 after:bg-[linear-gradient(0deg,transparent_0%,hsl(var(--primary)/0.1)_50%,transparent_100%)]
          after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300
        `,
        destructive: `
          bg-transparent text-destructive border border-destructive/70
          hover:bg-destructive/10 hover:border-destructive
          shadow-[inset_0_1px_0_0_hsl(var(--destructive)/0.25),0_0_0_1px_hsl(var(--destructive)/0.2)]
          hover:shadow-[inset_0_1px_0_0_hsl(var(--destructive)/0.4),0_0_16px_hsl(var(--destructive)/0.5),0_0_24px_hsl(var(--destructive)/0.3)]
          before:absolute before:inset-0 before:bg-[linear-gradient(90deg,transparent,hsl(var(--destructive)/0.25),transparent)]
          before:-translate-x-full hover:before:translate-x-full before:duration-500
          after:absolute after:inset-0 after:bg-[linear-gradient(0deg,transparent_0%,hsl(var(--destructive)/0.1)_50%,transparent_100%)]
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