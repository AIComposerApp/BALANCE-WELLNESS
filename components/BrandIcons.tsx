'use client';

import React from 'react';

// Zen Cairns / Stacked Stones (Mindfulness) - High Precision Dual Tone
export function ZenStonesIcon({ className = 'w-6 h-6', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      {/* Top Stone */}
      <ellipse cx="12" cy="5.5" rx="3.5" ry="2.2" fill="none" stroke={color} strokeWidth="1.6" />
      <path d="M11 5.5C11.5 5.2 12.5 5.2 13 5.5" stroke="#C59B58" strokeWidth="1.2" strokeLinecap="round" />
      {/* Middle Stone */}
      <ellipse cx="12" cy="11.5" rx="5.8" ry="2.8" fill="none" stroke={color} strokeWidth="1.6" />
      <path d="M9.5 11.5C11 11 13 11 14.5 11.5" stroke="#C59B58" strokeWidth="1.2" strokeLinecap="round" />
      {/* Bottom Base Stone */}
      <ellipse cx="12" cy="18" rx="8.5" ry="3.5" fill="none" stroke={color} strokeWidth="1.6" />
      <path d="M8 18C10.5 17.2 13.5 17.2 16 18" stroke="#C59B58" strokeWidth="1.2" strokeLinecap="round" />
      {/* Subtle Aura Halo Dot */}
      <circle cx="12" cy="2" r="1" fill="#C59B58" />
    </svg>
  );
}

// Nutrition Apple / Whole Botanical (Nutrition Guidance)
export function NutritionIcon({ className = 'w-6 h-6', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      {/* Stem & Leaves */}
      <path d="M12 3.5C12.5 5.5 14.2 6.5 16.5 6" stroke="#C59B58" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 5.5C10.5 3.5 7.5 4.5 7.5 4.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {/* Body */}
      <path d="M12 8C9.5 5.5 4.5 6.2 4.5 12C4.5 17.8 8.8 20.8 12 20.8C15.2 20.8 19.5 17.8 19.5 12C19.5 6.2 14.5 5.5 12 8Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      {/* Inner Vitality Seed Arc */}
      <path d="M12 11C11.2 12.2 11.2 14.2 12 15.5" stroke="#C59B58" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// Lotus Flower (Movement & Wellness)
export function LotusIcon({ className = 'w-6 h-6', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      {/* Central Flame Petal */}
      <path d="M12 3.5C9.8 8 9.8 15.2 12 19.5C14.2 15.2 14.2 8 12 3.5Z" stroke="#C59B58" strokeWidth="1.6" strokeLinecap="round" />
      {/* Left Wing Petals */}
      <path d="M10.8 11C7.5 8.8 3.2 12 3.2 15.2C4.2 18.5 9.8 18.5 11.5 19" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {/* Right Wing Petals */}
      <path d="M13.2 11C16.5 8.8 20.8 12 20.8 15.2C19.8 18.5 14.2 18.5 12.5 19" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {/* Ripple Base */}
      <path d="M6.5 20C10 21.5 14 21.5 17.5 20" stroke="#C59B58" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// Botanical Leaf / Quill (Wellness Journaling)
export function JournalLeafIcon({ className = 'w-6 h-6', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      {/* Leaf outline */}
      <path d="M20 3.5C14.5 3.5 5.5 8 5.5 15.5C5.5 19.8 9 20.8 12.5 20.8C18 20.8 20 13.5 20 3.5Z" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {/* Central spine */}
      <path d="M5.5 20.8C9.8 16.5 14.2 12 19 4.8" stroke="#C59B58" strokeWidth="1.6" strokeLinecap="round" />
      {/* Veins */}
      <path d="M11 15L14.2 17.2" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14 11.8L17.5 13.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// Holistic Sprout / Triple Leaf (About Pillar 1)
export function HolisticSproutIcon({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 21.5V10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 10C12 5.5 6.5 4.5 6.5 4.5C6.5 9 10 10 12 10Z" fill="none" stroke="#C59B58" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 10C12 5.5 17.5 4.5 17.5 4.5C17.5 9 14 10 12 10Z" fill="none" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 6C12 3 9.8 2 9.8 2C9.8 4.2 11 5.2 12 6Z" fill="#C59B58" />
    </svg>
  );
}

// Mindful User Silhouette (About Pillar 2)
export function MindfulGuideIcon({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="7" r="3.8" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="7" r="1.5" fill="#C59B58" />
      <path d="M4.8 19.5C4.8 15.8 8 13.5 12 13.5C16 13.5 19.2 15.8 19.2 19.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 2V1" stroke="#C59B58" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

// Transformation Heart in Circle (About Pillar 3)
export function LastingTransformIcon({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 20.8C12 20.8 4 14.5 4 9.2C4 6 6.8 3.8 9.5 3.8C11.2 3.8 12 4.8 12 4.8C12 4.8 12.8 3.8 14.5 3.8C17.2 3.8 20 6 20 9.2C20 14.5 12 20.8 12 20.8Z" stroke="#C59B58" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="10.2" stroke={color} strokeWidth="1.4" strokeDasharray="3 3" opacity="0.6" />
    </svg>
  );
}

