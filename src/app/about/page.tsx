"use client";

import { CheckCircle2, Zap, LayoutTemplate, Layers, ArrowRight, Target, Shield, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import TextReveal from "@/components/TextReveal";
import Marquee from "@/components/Marquee";

const DIFFERENTIATORS = [
    { title: "Full-Stack Capability", description: "From pixel-perfect UI to AI-powered back-end — we handle it all in-house.", icon: Layers, color: "text-blue-400" },
    { title: "Speed Without Compromise", description: "Rapid delivery cycles that don't sacrifice quality, security, or scalability.", icon: Zap, color: "text-[#00C8E0]" },
    { title: "Transparent Process", description: "You'll always know where your project stands — no black boxes, ever.", icon: LayoutTemplate, color: "text-violet-400" },
    { title: "Future-Ready Solutions", description: "We build for today and architect for tomorrow's scale.", icon: Target, color: "text-emerald-400" },
    { title: "Client-First Culture", description: "Your goals are our KPIs. We measure success by your growth, not just delivery.", icon: Shield, color: "text-orange-400" },
    { title: "Fast Turnarounds", description: "Starter projects in 2 weeks. We respect your time and your market windows.", icon: Clock, color: "text-pink-400" },
];

const TEAM_PLACEHOLDERS = [
    { initials: "NX", role: "Founder & Lead Dev", name: "Team Member", color: "from-blue-600 to-cyan-500" },
    { initials: "NX", role: "UI/UX Designer", name: "Team Member", color: "from-violet-600 to-purple-500" },
    { initials: "NX", role: "AI Engineer", name: "Team Member", color: "from-emerald-600 to-teal-500" },
    { initials: "NX", role: "Project Manager", name: "Team Member", color: "from-orange-500 to-amber-400" },
];

export default function About() {
    return (
        <div className="flex flex-col w-full">

            {/* ── Hero ──────────────────────────────────────── */}
            <section className="relative bg-[#0D1530] pt-48 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />
                <div className="absolute -top-40 right-0 w-80 h-80 bg-[#00C8E0] opacity-10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1E2D6E] opacity-40 rounded-full blur-3xl" />
                {/* Large watermark */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[200px] font-black text-white opacity-[0.02] select-none leading-none">NX</div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 bg-[rgba(0,200,224,0.1)] border border-[rgba(0,200,224,0.25)] text-[#00C8E0] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
                        <span className="w-1.5 h-1.5 bg-[#00C8E0] rounded-full animate-pulse" />
                        About Nexitura
                    </motion.div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight flex flex-wrap justify-center">
                        <TextReveal delay={0.1}>The Team Behind</TextReveal>
                        <span className="relative inline-block ml-3">
                            <TextReveal className="gradient-text" delay={0.3}>the Technology</TextReveal>
                        </span>
                    </h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        We&apos;re a global digital studio on a mission to help ambitious companies grow through smarter systems, sharper design, and intelligent automation.
                    </motion.p>
                </div>
            </section>

            {/* ── Infinite Marquee ─────────────────────────────── */}
            <section className="bg-[#0D1530] border-t border-b border-white/5 py-6 overflow-hidden">
                <Marquee
                    items={["Singapore", "London", "New York", "Dubai", "Sydney", "Remote-First", "Global Reach"]}
                    speed={35}
                    direction="right"
                />
            </section>

            {/* ── Our Story ────────────────────────────────── */}
            <section className="py-28 bg-[#FAFBFF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <p className="text-[#00C8E0] font-bold text-sm tracking-widest uppercase mb-3">Our Story</p>
                            <h2 className="text-4xl font-black text-[#1E2D6E] tracking-tight mb-8">Built to deliver, driven by impact</h2>
                            <div className="space-y-5 text-gray-600 leading-relaxed">
                                <p>Nexitura was founded on a simple but powerful idea: that small and growing businesses deserve enterprise-grade digital products — without the enterprise-grade price tag or bureaucracy.</p>
                                <p>We saw a market full of generic templates, bloated agencies, and disconnected freelancers. We built something different — a tightly integrated studio where strategy, design, and engineering live under one roof, working in concert to deliver results that actually move the needle.</p>
                                <p>From day one, we&apos;ve been technology-first and client-obsessed. Every solution we build is underpinned by clean code, scalable architecture, and a relentless focus on the end user. Whether it&apos;s a brand-new web platform, a cross-platform app, or an AI pipeline that saves your team hundreds of hours a month — we care about the outcome as much as you do.</p>
                                <p className="font-semibold text-[#1E2D6E] border-l-4 border-[#00C8E0] pl-4 italic">
                                    &ldquo;We don&apos;t just build digital products. We build the backbone that scales your business.&rdquo;
                                </p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                            <div className="relative">
                                {/* Decorative card */}
                                <div className="absolute -top-4 -right-4 w-full h-full bg-[#00C8E0] opacity-10 rounded-3xl rotate-2" />
                                <div className="relative bg-gradient-to-br from-[#1E2D6E] to-[#0D1530] rounded-3xl p-10 border border-white/10 overflow-hidden">
                                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
                                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#00C8E0] opacity-10 rounded-full blur-2xl" />
                                    <div className="relative z-10 space-y-6">
                                        {[
                                            { icon: CheckCircle2, label: "End-to-end delivery" },
                                            { icon: Zap, label: "Agile & transparent workflow" },
                                            { icon: Shield, label: "Security-first architecture" },
                                            { icon: Target, label: "Outcome-focused consulting" },
                                        ].map(({ icon: Icon, label }) => (
                                            <div key={label} className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-[rgba(0,200,224,0.1)] rounded-xl flex items-center justify-center shrink-0">
                                                    <Icon className="text-[#00C8E0]" size={20} />
                                                </div>
                                                <span className="text-white font-semibold">{label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Differentiators ──────────────────────────── */}
            <section className="bg-[#FAFBFF] py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <p className="text-[#00C8E0] font-bold text-sm tracking-widest uppercase mb-3">Why Nexitura</p>
                        <h2 className="text-4xl sm:text-5xl font-black text-[#1E2D6E] tracking-tight">What Makes Us Different</h2>
                        <div className="mt-4 h-1 w-16 bg-[#00C8E0] mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {DIFFERENTIATORS.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                whileHover={{ y: -6 }}
                                className="bg-white rounded-2xl p-8 border border-transparent hover:border-[#00C8E0]/30 shadow-sm hover:shadow-xl transition-all duration-400 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[rgba(0,200,224,0.03)] group-hover:bg-[rgba(0,200,224,0.06)] transition-all duration-500 -translate-x-8 -translate-y-8" />
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-[#FAFBFF] group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={item.color} size={24} />
                                </div>
                                <h3 className="text-lg font-black text-[#1A1A2E] mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Meet the Team ─────────────────────────────── */}
            <section className="bg-[#0D1530] py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.06]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <p className="text-[#00C8E0] font-bold text-sm tracking-widest uppercase mb-3">The People</p>
                        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">Meet the Team</h2>
                        <p className="text-gray-400 max-w-xl mx-auto">The digital architects, designers, and engineers behind Nexitura.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TEAM_PLACEHOLDERS.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="glass-dark rounded-2xl overflow-hidden border border-white/10 hover:border-[#00C8E0]/30 transition-all duration-400 group"
                            >
                                <div className={`h-40 bg-gradient-to-br ${member.color} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-noise opacity-30" />
                                    <span className="text-4xl font-black text-white/80 relative z-10">{member.initials}</span>
                                    <span className="absolute bottom-0 right-0 text-6xl font-black text-white/5 leading-none">NX</span>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="text-xs text-[#00C8E0] font-bold uppercase tracking-widest mb-1">Pending Name</p>
                                    <p className="text-white font-bold">{member.role}</p>
                                    <button className="mt-4 w-full py-2 text-xs font-bold text-gray-400 border border-white/10 rounded-lg hover:border-[#00C8E0]/50 hover:text-[#00C8E0] transition-all">
                                        LinkedIn (Pending)
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA  ───────────────────────────────── */}
            <section className="bg-[#FAFBFF] py-20 border-t border-gray-100 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#1E2D6E] mb-4">Want to work with a team that delivers?</h2>
                    <p className="text-gray-500 mb-8 max-w-lg mx-auto">Let&apos;s talk about your vision and see how Nexitura can help you get there.</p>
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group text-base">
                        Get in Touch Today <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
