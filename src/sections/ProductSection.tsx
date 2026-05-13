import { useEffect, useRef } from 'react';
import { animate, waapi, cubicBezier, spring } from 'animejs';
import FadeIn from '../components/FadeIn';

function EasingsDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const runAnimations = () => {
    const root = containerRef.current;
    if (!root) return;

    const sq1 = root.querySelector('.row:nth-child(1) .square') as HTMLElement | null;
    const sq2 = root.querySelector('.row:nth-child(2) .square') as HTMLElement | null;
    const sq3 = root.querySelector('.row:nth-child(3) .square') as HTMLElement | null;
    const spinner = root.querySelector('#curve-spinner');

    // medir el ancho del track real (el padre del square) — translateX(100%) sería del propio square, no nos sirve
    const trackWidth = sq1?.parentElement?.clientWidth ?? 240;
    const squareSize = sq1?.clientWidth ?? 24;
    const travel = trackWidth - squareSize; // pixels reales

    if (sq1) {
      animate(sq1, {
        x: travel,
        rotate: 360,
        duration: 1400,
        ease: 'out(3)',
      });
    }
    if (sq2) {
      animate(sq2, {
        x: travel,
        rotate: 360,
        duration: 1400,
        ease: cubicBezier(0.7, 0.1, 0.5, 0.9),
      });
    }
    if (sq3) {
      waapi.animate(sq3, {
        x: travel,
        rotate: 360,
        duration: 1400,
        ease: spring({ bounce: 0.35 }),
      });
      // Pulso extra de scale sobre la fila 3 (Off-road)
      animate(sq3, {
        scale: [1, 0.5, 1],
        duration: 1200,
        delay: 1500,
        ease: 'inOutSine',
      });
    }
    // Spinner decorativo rotando 1 turn
    if (spinner) {
      animate(spinner as HTMLElement, {
        rotate: '1turn',
        duration: 2400,
        ease: 'inOutCubic',
      });
    }
  };

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let armed = true;
    let timeoutId: number | undefined;

    const fire = () => {
      if (!armed || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      if (visible) {
        armed = false;
        timeoutId = window.setTimeout(() => runAnimations(), 120);
        window.removeEventListener('scroll', fire);
      }
    };

    window.requestAnimationFrame(() => fire());
    window.addEventListener('scroll', fire, { passive: true });

    return () => {
      armed = false;
      if (timeoutId) window.clearTimeout(timeoutId);
      window.removeEventListener('scroll', fire);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rows = [
    { label: 'Estándar', ease: 'ease · out(3)' },
    { label: 'Sport', ease: 'cubic-bezier' },
    { label: 'Off-road', ease: 'spring · bounce .35' },
  ];

  return (
    <div ref={containerRef} className="mt-8">
      <FadeIn>
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-10 bg-ink/30" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
            Curvas de respuesta
          </span>
          <svg
            id="curve-spinner"
            viewBox="0 0 24 24"
            className="ml-auto w-4 h-4 flex-shrink-0"
            style={{ color: '#DDE227' }}
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-2.5">
          {rows.map((r) => (
            <div
              key={r.label}
              className="row relative rounded-xl px-3 py-2.5 overflow-hidden"
              style={{
                backgroundColor: '#141416',
                border: '1px solid rgba(242,242,240,0.06)',
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-semibold text-ink text-xs">
                  {r.label}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/45">
                  {r.ease}
                </span>
              </div>
              <div className="relative h-6 w-full">
                <div
                  className="square absolute top-1/2 -translate-y-1/2 left-0 w-6 h-6 rounded-sm"
                  style={{
                    background: '#DDE227',
                    boxShadow: '0 4px 12px -2px rgba(221,226,39,0.5)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink/40 mt-4">
          3 set-ups · 1 misma plataforma
        </p>
      </FadeIn>
    </div>
  );
}

const specs = [
  { label: 'Construcción', value: 'Aluminio anodizado' },
  { label: 'Reservorio externo', value: 'Nitrógeno · Garrafa flotante' },
  { label: 'Vástago', value: 'Acero cromado rectificado' },
  { label: 'Regulación', value: 'Compresión + rebote' },
  { label: 'Aceite', value: 'Específico de competición' },
];

export default function ProductSection() {
  return (
    <section
      id="producto"
      className="relative px-6 md:px-12 py-24 md:py-32 bg-bg"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-stretch">
        <FadeIn
          x={-30}
          y={0}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full"
            style={{
              border: '1px solid rgba(242,242,240,0.08)',
              background:
                'radial-gradient(circle at 30% 30%, rgba(221,226,39,0.08) 0%, rgba(10,10,11,0) 60%), #0F0F11',
            }}
          >
            <img
              src="/producto-rotula.jpg"
              alt="Detalle del amortiguador Baratec PRO con rótula"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10,10,11,0) 55%, rgba(10,10,11,0.85) 100%)',
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
                  Modelo
                </span>
                <div className="font-display font-bold text-ink tracking-tight text-xl sm:text-2xl mt-1">
                  Baratec High
                </div>
              </div>
              <div
                className="font-mono px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] font-medium"
                style={{ background: '#DDE227', color: '#0A0A0B' }}
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
            className="relative rounded-2xl overflow-hidden flex-1 min-h-[420px]"
            style={{
              border: '1px solid rgba(242,242,240,0.08)',
              backgroundColor: '#0F0F11',
            }}
          >
            <img
              src="/producto-detalle.jpg"
              alt="Detalle del amortiguador delantero Baratec High"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10,10,11,0) 45%, rgba(10,10,11,0.9) 100%)',
              }}
            />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55 mb-1.5">
                Detalle
              </div>
              <div className="font-display text-ink font-semibold text-base leading-tight">
                Vástago cromado · garrafa flotante
              </div>
              <div className="text-ink/60 text-xs mt-1.5">
                Industria argentina · Almafuerte
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="lg:col-span-4 flex flex-col gap-7 justify-center">
          <FadeIn x={30} y={0}>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-ink/30" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
                El producto
              </span>
            </div>
          </FadeIn>

          <FadeIn x={30} y={0} delay={0.1}>
            <h2
              className="font-display font-bold leading-[0.95] tracking-[-0.03em] text-ink"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}
            >
              Ingeniería <br />
              <span className="accent-gradient">de alta exigencia.</span>
            </h2>
          </FadeIn>

          <FadeIn x={30} y={0} delay={0.2}>
            <p className="text-ink/65 leading-relaxed text-base md:text-lg">
              Cuerpo de aluminio anodizado, vástago cromado rectificado y
              reservorio externo de nitrógeno — la <em>garrafa negra</em> — que
              mantiene el aceite estable bajo exigencia térmica. Cada unidad
              lleva número de serie grabado en la base.
            </p>
          </FadeIn>

          <FadeIn x={30} y={0} delay={0.3}>
            <dl
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 pt-6"
              style={{ borderTop: '1px solid rgba(242,242,240,0.08)' }}
            >
              {specs.map((s) => (
                <div key={s.label} className="flex flex-col gap-1.5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/45">
                    {s.label}
                  </dt>
                  <dd className="text-ink font-medium text-sm sm:text-base">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          <EasingsDemo />
        </div>

        <FadeIn
          y={30}
          delay={0.15}
          className="lg:hidden col-span-full"
        >
          <div
            className="relative rounded-2xl overflow-hidden h-[260px]"
            style={{
              border: '1px solid rgba(242,242,240,0.08)',
              backgroundColor: '#0F0F11',
            }}
          >
            <img
              src="/producto-detalle.jpg"
              alt="Detalle del amortiguador delantero Baratec High"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10,10,11,0) 35%, rgba(10,10,11,0.9) 100%)',
              }}
            />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55 mb-1">
                Detalle
              </div>
              <div className="font-display text-ink font-semibold text-base">
                Vástago cromado · Industria argentina
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
