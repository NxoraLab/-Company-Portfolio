'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hexagon, Menu, X } from 'lucide-react';
import { Button } from './Button';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-[#0f172add] backdrop-blur-xl border-b border-white/5 shadow-lg' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 max-w-[1240px] flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center z-[1001] transition-transform hover:scale-105">
            <img src="/logo.png" alt="NxoraLab Logo" className="h-[35px] md:h-[42px] w-auto object-contain drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-[var(--gray)] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-[10%] right-[10%] h-[2px] rounded-full bg-[var(--gradient)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-[1001]">
            <div className="hidden md:block">
              <Button href="#contact" className="!py-2.5 !px-6">Start a Project</Button>
            </div>
            <button 
              className="md:hidden text-white p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] bg-[#0f172af0] backdrop-blur-2xl flex flex-col items-center justify-center pt-20 pb-10 px-6 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 w-full">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium text-white hover:text-[var(--blue)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-6 w-full max-w-[200px]">
                <Button href="#contact" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
                  Start a Project
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
