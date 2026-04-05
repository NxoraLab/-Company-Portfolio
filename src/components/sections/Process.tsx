'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discovery', desc: 'Deep-dive into your business, goals, users, and challenges. We understand before we build.' },
  { num: '02', title: 'Strategy', desc: 'Architecture planning, technology selection, timeline definition, and success metrics alignment.' },
  { num: '03', title: 'Design', desc: 'Premium UI/UX design, interactive prototyping, and user-centric experience engineering.' },
  { num: '04', title: 'Development', desc: 'Agile sprints, clean code, rigorous testing, and transparent progress updates throughout.' },
  { num: '05', title: 'Deployment', desc: 'Cloud deployment, performance optimization, security hardening, and production launch.' },
  { num: '06', title: 'Optimization & Support', desc: 'Continuous monitoring, iterative improvements, and long-term technical partnership.' },
];

export function Process() {
  return (
    <section id="process" className="section relative z-10 bg-gradient-to-b from-transparent via-[#2563EB05] to-transparent">
      <div className="container">
        
        <div className="section-header">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="section-tag"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="section-title"
          >
            Our <span className="gradient-text">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="section-desc"
          >
            A proven methodology that ensures exceptional outcomes for every engagement.
          </motion.p>
        </div>

        <div className="max-w-[700px] mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[30px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--blue)] to-[var(--violet)] opacity-30" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex gap-7 py-7 relative group"
            >
              {/* Number Badge */}
              <div className="w-[60px] h-[60px] rounded-full shrink-0 flex items-center justify-center font-['Space_Grotesk'] text-[1.1rem] font-extrabold bg-[var(--navy)] border-2 border-[var(--blue)]/30 text-[var(--blue)] z-10 transition-all duration-300 group-hover:bg-[var(--gradient)] group-hover:text-white group-hover:border-transparent group-hover:shadow-[var(--glow-blue)]">
                {step.num}
              </div>
              
              <div className="pt-3">
                <h3 className="text-[1.15rem] font-bold mb-2 text-white transition-colors group-hover:text-[var(--blue)]">{step.title}</h3>
                <p className="text-[var(--gray)] text-[0.9rem] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
