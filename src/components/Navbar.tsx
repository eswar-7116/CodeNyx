import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg-base/80 backdrop-blur-xl border-b border-white/[0.04]" : "bg-transparent"}`}
      aria-label="Main Navigation"
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="flex items-center justify-center"
            aria-label="CodeNyx Home"
          >
            {/* Minimalist Logo */}
            <span className="font-display font-black text-[28px] text-accent-primary tracking-tight">
              C
            </span>
            <span className="font-display font-black text-[32px] font-bold text-accent-secondary tracking-tight">
              .
            </span>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-[48px]">
          {["Home", "Highlights", "Timeline", "FAQs"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-[14px] font-medium text-accent-primary/60 hover:text-accent-primary transition-colors duration-200 uppercase tracking-[1px]"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Register & Community Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#community"
            className="border border-white/20 text-white hover:bg-white/10 transition-all duration-300 font-body text-[14px] font-bold uppercase tracking-[1px] px-[24px] py-[12px] rounded-[4px] inline-flex items-center justify-center text-center"
          >
            Community
          </a>
          <a
            href="https://hackculture.io/hackathons/codenyx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-primary text-bg-base hover:bg-white transition-colors duration-300 font-body text-[14px] font-bold uppercase tracking-[1px] px-[24px] py-[12px] rounded-[4px] shadow-[0_0_20px_rgba(255,255,255,0.1)] inline-flex items-center justify-center text-center"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-accent-primary/60 hover:text-accent-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-haspopup="true"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden absolute top-[80px] left-0 right-0 bg-bg-base/95 backdrop-blur-xl border-b border-white/[0.04] py-8 px-8 flex flex-col gap-8"
          aria-label="Mobile Navigation"
        >
          {["Home", "Highlights", "Timeline", "FAQs"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-display text-[28px] font-bold tracking-tight text-accent-primary/60 hover:text-accent-primary transition-colors uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <a
              href="#community"
              className="font-display text-[28px] font-bold tracking-tight text-accent-primary hover:text-accent-primary/80 transition-colors uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </a>
            <a
              href="https://hackculture.io/hackathons/codenyx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[28px] font-bold tracking-tight text-accent-secondary hover:text-accent-secondary/80 transition-colors uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </a>
          </div>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;
