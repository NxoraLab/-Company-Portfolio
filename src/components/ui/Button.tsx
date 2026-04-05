'use client';

import React, { useRef } from 'react';
import { motion, HTMLMotionProps, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "variant" | "children" | "className" | "style" | "onDragStart" | "onDragEnd"> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  glow?: boolean;
  href?: string;
  className?: string;
}

export function Button({
  variant = 'primary',
  children,
  icon,
  fullWidth = false,
  glow = false,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  // Magnetic Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring configuration for the magnetic pull
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Magnetic pull ratio
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
    
    if (props.onMouseMove) props.onMouseMove(e as any);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    x.set(0);
    y.set(0);
    if (props.onMouseLeave) props.onMouseLeave(e as any);
  };

  const baseClass = "inline-flex items-center gap-2.5 px-8 py-3.5 font-semibold text-[0.95rem] rounded-[10px] transition-colors duration-300 relative overflow-hidden group cursor-pointer border";
  
  let variantClass = "";
  if (variant === 'primary') {
    variantClass = "bg-[var(--gradient)] text-white border-transparent";
  } else if (variant === 'secondary') {
    variantClass = "bg-[rgba(255,255,255,0.05)] text-white border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)]";
  }

  const glowStyle = glow 
    ? { boxShadow: '0 0 30px rgba(37, 99, 235, 0.4)' } 
    : {};

  const content = (
    <motion.div 
      className="relative z-10 flex items-center justify-center gap-2"
      style={{ 
        x: useSpring(useTransform(x, (v) => v * 0.3), springConfig), 
        y: useSpring(useTransform(y, (v) => v * 0.3), springConfig) 
      }}
    >
      <span>{children}</span>
      {icon && <span className="flex items-center justify-center w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">{icon}</span>}
    </motion.div>
  );

  const classes = `${baseClass} ${variantClass} ${fullWidth ? 'w-full justify-center' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className="inline-block relative z-20">
        <motion.button 
          ref={ref as any}
          className={classes} 
          style={{ ...glowStyle, x: smoothX, y: smoothY }}
          whileTap={{ scale: 0.95 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          {...(props as any)}
        >
          {variant === 'primary' && (
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
          )}
          {content}
        </motion.button>
      </a>
    );
  }

  return (
    <motion.button 
      ref={ref}
      className={classes} 
      style={{ ...glowStyle, x: smoothX, y: smoothY }}
      whileTap={{ scale: 0.95 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
      )}
      {content}
    </motion.button>
  );
}
