import FadeIn from '../components/FadeIn';
import ParallaxBlock from '../components/ParallaxBlock';

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
      className="relative px-6 md:px-12 py-24 md:py-32"
      style={{ backgroundColor: '#F2F2EF' }}
    >
      <ParallaxBlock className="max-w-7xl mx-auto" range={50}>
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
                className="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] group cursor-pointer transition-all duration-500 hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(10,10,11,0.08)',
                  boxShadow: '0 1px 0 0 rgba(10,10,11,0.03)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(221,226,39,0.6)';
                  e.currentTarget.style.boxShadow =
                    '0 18px 40px -16px rgba(10,10,11,0.4), 0 0 0 1px rgba(221,226,39,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(10,10,11,0.08)';
                  e.currentTarget.style.boxShadow =
                    '0 1px 0 0 rgba(10,10,11,0.03)';
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                  src={c.src}
                />
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-90"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.85) 100%)',
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 100%, rgba(221,226,39,0.2) 0%, rgba(0,0,0,0) 55%)',
                  }}
                />
                {c.label ? (
                  <div className="absolute top-4 left-4 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.25em] font-medium px-3 py-1.5 rounded-full"
                      style={{ background: '#DDE227', color: '#0A0A0B' }}
                    >
                      {c.label}
                    </span>
                  </div>
                ) : null}
                <div className="absolute bottom-5 left-5 right-5 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <p className="text-white/90 leading-snug text-sm sm:text-base transition-colors duration-300 group-hover:text-white">
                    {c.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </ParallaxBlock>
    </section>
  );
}
