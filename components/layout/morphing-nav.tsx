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
        title: "Products",
        dropdown: [
            { name: "Mobile Apps", desc: "Elite iOS & Android experiences", icon: "📱" },
            { name: "Web Platforms", desc: "Scalable enterprise solutions", icon: "🌐" },
            { name: "AI Systems", desc: "Next-gen intelligent automation", icon: "🤖" },
        ],
    },
    {
        title: "Services",
        dropdown: [
            { name: "Custom Software", desc: "Tailored to your business needs", icon: "🛠️" },
            { name: "UI/UX Design", desc: "Apple-level design intuition", icon: "🏗️" },
            { name: "Consulting", desc: "Strategic technology roadmap", icon: "📈" },
        ],
    },
    { title: "Portfolio", href: "/work" },
    { title: "About", href: "/about" },
];

export function MorphingNav() {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-6">
            <Container>
                <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tighter text-foreground">
                            OmniScale<span className="text-blue-600">Soft</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 group/nav">
                        {navItems.map((item) => (
                            <div
                                key={item.title}
                                className="relative"
                                onMouseEnter={() => setActiveItem(item.title)}
                                onMouseLeave={() => setActiveItem(null)}
                            >
                                {item.dropdown ? (
                                    <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 hover:text-foreground transition-colors">
                                        {item.title}
                                        <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", activeItem === item.title && "rotate-180")} />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href || "#"}
                                        className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-foreground transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                )}

                                <AnimatePresence>
                                    {item.dropdown && activeItem === item.title && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                                        >
                                            <div className="w-[300px] glass-card rounded-2xl p-4 shadow-2xl border-white/40 overflow-hidden">
                                                <div className="grid gap-4">
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href="#"
                                                            className="group/sub flex items-start gap-3 p-2 rounded-xl hover:bg-slate-100/50 transition-colors"
                                                        >
                                                            <span className="text-2xl">{subItem.icon}</span>
                                                            <div>
                                                                <div className="text-sm font-bold text-foreground">{subItem.name}</div>
                                                                <div className="text-xs text-slate-500">{subItem.desc}</div>
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

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="hidden md:flex">Log In</Button>
                        <Button size="sm" className="hidden md:flex shadow-blue-500/20 shadow-lg">Free Trial</Button>
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border"
                    >
                        <Container className="py-8 flex flex-col gap-6">
                            {navItems.map(item => (
                                <div key={item.title}>
                                    <div className="text-lg font-bold mb-3">{item.title}</div>
                                    {item.dropdown?.map(sub => (
                                        <Link key={sub.name} href="#" className="block py-2 text-slate-600 pl-4 border-l border-slate-200">
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                            <Button className="w-full">Get Started</Button>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
