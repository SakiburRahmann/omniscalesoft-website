"use client"

import React from "react"
import { LegacyNav } from "@/components/layout/legacy-nav"
import { Container } from "@/components/ui/container"

const projects = [
    {
        title: "Core Ledger Re-Architecture",
        desc: "Migrating a monolithic rails legacy system to a rust-based microservices architecture to handle high-frequency trading loads.",
    },
    {
        title: "Diagnostic Imaging Pipeline",
        desc: "Building a HIPAA-compliant federated learning pipeline for real-time X-ray analysis across 50+ hospital nodes.",
    },
    {
        title: "Global Fleet Orchestration",
        desc: "Real-time geospatial state management for a fleet of 15,000 autonomous delivery vehicles.",
    },
]

export default function Work() {
    return (
        <main className="min-h-screen bg-white font-sans text-black">
            <LegacyNav />

            <section className="pt-40 pb-24 md:pt-60 px-6">
                <Container>
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] mb-12 leading-[0.9]">Engineering Outcomes<span className="text-[#000000]">.</span></h1>

                    <div className="grid grid-cols-1 gap-px bg-[#e4e4e7] border border-[#e4e4e7] mt-32">
                        {projects.map((p, i) => (
                            <div key={i} className="bg-white p-12 md:p-20 hover:bg-slate-50 transition-colors group">
                                <div className="flex flex-col md:flex-row gap-12 items-start">
                                    <div className="flex-1">
                                        <h2 className="text-3xl md:text-4xl font-bold mb-8 group-hover:text-blue-600 transition-colors">{p.title}</h2>
                                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">{p.desc}</p>
                                    </div>
                                    <div className="bg-black text-white px-6 py-3 text-xs font-black tracking-widest uppercase cursor-pointer hover:bg-blue-600 transition-colors">
                                        View Case Study
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    )
}
