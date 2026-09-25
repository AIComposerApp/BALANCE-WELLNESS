'use client';

import React from 'react';
import { motion } from 'motion/react';

interface CircularOrbitTextProps {
  text?: string;
  size?: number;
  duration?: number;
  className?: string;
  centerIcon?: React.ReactNode;
}

export function CircularOrbitText({
  text = '· BALANCE WELLNESS COACH · MIND · BODY · SOUL ·',
  size = 130,
  duration = 24,
  className = '',
  centerIcon,
}: CircularOrbitTextProps) {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.div
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
        }}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <path
              id="orbit-text-path"
              d={`M 60,60 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            />
          </defs>

          {/* Micro subtle guide orbit ring */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="2 3"
            opacity="0.25"
          />

          <text className="text-[8.5px] font-sans font-semibold uppercase tracking-[0.24em] fill-current">
            <textPath href="#orbit-text-path" startOffset="0%" textLength={circumference * 0.95}>
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Optional center emblem */}
      {centerIcon && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {centerIcon}
        </div>
      )}
    </div>
  );
}
