"use client"

import { InstitutionalNav } from "@/components/layout/institutional-nav"
import { Footer } from "@/components/layout/footer"
import { FinalCTA } from "@/components/layout/final-cta"
import { ParticleBackground } from "@/components/ui/particle-background"
import { IconStrand } from "@/components/layout/icon-strand"
import { FeatureDepth } from "@/components/layout/feature-depth"
import { ProductSnapshot } from "@/components/layout/product-snapshot"
import { BenefitsGrid } from "@/components/layout/benefits-grid"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Reveal, TextReveal } from "@/components/ui/motion-provider"

export default function Home() {
    return (
        <main className="min-h-screen">
            <InstitutionalNav />
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 overflow-hidden">
                <ParticleBackground />

                <div className="max-w-[1400px] w-full space-y-16 md:space-y-24 z-10 pt-48 flex flex-col items-center">
                    <TextReveal
                        text="We make software that scale with your business."
                        className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold leading-[0.85] tracking-tighter text-premium text-center"
                        delay={0.2}
                    />

                    <div className="flex flex-col items-center gap-12 md:gap-16 w-full">
                        <Reveal delay={0.6} className="flex justify-center">
                            <p className="text-lg md:text-xl font-medium text-black/60 max-w-2xl leading-relaxed px-4 text-center">
                                OmniScaleSoft is a software engineering company building high-integrity systems for world-class clients while architecting our own scalable product ecosystem.
                            </p>
                        </Reveal>

                        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center w-full max-w-2xl px-8">
                            <Reveal delay={0.8} width="fit-content">
                                <Button variant="default" size="lg" className="w-full sm:w-auto rounded-full px-16 h-16 text-[14px] font-black shadow-2xl shadow-black/20 uppercase tracking-widest transition-transform hover:scale-105" asChild>
                                    <Link href="/contact">Start a Project</Link>
                                </Button>
                            </Reveal>
                            <Reveal delay={1.0} width="fit-content">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-16 h-16 text-[14px] font-black bg-white/50 backdrop-blur-sm border-2 border-black/10 uppercase tracking-widest hover:bg-black hover:text-white transition-all hover:scale-105" asChild>
                                    <Link href="/work">See Our Work</Link>
                                </Button>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            <Reveal>
                <IconStrand />
            </Reveal>

            <FeatureDepth />

            <Reveal>
                <ProductSnapshot />
            </Reveal>

            <Reveal>
                <BenefitsGrid />
            </Reveal>

            <Reveal>
                <FinalCTA />
            </Reveal>

            <Footer />
        </main>
    )
}
