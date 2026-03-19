"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// @ts-ignore
import ColorBends from "./ColorBends";

const WORDS = ["developers", "designers", "innovators", "builders", "creators"];
const TARGET_DATE = new Date("2026-03-30T10:00:00+05:30");

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState<{
    d: number;
    h: number;
    m: number;
    s: number;
  } | null>(null);
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
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-[140px] pb-[80px] overflow-hidden px-6"
      aria-labelledby="hero-title"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ filter: "brightness(0.6) contrast(1.2)" }}
        aria-hidden="true"
      >
        <ColorBends
          className=""
          style={{}}
          colors={[]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent={false}
          autoRotate={0}
        />
      </div>

      {/* Bottom Gradient Fade to remove sudden line when scrolling down */}
      <div
        className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-bg-base to-transparent z-[5] pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1200px] w-full flex flex-col items-center text-center z-10 relative pointer-events-none"
      >
        {/* GDG Label */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-[12px] text-accent-primary/40 uppercase tracking-[4px] mb-[16px]"
        >
          Google Developer Group
        </motion.p>

        <motion.a
          href="https://gdgcvr.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          className="font-mono text-[13px] text-accent-secondary font-bold uppercase tracking-[4px] mb-[40px] hover:text-white transition-colors cursor-pointer pointer-events-auto"
        >
          on Campus CVR
        </motion.a>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          id="hero-title"
          className="font-display font-black text-[clamp(72px,16vw,180px)] tracking-[-0.05em] leading-[0.85] pb-4 text-gradient-primary w-full"
        >
          CodeNyx
        </motion.h1>

        {/* Sub Title */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-[14px] text-accent-primary/40 tracking-[4px] uppercase mt-2"
        >
          GDG CVR Hackathon
        </motion.p>

        {/* Subtitle */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mt-[32px] mb-[56px]"
        >
          <h2 className="font-display font-black text-[clamp(28px,4vw,44px)] text-accent-primary tracking-[-0.03em] leading-[1.2]">
            A 36-hour innovation hackathon
          </h2>

          <div className="flex items-center gap-3 font-display font-black text-[clamp(28px,4vw,44px)] tracking-[-0.03em] leading-[1.1] mt-1">
            <span className="text-accent-primary/40">for</span>

            <div
              className="relative inline-block overflow-hidden h-full min-w-[220px] text-left"
              aria-live="polite"
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
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
        <motion.p
          variants={itemVariants}
          className="font-body text-[18px] text-accent-primary/50 max-w-[620px] leading-[1.7] mb-[80px]"
        >
          CodeNyx is the flagship hackathon organized by{" "}
          <strong>
            Google Developer Group (GDG) on Campus CVR College of Engineering
          </strong>
          . It brings together developers, designers, and innovators for an
          intense 36-hour build sprint where technology meets real-world
          challenges at CVR College of Engineering.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-6 mb-[120px] pointer-events-auto"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
            <a
              href="https://hackculture.io/hackathons/codenyx"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-center flex justify-center items-center"
            >
              Register for DSA Round
            </a>
            <a
              href="#community"
              className="btn-secondary w-full sm:w-auto text-center flex justify-center items-center border border-white/20 text-white hover:bg-white/10 transition-all duration-300 font-body text-[14px] font-bold uppercase tracking-[1px] px-[24px] py-[16px] rounded-[4px]"
            >
              Join the Community
            </a>
          </div>

          <a
            href="#highlights"
            className="btn-ghost text-accent-primary/40 hover:text-accent-primary transition-colors text-[14px] font-bold uppercase tracking-[2px]"
          >
            View Highlights
          </a>
        </motion.div>

        {/* Countdown */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-baseline gap-6 md:gap-12 select-none w-full border-t border-accent-secondary/10 pt-[60px]"
          aria-label="Countdown to event"
        >
          {isPast ? (
            <div className="flex items-center gap-4 font-mono text-accent-secondary font-bold tracking-widest text-[16px]">
              <span className="w-3 h-3 bg-accent-secondary"></span>
              HACKING IN PROGRESS
            </div>
          ) : timeLeft ? (
            <div className="flex items-start">
              {[
                { label: "DAYS", value: timeLeft.d },
                { label: "HOURS", value: timeLeft.h },
                { label: "MINUTES", value: timeLeft.m },
                { label: "SECONDS", value: timeLeft.s },
              ].map((item, idx, arr) => (
                <React.Fragment key={item.label}>
                  <div className="flex flex-col items-center min-w-[80px] md:min-w-[120px]">
                    <span className="font-display font-medium text-[clamp(40px,5vw,72px)] text-accent-primary leading-none tracking-[-0.03em]">
                      {item.value.toString().padStart(2, "0")}
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
