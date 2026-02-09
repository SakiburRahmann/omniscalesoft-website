"use client"

import React, { useRef } from "react"
import { motion, useInView, Variants } from "framer-motion"

interface RevealProps {
    children: React.ReactNode
    width?: "fit-content" | "100%"
    delay?: number
    duration?: number
    y?: number
    className?: string
}

export const Reveal = ({
    children,
    width = "100%",
    delay = 0.2,
    duration = 0.8,
    y = 40,
    className
}: RevealProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <div ref={ref} className={className} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                    duration,
                    delay,
                    ease: [0.16, 1, 0.3, 1]
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}

interface TextRevealProps {
    text: string
    className?: string
    delay?: number
}

export const TextReveal = ({ text, className, delay = 0 }: TextRevealProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const words = text.split(" ")

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay,
            },
        },
    }

    const wordVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.2em] py-1">
                    <motion.span variants={wordVariants} className="inline-block">
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    )
}
