"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ─── Background: Radial Gradient ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial from-brand-sage/8 via-transparent to-transparent" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-radial from-brand-lavender/10 via-transparent to-transparent" />
      </div>

      {/* ─── Background: Floating Orbs ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span
          className="gradient-orb w-72 h-72 bg-brand-sage/15 top-1/4 -left-20 animate-drift-1"
        />
        <span
          className="gradient-orb w-96 h-96 bg-brand-lavender/12 top-1/2 right-0 -translate-y-1/2 translate-x-1/4 animate-drift-2"
        />
        <span
          className="gradient-orb w-64 h-64 bg-brand-gold/10 bottom-1/4 left-1/3 animate-drift-3"
        />
      </div>

      {/* ─── Background: Dot Grid ─── */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      {/* ─── Content ─── */}
      <div className="container-peace relative z-10 py-24 md:py-32">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-block font-body text-xs md:text-sm tracking-[0.2em] uppercase text-brand-sage font-medium mb-6 md:mb-8">
              Terapia Integrativa · Franca/SP
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-[-0.02em] text-brand-text mb-6 md:mb-8"
          >
            Transforme sua relação{" "}
            <br className="hidden sm:block" />
            com{" "}
            <em className="font-accent italic font-semibold text-brand-sage not-italic">
              o que sente
            </em>
            .
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-body text-base md:text-lg text-brand-muted/80 max-w-xl mx-auto mb-10 md:mb-12 leading-relaxed"
          >
            Abordagem integrativa e humanizada para acolher suas emoções,
            ressignificar experiências e cultivar bem-estar duradouro — com
            segurança, escuta e presença.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 md:mb-12"
          >
            <Link
              href="#contato"
              className="group inline-flex items-center gap-2 bg-brand-sage text-white rounded-full px-8 py-3.5 text-base font-medium shadow-lg shadow-brand-sage/25 transition-all hover:bg-brand-sage-dark hover:shadow-xl hover:shadow-brand-sage/30 active:scale-[0.97]"
            >
              Agendar Consulta
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="https://wa.me/5516999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-2 border-brand-sage/25 text-brand-sage rounded-full px-8 py-3.5 text-base font-medium transition-all hover:border-brand-sage/50 hover:bg-brand-sage/5 active:scale-[0.97]"
            >
              <MessageCircle
                size={18}
                className="transition-transform group-hover:scale-110"
              />
              Falar no WhatsApp
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-5 font-body text-xs text-brand-muted/50 tracking-widest uppercase"
          >
            <span>ABRATH</span>
            <span className="w-0.5 h-0.5 rounded-full bg-brand-muted/30" aria-hidden="true" />
            <span>+8 anos</span>
            <span className="w-0.5 h-0.5 rounded-full bg-brand-muted/30" aria-hidden="true" />
            <span>PICS</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Wave Divider ─── */}
      <div className="wave-divider" aria-hidden="true">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40c60-20 180-40 360-20s360 40 540 15 360-40 540-15v80H0V40z"
            fill="currentColor"
            className="text-brand-bg"
          />
          <path
            d="M0 60c60-15 180-30 360-10s360 35 540 10 360-35 540-10v50H0V60z"
            fill="currentColor"
            className="text-brand-cream opacity-60"
          />
        </svg>
      </div>
    </section>
  );
}
