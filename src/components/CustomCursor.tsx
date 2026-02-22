"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Use motion values for better performance than React state for rapidly changing coordinates
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth the motion using springs
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Only enable custom cursor on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Expand cursor when hovering over interactive elements
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.classList.contains('magnetic-interactive')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseLeave);
        };
    }, [cursorX, cursorY, isVisible]);

    // Don't render on mobile/touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 bg-[#00C8E0] rounded-full point-events-none z-[9999] mix-blend-difference pointer-events-none"
            style={{
                x: springX,
                y: springY,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: isHovering ? 2.5 : 1,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
        />
    );
}
