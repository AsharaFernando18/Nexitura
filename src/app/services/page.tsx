"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Smartphone, Share2, PenTool, Cpu, Server, Check } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/TextReveal";
import Marquee from "@/components/Marquee";

const DETAILED_SERVICES = [
    { title: "Website Creation", icon: Globe, description: "Custom websites built on modern frameworks — fast, secure, and built to convert.", deliverables: ["Landing pages", "Corporate sites", "E-commerce stores", "Portfolios", "CMS integration"], color: "from-blue-500/10 to-cyan-500/10", iconColor: "text-blue-500" },
    { title: "App Development", icon: Smartphone, description: "Mobile and web applications from concept to App Store launch.", deliverables: ["iOS & Android apps", "Progressive Web Apps (PWA)", "API integration", "Push notifications"], color: "from-violet-500/10 to-purple-500/10", iconColor: "text-violet-500" },
    { title: "Social Media Management", icon: Share2, description: "Strategy, content creation, and community management that grows your audience.", deliverables: ["Content calendars", "Post design + caption writing", "Ad creatives", "Monthly analytics reports"], color: "from-pink-500/10 to-rose-500/10", iconColor: "text-pink-500" },
    { title: "Graphic Design", icon: PenTool, description: "Visual identity and marketing materials that make your brand unforgettable.", deliverables: ["Logos & brand guides", "Brochures & decks", "Social graphics", "Print materials"], color: "from-orange-500/10 to-amber-500/10", iconColor: "text-orange-500" },
    { title: "AI Automation", icon: Cpu, description: "Intelligent systems that reduce manual work and dramatically increase efficiency.", deliverables: ["AI chatbots", "Workflow automation", "Data pipelines", "AI-integrated apps"], color: "from-emerald-500/10 to-teal-500/10", iconColor: "text-emerald-500" },
    { title: "System Development", icon: Server, description: "Custom software and backend infrastructure built around your unique business logic.", deliverables: ["Databases & APIs", "CRMs & ERPs", "Internal dashboards", "Third-party integrations"], color: "from-sky-500/10 to-blue-500/10", iconColor: "text-sky-500" },
];

const PROCESS = [
    { step: "01", title: "Discover", description: "Scope, requirements, timeline & research", icon: "🔍" },
    { step: "02", title: "Design", description: "Wireframes, prototypes & UI/UX design", icon: "✏️" },
    { step: "03", title: "Build", description: "Full-stack development & QA testing", icon: "⚙️" },
    { step: "04", title: "Launch", description: "Deployment, handover & ongoing support", icon: "🚀" },
];

export default function Services() {
    return (
        <div className="flex flex-col w-full">

            {/* ── Hero ─────────────────────────────────────── */}
            <section className="relative bg-[#0D1530] pt-48 pb-24 overflow-hidden text-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C8E0] opacity-[0.07] rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1E2D6E] opacity-50 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 bg-[rgba(0,200,224,0.1)] border border-[rgba(0,200,224,0.25)] text-[#00C8E0] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
                        <span className="w-1.5 h-1.5 bg-[#00C8E0] rounded-full animate-pulse" />
                        Our Services
                    </motion.div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 flex justify-center flex-wrap">
                        <TextReveal delay={0.1}>What We</TextReveal>
                        <span className="relative inline-block ml-3">
                            <TextReveal className="gradient-text" delay={0.3}>Do</TextReveal>
                        </span>
                    </h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        End-to-end digital solutions — designed to perform, built to last, engineered to grow.
                    </motion.p>
                </div>
            </section>

            {/* ── Infinite Marquee ─────────────────────────────── */}
            <section className="bg-[#0D1530] border-t border-b border-white/5 py-6 overflow-hidden">
                <Marquee
                    items={["Strategy", "Design", "Development", "Automation", "Marketing", "Optimization", "Scale"]}
                    speed={35}
                />
            </section>

            {/* ── Service Cards ──────────────────────────────── */}
            <section className="py-28 bg-[#0D1530] relative overflow-hidden">
                {/* World Background Layer */}
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image src="/world_background.png" alt="World Map Background" fill className="object-cover object-center" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {DETAILED_SERVICES.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                whileHover={{ y: -8 }}
                                className="bg-[#1E2D6E]/30 backdrop-blur-2xl border-[rgba(255,255,255,0.1)] hover:border-[#00C8E0]/40 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl p-8 flex flex-col relative overflow-hidden group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                                <div className="relative z-10">
                                    {/* CSS 3D Box Effect */}
                                    <div className="relative w-14 h-14 mb-8 transition-transform duration-500 transform group-hover:-translate-y-2 group-hover:rotate-3 group-hover:scale-110">
                                        {/* 3D Extrusion Side Layer */}
                                        <div className="absolute inset-0 bg-[#d9e2ec] rounded-2xl translate-y-[3px] shadow-[0_3px_0_0_#bcccdb,0_6px_0_0_rgba(30,45,110,0.15)] transition-all duration-500 group-hover:bg-[#1E2D6E] group-hover:shadow-[0_3px_0_0_#15204c,0_6px_0_0_#0b1230,0_12px_20px_rgba(30,45,110,0.2)] group-hover:translate-y-[6px]" />

                                        {/* Front Top Layer */}
                                        <div className="absolute inset-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center z-10 transition-colors duration-500 group-hover:bg-[#00C8E0] group-hover:border-[#00C8E0]">
                                            <service.icon size={26} className={`${service.iconColor} group-hover:text-white drop-shadow-sm transform transition-transform duration-500`} />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-3">{service.title}</h3>
                                    <p className="text-gray-400 mb-8 text-sm leading-relaxed">{service.description}</p>
                                    <div className="mt-auto flex-grow flex flex-col justify-end">
                                        <p className="text-xs font-black text-[#00C8E0] uppercase tracking-widest mb-3">Deliverables</p>
                                        <ul className="space-y-2">
                                            {service.deliverables.map((item) => (
                                                <li key={item} className="flex items-start gap-2">
                                                    <Check className="text-[#00C8E0] shrink-0 mt-0.5" size={15} />
                                                    <span className="text-gray-300 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── How We Work ───────────────────────────────── */}
            <section className="py-28 bg-[#FAFBFF] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
                        <p className="text-[#00C8E0] font-bold text-sm tracking-widest uppercase mb-3">The Process</p>
                        <h2 className="text-4xl sm:text-5xl font-black text-[#1E2D6E] tracking-tight">How We Work</h2>
                        <div className="mt-4 h-1 w-16 bg-[#00C8E0] mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
                        {/* Connecting line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#00C8E0] via-[#00C8E0] to-[#00C8E0] origin-left z-0"
                        />

                        {PROCESS.map((step, i) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                className="relative z-10 flex flex-col items-center text-center px-4"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-24 h-24 bg-white border-4 border-[#00C8E0] rounded-full flex flex-col items-center justify-center shadow-lg mb-6 animate-pulse-glow group"
                                >
                                    <span className="text-xl">{step.icon}</span>
                                    <span className="text-xs font-black text-[#00C8E0]">{step.step}</span>
                                </motion.div>
                                <h3 className="text-xl font-black text-[#1A1A2E] mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-sm">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────── */}
            <section className="bg-[#0D1530] py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#00C8E0] opacity-[0.07] rounded-full blur-[100px]" />
                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-black text-white mb-4">
                        Not sure what you need?
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-gray-400 mb-10 text-lg">
                        Let&apos;s figure it out together — book a free 30-minute strategy call.
                    </motion.p>
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-base px-10 py-4 group rounded-xl">
                        Book a Free Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
