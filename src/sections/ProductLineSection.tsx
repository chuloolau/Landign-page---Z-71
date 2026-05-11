import FadeIn from '../components/FadeIn';

export default function ProductLineSection() {
  return (
    <section
      id="linea"
      className="relative px-6 md:px-12 py-24 md:py-32"
      style={{ backgroundColor: '#070707' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 sm:mb-20">
          <FadeIn delay={0.1}>
            <h2
              className="brand-gradient font-black uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
            >
              Silverado Z-71<br />
              <span className="accent-gradient">High Performance.</span>
            </h2>
          </FadeIn>
        </div>

        <FadeIn className="mb-5 md:mb-6">
          <article
            className="relative rounded-3xl overflow-hidden bg-white aspect-[16/9] sm:aspect-[21/9] w-full"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              src="/silverado-studio.mp4"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.55) 100%)',
              }}
            />
            <div className="absolute top-5 left-5 sm:top-6 sm:left-6">
              <span
                className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium px-3 py-1.5 rounded-full"
                style={{ background: '#FFD400', color: '#0A0A0A' }}
              >
                Nuevo · Desarrollo
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-end gap-4">
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/85 mb-1">
                  Vehículo objetivo
                </div>
                <div className="text-white font-bold uppercase tracking-tight text-xl sm:text-2xl md:text-3xl">
                  Chevrolet Silverado Z-71 2025
                </div>
              </div>
            </div>
          </article>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          <FadeIn x={-30} y={0} className="lg:col-span-7">
            <article
              className="relative rounded-3xl overflow-hidden h-[440px] sm:h-[520px] lg:h-[640px] bg-white"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <img
                src="/kit-completo.jpg"
                alt="Kit completo Baratec — delanteros y traseros"
                className="absolute inset-0 w-full h-full object-contain p-6 sm:p-10"
                loading="lazy"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5) 100%)',
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
                <div className="text-white font-bold uppercase tracking-tight text-2xl sm:text-3xl">
                  Kit completo
                </div>
                <div
                  className="px-3 py-1.5 rounded-full text-[10px] sm:text-xs uppercase tracking-widest font-medium"
                  style={{ background: '#FFD400', color: '#0A0A0A' }}
                >
                  Industria argentina
                </div>
              </div>
            </article>
          </FadeIn>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 md:gap-6">
            <FadeIn x={30} y={0} delay={0.1}>
              <article
                className="relative rounded-3xl overflow-hidden h-[280px] sm:h-[300px] lg:h-[308px] bg-white"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <img
                  src="/traseros.jpg"
                  alt="Amortiguadores traseros con reservorio externo"
                  className="absolute inset-0 w-full h-full object-contain p-5 sm:p-6"
                  loading="lazy"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.55) 100%)',
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-white font-bold uppercase tracking-tight text-xl sm:text-2xl">
                    Trasero
                  </div>
                </div>
              </article>
            </FadeIn>

            <FadeIn x={30} y={0} delay={0.2}>
              <article
                className="relative rounded-3xl overflow-hidden h-[280px] sm:h-[300px] lg:h-[308px] bg-white"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <img
                  src="/delanteros.jpg"
                  alt="Amortiguadores delanteros tipo strut Baratec"
                  className="absolute inset-0 w-full h-full object-contain p-5 sm:p-6"
                  loading="lazy"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.55) 100%)',
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-white font-bold uppercase tracking-tight text-xl sm:text-2xl">
                    Delantero
                  </div>
                </div>
              </article>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
