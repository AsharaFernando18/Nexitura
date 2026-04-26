"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Smartphone, Share2, PenTool, Cpu, Server, Check } from "lucide-react";
import { motion } from "framer-motion";
import Marquee from "@/components/Marquee";

type DetailedServiceItem = { title: string; bgImage?: string; icon?: any; description: string; deliverables: string[]; color: string; iconColor: string; };

const DETAILED_SERVICES: DetailedServiceItem[] = [
    { title: "Website Creation", bgImage: "/website.png", description: "Custom websites built on modern frameworks — fast, secure, and built to convert.", deliverables: ["Landing pages", "Corporate sites", "E-commerce stores", "Portfolios", "CMS integration"], color: "from-blue-500/10 to-cyan-500/10", iconColor: "text-blue-500" },
    { title: "App Development", bgImage: "/mobileapp.png", description: "Mobile and web applications from concept to App Store launch.", deliverables: ["iOS & Android apps", "Progressive Web Apps (PWA)", "API integration", "Push notifications"], color: "from-violet-500/10 to-purple-500/10", iconColor: "text-violet-500" },
    { title: "Social Media Management", bgImage: "/social.png", description: "Strategy, content creation, and community management that grows your audience.", deliverables: ["Content calendars", "Post design + caption writing", "Ad creatives", "Monthly analytics reports"], color: "from-pink-500/10 to-rose-500/10", iconColor: "text-pink-500" },
    { title: "Graphic Design", bgImage: "/design.png", description: "Visual identity and marketing materials that make your brand unforgettable.", deliverables: ["Logos & brand guides", "Brochures & decks", "Social graphics", "Print materials"], color: "from-orange-500/10 to-amber-500/10", iconColor: "text-orange-500" },
    { title: "AI Automation", bgImage: "/aiauto.png", description: "Intelligent systems that reduce manual work and dramatically increase efficiency.", deliverables: ["AI chatbots", "Workflow automation", "Data pipelines", "AI-integrated apps"], color: "from-emerald-500/10 to-teal-500/10", iconColor: "text-emerald-500" },
    { title: "System Development", bgImage: "/system.png", description: "Custom software and backend infrastructure built around your unique business logic.", deliverables: ["Databases & APIs", "CRMs & ERPs", "Internal dashboards", "Third-party integrations"], color: "from-sky-500/10 to-blue-500/10", iconColor: "text-sky-500" },
];

const PROCESS = [
    { step: "01", title: "Discover", description: "Scope, requirements, timeline & research", icon: "🔍" },
    { step: "02", title: "Design", description: "Wireframes, prototypes & UI/UX design", icon: "✏️" },
    { step: "03", title: "Build", description: "Full-stack development & QA testing", icon: "⚙️" },
    { step: "04", title: "Launch", description: "Deployment, handover & ongoing support", icon: "🚀" },
];

export default function ServicesSection() {
    return (
        <div id="services" className="flex flex-col w-full bg-[#070B19]">
            {/* ── Infinite Marquee ─────────────────────────────── */}
            <section className="bg-[#0D1530] border-y border-white/5 py-6 overflow-hidden mt-10 lg:mt-24">
                <Marquee
                    items={["Strategy", "Design", "Development", "Automation", "Marketing", "Optimization", "Scale"]}
                    speed={35}
                />
            </section>

            {/* ── Service Cards ──────────────────────────────── */}
            <section className="py-28 bg-[#070B19] relative overflow-hidden">
                {/* Video Background Layer */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 mix-blend-screen pointer-events-none"
                >
                    <source src="/cor_ser_opt.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <p className="text-[#00E5FF] font-bold text-sm tracking-widest uppercase mb-3">What We Do</p>
                        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Our Core Services</h2>
                        <div className="mt-4 h-1 w-16 bg-[#00E5FF] mx-auto rounded-full" />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {DETAILED_SERVICES.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="hovercraft-card p-8 flex flex-col relative overflow-hidden group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl z-0`} />
                                {service.bgImage && (
                                    <div className="absolute inset-0 z-0 mix-blend-screen opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                                        <Image src={service.bgImage} alt={service.title} fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#070B19] via-[#070B19]/50 to-transparent" />
                                    </div>
                                )}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* CSS 3D Box Effect */}
                                    {service.icon && (
                                        <div className="relative w-14 h-14 mb-8 transition-transform duration-500 transform group-hover:-translate-y-2 group-hover:rotate-3 group-hover:scale-110">
                                            {/* 3D Extrusion Side Layer */}
                                            <div className="absolute inset-0 bg-[#d9e2ec] rounded-2xl translate-y-[3px] shadow-[0_3px_0_0_#bcccdb,0_6px_0_0_rgba(30,45,110,0.15)] transition-all duration-500 group-hover:bg-[#1E2D6E] group-hover:shadow-[0_3px_0_0_#15204c,0_6px_0_0_#0b1230,0_12px_20px_rgba(30,45,110,0.2)] group-hover:translate-y-[6px]" />

                                            {/* Front Top Layer */}
                                            <div className="absolute inset-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center z-10 transition-colors duration-500 group-hover:bg-[#00C8E0] group-hover:border-[#00C8E0]">
                                                <service.icon size={26} className={`${service.iconColor} group-hover:text-white drop-shadow-sm transform transition-transform duration-500`} />
                                            </div>
                                        </div>
                                    )}
                                    <h3 className={`text-xl font-black text-white mb-3 ${!service.icon ? 'mt-8 pt-6' : ''}`}>{service.title}</h3>
                                    <p className="text-[#B0B8C1] mb-8 text-sm leading-relaxed">{service.description}</p>
                                    <div className="mt-auto flex-grow flex flex-col justify-end">
                                        <p className="text-xs font-black text-[#00E5FF] uppercase tracking-widest mb-3">Deliverables</p>
                                        <ul className="space-y-2 relative z-10">
                                            {service.deliverables.map((item) => (
                                                <li key={item} className="flex items-start gap-2">
                                                    <Check className="text-[#00E5FF] shrink-0 mt-0.5" size={15} />
                                                    <span className="text-white text-sm">{item}</span>
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
        </div>
    );
}
