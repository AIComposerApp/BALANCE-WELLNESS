'use client';

import React from 'react';
import { motion } from 'motion/react';

interface RollingTextProps {
  text: string;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'a';
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export function RollingText({
  text,
  className = '',
  as = 'span',
  href,
  onClick,
  active = false,
}: RollingTextProps) {
  const Component = (href ? 'a' : as) as React.ElementType;
  const characters = text.split('');

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`group relative inline-flex overflow-hidden cursor-pointer select-none py-1.5 px-0.5 ${className}`}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex overflow-hidden">
        {characters.map((char, i) => (
          <span
            key={i}
            className="relative inline-block overflow-hidden"
          >
            {/* Top character sliding up and out on hover with letter delay */}
            <span
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
            {/* Bottom character sliding up into view on hover with letter delay */}
            <span
              className="absolute inset-0 inline-block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          </span>
        ))}
      </span>

      {/* Hover growing line preview (for non-active tabs) */}
      {!active && (
        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1E2522]/30 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] origin-left" />
      )}

      {/* Active growing line with smooth layout transition on click */}
      {active && (
        <motion.span
          layoutId="activeHeaderNavUnderline"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 32,
            mass: 0.8,
          }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1E2522] rounded-full origin-left"
        />
      )}
    </Component>
  );
}

