import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "What is CodeNyx?",
        answer: "CodeNyx is a 36-hour offline hackathon organized by GDG CVR On Campus where participants build innovative solutions to real-world problems, collaborate with fellow developers, and present their ideas to industry mentors and judges."
    },
    {
        question: "Who can participate?",
        answer: "Any undergraduate student from a recognized college or university can participate. All participants must register individually through the official website."
    },
    {
        question: "Can I participate individually?",
        answer: "Yes. Participants must register individually for the initial screening and PPT round. Teams will be formed randomly by the organizers after the shortlisting process."
    },
    {
        question: "How are teams formed?",
        answer: "After the PPT round and shortlisting process, the organizers will randomly form teams to ensure diverse skill sets and encourage collaboration among participants."
    },
    {
        question: "Is there a registration fee?",
        answer: "The initial DSA screening round is free for all participants. Shortlisted participants who advance to the final offline hackathon may be required to pay a nominal participation fee."
    },
    {
        question: "What is the selection process?",
        answer: "Participants first register individually and complete the online DSA screening round. Shortlisted candidates then submit a PPT based on the problem statements. Final participants are selected and grouped into teams for the offline hackathon."
    },
    {
        question: "Do I need prior hackathon experience?",
        answer: "No prior hackathon experience is required. Anyone interested in building projects, learning new technologies, and solving problems is encouraged to participate."
    },
    {
        question: "What should participants bring?",
        answer: "Participants should bring their laptops, chargers, and any hardware or tools required for building their project during the hackathon."
    }
];
const FAQItem = ({ faq, isOpen, toggleOpen, index }: { faq: any, isOpen: boolean, toggleOpen: () => void, index: number }) => {
    return (
        <div className="relative border-b border-accent-secondary/10 py-[40px] group overflow-hidden">

            {/* Structural Accent Line */}
            <div
                className={`absolute top-0 left-[-4px] w-[3px] h-[100%] bg-accent-secondary transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            />

            <button
                className="w-full flex items-center justify-between text-left focus:outline-none pl-[24px]"
                onClick={toggleOpen}
            >
                <span className={`font-body text-[20px] font-medium transition-colors duration-300 pr-8 tracking-tight ${isOpen ? 'text-accent-primary' : 'text-accent-primary/60 group-hover:text-accent-primary/90'}`}>
                    {faq.question}
                </span>
                <ChevronDown
                    className={`w-[24px] h-[24px] shrink-0 transition-transform duration-500 ease-[0.16,1,0.3,1] ${isOpen ? 'rotate-180 text-accent-secondary' : 'text-accent-primary/20 group-hover:text-accent-primary/50'}`}
                />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                        className="overflow-hidden pl-[24px]"
                    >
                        <p className="font-body text-[18px] text-[rgba(255,255,255,0.5)] leading-[1.8] pt-[32px] max-w-[85%]">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Massive subtle background index number */}
            <span className="absolute right-[80px] top-[50%] -translate-y-1/2 font-display text-[160px] font-black text-white/[0.015] pointer-events-none select-none">
                0{index + 1}
            </span>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="section-padding bg-bg-base relative pt-[160px] pb-[160px]">
            <div className="max-w-[1000px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="mb-[100px] lg:mb-[140px]"
                >
                    <p className="font-mono text-[13px] text-accent-secondary font-bold uppercase tracking-[4px] mb-[32px]">
                        Intelligence
                    </p>
                    <h2 className="font-display font-black text-[clamp(44px,7vw,72px)] text-accent-primary tracking-[-0.04em] leading-[1.05]">
                        Frequently Asked Queries.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
                    className="flex flex-col border-t border-accent-secondary/10 relative"
                >
                    {faqs.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            index={idx}
                            faq={faq}
                            isOpen={openIndex === idx}
                            toggleOpen={() => setOpenIndex(openIndex === idx ? null : idx)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
