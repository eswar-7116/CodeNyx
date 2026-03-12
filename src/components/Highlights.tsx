import React from "react";
import { motion } from "framer-motion";

const Highlights = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
      id="highlights"
      className="section-padding bg-bg-base relative"
      aria-labelledby="highlights-title"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-[100px] lg:mb-[140px] max-w-[800px]"
        >
          <p className="font-mono text-[13px] text-accent-secondary font-bold uppercase tracking-[4px] mb-[32px]">
            The Experience
          </p>
          <h2
            id="highlights-title"
            className="font-display font-black text-[clamp(44px,7vw,80px)] text-accent-primary tracking-[-0.04em] leading-[1.05]"
          >
            Relentless Innovation.
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[24px]"
        >
          {/* Card 1: 36 Hours - Spans 2 columns, tall */}
          <motion.div
            variants={itemVariants}
            className="card-minimal md:col-span-2 md:row-span-2 min-h-[460px] flex flex-col justify-end"
            role="article"
          >
            {/* Large Visual Anchor: Abstract Clock/Focus Ring */}
            <div
              className="absolute top-8 right-8 w-[250px] h-[250px] md:w-[350px] md:h-[350px] pointer-events-none opacity-80 z-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="absolute inset-0 rounded-full border-[2px] border-accent-secondary/40" />
              <div className="absolute inset-6 md:inset-8 rounded-full border-[1px] border-dashed border-accent-primary/50 rotate-[-45deg]" />
              <div className="absolute top-[50%] left-0 w-[50%] h-[2px] bg-accent-secondary/80 origin-right rotate-[30deg]" />
              <div className="font-display text-[80px] md:text-[120px] font-black leading-none text-accent-primary/30 z-10 mr-4">
                36
              </div>
            </div>

            <div className="relative z-10 w-full md:w-[60%]">
              <div
                className="w-14 h-14 rounded-full bg-accent-primary/10 flex items-center justify-center mb-8 border border-white/5"
                aria-hidden="true"
              >
                <div className="w-4 h-4 rounded-full bg-accent-primary" />
              </div>
              <h3 className="font-display font-bold text-[36px] text-accent-primary tracking-[-0.03em] mb-4">
                36 Hours
              </h3>
              <p className="font-body text-[18px] text-accent-primary/50 leading-[1.6]">
                A marathon of non-stop building. Deep focus, intense
                collaboration, and transformative breakthroughs.
              </p>
            </div>
          </motion.div>

          {/* Card 2: DSA Screening - Square */}
          <motion.div
            variants={itemVariants}
            className="card-minimal min-h-[320px] bg-grid-pattern relative"
            role="article"
          >
            <div
              className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-[#0A0A0B] via-[#0A0A0B]/80 to-transparent"
              aria-hidden="true"
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div
                className="flex border-b border-accent-secondary/20 pb-4 mb-4 gap-2"
                aria-hidden="true"
              >
                <span className="w-2 h-2 rounded-full bg-accent-secondary" />
                <span className="w-2 h-2 rounded-full bg-accent-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[24px] text-accent-primary tracking-[-0.02em] mb-3">
                  DSA Screening
                </h3>
                <p className="font-body text-[16px] text-accent-primary/50 leading-[1.6]">
                  An algorithmic trial to shortlist the absolute sharpest
                  technical minds.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Expert Mentors - Square */}
          <motion.div
            variants={itemVariants}
            className="card-minimal min-h-[320px] relative overflow-hidden"
            role="article"
          >
            {/* Visual: Glowing node map */}
            <div
              className="absolute top-[10%] -right-[10%] w-[80%] h-[80%] opacity-30"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full stroke-accent-primary/20"
                strokeWidth="0.5"
                fill="none"
              >
                <circle cx="50" cy="50" r="40" />
                <circle cx="50" cy="50" r="25" />
                <line x1="50" y1="10" x2="50" y2="90" />
                <line x1="10" y1="50" x2="90" y2="50" />
                <circle cx="50" cy="10" r="2" fill="#FFFFFF" />
                <circle cx="90" cy="50" r="2" fill="#FF0000" />
              </svg>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end pt-20">
              <h3 className="font-display font-bold text-[24px] text-accent-primary tracking-[-0.02em] mb-3">
                Expert Guidance
              </h3>
              <p className="font-body text-[16px] text-accent-primary/50 leading-[1.6]">
                Real-time architectural advice from industry professionals.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Networking - Taller / Wide */}
          <motion.div
            variants={itemVariants}
            className="card-minimal md:col-span-2 relative bg-[#111111]"
            role="article"
          >
            <div
              className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-secondary to-transparent opacity-30"
              aria-hidden="true"
            />
            <div className="flex flex-col md:flex-row gap-10 items-center justify-between z-10 relative">
              <div className="flex-1">
                <h3 className="font-display font-bold text-[28px] text-accent-primary tracking-[-0.02em] mb-3">
                  High-Caliber Network
                </h3>
                <p className="font-body text-[16px] text-accent-primary/50 leading-[1.6]">
                  Meet builders, founders, and engineers who think like you.
                  Forge connections that last long after the event ends.
                </p>
              </div>
              <div
                className="w-[120px] h-[120px] shrink-0 border border-white/10 rounded-full flex items-center justify-center relative bg-black/40 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
                aria-hidden="true"
              >
                <div className="absolute inset-2 border-[1px] border-dashed border-white/20 rounded-full rotate-45" />
                <div className="w-3 h-3 bg-accent-primary rounded-sm rotate-45" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
