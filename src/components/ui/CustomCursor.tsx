'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDesktop(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    }
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Define what triggers the hover state
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isDesktop, isVisible]);

  // Spring physics for trailing effect
  const cursorX = useSpring(mousePosition.x, { stiffness: 600, damping: 30, mass: 0.5 });
  const cursorY = useSpring(mousePosition.y, { stiffness: 600, damping: 30, mass: 0.5 });

  useEffect(() => {
    if (isDesktop && isVisible) {
      cursorX.set(mousePosition.x);
      cursorY.set(mousePosition.y);
    }
  }, [mousePosition, cursorX, cursorY, isDesktop, isVisible]);

  // Do not render anything on mobile
  if (!isDesktop) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * { cursor: none !important; }
      ` }} />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-white/50 flex items-center justify-center mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={{
          default: { width: 32, height: 32, opacity: isVisible ? 1 : 0 },
          hover: { width: 60, height: 60, opacity: 1, backgroundColor: 'rgba(255, 255, 255, 1)' }
        }}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
      
      {/* Tiny inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full bg-white mix-blend-difference"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={{
          default: { width: 6, height: 6, opacity: isVisible ? 1 : 0 },
          hover: { width: 0, height: 0, opacity: 0 } // Disappear when outer ring fills
        }}
        animate={isHovering ? "hover" : "default"}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
