"use client"

import React, { useState } from "react"
import { LegacyNav } from "@/components/layout/legacy-nav"
import { AnimateReveal, RevealItem } from "@/components/ui/animate-reveal"
import { Button } from "@/components/ui/button"
import { ConnectionSignal3D } from "@/components/ui/connection-signal-3d"

export default function Contact() {
    const [isTyping, setIsTyping] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 3000)
    }

    return (
        <main className="min-h-screen bg-white font-sans text-black">
            <LegacyNav />

            {/* Immersive Connection Header */}
            <section className="h-screen w-full relative overflow-hidden bg-white">
                <ConnectionSignal3D isTyping={isTyping} isSubmitted={isSubmitted} />
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-center px-6">
                    <div className="max-w-7xl mx-auto w-full">
                        <AnimateReveal variant="slide-up">
                            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.9]">Start the <br />Connection<span className="text-[#000000]">.</span></h1>
                        </AnimateReveal>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-40 px-6">
                <div className="max-w-3xl mx-auto">
                    <AnimateReveal variant="slide-up">
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em]">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full text-2xl font-bold border-b-2 border-slate-100 focus:border-black outline-none pb-4 transition-colors"
                                    onFocus={() => setIsTyping(true)}
                                    onBlur={() => setIsTyping(false)}
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em]">Inquiry Level</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Enterprise Re-Architecture"
                                    className="w-full text-2xl font-bold border-b-2 border-slate-100 focus:border-black outline-none pb-4 transition-colors"
                                    onFocus={() => setIsTyping(true)}
                                    onBlur={() => setIsTyping(false)}
                                />
                            </div>
                            <Button size="lg" className="w-full py-8 text-xl uppercase tracking-widest font-black">Transmit Inquiry</Button>
                        </form>
                    </AnimateReveal>
                </div>
            </section>
        </main>
    )
}
