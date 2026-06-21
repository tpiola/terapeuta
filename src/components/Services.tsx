"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
    <circle cx="12" cy="3" r="1.5" />
    <line x1="12" y1="4.5" x2="12" y2="16" />
    <circle cx="12" cy="18.5" r="2.5" />
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
    <path d="M7 14c-1.5-2-1-4 1-5l2-1" />
    <path d="M17 14c1.5-2 1-4-1-5l-2-1" />
    <path d="M8 13c-1 2 0 4 2 5" />
    <path d="M16 13c1 2 0 4-2 5" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="9" y1="9" x2="7" y2="5" />
    <line x1="15" y1="9" x2="17" y2="5" />
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
    <ellipse cx="12" cy="8" rx="6" ry="7" />
    <circle cx="10" cy="5" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="14" cy="5" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="12" cy="4" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="9" cy="7" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="15" cy="7" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="8" cy="9" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="16" cy="9" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="12" cy="10" r="0.8" fill="currentColor" stroke="none" />
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
    <path d="M12 4l-6 14h12z" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <path d="M12 1c0 2-1.5 3-1.5 3h3s-1.5-1-1.5-3z" fill="currentColor" stroke="none" opacity="0.7" />
    <path d="M12 1c0 2-1.5 3-1.5 3h3s-1.5-1-1.5-3z" opacity="0.7" />
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
    <circle cx="12" cy="5" r="2" />
    <line x1="12" y1="7" x2="12" y2="18" />
    <line x1="12" y1="10" x2="7" y2="13" />
    <line x1="12" y1="10" x2="17" y2="13" />
    <line x1="12" y1="18" x2="9" y2="21" />
    <line x1="12" y1="18" x2="15" y2="21" />
    <circle cx="12" cy="8" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="12" cy="11" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="12" cy="14" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
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

/* ─── Background image mapping (imagens reais do GitHub) ─── */
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
    <section id="tratamentos" className="section-padding bg-white relative">
      {/* ─── Animated Background: Orbs + Dot Grid ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-sage/5 blur-3xl animate-[drift-1_16s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 -left-20 w-96 h-96 rounded-full bg-brand-lavender/4 blur-3xl animate-[drift-2_18s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-brand-gold/3 blur-3xl animate-[drift-3_20s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
      </div>
      <div className="container-peace relative">
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
                {/* Background image */}
                {bgImage && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={bgImage}
                      alt=""
                      className="w-full h-full object-cover opacity-[0.12] group-hover:opacity-[0.18] transition-opacity duration-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-brand-sage/10 text-brand-sage flex items-center justify-center mb-5 group-hover:bg-brand-sage group-hover:text-white transition-colors duration-300">
                    {Icon && <Icon />}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-brand-text mb-2">
                    {therapy.name}
                  </h3>
                  <p className="font-body text-sm text-brand-muted/65 leading-relaxed mb-4 flex-1">
                    {therapy.description}
                  </p>
                  {/* CTA por terapia */}
                  <Link
                    href="https://wa.me/5516991115518"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-sage text-xs font-medium hover:text-brand-sage-dark transition-colors group/cta"
                  >
                    Agendar
                    <ArrowRight size={12} className="transition-transform group-hover/cta:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA pós-cards */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="https://wa.me/5516991115518"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-sage text-white rounded-full px-8 py-3.5 text-base font-medium shadow-lg shadow-brand-sage/20 transition-all hover:bg-brand-sage-dark hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97]"
          >
            <MessageCircleIcon />
            Quero saber qual é a ideal para mim
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function MessageCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
