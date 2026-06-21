"use client";

import { motion } from "framer-motion";
import { Clock, BadgeCheck, HeartPulse, ArrowRight } from "lucide-react";
import Link from "next/link";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const galleryImages = [
  "/images/gallery-01.jpg",
  "/images/gallery-02.jpg",
  "/images/gallery-03.jpg",
  "/images/gallery-04.jpg",
  "/images/gallery-05.jpg",
  "/images/gallery-06.jpg",
];

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
    <section id="depoimentos" className="section-padding bg-brand-bg relative">
      {/* ─── Animated Background: Orbs + Dot Grid ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-sage/5 blur-3xl animate-[drift-1_16s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 -left-20 w-96 h-96 rounded-full bg-brand-lavender/4 blur-3xl animate-[drift-2_18s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-brand-gold/3 blur-3xl animate-[drift-3_20s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-dot-grid opacity-25" />
      </div>

      {/* Wave Divider at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180" aria-hidden="true">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-auto"
        >
          <path
            d="M0 40c60-20 180-40 360-20s360 40 540 15 360-40 540-15v80H0V40z"
            fill="#ffffff"
          />
          <path
            d="M0 60c60-15 180-30 360-10s360 35 540 10 360-35 540-10v50H0V60z"
            fill="#F5F0EB"
            opacity="0.6"
          />
        </svg>
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
            Por que a Elis
          </motion.h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="glass-card p-8 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-brand-sage/10 text-brand-sage flex items-center justify-center mb-5">
                <stat.icon size={22} strokeWidth={1.5} />
              </div>
              <span className="font-display text-4xl md:text-5xl font-bold text-brand-sage mb-2">
                {stat.value}
              </span>
              <span className="font-body text-xs tracking-[0.15em] uppercase text-brand-muted/50 font-medium mb-3">
                {stat.label}
              </span>
              <p className="font-body text-sm text-brand-muted/65 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-display text-xl text-center text-brand-text font-medium mb-6">
            Ambiente de acolhimento
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="aspect-[4/3] rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={img}
                  alt={`Espaço de terapia ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="https://wa.me/5516991115518"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-sage text-white rounded-full px-8 py-3.5 text-base font-medium shadow-lg shadow-brand-sage/20 transition-all hover:bg-brand-sage-dark hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97]"
          >
            Agende sua consulta
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
