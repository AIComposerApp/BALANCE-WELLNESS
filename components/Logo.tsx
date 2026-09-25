'use client';

import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'monochrome';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showTagline?: boolean;
  monogramOnly?: boolean;
  className?: string;
}

export function Logo({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  monogramOnly = false,
  className = '',
}: LogoProps) {
  const isDark = variant === 'dark';
  const primaryColor = isDark ? '#1E2522' : '#F9F7F2';
  const secondaryColor = isDark ? '#3E4D3E' : '#A3B09D';
  const leafColor = isDark ? '#4A5844' : '#D4CEBF';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    hero: 'w-16 h-16',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Monogram: Roman Serif B with Organic Sprout Motif */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Roman Serif B Anatomy */}
          <path
            d="M26 18H52C63 18 70 24 70 34C70 42 64 47 55 49C66 51 73 57 73 67C73 78 64 84 51 84H26V18Z"
            stroke={primaryColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-300"
          />
          {/* Serif Footers */}
          <path
            d="M20 18H36M20 84H36"
            stroke={primaryColor}
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Inner Counter Junction */}
          <path
            d="M32 49H54"
            stroke={primaryColor}
            strokeWidth="4"
          />
          {/* Botanical Tendril Sprouting Through Counter */}
          <path
            d="M36 76C42 66 48 54 44 42C41 33 34 28 32 24"
            stroke={leafColor}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Leaf 1 */}
          <path
            d="M44 42C51 40 58 43 56 49C50 51 45 47 44 42Z"
            fill={leafColor}
            opacity="0.9"
          />
          {/* Leaf 2 (Upper bud) */}
          <path
            d="M38 32C42 27 48 27 49 32C45 35 40 35 38 32Z"
            fill={secondaryColor}
            opacity="0.85"
          />
        </svg>
      </div>

      {!monogramOnly && (
        <div className="flex flex-col tracking-wider leading-none">
          <span
            className={`font-sans font-bold uppercase tracking-[0.22em] transition-colors duration-500 ${
              size === 'sm' ? 'text-[10px]' : size === 'lg' ? 'text-xs' : 'text-[11px]'
            }`}
            style={{ color: primaryColor }}
          >
            WELLNESS
          </span>
          {showTagline && (
            <span
              className={`font-sans font-medium uppercase tracking-[0.24em] mt-0.5 transition-colors duration-500 ${
                size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-[11px]' : 'text-[10px]'
              }`}
              style={{ color: secondaryColor }}
            >
              COACH
            </span>
          )}
        </div>
      )}
    </div>
  );
}
