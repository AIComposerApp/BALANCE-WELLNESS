'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

interface WaterRippleTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'span' | 'div';
  letterSpacing?: string;
  delay?: number;
  interactiveRipple?: boolean;
  onHoverRipple?: boolean;
}

export function WaterRippleText({
  text,
  className = '',
  letterSpacing = '0.18em',
  delay = 0.2,
  interactiveRipple = true,
}: WaterRippleTextProps) {
  const characters = Array.from(text);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [rippleWave, setRippleWave] = useState<{ origin: number; id: number } | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const [offsets, setOffsets] = useState<number[]>(() => new Array(characters.length).fill(0));

  // Handle water ripple wave simulation across letters
  useEffect(() => {
    if (!rippleWave) return;

    let startTime: number | null = null;
    const duration = 1200; // ms for wave propagation & settle
    const origin = rippleWave.origin;
    const totalChars = characters.length;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      if (elapsed > duration) {
        setOffsets(new Array(totalChars).fill(0));
        setRippleWave(null);
        return;
      }

      const progress = elapsed / duration;
      const decay = Math.exp(-progress * 4.5); // Exponential damping like water friction
      const waveSpeed = 0.018; // speed of ripple propagation per character

      const newOffsets = characters.map((_, i) => {
        const dist = Math.abs(i - origin);
        const delayForChar = dist * 45; // ms wave travel delay
        const charElapsed = Math.max(0, elapsed - delayForChar);
        if (charElapsed <= 0) return 0;

        // Damped sine wave: vertical offset in px
        const wave = Math.sin(charElapsed * waveSpeed) * decay * 14;
        return wave;
      });

      setOffsets(newOffsets);
      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [rippleWave, characters]);

  const triggerRippleAt = (index: number) => {
    if (!interactiveRipple) return;
    setRippleWave((prev) => ({ origin: index, id: (prev?.id ?? 0) + 1 }));
  };

  return (
    <span
      className={`inline-flex whitespace-nowrap flex-nowrap justify-center relative select-none ${className}`}
      style={{ letterSpacing }}
      aria-label={text}
      role="text"
    >
      {characters.map((char, index) => {
        const isSpace = char === ' ';
        const waveOffset = offsets[index] || 0;
        const isHovered = interactiveRipple && hoveredIndex === index;

        return (
          <motion.span
            key={index}
            className={`inline-block relative ${interactiveRipple ? 'cursor-pointer' : 'cursor-default'}`}
            aria-hidden="true"
            initial={{
              opacity: 0,
              y: 40,
              filter: 'blur(10px)',
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              scale: 1,
            }}
            transition={{
              duration: 1.1,
              delay: delay + index * 0.08,
              ease: [0.16, 1, 0.3, 1], // Smooth organic deceleration
            }}
            onMouseEnter={() => {
              if (interactiveRipple) {
                setHoveredIndex(index);
                triggerRippleAt(index);
              }
            }}
            onMouseLeave={() => {
              if (interactiveRipple) setHoveredIndex(null);
            }}
            onClick={() => {
              if (interactiveRipple) triggerRippleAt(index);
            }}
            style={{
              transform: interactiveRipple ? `translateY(${-waveOffset}px)` : 'none',
              transition: rippleWave ? 'none' : 'transform 0.3s ease-out',
            }}
          >
            {isSpace ? (
              <span className="inline-block w-4">&nbsp;</span>
            ) : (
              <motion.span
                className="inline-block"
                animate={{
                  scale: isHovered ? 1.08 : 1,
                  color: isHovered ? '#3E4D3E' : 'inherit',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {char}
              </motion.span>
            )}

            {/* Micro subtle water reflection highlight underneath on hover */}
            {isHovered && !isSpace && (
              <motion.span
                layoutId="rippleGlow"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-[#3E4D3E]/40 blur-[1px]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </motion.span>
        );
      })}
    </span>
  );
}
