'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

const ZEN_GLYPHS = ['·', '◦', '∘', '✦', '✧', '∿', '—', '◇', '⎈', '☼', '·', '≈', '𖡼'];

interface ZenGlyphTextProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  triggerOnMount?: boolean;
  speed?: number; // ms per step
  delay?: number;
}

export function ZenGlyphText({
  text,
  className = '',
  triggerOnHover = true,
  triggerOnMount = true,
  speed = 45,
  delay = 100,
}: ZenGlyphTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    const length = text.length;
    let iteration = 0;
    const maxIterations = length * 3;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 3) {
              return text[index];
            }
            return ZEN_GLYPHS[Math.floor(Math.random() * ZEN_GLYPHS.length)];
          })
          .join('');
      });

      iteration++;

      if (iteration >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, speed);
  }, [isAnimating, text, speed]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (triggerOnMount) {
      timer = setTimeout(() => {
        startScramble();
      }, delay);
    }
    return () => {
      if (timer) clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [triggerOnMount, delay, startScramble]);

  return (
    <span
      className={`inline-block select-none cursor-default font-mono-transitional ${className}`}
      onMouseEnter={() => {
        if (triggerOnHover && !isAnimating) {
          startScramble();
        }
      }}
      title={text}
    >
      {displayText}
    </span>
  );
}
