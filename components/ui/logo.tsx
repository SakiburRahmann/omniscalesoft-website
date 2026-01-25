"use client"

import React from "react"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-3 group cursor-pointer", className)}>
            {/* Architectural Wireframe Symbol */}
            <svg
                width="32"
                height="32"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black transition-transform duration-500 group-hover:rotate-90"
            >
                {/* Outer Hexagon Frame */}
                <path
                    d="M50 5L89.5 28.5V71.5L50 95L10.5 71.5V28.5L50 5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-20"
                />

                {/* Secondary Architectural Layer */}
                <path
                    d="M50 15L79.5 32.5V67.5L50 85L20.5 67.5V32.5L50 15Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="opacity-40"
                />

                {/* Inner Connecting Network */}
                <path
                    d="M50 15L50 35M79.5 32.5L62.1 42.5M79.5 67.5L62.1 57.5M50 85L50 65M20.5 67.5L37.9 57.5M20.5 32.5L37.9 42.5"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="opacity-60"
                />

                {/* Core Node Hub */}
                <path
                    d="M50 35L62.1 42.5V57.5L50 65L37.9 57.5V42.5L50 35Z"
                    fill="currentColor"
                />

                {/* Global Nodes */}
                <circle cx="50" cy="5" r="3" fill="currentColor" />
                <circle cx="89.5" cy="28.5" r="3" fill="currentColor" />
                <circle cx="89.5" cy="71.5" r="3" fill="currentColor" />
                <circle cx="50" cy="95" r="3" fill="currentColor" />
                <circle cx="10.5" cy="71.5" r="3" fill="currentColor" />
                <circle cx="10.5" cy="28.5" r="3" fill="currentColor" />

                <circle cx="50" cy="15" r="2" fill="currentColor" className="opacity-40" />
                <circle cx="79.5" cy="32.5" r="2" fill="currentColor" className="opacity-40" />
                <circle cx="79.5" cy="67.5" r="2" fill="currentColor" className="opacity-40" />
                <circle cx="50" cy="85" r="2" fill="currentColor" className="opacity-40" />
                <circle cx="20.5" cy="67.5" r="2" fill="currentColor" className="opacity-40" />
                <circle cx="20.5" cy="32.5" r="2" fill="currentColor" className="opacity-40" />
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
