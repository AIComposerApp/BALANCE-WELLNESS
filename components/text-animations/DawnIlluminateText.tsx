'use client';

import React from 'react';
import { motion } from 'motion/react';

interface DawnIlluminateTextProps {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function DawnIlluminateText({
  text,
  className = '',
  stagger = 0.025,
  delay = 0.15,
}: DawnIlluminateTextProps) {
  const words = text.split(' ');

  return (
    <p className={`leading-relaxed ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.28em] transition-colors duration-200 hover:text-[#3E4D3E]"
          initial={{
            opacity: 0.15,
            y: 6,
            filter: 'blur(2px)',
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          viewport={{ once: true, amount: 'some', margin: '0px' }}
          transition={{
            duration: 0.7,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
