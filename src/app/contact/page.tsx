"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const CONTACT_INFO = [
    { icon: Mail, label: "Email Us", value: "hello@nexitura.com", link: "mailto:hello@nexitura.com" },
    { icon: MapPin, label: "Location", value: "Worldwide — Remote-First Studio", link: null },
    { icon: Clock, label: "Response Time", value: "Within 24 hours, guaranteed", link: null },
];

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col w-full">

            {/* ── Hero ─────────────────────────────────────── */}
            <section className="relative bg-[#0D1530] pt-48 pb-24 overflow-hidden text-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00C8E0] opacity-[0.08] rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1E2D6E] opacity-60 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 bg-[rgba(0,200,224,0.1)] border border-[rgba(0,200,224,0.25)] text-[#00C8E0] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
                        <span className="w-1.5 h-1.5 bg-[#00C8E0] rounded-full animate-pulse" />
                        Let&apos;s Talk
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                        Start Your <span className="gradient-text">Project</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-lg text-gray-400 max-w-xl mx-auto">
                        Tell us what you&apos;re building. We&apos;ll get back to you within 24 hours with a free consultation.
                    </motion.p>
                </div>
            </section>

            {/* ── Contact Body ──────────────────────────────── */}
            <section className="bg-[#FAFBFF] py-24 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

                    {/* Left: Info Cards */}
                    <div className="lg:col-span-2 space-y-5">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-8">
                            <h2 className="text-2xl font-black text-[#1E2D6E] mb-2">We&apos;d love to hear from you</h2>
                            <p className="text-gray-500 text-sm leading-relaxed">Whether you have a brief ready or just an idea — we&apos;re happy to explore it with you. No commitment required.</p>
                        </motion.div>

                        {CONTACT_INFO.map((info, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 hover:border-[#00C8E0]/30 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-11 h-11 bg-[rgba(0,200,224,0.1)] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[rgba(0,200,224,0.18)] transition-colors duration-300">
                                    <info.icon className="text-[#00C8E0]" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{info.label}</p>
                                    {info.link ? (
                                        <a href={info.link} className="text-[#1A1A2E] font-bold text-sm hover:text-[#00C8E0] transition-colors">{info.value}</a>
                                    ) : (
                                        <p className="text-[#1A1A2E] font-bold text-sm">{info.value}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {/* Decorative card */}
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                            className="relative bg-gradient-to-br from-[#1E2D6E] to-[#0D1530] rounded-2xl p-7 overflow-hidden border border-white/5 mt-4">
                            <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
                            <div className="absolute bottom-0 right-0 w-28 h-28 bg-[#00C8E0] opacity-10 rounded-full blur-2xl" />
                            <p className="relative text-white/80 text-sm font-semibold leading-relaxed italic">
                                &ldquo;Every great product starts with an honest conversation. Let&apos;s have ours.&rdquo;
                            </p>
                            <p className="relative text-[#00C8E0] text-xs font-black mt-3 uppercase tracking-widest">— The Nexitura Team</p>
                        </motion.div>
                    </div>

                    {/* Right: Form */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3">
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[rgba(0,200,224,0.04)] rounded-full blur-3xl" />

                            {submitted ? (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
                                    <div className="w-20 h-20 rounded-full bg-[rgba(0,200,224,0.15)] flex items-center justify-center mb-6">
                                        <Send className="text-[#00C8E0]" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-[#1E2D6E] mb-3">Message Sent!</h3>
                                    <p className="text-gray-500 max-w-sm">Thanks for reaching out. We&apos;ll be in touch within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Your Name *</label>
                                            <input required type="text" value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })}
                                                className="w-full p-4 bg-[#FAFBFF] border border-gray-200 rounded-xl text-[#1A1A2E] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E0] focus:border-transparent transition-all placeholder:text-gray-400"
                                                placeholder="John Smith" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Email Address *</label>
                                            <input required type="email" value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })}
                                                className="w-full p-4 bg-[#FAFBFF] border border-gray-200 rounded-xl text-[#1A1A2E] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E0] focus:border-transparent transition-all placeholder:text-gray-400"
                                                placeholder="john@company.com" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Company / Brand</label>
                                        <input type="text" value={formState.company} onChange={e => setFormState({ ...formState, company: e.target.value })}
                                            className="w-full p-4 bg-[#FAFBFF] border border-gray-200 rounded-xl text-[#1A1A2E] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E0] focus:border-transparent transition-all placeholder:text-gray-400"
                                            placeholder="Acme Corp (optional)" />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Service Needed *</label>
                                            <select required value={formState.service} onChange={e => setFormState({ ...formState, service: e.target.value })}
                                                className="w-full p-4 bg-[#FAFBFF] border border-gray-200 rounded-xl text-[#1A1A2E] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E0] focus:border-transparent transition-all">
                                                <option value="">Select a service</option>
                                                <option>Website Creation</option>
                                                <option>App Development</option>
                                                <option>AI Automation</option>
                                                <option>Graphic Design</option>
                                                <option>Social Media Management</option>
                                                <option>System Development</option>
                                                <option>Multiple / Not sure</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Budget Range</label>
                                            <select value={formState.budget} onChange={e => setFormState({ ...formState, budget: e.target.value })}
                                                className="w-full p-4 bg-[#FAFBFF] border border-gray-200 rounded-xl text-[#1A1A2E] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E0] focus:border-transparent transition-all">
                                                <option value="">Select range</option>
                                                <option>Under RM 3,000</option>
                                                <option>RM 3,000 – RM 7,000</option>
                                                <option>RM 7,000 – RM 15,000</option>
                                                <option>RM 15,000+</option>
                                                <option>Not sure yet</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Tell Us About Your Project *</label>
                                        <textarea required rows={5} value={formState.message} onChange={e => setFormState({ ...formState, message: e.target.value })}
                                            className="w-full p-4 bg-[#FAFBFF] border border-gray-200 rounded-xl text-[#1A1A2E] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#00C8E0] focus:border-transparent transition-all resize-none placeholder:text-gray-400"
                                            placeholder="Describe what you're building, your goals, and any key deadlines..."></textarea>
                                    </div>

                                    <button type="submit"
                                        className="w-full btn-primary py-4 text-base flex items-center justify-center gap-2 group rounded-xl">
                                        <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        Send Message
                                    </button>
                                    <p className="text-center text-xs text-gray-400">We&apos;ll respond within 24 hours — usually much sooner.</p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
