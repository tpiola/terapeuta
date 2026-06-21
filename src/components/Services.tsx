"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Brain, Wind, Hand } from "lucide-react";

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

const therapies = [
  {
    icon: Sparkles,
    name: "Radiestesia",
    description: "Equilíbrio energético e análise de campos vibracionais para harmonizar corpo e mente.",
  },
  {
    icon: Heart,
    name: "Reiki",
    description: "Canalização de energia vital universal para promover relaxamento profundo e bem-estar.",
  },
  {
    icon: Brain,
    name: "Barras de Access",
    description: "Liberação de crenças limitantes através de toques sutis em pontos da cabeça.",
  },
  {
    icon: Wind,
    name: "Cone Hindu",
    description: "Limpeza energética e desintoxicação através da tradição milenar dos cones.",
  },
  {
    icon: Hand,
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
          {therapies.map((therapy) => (
            <motion.div
              key={therapy.name}
              variants={fadeUp}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="glass-card p-6 md:p-8 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-brand-sage/10 text-brand-sage flex items-center justify-center mb-5 group-hover:bg-brand-sage group-hover:text-white transition-colors duration-300">
                <therapy.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-brand-text mb-2">
                {therapy.name}
              </h3>
              <p className="font-body text-sm text-brand-muted/65 leading-relaxed">
                {therapy.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
