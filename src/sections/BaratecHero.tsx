import FadeIn from '../components/FadeIn';
import CTAButton from '../components/CTAButton';

const navLinks = [
  { label: 'Producto', href: '#producto' },
  { label: 'Z-71', href: '#linea' },
  { label: 'Aplicaciones', href: '#aplicaciones' },
  { label: 'Contacto', href: '#contacto' },
];

export default function BaratecHero() {
  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        src="/baratec.mp4"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.25) 35%, rgba(5,5,5,0.85) 100%)',
        }}
      />

      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8"
      >
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <CTAButton variant="ghost" className="ml-auto">
          Cotizar
        </CTAButton>
      </FadeIn>

      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 pb-10 sm:pb-12 md:pb-20">
        <FadeIn delay={0.2} y={20}>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="h-px w-10 sm:w-14 bg-white/40" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/70">
              Amortiguadores OFF-ROAD
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} y={40}>
          <h1
            className="brand-gradient font-black uppercase leading-[0.85] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 14vw, 18rem)' }}
          >
            Baratec
          </h1>
        </FadeIn>

        <FadeIn delay={0.45} y={20}>
          <div className="mt-6 sm:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12">
            <p
              className="text-white/80 font-light leading-snug max-w-xl"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.35rem)' }}
            >
              Nuevo desarrollo de amortiguadores con reservorio externo,
              desarrollados y fabricados en Argentina para off-road, campo y
              uso deportivo intensivo.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <CTAButton href="#producto">
                Ver producto
              </CTAButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
