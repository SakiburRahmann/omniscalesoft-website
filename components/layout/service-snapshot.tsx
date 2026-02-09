"use client"

import React from "react"
import { Monitor, Smartphone, Cpu, Layers, Zap } from "lucide-react"

const services = [
    {
        icon: Layers,
        title: "Custom Development",
        desc: "End-to-end engineered solutions for complex business problems."
    },
    {
        icon: Monitor,
        title: "Web & Web Apps",
        desc: "High-performance, scalable web architectures built with modern stacks."
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        desc: "Native-grade experiences for iOS and Android platforms."
    },
    {
        icon: Cpu,
        title: "Desktop Applications",
        desc: "Cross-platform desktop software with deep system integration."
    },
    {
        icon: Zap,
        title: "System & AI Software",
        desc: "AI-driven logic and low-level system optimization."
    }
]

export function ServiceSnapshot() {
    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-black/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 mb-16">
                    Capabilities // Snapshot
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1">
                    {services.map((s, i) => (
                        <div key={i} className="bg-white p-12 border border-black/5 hover:border-black transition-all group">
                            <s.icon className="w-8 h-8 mb-8 text-black/20 group-hover:text-black transition-colors" />
                            <h3 className="text-xl font-black uppercase tracking-tight mb-4">{s.title}</h3>
                            <p className="text-sm font-medium text-black/40 leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
