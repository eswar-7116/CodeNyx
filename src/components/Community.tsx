import React from "react";
import { motion } from "framer-motion";
import waIcon from "../assets/wa.svg";
import discordIcon from "../assets/discord.svg";

const Community = () => {
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
      id="community"
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="community-title"
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      Broadway
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2
            id="community-title"
            className="font-display font-black text-[clamp(40px,8vw,80px)] text-gradient-primary tracking-tight leading-[0.9] mb-6"
          >
            Join the Community
          </h2>
          Broadway{" "}
          <p className="font-body text-[20px] text-accent-primary/60 max-w-[700px] mx-auto leading-relaxed">
            Already registered? Join the community for all the latest updates,
            announcements, and networking opportunities.
          </p>
          <div className="mt-4 inline-block px-4 py-1 rounded-full border border-accent-secondary/20 bg-accent-secondary/5">
            <p className="font-mono text-[12px] text-accent-secondary font-bold uppercase tracking-widest">
              Exclusive for registered candidates
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto"
        >
          {/* WhatsApp Card */}
          <a
            href="https://chat.whatsapp.com/GJGqYeYJkmGIFDZvw7Zoeh"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 overflow-hidden"
            role="article"
            aria-label="Join WhatsApp Group"
          >
            <div
              className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-90 transition-opacity"
              aria-hidden="true"
            >
              <img src={waIcon} alt="" className="w-20 h-20" />
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-[#25D366] mb-6 group-hover:scale-110 transition-transform duration-500"
                aria-hidden="true"
              >
                <img src={waIcon} alt="WhatsApp" className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">
                WhatsApp Group
              </h3>
              <p className="font-body text-accent-primary/40 mb-6">
                Instant updates and quick announcements directly to your phone.
              </p>
              <span className="font-mono text-sm font-bold text-accent-primary uppercase tracking-widest px-6 py-3 border border-white/10 rounded-lg group-hover:bg-white group-hover:text-black transition-all duration-300">
                Join WhatsApp
              </span>
            </div>
          </a>

          {/* Discord Card */}
          <a
            href="https://discord.gg/c6zndHjWXm"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 overflow-hidden"
            role="article"
            aria-label="Join Discord Server"
          >
            <div
              className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-90 transition-opacity"
              aria-hidden="true"
            >
              <img src={discordIcon} alt="" className="w-20 h-20" />
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-full bg-[#5865F2] flex items-center justify-center text-[#5865F2] mb-6 group-hover:scale-110 transition-transform duration-500"
                aria-hidden="true"
              >
                <img src={discordIcon} alt="Discord" className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">
                Discord Server
              </h3>
              <p className="font-body text-accent-primary/40 mb-6">
                Connect with mentors, find teammates, and join the discussion.
              </p>
              <span className="font-mono text-sm font-bold text-accent-primary uppercase tracking-widest px-6 py-3 border border-white/10 rounded-lg group-hover:bg-white group-hover:text-black transition-all duration-300">
                Join Discord
              </span>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Community;
