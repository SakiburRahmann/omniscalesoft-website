"use client"

import React from "react"
import { motion } from "framer-motion"
import { Box, Code2, Globe, Activity } from "lucide-react"

const products = [
    {
        name: "HyperScale DB",
        desc: "Distributed database engine for high-traffic enterprise applications.",
        status: "Live"
    },
    {
        name: "OmniFlow AI",
        desc: "Autonomous agentic workflow automation for software pipelines.",
        status: "Beta"
    },
    {
        name: "PulseEngine",
        desc: "Real-time metrics and system health monitoring sub-system.",
        status: "R&D"
    }
]

export function ProductSnapshot() {
    return (
        <section className="py-48 px-8 md:px-12 lg:px-24 bg-black/5 border-y border-black/5">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="mb-32">
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-premium leading-[0.85] text-center lg:text-left">
                            We build for clients. <br /> We build for <span className="text-black/40">ourselves.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((p, i) => (
                        <div key={i} className="bg-white p-12 border border-black/5 hover:border-black transition-all group relative overflow-hidden">
                            <div className="absolute top-8 right-8 text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 bg-black/5 rounded-full">
                                {p.status}
                            </div>
                            <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all">
                                <Box className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">{p.name}</h3>
                            <p className="text-lg font-medium text-black/70 leading-relaxed mb-12">{p.desc}</p>
                            <div className="w-full h-px bg-black/10 mb-12" />
                            <div className="flex items-center justify-between text-[12px] font-black uppercase tracking-widest text-black/30 group-hover:text-black transition-colors">
                                View Credentials
                                <Activity className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
