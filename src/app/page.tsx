"use client";

import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Share2, PenTool, Cpu, Server, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import MagneticWrapper from "@/components/MagneticWrapper";
import Marquee from "@/components/Marquee";
import TextReveal from "@/components/TextReveal";
import Image from "next/image";

const SERVICES = [
  { title: "Website Creation", icon: Globe, description: "Custom sites built to convert, optimised for speed and mobile.", color: "from-blue-500/20 to-cyan-500/20" },
  { title: "App Development", icon: Smartphone, description: "iOS, Android & cross-platform applications from concept to launch.", color: "from-violet-500/20 to-purple-500/20" },
  { title: "Social Media Mgmt", icon: Share2, description: "Content strategies, calendar management, and community growth.", color: "from-pink-500/20 to-rose-500/20" },
  { title: "Graphic Design", icon: PenTool, description: "Brand visuals, logo identity, and marketing collateral that mean business.", color: "from-orange-500/20 to-amber-500/20" },
  { title: "AI Automation", icon: Cpu, description: "Smart workflows, chatbots and pipelines that reduce manual work.", color: "from-emerald-500/20 to-teal-500/20" },
  { title: "System Development", icon: Server, description: "Backend systems, APIs and integrations that power your operations.", color: "from-sky-500/20 to-blue-500/20" },
];

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Industries Served" },
  { value: "5★", label: "Average Rating" },
];

