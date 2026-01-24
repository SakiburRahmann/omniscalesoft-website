"use client"

import React from "react"
import { LegacyNav } from "@/components/layout/legacy-nav"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export default function Contact() {
    return (
        <main className="min-h-screen bg-white font-sans text-black">
            <LegacyNav />

            <section className="pt-40 pb-24 md:pt-60 px-6">
                <Container>
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] mb-24">Contact<span className="text-[#000000]">.</span></h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e4e4e7] border border-[#e4e4e7]">
                        <div className="bg-white p-12 md:p-20 flex flex-col items-start">
                            <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-8">For Clients</span>
                            <h2 className="text-4xl font-bold mb-8">Start a Project</h2>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                                We work with Series B+ startups and Enterprise teams to build mission-critical infrastructure.
                            </p>
                            <Button size="lg" className="w-full md:w-auto">Inquire Now →</Button>
                        </div>

                        <div className="bg-white p-12 md:p-20 flex flex-col items-start">
                            <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-8">For Talent</span>
                            <h2 className="text-4xl font-bold mb-8">Join the Team</h2>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                                We are always looking for exceptional engineers who obsess over performance and quality.
                            </p>
                            <Button variant="outline" size="lg" className="w-full md:w-auto">View Openings →</Button>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    )
}
