"use client"

import React, { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export const ParallaxEngine = ({ children }: { children: React.ReactNode }) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { stiffness: 100, damping: 30 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            const xPercent = (clientX / innerWidth - 0.5) * 50
            const yPercent = (clientY / innerHeight - 0.5) * 50
            mouseX.set(xPercent)
            mouseY.set(yPercent)
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <motion.div
            style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
            className="fixed inset-[-100px] z-0 pointer-events-none opacity-60"
        >
            {children}
        </motion.div>
    )
}
