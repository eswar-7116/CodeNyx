import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = ["developers", "designers", "innovators", "builders", "creators"];
const TARGET_DATE = new Date("2026-03-28T10:00:00+05:30");

// The grand geometric visual anchor
const GeometricCore = () => (
    <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none flex items-center justify-center opacity-[0.25] -z-10 mix-blend-screen">
        {/* Large expanding outer rings */}
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute w-full h-full rounded-full border border-accent-secondary/10"
        />
        <motion.div
            initial={{ scale: 0.6, rotate: 0 }}
            animate={{ scale: 1, rotate: 180 }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-accent-primary/20"
        />

        {/* Inner mechanical core */}
        <motion.div
            initial={{ rotate: 180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            className="absolute w-[60%] h-[60%] rounded-full border-[1px] border-accent-secondary/20 flex items-center justify-center"
        >
            <div className="absolute top-[-4px] left-[50%] w-2 h-2 rounded-full bg-accent-secondary shadow-[0_0_10px_#FF4400]" />
            <div className="absolute bottom-[-4px] right-[20%] w-1.5 h-1.5 rounded-full bg-accent-primary shadow-[0_0_10px_#FFFFFF]" />
        </motion.div>

        <motion.div
            className="absolute w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-accent-secondary/5 to-transparent backdrop-blur-3xl border border-white/5 shadow-[inset_0_0_40px_rgba(255,68,0,0.1)]"
        />
    </div>
);

const Hero = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState<{ d: number; h: number; m: number; s: number } | null>(null);
    const [isPast, setIsPast] = useState(false);

    useEffect(() => {
        const wordInterval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % WORDS.length);
        }, 3000);
        return () => clearInterval(wordInterval);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            const difference = +TARGET_DATE - +new Date();
            if (difference > 0) {
                setTimeLeft({
                    d: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    h: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    m: Math.floor((difference / 1000 / 60) % 60),
                    s: Math.floor((difference / 1000) % 60),
                });
            } else {
                setIsPast(true);
                setTimeLeft(null);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-[140px] pb-[80px] overflow-hidden px-6">

            {/* Motivated glow from the core */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vh] -z-20 pointer-events-none opacity-[0.5] mix-blend-screen bg-glow-hero blur-[120px]" />

            <GeometricCore />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-[1200px] w-full flex flex-col items-center text-center z-10"
            >
                <motion.p variants={itemVariants} className="font-mono text-[13px] text-accent-secondary font-bold uppercase tracking-[4px] mb-[40px] opacity-80">
                    CodeNyx &mdash; March 2026
                </motion.p>

                {/* Title - Massive */}
                <motion.h1
                    variants={itemVariants}
                    className="font-display font-black text-[clamp(72px,16vw,180px)] tracking-[-0.05em] leading-[0.85] pb-4 text-gradient-primary w-full"
                >
                    CodeNyx
                </motion.h1>

                {/* Subtitle - Pure White */}
                <motion.div variants={itemVariants} className="flex flex-col items-center mt-[32px] mb-[56px]">
                    <h2 className="font-display font-black text-[clamp(28px,4vw,44px)] text-accent-primary tracking-[-0.03em] leading-[1.2]">
                        The 36-hour hackathon
                    </h2>
                    <div className="flex items-center gap-3 font-display font-black text-[clamp(28px,4vw,44px)] tracking-[-0.03em] leading-[1.2] mt-1">
                        <span className="text-accent-primary/40">for</span>
                        <div className="relative inline-block overflow-hidden h-full min-w-[220px] text-left">
                            <AnimatePresence mode="popLayout">
                                <motion.span
                                    key={wordIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute text-accent-primary whitespace-nowrap"
                                >
                                    {WORDS[wordIndex]}
                                </motion.span>
                                <span className="invisible whitespace-nowrap">{WORDS[0]}</span>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.p variants={itemVariants} className="font-body text-[18px] text-accent-primary/50 max-w-[540px] leading-[1.7] mb-[80px]">
                    Join builders and innovators for an intense hackathon where real-world problems meet creative technology at CVR College of Engineering.
                </motion.p>

                {/* CTA Row - White Button */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-[120px]">
                    <button className="btn-primary w-full sm:w-auto">
                        Register Now
                    </button>
                    <a href="#highlights" className="btn-ghost w-full sm:w-auto">
                        View Experience
                    </a>
                </motion.div>

                {/* Countdown - Pure typography on black */}
                <motion.div variants={itemVariants} className="flex justify-center items-baseline gap-6 md:gap-12 select-none w-full border-t border-accent-secondary/10 pt-[60px]">
                    {isPast ? (
                        <div className="flex items-center gap-4 font-mono text-accent-secondary font-bold tracking-widest text-[16px]">
                            <span className="w-3 h-3 bg-accent-secondary"></span>
                            HACKING IN PROGRESS
                        </div>
                    ) : timeLeft ? (
                        <div className="flex items-start">
                            {[
                                { label: 'DAYS', value: timeLeft.d },
                                { label: 'HOURS', value: timeLeft.h },
                                { label: 'MINUTES', value: timeLeft.m },
                                { label: 'SECONDS', value: timeLeft.s }
                            ].map((item, idx, arr) => (
                                <React.Fragment key={item.label}>
                                    <div className="flex flex-col items-center min-w-[80px] md:min-w-[120px]">
                                        <span className="font-display font-medium text-[clamp(40px,5vw,72px)] text-accent-primary leading-none tracking-[-0.03em]">
                                            {item.value.toString().padStart(2, '0')}
                                        </span>
                                        <span className="font-mono text-[11px] text-accent-primary/30 uppercase tracking-[4px] mt-6">
                                            {item.label}
                                        </span>
                                    </div>
                                    {idx < arr.length - 1 && (
                                        <span className="font-display font-light text-[clamp(40px,5vw,72px)] text-accent-primary/10 px-2 leading-none">
                                            /
                                        </span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    ) : (
                        <div className="h-20"></div>
                    )}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
