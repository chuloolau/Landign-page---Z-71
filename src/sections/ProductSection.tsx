import FadeIn from '../components/FadeIn';

const specs = [
  { label: 'Construcción', value: 'Cuerpo de aluminio anodizado' },
  { label: 'Reservorio nitrógeno externo', value: 'Garrafa flotante de alta capacidad' },
  { label: 'Vástago', value: 'Acero cromado rectificado' },
  { label: 'Regulación', value: 'Compresión + rebote' },
  { label: 'Aceite', value: 'Específico de competición' },
];

export default function ProductSection() {
  return (
    <section
      id="producto"
      className="relative px-6 md:px-12 py-24 md:py-32"
      style={{ backgroundColor: '#050505' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
        <FadeIn
          x={-30}
          y={0}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <div
            className="relative rounded-3xl overflow-hidden aspect-[4/5] w-full"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              background:
                'radial-gradient(circle at 30% 30%, rgba(255,212,0,0.12) 0%, rgba(5,5,5,0) 60%), #0A0A0A',
            }}
          >
            <img
              src="/producto.png"
              alt="Detalle del amortiguador Baratec High"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(5,5,5,0) 55%, rgba(5,5,5,0.75) 100%)',
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/60">
                  Modelo
                </span>
                <div className="text-white font-bold uppercase tracking-wider text-lg sm:text-2xl mt-1">
                  Baratec High
                </div>
              </div>
              <div
                className="px-3 py-1.5 rounded-full text-[10px] sm:text-xs uppercase tracking-widest font-medium"
                style={{
                  background: '#FFD400',
                  color: '#0A0A0A',
                }}
              >
                En stock
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn
          x={0}
          y={30}
          delay={0.15}
          className="lg:col-span-3 hidden lg:flex flex-col"
        >
          <div
            className="relative rounded-3xl overflow-hidden flex-1 min-h-[420px]"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              backgroundColor: '#0A0A0A',
            }}
          >
            <img
              src="/garrafa.jpg"
              alt="Reservorio externo Baratec con número de serie"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(5,5,5,0) 45%, rgba(5,5,5,0.85) 100%)',
              }}
            />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-1">
                Trazabilidad
              </div>
              <div className="text-white font-semibold text-base leading-tight">
                Cada unidad con su número de serie
              </div>
              <div className="text-white/65 text-xs mt-1">
                Industria argentina
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="lg:col-span-4 flex flex-col gap-7 justify-center">
          <FadeIn x={30} y={0}>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-white/30" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/60">
                Amortiguadores
              </span>
            </div>
          </FadeIn>

          <FadeIn x={30} y={0} delay={0.1}>
            <h2
              className="accent-gradient font-black uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}
            >
              High Performance.
            </h2>
          </FadeIn>

          <FadeIn x={30} y={0} delay={0.2}>
            <p className="text-white/70 font-light leading-relaxed text-base md:text-lg">
              Cuerpo de aluminio anodizado, vástago cromado y reservorio externo
              de nitrógeno — la "garrafa negra" — que mantiene el aceite estable
              bajo exigencia térmica. Cada unidad lleva su número de serie
              grabado en la base, para asegurar trazabilidad total y service
              durante toda su vida útil.
            </p>
          </FadeIn>

          <FadeIn x={30} y={0} delay={0.3}>
            <dl
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-5"
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
            >
              {specs.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <dt className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/45">
                    {s.label}
                  </dt>
                  <dd className="text-white font-medium text-sm sm:text-base">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>

        <FadeIn
          y={30}
          delay={0.15}
          className="lg:hidden col-span-full"
        >
          <div
            className="relative rounded-3xl overflow-hidden h-[260px]"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              backgroundColor: '#0A0A0A',
            }}
          >
            <img
              src="/garrafa.jpg"
              alt="Reservorio externo Baratec con número de serie"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(5,5,5,0) 35%, rgba(5,5,5,0.85) 100%)',
              }}
            />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-1">
                Trazabilidad
              </div>
              <div className="text-white font-semibold text-base">
                Cada unidad con su número de serie · Industria argentina
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
