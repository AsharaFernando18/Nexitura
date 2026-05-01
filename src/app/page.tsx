"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticWrapper from "@/components/MagneticWrapper";
import Marquee from "@/components/Marquee";
import TextReveal from "@/components/TextReveal";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Industries Served" },
  { value: "5★", label: "Average Rating" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  // Parallax Values mapped from 0 to 1 scroll progress of the hero section
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yBlobs = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div className="flex flex-col w-full">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-[#0A1128] pt-32 lg:pt-24 pb-12 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/space.mov" />
        </video>
        {/* Animated Background Blobs */}
        <motion.div style={{ y: yBlobs }} className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#00E5FF] opacity-[0.08] rounded-full blur-[120px] animate-blob" />
        <motion.div style={{ y: yBlobs, animationDelay: "3s" }} className="absolute -bottom-60 -right-40 w-[500px] h-[500px] bg-[#00E5FF] opacity-[0.05] rounded-full blur-[100px] animate-blob" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />

        {/* Floating decorative circles */}
        <div className="absolute top-24 right-16 w-3 h-3 bg-[#00E5FF] rounded-full opacity-60 animate-float shadow-[0_0_15px_#00E5FF]" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#00E5FF] rounded-full opacity-40 animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-[#00E5FF] rounded-full opacity-30 animate-float shadow-[0_0_10px_#00E5FF]" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 right-10 w-1.5 h-1.5 bg-white rounded-full opacity-20 animate-float-slow" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 pt-4">

          {/* Text Content */}
          <motion.div style={{ y: yText }} className="w-full lg:w-[50%] flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-fit inline-flex items-center gap-2 bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.25)] text-[#00E5FF] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4 mx-auto lg:mx-0 shadow-[0_0_10px_rgba(0,229,255,0.2)]"
            >
              <span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full animate-pulse shadow-[0_0_8px_#00E5FF]" />
              Digital Agency — Est. 2024
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white mb-4 leading-[1.08] flex flex-wrap items-center justify-center lg:justify-start">
              <TextReveal delay={0.1}>We Build the</TextReveal>
              <span className="flex items-center flex-wrap justify-center lg:justify-start mt-2 sm:mt-0">
                <span className="relative inline-block mx-2 sm:mx-3">
                  <TextReveal className="gradient-text-navy" delay={0.3}>Digital Backbone</TextReveal>
                  <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-[#00E5FF] to-transparent opacity-50" />
                </span>
                <TextReveal className="mr-2 sm:mr-3" delay={0.4}>of</TextReveal>
              </span>
              <span className="w-full xl:w-auto h-0" />
              <TextReveal delay={0.5}>Tomorrow's Business</TextReveal>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-[#B0B8C1] mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md"
            >
              Web & App Development, AI Automation, Design & Strategy — under one roof. We don't just build. We engineer growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center w-full lg:w-auto lg:justify-start"
            >
              <MagneticWrapper>
                <Link href="#services" className="btn-primary flex items-center justify-center gap-2 text-base group w-full sm:w-auto relative overflow-hidden rounded-xl shadow-[0_0_15px_rgba(0,229,255,0.3)] px-6 py-3">
                  <span className="relative z-10 flex items-center gap-2 font-bold">
                    See What We Build
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </MagneticWrapper>
              <MagneticWrapper>
                <Link href="#contact" className="relative border border-[rgba(0,229,255,0.3)] hover:border-[#00E5FF] text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-[rgba(0,229,255,0.08)] flex items-center justify-center gap-2 group w-full sm:w-auto hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] bg-[#070B19]/30 backdrop-blur-md">
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
                  <div className="text-2xl sm:text-3xl font-black text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]">{s.value}</div>
                  <div className="text-xs text-[#B0B8C1] mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-px h-10 bg-gradient-to-b from-[#00E5FF]/50 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ── Infinite Marquee ─────────────────────────────── */}
      <section className="bg-[#162044] py-8 overflow-hidden" >
        <Marquee
          items={["Web Development", "App Development", "AI Automation", "UI/UX Design", "Digital Strategy", "Growth Hacking", "Brand Identity"]}
          speed={40}
        />
      </section>

      {/* ── Quick Intro Strip ─────────────────────────────── */}
      <section className="bg-white py-12 lg:py-16 relative overflow-hidden" >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/80 via-gray-50/60 to-gray-100/80 backdrop-blur-3xl border-y border-gray-200/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[#2A2A2A] leading-relaxed">
              "Nexitura is a global digital solutions studio helping companies grow through{" "}
              <span className="text-[#1F1F1F] font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">smarter systems</span>,{" "}
              <span className="text-[#1F1F1F] font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">sharper design</span>, and{" "}
              <span className="text-[#0066FF] font-bold drop-shadow-[0_0_15px_rgba(0,102,255,0.3)]">intelligent automation</span>."
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
