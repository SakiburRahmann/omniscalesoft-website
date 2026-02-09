"use client"

import React from "react"

const products = [
    {
        name: "HyperScale Core",
        status: "Beta",
        problem: "Monolithic database bottlenecks in high-concurrency environments.",
        audience: "Enterprise SaaS, Fintech Infrastructure",
        vision: "An autonomous, self-healing data orchestration layer."
    },
    {
        name: "OmniFlow AI",
        status: "R&D",
        problem: "Manual overhead in multi-stage software deployment pipelines.",
        audience: "DevOps Teams, Engineering Leads",
        vision: "Zero-touch agentic automation for global software distribution."
    },
    {
        name: "SecureGate",
        status: "Live",
        problem: "Vulnerable authentication layers in edge-computing environments.",
        audience: "Cybersecurity Firms, System Architects",
        vision: "A hardware-agnostic encryption gateway for secure communications."
    }
]

export function ProductList() {
    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-black/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="space-y-1">
                    {products.map((p, i) => (
                        <div key={i} className="bg-white p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 border border-black/5 items-start">
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-3 py-1 w-fit mb-8">
                                    {p.status}
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">{p.name}</h2>
                                <div className="space-y-8">
                                    <div>
                                        <div className="text-[10px] font-black uppercase text-black/20 mb-2">Problem // Solved</div>
                                        <p className="text-lg font-medium text-black/60 leading-relaxed">{p.problem}</p>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase text-black/20 mb-2">Target // Audience</div>
                                        <p className="text-lg font-medium text-black/60 leading-relaxed">{p.audience}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:pt-20">
                                <div className="p-12 border border-black/5 bg-black/5 flex flex-col justify-between h-full min-h-[300px]">
                                    <div>
                                        <div className="text-[10px] font-black uppercase text-black/20 mb-4">Vision // Roadmap</div>
                                        <p className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-none text-black/20 italic">
                                            "{p.vision}"
                                        </p>
                                    </div>
                                    <div className="text-[10px] font-mono text-black/10 mt-12">
                                        ARCH_REF: 0x{i + 1}7F
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
