'use client';

import React from 'react';

interface RollingButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'dark' | 'sage' | 'outline' | 'light';
}

export function RollingButton({
  children,
  onClick,
  className = '',
  type = 'button',
  variant = 'dark',
}: RollingButtonProps) {
  let baseStyles =
    'relative inline-flex items-center justify-center overflow-hidden rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300';

  if (variant === 'dark') {
    baseStyles += ' bg-[#1E2522] text-[#F9F7F2] px-8 py-4';
  } else if (variant === 'sage') {
    baseStyles += ' bg-[#4A5844] text-[#F9F7F2] px-7 py-3.5';
  } else if (variant === 'light') {
    baseStyles += ' bg-[#F9F7F2] text-[#1E2522] px-7 py-3.5';
  } else if (variant === 'outline') {
    baseStyles += ' border border-current px-7 py-3.5 transition-colors duration-500';
  }

  const textString = typeof children === 'string' ? children : null;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group ${baseStyles} ${className}`}
    >
      {textString ? (
        <span className="relative z-10 inline-flex overflow-hidden py-0.5">
          <span className="sr-only">{textString}</span>
          <span aria-hidden="true" className="inline-flex">
            {textString.split('').map((char, i) => (
              <span
                key={i}
                className="relative inline-block overflow-hidden"
              >
                <span
                  className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
                  style={{ transitionDelay: `${i * 18}ms` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
                <span
                  className="absolute inset-0 inline-block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
                  style={{ transitionDelay: `${i * 18}ms` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              </span>
            ))}
          </span>
        </span>
      ) : (
        <>
          <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
            {children}
          </span>
          <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 whitespace-nowrap translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
            {children}
          </span>
        </>
      )}
    </button>
  );
}
