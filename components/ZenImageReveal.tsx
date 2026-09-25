'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';

interface ZenImageRevealProps {
  src: string;
  alt: string;
  aspectRatio?: string; // e.g., 'aspect-[4/3]' or custom height
  className?: string;
  imageClassName?: string;
  delay?: number;
  children?: React.ReactNode;
  onClick?: () => void;
  priority?: boolean;
}

export function ZenImageReveal({
  src,
  alt,
  className = '',
  imageClassName = '',
  delay = 0,
  children,
  onClick,
  priority = false,
}: ZenImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className={`relative overflow-hidden group select-none ${className}`}
    >
      {/* Golden Zen Focal Guide Line - Expands horizontally across center first */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={
          isInView
            ? {
                scaleX: [0, 1, 1, 0],
                opacity: [0, 0.9, 0.9, 0],
              }
            : { scaleX: 0, opacity: 0 }
        }
        transition={{
          duration: 1.1,
          delay: delay,
          times: [0, 0.35, 0.7, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#C59B58] to-transparent z-30 pointer-events-none"
      />

      {/* Main Image Mask Container - Dual-phase horizontal line to vertical unclip */}
      <motion.div
        initial={{
          clipPath: 'inset(49.5% 0% 49.5% 0%)',
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                clipPath: [
                  'inset(49.5% 0% 49.5% 0%)',
                  'inset(49% 0% 49% 0%)',
                  'inset(0% 0% 0% 0%)',
                ],
                opacity: [0, 1, 1],
              }
            : {
                clipPath: 'inset(49.5% 0% 49.5% 0%)',
                opacity: 0,
              }
        }
        transition={{
          duration: 1.0,
          delay: delay,
          times: [0, 0.3, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
        className="relative w-full h-full"
      >
        {/* Inner Image with Gentle Focus De-zoom */}
        <motion.div
          initial={{ scale: 1.15, filter: 'blur(3px) brightness(0.92)' }}
          animate={
            isInView
              ? { scale: 1, filter: 'blur(0px) brightness(1)' }
              : { scale: 1.15, filter: 'blur(3px) brightness(0.92)' }
          }
          transition={{
            duration: 1.2,
            delay: delay + 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full h-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={`object-cover object-center ${imageClassName}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Delicate Golden Corner Accents on reveal completion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.8 }}
          className="absolute inset-0 pointer-events-none z-20"
        >
          <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-[#C59B58]/40" />
          <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-[#C59B58]/40" />
          <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-[#C59B58]/40" />
          <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-[#C59B58]/40" />
        </motion.div>

        {/* Children Overlay (e.g. text overlay, gradients, badges) */}
        {children}
      </motion.div>
    </div>
  );
}
