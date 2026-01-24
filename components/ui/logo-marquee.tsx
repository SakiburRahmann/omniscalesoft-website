"use client"

import React from "react"
import { motion } from "framer-motion"

interface LogoMarqueeProps {
    items: string[]
    speed?: number
    className?: string
}

export function LogoMarquee({ items, speed = 40, className }: LogoMarqueeProps) {
    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items, ...items]

    return (
        <div className={`overflow-hidden whitespace-nowrap ${className}`}>
            <motion.div
                className="inline-flex gap-12 md:gap-24 items-center"
                animate={{
                    x: [0, -1035], // Approximate half of the duplicated content width
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {duplicatedItems.map((item, i) => (
                    <span key={i} className="whitespace-nowrap font-bold text-black/50 hover:text-black transition-colors">
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    )
}
