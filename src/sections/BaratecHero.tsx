import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { animate, stagger, splitText } from 'animejs';
import FadeIn from '../components/FadeIn';
import CTAButton from '../components/CTAButton';

const WHATSAPP_HREF =
  'https://wa.me/5493571623675?text=' +
  encodeURIComponent(
    'Hola, quiero cotizar un kit Baratec para Silverado Z-71.',
  );

export default function BaratecHero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const charsRef = useRef<HTMLElement[]>([]);
  const playingRef = useRef(false);

  const playStagger = () => {
    if (playingRef.current) return;
    if (!charsRef.current.length) return;
    playingRef.current = true;

    // reset to starting position so re-play is visible
    charsRef.current.forEach((c) => {
      c.style.transform = 'translateY(75%)';
    });

    const anim = animate(charsRef.current, {
      y: ['75%', '0%'],
      duration: 750,
      ease: 'out(3)',
      delay: stagger(50),
      onComplete: () => {
        playingRef.current = false;
      },
    });
    return anim;
  };

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const originalHTML = el.innerHTML;

    const { chars } = splitText(el, {
      chars: { wrap: 'clip' },
    });
    charsRef.current = chars as unknown as HTMLElement[];

    playStagger();

    return () => {
      playingRef.current = false;
      charsRef.current = [];
      el.innerHTML = originalHTML;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col w-full overflow-hidden bg-bg">
      <img
        src="/2026-slld-ext-gal-20.avif"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '50% 50%' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(221,226,39,0.18) 0%, rgba(250,250,247,0) 55%)',
        }}
      />

      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8">
        <a href="#" className="flex items-center" aria-label="Baratec">
          <img
            src="/logo-b.png"
            alt="Baratec"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#producto"
            className="text-[11px] uppercase tracking-[0.2em] text-ink/60 hover:text-ink transition-colors"
          >
            Producto
          </a>
          <a
            href="#linea"
            className="text-[11px] uppercase tracking-[0.2em] text-ink/60 hover:text-ink transition-colors"
          >
            Z-71
          </a>
          <a
            href="#casos"
            className="text-[11px] uppercase tracking-[0.2em] text-ink/60 hover:text-ink transition-colors"
          >
            Casos
          </a>
          <a
            href="#aplicaciones"
            className="text-[11px] uppercase tracking-[0.2em] text-ink/60 hover:text-ink transition-colors"
          >
            Aplicaciones
          </a>
        </div>
        <CTAButton
          variant="ghost"
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer noopener"
        >
          Cotizar
        </CTAButton>
      </nav>

      <div className="relative z-10 flex-1 flex flex-col items-start justify-center pl-2 md:pl-4 pr-6 md:pr-12 max-w-7xl mx-auto w-full pt-16 pb-20 sm:pb-24 md:pb-28">
        <FadeIn delay={0.1} y={20}>
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="h-px w-10 bg-ink/40" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">
              Amortiguadores · Industria Argentina
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} y={40}>
          <h1
            ref={titleRef}
            onMouseEnter={playStagger}
            onClick={playStagger}
            className="font-display font-bold leading-[0.92] tracking-[-0.04em] text-white text-left cursor-pointer select-none"
            style={{ fontSize: 'clamp(3.25rem, 10.5vw, 9.5rem)' }}
          >
            BARATEC
            <br />
            <span className="accent-gradient">Cambia tu manera de andar.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.45} y={20}>
          <p
            className="mt-8 sm:mt-10 text-ink/70 max-w-2xl leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.3vw, 1.25rem)' }}
          >
            Amortiguadores con reservorio externo de nitrógeno, regulables y
            trazables por número de serie. Desarrollados en Almafuerte.
          </p>
        </FadeIn>

        <FadeIn delay={0.6} y={20}>
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-3 sm:gap-4">
            <CTAButton href="#linea">
              Ver el Z-71
              <ArrowRight size={14} className="ml-2" strokeWidth={2.5} />
            </CTAButton>
            <CTAButton
              variant="ghost"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer noopener"
            >
              Pedir cotización
            </CTAButton>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ink/40">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-ink/40 to-transparent" />
      </div>
    </section>
  );
}
