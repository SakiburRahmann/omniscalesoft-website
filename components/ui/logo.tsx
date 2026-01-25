"use client"

import React from "react"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-3 group cursor-pointer", className)}>
            {/* Architectural Octagonal Symbol */}
            <svg
                width="32"
                height="32"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black transition-transform duration-500 group-hover:rotate-45"
            >
                {/* Outer Octagon Frame */}
                <path
                    d="M50 5L81.8 18.2L95 50L81.8 81.8L50 95L18.2 81.8L5 50L18.2 18.2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-20"
                />

                {/* Secondary Architectural Layer */}
                <path
                    d="M50 15L74.7 25.3L85 50L74.7 74.7L50 85L25.3 74.7L15 50L25.3 25.3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="opacity-40"
                />

                {/* Inner Connecting Network */}
                <path
                    d="M50 15V35 M74.7 25.3L60.6 39.4 M85 50H65 M74.7 74.7L60.6 60.6 M50 85V65 M25.3 74.7L39.4 60.6 M15 50H35 M25.3 25.3L39.4 39.4"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="opacity-60"
                />

                {/* Octagonal Core Node Hub */}
                <path
                    d="M50 35L60.6 39.4L65 50L60.6 60.6L50 65L39.4 60.6L35 50L39.4 39.4Z"
                    fill="currentColor"
                />

                {/* Global Nodes (Outer) */}
                <circle cx="50" cy="5" r="2.5" fill="currentColor" />
                <circle cx="81.8" cy="18.2" r="2.5" fill="currentColor" />
                <circle cx="95" cy="50" r="2.5" fill="currentColor" />
                <circle cx="81.8" cy="81.8" r="2.5" fill="currentColor" />
                <circle cx="50" cy="95" r="2.5" fill="currentColor" />
                <circle cx="18.2" cy="81.8" r="2.5" fill="currentColor" />
                <circle cx="5" cy="50" r="2.5" fill="currentColor" />
                <circle cx="18.2" cy="18.2" r="2.5" fill="currentColor" />

                {/* Secondary Nodes (Inner) */}
                <circle cx="50" cy="15" r="1.5" fill="currentColor" className="opacity-40" />
                <circle cx="74.7" cy="25.3" r="1.5" fill="currentColor" className="opacity-40" />
                <circle cx="85" cy="50" r="1.5" fill="currentColor" className="opacity-40" />
                <circle cx="74.7" cy="74.7" r="1.5" fill="currentColor" className="opacity-40" />
                <circle cx="50" cy="85" r="1.5" fill="currentColor" className="opacity-40" />
                <circle cx="25.3" cy="74.7" r="1.5" fill="currentColor" className="opacity-40" />
                <circle cx="15" cy="50" r="1.5" fill="currentColor" className="opacity-40" />
                <circle cx="25.3" cy="25.3" r="1.5" fill="currentColor" className="opacity-40" />
            </svg>

            {/* Brand Typography */}
            <span className="flex flex-col leading-none">
                <span className="text-lg font-serif font-black tracking-tight text-black flex items-baseline">
                    OmniScale<span className="text-[10px] font-black tracking-[0.2em] ml-1 text-slate-400 uppercase">Soft</span>
                </span>
            </span>
        </div>
    )
}
