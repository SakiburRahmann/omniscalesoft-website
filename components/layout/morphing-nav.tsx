"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const navItems = [
    {
        title: "Capabilities",
        dropdown: [
            { name: "Engineering", desc: "Industrial-grade software systems", icon: "⚙️" },
            { name: "Architecture", desc: "Scalable cloud infrastructures", icon: "🏗️" },
            { name: "AI Integration", desc: "Neural logic for your core", icon: "🧠" },
        ],
    },
    {
        title: "Experiments",
        dropdown: [
            { name: "The Lab", desc: "Our internal R&D projects", icon: "🧪" },
            { name: "Open Source", desc: "For ourselves and the community", icon: "📦" },
        ],
    },
    { title: "Case Studies", href: "/work" },
    { title: "Methodology", href: "/about" },
];

export function MorphingNav() {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-6">
            <Container>
                <div className="glass-card-master rounded-[24px] px-6 py-2.5 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group/logo relative z-20">
                        <span className="text-xl font-bold tracking-tighter text-foreground">
                            OmniScale<span className="text-blue-600">Soft</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 relative">
                        {navItems.map((item) => (
                            <div
                                key={item.title}
                                className="relative px-3 py-1.5"
                                onMouseEnter={() => setActiveItem(item.title)}
                                onMouseLeave={() => setActiveItem(null)}
                            >
                                {/* Understated Hover Indicator */}
                                <AnimatePresence>
                                    {activeItem === item.title && (
                                        <motion.div
                                            layoutId="nav-bg"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            className="absolute inset-0 bg-slate-900/5 dark:bg-white/5 rounded-xl -z-10"
                                        />
                                    )}
                                </AnimatePresence>

                                {item.dropdown ? (
                                    <button className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-foreground transition-colors relative z-10 px-1">
                                        {item.title}
                                        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", activeItem === item.title && "rotate-180")} />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href || "#"}
                                        className="text-sm font-bold text-slate-600 hover:text-foreground transition-colors relative z-10 px-1"
                                    >
                                        {item.title}
                                    </Link>
                                )}

                                <AnimatePresence>
                                    {item.dropdown && activeItem === item.title && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                                        >
                                            <div className="w-[300px] glass-card-master rounded-2xl p-3 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border-slate-200/60">
                                                <div className="grid gap-1">
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href="#"
                                                            className="group/sub flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                                                        >
                                                            <span className="text-xl">{subItem.icon}</span>
                                                            <div>
                                                                <div className="text-sm font-bold text-foreground leading-none mb-1">{subItem.name}</div>
                                                                <div className="text-[10px] text-slate-500 font-medium leading-tight">{subItem.desc}</div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3 relative z-20">
                        <Button variant="ghost" size="sm" className="hidden md:flex">Log In</Button>
                        <Button variant="action" size="sm" className="hidden md:flex">Contact Us</Button>
                        <button
                            className="md:hidden p-2 text-foreground"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-full left-0 right-0 px-4 pt-4"
                    >
                        <div className="glass-card-master rounded-3xl p-6 shadow-2xl border-slate-200/60">
                            <div className="flex flex-col gap-8">
                                {navItems.map(item => (
                                    <div key={item.title}>
                                        <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">{item.title}</div>
                                        <div className="grid gap-4">
                                            {item.dropdown?.map(sub => (
                                                <Link key={sub.name} href="#" className="flex items-center gap-4">
                                                    <span className="text-xl">{sub.icon}</span>
                                                    <span className="text-base font-bold text-foreground">{sub.name}</span>
                                                </Link>
                                            )) || (
                                                    <Link href={item.href || "#"} className="text-base font-bold text-foreground">
                                                        {item.title}
                                                    </Link>
                                                )}
                                        </div>
                                    </div>
                                ))}
                                <div className="pt-6 border-t border-slate-100 dark:border-white/5">
                                    <Button variant="action" className="w-full">Get Started</Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
