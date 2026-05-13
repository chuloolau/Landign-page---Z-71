import FadeIn from '../components/FadeIn';

const cases = [
  {
    src: '/silverado-azul.mp4',
    label: 'Z-71 Azul',
    description:
      'Kit Baratec instalado y entregado. Suspensión a punto para uso diario y campo.',
  },
  {
    src: '/silverado-gris.mp4',
    label: 'Z-71 Gris',
    description:
      'Probada en caminos rotos: el kit aguanta tierra, polvo y kilómetros reales.',
  },
  {
    src: '/silverado-roja.mp4',
    label: 'Z-71 Roja',
    description:
      'Kit completo delantero + trasero. Cada unidad matchada al modelo y con número de serie.',
  },
];

export default function CasosRealesSection() {
  return (
    <section
      id="casos"
      className="relative px-6 md:px-12 py-24 md:py-32 bg-bg-soft"
      style={{ backgroundColor: '#0F0F11' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-ink/30" />
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
                  Casos reales
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-display font-bold leading-[0.95] tracking-[-0.03em] text-ink"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
              >
                Instalado.<br />
                <span className="accent-gradient">Funcionando.</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-ink/60 max-w-md text-base leading-relaxed">
              No son renders. Son clientes reales saliendo del taller con el
              kit Baratec puesto y volviendo del campo después de kilómetros
              de uso intensivo.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {cases.map((c, i) => (
            <FadeIn key={c.src} delay={i * 0.1}>
              <article
                className="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] group"
                style={{ border: '1px solid rgba(242,242,240,0.08)' }}
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
                      className="font-mono text-[10px] uppercase tracking-[0.25em] font-medium px-3 py-1.5 rounded-full"
                      style={{ background: '#DDE227', color: '#0A0A0B' }}
                    >
                      {c.label}
                    </span>
                  </div>
                ) : null}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-ink/90 leading-snug text-sm sm:text-base">
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
