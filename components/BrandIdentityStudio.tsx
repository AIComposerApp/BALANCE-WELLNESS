'use client';

import React, { useState } from 'react';
import { Logo } from './Logo';
import {
  ZenStonesIcon,
  NutritionIcon,
  LotusIcon,
  JournalLeafIcon,
  HolisticSproutIcon,
  MindfulGuideIcon,
  LastingTransformIcon,
} from './BrandIcons';
import {
  Copy,
  Check,
  Download,
  Palette,
  Type,
  Maximize2,
  Compass,
  Layers,
  Sparkles,
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
  Eye,
  Sliders,
  RotateCcw,
  Play,
} from 'lucide-react';
import {
  WaterRippleText,
  SplitRevealText,
  ZenGlyphText,
  DawnIlluminateText,
  BreathingText,
  CircularOrbitText,
  MorphingAffirmation,
} from './text-animations';

interface ColorSwatch {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  hsl: string;
  cmyk: string;
  textColor: 'light' | 'dark';
  wcagVsWhite: string;
  wcagVsDark: string;
}

const BRAND_PALETTE: ColorSwatch[] = [
  {
    name: 'Forest Obsidian',
    role: 'Primary text, dark CTA buttons, deep footer canvas',
    hex: '#1E2522',
    rgb: '30, 37, 34',
    hsl: '154°, 10%, 13%',
    cmyk: '19, 0, 8, 85',
    textColor: 'light',
    wcagVsWhite: '14.8:1 (AAA)',
    wcagVsDark: '1.2:1 (Fail)',
  },
  {
    name: 'Midnight Forest',
    role: 'Atmospheric quote backdrop, contrast zones',
    hex: '#141916',
    rgb: '20, 25, 22',
    hsl: '144°, 11%, 9%',
    cmyk: '20, 0, 12, 90',
    textColor: 'light',
    wcagVsWhite: '17.4:1 (AAA)',
    wcagVsDark: '1.0:1 (Fail)',
  },
  {
    name: 'Botanical Moss',
    role: 'Floating service badges, active hover states, accent',
    hex: '#3E4D3E',
    rgb: '62, 77, 62',
    hsl: '120°, 11%, 27%',
    cmyk: '20, 0, 20, 70',
    textColor: 'light',
    wcagVsWhite: '6.4:1 (AA)',
    wcagVsDark: '2.3:1 (Fail)',
  },
  {
    name: 'Evergreen Canopy',
    role: 'Newsletter submit CTA, secondary botanicals',
    hex: '#4A5844',
    rgb: '74, 88, 68',
    hsl: '102°, 13%, 31%',
    cmyk: '16, 0, 23, 65',
    textColor: 'light',
    wcagVsWhite: '5.2:1 (AA)',
    wcagVsDark: '2.8:1 (Fail)',
  },
  {
    name: 'Mountain Sage',
    role: 'Muted metadata, category chips, subtle dividers',
    hex: '#7E8C78',
    rgb: '126, 140, 120',
    hsl: '102°, 8%, 51%',
    cmyk: '10, 0, 14, 45',
    textColor: 'dark',
    wcagVsWhite: '2.6:1 (Fail)',
    wcagVsDark: '5.7:1 (AA)',
  },
  {
    name: 'Morning Mist',
    role: 'Subtle overlays, hover tints, secondary fills',
    hex: '#A3B09D',
    rgb: '163, 176, 157',
    hsl: '101°, 12%, 65%',
    cmyk: '7, 0, 11, 31',
    textColor: 'dark',
    wcagVsWhite: '1.7:1 (Fail)',
    wcagVsDark: '8.7:1 (AAA)',
  },
  {
    name: 'Warm Alabaster',
    role: 'Primary canvas background, warm organic base',
    hex: '#F9F7F2',
    rgb: '249, 247, 242',
    hsl: '43°, 37%, 96%',
    cmyk: '0, 1, 3, 2',
    textColor: 'dark',
    wcagVsWhite: '1.05:1 (Fail)',
    wcagVsDark: '13.2:1 (AAA)',
  },
  {
    name: 'Parchment Linen',
    role: 'Card background fill, search input background',
    hex: '#F2EEE5',
    rgb: '242, 238, 229',
    hsl: '42°, 31%, 92%',
    cmyk: '0, 2, 5, 5',
    textColor: 'dark',
    wcagVsWhite: '1.1:1 (Fail)',
    wcagVsDark: '12.4:1 (AAA)',
  },
  {
    name: 'River Stone',
    role: 'Hairline borders, dividers, subtle outlines',
    hex: '#E4DFD3',
    rgb: '228, 223, 211',
    hsl: '42°, 25%, 86%',
    cmyk: '0, 2, 8, 11',
    textColor: 'dark',
    wcagVsWhite: '1.3:1 (Fail)',
    wcagVsDark: '10.8:1 (AAA)',
  },
  {
    name: 'Chamomile Gold',
    role: 'Warm highlight accent, golden hour glow, tea notes',
    hex: '#C59B58',
    rgb: '197, 155, 88',
    hsl: '37°, 49%, 56%',
    cmyk: '0, 21, 55, 23',
    textColor: 'dark',
    wcagVsWhite: '2.4:1 (Fail)',
    wcagVsDark: '6.2:1 (AA)',
  },
];

