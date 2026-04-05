'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../ui/Button';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      
      setTimeout(() => {
        setIsSent(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  return (
    <>
      {/* CTA Section */}
      <section className="section text-center relative overflow-hidden bg-[#0F172A] pt-32 pb-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_70%)] pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold mb-4 text-white font-['Space_Grotesk']">
              Let's Build the Future <span className="gradient-text">Together</span>
            </h2>
            <p className="text-[var(--gray)] text-[1.1rem] mb-9 max-w-2xl mx-auto">
              Ready to transform your business with intelligent technology? Let's start a conversation.
            </p>
            <Button href="#contact" glow icon={<Send size={18} />}>
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact" className="section relative z-10 bg-gradient-to-t from-transparent via-[#7C3AED05] to-transparent">
        <div className="container">
          
          <div className="section-header">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="section-tag"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="section-title"
            >
              Let's <span className="gradient-text">Connect</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="section-desc"
            >
              Have a project in mind? We'd love to hear about it.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            
            {/* Form */}
            <motion.form 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="p-10 bg-white/5 border border-white/10 rounded-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-[0.85rem] font-semibold text-[var(--frost)] mb-2">Full Name</label>
                  <input type="text" id="name" required placeholder="John Doe" 
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white font-[0.95rem] transition-all focus:border-[var(--blue)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15),0_0_20px_rgba(37,99,235,0.1)] focus:bg-white/10 outline-none placeholder:text-[var(--gray-dark)]" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[0.85rem] font-semibold text-[var(--frost)] mb-2">Email Address</label>
                  <input type="email" id="email" required placeholder="john@company.com" 
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white font-[0.95rem] transition-all focus:border-[var(--blue)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15),0_0_20px_rgba(37,99,235,0.1)] focus:bg-white/10 outline-none placeholder:text-[var(--gray-dark)]" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="company" className="block text-[0.85rem] font-semibold text-[var(--frost)] mb-2">Company</label>
                  <input type="text" id="company" placeholder="Your Company" 
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white font-[0.95rem] transition-all focus:border-[var(--blue)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15),0_0_20px_rgba(37,99,235,0.1)] focus:bg-white/10 outline-none placeholder:text-[var(--gray-dark)]" 
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-[0.85rem] font-semibold text-[var(--frost)] mb-2">Project Type</label>
                  <select id="projectType" 
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white font-[0.95rem] transition-all focus:border-[var(--blue)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15),0_0_20px_rgba(37,99,235,0.1)] focus:bg-white/10 outline-none appearance-none cursor-pointer" 
                  >
                    <option value="" className="bg-[var(--navy)]">Select a service</option>
                    <option className="bg-[var(--navy)]">AI Solutions</option>
                    <option className="bg-[var(--navy)]">Custom Software</option>
                    <option className="bg-[var(--navy)]">Business Automation</option>
                    <option className="bg-[var(--navy)]">Cloud & DevOps</option>
                    <option className="bg-[var(--navy)]">Data Analytics</option>
                    <option className="bg-[var(--navy)]">UI/UX Design</option>
                    <option className="bg-[var(--navy)]">IT Consulting</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-[0.85rem] font-semibold text-[var(--frost)] mb-2">Message</label>
                <textarea id="message" required rows={5} placeholder="Tell us about your project..." 
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white font-[0.95rem] transition-all focus:border-[var(--blue)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15),0_0_20px_rgba(37,99,235,0.1)] focus:bg-white/10 outline-none placeholder:text-[var(--gray-dark)] resize-y min-h-[120px]" 
                />
              </div>

              <Button 
                type="submit" 
                fullWidth 
                disabled={isSubmitting || isSent}
                className={isSent ? '!bg-emerald-500 !shadow-[0_4px_15px_rgba(16,185,129,0.3)] !translate-y-0' : ''}
              >
                {isSubmitting ? 'Sending...' : isSent ? '✓ Message Sent!' : 'Send Message'}
              </Button>
            </motion.form>

            {/* Info Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex flex-col gap-5"
            >
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl transition-all hover:bg-white/10 hover:border-[var(--blue)]/30">
                <Mail className="text-[var(--blue)] w-7 h-7 mb-3" />
                <h4 className="text-[1rem] font-bold text-white mb-1">Email</h4>
                <p className="text-[var(--gray)] text-[0.9rem]">hello@nxoralab.com</p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl transition-all hover:bg-white/10 hover:border-[var(--blue)]/30">
                <Phone className="text-[var(--blue)] w-7 h-7 mb-3" />
                <h4 className="text-[1rem] font-bold text-white mb-1">Phone</h4>
                <p className="text-[var(--gray)] text-[0.9rem]">+1 (555) 123-4567</p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl transition-all hover:bg-white/10 hover:border-[var(--blue)]/30">
                <MapPin className="text-[var(--blue)] w-7 h-7 mb-3" />
                <h4 className="text-[1rem] font-bold text-white mb-1">Office</h4>
                <p className="text-[var(--gray)] text-[0.9rem]">Innovation District,<br/>San Francisco, CA</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
