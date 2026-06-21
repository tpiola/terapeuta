"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }},
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-brand-bg">
      {/* Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />

      <div className="container-peace relative z-10 py-20 md:py-28">
        <motion.div
          className="max-w-3xl"
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
            className="font-display text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-brand-text mb-6 md:mb-8"
          >
            Suas emoções{" "}
            <span className="text-brand-sage italic">merecem</span>
            <br />
            ser acolhidas.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-body text-lg md:text-xl text-brand-muted/70 max-w-[480px] mb-8 md:mb-10 leading-relaxed"
          >
            Abordagem integrativa para quem deseja se reconectar consigo mesmo,
            com segurança, escuta atenta e presença genuína.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start gap-4 mb-10"
          >
            <Link
              href="#contato"
              className="group inline-flex items-center gap-2.5 bg-brand-sage text-white rounded-full px-8 py-3.5 text-base font-medium shadow-lg shadow-brand-sage/15 transition-all hover:bg-brand-sage-dark hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Agendar Consulta
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://wa.me/5516991115518"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 border-2 border-brand-sage/15 text-brand-sage rounded-full px-8 py-3.5 text-base font-medium transition-all hover:border-brand-sage/30 hover:bg-brand-sage/[0.02] active:scale-[0.97]"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-5 font-body text-xs text-brand-muted/35 tracking-[0.15em] uppercase"
          >
            <span>ABRATH</span>
            <span className="w-1 h-1 rounded-full bg-brand-sage/25" aria-hidden="true" />
            <span>+8 anos</span>
            <span className="w-1 h-1 rounded-full bg-brand-sage/25" aria-hidden="true" />
            <span>PICS · Ministério da Saúde</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