export function BrandIdentityStudio({ markdownContent }: { markdownContent: string }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'logo' | 'color' | 'typography' | 'motion' | 'components' | 'markdown'>('overview');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [showClearspaceGrid, setShowClearspaceGrid] = useState(true);
  const [customText, setCustomText] = useState('Holistic guidance for mind, body & soul.');
  const [typeScale, setTypeScale] = useState(1);
  const [motionPlayKey, setMotionPlayKey] = useState(0);
  const [waterRippleInput, setWaterRippleInput] = useState('BALANCE');
  const [splitByMode, setSplitByMode] = useState<'lines' | 'words' | 'chars'>('words');

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2500);
  };

  const handleDownloadMarkdown = () => {
    const element = document.createElement('a');
    const file = new Blob([markdownContent], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = 'design.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="w-full bg-[#F9F7F2] text-[#1E2522] min-h-screen">
      {/* Studio Header */}
      <header className="border-b border-[#E4DFD3] bg-[#F2EEE5]/80 backdrop-blur-md sticky top-12 z-30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3E4D3E] flex items-center justify-center text-white font-serif text-xl">
              B
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl font-medium tracking-tight">Balance Brand Identity System</h1>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] px-2 py-0.5 rounded-full bg-[#3E4D3E]/15 text-[#3E4D3E]">
                  Awwwards SOTD Spec
                </span>
              </div>
              <p className="text-xs text-[#7E8C78]">
                Official Brand Guidelines, Design Tokens & Component Physics (v1.0.0)
              </p>
            </div>
          </div>

          {/* Sub Navigation */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#E4DFD3]/40 p-1 rounded-xl">
            {[
              { id: 'overview', label: 'DNA & Strategy', icon: Compass },
              { id: 'logo', label: 'Logo Architecture', icon: Maximize2 },
              { id: 'color', label: 'Color System', icon: Palette },
              { id: 'typography', label: 'Typography', icon: Type },
              { id: 'motion', label: 'Text Motion', icon: Sparkles },
              { id: 'components', label: 'UI Components', icon: Layers },
              { id: 'markdown', label: 'design.md File', icon: BookOpen },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#1E2522] text-[#F9F7F2] shadow-sm'
                      : 'text-[#4A5844] hover:text-[#1E2522] hover:bg-white/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* 1. OVERVIEW & STRATEGY */}
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Hero Summary */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E4DFD3] shadow-sm relative overflow-hidden">
              <div className="max-w-3xl space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#3E4D3E]">
                  Brand Genesis & Vision
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[#1E2522] leading-tight">
                  A sanctuary of equilibrium in a distracted world.
                </h2>
                <p className="text-base md:text-lg text-[#4A5844] leading-relaxed">
                  Balance Wellness Coach is designed at the intersection of Japanese Zen minimalism (Wabi-Sabi),
                  organic biophilia, and classical editorial craft. It bridges grounded physical habits with mental stillness
                  and soulful renewal.
                </p>
              </div>

              {/* Archetype Badges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#E4DFD3]/60">
                <div className="space-y-2 p-5 rounded-2xl bg-[#F9F7F2] border border-[#E4DFD3]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3E4D3E]" />
                    <h3 className="font-serif text-lg font-semibold text-[#1E2522]">The Sage (60%)</h3>
                  </div>
                  <p className="text-xs text-[#4A5844] leading-relaxed">
                    Contemplative wisdom, scientific mindfulness, calm presence, evidence-informed guidance.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-2xl bg-[#F9F7F2] border border-[#E4DFD3]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7E8C78]" />
                    <h3 className="font-serif text-lg font-semibold text-[#1E2522]">The Caregiver (30%)</h3>
                  </div>
                  <p className="text-xs text-[#4A5844] leading-relaxed">
                    Unconditional empathy, emotional safety, personalized nourishment, and gentle accountability.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-2xl bg-[#F9F7F2] border border-[#E4DFD3]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C59B58]" />
                    <h3 className="font-serif text-lg font-semibold text-[#1E2522]">The Alchemist (10%)</h3>
                  </div>
                  <p className="text-xs text-[#4A5844] leading-relaxed">
                    Transforming daily friction and chronic stress into lasting, harmonious life equilibrium.
                  </p>
                </div>
              </div>
            </div>

            {/* Tone of Voice Spectrum */}
            <div className="bg-white rounded-3xl p-8 border border-[#E4DFD3] space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3E4D3E]">Voice Spectrum</span>
                  <h3 className="font-serif text-2xl text-[#1E2522]">How Balance Speaks</h3>
                </div>
                <span className="text-xs text-[#7E8C78] bg-[#F2EEE5] px-3 py-1 rounded-full">
                  Editorial & Poetic Grounding
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-[#F9F7F2] border border-[#E4DFD3] space-y-3">
                  <div className="flex items-center gap-2 text-[#3E4D3E] font-medium text-sm">
                    <Check className="w-4 h-4" />
                    <span>What Balance Sounds Like</span>
                  </div>
                  <ul className="text-xs space-y-2 text-[#4A5844]">
                    <li>• <strong>Poetic Conciseness:</strong> Short, rhythmic tricolons (&ldquo;Live Better. Feel Deeper. Be Your Best.&rdquo;).</li>
                    <li>• <strong>Sensory Realism:</strong> Grounded in tactile nature (&ldquo;cool river stones&rdquo;, &ldquo;warm chamomile&rdquo;, &ldquo;morning forest canopy&rdquo;).</li>
                    <li>• <strong>Gentle Invitation:</strong> &ldquo;Begin your journey&rdquo;, &ldquo;Explore guidance&rdquo;, &ldquo;Return to stillness&rdquo;.</li>
                    <li>• <strong>Wholeness:</strong> Mind, body, and soul addressed simultaneously.</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-[#F9F7F2] border border-[#E4DFD3] space-y-3">
                  <div className="flex items-center gap-2 text-rose-700 font-medium text-sm">
                    <span className="w-4 h-4 rounded-full border border-rose-600 flex items-center justify-center text-xs">✕</span>
                    <span>What Balance Never Says</span>
                  </div>
                  <ul className="text-xs space-y-2 text-[#7E8C78]">
                    <li>• ❌ Fitness hustle clichés: &ldquo;Crush your workouts&rdquo;, &ldquo;Beast mode&rdquo;, &ldquo;No excuses&rdquo;.</li>
                    <li>• ❌ Silicon Valley tech jargon: &ldquo;Hack your sleep&rdquo;, &ldquo;Optimize calorie throughput&rdquo;, &ldquo;Disrupt stress&rdquo;.</li>
                    <li>• ❌ Artificial guilt marketing: &ldquo;Don&apos;t let yourself slip&rdquo;, &ldquo;Fix your broken diet&rdquo;.</li>
                    <li>• ❌ Vague mystical escapism without practical daily routine roots.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. LOGO ARCHITECTURE */}
        {activeTab === 'logo' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Logo Anatomy Playground */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E4DFD3] space-y-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3E4D3E]">
                    Brandmark Geometry
                  </span>
                  <h2 className="font-serif text-3xl text-[#1E2522]">The Botanical Monogram & Logotype</h2>
                </div>
                <button
                  onClick={() => setShowClearspaceGrid(!showClearspaceGrid)}
                  className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-[#E4DFD3] bg-[#F9F7F2] text-[#1E2522] hover:bg-[#E4DFD3] transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  {showClearspaceGrid ? 'Hide Clearspace Guides' : 'Show Clearspace Guides'}
                </button>
              </div>

              {/* Visual Display Stage */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Light Stage */}
                <div
                  className={`relative p-12 rounded-2xl bg-[#F9F7F2] border border-[#E4DFD3] flex flex-col items-center justify-center min-h-[300px] overflow-hidden ${
                    showClearspaceGrid ? 'bg-[radial-gradient(#E4DFD3_1px,transparent_1px)] [background-size:16px_16px]' : ''
                  }`}
                >
                  {showClearspaceGrid && (
                    <div className="absolute inset-8 border border-dashed border-[#3E4D3E]/40 pointer-events-none rounded-xl flex items-center justify-center">
                      <span className="absolute top-2 right-3 text-[10px] font-mono text-[#3E4D3E]/70">
                        1.5X Clearspace
                      </span>
                    </div>
                  )}
                  <Logo variant="dark" size="hero" showTagline={true} />
                  <span className="mt-6 text-xs text-[#7E8C78] font-mono">Primary Light Lockup (Canvas #F9F7F2)</span>
                </div>

                {/* Dark Stage */}
                <div
                  className={`relative p-12 rounded-2xl bg-[#1E2522] border border-stone-800 flex flex-col items-center justify-center min-h-[300px] overflow-hidden ${
                    showClearspaceGrid ? 'bg-[radial-gradient(#3E4D3E_1px,transparent_1px)] [background-size:16px_16px]' : ''
                  }`}
                >
                  {showClearspaceGrid && (
                    <div className="absolute inset-8 border border-dashed border-[#A3B09D]/40 pointer-events-none rounded-xl flex items-center justify-center">
                      <span className="absolute top-2 right-3 text-[10px] font-mono text-[#A3B09D]/70">
                        1.5X Clearspace
                      </span>
                    </div>
                  )}
                  <Logo variant="light" size="hero" showTagline={true} />
                  <span className="mt-6 text-xs text-[#A3B09D] font-mono">Dark Inverted Lockup (Obsidian #1E2522)</span>
                </div>
              </div>

              {/* Anatomy Callouts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#E4DFD3]">
                <div className="space-y-2">
                  <h4 className="font-serif text-base font-semibold text-[#1E2522]">1. Roman Serif Proportions</h4>
                  <p className="text-xs text-[#4A5844] leading-relaxed">
                    The uppercase &apos;B&apos; is anchored with classical bracketed serifs, invoking historical authority, balance, and human permanence.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-base font-semibold text-[#1E2522]">2. Organic Botanical Sprout</h4>
                  <p className="text-xs text-[#4A5844] leading-relaxed">
                    A tender botanical shoot rises gracefully from the waist of the letterform through the counter, symbolizing continuous personal growth.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-base font-semibold text-[#1E2522]">3. Lapidary Logotype</h4>
                  <p className="text-xs text-[#4A5844] leading-relaxed">
                    &ldquo;BALANCE&rdquo; is set in high-contrast all-caps with generous +0.18em tracking, establishing an unhurried, luxurious visual posture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. COLOR SYSTEM */}
        {activeTab === 'color' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E4DFD3] space-y-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3E4D3E]">
                    Sensory Chromatics
                  </span>
                  <h2 className="font-serif text-3xl text-[#1E2522]">The Japanese Garden Palette</h2>
                  <p className="text-sm text-[#4A5844] mt-1">
                    Click any swatch below to instantly copy its Hex color code.
                  </p>
                </div>
                {copiedHex && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3E4D3E] text-white text-xs animate-bounce">
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied {copiedHex} to clipboard!</span>
                  </div>
                )}
              </div>

              {/* Swatches Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {BRAND_PALETTE.map((c) => (
                  <div
                    key={c.hex}
                    onClick={() => handleCopyHex(c.hex)}
                    className="group cursor-pointer rounded-2xl overflow-hidden border border-[#E4DFD3] transition-colors bg-white flex flex-col"
                  >
                    {/* Color Preview Block */}
                    <div
                      className="h-32 w-full p-3 flex flex-col justify-between"
                      style={{ backgroundColor: c.hex }}
                    >
                      <div className="flex justify-end">
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full backdrop-blur-md ${
                            c.textColor === 'light' ? 'bg-black/25 text-white' : 'bg-white/40 text-black'
                          }`}
                        >
                          {c.hex}
                        </span>
                      </div>
                      <Copy
                        className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                          c.textColor === 'light' ? 'text-white' : 'text-stone-900'
                        }`}
                      />
                    </div>

                    {/* Meta info */}
                    <div className="p-4 space-y-2 grow flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif font-semibold text-base text-[#1E2522]">{c.name}</h4>
                        <p className="text-[11px] text-[#4A5844] line-clamp-2 mt-0.5">{c.role}</p>
                      </div>

                      <div className="pt-3 border-t border-[#E4DFD3]/60 space-y-1 text-[10px] font-mono text-[#7E8C78]">
                        <div className="flex justify-between">
                          <span>RGB:</span>
                          <span>{c.rgb}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>WCAG:</span>
                          <span className="text-[#3E4D3E] font-semibold">{c.wcagVsWhite.split(' ')[1]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. TYPOGRAPHY */}
        {activeTab === 'typography' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E4DFD3] space-y-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3E4D3E]">
                    Typographic Scale & Hierarchy
                  </span>
                  <h2 className="font-serif text-3xl text-[#1E2522]">Serif Poetics + Humanist Clarity</h2>
                </div>

                {/* Text scale slider */}
                <div className="flex items-center gap-3 bg-[#F9F7F2] p-2 rounded-2xl border border-[#E4DFD3]">
                  <Sliders className="w-4 h-4 text-[#7E8C78]" />
                  <span className="text-xs text-[#4A5844] font-medium">Size Scale:</span>
                  <input
                    type="range"
                    min="0.8"
                    max="1.3"
                    step="0.05"
                    value={typeScale}
                    onChange={(e) => setTypeScale(parseFloat(e.target.value))}
                    className="w-24 accent-[#3E4D3E]"
                  />
                  <span className="text-xs font-mono text-[#7E8C78] w-8">{Math.round(typeScale * 100)}%</span>
                </div>
              </div>

              {/* Interactive Text Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#7E8C78]">
                  Test Custom Headline / Narrative:
                </label>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E4DFD3] bg-[#F9F7F2] text-sm focus:outline-none focus:border-[#3E4D3E]"
                  placeholder="Type custom text to preview font behavior..."
                />
              </div>

              {/* Hierarchy Display Rows */}
              <div className="space-y-6 divide-y divide-[#E4DFD3]">
                {/* Hero H1 */}
                <div className="pt-6 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#7E8C78] font-mono">
                    <span>HERO DISPLAY (H1) • Cormorant Garamond Regular • Tracking +0.18em</span>
                    <span>80px / 5.0rem</span>
                  </div>
                  <h1
                    className="font-serif uppercase font-normal text-[#1E2522] tracking-[0.18em] leading-[1.05]"
                    style={{ fontSize: `${4.5 * typeScale}rem` }}
                  >
                    BALANCE
                  </h1>
                </div>

                {/* Editorial H2 */}
                <div className="pt-6 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#7E8C78] font-mono">
                    <span>EDITORIAL STATEMENT (H2) • Cormorant Garamond Regular</span>
                    <span>48px / 3.0rem</span>
                  </div>
                  <h2
                    className="font-serif font-normal text-[#1E2522] leading-[1.15]"
                    style={{ fontSize: `${2.8 * typeScale}rem` }}
                  >
                    {customText}
                  </h2>
                </div>

                {/* Section H2 */}
                <div className="pt-6 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#7E8C78] font-mono">
                    <span>SECTION HEADING • Cormorant Garamond Medium</span>
                    <span>36px / 2.25rem</span>
                  </div>
                  <h3
                    className="font-serif font-medium text-[#1E2522] leading-[1.2]"
                    style={{ fontSize: `${2.2 * typeScale}rem` }}
                  >
                    Support for Every Step
                  </h3>
                </div>

                {/* Category Eyebrow */}
                <div className="pt-6 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#7E8C78] font-mono">
                    <span>CATEGORY EYEBROW CHIP • Plus Jakarta Sans Bold • Tracking +0.22em</span>
                    <span>11px / 0.6875rem</span>
                  </div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-[#3E4D3E]">
                    WELCOME TO BALANCE • OUR SERVICES • FROM THE JOURNAL
                  </span>
                </div>

                {/* Body Text */}
                <div className="pt-6 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#7E8C78] font-mono">
                    <span>BODY NARRATIVE • Plus Jakarta Sans Regular • Line Height 1.65</span>
                    <span>16px / 1.0rem</span>
                  </div>
                  <p
                    className="font-sans text-[#4A5844] max-w-2xl leading-[1.65]"
                    style={{ fontSize: `${1.0 * typeScale}rem` }}
                  >
                    At Balance, we believe true wellness is more than just the absence of illness—it&apos;s a way of living in harmony
                    with yourself and the world around you. We treat the whole you: mind, body, and soul.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4.5. TEXT MOTION SUITE (KINETIC TYPOGRAPHY PLAYGROUND) */}
        {activeTab === 'motion' && (
          <div key={motionPlayKey} className="space-y-12 animate-fadeIn">
            {/* Header & Controls */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-8 rounded-3xl bg-white border border-[#E4DFD3] shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3E4D3E]">
                    Kinetic Typography Engine
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-[0.16em] px-2 py-0.5 rounded-full bg-[#C59B58]/15 text-[#C59B58] border border-[#C59B58]/30">
                    Awwwards SOTD Physics
                  </span>
                </div>
                <h2 className="font-serif text-3xl text-[#1E2522]">On-Brand Text Motion Playground</h2>
                <p className="text-xs text-[#7E8C78] max-w-xl">
                  Bespoke typography physics calibrated for mindfulness, organic water ripples, and peaceful contemplative reading.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMotionPlayKey((k) => k + 1)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E2522] text-[#F9F7F2] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#3E4D3E] active:scale-95 transition-all shadow-sm"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Replay All Animations</span>
                </button>
              </div>
            </div>

            {/* Grid of Custom Animation Presets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* PRESET 1: WATER RIPPLE TITLE */}
              <div className="bg-white rounded-3xl p-8 border border-[#E4DFD3] space-y-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#3E4D3E] font-bold">
                      01. Water Ripple Kinetic Title
                    </span>
                    <span className="text-[10px] font-mono text-[#7E8C78]">Sine wave + exponential decay</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#1E2522]">Fluid Water Ripple Physics</h3>
                  <p className="text-xs text-[#4A5844] leading-relaxed">
                    Hover across or click the characters below. A damped fluid sine wave propagates from the interaction point across neighboring letters, echoing water ripples on a tranquil pond.
                  </p>
                </div>

                {/* Live Canvas Box */}
                <div className="p-8 rounded-2xl bg-[#F2EEE5] border border-[#E4DFD3] flex flex-col items-center justify-center min-h-[160px] text-center overflow-hidden">
                  <div className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1E2522] font-normal">
                    <WaterRippleText
                      text={waterRippleInput || 'BALANCE'}
                      letterSpacing="0.18em"
                      interactiveRipple={true}
                      delay={0.1}
                    />
                  </div>
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#7E8C78] mt-4">
                    ↑ Click or hover any character to test ripple wave
                  </span>
                </div>

                {/* Custom Word Input */}
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xs font-sans text-[#7E8C78] shrink-0">Test Word:</span>
                  <input
                    type="text"
                    value={waterRippleInput}
                    onChange={(e) => setWaterRippleInput(e.target.value.toUpperCase())}
                    placeholder="BALANCE"
                    maxLength={14}
                    className="grow px-4 py-2 text-xs font-serif tracking-widest bg-[#F9F7F2] border border-[#E4DFD3] rounded-lg focus:outline-none focus:border-[#3E4D3E]"
                  />
                  <button
                    onClick={() => setWaterRippleInput('SERENITY')}
                    className="text-[11px] px-2.5 py-1.5 rounded bg-[#E4DFD3]/60 hover:bg-[#E4DFD3] text-[#1E2522] transition-colors"
                  >
                    Serenity
                  </button>
                  <button
                    onClick={() => setWaterRippleInput('HARMONY')}
                    className="text-[11px] px-2.5 py-1.5 rounded bg-[#E4DFD3]/60 hover:bg-[#E4DFD3] text-[#1E2522] transition-colors"
                  >
                    Harmony
                  </button>
                </div>
              </div>

              {/* PRESET 2: MASKED BASELINE SPLIT REVEAL */}
              <div className="bg-white rounded-3xl p-8 border border-[#E4DFD3] space-y-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#3E4D3E] font-bold">
                      02. Masked Baseline Split Reveal
                    </span>
                    <span className="text-[10px] font-mono text-[#7E8C78]">Clip-path curtain unmasking</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#1E2522]">Swiss Editorial Curtain Reveal</h3>
                  <p className="text-xs text-[#4A5844] leading-relaxed">
                    Lines or words rise from beneath an invisible baseline clipping plane with organic deceleration easing (<code className="text-[#1E2522] font-mono">cubic-bezier(0.16, 1, 0.3, 1)</code>).
                  </p>
                </div>

                {/* Live Canvas Box */}
                <div className="p-8 rounded-2xl bg-[#F9F7F2] border border-[#E4DFD3] flex flex-col items-center justify-center min-h-[160px] text-center">
                  <h4 className="font-serif text-2xl sm:text-3xl text-[#1E2522] leading-tight">
                    <SplitRevealText
                      key={`${splitByMode}-${motionPlayKey}`}
                      text={
                        splitByMode === 'lines'
                          ? "Live Better.\nFeel Deeper.\nBe Your Best."
                          : "Holistic Guidance for Mind, Body and Soul."
                      }
                      splitBy={splitByMode}
                      stagger={0.07}
                    />
                  </h4>
                </div>

                {/* Split Mode Selector */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-sans text-[#7E8C78]">Split Mode:</span>
                  <div className="flex items-center gap-1.5 bg-[#F2EEE5] p-1 rounded-lg">
                    {(['words', 'lines', 'chars'] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setSplitByMode(mode)}
                        className={`px-3 py-1 rounded text-xs capitalize transition-all ${
                          splitByMode === mode
                            ? 'bg-[#1E2522] text-white font-medium shadow-sm'
                            : 'text-[#4A5844] hover:text-[#1E2522]'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* PRESET 3: ZEN GLYPH AWAKENING */}
              <div className="bg-white rounded-3xl p-8 border border-[#E4DFD3] space-y-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#3E4D3E] font-bold">
                      03. Zen Glyph Awakening
                    </span>
                    <span className="text-[10px] font-mono text-[#7E8C78]">Sacred rune resolver</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#1E2522]">Organic Glyph Scramble</h3>
                  <p className="text-xs text-[#4A5844] leading-relaxed">
                    Replaces jarring tech scramblers with tranquil botanical and astronomical garden glyphs (·, ◦, ✦, ✧, ∿, ☼) before settling cleanly into the typographic letterform.
                  </p>
                </div>

                {/* Live Canvas Box */}
                <div className="p-8 rounded-2xl bg-[#1E2522] text-[#F9F7F2] border border-[#3E4D3E]/40 flex flex-col items-center justify-center min-h-[160px] text-center space-y-4">
                  <div className="font-serif text-xl sm:text-2xl text-white tracking-widest">
                    <ZenGlyphText
                      key={motionPlayKey}
                      text="BALANCE WELLNESS COACH"
                      triggerOnHover={true}
                      triggerOnMount={true}
                      speed={45}
                    />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C59B58]">
                    Hover to trigger Zen Rune Resolver
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-[#7E8C78] font-mono">
                  <span>Glyph Set: · ◦ ∘ ✦ ✧ ∿ — ◇ ⎈ ☼ ≈ 𖡼</span>
                  <span className="text-[#3E4D3E] font-semibold">Self-stabilizing</span>
                </div>
              </div>

              {/* PRESET 4: DAWN READING ILLUMINATION */}
              <div className="bg-white rounded-3xl p-8 border border-[#E4DFD3] space-y-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#3E4D3E] font-bold">
                      04. Dawn Reading Illumination
                    </span>
                    <span className="text-[10px] font-mono text-[#7E8C78]">Progressive sunlight emergence</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#1E2522]">Dawn Paragraph Emergence</h3>
                  <p className="text-xs text-[#4A5844] leading-relaxed">
                    Words transition smoothly from muted morning mist (<code className="text-[#7E8C78]">#7E8C78</code>) to grounded obsidian (<code className="text-[#1E2522]">#1E2522</code>) with soft de-blurring as the eye progresses.
                  </p>
                </div>

                {/* Live Canvas Box */}
                <div className="p-8 rounded-2xl bg-[#F9F7F2] border border-[#E4DFD3] flex flex-col items-center justify-center min-h-[160px]">
                  <DawnIlluminateText
                    key={motionPlayKey}
                    text="True wellness is more than just the absence of illness—it is a way of living in harmony with yourself, honoring natural rhythms, and nurturing the mind, body, and soul."
                    className="font-sans text-sm sm:text-base text-[#1E2522] max-w-md text-center"
                    stagger={0.035}
                    delay={0.1}
                  />
                </div>

                <div className="flex items-center justify-between pt-2 text-xs text-[#7E8C78]">
                  <span>Hover individual words to see delicate focus highlight</span>
                  <span className="font-mono text-[10px]">Stagger: 35ms/word</span>
                </div>
              </div>

              {/* PRESET 5: PRANA BREATHING CADENCE */}
              <div className="bg-white rounded-3xl p-8 border border-[#E4DFD3] space-y-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#3E4D3E] font-bold">
                      05. Prana Breathing Cadence
                    </span>
                    <span className="text-[10px] font-mono text-[#7E8C78]">4-2-4-2 breathing loop</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#1E2522]">Synchronized Breath Typography</h3>
                  <p className="text-xs text-[#4A5844] leading-relaxed">
                    Synchronizes typographic scale, letter-spacing, and subtle golden luminescence with an organic diaphragmatic respiration cycle, turning static text into a living meditation.
                  </p>
                </div>

                {/* Live Canvas Box */}
                <div className="p-8 rounded-2xl bg-[#141916] text-[#F9F7F2] border border-stone-800 flex flex-col items-center justify-center min-h-[180px]">
                  <BreathingText
                    quote="Wellness is not a destination, it’s a way of living."
                    author="Balance Philosophy"
                    className="w-full text-base sm:text-lg"
                    enableGuide={true}
                  />
                </div>

                <div className="flex items-center justify-between pt-2 text-xs text-[#7E8C78] font-mono">
                  <span>Cycle: Inhale (4s) → Hold (2s) → Exhale (4s) → Rest (1.5s)</span>
                  <span className="text-[#C59B58]">Chamomile Glow</span>
                </div>
              </div>

              {/* PRESET 6: CIRCULAR ORBITING TEXT SEALS */}
              <div className="bg-white rounded-3xl p-8 border border-[#E4DFD3] space-y-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#3E4D3E] font-bold">
                      06. Circular Kinetic Orbit
                    </span>
                    <span className="text-[10px] font-mono text-[#7E8C78]">Continuous SVG textpath</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#1E2522]">Artisanal Circular Orbiting Seals</h3>
                  <p className="text-xs text-[#4A5844] leading-relaxed">
                    Generates an unhurried, hypnotic circular rotation along an SVG mathematical path, creating a signature seal of craftsmanship over hero media and photography.
                  </p>
                </div>

                {/* Live Canvas Box */}
                <div className="p-8 rounded-2xl bg-[#F2EEE5] border border-[#E4DFD3] flex items-center justify-center min-h-[180px] gap-8">
                  <CircularOrbitText
                    text="· BALANCE WELLNESS COACH · MIND · BODY · SOUL ·"
                    size={130}
                    duration={24}
                    className="text-[#1E2522]"
                    centerIcon={
                      <div className="w-9 h-9 rounded-full bg-[#3E4D3E] flex items-center justify-center text-white font-serif text-sm shadow-md">
                        B
                      </div>
                    }
                  />

                  <CircularOrbitText
                    text="· SACRED SPACE · MINDFULNESS · HARMONY ·"
                    size={110}
                    duration={18}
                    className="text-[#3E4D3E]"
                    centerIcon={
                      <HolisticSproutIcon className="w-5 h-5 text-[#C59B58]" />
                    }
                  />
                </div>

                <div className="flex items-center justify-between pt-2 text-xs text-[#7E8C78] font-mono">
                  <span>Velocity: 24s linear rotation</span>
                  <span>Center Emblems: Botanical Monogram</span>
                </div>
              </div>

              {/* PRESET 7: DAILY MINDFUL INTENTIONS */}
              <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-[#E4DFD3] space-y-6 shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#3E4D3E] font-bold">
                      07. Liquid Blur Morphing Affirmation
                    </span>
                    <span className="text-[10px] font-mono text-[#7E8C78]">Cross-morphing intention banner</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#1E2522]">Daily Mindful Intention Carousel</h3>
                  <p className="text-xs text-[#4A5844] leading-relaxed">
                    Cycles seamlessly through grounding mindfulness practices with a liquid blur dissolve (<code className="text-[#1E2522]">filter: blur(6px) → blur(0px)</code>), interactive pause-on-hover, and smooth progress track.
                  </p>
                </div>

                {/* Live Component Display */}
                <div className="max-w-2xl mx-auto">
                  <MorphingAffirmation intervalMs={5000} />
                </div>
              </div>
            </div>

            {/* Motion Engineering Architecture Reference */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#E4DFD3] space-y-6">
              <h3 className="font-serif text-2xl text-[#1E2522]">Typographic Motion Directives &amp; WCAG AA Compliance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#4A5844]">
                <div className="space-y-2 p-5 rounded-2xl bg-[#F9F7F2] border border-[#E4DFD3]">
                  <span className="font-mono text-[10px] font-bold uppercase text-[#3E4D3E]">1. Organic Deceleration</span>
                  <p className="leading-relaxed">
                    Always utilize <code className="font-mono text-[#1E2522]">cubic-bezier(0.16, 1, 0.3, 1)</code> rather than mechanical easing. Natural motion begins with prompt momentum and settles with unhurried grace.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-2xl bg-[#F9F7F2] border border-[#E4DFD3]">
                  <span className="font-mono text-[10px] font-bold uppercase text-[#3E4D3E]">2. Screen Reader Accessibility</span>
                  <p className="leading-relaxed">
                    Split character/word elements are wrapped in <code className="font-mono text-[#1E2522]">aria-hidden=&quot;true&quot;</code>, with whole text preserved in the parent <code className="font-mono text-[#1E2522]">aria-label</code> to guarantee flawless assistive tech reading.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-2xl bg-[#F9F7F2] border border-[#E4DFD3]">
                  <span className="font-mono text-[10px] font-bold uppercase text-[#3E4D3E]">3. Damped Sine Wave Physics</span>
                  <p className="leading-relaxed">
                    The water ripple displacement algorithm uses <code className="font-mono text-[#1E2522]">y = sin(t * w) * e^(-t * k)</code> where <code className="font-mono text-[#1E2522]">k=4.5</code>, guaranteeing zero jitter and a natural liquid settling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. UI COMPONENTS */}
        {activeTab === 'components' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E4DFD3] space-y-10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3E4D3E]">
                  Awwwards Component Suite
                </span>
                <h2 className="font-serif text-3xl text-[#1E2522]">Pills, Overlapping Seam Badges & Cards</h2>
              </div>

              {/* Buttons Row */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase text-[#7E8C78] tracking-wider">Button Specifications</h4>
                <div className="flex flex-wrap items-center gap-6 p-6 rounded-2xl bg-[#F9F7F2] border border-[#E4DFD3]">
                  {/* Primary Hero Pill */}
                  <button className="px-8 py-4 rounded-full bg-[#1E2522] text-[#F9F7F2] font-sans text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#3E4D3E] hover:-translate-y-0.5 transition-all shadow-md">
                    BEGIN YOUR JOURNEY
                  </button>

                  {/* Secondary Botanical Pill */}
                  <button className="px-8 py-4 rounded-full bg-[#3E4D3E] text-[#F9F7F2] font-sans text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#4A5844] hover:-translate-y-0.5 transition-all">
                    LEARN MORE ABOUT US
                  </button>

                  {/* Newsletter Submit Pill */}
                  <button className="px-8 py-3 rounded-full bg-[#4A5844] text-[#F9F7F2] font-sans text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#3E4D3E] transition-all">
                    JOIN NOW
                  </button>

                  {/* Text Arrow Link */}
                  <span className="inline-flex items-center gap-1 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#1E2522] hover:text-[#3E4D3E] cursor-pointer group">
                    LEARN MORE <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>

              {/* Service Badges Showcase */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase text-[#7E8C78] tracking-wider">
                  The 4 Service Seam Badges (56px × 56px, Moss Background)
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { title: 'Mindfulness', sub: 'Stacked Zen Stones', icon: ZenStonesIcon },
                    { title: 'Nutrition', sub: 'Botanical Whole Apple', icon: NutritionIcon },
                    { title: 'Movement', sub: 'Blooming Lotus Flower', icon: LotusIcon },
                    { title: 'Journaling', sub: 'Reflective Herb Leaf', icon: JournalLeafIcon },
                  ].map((b, i) => {
                    const Icon = b.icon;
                    return (
                      <div key={i} className="p-6 rounded-2xl bg-[#F9F7F2] border border-[#E4DFD3] flex flex-col items-center text-center space-y-3">
                        <div className="w-14 h-14 rounded-full bg-[#3E4D3E] text-white flex items-center justify-center shadow-md">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h5 className="font-serif font-semibold text-[#1E2522]">{b.title}</h5>
                          <span className="text-[11px] text-[#7E8C78]">{b.sub}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. DESIGN.MD VIEWER */}
        {activeTab === 'markdown' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-3xl p-8 border border-[#E4DFD3] space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#E4DFD3]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3E4D3E]">
                    Generated Artifact
                  </span>
                  <h2 className="font-serif text-3xl text-[#1E2522]">design.md Specification File</h2>
                  <p className="text-xs text-[#7E8C78] mt-1">
                    Directly loaded from the filesystem repository root (<code className="bg-[#F2EEE5] px-1 py-0.5 rounded">/design.md</code>)
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopyMarkdown}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E4DFD3] bg-[#F9F7F2] text-xs font-semibold text-[#1E2522] hover:bg-[#E4DFD3] transition-colors"
                  >
                    {copiedMarkdown ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedMarkdown ? 'Copied Full Document!' : 'Copy Raw Markdown'}
                  </button>

                  <button
                    onClick={handleDownloadMarkdown}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2522] text-[#F9F7F2] text-xs font-semibold hover:bg-[#3E4D3E] transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download design.md
                  </button>
                </div>
              </div>

              {/* Code/Markdown Content Block */}
              <div className="bg-[#141916] text-[#F9F7F2] p-6 rounded-2xl font-mono text-xs overflow-x-auto max-h-[700px] overflow-y-auto leading-relaxed border border-stone-800">
                <pre className="whitespace-pre-wrap">{markdownContent}</pre>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
