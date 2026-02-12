"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -60, rotate: rotate - 10 }}
            animate={{ opacity: 1, y: 0, rotate: rotate }}
            transition={{ duration: 1.8, delay, ease: [0.23, 0.86, 0.39, 0.96] }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                style={{ width, height }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]",
                        ""
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "",
    strap = '',
    title1 = "Student-led. Research-first.",
    title2 = "Quantitative initiatives at Texas State.",
    subtitle = "Workshops, simulations, and collaborative research focused on probability, microstructure, and volatility.",
}: {
    badge?: string
    strap?: string
    title1?: string
    title2?: string
    subtitle?: string
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#111111]">

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {strap ? (
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="mb-6"
                        >
                            <p className="text-sm muted tracking-wide">{strap}</p>
                        </motion.div>
                    ) : null}
                    {badge ? (
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] mb-8 md:mb-12"
                        >
                            <Circle className="h-2 w-2" style={{ color: 'rgb(var(--accent-rgb))' }} />
                            <span className="text-sm muted tracking-wide">{badge}</span>
                        </motion.div>
                    ) : null}

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="text-white">
                                {title1}
                            </span>
                            <br />
                            <span className={cn("text-[rgb(var(--accent-rgb))] font-semibold")}>
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl muted mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
                            {subtitle}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric };
