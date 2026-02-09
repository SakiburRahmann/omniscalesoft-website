"use client"

import React from "react"
import { motion } from "framer-motion"
import { Code2, Terminal, Cpu, Layers, Monitor, Smartphone, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
    {
        title: "Custom Software Development",
        desc: "End-to-end engineered solutions for complex business problems.",
        detail: "Each system is architected for longevity and high performance, ensuring a stable foundation for your most critical operations.",
        Icon: Layers,
        tag: "Service // Custom"
    },
    {
        title: "Web & Web Apps",
        desc: "High-performance, scalable web architectures built with modern stacks.",
        detail: "Specialized in sub-second response times and robust state management for global enterprise applications.",
        Icon: Monitor,
        tag: "Service // Web"
    },
    {
        title: "Mobile Apps (Android / iOS)",
        desc: "Native-grade experiences for the entire mobile ecosystem.",
        detail: "Focusing on performance, cross-platform stability, and deep system integration for a premium feel.",
        Icon: Smartphone,
        tag: "Service // Mobile"
    },
    {
        title: "Desktop Applications",
        desc: "Cross-platform desktop software with deep system integration.",
        detail: "Building powerful, resource-efficient tools that operate natively on Windows, macOS, and Linux.",
        Icon: Terminal,
        tag: "Service // Desktop"
    },
    {
        title: "System & AI-Driven Software",
        desc: "Low-level system optimization and intelligent agentic logic.",
        detail: "Bridging the gap between hardware efficiency and modern AI capabilities for high-integrity systems.",
        Icon: Zap,
        tag: "Service // System"
    }
]

