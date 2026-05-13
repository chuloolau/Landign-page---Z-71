import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const VEHICLE_IMAGES = [
  { src: '/silverado-z71.png', color: 'Plata metálico' },
  { src: '/GNT.avif', color: 'Rojo cherry' },
  { src: '/silverado-z71-negro-metalico.avif', color: 'Negro metálico' },
  { src: '/z71---rip-tide.avif', color: 'Azul Rip Tide' },
];

function ManualModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative rounded-2xl overflow-hidden max-w-sm w-full p-8 flex flex-col items-center gap-6"
        style={{
          backgroundColor: '#141416',
          border: '1px solid rgba(242,242,240,0.08)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-ink/50 hover:text-ink transition-colors text-xl leading-none"
        >
          ✕
        </button>
        <div className="text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-1.5">
            Manual de instalación
          </div>
          <div className="font-display font-bold uppercase tracking-tight text-ink text-lg">
            Delantero · Z-71 2025
          </div>
        </div>
        <img
          src="/qr-manual-delantero.jpg"
          alt="QR Manual de instalación delantero"
          className="w-56 h-56 object-contain rounded-xl"
          style={{ backgroundColor: '#fff', padding: '8px' }}
        />
        <p className="text-ink/55 text-xs text-center leading-relaxed">
          Escaneá el QR con tu celular para ver el manual completo
        </p>
        <a
          href="/manual-delantero.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center py-3 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#DDE227', color: '#0A0A0B' }}
        >
          Descargar PDF
        </a>
      </div>
    </div>
  );
}

type View = {
  id: string;
  label: string;
  hint: string;
  image: string;
  badge?: string;
};

