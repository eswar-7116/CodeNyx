import React from "react";
import { motion } from "framer-motion";

const Process = () => {
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

  const steps = [
    {
      title: "Registration & DSA Screening",
      desc: "Participants register individually for CodeNyx and take part in an online DSA screening round to demonstrate their problem-solving skills.",
      num: "01",
      iconStr: "< >",
    },
    {
      title: "PPT Submission & Shortlisting",
      desc: "Shortlisted candidates submit a PPT outlining their ideas or proposed solutions. Organizers evaluate submissions to select final participants.",
      num: "02",
      iconStr: "//",
    },
    {
      title: "Team Formation",
      desc: "Selected participants are grouped into teams randomly by the organizers to encourage collaboration and diverse skill sets.",
      num: "03",
      iconStr: "[]",
    },
    {
      title: "36-Hour Hackathon Sprint",
      desc: "Teams participate in the offline hackathon at CVR College of Engineering, building innovative solutions with mentor guidance during the 36-hour development phase.",
      num: "04",
      iconStr: "{ }",
    },
    {
      title: "Evaluation & Final Presentations",
      desc: "Projects are evaluated by judges based on innovation, technical implementation, and impact, followed by final presentations and the closing ceremony.",
      num: "05",
      iconStr: "</>",
    },
  ];

  return (
    <section
      id="process"
      className="section-padding bg-bg-base relative"
      aria-labelledby="process-title"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-[140px] max-w-[800px] text-center mx-auto"
        >
          <p className="font-mono text-[13px] text-accent-secondary font-bold uppercase tracking-[4px] mb-[32px]">
            Participation Flow
          </p>

          <h2
            id="process-title"
            className="font-display font-black text-[clamp(44px,7vw,72px)] text-accent-primary tracking-[-0.04em] leading-[1.05]"
          >
            The CodeNyx Journey
          </h2>
        </motion.div>

        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-[40px] lg:gap-[80px] relative flex-wrap"
        >
          {/* Desktop connection line */}
          <div
            className="hidden md:block absolute top-[100px] left-0 w-full h-[1px] bg-accent-secondary/20 z-0"
            aria-hidden="true"
          />

          {/* Mobile connection line */}
          <div
            className="md:hidden absolute top-0 left-[40px] w-[1px] h-full bg-accent-secondary/20 z-0"
            aria-hidden="true"
          />

          {steps.map((item, idx) => (
            <motion.li
              key={idx}
              variants={itemVariants}
              className="flex-1 relative z-10 flex flex-row md:flex-col gap-[32px] md:gap-0"
              aria-label={`Step ${item.num}: ${item.title}`}
            >
              {/* Node */}
              <div className="md:mb-[60px] relative shrink-0">
                <div
                  className="w-[80px] h-[80px] bg-[#000000] border-[1px] border-accent-secondary/40 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(255,68,0,0.15)] overflow-hidden"
                  aria-hidden="true"
                >
                  <span className="font-mono text-[14px] text-accent-secondary font-bold tracking-[2px]">
                    {item.iconStr}
                  </span>
                </div>

                {/* Node indicator */}
                <div
                  className="absolute top-[-4px] left-[50%] -translate-x-1/2 w-[8px] h-[8px] bg-accent-primary rounded-full shadow-[0_0_10px_#FFFFFF]"
                  aria-hidden="true"
                />

                {/* Background number */}
                <span
                  className="absolute left-[80px] md:left-[50%] md:-translate-x-1/2 top-[50%] -translate-y-1/2 font-display text-[160px] font-black text-white/[0.02] pointer-events-none select-none"
                  aria-hidden="true"
                >
                  {item.num}
                </span>
              </div>

              <div className="pt-[16px] md:pt-0">
                <p className="font-mono text-[11px] text-accent-secondary uppercase tracking-[3px] mb-[16px]">
                  Stage {item.num}
                </p>

                <h3 className="font-display font-bold text-[28px] text-accent-primary tracking-[-0.03em] mb-[16px] leading-[1.1]">
                  {item.title}
                </h3>

                <p className="font-body text-[16px] text-accent-primary/50 leading-[1.75]">
                  {item.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};

export default Process;
