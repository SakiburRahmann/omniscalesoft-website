"use client"

import React from "react"
import { motion, useReducedMotion, Variants } from "framer-motion"

interface AnimateRevealProps {
    children: React.ReactNode
    variant?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right"
    delay?: number
    duration?: number
    distance?: number
    staggerChildren?: number
    className?: string
    once?: boolean
}

export function AnimateReveal({
    children,
    variant = "slide-up",
    delay = 0,
    duration = 0.6,
    distance = 30,
    staggerChildren = 0.1,
    className,
    once = true,
}: AnimateRevealProps) {
    const shouldReduceMotion = useReducedMotion()

    const variants = {
        hidden: {
            opacity: 0,
            y: variant === "slide-up" ? distance : variant === "slide-down" ? -distance : 0,
            x: variant === "slide-left" ? distance : variant === "slide-right" ? -distance : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: shouldReduceMotion ? 0.1 : duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98] as any,
                staggerChildren,
            },
        },
    } as any

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-50px" }}
            variants={variants as Variants}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const RevealItem = motion.div
