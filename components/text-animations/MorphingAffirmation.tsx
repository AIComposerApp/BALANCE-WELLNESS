'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

interface MorphingAffirmationProps {
  affirmations?: string[];
  intervalMs?: number;
  className?: string;
}

const DEFAULT_AFFIRMATIONS = [
  'Breathe with intention, rest with grace.',
  'True wellness begins in the stillness of the quiet mind.',
  'Nourish your body as a sacred temple of health.',
  'Align your daily rhythm with the wisdom of nature.',
  'Small daily moments of peace create lasting transformation.',
];

export function MorphingAffirmation({
  affirmations = DEFAULT_AFFIRMATIONS,
  intervalMs = 6000,
  className = '',
}: MorphingAffirmationProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % affirmations.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [affirmations.length, intervalMs, isPaused]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % affirmations.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + affirmations.length) % affirmations.length);
  };

  return (
    <div
      className={`relative p-5 rounded-2xl bg-[#1E2522] text-[#F9F7F2] border border-[#3E4D3E]/40 overflow-hidden shadow-lg ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center justify-between gap-4 mb-3">
        <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-[0.24em] text-[#C59B58]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Daily Mindful Intention</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            aria-label="Previous affirmation"
            className="p-1 rounded-full text-[#A3B09D] hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] text-[#A3B09D] font-mono">
            {index + 1}/{affirmations.length}
          </span>
          <button
            onClick={handleNext}
            aria-label="Next affirmation"
            className="p-1 rounded-full text-[#A3B09D] hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="min-h-[48px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="font-serif text-lg sm:text-xl text-[#F9F7F2] italic leading-snug"
            initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(6px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            &ldquo;{affirmations[index]}&rdquo;
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Progress pill line */}
      <div className="w-full h-0.5 bg-white/10 mt-3 rounded-full overflow-hidden">
        <motion.div
          key={index}
          className="h-full bg-[#C59B58]"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{
            duration: intervalMs / 1000,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  );
}
