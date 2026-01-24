"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-[4px] text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-[#000000] text-white hover:bg-[#1a1a1a]",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "border border-[#e4e4e7] bg-white hover:bg-[#f4f4f5] text-[#000000]",
                secondary:
                    "bg-[#f4f4f5] text-[#18181b] hover:bg-[#e4e4e7]",
                ghost: "hover:bg-[#f4f4f5] text-[#000000]",
                link: "text-[#000000] underline-offset-4 hover:underline",
                action: "bg-[#000000] text-white hover:bg-[#1a1a1a]",
            },
            size: {
                default: "h-11 px-8",
                sm: "h-9 px-4 text-xs",
                lg: "h-14 px-12 text-base",
                icon: "h-11 w-11",
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
        const shouldReduceMotion = useReducedMotion()

        return (
            <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="inline-block"
            >
                <Comp
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref}
                    {...props}
                />
            </motion.div>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
