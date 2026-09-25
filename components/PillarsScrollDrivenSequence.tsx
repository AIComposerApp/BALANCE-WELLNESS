'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { SplitRevealText, DawnIlluminateText } from './text-animations';

interface PillarData {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  image: string;
}

const PILLARS: PillarData[] = [
  {
    id: '01',
    stepNumber: '01',
    title: 'Holistic Approach',
    description:
      'We treat mind, body, and soul in unified alignment for interconnected physical vitality and mental peace.',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '02',
    stepNumber: '02',
    title: 'Personalized Guidance',
    description:
      'Tailored bio-individual coaching with compassionate mentorship and restorative daily protocols.',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '03',
    stepNumber: '03',
    title: 'Lasting Transformation',
    description:
      'Sustainable daily practices that downregulate stress, build resilience, and elevate baseline energy.',
    image:
      'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1200&auto=format&fit=crop',
  },
];

export function PillarsScrollDrivenSequence() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll position across the 300vh sticky container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Calculate active index cleanly based on scroll position thresholds
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.35) {
      setActiveIndex(0);
    } else if (latest >= 0.35 && latest < 0.70) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  const activePillar = PILLARS[activeIndex];

  return (
    <section ref={targetRef} className="relative h-[300vh] w-full bg-[#F9F7F2]">
      {/* Sticky Fullscreen Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6 sm:px-12 lg:px-20">
        
        {/* Main Grid: Single AnimatePresence Text & Clean Deck-Stacking Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: Single Active Text Node with AnimatePresence (Zero Overlap) */}
          <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[260px] flex flex-col justify-center">
            
            {/* Step Counter Indicator */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono tracking-widest text-[#1E2522]/50 uppercase">
                0{activeIndex + 1} / 03
              </span>
              <div className="w-12 h-[1px] bg-[#1E2522]/20" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -18, filter: 'blur(8px)' }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="space-y-4 select-none"
              >
                <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1E2522] font-normal leading-tight">
                  <SplitRevealText
                    text={activePillar.title}
                    splitBy="words"
                    stagger={0.08}
                    duration={0.8}
                  />
                </h3>

                <DawnIlluminateText
                  text={activePillar.description}
                  className="font-sans text-base sm:text-lg text-[#3E4A43] leading-relaxed max-w-md block"
                  stagger={0.03}
                  delay={0.12}
                />
              </motion.div>
            </AnimatePresence>

            {/* Minimal Step Navigation Indicators */}
            <div className="flex items-center gap-2 mt-8">
              {PILLARS.map((p, idx) => (
                <div
                  key={p.id}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === activeIndex
                      ? 'w-8 bg-[#1E2522]'
                      : 'w-2 bg-[#1E2522]/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Controlled Deck-Stacking Images */}
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] rounded-3xl overflow-hidden border border-[#E4DFD3]/80 bg-[#1E2522]">
              
              {/* Image 0: Base Layer */}
              <div className="absolute inset-0 w-full h-full z-10">
                <Image
                  src={PILLARS[0].image}
                  alt={PILLARS[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Image 1: Layer 2 - Smoothly slides up when activeIndex >= 1 */}
              <motion.div
                initial={false}
                animate={{
                  y: activeIndex >= 1 ? '0%' : '100%',
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 w-full h-full z-20"
              >
                <Image
                  src={PILLARS[1].image}
                  alt={PILLARS[1].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </motion.div>

              {/* Image 2: Layer 3 - Smoothly slides up when activeIndex >= 2 */}
              <motion.div
                initial={false}
                animate={{
                  y: activeIndex >= 2 ? '0%' : '100%',
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 w-full h-full z-30"
              >
                <Image
                  src={PILLARS[2].image}
                  alt={PILLARS[2].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
