"use client";

import React from "react";
import { motion } from "framer-motion";

const announcements = [
  {
    status: "ongoing",
    title: "💡Idea Submission Started – CodeNyx 2026",
    description: "Start Strong. Build Smart.\n\nThe Idea Submission phase for CodeNyx 2026 is now live.\n\nParticipants are expected to present a clear problem statement, a structured approach, and the potential impact of their solution. This phase sets the direction for what you will build during the hackathon.\n\nDefine your idea with clarity and purpose. Strong foundations lead to exceptional solutions."
  },
  {
    status: "completed",
    title: "💻 DSA Round Concluded – CodeNyx 2026",
    description: "Evaluated. Ranked. Ready.\n\nThe DSA Round for CodeNyx 2026 has now officially concluded.\n\nParticipants demonstrated strong problem-solving skills and efficiency while tackling the challenges. This round marks an important step in identifying those moving forward in the hackathon journey.\n\nStay tuned as we move closer to the next phase."
  },
  {
    status: "completed",
    title: "💻 DSA Round Started – CodeNyx 2026",
    description: "Code. Solve. Advance.\n\nThe DSA Round for CodeNyx 2026 has now officially started in online mode.\n\nParticipants are expected to solve the given problems within the allotted time, demonstrating strong problem-solving skills and efficiency. This round will play a key role in shortlisting participants for the next phase of the hackathon.\n\nPerform well and secure your place in the next stage."
  },
  {
    status: "completed",
    title: "🚨 Registrations Closed – CodeNyx 2026",
    description: "We would like to inform you that registrations for CodeNyx 2026 – Inter-College DSA Contest & 36-Hour Hackathon are now officially closed.\n\nWe sincerely appreciate the overwhelming response and enthusiasm shown by participants across colleges. All registered participants are requested to stay tuned for further updates and event guidelines.\n\nWe look forward to an exciting and competitive experience ahead."
  },
  {
    status: "completed",
    title: "🚀 Registrations Open – CodeNyx 2026",
    description: "Build. Break. Innovate.\n\nWe are excited to announce that registrations for CodeNyx 2026 – Inter-College DSA Contest & 36-Hour Hackathon are now officially open.\n\nJoin a community of driven developers and take on the challenge of solving real-world problems through technology. Collaborate with like-minded innovators, push your boundaries, and turn your ideas into impactful solutions.\n\nSecure your spot and be part of an experience that goes beyond just coding."
  }
];

const Announcements = () => {
  return (
    <section id="announcements" className="section-padding bg-bg-base relative pt-24 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-mono text-[13px] text-accent-secondary font-bold uppercase tracking-[4px] mb-[24px]">
            Latest Updates
          </p>
          <h2 className="font-display font-black text-[clamp(44px,7vw,80px)] text-accent-primary tracking-[-0.04em] leading-[1.0] max-w-[600px]">
            Announcements.
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-[28px] space-y-16">
          {announcements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-16"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 left-[-7px] w-3.5 h-3.5 rounded-full border-2 border-bg-base transition-colors duration-500 ${
                  item.status === "ongoing"
                    ? "bg-accent-secondary shadow-[0_0_15px_rgba(0,186,136,0.5)]"
                    : "bg-white/30"
                }`}
              ></div>

              {/* Status Badge */}
              <div className="mb-4">
                <span
                  className={`font-mono text-[11px] uppercase tracking-[2px] font-bold px-3 py-1.5 rounded-full border ${
                    item.status === "ongoing"
                      ? "border-accent-secondary/50 text-accent-secondary bg-accent-secondary/10"
                      : "border-white/20 text-white/50 bg-white/5"
                  }`}
                >
                  {item.status === "ongoing" ? "Currently Ongoing" : "Completed"}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-black text-[24px] md:text-[32px] text-white tracking-[-0.02em] leading-[1.2] mb-6 hover:text-white/80 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <div className="font-body text-[16px] md:text-[18px] text-accent-primary/60 leading-[1.8] space-y-4 max-w-[800px]">
                {item.description.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
