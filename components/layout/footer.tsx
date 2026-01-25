"use client"

import { Container } from "@/components/ui/container"
import Link from "next/link"
import { motion } from "framer-motion"
import { Logo } from "@/components/ui/logo"

export function Footer() {
    return (
        <footer className="bg-white pt-32 pb-16 border-t border-slate-200/60 transition-colors">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-8">
                            <Logo />
                        </Link>
                        <p className="text-body-premium text-lg max-w-md">
                            A software architecture firm designed for people. We engineer industrial-grade digital products for global partners and for ourselves.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-slate-400">Capabilities</h4>
                        <ul className="space-y-4">
                            {["Engineering", "Cloud Architecture", "AI Systems", "Security SRE"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-500 hover:text-blue-600 font-bold text-sm transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-slate-400">Company</h4>
                        <ul className="space-y-4">
                            {["Methodology", "The Lab", "Case Studies", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-500 hover:text-blue-600 font-bold text-sm transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                        © 2026 OMNISCALESOFT CLOUD. BUILT FOR PEOPLE.
                    </div>
                    <div className="flex gap-8">
                        {["X", "GITHUB", "LINKEDIN"].map(link => (
                            <Link key={link} href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors">
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    )
}
