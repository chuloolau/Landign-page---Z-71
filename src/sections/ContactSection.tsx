import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ParallaxBlock from '../components/ParallaxBlock';

const WHATSAPP_HREF =
  'https://wa.me/5493571623675?text=' +
  encodeURIComponent(
    'Hola, quiero cotizar un kit Baratec para Silverado Z-71.',
  );
const SHOP_URL =
  'https://baratecamortiguadores.mitiendanube.com/productos/kitx4-amortiguadores-baratec-s10-2012-high-performance-copia/';

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative px-6 md:px-12 py-24 md:py-32 bg-white"
    >
      <ParallaxBlock className="max-w-7xl mx-auto" range={50}>
        {/* Header centrado */}
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-ink/30" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
              Llev&aacute; tu Z-71
            </span>
            <div className="h-px w-10 bg-ink/30" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="font-display font-black uppercase leading-[0.92] tracking-[-0.02em] text-ink text-center max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            Ped&iacute; tu <span className="accent-gradient">kit.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-ink/65 leading-relaxed text-base md:text-lg max-w-xl mx-auto mt-6 text-center">
            Compr&aacute; directo en la tienda online o cotiz&aacute; por
            WhatsApp con asesor&iacute;a t&eacute;cnica.
          </p>
        </FadeIn>

        {/* 2 acciones primarias side-by-side */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Card 1 — Tienda online */}
          <FadeIn delay={0.3}>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative block rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1"
              style={{
                backgroundColor: '#0A0A0B',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 28px 60px -16px rgba(221,226,39,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden flex-shrink-0">
                <img
                  src="/tablet-tienda.jpg"
                  alt="Tienda online Baratec en tablet"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
              </div>
              <div className="relative p-6 sm:p-8 flex flex-col flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55 mb-2">
                  Tienda online
                </div>
                <div className="font-display font-bold text-white tracking-tight text-2xl sm:text-3xl leading-tight mb-3">
                  Compr&aacute; tu kit
                </div>
                <div className="text-white/65 text-sm leading-snug mb-6">
                  Cat&aacute;logo completo, pago seguro y env&iacute;o a todo
                  el pa&iacute;s.
                </div>
                <div className="mt-auto inline-flex items-center gap-2 self-start rounded-full font-bold uppercase tracking-[0.18em] px-6 py-3 text-[11px] sm:text-xs transition-all duration-300 bg-accent group-hover:bg-accent-hover group-hover:scale-[1.03] text-ink cta-primary"
                  style={{
                    boxShadow:
                      '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 12px 32px -8px rgba(221,226,39,0.45)',
                  }}
                >
                  Comprar online
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </div>
              </div>
            </a>
          </FadeIn>

          {/* Card 2 — WhatsApp directo */}
          <FadeIn delay={0.4}>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative block rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1"
              style={{
                backgroundColor: '#0A0A0B',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 28px 60px -16px rgba(221,226,39,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden flex-shrink-0" style={{ backgroundColor: '#0A0A0B' }}>
                <video
                  src="/hero-rotaviva.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)',
                  }}
                />
              </div>
              <div className="relative p-6 sm:p-8 flex flex-col flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55 mb-2">
                  WhatsApp &middot; Asesor&iacute;a directa
                </div>
                <div className="font-display font-bold text-white tracking-tight text-2xl sm:text-3xl leading-tight mb-3">
                  Cotiz&aacute; con un asesor
                </div>
                <div className="text-white/65 text-sm leading-snug mb-6">
                  Respuesta en el d&iacute;a. Sin compromiso. Te armamos el
                  setup a medida.
                </div>
                <div
                  className="mt-auto inline-flex items-center gap-2 self-start rounded-full font-bold uppercase tracking-[0.18em] px-6 py-3 text-[11px] sm:text-xs transition-all duration-300 bg-accent group-hover:bg-accent-hover group-hover:scale-[1.03] text-ink cta-primary"
                  style={{
                    boxShadow:
                      '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 12px 32px -8px rgba(221,226,39,0.55)',
                  }}
                >
                  Escribir por WhatsApp
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </div>
              </div>
            </a>
          </FadeIn>
        </div>

        {/* Info secundaria minimalista */}
        <FadeIn delay={0.5}>
          <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-center">
            <a
              href="mailto:baratec@baratec.com"
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55 hover:text-ink transition-colors"
            >
              baratec@baratec.com
            </a>
            <span className="hidden sm:inline text-ink/20">&middot;</span>
            <a
              href="https://maps.google.com/?q=Calle+Cordoba+115+Almafuerte+Cordoba+Argentina"
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55 hover:text-ink transition-colors"
            >
              Almafuerte, C&oacute;rdoba
            </a>
          </div>
        </FadeIn>
      </ParallaxBlock>

      <footer
        className="max-w-7xl mx-auto mt-20 sm:mt-28 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ borderTop: '1px solid rgba(10,10,11,0.10)' }}
      >
        <div className="font-display font-bold uppercase tracking-[0.25em] text-ink text-sm">
          Baratec
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40">
          &copy; {new Date().getFullYear()} &middot; Efrom Technology SA
          &middot; Almafuerte, C&oacute;rdoba &mdash; Argentina
        </div>
      </footer>
    </section>
  );
}
