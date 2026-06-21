"use client";

import { motion } from "framer-motion";
import { Clock, BadgeCheck, HeartPulse, ArrowRight } from "lucide-react";
import Link from "next/link";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }},
};

const stats = [
  {
    value: "+8",
    label: "Anos de Prática",
    description: "Atendendo com dedicação desde 2016, acumulando experiência clínica em terapias integrativas.",
    icon: Clock,
  },
  {
    value: "ABRATH",
    label: "Registro Profissional",
    description: "Associação Brasileira dos Terapeutas Holísticos — garantia de formação e ética profissional.",
    icon: BadgeCheck,
  },
  {
    value: "PICS",
    label: "Ministério da Saúde",
    description: "Práticas Integrativas e Complementares reconhecidas e integradas ao SUS desde 2006.",
    icon: HeartPulse,
  },
] as const;

export default function Trust() {
  return (
    <section id="depoimentos" className="section-padding bg-white relative">
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
            Por que a Elis
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="glass-card p-7 md:p-8 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-brand-sage/8 text-brand-sage flex items-center justify-center mb-4">
                <stat.icon size={21} strokeWidth={1.5} />
              </div>
              <span className="font-display text-4xl md:text-5xl font-bold text-brand-sage mb-2">
                {stat.value}
              </span>
              <span className="font-body text-xs tracking-[0.15em] uppercase text-brand-muted/45 font-medium mb-3">
                {stat.label}
              </span>
              <p className="font-body text-sm text-brand-muted/60 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="https://wa.me/5516991115518"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand-sage text-white rounded-full px-7 py-3 text-base font-medium shadow-lg shadow-brand-sage/10 transition-all hover:bg-brand-sage-dark hover:shadow-xl active:scale-[0.97]"
          >
            Agende sua consulta
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
