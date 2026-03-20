"use client";

import { motion } from "framer-motion";

const Sponsors = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="sponsors"
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="sponsors-title"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2
            id="sponsors-title"
            className="font-display font-black text-[clamp(40px,8vw,80px)] text-gradient-primary tracking-tight leading-[0.9] mb-6"
          >
            Our Sponsors
          </h2>
          <p className="font-body text-[20px] text-accent-primary/60 max-w-[700px] mx-auto leading-relaxed">
            Powered by partners committed to technical excellence.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto mb-16"
        >
          {/* Gifting Sponsor */}
          <a
            href="https://www.portronics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 overflow-hidden flex flex-col items-center justify-center min-h-[250px]"
          >
            <span className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[10px] font-bold text-[#EA4335] uppercase tracking-widest px-3 py-1 rounded-full border border-[#EA4335]/20 bg-[#EA4335]/5 whitespace-nowrap z-10">
              Gifting Sponsor
            </span>
            <div className="h-24 w-full flex items-center justify-center mt-6 z-10">
              <img
                src="/potronics_logo.png"
                alt="Portronics"
                className="max-h-full max-w-[80%] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <h3 className="mt-4 font-display font-bold text-xl text-white/80 group-hover:text-white transition-colors z-10">
              Portronics
            </h3>
          </a>

          {/* Platform Sponsor */}
          <a
            href="https://hackculture.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 overflow-hidden flex flex-col items-center justify-center min-h-[250px]"
          >
            <span className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[10px] font-bold text-white uppercase tracking-widest px-3 py-1 rounded-full border border-white/30 bg-white/10 whitespace-nowrap z-10">
              Platform Sponsor
            </span>
            <div className="h-24 w-full flex items-center justify-center mt-6 z-10">
              <img
                src="/hackculture_logo.png"
                alt="Hackculture"
                className="max-h-full max-w-[80%] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <h3 className="mt-4 font-display font-bold text-xl text-white/80 group-hover:text-white transition-colors z-10">
              Hackculture
            </h3>
          </a>

          {/* Domain Sponsor */}
          <a
            href="https://gen.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 overflow-hidden flex flex-col items-center justify-center min-h-[250px]"
          >
            <span className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/30 bg-white/10 whitespace-nowrap z-10">
              Domain Sponsor
            </span>
            <div className="h-24 w-full flex items-center justify-center mt-6 z-10">
              <img
                src="/xyz-logo-white.svg"
                alt=".xyz"
                className="max-h-full max-w-[80%] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <h3 className="mt-4 font-display font-bold text-xl text-white/80 group-hover:text-white transition-colors z-10">
              .xyz
            </h3>
          </a>

          {/* Sponsor */}
          <a
            href="https://www.coca-cola.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 overflow-hidden flex flex-col items-center justify-center min-h-[250px]"
          >
            <span className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/30 bg-white/10 whitespace-nowrap z-10">
              Sponsor
            </span>
            <div className="h-24 w-full flex items-center justify-center mt-6 z-10">
              <img
                src="/coca-cola.png"
                alt="Coca Cola"
                className="max-h-full max-w-[80%] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <h3 className="mt-4 font-display font-bold text-xl text-white/80 group-hover:text-white transition-colors z-10">
              Coca Cola
            </h3>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="inline-block px-8 py-4 rounded-full border border-white/10 bg-white/[0.02]"
        >
          <p className="font-mono text-[14px] text-accent-primary/60 font-medium uppercase tracking-widest flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            More Sponsors Coming Soon
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Sponsors;
