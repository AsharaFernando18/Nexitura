"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
    items: string[];
    className?: string;
    speed?: number;
    direction?: "left" | "right";
}

export default function Marquee({ items, className = "", speed = 40, direction = "left" }: MarqueeProps) {
    // Duplicate items to ensure seamless loop
    const doubledItems = [...items, ...items, ...items, ...items];

    return (
        <div className={`flex overflow-hidden whitespace-nowrap py-4 ${className} select-none`}>
            <motion.div
                className="flex shrink-0 items-center justify-center gap-16 min-w-full"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {doubledItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-16">
                        <span className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/5 uppercase tracking-tighter">
                            {item}
                        </span>
                        {/* Dot separator */}
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-[#00C8E0] rounded-full opacity-50" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
