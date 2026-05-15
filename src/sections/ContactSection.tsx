import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import CTAButton from '../components/CTAButton';
import WhatsAppIcon from '../components/WhatsAppIcon';

const WHATSAPP_HREF =
  'https://wa.me/5493571623675?text=' +
  encodeURIComponent(
    'Hola, quiero cotizar un kit Baratec para Silverado Z-71.',
  );

type Channel = {
  kind: 'svg' | 'img';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  iconBg: string;
  iconPad?: string;
  label: string;
  value: string;
  href: string;
};

const channels: Channel[] = [
  {
    kind: 'svg',
    icon: WhatsAppIcon,
    iconBg: '#25D366',
    label: 'WhatsApp',
    value: 'Cotización directa',
    href: WHATSAPP_HREF,
  },
  {
    kind: 'img',
    icon: '/logo-gmail.png',
    iconBg: '#FFFFFF',
    iconPad: '7px',
    label: 'Email',
    value: 'baratec@baratec.com',
    href: 'mailto:baratec@baratec.com',
  },
  {
    kind: 'img',
    icon: '/logo-maps.png',
    iconBg: '#FFFFFF',
    iconPad: '6px',
    label: 'Fábrica',
    value: 'Calle Córdoba 115, Almafuerte (CP 5854), Córdoba — Argentina',
    href: 'https://maps.google.com/?q=Calle+Cordoba+115+Almafuerte+Cordoba+Argentina',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative px-6 md:px-12 py-24 md:py-32"
      style={{
        background:
          'radial-gradient(circle at 75% 0%, rgba(221,226,39,0.18) 0%, rgba(250,250,247,0) 55%), #FAFAF7',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-ink/30" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
              Contacto
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <FadeIn delay={0.1}>
              <h2
                className="font-display font-bold leading-[0.92] tracking-[-0.04em] text-ink"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
              >
                Pedí tu<br />
                <span className="accent-gradient">cotización.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-ink/65 leading-relaxed text-base md:text-lg max-w-xl mt-8">
                Contanos qué auto manejás, en qué disciplina lo usás y qué
                buscás resolver. Te respondemos con la propuesta técnica y el
                presupuesto a medida.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-10">
                <CTAButton
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Escribir por WhatsApp
                  <ArrowUpRight size={14} className="ml-2" strokeWidth={2.5} />
                </CTAButton>
                <CTAButton variant="ghost" href="mailto:baratec@baratec.com">
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
                  className="group flex items-start gap-5 p-5 sm:p-6 rounded-2xl transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(10,10,11,0.08)',
                    boxShadow: '0 1px 0 0 rgba(10,10,11,0.03)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 overflow-hidden"
                    style={{ background: c.iconBg, padding: c.iconPad }}
                  >
                    {c.kind === 'svg' ? (
                      <c.icon size={20} color="#FFFFFF" />
                    ) : (
                      <img
                        src={c.icon}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/45 mb-1.5">
                      {c.label}
                    </div>
                    <div className="text-ink font-medium text-base sm:text-lg leading-snug break-words">
                      {c.value}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-ink/35 group-hover:text-ink transition-colors flex-shrink-0 mt-1"
                  />
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <footer
        className="max-w-7xl mx-auto mt-20 sm:mt-28 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ borderTop: '1px solid rgba(10,10,11,0.10)' }}
      >
        <div className="font-display font-bold uppercase tracking-[0.25em] text-ink text-sm">
          Baratec
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40">
          © {new Date().getFullYear()} · Efrom Technology SA · Almafuerte, Córdoba — Argentina
        </div>
      </footer>
    </section>
  );
}
