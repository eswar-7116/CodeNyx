import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = 2026;

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Highlights", href: "#highlights" },
    { label: "Timeline", href: "#timeline" },
    { label: "FAQs", href: "#faqs" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/gdgcvr",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/gdgcvr",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/gdgcvr",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className="relative bg-bg-base overflow-hidden"
      aria-label="Site Footer"
    >
      {/* Divider line with glow */}
      <div className="relative" aria-hidden="true">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-accent-secondary/40 to-transparent" />
        </div>
      </div>

      {/* Giant typographic watermark */}
      <div
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full overflow-hidden flex justify-center"
        aria-hidden="true"
      >
        <span className="font-display font-black text-[clamp(100px,18vw,280px)] text-white/[0.02] tracking-[-0.06em] leading-none whitespace-nowrap">
          CODENYX
        </span>
      </div>

      {/* Ambient glow effects */}
      <div
        className="absolute bottom-0 left-[15%] w-[300px] h-[300px] bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[20%] right-[10%] w-[200px] h-[200px] bg-accent-secondary/3 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-[80px] pb-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] lg:gap-[40px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              {/* Logo */}
              <div className="flex items-baseline gap-[2px] mb-[28px]">
                <span className="font-display font-black text-[32px] text-accent-primary tracking-[-0.03em]">
                  CodeNyx
                </span>
                <span className="font-display font-black text-[36px] text-accent-secondary leading-none">
                  .
                </span>
              </div>

              <p className="font-body text-[15px] text-white/35 leading-[1.85] mb-[36px] max-w-[380px]">
                The flagship hackathon by GDG on Campus CVR College of
                Engineering - from online DSA screening to PPT evaluation to a
                36-hour offline building sprint at CVR College of Engineering.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-[12px]">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group relative w-[44px] h-[44px] rounded-full border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-accent-secondary hover:border-accent-secondary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.15)]"
                  >
                    {social.icon}
                    {/* Tooltip */}
                    <span className="absolute -top-[36px] left-1/2 -translate-x-1/2 font-mono text-[10px] text-accent-secondary tracking-[1px] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="lg:col-span-3"
            >
              <p className="font-mono text-[11px] text-accent-secondary/70 font-bold uppercase tracking-[3px] mb-[28px]">
                Navigate
              </p>
              <nav
                className="flex flex-col gap-[16px]"
                aria-label="Footer Navigation"
              >
                {navLinks.map((link, idx) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-[12px] font-body text-[15px] text-white/40 hover:text-accent-primary transition-all duration-300"
                  >
                    <span
                      className="w-[16px] h-[1px] bg-white/10 group-hover:w-[28px] group-hover:bg-accent-secondary transition-all duration-300"
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
              className="lg:col-span-4"
            >
              <p className="font-mono text-[11px] text-accent-secondary/70 font-bold uppercase tracking-[3px] mb-[28px]">
                Event Details
              </p>

              <div className="flex flex-col gap-[20px]">
                {/* Detail items */}
                <div className="flex flex-col gap-[4px]">
                  <span className="font-mono text-[10px] text-white/20 uppercase tracking-[2px]">
                    Venue
                  </span>
                  <address className="font-body text-[15px] text-white/60 not-italic">
                    CVR College of Engineering
                  </address>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="font-mono text-[10px] text-white/20 uppercase tracking-[2px]">
                    Date
                  </span>
                  <span className="font-body text-[15px] text-white/60">
                    March 2026
                  </span>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="font-mono text-[10px] text-white/20 uppercase tracking-[2px]">
                    Format
                  </span>
                  <span className="font-body text-[15px] text-white/60">
                    36-Hour Offline Hackathon
                  </span>
                </div>
              </div>

              {/* Register CTA in footer */}
              <a
                href="https://hackculture.io/hackathons/codenyx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[10px] mt-[32px] font-mono text-[12px] font-bold text-accent-secondary uppercase tracking-[2px] group"
              >
                <span className="group-hover:tracking-[4px] transition-all duration-300">
                  Register Now
                </span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative">
          <div
            className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
            aria-hidden="true"
          />

          <div className="flex flex-col md:flex-row justify-between items-center py-[32px] gap-[16px]">
            <p className="font-mono text-[11px] text-white/15 tracking-[2px] uppercase">
              © {currentYear} CodeNyx - All Rights Reserved
            </p>

            <a
              href="https://gdgcvrwebsite.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-accent-primary/60 font-bold tracking-[2px] uppercase bg-white/5 px-2 py-1 rounded-sm hover:text-accent-secondary hover:bg-white/10 transition-colors"
            >
              GDG On Campus CVR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
