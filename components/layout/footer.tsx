"use client"

import React from "react"
import Link from "next/link"
import { Logo } from "@/components/ui/logo"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black py-32 px-8 md:px-12 lg:px-24 border-t border-white/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-1 lg:col-span-2 space-y-12">
                        <Link href="/" className="inline-block">
                            <Logo variant="light" />
                        </Link>
                        <p className="text-white/60 text-xl font-medium leading-tight max-w-sm">
                            Engineering high-quality software for world-class clients while architecting our own scalable product ecosystem.
                        </p>
                        <div className="flex flex-wrap gap-8 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/30">
                            <div>© {currentYear} // OMNISCALESOFT</div>
                            <div>ESTABLISHED // 2025</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="text-[11px] font-black uppercase tracking-widest text-white/20 mb-2">Structure</div>
                        <Link href="/capabilities" className="text-sm font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Capabilities</Link>
                        <Link href="/products" className="text-sm font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Products</Link>
                        <Link href="/work" className="text-sm font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Work</Link>
                        <Link href="/about" className="text-sm font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">About</Link>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="text-[11px] font-black uppercase tracking-widest text-white/20 mb-2">Establish Connection</div>
                        <Link href="/contact" className="text-sm font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Project Intake</Link>
                        <a href="mailto:solutions@omniscalesoft.com" className="text-lg font-bold text-white hover:text-white/40 transition-all underline-offset-4 decoration-white/20">solutions@omniscalesoft.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
