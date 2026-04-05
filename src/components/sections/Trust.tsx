'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "NxoraLab transformed our operations with their AI chatbot platform. The quality and speed of delivery exceeded all expectations.",
    initials: "JR",
    name: "James Richardson",
    title: "CTO, FinEdge Solutions"
  },
  {
    quote: "Their technical expertise and premium design approach gave us a competitive edge. A truly world-class team.",
    initials: "SN",
    name: "Sarah Nakamura",
    title: "VP Product, HealthSync"
  },
  {
    quote: "From strategy to deployment, NxoraLab delivered a scalable cloud architecture that handles millions of transactions daily.",
    initials: "MK",
    name: "Michael Kowalski",
    title: "CEO, LogiFlow Systems"
  }
];

const values = [
  { icon: '🚀', title: 'Future-Ready Solutions' },
  { icon: '🤝', title: 'Client-Focused Delivery' },
  { icon: '⚡', title: 'High-Performance Engineering' },
  { icon: '💡', title: 'Innovation Culture' },
  { icon: '✅', title: 'Quality-Driven Execution' },
];

export function Trust() {
  return (
    <section id="trust" className="section relative z-10 bg-[#0F172A]">
      <div className="container">
        
        <div className="section-header">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="section-tag"
          >
            Trust & Values
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="section-title"
          >
            Why Clients <span className="gradient-text">Trust Us</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              <div className="text-[0.95rem] text-[var(--frost)] italic leading-[1.8] mb-6 relative pl-5 border-l-2 border-[var(--blue)]">
                "{t.quote}"
              </div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[var(--gradient)] flex items-center justify-center font-bold text-[0.85rem] text-white">
                  {t.initials}
                </div>
                <div>
                  <strong className="block text-[0.9rem] text-white">{t.name}</strong>
                  <span className="text-[0.8rem] text-[var(--gray-dark)]">{t.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {values.map((v, idx) => (
            <div key={idx} className="flex items-center gap-2.5 px-6 py-3.5 bg-white/5 border border-white/10 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-[var(--blue)]/20">
              <span className="text-xl">{v.icon}</span>
              <h4 className="text-[0.9rem] font-semibold text-white">{v.title}</h4>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
