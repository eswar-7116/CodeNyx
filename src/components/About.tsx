import React from 'react';
import { motion } from 'framer-motion';

const StatsCard = ({ title, metric, delay }: { title: string, metric: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
        className="bg-[#0e0e0e] border border-white/5 p-[24px] rounded-[8px] flex flex-col justify-between"
    >
        <div className="w-2 h-2 rounded-full bg-accent-secondary mb-[16px]" />
        <h4 className="font-mono text-[12px] text-accent-primary/40 uppercase tracking-[2px]">{title}</h4>
        <p className="font-display font-bold text-[36px] text-accent-primary leading-none mt-[8px]">
            {metric}
        </p>
    </motion.div>
);

const About = () => {
    return (
        <section id="about" className="section-padding bg-bg-base relative">

            {/* Very faint structural background light */}
            <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-glow-card opacity-50 blur-[80px] -z-10 pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-[100px] lg:gap-[140px] items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                        className="flex-1 w-full"
                    >
                        <p className="font-mono text-[13px] text-accent-secondary font-bold uppercase tracking-[4px] mb-[32px]">
                            Platform Overview
                        </p>
                        <h2 className="font-display font-black text-[clamp(44px,7vw,72px)] text-accent-primary tracking-[-0.04em] leading-[1.05] mb-[40px]">
                            What is CodeNyx?
                        </h2>
                        <p className="font-body text-[18px] text-[rgba(255,255,255,0.5)] leading-[1.8] mb-[48px]">
                            CodeNyx is a flagship hackathon architected by GDG CVR On Campus. It serves as a crucible for intense innovation—beginning with a precise DSA screening round, followed by a 36-hour offline sprint where exceptional teams construct solutions to complex, real-world problems.
                        </p>

                        <div className="flex flex-col gap-5 border-l-[2px] border-accent-secondary/30 pl-6 py-2">
                            {[
                                "Architect scalable solutions to immediate problems",
                                "Forge highly cross-functional developer teams",
                                "Extract insights from elite industry mentors",
                                "Demonstrate technical proficiency to judges"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-[16px]">
                                    <span className="font-mono text-[11px] text-accent-secondary font-bold opacity-60">
                                        {`[0${idx + 1}]`}
                                    </span>
                                    <span className="font-body text-[16px] text-[rgba(255,255,255,0.7)] font-medium tracking-tight">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Anchor: Complex Data Montange Layout */}
                    <div className="flex-1 w-full grid grid-cols-2 gap-[16px] xl:gap-[24px]">
                        {/* Large Mockup Element */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
                            className="col-span-2 aspect-[2/1] bg-[#0A0A0B] border border-white/10 rounded-[12px] relative overflow-hidden flex flex-col pt-[16px]"
                        >
                            {/* Simulated UI "Window" Header */}
                            <div className="flex items-center px-[20px] pb-[16px] border-b border-white/[0.04]">
                                <div className="flex gap-[6px]">
                                    <div className="w-[10px] h-[10px] rounded-full bg-white/10" />
                                    <div className="w-[10px] h-[10px] rounded-full bg-white/10" />
                                    <div className="w-[10px] h-[10px] rounded-full bg-white/10" />
                                </div>
                                <div className="mx-auto font-mono text-[10px] text-white/20 tracking-[2px]">SYS.CORE_DASHBOARD</div>
                            </div>

                            {/* Abstract Data Representation */}
                            <div className="flex-1 flex items-end px-[24px] pb-[24px] gap-[8px]">
                                <div className="w-[10%] h-[30%] bg-accent-primary/5 rounded-t-[2px]" />
                                <div className="w-[10%] h-[50%] bg-accent-primary/10 rounded-t-[2px]" />
                                <div className="w-[10%] h-[40%] bg-accent-primary/10 rounded-t-[2px]" />
                                <div className="w-[10%] h-[80%] bg-accent-secondary/40 rounded-t-[2px] relative">
                                    <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent-secondary shadow-[0_0_10px_#FFFF00]" />
                                </div>
                                <div className="w-[10%] h-[60%] bg-accent-primary/10 rounded-t-[2px]" />
                                <div className="w-[10%] h-[95%] bg-accent-primary/20 rounded-t-[2px]" />
                                <div className="w-[10%] h-[75%] bg-accent-primary/20 rounded-t-[2px]" />
                                <div className="w-[10%] h-[65%] bg-accent-primary/10 rounded-t-[2px]" />
                            </div>
                        </motion.div>

                        <StatsCard title="Duration" metric="36 Hrs" delay={0.2} />
                        <StatsCard title="Screening" metric="DSA." delay={0.3} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
