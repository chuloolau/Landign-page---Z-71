import FadeIn from '../components/FadeIn';

const cases = [
  {
    src: '/cliente-4375.mp4',
    label: 'Llegada',
    description: 'Silverado LT con kit Baratec instalado, listo para entrega.',
  },
  {
    src: '/cliente-4376.mp4',
    label: 'Silverado',
    description:
      'La camioneta vuelve del campo: el kit aguanta tierra, polvo y kilómetros reales.',
  },
  {
    src: '/cliente-4377.mp4',
    label: '',
    description:
      'Cada unidad va matchada al modelo y se entrega con número de serie.',
  },
];

export default function CasosRealesSection() {
  return (
    <section
      id="casos"
      className="relative px-6 md:px-12 py-24 md:py-32"
      style={{ backgroundColor: '#050505' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 sm:mb-20">
          <FadeIn delay={0.1}>
            <h2
              className="brand-gradient font-black uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
            >
              Instalación.<br />
              <span className="accent-gradient">Baratec.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/65 font-light max-w-md text-sm md:text-base">
              No son renders. Son clientes reales con sus camionetas saliendo del
              taller con el kit Baratec puesto y volviendo del campo después
              de kilómetros de uso intensivo.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cases.map((c, i) => (
            <FadeIn key={c.src} delay={i * 0.1}>
              <article
                className="relative rounded-3xl overflow-hidden bg-black aspect-[9/16] group"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={c.src}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.85) 100%)',
                  }}
                />
                {c.label ? (
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-[10px] uppercase tracking-[0.3em] font-medium px-3 py-1.5 rounded-full"
                      style={{ background: '#FFD400', color: '#0A0A0A' }}
                    >
                      {c.label}
                    </span>
                  </div>
                ) : null}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white/90 font-light leading-snug text-sm sm:text-base">
                    {c.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
