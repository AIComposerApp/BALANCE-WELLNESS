'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, Variants } from 'motion/react';
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
import { ZenImageReveal } from './ZenImageReveal';
import { PillarsScrollDrivenSequence } from './PillarsScrollDrivenSequence';
import {
  WaterRippleText,
  ZenGlyphText,
  SplitRevealText,
  DawnIlluminateText,
  BreathingText,
  CircularOrbitText,
  MorphingAffirmation,
} from './text-animations';
import { RollingButton } from './RollingButton';
import { RollingText } from './RollingText';
import {
  Search,
  X,
  Instagram,
  Facebook,
  CheckCircle2,
} from 'lucide-react';

// Custom Pinterest & YouTube SVG icons
function PinterestIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
    </svg>
  );
}

function YoutubeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  fullDetails: {
    duration: string;
    focus: string;
    overview: string;
    keyTakeaways: string[];
    coach: string;
  };
}

const SERVICES: ServiceItem[] = [
  {
    id: 'mindfulness',
    title: 'Mindfulness Coaching',
    subtitle: 'STRESS REDUCTION & PRESENCE',
    description: 'Quiet mental chatter and develop an unshakeable inner anchor through guided meditation.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    icon: ZenStonesIcon,
    fullDetails: {
      duration: '8-Week Individual Journey',
      focus: 'Stress reduction, emotional regulation & mental clarity',
      overview:
        'A comprehensive 1-on-1 coaching program designed to quiet mental chatter, regulate cortisol response, and cultivate deep presence in daily life.',
      keyTakeaways: [
        'Personalized 15-minute daily meditation protocols',
        'Vagus nerve reset and physical tension release',
        'Bi-weekly live video coaching sessions',
        'Direct messaging access to your dedicated coach',
      ],
      coach: 'Maya Lin, Senior Mindfulness Lead',
    },
  },
  {
    id: 'nutrition',
    title: 'Nutrition Guidance',
    subtitle: 'GUT VITALITY & BIO-INDIVIDUALITY',
    description: 'Nourish your body with anti-inflammatory whole foods and bio-individual meal planning.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop',
    icon: NutritionIcon,
    fullDetails: {
      duration: '6-Week Holistic Reset',
      focus: 'Microbiome health, sustained vitality & mindful eating',
      overview:
        'Move away from restrictive diets. We craft a relationship with food centered on bio-individuality, anti-inflammatory whole plants, and joyful nourishment.',
      keyTakeaways: [
        'Personalized gut-health nutritional roadmap',
        'Seasonal, anti-inflammatory meal templates',
        'Microbiome support & probiotic optimization',
        'Mindful eating practices for healthy digestion',
      ],
      coach: 'Elena Rostova, Holistic Clinical Nutritionist',
    },
  },
  {
    id: 'movement',
    title: 'Movement & Wellness',
    subtitle: 'SOMATIC FLOW & MOBILITY',
    description: 'Gentle somatic yoga and joint mobility sequences designed to heal and restore.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    icon: LotusIcon,
    fullDetails: {
      duration: 'Ongoing Monthly Sanctuary',
      focus: 'Somatic flow, joint mobility & mindful breath',
      overview:
        'Honoring your body’s natural rhythm through gentle somatic yoga, restorative mobility sequences, and functional posture alignment.',
      keyTakeaways: [
        'Low-impact morning joint awakening sequences',
        'Evening restorative Yin yoga for deep sleep',
        'Breath-synchronized postural alignment drills',
        'Adaptations for desk workers and chronic tension points',
      ],
      coach: 'Kaelen Vance, Somatic Movement Specialist',
    },
  },
  {
    id: 'journaling',
    title: 'Wellness Journaling',
    subtitle: 'INTENTION & EMOTIONAL RELEASE',
    description: 'Structured reflection prompts and subconscious journaling for purposeful living.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    icon: JournalLeafIcon,
    fullDetails: {
      duration: 'Self-Paced 30-Day Immersion',
      focus: 'Subconscious reflection, clarity & emotional release',
      overview:
        'Discover structured journaling prompts that unlock emotional clarity, gratitude, and purposeful intentional living.',
      keyTakeaways: [
        'The Morning Equilibrium prompt system (3 min)',
        'Evening gratitude and cognitive release exercise',
        'Subconscious goal setting & shadow work prompts',
        'Digital & printable reflective workbooks',
      ],
      coach: 'Sarah Sterling, Author & Reflective Guide',
    },
  },
  {
    id: 'breathwork',
    title: 'Prana Breath Immersion',
    subtitle: 'DIAPHRAGMATIC HARDENING',
    description: 'Master nervous system downregulation through ancient pranayama breath control.',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop',
    icon: ZenStonesIcon,
    fullDetails: {
      duration: '4-Week Intensive',
      focus: 'Oxygenation, focus & autonomic nervous system balance',
      overview:
        'Learn to modulate heart rate variability and mental focus through targeted diaphragmatic breathing protocols.',
      keyTakeaways: [
        '4-2-4-2 diaphragmatic breathing loops',
        'Vagus nerve tone stimulation',
        'Pre-sleep breath relaxation sequences',
        'Stress resilience benchmarking',
      ],
      coach: 'David Vance, Breathwork Master',
    },
  },
  {
    id: 'sound-bath',
    title: 'Sound & Resonance Therapy',
    subtitle: 'ACOUSTIC RECOVERY',
    description: 'Immerse in Tibetan singing bowl frequencies to recalibrate cellular harmony.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    icon: LotusIcon,
    fullDetails: {
      duration: 'Weekly Live Sound Sanctuary',
      focus: 'Brainwave entrainment & deep cellular relaxation',
      overview:
        'Acoustic soundscapes designed to transition brainwave states from active Beta into restorative Theta and Delta frequencies.',
      keyTakeaways: [
        '432Hz harmonic tuning sessions',
        'Somatic vibration release',
        'Guided meditative sound journeys',
        'High-fidelity binaural recordings',
      ],
      coach: 'Aria Chen, Sound Healing Practitioner',
    },
  },
];

