"use client"

import { InstitutionalNav } from "@/components/layout/institutional-nav"
import { Footer } from "@/components/layout/footer"
import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal, TextReveal } from "@/components/ui/motion-provider"

export default function Contact() {
    return (
        <main className="min-h-screen">
            <InstitutionalNav />
            <section className="pt-40 pb-24 px-8 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto">
                    <TextReveal
                        text="Let's Construct."
                        className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter text-premium mb-32"
                        delay={0.2}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 border-t-2 border-black pt-24">
                        <div className="space-y-16">
                            <Reveal delay={0.4}>
                                <p className="text-3xl font-bold text-black/80 leading-tight max-w-xl">
                                    Whether you're architecting a new system or scaling a product, we're ready to engineer the solution.
                                </p>
                            </Reveal>
                            <div className="space-y-8">
                                <Reveal delay={0.6}>
                                    <div className="text-[14px] font-black uppercase tracking-widest text-black/40">Direct Anchor</div>
                                </Reveal>
                                <Reveal delay={0.8}>
                                    <a href="mailto:hello@omniscalesoft.com" className="text-3xl md:text-5xl font-black flex items-center gap-6 hover:gap-12 transition-all group">
                                        hello@omniscalesoft.com
                                        <ArrowRight className="w-12 h-12 text-black/20 group-hover:text-black transition-colors" />
                                    </a>
                                </Reveal>
                            </div>
                        </div>

                        <Reveal delay={0.6}>
                            <div className="bg-black/5 rounded-[3rem] p-16 lg:p-24 space-y-16">
                                <form className="space-y-12">
                                    <div className="space-y-4">
                                        <label className="text-[14px] font-black uppercase tracking-[0.4em] text-black/60">Full Name</label>
                                        <input type="text" className="w-full bg-transparent border-b-2 border-black/10 py-6 text-2xl font-black focus:border-black outline-none transition-colors" placeholder="Sakibur Rahman" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[14px] font-black uppercase tracking-[0.4em] text-black/60">Email Address</label>
                                        <input type="email" className="w-full bg-transparent border-b-2 border-black/10 py-6 text-2xl font-black focus:border-black outline-none transition-colors" placeholder="sakib@example.com" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[14px] font-black uppercase tracking-[0.4em] text-black/60">Message</label>
                                        <textarea className="w-full bg-transparent border-b-2 border-black/10 py-6 text-2xl font-black focus:border-black outline-none transition-colors min-h-[200px] resize-none" placeholder="Details of your system requirements..." />
                                    </div>
                                    <Button variant="action" size="lg" className="w-full h-20 text-[12px] font-bold rounded-full bg-black text-white hover:bg-white hover:text-black hover:border-black transition-all">
                                        Submit Request
                                    </Button>
                                </form>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
