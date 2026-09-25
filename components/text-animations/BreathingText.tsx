'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface BreathingTextProps {
  quote: string;
  author?: string;
  className?: string;
  enableGuide?: boolean;
}

export function BreathingText({
  quote,
  author,
  className = '',
  enableGuide = true,
}: BreathingTextProps) {
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Inhale');

  useEffect(() => {
    // 4-2-4-2 breathing cycle
    const cycle = [
      { name: 'Inhale' as const, duration: 4000 },
      { name: 'Hold' as const, duration: 2000 },
      { name: 'Exhale' as const, duration: 4000 },
      { name: 'Rest' as const, duration: 1500 },
    ];

    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const step = () => {
      setPhase(cycle[currentIndex].name);
      timeoutId = setTimeout(() => {
        currentIndex = (currentIndex + 1) % cycle.length;
        step();
      }, cycle[currentIndex].duration);
    };

    step();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`relative flex flex-col items-center text-center select-none ${className}`}>
      {/* Visual Breath Cadence Pill */}
      {enableGuide && (
        <motion.div
          className="mb-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] uppercase tracking-[0.2em] text-[#E4DFD3]"
          animate={{
            borderColor:
              phase === 'Inhale'
                ? 'rgba(197, 155, 88, 0.6)'
                : phase === 'Hold'
                ? 'rgba(163, 176, 157, 0.6)'
                : 'rgba(228, 223, 211, 0.3)',
          }}
          transition={{ duration: 1.2 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-[#C59B58]"
            animate={{
              scale: phase === 'Inhale' ? [1, 1.6] : phase === 'Hold' ? 1.6 : [1.6, 1],
              opacity: phase === 'Inhale' ? 1 : phase === 'Hold' ? 0.9 : 0.6,
            }}
            transition={{
              duration: phase === 'Inhale' ? 4 : phase === 'Hold' ? 2 : 4,
              ease: 'easeInOut',
            }}
          />
          <span>Prana Breath: {phase}</span>
        </motion.div>
      )}

      {/* Main Quote with Synchronized Breath Oscillation */}
      <motion.blockquote
        className="font-serif leading-[1.25] text-white/95 drop-shadow-md"
        animate={{
          scale: phase === 'Inhale' ? 1.025 : phase === 'Hold' ? 1.025 : 1,
          letterSpacing: phase === 'Inhale' ? '0.015em' : '0.005em',
          textShadow:
            phase === 'Inhale' || phase === 'Hold'
              ? '0 0 28px rgba(197, 155, 88, 0.25), 0 2px 10px rgba(0,0,0,0.5)'
              : '0 2px 10px rgba(0,0,0,0.5)',
        }}
        transition={{
          duration: phase === 'Inhale' ? 4 : phase === 'Hold' ? 2 : 4,
          ease: 'easeInOut',
        }}
      >
        &ldquo;{quote}&rdquo;
      </motion.blockquote>

      {author && (
        <motion.cite
          className="mt-6 not-italic font-sans text-xs uppercase tracking-[0.26em] text-[#A3B09D] font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {author}
        </motion.cite>
      )}
    </div>
  );
}
