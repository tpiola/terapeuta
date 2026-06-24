"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }},
};

/* ─── Custom SVG Icons ─── */
const RadiestesiaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="3" r="1.5" />
    <line x1="12" y1="4.5" x2="12" y2="16" />
    <circle cx="12" cy="18.5" r="2.5" />
    <path d="M8 19c-1-3 0-6 4-6s5-3 4-6" opacity="0.4" />
    <path d="M16 19c1-3 0-6-4-6s-5-3-4-6" opacity="0.4" />
  </svg>
);

const ReikiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M7 14c-1.5-2-1-4 1-5l2-1" />
    <path d="M17 14c1.5-2 1-4-1-5l-2-1" />
    <path d="M8 13c-1 2 0 4 2 5" />
    <path d="M16 13c1 2 0 4-2 5" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="9" y1="9" x2="7" y2="5" />
    <line x1="15" y1="9" x2="17" y2="5" />
    <circle cx="12" cy="2" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const BarrasIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <ellipse cx="12" cy="8" rx="5" ry="6" />
    <circle cx="10" cy="5" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="14" cy="5" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="12" cy="4" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="9" cy="7" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="15" cy="7" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="8" cy="9" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="16" cy="9" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

const ConeHinduIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 4l-5 13h10z" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <path d="M12 2c0 1-1 2-1 2h2s-1-1-1-2z" fill="currentColor" stroke="none" opacity="0.6" />
  </svg>
);

const MtvssIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="5" r="1.5" />
    <line x1="12" y1="6.5" x2="12" y2="17" />
    <line x1="12" y1="9" x2="8" y2="12" />
    <line x1="12" y1="9" x2="16" y2="12" />
    <line x1="12" y1="17" x2="9" y2="20" />
    <line x1="12" y1="17" x2="15" y2="20" />
    <circle cx="12" cy="8" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="12" cy="11" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="12" cy="14" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

const iconMap: Record<string, React.ComponentType> = {
  Radiestesia: RadiestesiaIcon,
  Reiki: ReikiIcon,
  "Barras de Access": BarrasIcon,
  "Cone Hindu": ConeHinduIcon,
  MTVSS: MtvssIcon,
};

const therapies = [
  { name: "Radiestesia", description: "Equilíbrio energético e análise de campos vibracionais para harmonizar corpo e mente." },
  { name: "Reiki", description: "Canalização de energia vital universal para promover relaxamento profundo e bem-estar." },
  { name: "Barras de Access", description: "Liberação de crenças limitantes através de toques sutis em pontos da cabeça." },
  { name: "Cone Hindu", description: "Limpeza energética e desintoxicação através da tradição milenar dos cones." },
  { name: "MTVSS", description: "Ativação do sistema imunológico e processos naturais de cura do corpo." },
] as const;

export default function Services() {
  return (
    <section id="tratamentos" className="section-padding bg-white relative">
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
      <div className="container-peace relative">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-text mb-3">
            Como posso ajudar
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-base md:text-lg text-brand-muted/60 max-w-lg mx-auto">
            Cada abordagem é adaptada ao seu momento
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {therapies.map((therapy) => {
            const Icon = iconMap[therapy.name];
            return (
              <motion.div
                key={therapy.name}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 40px rgba(107,143,113,0.12)" }}
                transition={{ duration: 0.25 }}
                className="glass-card p-6 md:p-7 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-brand-sage/8 text-brand-sage flex items-center justify-center mb-4 group-hover:bg-brand-sage group-hover:text-white transition-colors duration-300">
                  {Icon && <Icon />}
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-text mb-2">
                  {therapy.name}
                </h3>
                <p className="font-body text-sm text-brand-muted/60 leading-relaxed mb-4">
                  {therapy.description}
                </p>
                <Link
                  href="https://wa.me/5516991115518"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-sage text-xs font-medium hover:text-brand-sage-dark transition-colors mt-auto"
                >
                  Agendar
                  <ArrowRight size={12} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="https://wa.me/5516991115518"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand-sage text-white rounded-full px-7 py-3 text-base font-medium shadow-lg shadow-brand-sage/10 transition-all hover:bg-brand-sage-dark hover:shadow-xl active:scale-[0.97]"
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