export default function ProductLineSection() {
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState('vehiculo');
  const [vehicleIdx, setVehicleIdx] = useState(0);

  const currentVehicle = VEHICLE_IMAGES[vehicleIdx];

  const views: View[] = [
    {
      id: 'vehiculo',
      label: 'Vehículo',
      hint: `Silverado Z-71 · ${currentVehicle.color}`,
      image: currentVehicle.src,
      badge: 'Modelo objetivo',
    },
    {
      id: 'kit',
      label: 'Kit completo',
      hint: 'Delanteros + traseros matchados',
      image: '/kit-completo.jpg',
      badge: 'Industria argentina',
    },
    {
      id: 'trasero',
      label: 'Trasero',
      hint: 'Con reservorio externo de nitrógeno',
      image: '/traseros.jpg',
    },
    {
      id: 'delantero',
      label: 'Delantero',
      hint: 'Strut con tubo de protección',
      image: '/delanteros.jpg',
    },
  ];

  const active = views.find((v) => v.id === activeId) ?? views[0];

  return (
    <>
      <section
        id="linea"
        className="relative px-6 md:px-12 py-24 md:py-32 bg-bg"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 sm:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-ink/30" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
                    Línea Baratec
                  </span>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2
                  className="font-display font-bold leading-[0.95] tracking-[-0.03em] text-ink"
                  style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
                >
                  Silverado Z-71
                  <br />
                  <span className="accent-gradient">High Performance.</span>
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <p className="text-ink/60 max-w-md text-base leading-relaxed">
                Kit completo delantero + trasero diseñado específicamente para
                el modelo 2025. Cada unidad con número de serie y garantía de
                fábrica.
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            <article
              className="relative rounded-2xl overflow-hidden bg-white"
              style={{ border: '1px solid rgba(242,242,240,0.08)' }}
            >
              {/* Showcase: imagen activa con crossfade */}
              <div className="relative aspect-[16/10] w-full bg-white">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.image}
                    src={active.image}
                    alt={active.label}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0 w-full h-full object-contain p-6 sm:p-10"
                  />
                </AnimatePresence>

                {/* Gradient overlay bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6) 100%)',
                  }}
                />

                {/* Top-left badge */}
                <AnimatePresence mode="wait">
                  {active.badge && (
                    <motion.div
                      key={`badge-${active.id}`}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="absolute top-5 left-5 sm:top-6 sm:left-6"
                    >
                      <span
                        className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium px-3 py-1.5 rounded-full"
                        style={{ background: '#DDE227', color: '#0A0A0B' }}
                      >
                        {active.badge}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Flechas prev / next — solo en vista Vehículo */}
                <AnimatePresence>
                  {active.id === 'vehiculo' && (
                    <>
                      <motion.button
                        key="prev-arrow"
                        onClick={() =>
                          setVehicleIdx(
                            (i) =>
                              (i - 1 + VEHICLE_IMAGES.length) %
                              VEHICLE_IMAGES.length,
                          )
                        }
                        aria-label="Anterior"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                        style={{
                          background: 'rgba(10,10,11,0.7)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <ChevronLeft
                          size={22}
                          color="#FFFFFF"
                          strokeWidth={2}
                        />
                      </motion.button>

                      <motion.button
                        key="next-arrow"
                        onClick={() =>
                          setVehicleIdx((i) => (i + 1) % VEHICLE_IMAGES.length)
                        }
                        aria-label="Siguiente"
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                        style={{
                          background: 'rgba(10,10,11,0.7)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <ChevronRight
                          size={22}
                          color="#FFFFFF"
                          strokeWidth={2}
                        />
                      </motion.button>
                    </>
                  )}
                </AnimatePresence>

                {/* Indicators del carrusel — solo en vista Vehículo */}
                <AnimatePresence>
                  {active.id === 'vehiculo' && (
                    <motion.div
                      key="carousel-dots"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-5 right-5 sm:top-6 sm:right-6 flex items-center gap-2 px-3 py-2 rounded-full z-10"
                      style={{ background: 'rgba(10,10,11,0.75)', backdropFilter: 'blur(8px)' }}
                    >
                      {VEHICLE_IMAGES.map((v, i) => {
                        const isActive = i === vehicleIdx;
                        return (
                          <button
                            key={v.src}
                            onClick={() => setVehicleIdx(i)}
                            aria-label={v.color}
                            className="relative h-1.5 rounded-full transition-all duration-300"
                            style={{
                              width: isActive ? '24px' : '6px',
                              background: isActive ? '#DDE227' : 'rgba(255,255,255,0.35)',
                            }}
                          />
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Botón flotante "Ver manual QR" solo en vista Delantero */}
                <AnimatePresence>
                  {active.id === 'delantero' && (
                    <motion.button
                      key="qr-button"
                      onClick={() => setShowModal(true)}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="absolute top-5 right-5 sm:top-6 sm:right-6 group inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium transition-all hover:scale-105"
                      style={{ background: '#0A0A0B', color: '#FFFFFF' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: '#DDE227',
                          boxShadow: '0 0 8px #DDE227',
                        }}
                      />
                      Ver manual QR
                      <span className="text-base leading-none">→</span>
                    </motion.button>
                  )}
                </AnimatePresence>

                {/* Bottom label */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`label-${active.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 mb-1.5">
                      {active.label}
                    </div>
                    <div className="font-display text-white font-bold tracking-[-0.02em] text-xl sm:text-2xl md:text-3xl">
                      {active.hint}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Tabs row */}
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-px"
                style={{ backgroundColor: 'rgba(242,242,240,0.06)' }}
              >
                {views.map((v) => {
                  const isActive = v.id === activeId;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setActiveId(v.id)}
                      className="group relative px-3 py-4 sm:px-4 sm:py-5 text-left transition-colors"
                      style={{
                        backgroundColor: isActive ? '#18181B' : '#0F0F11',
                      }}
                    >
                      <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-ink/45 mb-1">
                        {String(views.indexOf(v) + 1).padStart(2, '0')}
                      </div>
                      <div className="font-display font-semibold text-ink text-sm sm:text-base leading-tight">
                        {v.label}
                      </div>
                      {/* indicator bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-0.5 transition-opacity"
                        style={{
                          background: '#DDE227',
                          opacity: isActive ? 1 : 0,
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-ink/40 mt-6 text-center">
              Click en cada vista para explorar el kit
            </p>
          </FadeIn>
        </div>
      </section>
      {showModal && <ManualModal onClose={() => setShowModal(false)} />}
    </>
  );
}
