import FadeIn from '../components/FadeIn';

const applications = [
  {
    tag: '01',
    title: 'Campo',
    description:
      'Para pickups y camionetas de trabajo rural. Mantienen la altura y la respuesta del vehículo aun con carga, en caminos largos y huellas marcadas.',
    image: '/2026-slld-ext-gal-05.avif',
  },
  {
    tag: '02',
    title: 'Tierra',
    description:
      'Diseñados para ripio, tierra suelta y baches. Disipación térmica del reservorio externo para tramos largos sin perder rendimiento.',
    image: '/2026-slld-ext-gal-20.avif',
  },
  {
    tag: '03',
    title: 'Off road',
    description:
      'Para 4×4 preparadas, travesías y terreno extremo. Set-up robusto, regulable, listo para piedra, dunas y obstáculos exigentes.',
    image: '/2026-slld-tow-03-v2.avif',
  },
];

export default function ApplicationsSection() {
  return (
    <section
      id="aplicaciones"
      className="relative px-6 md:px-12 py-24 md:py-32 bg-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-ink/30" />
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
                  Aplicaciones
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-display font-bold leading-[0.95] tracking-[-0.03em] text-ink"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
              >
                Donde otros<br /> <span className="accent-gradient">ya confían.</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-ink/60 max-w-md text-base leading-relaxed">
              Desarrollos específicos para cada disciplina. Si corrés en una
              categoría que no figura, escribinos: hacemos el set-up a medida.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {applications.map((app, i) => (
            <FadeIn key={app.tag} delay={i * 0.1}>
              <article
                className="relative rounded-2xl overflow-hidden h-[420px] sm:h-[460px] md:h-[520px] group cursor-pointer transition-all duration-500 hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(10,10,11,0.08)',
                  boxShadow: '0 1px 0 0 rgba(10,10,11,0.03)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(221,226,39,0.6)';
                  e.currentTarget.style.boxShadow =
                    '0 18px 40px -16px rgba(10,10,11,0.35), 0 0 0 1px rgba(221,226,39,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(10,10,11,0.08)';
                  e.currentTarget.style.boxShadow =
                    '0 1px 0 0 rgba(10,10,11,0.03)';
                }}
              >
                <img
                  src={app.image}
                  alt={app.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(10,10,11,0) 30%, rgba(10,10,11,0.92) 100%)',
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 80% 100%, rgba(221,226,39,0.22) 0%, rgba(10,10,11,0) 55%)',
                  }}
                />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/75 transition-colors duration-300 group-hover:text-[#DDE227]">
                    {app.tag} / Baratec
                  </span>
                  <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
                    <h3 className="font-display font-bold text-white tracking-[-0.02em] text-3xl sm:text-4xl md:text-5xl mb-3">
                      {app.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-md transition-colors duration-300 group-hover:text-white/95">
                      {app.description}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
