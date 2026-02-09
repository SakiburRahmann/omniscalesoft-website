import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-black uppercase tracking-widest transition-all focus-visibility:outline-none focus-visibility:ring-1 focus-visibility:ring-black disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-black text-white hover:bg-black/90",
                outline: "border border-black bg-transparent text-black hover:bg-black hover:text-white",
                secondary: "bg-black/5 text-black hover:bg-black/10",
                ghost: "hover:bg-black/5 text-black",
                link: "text-black underline-offset-4 hover:underline",
                action: "bg-black text-white px-12 h-16 hover:bg-white hover:text-black hover:border-black border border-transparent transition-all duration-300",
            },
            size: {
                default: "h-12 px-6",
                sm: "h-10 px-4",
                lg: "h-16 px-12 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
