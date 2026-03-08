import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-base/80 backdrop-blur-xl border-b border-white/[0.04]' : 'bg-transparent'}`}>
            <div className="max-w-[1200px] mx-auto px-6 h-[80px] flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center">
                        {/* Minimalist Logo */}
                        <span className="font-display font-black text-[28px] text-accent-primary tracking-tight">C</span>
                        <span className="font-display font-black text-[32px] font-bold text-accent-secondary tracking-tight">.</span>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-[48px]">
                    {['Home', 'Highlights', 'Timeline', 'FAQs'].map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="font-body text-[14px] font-medium text-accent-primary/60 hover:text-accent-primary transition-colors duration-200 uppercase tracking-[1px]">
                            {link}
                        </a>
                    ))}
                </div>

                {/* Register Button - High contrast */}
                <div className="hidden md:flex items-center">
                    <button className="bg-accent-primary text-bg-base hover:bg-white transition-colors duration-300 font-body text-[14px] font-bold uppercase tracking-[1px] px-[24px] py-[12px] rounded-[4px] shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Register
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-accent-primary/60 hover:text-accent-primary transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-[80px] left-0 right-0 bg-bg-base/95 backdrop-blur-xl border-b border-white/[0.04] py-8 px-8 flex flex-col gap-8">
                    {['Home', 'Highlights', 'Timeline', 'FAQs'].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="font-display text-[28px] font-bold tracking-tight text-accent-primary/60 hover:text-accent-primary transition-colors uppercase"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}
                    <button className="font-display text-[28px] font-bold tracking-tight text-accent-secondary hover:text-accent-secondary/80 text-left transition-colors pt-6 border-t border-accent-secondary/20 uppercase">
                        Register
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