const FEATURED_WORKS = [
  { title: "FinTech Dashboard", category: "Web App", gradient: "from-blue-600 to-cyan-400", description: "A high-performance trading dashboard handling thousands of real-time transactions." },
  { title: "Eco-Commerce Platform", category: "E-Commerce", gradient: "from-emerald-500 to-teal-400", description: "Bespoke online store with advanced filtering, 3D product viewers, and automated fulfillment." },
  { title: "AI Health Assistant", category: "Mobile App", gradient: "from-violet-600 to-purple-500", description: "Cross-platform mobile application utilizing AI for personalized health tracking." },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center bg-[#0D1530] pt-24 pb-4 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#00C8E0] opacity-10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute -bottom-60 -right-40 w-[500px] h-[500px] bg-[#1E2D6E] opacity-30 rounded-full blur-[100px] animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00C8E0] opacity-[0.03] rounded-full blur-[150px]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />

        {/* Floating decorative circles */}
        <div className="absolute top-24 right-16 w-4 h-4 bg-[#00C8E0] rounded-full opacity-60 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#00C8E0] rounded-full opacity-40 animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-[#00C8E0] rounded-full opacity-30 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 right-10 w-1.5 h-1.5 bg-white rounded-full opacity-20 animate-float-slow" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 pt-4">

          {/* Text Content */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[rgba(0,200,224,0.1)] border border-[rgba(0,200,224,0.25)] text-[#00C8E0] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4 mx-auto lg:mx-0"
            >
              <span className="w-1.5 h-1.5 bg-[#00C8E0] rounded-full animate-pulse" />
              Digital Agency — Est. 2024
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white mb-4 leading-[1.08] flex flex-wrap items-center justify-center lg:justify-start">
              <TextReveal delay={0.1}>We Build the</TextReveal>
              <span className="flex items-center whitespace-nowrap">
                <span className="relative inline-block mx-2 sm:mx-3">
                  <TextReveal className="gradient-text !flex-nowrap" delay={0.3}>Digital Backbone</TextReveal>
                  <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-[#00C8E0] to-transparent opacity-50" />
                </span>
                <TextReveal className="!flex-nowrap mr-2 sm:mr-3" delay={0.4}>of</TextReveal>
              </span>
              <span className="w-full xl:w-auto h-0" />
              <TextReveal className="!flex-nowrap" delay={0.5}>Tomorrow&apos;s Business</TextReveal>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Web & App Development, AI Automation, Design & Strategy — under one roof. We don&apos;t just build. We engineer growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticWrapper>
                <Link href="/services" className="btn-primary flex items-center justify-center gap-2 text-base group w-full sm:w-auto">
                  See What We Build
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticWrapper>
              <MagneticWrapper>
                <Link href="/contact" className="relative border border-[rgba(255,255,255,0.2)] hover:border-[#00C8E0] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-[rgba(0,200,224,0.08)] flex items-center justify-center gap-2 group w-full sm:w-auto">
                  Get a Free Quote
                </Link>
              </MagneticWrapper>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto lg:mx-0"
            >
              {STATS.map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-[#00C8E0]">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-full lg:w-[50%] relative flex justify-center lg:justify-end shrink-0"
          >
            <div className="relative w-[450px] sm:w-[650px] lg:w-auto lg:h-[65vh] xl:h-[75vh] aspect-[4/5] lg:aspect-square lg:translate-x-12 xl:translate-x-24">
              {/* Subtle glow behind the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00b4d8]/20 to-[#1e2d6e]/20 rounded-full blur-3xl" />
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateX: [0, 4, -2, 0],
                  rotateY: [0, -6, 4, 0],
                  rotateZ: [0, 2, -1, 0]
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="absolute inset-0 z-10"
              >
                <Image
                  src="/boy.png"
                  alt="Nexitura 3D Boy Graphic"
                  fill
                  className="object-contain drop-shadow-2xl translate-y-4"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ── Infinite Marquee ─────────────────────────────── */}
      <section className="bg-[#0D1530] border-t border-b border-white/5 py-8 overflow-hidden">
        <Marquee
          items={["Web Development", "App Development", "AI Automation", "UI/UX Design", "Digital Strategy", "Growth Hacking", "Brand Identity"]}
          speed={40}
        />
      </section>

      {/* ── Quick Intro Strip ─────────────────────────────── */}
      <section className="bg-white py-16 border-b border-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <p className="text-xl sm:text-2xl font-medium text-[#1A1A2E] leading-relaxed">
            &ldquo;Nexitura is a global digital solutions studio helping companies grow through{" "}
            <span className="text-[#1E2D6E] font-bold">smarter systems</span>,{" "}
            <span className="text-[#1E2D6E] font-bold">sharper design</span>, and{" "}
            <span className="text-[#00C8E0] font-bold">intelligent automation</span>.&rdquo;
          </p>
        </motion.div>
      </section>

      {/* ── Core Services ───────────────────────────────── */}
      <section className="bg-[#0D1530] py-28 relative overflow-hidden">
        {/* World Background Layer */}
        <div className="absolute inset-0 z-0 opacity-60">
          <Image src="/world_background.png" alt="World Map Background" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-[#00C8E0] font-bold text-sm tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Our Core Services</h2>
            <div className="mt-4 h-1 w-16 bg-[#00C8E0] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Link href="/services" className="block group h-full">
                  <div className="bg-[#1E2D6E]/30 backdrop-blur-2xl rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-[#00C8E0]/40 h-full flex flex-col relative overflow-hidden hover:-translate-y-2">
                    {/* Gradient bg on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      {/* CSS 3D Button/Platform Effect */}
                      <div className="relative w-14 h-14 mb-8 transition-transform duration-500 transform group-hover:-translate-y-2 group-hover:-rotate-3">
                        {/* 3D Extrusion Layer */}
                        <div className="absolute inset-0 bg-[#d9e2ec] rounded-2xl translate-y-[3px] shadow-[0_3px_0_0_#bcccdb,0_6px_0_0_rgba(30,45,110,0.15)] transition-all duration-500 group-hover:bg-[#009bb0] group-hover:shadow-[0_3px_0_0_#008092,0_6px_0_0_#006473,0_12px_20px_rgba(0,0,0,0.15)] group-hover:translate-y-[5px]" />

                        {/* Front Face Layer */}
                        <div className="absolute inset-0 bg-white border border-gray-100 rounded-2xl flex items-center justify-center z-10 transition-colors duration-500 group-hover:bg-[#00C8E0] group-hover:border-[#00C8E0]">
                          <service.icon size={26} className="text-[#1E2D6E] group-hover:text-white drop-shadow-sm transform transition-transform duration-500 group-hover:scale-110" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">{service.description}</p>
                      <div className="flex items-center text-[#00C8E0] font-bold text-sm group-hover:gap-2 transition-all duration-300">
                        Explore <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-white hover:text-[#00C8E0] font-bold text-sm transition-colors group">
              View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Trust Strip ─────────────────────────────────── */}
      <section className="bg-[#1E2D6E] py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.06]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y-2 md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.08)]">
            {[
              "End-to-end delivery — strategy to launch",
              "Technology-first approach with human-centered design",
              "Local expertise, global standards",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex items-center justify-center md:justify-start gap-4 py-6 md:py-0 md:px-8"
              >
                <CheckCircle2 className="text-[#00C8E0] shrink-0" size={30} />
                <p className="font-semibold text-base leading-snug">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-[#00C8E0] font-bold text-sm tracking-widest uppercase mb-3">Our Work</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#1E2D6E] tracking-tight">Featured Projects</h2>
              <div className="mt-4 h-1 w-16 bg-[#00C8E0] rounded-full" />
            </motion.div>
            <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-[#1E2D6E] hover:text-[#00C8E0] font-bold text-sm transition-colors group">
              View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_WORKS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-noise opacity-50" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-[#00C8E0] text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-white text-2xl font-black mb-2 leading-tight">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">{project.description}</p>
                  <Link href="/portfolio" className="mt-4 inline-flex items-center gap-2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 hover:text-[#00C8E0]">
                    View Case Study <ArrowRight size={14} />
                  </Link>
                </div>
                {/* Corner accent */}
                <div className="absolute top-5 right-5 w-8 h-8 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight size={14} className="text-white -rotate-45" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-[#1E2D6E] hover:text-[#00C8E0] font-bold transition-colors group">
              View All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section className="relative flex items-center justify-center bg-[#0D1530] py-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#00C8E0] opacity-10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#1E2D6E] opacity-40 rounded-full blur-[120px] pointer-events-none animate-blob" style={{ animationDelay: "3s" }} />

        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full border border-[#00C8E0] opacity-50 animate-float-slow" />
        <div className="absolute bottom-1/3 right-10 lg:right-1/4 w-8 h-8 rounded border-2 border-white opacity-10 animate-float rotate-45" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-10 lg:right-32 w-3 h-3 bg-[#00C8E0] rounded-full opacity-40 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-10 w-2 h-2 bg-white rounded-full opacity-20 animate-float-slow" style={{ animationDelay: "3.5s" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#00C8E0] text-sm font-bold tracking-widest uppercase mb-4"
            >
              Let&apos;s Build Together
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
            >
              Ready to Build Something <span className="gradient-text">Powerful?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Let&apos;s have a free 30-minute strategy call and see how we can transform your digital presence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative inline-block w-max mx-auto lg:mx-0"
            >
              {/* Pulsing ring */}
              <span className="absolute -inset-1 rounded-xl bg-[#00C8E0] opacity-20 animate-ping-ring" />
              <Link href="/contact" className="relative btn-primary text-lg inline-flex items-center justify-center gap-2 group rounded-xl px-10 py-4">
                Start a Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
