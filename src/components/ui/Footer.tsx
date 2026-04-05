'use client';

import React from 'react';
import { Hexagon, Share2, Globe, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 pt-20 pb-8 border-t border-white/5 bg-black/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#hero" className="inline-block z-[1001] mb-6 transition-transform hover:scale-105">
              <img src="/logo.png" alt="NxoraLab Logo" className="h-[38px] w-auto object-contain drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]" />
            </a>
            <p className="text-[var(--gray)] text-sm mt-4 max-w-[280px]">
              Engineering intelligent digital experiences for forward-thinking organizations worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[0.9rem] mb-5 uppercase tracking-[1px] text-[var(--frost)] font-bold">Navigation</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-[var(--gray)] text-[0.88rem] py-1 transition-all hover:text-white hover:translate-x-1">About</a>
              <a href="#services" className="text-[var(--gray)] text-[0.88rem] py-1 transition-all hover:text-white hover:translate-x-1">Services</a>
              <a href="#projects" className="text-[var(--gray)] text-[0.88rem] py-1 transition-all hover:text-white hover:translate-x-1">Projects</a>
              <a href="#process" className="text-[var(--gray)] text-[0.88rem] py-1 transition-all hover:text-white hover:translate-x-1">Process</a>
              <a href="#contact" className="text-[var(--gray)] text-[0.88rem] py-1 transition-all hover:text-white hover:translate-x-1">Contact</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.9rem] mb-5 uppercase tracking-[1px] text-[var(--frost)] font-bold">Services</h4>
            <div className="flex flex-col gap-2">
              <a href="#services" className="text-[var(--gray)] text-[0.88rem] py-1 transition-all hover:text-white hover:translate-x-1">AI Solutions</a>
              <a href="#services" className="text-[var(--gray)] text-[0.88rem] py-1 transition-all hover:text-white hover:translate-x-1">Software Dev</a>
              <a href="#services" className="text-[var(--gray)] text-[0.88rem] py-1 transition-all hover:text-white hover:translate-x-1">Cloud & DevOps</a>
              <a href="#services" className="text-[var(--gray)] text-[0.88rem] py-1 transition-all hover:text-white hover:translate-x-1">Data Analytics</a>
              <a href="#services" className="text-[var(--gray)] text-[0.88rem] py-1 transition-all hover:text-white hover:translate-x-1">UI/UX Design</a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[0.9rem] mb-5 uppercase tracking-[1px] text-[var(--frost)] font-bold">Connect</h4>
            <div className="flex gap-3 mt-2">
              <a href="#" className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-[var(--gray)] transition-all hover:bg-[var(--gradient)] hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-[var(--glow-blue)]">
                <Globe size={18} />
              </a>
              <a href="#" className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-[var(--gray)] transition-all hover:bg-[var(--gradient)] hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-[var(--glow-blue)]">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-[var(--gray)] transition-all hover:bg-[var(--gradient)] hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-[var(--glow-blue)]">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between pt-6 border-t border-white/5 text-[var(--gray-dark)] text-[0.82rem] text-center md:text-left gap-2">
          <p>&copy; {new Date().getFullYear()} NxoraLab. All rights reserved.</p>
          <p>Designed & Engineered with ❤️ by NxoraLab</p>
        </div>
      </div>
    </footer>
  );
}
