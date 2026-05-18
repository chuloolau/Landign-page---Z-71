import {
  ArrowUpRight,
  Sparkle,
  Figma,
  Framer,
  Palette,
  PenTool,
  Layers,
  Type,
  Aperture,
  Chrome,
  Camera,
  Brush,
  Box,
  Wand2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const BACKGROUND_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4';
const RAISED_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4';

const ROW_1: LucideIcon[] = [
  Figma,
  Framer,
  Palette,
  PenTool,
  Layers,
  Type,
  Aperture,
  Chrome,
];
const ROW_2: LucideIcon[] = [
  Camera,
  Brush,
  Box,
  Wand2,
  Figma,
  Framer,
  Type,
  Layers,
];

function SectionLabel({
  children,
  align = 'center',
  variant = 'dark',
}: {
  children: React.ReactNode;
  align?: 'center' | 'start';
  variant?: 'dark' | 'light';
}) {
  return (
    <div
      className={`flex items-center gap-2 ${
        align === 'start' ? 'justify-start' : 'justify-center'
      }`}
    >
      <Sparkle
        className="h-3 w-3"
        style={{ color: '#DDE227' }}
        strokeWidth={1.5}
      />
      <span
        className={`font-mono uppercase tracking-[0.3em] text-[11px] ${
          variant === 'light' ? 'text-ink/55' : 'text-white/70'
        }`}
      >
        {children}
      </span>
      <Sparkle
        className="h-3 w-3"
        style={{ color: '#DDE227' }}
        strokeWidth={1.5}
      />
    </div>
  );
}

function MarqueeRow({
  icons,
  direction,
  variant = 'dark',
}: {
  icons: LucideIcon[];
  direction: 'left' | 'right';
  variant?: 'dark' | 'light';
}) {
  const items = [...icons, ...icons];
  const animClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex gap-3 w-max ${animClass}`}>
        {items.map((Icon, i) => (
          <div
            key={i}
            className={`h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
              variant === 'light' ? '' : 'liquid-glass'
            }`}
            style={
              variant === 'light'
                ? {
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(10,10,11,0.08)',
                    boxShadow: '0 1px 3px 0 rgba(10,10,11,0.05)',
                  }
                : undefined
            }
          >
            <Icon
              className={`h-5 w-5 md:h-6 md:w-6 ${
                variant === 'light' ? 'text-ink/70' : 'text-white/85'
              }`}
              strokeWidth={1.5}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <section className="relative w-full bg-bg text-ink antialiased px-4 sm:px-6 md:px-10 lg:px-14 py-16 md:py-24 lg:py-28">
      {/* Eyebrow */}
      <div className="max-w-7xl mx-auto flex items-center gap-3 mb-6">
        <div className="h-px w-10 bg-ink/30" />
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
          Features
        </span>
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-10 md:mb-14">
        <div className="max-w-3xl">
          <h2
            className="font-display font-bold leading-[0.95] tracking-[-0.03em] text-ink"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
          >
            Hi, I&apos;m{' '}
            <span className="accent-gradient">Max Reed!</span>
          </h2>
          <p className="mt-6 text-ink/65 leading-relaxed text-base md:text-lg max-w-2xl">
            A London-based independent creator shaping sharp visual systems,
            web-ready products, and story-first campaigns. With a decade of
            craft behind me, I help ideas move with focus and intention.
          </p>
        </div>
        <a
          href="#contacto"
          className="group relative inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-[0.18em] px-7 py-3 sm:px-8 sm:py-3.5 text-[11px] sm:text-xs transition-all duration-300 bg-accent hover:bg-accent-hover hover:scale-[1.03] text-ink cta-primary flex-shrink-0"
          style={{
            boxShadow:
              '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 12px 32px -8px rgba(221,226,39,0.45)',
          }}
        >
          Let&apos;s Team Up Today
        </a>
      </header>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {/* === Column 1 — BACKGROUND === */}
        <article className="relative rounded-2xl overflow-hidden bg-black min-h-[420px] lg:min-h-0 flex flex-col">
          <video
            src={BACKGROUND_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70 pointer-events-none" />
          <div className="relative z-10 flex flex-col h-full p-5 md:p-6">
            <div className="pt-1">
              <SectionLabel>Background</SectionLabel>
            </div>
            <div className="mt-auto">
              <div
                className="grid gap-x-3 gap-y-3 text-[12.5px] md:text-[13px] text-white/85"
                style={{ gridTemplateColumns: 'auto auto 1fr auto' }}
              >
                <span className="font-mono tracking-[0.05em] text-white/70">
                  2023-Now
                </span>
                <Sparkle
                  className="h-3 w-3 mt-1.5"
                  style={{ color: '#DDE227' }}
                  strokeWidth={1.5}
                />
                <span className="font-display font-semibold text-white">
                  Freelance Creative
                </span>
                <span className="font-mono text-white/55 text-right">
                  Solo Studio
                </span>

                <span className="font-mono tracking-[0.05em] text-white/70">
                  2020-2023
                </span>
                <Sparkle
                  className="h-3 w-3 mt-1.5"
                  style={{ color: '#DDE227' }}
                  strokeWidth={1.5}
                />
                <span className="font-display font-semibold text-white">
                  Head of Brand Design
                </span>
                <span className="font-mono text-white/55 text-right">
                  Rove Studio
                </span>

                <span className="font-mono tracking-[0.05em] text-white/70">
                  2017-2020
                </span>
                <Sparkle
                  className="h-3 w-3 mt-1.5"
                  style={{ color: '#DDE227' }}
                  strokeWidth={1.5}
                />
                <span className="font-display font-semibold text-white">
                  Visual Stylist
                </span>
                <span className="font-mono text-white/55 text-right">
                  Ember Works
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* === Column 2 — Client Voice + 10M+ === */}
        <div className="grid grid-rows-1 md:grid-rows-[auto_1fr] gap-4 md:gap-5">
          {/* Client Voice */}
          <article className="noise-overlay relative rounded-2xl overflow-hidden bg-[#324444] p-5 md:p-6">
            <div className="relative z-10">
              <SectionLabel align="start">Client Voice</SectionLabel>
              <p className="mt-4 font-display text-[13.5px] sm:text-sm leading-[1.6] text-white/90">
                &ldquo;Max reshaped our image with a degree of finesse and
                vision that surpassed what we&apos;d hoped for. The process
                felt graceful, and the outcomes speak for themselves.&rdquo;
              </p>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/65">
                <span className="text-white">Elena Brooks</span>
                {' · '}Creative Director — Halcyon
              </div>
            </div>
          </article>

          {/* 10M+ */}
          <article className="relative rounded-2xl overflow-hidden bg-black min-h-[300px] flex flex-col">
            <video
              src={RAISED_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full p-5 md:p-6">
              <div className="flex-1 flex items-center justify-center">
                <span
                  className="font-display font-bold tracking-[-0.04em] text-white text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-none"
                  style={{
                    filter: 'drop-shadow(0 2px 18px rgba(0,0,0,0.55))',
                  }}
                >
                  10M
                  <span className="accent-gradient">+</span>
                </span>
              </div>
              <div className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-white/75">
                Raised for startups
              </div>
            </div>
          </article>
        </div>

        {/* === Column 3 — Daily Software + Reach Me === */}
        <div className="grid grid-rows-1 md:grid-rows-[1fr_auto] gap-4 md:gap-5">
          {/* Silverado Z-71 — kit completo */}
          <article
            className="relative rounded-2xl overflow-hidden min-h-[320px] flex flex-col"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(10,10,11,0.08)',
            }}
          >
            <img
              src="/kit-completo.jpg"
              alt="Kit completo Baratec Z-71 — 2 delanteros + 2 traseros con reservorio externo"
              className="absolute inset-0 w-full h-full object-contain p-6"
              loading="lazy"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 100%)',
              }}
            />
            <div className="relative z-10 flex flex-col h-full p-5 md:p-6 gap-4">
              <div>
                <SectionLabel variant="light">Silverado Z-71</SectionLabel>
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <MarqueeRow icons={ROW_1} direction="left" variant="light" />
                <MarqueeRow icons={ROW_2} direction="right" variant="light" />
              </div>
            </div>
          </article>

          {/* Reach Me */}
          <article className="noise-overlay relative rounded-2xl overflow-hidden bg-[#324444] p-5 md:p-6">
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <SectionLabel align="start">Reach Me</SectionLabel>
                <div className="mt-4 space-y-2">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/55 mb-0.5">
                      Email
                    </div>
                    <a
                      href="mailto:hi@maxreed.com"
                      className="font-display text-white text-[14px] sm:text-[15px] hover:text-accent transition-colors"
                    >
                      hi@maxreed.com
                    </a>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/55 mb-0.5">
                      Phone
                    </div>
                    <a
                      href="tel:+442078163"
                      className="font-display text-white text-[14px] sm:text-[15px] hover:text-accent transition-colors"
                    >
                      +44 207 81 63
                    </a>
                  </div>
                </div>
              </div>
              <button
                type="button"
                aria-label="Open contact"
                className="h-9 w-9 rounded-full flex items-center justify-center transition-all hover:scale-110 flex-shrink-0"
                style={{
                  background: '#DDE227',
                  boxShadow: '0 4px 12px -2px rgba(221,226,39,0.4)',
                }}
              >
                <ArrowUpRight
                  className="h-4 w-4"
                  color="#0A0A0B"
                  strokeWidth={2.2}
                />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
