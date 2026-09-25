'use client';

import React from 'react';
import { LiveBrandExperience } from '@/components/LiveBrandExperience';

interface ClientAppProps {
  markdownContent?: string;
}

export default function ClientApp({ markdownContent }: ClientAppProps) {
  return (
    <div className="relative min-h-screen bg-[#F9F7F2]">
      <LiveBrandExperience />
    </div>
  );
}

