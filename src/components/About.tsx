"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-brand-cream relative">
      {/* ─── Animated Background: Orbs + Dot Grid ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-sage/6 blur-3xl animate-[drift-1_16s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 -left-20 w-96 h-96 rounded-full bg-brand-lavender/5 blur-3xl animate-[drift-2_18s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-brand-gold/4 blur-3xl animate-[drift-3_20s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
      </div>
      <div className="container-peace relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ─── Photo ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/elis.jpg"
                alt="Elis Regina Borges"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* ─── Text ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-text"
            >
              Elis Regina Borges
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-sm tracking-[0.2em] uppercase text-brand-sage font-medium"
            >
              Terapeuta Integrativa · ABRATH · Franca/SP
            </motion.p>

            <motion.p variants={fadeUp} className="font-body text-brand-muted/80 leading-relaxed">
              Formada em terapias integrativas com registro profissional na ABRATH, Elis combina
              diferentes abordagens energéticas e vibracionais para oferecer um cuidado que
              considera a pessoa em sua totalidade — corpo, mente e espírito.
            </motion.p>

            <motion.p variants={fadeUp} className="font-body text-brand-muted/80 leading-relaxed">
              Com mais de oito anos de prática clínica em Franca/SP, seu trabalho se fundamenta
              na escuta atenta, no respeito ao tempo de cada pessoa e na aplicação de técnicas
              reconhecidas pelo Ministério da Saúde como Práticas Integrativas e Complementares (PICS).
            </motion.p>

            {/* Badges — section-label style, NO pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 pt-2">
              <span className="section-label">ABRATH</span>
              <span className="section-label">+8 anos</span>
              <span className="section-label">PICS</span>
            </motion.div>

            {/* Pull Quote */}
            <motion.blockquote
              variants={fadeUp}
              className="border-l-4 border-brand-sage pl-6 py-2 mt-4"
            >
              <p className="font-accent italic text-xl md:text-2xl text-brand-sage leading-relaxed">
                &ldquo;Oferecer um espaço onde cada pessoa possa se reconectar consigo mesma,
                com leveza e sem pressa.&rdquo;
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