export function FeatureDepth() {
    return (
        <section className="py-48 px-8 md:px-12 lg:px-24">
            <div className="max-w-[1400px] mx-auto space-y-48">
                {features.map((f, i) => (
                    <div key={i} className={cn(
                        "flex flex-col lg:flex-row gap-24 items-center",
                        i % 2 === 1 ? "lg:flex-row-reverse" : ""
                    )}>
                        <div className="w-full lg:w-1/2 space-y-12">
                            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-premium leading-[0.85]">
                                {f.title}
                            </h2>
                            <div className="space-y-8">
                                <p className="text-2xl md:text-3xl text-black/70 font-medium leading-tight max-w-xl">
                                    {f.desc}
                                </p>
                                <p className="text-lg text-black/50 font-medium leading-relaxed max-w-lg">
                                    {f.detail}
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="aspect-square bg-white border border-black/5 rounded-[2.5rem] overflow-hidden relative group shadow-sm">
                                <ServiceVisual index={i} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

function ServiceVisual({ index }: { index: number }) {
    return (
        <div className="absolute inset-0">
            {index === 0 && <CustomSoftwareAnim />}
            {index === 1 && <WebAppsAnim />}
            {index === 2 && <MobileAppsAnim />}
            {index === 3 && <DesktopAppsAnim />}
            {index === 4 && <SystemAIAnim />}
        </div>
    )
}

function CustomSoftwareAnim() {
    return (
        <svg className="w-full h-full p-12" viewBox="0 0 100 100">
            {/* Base Technical Grid */}
            <motion.path
                d="M10,10 L90,10 M10,30 L90,30 M10,50 L90,50 M10,70 L90,70 M10,90 L90,90"
                stroke="black" strokeWidth="0.05" strokeOpacity="0.1"
            />
            <motion.path
                d="M10,10 L10,90 M30,10 L30,90 M50,10 L50,90 M70,10 L70,90 M90,10 L90,90"
                stroke="black" strokeWidth="0.05" strokeOpacity="0.1"
            />

            {/* Constructive Blocks */}
            {[0, 1, 2, 3].map(i => (
                <motion.rect
                    key={i}
                    width="20" height="20"
                    fill="none" stroke="black" strokeWidth="0.5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0, 1, 0.5, 1],
                        x: [40, 30 + (i % 2) * 20],
                        y: [40, 30 + Math.floor(i / 2) * 20],
                        scale: [0.8, 1, 0.9, 1],
                    }}
                    transition={{ duration: 6, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
                />
            ))}

            {/* Target Crosshair */}
            <motion.path
                d="M50,0 L50,100 M0,50 L100,50"
                stroke="black" strokeWidth="0.1" strokeOpacity="0.1" strokeDasharray="2 2"
            />
        </svg>
    )
}

function WebAppsAnim() {
    return (
        <svg className="w-full h-full p-8" viewBox="0 0 100 100">
            {/* Latitudinal Lines */}
            {[...Array(5)].map((_, i) => (
                <motion.ellipse
                    key={`lat-${i}`}
                    cx="50" cy="50"
                    rx="35" ry={8 + i * 6}
                    fill="none" stroke="black" strokeWidth="0.1"
                    strokeOpacity={0.1 + (i % 2) * 0.1}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
            ))}

            {/* Longitudinal Lines (Globe Effect) */}
            <motion.circle cx="50" cy="50" r="35" fill="none" stroke="black" strokeWidth="0.2" strokeOpacity="0.1" />
            <motion.ellipse
                cx="50" cy="50" rx="12" ry="35"
                fill="none" stroke="black" strokeWidth="0.3" strokeOpacity="0.4"
                animate={{ scaleX: [1, -1, 1], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating Network Nodes */}
            {[...Array(8)].map((_, i) => {
                const angle = (i * Math.PI * 2) / 8;
                return (
                    <motion.circle
                        key={i}
                        r="1" fill="black"
                        animate={{
                            cx: [50, 50 + 35 * Math.cos(angle)],
                            cy: [50, 50 + 35 * Math.sin(angle)],
                            opacity: [0, 1, 0],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                    />
                )
            })}
        </svg>
    )
}

function MobileAppsAnim() {
    return (
        <svg className="w-full h-full p-12" viewBox="0 0 100 100">
            {/* Phone Frame */}
            <rect x="30" y="15" width="40" height="70" rx="4" fill="none" stroke="black" strokeWidth="0.8" />

            {/* Home Indicator */}
            <line x1="45" y1="81" x2="55" y2="81" stroke="black" strokeWidth="1" strokeLinecap="round" />

            {/* UI Card Animation */}
            <motion.rect
                x="35" y="25" width="30" height="15" rx="1"
                fill="black" fillOpacity="0.05"
                animate={{ y: [25, 28, 25], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* List Item Animation */}
            {[...Array(4)].map((_, i) => (
                <motion.rect
                    key={i}
                    x="35" y={45 + i * 8} width="30" height="4" rx="1"
                    fill="none" stroke="black" strokeWidth="0.2" strokeOpacity="0.3"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: [0, 1, 0], x: [35, 34, 35] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
                    style={{ originX: 0 }}
                />
            ))}

            {/* Tech Flair: Signal Bars */}
            <rect x="62" y="18" width="1" height="2" fill="black" fillOpacity="0.2" />
            <rect x="64" y="17" width="1" height="3" fill="black" fillOpacity="0.2" />
            <rect x="66" y="16" width="1" height="4" fill="black" fillOpacity="0.2" />
        </svg>
    )
}

function DesktopAppsAnim() {
    return (
        <svg className="w-full h-full p-12" viewBox="0 0 100 100">
            {/* Monitor Frame */}
            <rect x="15" y="20" width="70" height="50" rx="1" fill="none" stroke="black" strokeWidth="0.8" />
            <path d="M40,70 L60,70 L65,78 L35,78 Z" fill="none" stroke="black" strokeWidth="0.8" />
            <line x1="30" y1="78" x2="70" y2="78" stroke="black" strokeWidth="1" />

            {/* Terminal Grid Background */}
            <motion.path
                d="M18,30 L82,30 M18,40 L82,40 M18,50 L82,50 M18,60 L82,60"
                stroke="black" strokeWidth="0.05" strokeOpacity="0.1"
            />

            {/* Horizontal Scan Signal */}
            <motion.rect
                x="15" y="20" width="70" height="2"
                fill="black" fillOpacity="0.03"
                animate={{ y: [20, 68, 20] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Line of Code Activity */}
            {[...Array(6)].map((_, i) => (
                <motion.line
                    key={i}
                    x1="20" y1={35 + i * 5} x2="80" y2={35 + i * 5}
                    stroke="black" strokeWidth="0.3" strokeOpacity="0.1"
                    animate={{ strokeDashoffset: [0, -120], strokeOpacity: [0.05, 0.2, 0.05] }}
                    strokeDasharray="15 105"
                    transition={{ duration: 6, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
                />
            ))}
        </svg>
    )
}

function SystemAIAnim() {
    return (
        <svg className="w-full h-full p-12" viewBox="0 0 100 100">
            {/* Neural Network Core */}
            <motion.circle
                cx="50" cy="50" r="6"
                fill="none" stroke="black" strokeWidth="0.5"
                animate={{ r: [6, 8, 6], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Connecting Nodes */}
            {[...Array(6)].map((_, i) => {
                const angle = (i * Math.PI * 2) / 6;
                const tx = 50 + 32 * Math.cos(angle);
                const ty = 50 + 32 * Math.sin(angle);
                return (
                    <g key={i}>
                        <motion.line
                            x1="50" y1="50" x2={tx} y2={ty}
                            stroke="black" strokeWidth="0.1" strokeOpacity="0.2"
                            animate={{ strokeDasharray: ["0 100", "100 0", "0 100"] }}
                            transition={{ duration: 5, repeat: Infinity, delay: i * 0.4 }}
                        />
                        <motion.circle
                            cx={tx} cy={ty} r="1.5"
                            fill="black" fillOpacity="0.2"
                            animate={{ scale: [1, 1.8, 1], fillOpacity: [0.1, 0.5, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity, delay: i * 0.6 }}
                        />
                        {/* Secondary Synapse */}
                        <motion.circle
                            r="0.8" fill="black"
                            animate={{
                                cx: [50, tx],
                                cy: [50, ty],
                                opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.8 }}
                        />
                    </g>
                )
            })}
        </svg>
    )
}
