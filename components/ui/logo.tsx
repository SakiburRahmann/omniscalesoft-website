import React from "react"
import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
    variant?: "default" | "light"
}

export function Logo({ className, variant = "default" }: LogoProps) {
    return (
        <div className={cn("text-xl font-bold tracking-tighter select-none flex items-center gap-2", className)}>
            <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 border-2 border-white rotate-45" />
            </div>
            <span className="uppercase">OmniScaleSoft</span>
        </div>
    )
}
