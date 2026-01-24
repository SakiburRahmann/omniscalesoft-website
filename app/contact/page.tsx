"use client"

import React from "react"
import { LegacyNav } from "@/components/layout/legacy-nav"
import { AnimateReveal, RevealItem } from "@/components/ui/animate-reveal"
import { Button } from "@/components/ui/button"

export default function Contact() {
    return (
        <main className="min-h-screen bg-white font-sans text-black">
            <LegacyNav />

            <section className="pt-40 pb-24 md:pt-60 px-6">
                <div className="max-w-7xl mx-auto">
                    <AnimateReveal variant="slide-up">
                        <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] mb-24 leading-[0.9]">Inquiry<span className="text-[#000000]">.</span></h1>
                    </AnimateReveal>

                    <AnimateReveal variant="slide-up" staggerChildren={0.25} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e4e4e7] border border-[#e4e4e7]">
                        <RevealItem className="bg-white p-12 md:p-20 flex flex-col items-start hover:bg-slate-50 transition-colors">
                            <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-8">For Clients</span>
                            <h2 className="text-4xl font-bold mb-8 uppercase tracking-tight">Project Inquiry</h2>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                                We work with Series B+ startups and Enterprise teams to build mission-critical infrastructure.
                            </p>
                            <Button size="lg" className="w-full md:w-auto uppercase px-10">Inquire Now</Button>
                        </RevealItem>

                        <RevealItem className="bg-white p-12 md:p-20 flex flex-col items-start hover:bg-slate-50 transition-colors">
                            <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-8">For Talent</span>
                            <h2 className="text-4xl font-bold mb-8 uppercase tracking-tight">Engineering Careers</h2>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                                We are always looking for exceptional engineers who obsess over performance and quality.
                            </p>
                            <Button variant="outline" size="lg" className="w-full md:w-auto uppercase px-10">View Openings</Button>
                        </RevealItem>
                    </AnimateReveal>
                </div>
            </section>
        </main>
    )
}
