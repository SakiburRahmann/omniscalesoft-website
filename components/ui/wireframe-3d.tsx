"use client"

import React, { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function Wireframe3D({ className }: { className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null)

    // Mouse coordinates for parallax
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Spring physics for smooth following
    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

    // Transform mouse pos to degrees for the graphic
    const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15])
    const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15])

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
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
            style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full aspect-square md:aspect-video flex items-center justify-center"
            >
                {/* Central Hub */}
                <motion.div
                    initial={{ opacity: 0, scale: 0, z: 200 }}
                    animate={{ opacity: 1, scale: 1, z: 0 }}
                    transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.5 }}
                    className="w-32 h-32 md:w-48 md:h-48 border border-black/10 rounded-full absolute"
                    style={{ transform: "translateZ(50px)" }}
                />

                {/* Floating Nodes and Connections */}
                <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-2xl overflow-visible">
                    {/* Base Layer */}
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.2 }}
                        transition={{ duration: 2, delay: 0.8 }}
                        d="M 50 200 L 150 150 L 250 100 L 350 130"
                        fill="none" stroke="black" strokeWidth="1" strokeDasharray="4 4"
                    />

                    {/* 3D Offset Layer 1 */}
                    <motion.circle
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        cx="150" cy="150" r="8" fill="black"
                        style={{ transform: "translateZ(100px)" }}
                    />

                    {/* 3D Offset Layer 2 */}
                    <motion.rect
                        initial={{ opacity: 0, rotate: -45 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        x="240" y="90" width="40" height="40" fill="none" stroke="black" strokeWidth="1"
                        style={{ transform: "translateZ(-100px)" }}
                    />

                    {/* Floating Data Fragmets */}
                    {[...Array(6)].map((_, i) => (
                        <motion.circle
                            key={i}
                            initial={{ opacity: 0, x: Math.random() * 400, y: Math.random() * 300, z: 400 }}
                            animate={{ opacity: 0.4, x: Math.random() * 400, y: Math.random() * 300, z: 0 }}
                            transition={{
                                duration: 2 + Math.random(),
                                delay: 1.5 + i * 0.2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                            r="2" fill="black"
                        />
                    ))}
                </svg>

                {/* High-Tech Perimeter */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-dashed border-black/5 rounded-full scale-125"
                />
            </motion.div>
        </div>
    )
}
