"use client"

import React from "react"
import { LegacyNav } from "@/components/layout/legacy-nav"
import { AnimateReveal, RevealItem } from "@/components/ui/animate-reveal"
import { Button } from "@/components/ui/button"

import { GalleryCorridor3D } from "@/components/ui/gallery-corridor-3d"

const projects = [
    {
        title: "Core Ledger Re-Architecture",
        tag: "FINTECH / RUST",
        desc: "Migrating a monolithic rails legacy system to a rust-based microservices architecture to handle high-frequency trading loads.",
    },
    {
        title: "Diagnostic Imaging Pipeline",
        tag: "HEALTHCARE / AI",
        desc: "Building a HIPAA-compliant federated learning pipeline for real-time X-ray analysis across 50+ hospital nodes.",
    },
    {
        title: "Global Fleet Orchestration",
        tag: "LOGISTICS / EDGE",
        desc: "Real-time geospatial state management for a fleet of 15,000 autonomous delivery vehicles.",
    },
]

export default function Work() {
    return (
        <main className="min-h-screen bg-white font-sans text-black">
            <LegacyNav />

            {/* Immersive 3D Gallery Header */}
            <section className="h-screen w-full relative overflow-hidden bg-black text-white">
                <GalleryCorridor3D />
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-center px-6">
                    <div className="max-w-7xl mx-auto w-full">
                        <AnimateReveal variant="slide-up">
                            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.9]">Selected <br />Exhibitions<span className="text-white">.</span></h1>
                            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-xl leading-relaxed">
                                Curated engineering outcomes for global infrastructure leads. Scroll to navigate the corridor.
                            </p>
                        </AnimateReveal>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-40 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <AnimateReveal variant="slide-up">
                        <h2 className="text-3xl font-bold mb-24 uppercase tracking-tighter">System Specifications</h2>
                    </AnimateReveal>


                    <AnimateReveal variant="slide-up" staggerChildren={0.2} className="grid grid-cols-1 gap-px bg-[#e4e4e7] border border-[#e4e4e7]">
                        {projects.map((p, i) => (
                            <RevealItem key={i} className="bg-white p-12 md:p-20 hover:bg-slate-50 transition-colors group">
                                <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
                                    <div className="flex-1">
                                        <div className="text-[10px] font-black tracking-widest text-slate-400 mb-6 uppercase">{p.tag}</div>
                                        <h2 className="text-3xl md:text-5xl font-bold mb-8 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{p.title}</h2>
                                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">{p.desc}</p>
                                    </div>
                                    <Button variant="outline" className="group-hover:bg-black group-hover:text-white transition-all uppercase px-8">
                                        View System Specs
                                    </Button>
                                </div>
                            </RevealItem>
                        ))}
                    </AnimateReveal>
                </div>
            </section>
        </main>
    )
}
