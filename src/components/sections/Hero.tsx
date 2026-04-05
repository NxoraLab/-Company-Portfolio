'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Cloud, Zap, ArrowRight, MonitorPlay } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  const { scrollY } = useScroll();
  
  // Create different scrolling speeds for parallax layering
  const yParallax1 = useTransform(scrollY, [0, 800], [0, -150]);
  const yParallax2 = useTransform(scrollY, [0, 800], [0, -300]);
  const yParallax3 = useTransform(scrollY, [0, 800], [0, -80]);
  const contentY = useTransform(scrollY, [0, 600], [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: custom * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    })
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 pt-24 pb-12">
      
      {/* Background Gradients & Grids */}
      <div className="absolute inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-[var(--blue)] rounded-full blur-[120px] opacity-40 animate-[glowFloat_8s_ease-in-out_infinite_alternate]" />
        <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] bg-[var(--violet)] rounded-full blur-[120px] opacity-40 animate-[glowFloat_10s_ease-in-out_infinite_alternate-reverse]" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 70%)'
        }} />
      </div>

      <motion.div 
        className="container relative z-10 text-center flex flex-col items-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        
        <motion.div 
          custom={0} initial="hidden" animate="visible" variants={fadeUpVariant}
          className="inline-flex items-center gap-2 px-5 py-2 mb-7 bg-white/5 border border-white/10 rounded-full text-[0.85rem] font-medium text-[var(--gray)] backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
          Pioneering Intelligent Systems
        </motion.div>
        
        <motion.h1 
          custom={1} initial="hidden" animate="visible" variants={fadeUpVariant}
          className="text-4xl md:text-5xl lg:text-[4.5rem] font-black mb-6 tracking-tight leading-[1.1] font-['Space_Grotesk']"
        >
          Engineering Intelligent<br />
          <span className="bg-[var(--gradient-text)] text-transparent bg-clip-text">Digital Experiences</span>
        </motion.h1>

        <motion.p 
          custom={2} initial="hidden" animate="visible" variants={fadeUpVariant}
          className="text-base md:text-lg lg:text-xl text-[var(--gray)] max-w-3xl mb-10 leading-relaxed"
        >
          NxoraLab builds AI-powered systems, modern software, cloud solutions,
          and business automation for forward-thinking organizations worldwide.
        </motion.p>

        <motion.div 
          custom={3} initial="hidden" animate="visible" variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <Button href="#services" variant="primary" icon={<ArrowRight size={18} />}>
            Explore Services
          </Button>
          <Button href="#projects" variant="secondary" icon={<MonitorPlay size={18} />}>
            View Our Work
          </Button>
        </motion.div>

        <motion.div 
          custom={4} initial="hidden" animate="visible" variants={fadeUpVariant}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold font-['Space_Grotesk'] bg-[var(--gradient-text)] text-transparent bg-clip-text">50+</div>
            <div className="text-xs font-semibold text-[var(--gray-dark)] uppercase tracking-wider mt-1">Projects Delivered</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold font-['Space_Grotesk'] bg-[var(--gradient-text)] text-transparent bg-clip-text">30+</div>
            <div className="text-xs font-semibold text-[var(--gray-dark)] uppercase tracking-wider mt-1">Happy Clients</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold font-['Space_Grotesk'] bg-[var(--gradient-text)] text-transparent bg-clip-text">99%</div>
            <div className="text-xs font-semibold text-[var(--gray-dark)] uppercase tracking-wider mt-1">Satisfaction</div>
          </div>
        </motion.div>

      </motion.div>

      {/* Floating Parallax Cards (Hidden on mobile) */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        
        {/* Parallax Layer 1 (Medium Speed) */}
        <motion.div style={{ y: yParallax1 }} className="absolute top-[25%] left-[5%]">
          <motion.div 
            className="flex items-center gap-3 px-5 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Brain className="text-[var(--violet)]" size={24} />
            <div>
              <div className="text-white text-sm font-bold">AI Engine</div>
              <div className="text-emerald-500 text-[0.65rem] font-bold uppercase tracking-wide bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block mt-1">Active</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Parallax Layer 2 (Fast Speed) */}
        <motion.div style={{ y: yParallax2 }} className="absolute top-[35%] right-[5%]">
          <motion.div 
            className="flex items-center gap-3 px-5 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            initial={{ y: 0 }}
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cloud className="text-[var(--blue)]" size={24} />
            <div>
              <div className="text-white text-sm font-bold">Cloud Infra</div>
              <div className="text-emerald-500 text-[0.65rem] font-bold uppercase tracking-wide bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block mt-1">99.9% Uptime</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Parallax Layer 3 (Slow Speed) */}
        <motion.div style={{ y: yParallax3 }} className="absolute bottom-[20%] left-[10%]">
          <motion.div 
            className="flex items-center gap-3 px-5 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            initial={{ y: 0 }}
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap className="text-amber-400" size={24} />
            <div>
              <div className="text-white text-sm font-bold">Automation</div>
              <div className="text-emerald-500 text-[0.65rem] font-bold uppercase tracking-wide bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block mt-1">Running</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
