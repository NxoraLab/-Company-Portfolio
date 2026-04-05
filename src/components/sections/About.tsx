'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Globe } from 'lucide-react';
import { SplitText } from '../ui/SplitText';

export function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="about" className="section relative z-10 bg-gradient-to-b from-transparent via-[#2563EB05] to-transparent">
      <div className="container">
        
        <div className="section-header">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="section-tag"
          >
            Who We Are
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="section-title"
          >
            An Innovation Lab for the <span className="gradient-text">Intelligent Future</span>
          </motion.h2>
          <SplitText 
            text="NxoraLab is a future-focused technology company building intelligent digital systems. We combine AI expertise, modern engineering, and design excellence to deliver scalable, transformative solutions."
            className="section-desc justify-center"
            delay={0.2}
          />
        </div>

        <motion.div 
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div variants={item} className="p-8 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),var(--glow-blue)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full translate-x-16 -translate-y-16 transition-transform group-hover:scale-150" />
            <Target className="text-[var(--blue)] w-10 h-10 mb-6" />
            <h3 className="text-xl font-bold mb-3 text-white">Our Mission</h3>
            <p className="text-[var(--gray)] leading-relaxed">To empower organizations with intelligent, scalable technology that drives measurable growth and positions them for the future.</p>
          </motion.div>

          <motion.div variants={item} className="p-8 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-violet-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),var(--glow-violet)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-bl-full translate-x-16 -translate-y-16 transition-transform group-hover:scale-150" />
            <Lightbulb className="text-[var(--violet)] w-10 h-10 mb-6" />
            <h3 className="text-xl font-bold mb-3 text-white">Innovation DNA</h3>
            <p className="text-[var(--gray)] leading-relaxed">We are researchers, builders, and strategists. Every solution is crafted at the intersection of AI innovation and real-world business impact.</p>
          </motion.div>

          <motion.div variants={item} className="p-8 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-emerald-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(16,185,129,0.2)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full translate-x-16 -translate-y-16 transition-transform group-hover:scale-150" />
            <Globe className="text-emerald-400 w-10 h-10 mb-6" />
            <h3 className="text-xl font-bold mb-3 text-white">Global Ambition</h3>
            <p className="text-[var(--gray)] leading-relaxed">From startups to enterprises, we partner with forward-thinking organizations across the globe to build systems that scale.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-3xl"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold font-['Space_Grotesk'] bg-[var(--gradient-text)] text-transparent bg-clip-text">5+</div>
            <div className="text-sm font-medium text-[var(--gray)] mt-2">Years of Innovation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold font-['Space_Grotesk'] bg-[var(--gradient-text)] text-transparent bg-clip-text">50+</div>
            <div className="text-sm font-medium text-[var(--gray)] mt-2">Projects Shipped</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold font-['Space_Grotesk'] bg-[var(--gradient-text)] text-transparent bg-clip-text">12+</div>
            <div className="text-sm font-medium text-[var(--gray)] mt-2">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold font-['Space_Grotesk'] bg-[var(--gradient-text)] text-transparent bg-clip-text">15+</div>
            <div className="text-sm font-medium text-[var(--gray)] mt-2">Team Members</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
