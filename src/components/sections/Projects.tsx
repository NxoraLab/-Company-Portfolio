'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    category: 'AI Platform',
    title: 'AI Chatbot Platform',
    desc: 'Multi-channel intelligent chatbot with NLP, sentiment analysis, and seamless CRM integrations for a fintech leader.',
    tags: ['Python', 'OpenAI', 'React', 'AWS'],
    gradient: 'from-[#2563EB33] to-[#7C3AED33]',
  },
  {
    category: 'Data Analytics',
    title: 'Real-Time Analytics Dashboard',
    desc: 'Interactive data visualization platform with predictive analytics, custom KPIs, and automated reporting for healthcare.',
    tags: ['Next.js', 'D3.js', 'PostgreSQL', 'Docker'],
    gradient: 'from-[#7C3AED33] to-[#EC489933]',
  },
  {
    category: 'Automation',
    title: 'Automation Management System',
    desc: 'End-to-end workflow automation platform for a logistics company, reducing manual processes by 75%.',
    tags: ['Node.js', 'MongoDB', 'React', 'K8s'],
    gradient: 'from-[#10B98133] to-[#2563EB33]',
  },
  {
    category: 'Enterprise',
    title: 'Enterprise Web Application',
    desc: 'Custom ERP platform with role-based access, real-time collaboration, and AI-powered insights for a manufacturing firm.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    gradient: 'from-[#F5920033] to-[#EF444433]',
  },
  {
    category: 'Cloud Architecture',
    title: 'Cloud Deployment Architecture',
    desc: 'Microservices architecture with auto-scaling, blue-green deployments, and 99.99% uptime SLA for a SaaS platform.',
    tags: ['AWS', 'Docker', 'Terraform', 'CI/CD'],
    gradient: 'from-[#2563EB33] to-[#06B6D433]',
  }
];

export function Projects() {
  return (
    <section id="projects" className="section relative z-10 bg-[#0F172A]">
      <div className="container">
        
        <div className="section-header">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="section-tag"
          >
            Our Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="section-title"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="section-desc"
          >
            A selection of impactful solutions we've engineered for clients across industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[var(--blue)]/30 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4),var(--glow-blue)]"
            >
              <div className={`h-[220px] relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 opacity-15 flex items-center justify-center pointer-events-none">
                  <span className="text-[6rem] text-white">⬡</span>
                </div>
                <div className="absolute top-4 right-4 px-3.5 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-[0.75rem] font-bold text-[var(--frost)] border border-white/10">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-[1.15rem] font-bold mb-2">{project.title}</h3>
                <p className="text-[var(--gray)] text-[0.9rem] leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[var(--blue)]/10 rounded-full text-[0.75rem] font-bold text-[var(--blue)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
