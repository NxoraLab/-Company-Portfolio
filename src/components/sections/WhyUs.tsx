'use client';

import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  { id: '01', title: 'Innovation-First Mindset', desc: 'We leverage the latest in AI, cloud, and modern engineering to keep you ahead of the curve.' },
  { id: '02', title: 'Scalable Architecture', desc: 'Every system is built to grow. From startup MVP to enterprise scale, our solutions evolve with your business.' },
  { id: '03', title: 'Premium UI/UX Approach', desc: 'We obsess over every pixel and interaction. Your users deserve exceptional digital experiences.' },
  { id: '04', title: 'Modern Technology Stack', desc: 'React, Next.js, Python, TensorFlow, AWS — we use the best tools for every challenge.' },
  { id: '05', title: 'Tailored Business Solutions', desc: 'No templates. Every project receives a custom strategy, architecture, and delivery plan.' },
  { id: '06', title: 'Agile Execution', desc: 'Rapid iterations, transparent communication, and on-time delivery. Every single project.' },
  { id: '07', title: 'Long-Term Partnership', desc: 'We provide ongoing support, optimization, and evolution of your systems well beyond launch.' }
];

export function WhyUs() {
  return (
    <section id="why-us" className="section relative z-10 bg-gradient-to-b from-transparent via-[#7C3AED05] to-transparent">
      <div className="container">
        
        <div className="section-header">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="section-tag"
          >
            Why NxoraLab
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="section-title"
          >
            The NxoraLab <span className="gradient-text">Advantage</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="section-desc"
          >
            We don't just deliver technology — we deliver competitive advantages.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.5 }}
              className="p-8 bg-white/5 border border-white/5 rounded-2xl relative transition-all duration-300 hover:bg-white/10 hover:border-[var(--violet)]/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group"
            >
              <div className="font-['Space_Grotesk'] text-4xl font-black bg-[var(--gradient-text)] text-transparent bg-clip-text opacity-30 leading-none mb-3 group-hover:opacity-100 transition-opacity">
                {reason.id}
              </div>
              <h3 className="text-[1.1rem] font-bold mb-2">{reason.title}</h3>
              <p className="text-[var(--gray)] text-[0.9rem] leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
