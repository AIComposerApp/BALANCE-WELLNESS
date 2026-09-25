'use client';

import React from 'react';
import { motion } from 'motion/react';

interface SplitRevealTextProps {
  text: string;
  className?: string;
  splitBy?: 'words' | 'lines' | 'chars';
  stagger?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function SplitRevealText({
  text,
  className = '',
  splitBy = 'words',
  stagger = 0.05,
  delay = 0.05,
  duration = 0.8,
  once = true,
}: SplitRevealTextProps) {
  if (splitBy === 'lines') {
    const lines = text.split('\n');
    return (
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: stagger * 2.5,
              delayChildren: delay,
            },
          },
        }}
        className={`inline-block ${className}`}
        aria-label={text}
      >
        {lines.map((line, lineIndex) => (
          <span key={lineIndex} className="block overflow-hidden pb-1">
            <motion.span
              className="block will-change-transform"
              variants={{
                hidden: { y: '100%', opacity: 0, rotate: 1 },
                visible: {
                  y: '0%',
                  opacity: 1,
                  rotate: 0,
                  transition: { duration, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    );
  }

  if (splitBy === 'words') {
    const words = text.split(' ');
    return (
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: stagger,
              delayChildren: delay,
            },
          },
        }}
        className={`inline-flex flex-wrap ${className}`}
        aria-label={text}
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block overflow-hidden mr-[0.28em] pb-1">
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: '100%', opacity: 0, filter: 'blur(4px)' },
                visible: {
                  y: '0%',
                  opacity: 1,
                  filter: 'blur(0px)',
                  transition: { duration, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    );
  }

  // Chars
  const chars = Array.from(text);
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger * 0.4,
            delayChildren: delay,
          },
        },
      }}
      className={`inline-flex flex-wrap ${className}`}
      aria-label={text}
    >
      {chars.map((char, charIndex) => (
        <span key={charIndex} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: '0%',
                opacity: 1,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
