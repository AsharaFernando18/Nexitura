"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Web", "Apps", "Branding", "Social Media", "AI & Systems"];

const PROJECTS = [
    { id: 1, title: "Enterprise Client Dashboard", category: "Web", description: "A custom data visualization platform improving data processing speed by 40% for a fintech leader.", gradient: "from-blue-700 via-blue-900 to-[#0D1530]", tag: "Web Development", size: "large" },
    { id: 2, title: "Global Logistics App", category: "Apps", description: "Cross-platform mobile app providing real-time fleet tracking and delivery management.", gradient: "from-violet-600 via-purple-900 to-[#0D1530]", tag: "App Development", size: "normal" },
    { id: 3, title: "NeoTech Rebranding", category: "Branding", description: "A complete visual overhaul for a modern tech startup including logo and brand guidelines.", gradient: "from-orange-500 via-pink-800 to-[#0D1530]", tag: "Brand Identity", size: "normal" },
    { id: 4, title: "AI Customer Support Agent", category: "AI & Systems", description: "An intelligent chatbot reducing support tickets by 60% for an e-commerce platform.", gradient: "from-emerald-600 via-teal-900 to-[#0D1530]", tag: "AI Automation", size: "normal" },
    { id: 5, title: "Fintech Growth Campaign", category: "Social Media", description: "A high-converting social ad campaign generating 3x ROI for a fintech startup in under 6 weeks.", gradient: "from-pink-600 via-rose-900 to-[#0D1530]", tag: "Social Media", size: "normal" },
    { id: 6, title: "Healthcare Patient Portal", category: "Web", description: "HIPAA-compliant web portal enabling secure patient-doctor communication and record management.", gradient: "from-sky-600 via-blue-900 to-[#0D1530]", tag: "Web Development", size: "large" },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    return (
        <div className="flex flex-col w-full bg-[#0D1530]">

            {/* ── Hero ────────────────────────────────────── */}
            <section className="relative pt-48 pb-20 overflow-hidden text-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00C8E0] opacity-[0.07] rounded-full blur-[120px]" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 bg-[rgba(0,200,224,0.1)] border border-[rgba(0,200,224,0.25)] text-[#00C8E0] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
                        <span className="w-1.5 h-1.5 bg-[#00C8E0] rounded-full animate-pulse" />
                        Our Work
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                        Projects We&apos;re <span className="gradient-text">Proud Of</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-lg text-gray-400 max-w-xl mx-auto">
                        Results clients love. Cases that speak louder than words.
                    </motion.p>
                </div>
            </section>

            {/* ── Filter + Grid ────────────────────────────── */}
            <section className="pb-28 px-4 min-h-[60vh]">
                <div className="max-w-7xl mx-auto">

                    {/* Desktop Filters */}
                    <div className="hidden md:flex justify-center flex-wrap gap-3 mb-14">
                        {CATEGORIES.map(cat => (
                            <motion.button key={cat} onClick={() => setActiveCategory(cat)} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                                className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-[#00C8E0] text-[#1E2D6E] border-[#00C8E0] shadow-[0_0_20px_rgba(0,200,224,0.4)]"
                                    : "bg-transparent text-gray-400 border-white/10 hover:border-[#00C8E0]/40 hover:text-white"
                                    }`}>
                                {cat}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Filter */}
                    <div className="md:hidden mb-8">
                        <div className="flex items-center text-gray-300 font-bold mb-2 gap-2"><Filter size={16} /> Filter</div>
                        <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}
                            className="w-full p-3 border border-white/10 rounded-xl bg-[#1E2D6E] text-white focus:outline-none focus:ring-2 focus:ring-[#00C8E0]">
                            {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                    </div>

                    {/* Project Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.92 }}
                                    transition={{ duration: 0.35 }}
                                    whileHover={{ y: -8 }}
                                    className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.size === "large" ? "md:col-span-1 lg:col-span-1" : ""}`}
                                    style={{ minHeight: "320px" }}
                                >
                                    {/* Gradient background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`} />
                                    {/* Noise texture */}
                                    <div className="absolute inset-0 bg-noise opacity-40" />
                                    {/* Shimmer on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-7 flex flex-col justify-between">
                                        {/* Tag */}
                                        <div>
                                            <span className="inline-block bg-[rgba(0,200,224,0.2)] border border-[rgba(0,200,224,0.3)] text-[#00C8E0] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                                {project.tag}
                                            </span>
                                        </div>

                                        {/* Bottom info */}
                                        <div>
                                            <h3 className="text-white text-xl font-black mb-2 leading-snug">{project.title}</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 transition-all duration-500 overflow-hidden">{project.description}</p>
                                            <div className="mt-4 flex items-center gap-2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                                View Case Study <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Corner badge */}
                                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10 backdrop-blur-sm">
                                        <ArrowRight size={13} className="text-white -rotate-45" />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* ── Bottom CTA ──────────────────────────────── */}
            <section className="bg-[#1E2D6E] py-20 text-center border-t border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.05]" />
                <div className="relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Want results like these?</h2>
                    <p className="text-gray-300 mb-8 max-w-md mx-auto">Tell us about your project and we&apos;ll build something you&apos;re proud of.</p>
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-base group rounded-xl px-10 py-4">
                        Start Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
