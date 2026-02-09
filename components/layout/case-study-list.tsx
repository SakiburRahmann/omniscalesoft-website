"use client"

import React from "react"

const caseStudies = [
    {
        client: "Fintech Global",
        title: "Microservices Migration",
        outcome: "Re-architected a legacy monolith into a Rust-based distributed system, reducing latency by 45% and enabling auto-scaling for 5M+ daily transactions."
    },
    {
        client: "Visionary Health",
        title: "AI Diagnostic Engine",
        outcome: "Engineered a HIPAA-compliant federated learning pipeline for real-time medical imaging analysis across distributed hospital nodes."
    },
    {
        client: "Logistics Pro",
        title: "Fleet Orchestration Hub",
        outcome: "Built a real-time geospatial state management system for a global delivery fleet, handling 15,000+ autonomous vehicle nodes with zero-downtime."
    }
]

export function CaseStudyList() {
    return (
        <section className="py-24 px-8 md:px-12 lg:px-24 bg-black text-white">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-1px bg-white/10 border border-white/10">
                    {caseStudies.map((cs, i) => (
                        <div key={i} className="bg-black p-12 md:p-16 hover:bg-white/5 transition-colors group h-full flex flex-col justify-between">
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-8">{cs.client}</div>
                                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 group-hover:translate-x-2 transition-transform">{cs.title}</h3>
                                <p className="text-lg font-medium text-white/40 leading-relaxed">{cs.outcome}</p>
                            </div>
                            <div className="text-[10px] font-mono text-white/10 mt-12">
                                OUTCOME_ID // 0x{i + 1}7
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
