import { ArrowUpRight, Clock, ShieldCheck, MessageCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ParallaxBlock from '../components/ParallaxBlock';
import WhatsAppIcon from '../components/WhatsAppIcon';

const WHATSAPP_HREF =
  'https://wa.me/5493571623675?text=' +
  encodeURIComponent(
    'Hola, quiero cotizar un kit Baratec para Silverado Z-71.',
  );

const trustItems = [
  { icon: Clock, label: 'Respondemos en el día' },
  { icon: ShieldCheck, label: 'Sin compromiso' },
  { icon: MessageCircle, label: 'Asesoría técnica' },
];

const secondaryChannels = [
  {
    icon: '/logo-gmail.png',
    iconPad: '7px',
    label: 'Email',
    value: 'baratec@baratec.com',
    href: 'mailto:baratec@baratec.com',
  },
  {
    icon: '/logo-maps.png',
    iconPad: '6px',
    label: 'Fábrica',
    value: 'Calle Córdoba 115, Almafuerte — Córdoba',
    href: 'https://maps.google.com/?q=Calle+Cordoba+115+Almafuerte+Cordoba+Argentina',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative px-6 md:px-12 py-24 md:py-32 bg-white"
    >
      <ParallaxBlock className="max-w-7xl mx-auto" range={50}>
        {/* Header — eyebrow + título centrado */}
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-ink/30" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
              Contacto
            </span>
            <div className="h-px w-10 bg-ink/30" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="font-display font-black uppercase leading-[0.92] tracking-[-0.02em] text-ink text-center max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            Pedí tu <span className="accent-gradient">cotización.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-ink/65 leading-relaxed text-base md:text-lg max-w-2xl mx-auto mt-7 text-center">
            Contanos qué auto manejás, en qué disciplina lo usás y qué buscás
            resolver. Te respondemos con la propuesta técnica y el presupuesto
            a medida.
          </p>
        </FadeIn>

        {/* Trust chips — refuerzan confianza para que pidan presupuesto */}
        <FadeIn delay={0.3}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {trustItems.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: '#DDE227',
                    border: '1px solid rgba(10,10,11,0.10)',
                    boxShadow:
                      '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 4px 12px -4px rgba(221,226,39,0.45)',
                  }}
                >
                  <Icon
                    size={14}
                    strokeWidth={2}
                    style={{ color: '#0A0A0B' }}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink font-semibold">
                    {t.label}
                  </span>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* CTA primario — WhatsApp gigante, claro y dominante */}
        <FadeIn delay={0.4}>
          <div className="mt-12 sm:mt-14 max-w-3xl mx-auto">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative flex items-center justify-between gap-4 sm:gap-6 p-5 sm:p-7 rounded-3xl transition-all hover:-translate-y-1"
              style={{
                backgroundColor: '#0A0A0B',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow:
                  '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 28px 60px -16px rgba(0,0,0,0.5)',
              }}
            >
              <div
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden flex-shrink-0 transition-transform group-hover:scale-105"
                style={{ backgroundColor: '#DDE227' }}
              >
                <video
                  src="/efecto-conversacion.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/55 mb-1">
                  WhatsApp · Respuesta directa
                </div>
                <div className="font-display font-bold text-white text-xl sm:text-2xl md:text-3xl leading-tight">
                  Escribir y cotizar
                </div>
              </div>
              <span
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: '#25D366',
                  boxShadow: '0 4px 16px -2px rgba(37,211,102,0.45)',
                }}
              >
                <WhatsAppIcon size={22} color="#FFFFFF" />
              </span>
            </a>
          </div>
        </FadeIn>

        {/* Canales secundarios + stat — grilla 3 columnas */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Email */}
          <FadeIn delay={0.5}>
            <a
              href={secondaryChannels[0].href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-start gap-4 p-5 sm:p-6 rounded-2xl h-full transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: '#0A0A0B',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 1px 0 0 rgba(255,255,255,0.04) inset',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  padding: secondaryChannels[0].iconPad,
                }}
              >
                <img
                  src={secondaryChannels[0].icon}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55 mb-1.5">
                  {secondaryChannels[0].label}
                </div>
                <div className="text-white font-medium text-base leading-snug break-words">
                  {secondaryChannels[0].value}
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-white/55 group-hover:text-white transition-colors flex-shrink-0 mt-1"
              />
            </a>
          </FadeIn>

          {/* Fábrica */}
          <FadeIn delay={0.6}>
            <a
              href={secondaryChannels[1].href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-start gap-4 p-5 sm:p-6 rounded-2xl h-full transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: '#0A0A0B',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 1px 0 0 rgba(255,255,255,0.04) inset',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  padding: secondaryChannels[1].iconPad,
                }}
              >
                <img
                  src={secondaryChannels[1].icon}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55 mb-1.5">
                  {secondaryChannels[1].label}
                </div>
                <div className="text-white font-medium text-base leading-snug break-words">
                  {secondaryChannels[1].value}
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-white/55 group-hover:text-white transition-colors flex-shrink-0 mt-1"
              />
            </a>
          </FadeIn>

          {/* Stat — +10 años Fabricando en Argentina */}
          <FadeIn delay={0.7}>
            <article
              className="relative overflow-hidden rounded-2xl h-full min-h-[140px] flex flex-col justify-between p-5 sm:p-6"
              style={{
                backgroundColor: '#0A0A0B',
                border: '1px solid rgba(221,226,39,0.45)',
                boxShadow:
                  '0 1px 0 0 rgba(255,255,255,0.08) inset, 0 0 0 1px rgba(221,226,39,0.15), 0 18px 40px -12px rgba(221,226,39,0.30)',
              }}
            >
              <video
                src="/hero-rotaviva.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover opacity-55"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.75) 100%)',
                }}
              />
              <div className="relative z-10 flex items-baseline gap-2">
                <span
                  className="font-display font-bold text-white text-4xl sm:text-5xl tracking-[-0.04em] leading-none"
                  style={{ filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.5))' }}
                >
                  +10
                </span>
                <span className="font-display font-bold accent-gradient text-2xl sm:text-3xl tracking-[-0.03em] leading-none">
                  años
                </span>
              </div>
              <div className="relative z-10 font-mono text-[10px] uppercase tracking-[0.3em] text-white/75 mt-3">
                Fabricando en Argentina
              </div>
            </article>
          </FadeIn>
        </div>
      </ParallaxBlock>

      <footer
        className="max-w-7xl mx-auto mt-20 sm:mt-28 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ borderTop: '1px solid rgba(10,10,11,0.10)' }}
      >
        <div className="font-display font-bold uppercase tracking-[0.25em] text-ink text-sm">
          Baratec
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40">
          © {new Date().getFullYear()} · Efrom Technology SA · Almafuerte,
          Córdoba — Argentina
        </div>
      </footer>
    </section>
  );
}
