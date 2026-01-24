"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion"

interface Hero3DRevealProps {
    children: React.ReactNode
    className?: string
}

export function Hero3DReveal({ children, className }: Hero3DRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    // Mouse coordinates for parallax
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Spring physics for smooth following
    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

    // Transform mouse pos to degrees
    const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10])
    const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10])

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const x = (e.clientX - rect.left) / width - 0.5
        const y = (e.clientY - rect.top) / height - 0.5
        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative perspective-2000 ${className}`}
            style={{ perspective: "2000px" }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full"
            >
                {children}
            </motion.div>
        </div>
    )
}

export const Reveal3DItem = ({ children, delay = 0, z = 200, className }: { children: React.ReactNode, delay?: number, z?: number, className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, z: z, rotateX: 45 }}
            animate={{ opacity: 1, z: 0, rotateX: 0 }}
            transition={{
                duration: 1.2,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const SplitText3D = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const words = text.split(" ")

    return (
        <span className="inline-block">
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
                    <motion.span
                        initial={{ y: "100%", rotateX: 90, opacity: 0 }}
                        animate={{ y: 0, rotateX: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: delay + i * 0.1,
                            ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    )
}
