import React from "react";
import { motion } from "framer-motion";

const Prizes = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const prizes = [
    {
      ps: "Problem Statement 01",
      title: "Winner",
      desc: "Awarded to the team that delivers the most impactful and technically sound solution.",
      accent: "#ff5c7a",
      accentBg: "rgba(255, 92, 122, 0.08)",
      accentBorder: "rgba(255, 92, 122, 0.25)",
      accentGlow: "rgba(255, 92, 122, 0.15)",
    },
    {
      ps: "Problem Statement 02",
      title: "Winner",
      desc: "Recognizing the team with the most innovative and well-executed solution.",
      accent: "#8a5cff",
      accentBg: "rgba(138, 92, 255, 0.08)",
      accentBorder: "rgba(138, 92, 255, 0.25)",
      accentGlow: "rgba(138, 92, 255, 0.15)",
    },
    {
      ps: "Problem Statement 03",
      title: "Winner",
      desc: "Presented to the team that builds the best overall implementation.",
      accent: "#00ffd1",
      accentBg: "rgba(0, 255, 209, 0.08)",
      accentBorder: "rgba(0, 255, 209, 0.25)",
      accentGlow: "rgba(0, 255, 209, 0.15)",
    },
  ];

  return (
    <section
      id="rewards"
      className="section-padding bg-bg-base relative overflow-hidden"
      aria-labelledby="prizes-title"
    >
      {/* Subtle prismatic ambient glow */}
      <div
        className="absolute top-[50%] left-[20%] w-[400px] h-[400px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8a5cff, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff5c7a, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-[120px] max-w-[800px] text-center mx-auto"
        >
          <p
            className="font-mono text-[13px] font-bold uppercase tracking-[4px] mb-[32px]"
            style={{ color: "#8a5cff" }}
          >
            The Rewards
          </p>

          <h2
            id="prizes-title"
            className="font-display font-black text-[clamp(44px,7vw,72px)] text-accent-primary tracking-[-0.04em] leading-[1.05] mb-[24px]"
          >
            Winners for Each Problem Statement
          </h2>

          <p className="font-body text-[18px] text-white/40 leading-[1.7] max-w-[500px] mx-auto">
            Three challenges. Three teams. One stage.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[2px]"
        >
          {prizes.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative min-h-[500px] flex flex-col justify-between py-[48px] px-[36px] overflow-hidden transition-all duration-500"
              style={{
                background: "#050506",
                borderTop: `1px solid ${item.accentBorder}`,
              }}
              role="article"
              aria-label={`${item.ps}: ${item.title}`}
            >
              {/* Top accent line that glows on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
                }}
                aria-hidden="true"
              />

              {/* Background glow on hover */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: item.accentGlow }}
                aria-hidden="true"
              />

              {/* Large background number */}
              <span
                className="absolute top-[20px] right-[20px] font-display text-[140px] font-black leading-none pointer-events-none select-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
                style={{ color: item.accent }}
                aria-hidden="true"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                {/* Colored dot + label */}
                <div className="flex items-center gap-[12px] mb-[40px]">
                  <div
                    className="w-[8px] h-[8px] rounded-full"
                    style={{
                      background: item.accent,
                      boxShadow: `0 0 12px ${item.accentGlow}`,
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="font-mono text-[12px] font-bold tracking-[3px] uppercase"
                    style={{ color: item.accent }}
                  >
                    {item.ps}
                  </span>
                </div>

                <h3 className="font-display font-black text-[44px] text-accent-primary tracking-[-0.03em] mb-[20px] leading-[1]">
                  {item.title}
                </h3>

                <p className="font-body text-[16px] text-white/40 leading-[1.75] max-w-[280px]">
                  {item.desc}
                </p>
              </div>

              <div
                className="relative z-10 mt-[48px] border-t pt-[24px]"
                style={{ borderColor: item.accentBorder }}
              >
                <span
                  className="font-mono text-[13px] tracking-[2px]"
                  style={{ color: item.accent, opacity: 0.5 }}
                >
                  PRIZE: TBA
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
