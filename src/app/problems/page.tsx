"use client";

import { motion } from "framer-motion";
import { problemStatements } from "@/data/problems";

const ProblemsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <main className="min-h-screen bg-bg-base pt-[140px] pb-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-[60px] lg:mb-[100px] max-w-[800px]"
        >
          <p className="font-mono text-[13px] text-accent-secondary font-bold uppercase tracking-[4px] mb-[24px]">
            The Challenges
          </p>
          <h1 className="font-display font-black text-[clamp(40px,6vw,72px)] text-accent-primary tracking-[-0.04em] leading-[1.1] mb-6">
            Problem Statements.
          </h1>
          <p className="font-body text-[18px] text-accent-primary/60 max-w-[600px] leading-relaxed mb-10">
            Choose a challenge that resonates with you. These real-world
            problems are your starting point for the 36-hour build marathon.
          </p>

          <a
            href="/Codenyx_PPT_Round_Template.pptx"
            download
            className="inline-flex items-center gap-2 bg-accent-secondary text-bg-base hover:bg-opacity-90 transition-all duration-300 font-body text-[14px] font-bold uppercase tracking-[1px] px-[28px] py-[14px] rounded-[4px] shadow-[0_0_20px_rgba(255,107,0,0.2)]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PPT Template
          </a>
        </motion.div>

        {/* Problems Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problemStatements.map((problem) => (
            <motion.div
              key={problem.id}
              variants={itemVariants}
              className="card-minimal flex flex-col group h-full relative overflow-hidden"
              role="article"
            >
              {/* Subtle background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-secondary/5 blur-[60px] pointer-events-none group-hover:bg-accent-secondary/10 transition-colors duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[12px] text-accent-secondary/60 font-bold tracking-widest uppercase">
                    Problem {problem.id.toString().padStart(2, "0")}
                  </span>
                  <div className="w-8 h-[1px] bg-accent-secondary/30 group-hover:w-16 transition-all duration-500" />
                </div>

                <h3 className="font-display font-bold text-[24px] text-accent-primary tracking-tight mb-4 group-hover:text-red-700 transition-colors duration-300">
                  {problem.title}
                </h3>

                <p className="font-body text-[15px] text-accent-primary/50 leading-relaxed mb-8 flex-grow">
                  {problem.problem}
                </p>

                <div className="pt-6 border-t border-white/[0.04] mt-auto flex items-center justify-between" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default ProblemsPage;
