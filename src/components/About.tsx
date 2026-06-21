"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-brand-bg relative">
      {/* ─── Animated Background ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-sage/5 blur-3xl animate-[drift-1_16s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 -left-20 w-96 h-96 rounded-full bg-brand-lavender/4 blur-3xl animate-[drift-2_18s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-brand-gold/3 blur-3xl animate-[drift-3_20s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-dot-grid opacity-25" />
      </div>

      <div className="container-peace relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-brand-sage/15 via-brand-lavender/10 to-brand-gold/8 blur-xl" />
              <img
                src="/images/authority-profile.jpg"
                alt="Elis Regina Borges — Terapeuta Integrativa"
                className="relative w-full max-w-[440px] h-auto rounded-xl shadow-xl object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <span className="section-label mb-4 md:mb-6">
                Quem é a Elis
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-text mb-6"
            >
              Sua jornada de volta ao centro
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-base md:text-lg text-brand-muted/70 leading-relaxed mb-4"
            >
              Terapeuta Integrativa registrada na ABRATH, especializada em Práticas
              Integrativas e Complementares com mais de 8 anos de atuação clínica.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-body text-base md:text-lg text-brand-muted/70 leading-relaxed mb-4"
            >
              Atendo presencialmente em Franca/SP, com abordagem personalizada que
              combina Radiestesia, Reiki, Barras de Access, Cone Hindu e MTVSS
              para promover equilíbrio físico, emocional e energético.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-body text-base md:text-lg text-brand-muted/70 leading-relaxed mb-8"
            >
              Meu compromisso é oferecer um espaço seguro, de escuta atenta e
              presença genuína, onde cada pessoa encontra acolhimento para sua
              jornada de autoconhecimento e cura.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <Link
                href="https://wa.me/5516991115518"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-sage text-white rounded-full px-8 py-3.5 text-base font-medium shadow-lg shadow-brand-sage/20 transition-all hover:bg-brand-sage-dark hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97]"
              >
                Agende sua sessão
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
