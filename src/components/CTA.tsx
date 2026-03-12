import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      id="register"
      className="section-padding bg-bg-base relative overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Portal visual background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] max-w-[2000px] max-h-[2000px] pointer-events-none -z-10 flex items-center justify-center opacity-40 mix-blend-screen"
        aria-hidden="true"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute w-[30%] h-[30%] rounded-full border border-accent-secondary/30"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.1 }}
          className="absolute w-[60%] h-[60%] rounded-full border border-accent-secondary/15"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.1, ease: "easeOut", delay: 0.2 }}
          className="absolute w-[90%] h-[90%] rounded-full border border-accent-secondary/5"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] h-[20%] rounded-full bg-accent-secondary/10 blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="card-minimal flex flex-col items-center justify-center text-center py-[140px] px-6 relative overflow-hidden bg-black shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-accent-primary/10"
        >
          {/* Glow */}
          <div
            className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.25] mix-blend-screen bg-glow-hero blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative z-10 w-full flex flex-col items-center max-w-[700px]">
            {/* Status badge */}
            <div className="inline-flex items-center gap-[12px] bg-accent-secondary/10 border border-accent-secondary/20 rounded-full px-[16px] py-[8px] mb-[48px]">
              <span className="w-[6px] h-[6px] rounded-full bg-accent-secondary animate-pulse" />
              <span className="font-mono text-[12px] text-accent-primary font-bold tracking-[2px]">
                REGISTRATIONS: DSA ROUND OPEN
              </span>
            </div>
            <h2
              id="cta-title"
              className="font-display font-black text-[clamp(48px,8vw,100px)] tracking-[-0.04em] mb-[40px] leading-[0.95] text-accent-primary"
            >
              Enter The Arena.
            </h2>
            Broadway
            <p className="font-body text-[20px] text-accent-primary/50 leading-[1.8] mb-[64px]">
              Begin your CodeNyx journey by registering for the DSA screening
              round. Participants will compete individually in an online
              problem-solving contest. Top performers will move forward to the
              PPT submission stage and eventually the final 36-hour offline
              hackathon at CVR College of Engineering.
            </p>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-center items-center gap-[16px] mb-[64px]">
              <a
                href="https://hackculture.io/hackathons/codenyx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto h-[64px] px-[48px] text-[18px] text-center flex items-center justify-center"
              >
                Register for DSA Round
              </a>
            </div>
            <p className="font-mono text-[13px] text-accent-primary/30 tracking-[3px] uppercase">
              DSA Round: March 17, 2026 // 8:00 PM – 10:00 PM IST
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
