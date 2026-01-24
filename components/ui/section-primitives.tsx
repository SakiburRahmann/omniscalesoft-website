import React from "react"
import { cn } from "@/lib/utils"

export const GlassCardMaster = ({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) => {
    return (
        <div className={cn("glass-card-master rounded-[24px] p-6 md:p-8", className)}>
            {children}
        </div>
    )
}

export const Section = ({
    className,
    children,
    id,
}: {
    className?: string
    children: React.ReactNode
    id?: string
}) => {
    return (
        <section id={id} className={cn("section-padding relative z-10 px-4 md:px-6", className)}>
            {children}
        </section>
    )
}
