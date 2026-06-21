"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ─── Background: Floating Orbs ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="gradient-orb w-[500px] h-[500px] bg-brand-sage/10 -top-32 -left-32 animate-drift-1" />
        <span className="gradient-orb w-[600px] h-[600px] bg-brand-lavender/8 top-1/3 -right-40 animate-drift-2" />
        <span className="gradient-orb w-[400px] h-[400px] bg-brand-gold/6 bottom-0 left-1/3 animate-drift-3" />
      </div>

      {/* ─── Dot Grid ─── */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      {/* ─── Content ─── */}
      <div className="container-peace relative z-10 py-28 md:py-36">
        <motion.div
          className="max-w-4xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="section-label mb-6 md:mb-8">
              Terapia Integrativa · Franca/SP
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-brand-text mb-8 md:mb-10"
          >
            Suas emoções{" "}
            <span className="text-brand-sage italic">
              merecem
            </span>
            <br />
            ser acolhidas.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-body text-lg md:text-xl text-brand-muted/70 max-w-[520px] mb-10 md:mb-12 leading-relaxed"
          >
            Abordagem integrativa para quem deseja se reconectar consigo mesmo, 
            com segurança, escuta atenta e presença genuína.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start gap-4 mb-12"
          >
            <Link
              href="#contato"
              className="group inline-flex items-center gap-3 bg-brand-sage text-white rounded-full px-9 py-4 text-base font-medium shadow-xl shadow-brand-sage/20 transition-all hover:bg-brand-sage-dark hover:shadow-2xl hover:shadow-brand-sage/25 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Agendar Consulta
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://wa.me/5516991115518"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-2 border-brand-sage/20 text-brand-sage rounded-full px-9 py-4 text-base font-medium transition-all hover:border-brand-sage/40 hover:bg-brand-sage/[0.03] active:scale-[0.97]"
            >
              <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
              Falar no WhatsApp
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-6 font-body text-xs text-brand-muted/40 tracking-[0.15em] uppercase"
          >
            <span>ABRATH</span>
            <span className="w-1 h-1 rounded-full bg-brand-sage/30" aria-hidden="true" />
            <span>+8 anos</span>
            <span className="w-1 h-1 rounded-full bg-brand-sage/30" aria-hidden="true" />
            <span>PICS · Ministério da Saúde</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Wave Divider ─── */}
      <div className="wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40c60-20 180-40 360-20s360 40 540 15 360-40 540-15v80H0V40z" fill="currentColor" className="text-brand-bg" />
          <path d="M0 60c60-15 180-30 360-10s360 35 540 10 360-35 540-10v50H0V60z" fill="currentColor" className="text-white/60" />
        </svg>
      </div>
    </section>
  );
}
