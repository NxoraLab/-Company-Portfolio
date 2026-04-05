'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Bot, CloudCog, BarChart4, LayoutTemplate, Network } from 'lucide-react';

const services = [
  {
    icon: <BrainCircuit size={28} />,
    title: 'AI Solutions',
    desc: 'Custom AI models, intelligent chatbots, NLP systems, computer vision, and machine learning pipelines tailored to your business.'
  },
  {
    icon: <Code2 size={28} />,
    title: 'Custom Software Development',
    desc: 'Scalable web applications, enterprise platforms, SaaS products, and bespoke digital solutions built with modern architectures.'
  },
  {
    icon: <Bot size={28} />,
    title: 'Business Automation',
    desc: 'Intelligent workflow automation, RPA solutions, process optimization, and AI-driven business intelligence systems.'
  },
  {
    icon: <CloudCog size={28} />,
    title: 'Cloud & DevOps',
    desc: 'Cloud architecture, Kubernetes orchestration, CI/CD pipelines, infrastructure automation, and scalable deployment strategies.'
  },
  {
    icon: <BarChart4 size={28} />,
    title: 'Data Analytics & Dashboards',
    desc: 'Real-time analytics platforms, interactive dashboards, data visualization, predictive analytics, and business intelligence tools.'
  },
  {
    icon: <LayoutTemplate size={28} />,
    title: 'UI/UX Design',
    desc: 'Premium user experience design, interactive prototyping, design systems, and conversion-optimized interfaces for digital products.'
  },
  {
    icon: <Network size={28} />,
    title: 'IT Consulting',
    desc: 'Strategic technology advisory, digital transformation roadmaps, architecture reviews, and modernization planning for enterprises.'
  }
];

export function Services() {
  return (
    <section id="services" className="section relative z-10 bg-[#0F172A]">
      <div className="container">
        
        <div className="section-header">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="section-tag"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="section-title"
          >
            Intelligent Solutions,<br /><span className="gradient-text">Exceptional Results</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="section-desc"
          >
            We deliver end-to-end technology services that transform how businesses operate, compete, and grow in the digital era.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group p-8 bg-white/5 border border-white/5 rounded-2xl relative overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-[var(--blue)]/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(37,99,235,0.1)] cursor-pointer"
            >
              {/* Top gradient border reveal */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--gradient)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-14 h-14 rounded-xl bg-[var(--gradient)] text-white shadow-[0_4px_15px_rgba(37,99,235,0.3)] flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-[1.15rem] font-bold mb-3">{service.title}</h3>
              <p className="text-[var(--gray)] text-[0.9rem] leading-[1.7]">{service.desc}</p>
              
              <div className="absolute bottom-6 right-6 text-[var(--blue)] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold text-xl">
                →
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
