"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ─── Custom SVG Icons ─── */

const RadiestesiaIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    {/* Pendulum: top holding circle */}
    <circle cx="12" cy="3" r="1.5" />
    {/* Chain/line */}
    <line x1="12" y1="4.5" x2="12" y2="16" />
    {/* Pendulum bob */}
    <circle cx="12" cy="18.5" r="2.5" />
    {/* Energy waves */}
    <path d="M8 19c-1-3 0-6 4-6s5-3 4-6" opacity="0.5" />
    <path d="M16 19c1-3 0-6-4-6s-5-3-4-6" opacity="0.5" />
  </svg>
);

const ReikiIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    {/* Cupped hands */}
    <path d="M7 14c-1.5-2-1-4 1-5l2-1" />
    <path d="M17 14c1.5-2 1-4-1-5l-2-1" />
    <path d="M8 13c-1 2 0 4 2 5" />
    <path d="M16 13c1 2 0 4-2 5" />
    {/* Energy rays above hands */}
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="9" y1="9" x2="7" y2="5" />
    <line x1="15" y1="9" x2="17" y2="5" />
    {/* Energy dots */}
    <circle cx="12" cy="2" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="7" cy="4.5" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="17" cy="4.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const BarrasIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    {/* Head silhouette */}
    <ellipse cx="12" cy="8" rx="6" ry="7" />
    {/* Touch points on the head */}
    <circle cx="10" cy="5" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="14" cy="5" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="12" cy="4" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="9" cy="7" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="15" cy="7" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="8" cy="9" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="16" cy="9" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="12" cy="10" r="0.8" fill="currentColor" stroke="none" />
    {/* Energy flow lines */}
    <path d="M12 15v3" opacity="0.5" />
    <path d="M10 16l-1.5 2" opacity="0.5" />
    <path d="M14 16l1.5 2" opacity="0.5" />
  </svg>
);

const ConeHinduIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    {/* Cone body */}
    <path d="M12 4l-6 14h12z" />
    {/* Horizontal band */}
    <line x1="9" y1="13" x2="15" y2="13" />
    {/* Flame at top */}
    <path d="M12 1c0 2-1.5 3-1.5 3h3s-1.5-1-1.5-3z" fill="currentColor" stroke="none" opacity="0.7" />
    <path d="M12 1c0 2-1.5 3-1.5 3h3s-1.5-1-1.5-3z" opacity="0.7" />
    {/* Energy spirals */}
    <path d="M8 11c-1 1-1 3 0 4" opacity="0.4" />
    <path d="M16 11c1 1 1 3 0 4" opacity="0.4" />
  </svg>
);

const MtvssIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    {/* Simplified body */}
    <circle cx="12" cy="5" r="2" />
    <line x1="12" y1="7" x2="12" y2="18" />
    {/* Arms */}
    <line x1="12" y1="10" x2="7" y2="13" />
    <line x1="12" y1="10" x2="17" y2="13" />
    {/* Legs */}
    <line x1="12" y1="18" x2="9" y2="21" />
    <line x1="12" y1="18" x2="15" y2="21" />
    {/* Energy points (chakras/meridians) */}
    <circle cx="12" cy="8" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="12" cy="11" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="12" cy="14" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
    {/* Peripheral energy points */}
    <circle cx="7" cy="13" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="17" cy="13" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="9" cy="21" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="15" cy="21" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

/* ─── Icon mapping ─── */
const iconMap: Record<string, React.ComponentType> = {
  Radiestesia: RadiestesiaIcon,
  Reiki: ReikiIcon,
  "Barras de Access": BarrasIcon,
  "Cone Hindu": ConeHinduIcon,
  MTVSS: MtvssIcon,
};

/* ─── Background image mapping ─── */
const bgMap: Record<string, string> = {
  Radiestesia: "/images/therapy-radiestesia.jpg",
  Reiki: "/images/therapy-reiki.jpg",
  "Barras de Access": "/images/therapy-barras.jpg",
  "Cone Hindu": "/images/therapy-cone-hindu.jpg",
  MTVSS: "/images/therapy-mtvss.jpg",
};

const therapies = [
  {
    name: "Radiestesia",
    description: "Equilíbrio energético e análise de campos vibracionais para harmonizar corpo e mente.",
  },
  {
    name: "Reiki",
    description: "Canalização de energia vital universal para promover relaxamento profundo e bem-estar.",
  },
  {
    name: "Barras de Access",
    description: "Liberação de crenças limitantes através de toques sutis em pontos da cabeça.",
  },
  {
    name: "Cone Hindu",
    description: "Limpeza energética e desintoxicação através da tradição milenar dos cones.",
  },
  {
    name: "MTVSS",
    description: "Ativação do sistema imunológico e processos naturais de cura do corpo.",
  },
] as const;

export default function Services() {
  return (
    <section id="tratamentos" className="section-padding bg-white">
      <div className="container-peace">
        <motion.div
          className="text-center mb-14 md:mb-18"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-text mb-4"
          >
            Como posso ajudar
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-base md:text-lg text-brand-muted/70 max-w-xl mx-auto"
          >
            Cada abordagem é adaptada ao seu momento
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {therapies.map((therapy) => {
            const Icon = iconMap[therapy.name];
            const bgImage = bgMap[therapy.name];
            return (
              <motion.div
                key={therapy.name}
                variants={fadeUp}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="glass-card p-6 md:p-8 flex flex-col items-center text-center group relative overflow-hidden"
              >
                {/* Background image with low opacity */}
                {bgImage && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={bgImage}
                      alt=""
                      className="w-full h-full object-cover opacity-[0.08]"
                      aria-hidden="true"
                    />
                  </div>
                )}
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-brand-sage/10 text-brand-sage flex items-center justify-center mb-5 group-hover:bg-brand-sage group-hover:text-white transition-colors duration-300">
                    {Icon && <Icon />}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-brand-text mb-2">
                    {therapy.name}
                  </h3>
                  <p className="font-body text-sm text-brand-muted/65 leading-relaxed">
                    {therapy.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
