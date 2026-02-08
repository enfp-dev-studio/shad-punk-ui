import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ScanlineOverlay } from "@/components/ui/scanline-overlay"

const alertVariants = cva(
  "relative w-full aug-card px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current overflow-hidden transition-all duration-300 font-mono [&>*]:relative [&>*]:z-[1]",
  {
    variants: {
      variant: {
        default: `
          bg-card text-primary
          shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.15),0_0_0_1px_rgba(var(--glow-rgb),0.1)]
          hover:shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.25),0_0_8px_rgba(var(--glow-rgb),0.25)]
        `,
        destructive: `
          bg-destructive/10 text-destructive
          shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.1),0_0_0_1px_rgba(var(--glow-rgb),0.08)]
          hover:shadow-[inset_0_1px_0_0_rgba(var(--glow-rgb),0.2),0_0_8px_rgba(var(--glow-rgb),0.2)]
          [&>svg]:text-destructive
          *:data-[slot=alert-description]:text-destructive/90
        `,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      data-variant={variant}
      data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      <ScanlineOverlay />
      {children}
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-bold tracking-wider uppercase text-xs",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-xs tracking-wide [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
