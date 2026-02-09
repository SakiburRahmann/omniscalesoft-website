"use client"

import React from "react"
import { motion } from "framer-motion"
import { Monitor, Smartphone, Cpu, Layers, Zap, Shield, Database, Globe, Command, Code } from "lucide-react"

const icons = [
    { Icon: Layers, label: "Custom Development" },
    { Icon: Monitor, label: "Web & Web Apps" },
    { Icon: Smartphone, label: "Mobile Apps" },
    { Icon: Cpu, label: "Desktop Apps" },
    { Icon: Zap, label: "System Software" },
    { Icon: Shield, label: "Security" },
    { Icon: Database, label: "Data Engineering" },
    { Icon: Globe, label: "Global Scale" },
    { Icon: Command, label: "Technical Logic" },
    { Icon: Code, label: "Expert Build" }
]

export function IconStrand() {
    return (
        <section className="py-32 border-y-2 border-black overflow-hidden bg-white">
            <div className="flex whitespace-nowrap">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="flex items-center gap-24 px-12"
                >
                    {[...icons, ...icons].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group cursor-default">
                            <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white group-active:bg-black group-active:text-white transition-all duration-500">
                                <item.Icon className="w-6 h-6" />
                            </div>
                            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-black/80 group-hover:text-black group-active:text-black transition-colors">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
