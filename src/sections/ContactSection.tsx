import { ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import CTAButton from '../components/CTAButton';

const channels = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: 'Atención por mensaje',
    href: 'https://wa.me/5493571623675',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contacto@baratec.com.ar',
    href: 'mailto:contacto@baratec.com.ar',
  },
  {
    icon: MapPin,
    label: 'Fábrica',
    value: 'Calle Córdoba 115, Almafuerte (CP 5854), Córdoba — Argentina',
    href: 'https://maps.google.com/?q=Almafuerte+Cordoba+Argentina',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative px-6 md:px-12 py-24 md:py-32"
      style={{
        background:
          'radial-gradient(circle at 80% 0%, rgba(255,212,0,0.14) 0%, rgba(5,5,5,0) 55%), #050505',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-white/30" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/60">
              Contacto
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <FadeIn delay={0.1}>
              <h2
                className="brand-gradient font-black uppercase leading-[0.9] tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
              >
                Pedí tu
                <br />
                <span className="accent-gradient">cotización.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-white/65 font-light leading-relaxed text-base md:text-lg max-w-xl mt-8">
                Contanos qué auto manejás, en qué disciplina lo usás y qué buscás
                resolver. Te respondemos con la propuesta técnica y el
                presupuesto a medida.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-10">
                <CTAButton href="https://wa.me/5493571623675">
                  Escribir por WhatsApp <ArrowUpRight size={16} className="ml-1" />
                </CTAButton>
                <CTAButton variant="ghost" href="mailto:contacto@baratec.com.ar">
                  Enviar email
                </CTAButton>
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-3">
            {channels.map((c, i) => (
              <FadeIn key={c.label} delay={0.15 + i * 0.1}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-start gap-5 p-5 sm:p-6 rounded-2xl transition-colors"
                  style={{
                    backgroundColor: '#0E0E0E',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: '#FFD400',
                    }}
                  >
                    <c.icon size={20} color="#0A0A0A" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/45 mb-1">
                      {c.label}
                    </div>
                    <div className="text-white font-medium text-base sm:text-lg leading-snug break-words">
                      {c.value}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-white/40 group-hover:text-white transition-colors flex-shrink-0 mt-1"
                  />
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto mt-20 sm:mt-28 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-white/40" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div>© {new Date().getFullYear()} Baratec — Efrom Technology SA</div>
        <div>Almafuerte, Córdoba — Argentina</div>
      </footer>
    </section>
  );
}
