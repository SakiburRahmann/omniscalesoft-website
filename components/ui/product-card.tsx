"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const ProductCard = ({
    title,
    description,
    codePreview,
    className,
}: {
    title: string
    description: string
    codePreview?: string
    className?: string
}) => {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={cn(
                "glass-card-master flex flex-col group overflow-hidden h-full",
                className
            )}
        >
            <div className="p-6 flex-1">
                <h3 className="text-xl font-bold tracking-tight text-foreground mb-2">{title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{description}</p>
            </div>

            {codePreview && (
                <div className="mt-auto bg-slate-950/5 dark:bg-black/40 border-t border-slate-200/60 dark:border-white/5 p-4 font-mono text-[10px] technical-code-preview overflow-hidden">
                    <pre className="text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                        <code>{codePreview}</code>
                    </pre>
                </div>
            )}
        </motion.div>
    )
}
