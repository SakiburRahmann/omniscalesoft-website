"use client"

import React from "react"
import Link from "next/link"
import { Logo } from "@/components/ui/logo"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white border-t border-black/5 py-24 px-8 md:px-12 lg:px-24">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-1 lg:col-span-2">
                        <Link href="/" className="inline-block mb-12">
                            <Logo />
                        </Link>
                        <p className="text-black/80 text-xl font-bold leading-tight max-w-sm mb-12">
                            Engineering high-quality software for clients while creating our own scalable internal products. Built for longevity.
                        </p>
                        <div className="flex gap-8 font-mono text-[12px] font-black uppercase tracking-[0.2em] text-black/60">
                            <div>© {currentYear} // OMNISCALESOFT</div>
                            <div>ESTABLISHED // 2025</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="text-[12px] font-black uppercase tracking-widest text-black/60 mb-2">Structure</div>
                        <Link href="/capabilities" className="text-md font-black text-black/80 hover:text-black transition-colors uppercase tracking-widest">Capabilities</Link>
                        <Link href="/products" className="text-md font-black text-black/80 hover:text-black transition-colors uppercase tracking-widest">Products</Link>
                        <Link href="/work" className="text-md font-black text-black/80 hover:text-black transition-colors uppercase tracking-widest">Work</Link>
                        <Link href="/about" className="text-md font-black text-black/80 hover:text-black transition-colors uppercase tracking-widest">About</Link>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="text-[12px] font-black uppercase tracking-widest text-black/60 mb-2">Establish Connection</div>
                        <Link href="/contact" className="text-md font-black text-black/80 hover:text-black transition-colors uppercase tracking-widest">Project Intake</Link>
                        <a href="mailto:solutions@omniscalesoft.com" className="text-md font-black text-black hover:underline transition-all underline-offset-4">solutions@omniscalesoft.com</a>
                    </div>
                </div>

                <div className="pt-12 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-8">
                    <div />
                    <div className="flex gap-12 text-[12px] font-black uppercase tracking-widest text-black/60">
                        <Link href="#" className="hover:text-black transition-colors">Privacy_Protocol</Link>
                        <Link href="#" className="hover:text-black transition-colors">Architecture_Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