interface ArticleItem {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

const ARTICLES: ArticleItem[] = [
  {
    id: 'habits-calmer-mind',
    category: 'MINDFULNESS',
    title: '5 Simple Habits for a Calmer Mind Every Day',
    excerpt: 'Small intentional practices that cultivate lasting inner serenity.',
    date: 'May 24, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
    content: `In a modern culture that equates busyness with worth, calm is an intentional act of rebellion. You do not need an hour of isolation in the Himalayas to cultivate mental serenity.

1. The 90-Second Morning Stillness: Before touching your phone or checking emails, sit on the edge of your bed and take five deliberate diaphragmatic breaths.
2. Single-Tasking Tea Ritual: When drinking tea or coffee, do only that. Feel the ceramic warmth, observe the steam, and taste the subtle notes.
3. The Afternoon Nature Scan: Look out of the window or step outside for three minutes. Let your eyes focus on distant horizons to disarm visual tension.
4. Digital Sundown: Turn off artificial screen blue light at least 45 minutes before sleep.
5. Cognitive Brain Dump: Write down every unresolved thought before closing your eyes.`,
  },
  {
    id: 'reconnecting-with-nature',
    category: 'WELLNESS',
    title: 'Reconnecting with Nature: A Natural Reset',
    excerpt: 'How spending time outdoors restores your energy and perspective.',
    date: 'May 18, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop',
    content: `The Japanese concept of Shinrin-yoku (forest bathing) confirms what our bodies intuitively know: spending time in nature lowers cortisol, stabilizes blood pressure, and awakens creativity.

When we immerse ourselves in the natural cadence of a forest or river, our sympathetic fight-or-flight nervous system naturally relinquishes its grip. The fractals of leaves, the damp scent of moss, and the rhythm of flowing water act as natural neuro-acoustic balms.

Commit to just twenty minutes of unhurried walking in a natural park or wooded grove twice weekly. Leave headphones in your pocket. Let your senses engage with the gentle symphony of the living earth.`,
  },
  {
    id: 'food-as-fuel',
    category: 'NUTRITION',
    title: 'Food as Fuel: Nourish Your Body, Elevate Your Life',
    excerpt: 'Learn how anti-inflammatory whole plant foods elevate mood and stamina.',
    date: 'May 10, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    content: `Every meal sends molecular signals that either ignite inflammation or foster cellular regeneration. Real vitality begins in the microbiome—the gut-brain axis responsible for over 90% of our serotonin production.

To cultivate enduring energy without mid-afternoon slumps:
- Crowd your plate with vibrant polyphenols (deep greens, wild berries, olive oil).
- Prioritize fiber-rich prebiotics to nurture healthy flora.
- Practice mindful chewing, savoring flavors to optimize digestive enzyme production.

Nourishment is an act of self-respect. When you treat eating as sacred sustenance rather than an inconvenient chore, your energy blossoms.`,
  },
];

export function LiveBrandExperience() {
  // Interactive State
  const [activeNav, setActiveNav] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [emailInput, setEmailInput] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showJourneyModal, setShowJourneyModal] = useState(false);
  const [journeyStep, setJourneyStep] = useState(1);
  const [journeyGoal, setJourneyGoal] = useState('mindfulness');

  // Reset scroll to top hero section on initial page load or reload
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  // Track scroll position for header show/hide on scroll up/down
  useEffect(() => {
    let lastY = 0;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 100);

      if (currentY <= 150) {
        // Near top (hero section): header is always visible
        setHeaderVisible(true);
      } else {
        // After hero: hide when scrolling down, show when scrolling up
        if (currentY > lastY + 6) {
          setHeaderVisible(false);
        } else if (currentY < lastY - 6) {
          setHeaderVisible(true);
        }
      }
      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setEmailInput('');
      setNewsletterSuccess(false);
    }, 4000);
  };

  // Animation variant for line reveal clip mask
  const lineRevealVariant: Variants = {
    hidden: { clipPath: 'inset(50% 50% 50% 50%)' },
    visible: (customDelay: number = 0) => ({
      clipPath: [
        'inset(50% 50% 50% 50%)',
        'inset(49.5% 0% 49.5% 0%)',
        'inset(0% 0% 0% 0%)',
      ],
      transition: {
        duration: 1.2,
        delay: customDelay,
        times: [0, 0.35, 1],
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className="w-full bg-[#F9F7F2] text-[#1E2522] selection:bg-[#3E4D3E]/20 selection:text-[#1E2522] relative">
      {/* 1. TOP HEADER NAVIGATION - Text/Buttons White before Scroll, Transitioning seamlessly to Dark on Scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          headerVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div
          className={`w-full px-6 sm:px-12 lg:px-20 flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? 'h-20 bg-[#F9F7F2]/90 backdrop-blur-2xl border-b border-[#E4DFD3]/80'
              : 'h-24 bg-transparent border-b border-transparent'
          }`}
        >
          {/* Brand Logo Lockup */}
          <a href="#home" className="hover:opacity-90 transition-opacity">
            <Logo variant={isScrolled ? 'dark' : 'light'} size="md" showTagline={true} />
          </a>

          {/* Center Navigation Links with Custom Character Stagger Rolling Animation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-sans">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Journal', href: '#journal' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => {
              const isActive = activeNav === link.label;
              return (
                <RollingText
                  key={link.label}
                  text={link.label}
                  href={link.href}
                  active={isActive}
                  onClick={() => setActiveNav(link.label)}
                  className={`transition-colors duration-500 ${isScrolled ? 'text-[#1E2522]' : 'text-white'}`}
                />
              );
            })}
          </div>

          {/* Right Utility: Search & Login */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowSearchModal(true)}
              aria-label="Search"
              className={`transition-colors duration-500 p-1 ${isScrolled ? 'text-[#1E2522] hover:text-[#3E4D3E]' : 'text-white hover:text-white/80'}`}
            >
              <Search className="w-4 h-4" />
            </button>
            <RollingButton
              onClick={() => setShowLoginModal(true)}
              variant="outline"
              className={`!px-5 !py-2 !text-xs transition-colors duration-500 ${isScrolled ? 'text-[#1E2522]' : 'text-white'}`}
            >
              login
            </RollingButton>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="w-full px-1 sm:px-2 pt-1 sm:pt-2 bg-[#F9F7F2]">
        {/* Background Container with Very Slightly Curved Edges and Close Screen Margins */}
        <div className="relative min-h-[90vh] sm:min-h-[93vh] w-full rounded-lg sm:rounded-xl overflow-hidden flex flex-col justify-between lg:justify-end pb-10 sm:pb-16 pt-24 sm:pt-32 px-4 sm:px-8 lg:px-14 border border-[#E4DFD3]/60 shadow-sm">
          {/* Background Image - Completely Clear with No Obscuring Scrim or Blur */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://res.cloudinary.com/divndlntm/image/upload/v1786756329/Woman_meditating_on_deck_2K_202608150201_qi3sla.jpg"
              alt="Woman meditating on deck in tranquil nature"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-100"
            />
          </div>

          {/* Top Item on Mobile: "Balance" positioned higher up over the lady's head, expanded almost end-to-end */}
          <div className="relative z-10 text-left w-full max-w-full lg:mb-2">
            <h1 className="font-serif text-5xl xs:text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] xl:text-[12rem] text-[#1E2522] font-normal leading-none select-none whitespace-nowrap tracking-tight">
              <WaterRippleText
                text="Balance"
                letterSpacing="0.02em"
                delay={0.15}
                interactiveRipple={false}
              />
            </h1>
          </div>

          {/* Bottom Items: Bigger Subtitle and CTA Button aligned to the left */}
          <div className="relative z-10 text-left w-full max-w-3xl flex flex-col items-start space-y-4 sm:space-y-6 pt-4 lg:pt-0">
            {/* Subtitle with Zen Glyph Awakening - Bigger text, natural case */}
            <div>
              <ZenGlyphText
                text="Holistic guidance for mind, body & soul."
                className="font-sans text-base sm:text-lg md:text-xl text-[#1E2522] font-medium tracking-wide leading-relaxed"
                triggerOnHover={true}
                triggerOnMount={true}
                speed={35}
                delay={350}
              />
            </div>

            {/* Primary CTA Button - Lowercase */}
            <div className="pt-1">
              <RollingButton
                onClick={() => setShowJourneyModal(true)}
                variant="dark"
                className="!text-sm font-medium"
              >
                begin your journey
              </RollingButton>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT / WELCOME SECTION */}
      <section id="about" className="py-24 md:py-32 px-6 sm:px-12 lg:px-20 w-full bg-[#F9F7F2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column: Narrative & CTA */}
          <div className="lg:col-span-5 space-y-8">
            <ZenGlyphText
              text="WELCOME TO BALANCE"
              className="text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.24em] text-[#4A5844]"
              triggerOnHover={true}
              triggerOnMount={true}
              speed={40}
            />

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E2522] font-normal leading-[1.12]">
              <SplitRevealText
                text={"Live Better.\nFeel Deeper.\nBe Your Best."}
                splitBy="lines"
                stagger={0.12}
                duration={0.9}
              />
            </h2>

            <div className="w-16 h-0.5 bg-[#C59B58]" />

            <DawnIlluminateText
              text="At Balance, we believe true wellness is more than just the absence of illness—it's a way of living in harmony with yourself and the world around you."
              className="font-sans text-base sm:text-lg text-[#4A5844] max-w-xl"
              stagger={0.03}
              delay={0.15}
            />

            <div className="pt-2">
              <RollingButton
                onClick={() => {
                  const el = document.getElementById('services');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="sage"
              >
                LEARN MORE ABOUT US
              </RollingButton>
            </div>
          </div>

          {/* Right Column: Embedded 9:16 Mobile Video Container */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden border border-[#E4DFD3]/80 bg-black">
              <video
                src="https://res.cloudinary.com/divndlntm/video/upload/old_woman_wellness_u8rgsh.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Balance Wellness Experience"
                className="w-full h-full object-cover border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 PINNED SCROLL-DRIVEN SERVICES / PILLARS SEQUENCE */}
      <PillarsScrollDrivenSequence />

      {/* 4. OUR SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 w-full bg-[#F2EEE5] overflow-hidden">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto px-6 space-y-4 mb-16">
          <ZenGlyphText
            text="OUR SERVICES"
            className="text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.24em] text-[#4A5844]"
            triggerOnHover={true}
          />
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E2522] font-normal">
            <SplitRevealText text="Support for Every Step" splitBy="words" />
          </h2>
          <DawnIlluminateText
            text="Explore our coaching programs and experiences designed to help you create balance and thrive."
            className="font-sans text-base text-[#4A5844]"
            delay={0.15}
          />
        </div>

        {/* DUAL ENDLESS LOOP MARQUEE CAROUSEL CONTAINER */}
        <div className="space-y-8 w-full">
          {/* ROW 1: Moving Left-to-Right */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee-left flex gap-6 px-3">
              {[...SERVICES, ...SERVICES].map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <ZenImageReveal
                    key={`row1-${srv.id}-${idx}`}
                    src={srv.image}
                    alt={srv.title}
                    delay={0}
                    onClick={() => setSelectedService(srv)}
                    className="relative shrink-0 w-80 sm:w-96 h-96 sm:h-[420px] rounded-3xl overflow-hidden group border border-[#E4DFD3]/40 cursor-pointer"
                  >
                    {/* Dark Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                    {/* Top Icon Badge */}
                    <div className="absolute top-6 left-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-[#C59B58]">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Overlaid Card Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 space-y-3">
                      <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#C59B58] block">
                        {srv.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white leading-tight">
                        {srv.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#F9F7F2]/80 leading-relaxed line-clamp-2">
                        {srv.description}
                      </p>

                      {/* LEARN MORE Button */}
                      <div className="pt-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <RollingButton
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedService(srv);
                          }}
                          variant="light"
                          className="!px-6 !py-2.5 !text-xs"
                        >
                          LEARN MORE
                        </RollingButton>
                      </div>
                    </div>
                  </ZenImageReveal>
                );
              })}
            </div>
          </div>

          {/* ROW 2: Moving Right-to-Left */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee-right flex gap-6 px-3">
              {[...SERVICES.slice().reverse(), ...SERVICES.slice().reverse()].map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <ZenImageReveal
                    key={`row2-${srv.id}-${idx}`}
                    src={srv.image}
                    alt={srv.title}
                    delay={0}
                    onClick={() => setSelectedService(srv)}
                    className="relative shrink-0 w-80 sm:w-96 h-96 sm:h-[420px] rounded-3xl overflow-hidden group border border-[#E4DFD3]/40 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                    <div className="absolute top-6 left-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-[#C59B58]">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 space-y-3">
                      <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#C59B58] block">
                        {srv.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white leading-tight">
                        {srv.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#F9F7F2]/80 leading-relaxed line-clamp-2">
                        {srv.description}
                      </p>

                      <div className="pt-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <RollingButton
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedService(srv);
                          }}
                          variant="light"
                          className="!px-6 !py-2.5 !text-xs"
                        >
                          LEARN MORE
                        </RollingButton>
                      </div>
                    </div>
                  </ZenImageReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ATMOSPHERIC EDITORIAL QUOTE CALLOUT */}
      <section className="relative py-28 md:py-36 px-6 sm:px-12 w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1920&auto=format&fit=crop"
            alt="Misty brook in deep emerald forest"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#141916]/80 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto text-[#F9F7F2]">
          <BreathingText
            quote="Wellness is not a destination, it’s a way of living."
            author="Balance Philosophy"
            className="w-full"
            enableGuide={true}
          />
        </div>
      </section>

      {/* 6. FROM THE JOURNAL SECTION */}
      <section id="journal" className="py-24 md:py-32 px-6 sm:px-12 lg:px-20 w-full bg-[#F9F7F2]">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <ZenGlyphText
              text="FROM THE JOURNAL"
              className="text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.24em] text-[#4A5844]"
              triggerOnHover={true}
            />
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E2522] font-normal">
              <SplitRevealText text="Inspiration for Your Journey" splitBy="words" />
            </h2>
          </div>

          <RollingText
            text="VIEW ALL ARTICLES →"
            href="#journal"
            className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#1E2522]"
          />
        </div>

        <div className="mb-12 max-w-2xl">
          <MorphingAffirmation />
        </div>

        {/* 3 Journal Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {ARTICLES.map((art, idx) => (
            <article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#E4DFD3] flex flex-col transition-all duration-500 hover:border-[#3E4D3E]/40"
            >
              <ZenImageReveal
                src={art.image}
                alt={art.title}
                delay={idx * 0.1}
                className="h-60 sm:h-64 w-full overflow-hidden bg-[#E4DFD3]"
              />

              <div className="p-8 grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#4A5844]">
                    {art.category}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#1E2522] group-hover:text-[#3E4D3E] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="font-sans text-sm text-[#7E8C78] line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4DFD3]/60 text-xs font-sans text-[#7E8C78] flex items-center justify-between">
                  <span>{art.date}</span>
                  <span>•</span>
                  <span>{art.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. STAY INSPIRED / NEWSLETTER BANNER */}
      <section className="bg-[#323E32] text-[#F9F7F2] py-20 px-6 sm:px-12 lg:px-20 w-full relative overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <ZenGlyphText
              text="STAY INSPIRED"
              className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#A3B09D]"
              triggerOnHover={true}
            />
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
              <SplitRevealText text="Join Our Wellness Community" splitBy="words" />
            </h3>
            <DawnIlluminateText
              text="Get weekly tips, inspiration, and exclusive guidance delivered straight to your inbox."
              className="font-sans text-sm sm:text-base text-[#A3B09D]"
              delay={0.1}
            />
          </div>

          <div className="w-full max-w-lg space-y-3">
            <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 bg-[#F9F7F2] p-2 rounded-full border border-[#E4DFD3]">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email"
                className="grow px-6 py-3 bg-transparent text-[#1E2522] placeholder:text-[#7E8C78] text-sm font-sans focus:outline-none"
              />
              <RollingButton
                type="submit"
                variant="dark"
                className="!px-7 !py-3 !text-xs shrink-0"
              >
                JOIN NOW
              </RollingButton>
            </form>

            {newsletterSuccess ? (
              <p className="text-xs text-emerald-300 flex items-center justify-center lg:justify-start gap-1.5 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4" />
                <span>Welcome to our sanctuary. Your welcome guide is on its way.</span>
              </p>
            ) : (
              <p className="text-xs text-[#A3B09D] text-center lg:text-left">
                We respect your privacy. Unsubscribe anytime.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer id="contact" className="bg-[#19201C] text-[#F9F7F2] pt-24 pb-12 px-6 sm:px-12 lg:px-20 w-full border-t border-stone-800">
        <div className="w-full space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 space-y-6">
              <Logo variant="light" size="md" showTagline={true} />
              <p className="font-sans text-sm text-[#A3B09D] leading-relaxed max-w-sm">
                Holistic guidance for mind, body &amp; soul. Helping you create balance and live a life you love.
              </p>

              <div className="flex items-center gap-3 pt-2">
                {[
                  { name: 'Instagram', icon: Instagram },
                  { name: 'Facebook', icon: Facebook },
                  { name: 'Pinterest', icon: PinterestIcon },
                  { name: 'YouTube', icon: YoutubeIcon },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={`#${social.name.toLowerCase()}`}
                      aria-label={social.name}
                      className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-[#A3B09D] hover:text-white hover:border-white transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm font-sans">
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-[0.2em] text-[#F9F7F2] text-xs">
                  EXPLORE
                </h4>
                <ul className="space-y-3 text-[#A3B09D]">
                  <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="#journal" className="hover:text-white transition-colors">Journal</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-[0.2em] text-[#F9F7F2] text-xs">
                  SERVICES
                </h4>
                <ul className="space-y-3 text-[#A3B09D]">
                  <li><button onClick={() => setSelectedService(SERVICES[0])} className="hover:text-white transition-colors text-left">Mindfulness Coaching</button></li>
                  <li><button onClick={() => setSelectedService(SERVICES[1])} className="hover:text-white transition-colors text-left">Nutrition Guidance</button></li>
                  <li><button onClick={() => setSelectedService(SERVICES[2])} className="hover:text-white transition-colors text-left">Movement &amp; Wellness</button></li>
                  <li><button onClick={() => setSelectedService(SERVICES[3])} className="hover:text-white transition-colors text-left">Wellness Journaling</button></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-[0.2em] text-[#F9F7F2] text-xs">
                  RESOURCES
                </h4>
                <ul className="space-y-3 text-[#A3B09D]">
                  <li><a href="#journal" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#journal" className="hover:text-white transition-colors">Guides</a></li>
                  <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
                  <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-[0.2em] text-[#F9F7F2] text-xs">
                  SUPPORT
                </h4>
                <ul className="space-y-3 text-[#A3B09D]">
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><button onClick={() => setShowLoginModal(true)} className="hover:text-white transition-colors">Login</button></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800/80 text-center text-xs font-sans text-[#7E8C78]">
            <p>© 2025 Balance Wellness Coach. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* SERVICE DETAIL MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#F9F7F2] rounded-3xl max-w-2xl w-full overflow-hidden border border-[#E4DFD3] my-8 animate-scaleUp">
            <div className="relative h-64 w-full">
              <Image src={selectedService.image} alt={selectedService.title} fill className="object-cover" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#4A5844]">
                  COACHING PROGRAM
                </span>
                <h3 className="font-serif text-3xl text-[#1E2522]">{selectedService.title}</h3>
                <p className="text-xs text-[#7E8C78] font-sans">Guided by {selectedService.fullDetails.coach}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white border border-[#E4DFD3] text-xs">
                <div>
                  <span className="text-[#7E8C78] block">Duration:</span>
                  <span className="font-semibold text-[#1E2522]">{selectedService.fullDetails.duration}</span>
                </div>
                <div>
                  <span className="text-[#7E8C78] block">Primary Focus:</span>
                  <span className="font-semibold text-[#1E2522]">{selectedService.fullDetails.focus}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-lg font-semibold text-[#1E2522]">Program Overview</h4>
                <p className="text-sm text-[#4A5844] leading-relaxed">{selectedService.fullDetails.overview}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-lg font-semibold text-[#1E2522]">What You Experience</h4>
                <ul className="space-y-2 text-xs text-[#4A5844]">
                  {selectedService.fullDetails.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C59B58] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#E4DFD3]">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-full border border-[#E4DFD3] text-xs font-semibold text-[#1E2522] hover:bg-[#E4DFD3]"
                >
                  Close
                </button>
                <RollingButton
                  onClick={() => {
                    setSelectedService(null);
                    setShowJourneyModal(true);
                  }}
                  variant="dark"
                  className="!px-7 !py-2.5 !text-xs"
                >
                  ENROLL IN PROGRAM
                </RollingButton>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#F9F7F2] rounded-3xl max-w-2xl w-full overflow-hidden border border-[#E4DFD3] my-8 animate-scaleUp">
            <div className="relative h-64 w-full">
              <Image src={selectedArticle.image} alt={selectedArticle.title} fill className="object-cover" />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A5844]">
                  {selectedArticle.category} • {selectedArticle.readTime}
                </span>
                <h3 className="font-serif text-3xl text-[#1E2522] leading-tight">{selectedArticle.title}</h3>
                <p className="text-xs text-[#7E8C78]">{selectedArticle.date}</p>
              </div>

              <div className="prose prose-stone max-w-none text-sm text-[#4A5844] leading-relaxed whitespace-pre-line">
                {selectedArticle.content}
              </div>

              <div className="pt-6 border-t border-[#E4DFD3] flex items-center justify-between">
                <span className="text-xs text-[#7E8C78]">Balance Wellness Coach Journal</span>
                <RollingButton
                  onClick={() => setSelectedArticle(null)}
                  variant="dark"
                  className="!px-6 !py-2 !text-xs"
                >
                  BACK TO JOURNAL
                </RollingButton>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QUICK SEARCH MODAL */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center p-6 pt-24">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 border border-[#E4DFD3] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4DFD3]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A5844]">Search Balance</span>
              <button onClick={() => setShowSearchModal(false)} className="text-[#7E8C78] hover:text-[#1E2522]">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-[#7E8C78]" />
              <input
                type="text"
                autoFocus
                placeholder="Search programs, articles, practices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F9F7F2] border border-[#E4DFD3] text-sm focus:outline-none focus:border-[#3E4D3E]"
              />
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs text-[#7E8C78] uppercase font-semibold">Quick Suggestions:</span>
              <div className="flex flex-wrap gap-2">
                {['Mindfulness', 'Nutrition Plans', 'Somatic Yoga', 'Journaling Prompts', 'Breathwork'].map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSearchQuery(s)}
                    className="px-3.5 py-1.5 rounded-full bg-[#F9F7F2] hover:bg-[#E4DFD3] text-xs text-[#4A5844] transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CLIENT LOGIN MODAL */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F9F7F2] rounded-3xl max-w-md w-full p-8 border border-[#E4DFD3] space-y-6">
            <div className="flex items-center justify-between">
              <Logo variant="dark" size="sm" showTagline={false} />
              <button onClick={() => setShowLoginModal(false)} className="text-[#7E8C78] hover:text-[#1E2522]">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-2xl text-[#1E2522]">Welcome Back</h3>
              <p className="text-xs text-[#7E8C78]">Enter your credentials to access your personal sanctuary.</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowLoginModal(false);
              }}
              className="space-y-4"
            >
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#4A5844]">Email Address</label>
                <input
                  type="email"
                  required
                  defaultValue="client@balancewellness.com"
                  className="w-full px-4 py-3 rounded-2xl border border-[#E4DFD3] bg-white text-xs focus:outline-none focus:border-[#3E4D3E]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#4A5844]">Password</label>
                <input
                  type="password"
                  required
                  defaultValue="••••••••••••"
                  className="w-full px-4 py-3 rounded-2xl border border-[#E4DFD3] bg-white text-xs focus:outline-none focus:border-[#3E4D3E]"
                />
              </div>

              <RollingButton
                type="submit"
                variant="dark"
                className="w-full !py-3.5"
              >
                SIGN IN TO PORTAL
              </RollingButton>
            </form>
          </div>
        </div>
      )}

      {/* BEGIN YOUR JOURNEY INTERACTIVE ONBOARDING MODAL */}
      {showJourneyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F9F7F2] rounded-3xl max-w-lg w-full p-8 border border-[#E4DFD3] space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A5844]">
                STEP {journeyStep} OF 2 • PERSONAL ALIGNMENT
              </span>
              <button onClick={() => setShowJourneyModal(false)} className="text-[#7E8C78] hover:text-[#1E2522]">
                <X className="w-4 h-4" />
              </button>
            </div>

            {journeyStep === 1 ? (
              <div className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl text-[#1E2522]">Where is your focus needed today?</h3>
                  <p className="text-xs text-[#7E8C78]">Select the domain where you feel most out of alignment.</p>
                </div>

                <div className="space-y-2">
                  {[
                    { id: 'mindfulness', label: 'Mental Clarity & Stress Disarmament', icon: ZenStonesIcon },
                    { id: 'nutrition', label: 'Holistic Gut Nutrition & Sustained Energy', icon: NutritionIcon },
                    { id: 'movement', label: 'Restorative Body Flow & Mobility', icon: LotusIcon },
                    { id: 'journaling', label: 'Emotional Reflection & Daily Purpose', icon: JournalLeafIcon },
                  ].map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setJourneyGoal(opt.id)}
                        className={`w-full p-4 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                          journeyGoal === opt.id
                            ? 'bg-[#3E4D3E] text-white border-[#3E4D3E]'
                            : 'bg-white text-[#1E2522] border-[#E4DFD3] hover:border-[#3E4D3E]'
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl ${journeyGoal === opt.id ? 'bg-white/20' : 'bg-[#F9F7F2]'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-medium">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>

                <RollingButton
                  type="button"
                  onClick={() => setJourneyStep(2)}
                  variant="dark"
                  className="w-full !py-3.5"
                >
                  CONTINUE TO CUSTOM PLAN
                </RollingButton>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl text-[#1E2522]">Your Custom Ritual is Prepared</h3>
                  <p className="text-xs text-[#7E8C78]">Based on your focus, your recommended starting practice:</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E4DFD3] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C59B58]">
                    RECOMMENDED STARTING TRACK
                  </span>
                  <h4 className="font-serif text-xl font-normal text-[#1E2522]">
                    {journeyGoal === 'mindfulness'
                      ? 'The 14-Day Mindfulness Awakening'
                      : journeyGoal === 'nutrition'
                      ? 'The Whole Gut Bio-Individual Reset'
                      : journeyGoal === 'movement'
                      ? 'Morning Somatic Flow & Posture Healing'
                      : 'The Evening Equilibrium Journal Practice'}
                  </h4>
                  <p className="text-xs text-[#4A5844]">
                    Includes personalized 1:1 onboarding, downloadable workbook, and companion guided audio.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setJourneyStep(1)}
                    className="w-1/3 py-3 rounded-full border border-[#E4DFD3] text-xs font-semibold text-[#1E2522]"
                  >
                    Back
                  </button>
                  <RollingButton
                    type="button"
                    onClick={() => {
                      setShowJourneyModal(false);
                      setJourneyStep(1);
                      alert('Your journey has begun! Welcome to Balance.');
                    }}
                    variant="sage"
                    className="w-2/3 !py-3"
                  >
                    START FREE TRIAL
                  </RollingButton>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
