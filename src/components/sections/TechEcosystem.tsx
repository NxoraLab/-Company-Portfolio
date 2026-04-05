'use client';

import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  { icon: '⚛️', name: 'React' },
  { icon: '▲', name: 'Next.js' },
  { icon: '🟢', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '🧠', name: 'TensorFlow' },
  { icon: '🤖', name: 'OpenAI / LLMs' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🐳', name: 'Docker' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '🐘', name: 'PostgreSQL' },
  { icon: '🔧', name: 'GitHub / CI-CD' },
  { icon: '📊', name: 'Kubernetes' },
];

export function TechEcosystem() {
  return (
    <section id="tech" className="section relative z-10 bg-gradient-to-t from-transparent via-[#2563EB05] to-transparent">
      <div className="container">
        
        <div className="section-header">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="section-tag"
          >
            Our Stack
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="section-title"
          >
            Technology <span className="gradient-text">Ecosystem</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="section-desc"
          >
            We work with industry-leading technologies to engineer robust, scalable, and intelligent solutions.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
          }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {techs.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
              }}
              className="flex items-center gap-2.5 px-6 py-3.5 bg-white/5 border border-white/10 rounded-full font-semibold text-[0.9rem] text-[var(--frost)] cursor-default transition-all duration-300 hover:bg-white/10 hover:border-[var(--blue)]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3),var(--glow-blue)]"
            >
              <span className="text-[1.3rem]">{tech.icon}</span>
              {tech.name}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
