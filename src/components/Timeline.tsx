import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ["PRE-EVENT", "DAY ONE", "DAY TWO"];

const timelineData: Record<string, { time: string, title: string, subtitle?: string, duration?: string, dateNote?: string }[]> = {
    "PRE-EVENT": [
        { time: "MAR 10 – 17", title: "Registrations Open", subtitle: "Portal unlocks. Apply now." },
        { time: "MARCH 17", title: "DSA Screening Round", subtitle: "Algorithmic filtering phase. (Coding rounds differ for CVR and BVRIT. Exact dates will be informed in their college)", duration: "2H", dateNote: "CVR: 12TH" },
        { time: "MAR 18 – 22", title: "Idea Presentation", subtitle: "Eligible Members present abstract wireframes." },
        { time: "MARCH 23", title: "Payment Deadline", subtitle: "Operational fee processing." },
        { time: "MAR 28 – 29", title: "Final Hackathon", subtitle: "The ultimate 36-hour offline building sprint." },
    ],
    "DAY ONE": [
        { time: "10:00 AM", title: "Opening Ceremony", subtitle: "Participant welcome and refreshments on arrival." },
        { time: "10:00 AM – 1:00 PM", title: "Problem Statement Discussion", duration: "3H", subtitle: "Teams interact with mentors and understand problem statements." },
        { time: "1:00 PM – 2:00 PM", title: "Lunch Break", duration: "1H", subtitle: "Lunch served for all participants." },
        { time: "2:00 PM – 5:30 PM", title: "Implementation Phase", duration: "3.5H", subtitle: "Teams begin building their core solutions." },
        { time: "5:30 PM – 6:00 PM", title: "Tea Break", duration: "0.5H", subtitle: "Short refreshment break." },
        { time: "6:00 PM – 8:30 PM", title: "Continued Implementation", duration: "2.5H", subtitle: "Teams continue development and mentor discussions." },
        { time: "8:30 PM – 10:00 PM", title: "Dinner Break", duration: "1.5H", subtitle: "Dinner served for all participants." },
        { time: "10:00 PM – 1:00 AM", title: "Overnight Coding", duration: "3H", subtitle: "Teams continue building their projects overnight." },
        { time: "1:00 AM – 3:00 AM", title: "Fun Activities / Ice-Breaking Session", duration: "2H", subtitle: "Optional networking and fun activities for participants." }
    ],

    "DAY TWO": [
        { time: "4:00 AM – 8:00 AM", title: "Continued Implementation", duration: "4H", subtitle: "Teams finalize development and features." },
        { time: "8:00 AM – 9:30 AM", title: "Breakfast", duration: "1.5H", subtitle: "Breakfast served for participants." },
        { time: "9:30 AM – 11:00 AM", title: "Final Implementation & Buffer", duration: "1.5H", subtitle: "Last window for coding and final touches." },
        { time: "11:00 AM – 1:00 PM", title: "Evaluation Round", duration: "2H", subtitle: "Judges evaluate all team projects." },
        { time: "1:00 PM – 2:00 PM", title: "Lunch Break", duration: "1H", subtitle: "Lunch served for participants." },
        { time: "2:00 PM – 4:00 PM", title: "Presentation & Closing Ceremony", duration: "2H", subtitle: "Final presentations followed by results and awards." }
    ]
};

const Timeline = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section id="timeline" className="section-padding bg-bg-base relative">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-[100px]"
                >
                    <div>
                        <p className="font-mono text-[13px] text-accent-secondary font-bold uppercase tracking-[4px] mb-[24px]">
                            Master Schedule
                        </p>
                        <h2 className="font-display font-black text-[clamp(44px,7vw,80px)] text-accent-primary tracking-[-0.04em] leading-[1.0] max-w-[500px]">
                            The Itinerary.
                        </h2>
                    </div>

                    {/* Clean, pill-less tab switcher integrated into the layout */}
                    <div className="flex gap-8 border-b border-white/10 pb-4 w-full md:w-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className="relative focus:outline-none group pb-[20px] -mb-[21px]"
                            >
                                <span className={`font-mono text-[14px] font-bold tracking-[2px] transition-colors duration-300 ${activeTab === tab ? 'text-accent-primary' : 'text-accent-primary/40 group-hover:text-accent-primary/80'}`}>
                                    {tab}
                                </span>
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="tabUnderline"
                                        className="absolute left-0 right-0 bottom-0 h-[2px] bg-accent-secondary"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Pure Typographical Grid Layout */}
                <div className="relative border-t border-white/[0.04]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                        >
                            {timelineData[activeTab].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group flex flex-col md:flex-row items-start py-[40px] md:py-[56px] border-b border-white/[0.04] hover:bg-white/[0.015] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 cursor-default"
                                >

                                    {/* Left Column: Stark Time */}
                                    <div className="w-full md:w-[25%] mb-4 md:mb-0 shrink-0">
                                        <span className="font-mono text-[16px] xl:text-[18px] font-bold text-accent-secondary tracking-[2px] inline-block mb-2">
                                            {item.time}
                                        </span>
                                        {item.dateNote && (
                                            <span className="block font-mono text-[12px] text-red-500/90 font-bold tracking-[1px] mb-2">
                                                ( {item.dateNote} )
                                            </span>
                                        )}
                                        {item.duration && (
                                            <span className="block font-mono text-[12px] text-accent-primary/30 uppercase tracking-[3px]">
                                                RUN: {item.duration}
                                            </span>
                                        )}
                                    </div>

                                    {/* Middle Column: Massive Title */}
                                    <div className="w-full md:w-[45%] mb-4 md:mb-0 shrink-0 pr-8">
                                        <h3 className="font-display font-black text-[28px] md:text-[36px] lg:text-[44px] text-white opacity-80 group-hover:opacity-100 tracking-[-0.03em] leading-[1.1] transition-opacity duration-300">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Right Column: Subtitle / Description */}
                                    <div className="w-full md:w-[30%] flex items-start md:justify-end">
                                        {item.subtitle && (
                                            <p className="font-body text-[16px] lg:text-[18px] text-accent-primary/40 leading-[1.6] md:text-right w-full">
                                                {item.subtitle}
                                            </p>
                                        )}
                                    </div>

                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
