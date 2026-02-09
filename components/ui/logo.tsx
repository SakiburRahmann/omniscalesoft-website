import React from "react"
import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
    variant?: "default" | "light"
}

export function Logo({ className, variant = "default" }: LogoProps) {
    const isLight = variant === "light"
    return (
        <div className={cn(
            "text-xl font-bold tracking-tighter select-none flex items-center gap-3",
            isLight ? "text-white" : "text-black",
            className
        )}>
            <div className={cn(
                "w-6 h-6 rounded-sm flex items-center justify-center transition-colors",
                isLight ? "bg-white" : "bg-black"
            )}>
                <div className={cn(
                    "w-2.5 h-2.5 border-2 rotate-45",
                    isLight ? "border-black" : "border-white"
                )} />
            </div>
            <span className="uppercase tracking-tight">OmniScaleSoft</span>
        </div>
    )
}
