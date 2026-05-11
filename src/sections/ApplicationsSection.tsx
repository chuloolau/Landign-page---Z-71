import FadeIn from '../components/FadeIn';

const applications = [
  {
    tag: '01',
    title: 'Campo',
    description:
      'Para pickups y camionetas de trabajo rural. Mantienen la altura y la respuesta del vehículo aun con carga, en caminos largos de campo y huellas marcadas.',
    image: '/campo.jpg',
  },
  {
    tag: '02',
    title: 'Tierra',
    description:
      'Diseñados para ripio, tierra suelta y baches. Disipación térmica del reservorio externo para tramos largos sin perder rendimiento.',
    image: '/tierra.png',
  },
  {
    tag: '03',
    title: 'Off road',
    description:
      'Para 4x4 preparadas, travesías y terreno extremo. Set-up robusto, regulables, listos para piedra, dunas y obstáculos exigentes.',
    image: '/offroad.jpg',
  },
];

export default function ApplicationsSection() {
  return (
    <section
      id="aplicaciones"
      className="relative px-6 md:px-12 py-24 md:py-32"
      style={{ backgroundColor: '#070707' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-white/30" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/60">
                  Aplicaciones
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="brand-gradient font-black uppercase leading-[0.95] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
              >
                Donde otros<br /> ya confían.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-white/60 font-light max-w-md text-sm md:text-base">
              Trabajamos con desarrollos específicos para cada disciplina. Si
              corrés en una categoría que no figura, escribinos: hacemos el
              set-up a medida.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {applications.map((app, i) => (
            <FadeIn key={app.tag} delay={i * 0.1}>
              <article
                className="relative rounded-3xl overflow-hidden h-[420px] sm:h-[460px] md:h-[520px] group"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <img
                  src={app.image}
                  alt={app.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(5,5,5,0) 30%, rgba(5,5,5,0.85) 100%)',
                  }}
                />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">
                    {app.tag} / Baratec
                  </span>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl mb-3">
                      {app.title}
                    </h3>
                    <p className="text-white/75 font-light leading-relaxed text-sm md:text-base max-w-md">
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
