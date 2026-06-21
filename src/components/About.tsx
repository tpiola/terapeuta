"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }},
};

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-brand-bg relative">
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />

      <div className="container-peace relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src="/images/elis-hero.jpg"
              alt="Elis Regina Borges — Terapeuta Integrativa"
              className="w-full max-w-[400px] h-auto rounded-2xl shadow-lg object-cover aspect-[3/4]"
              loading="lazy"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={fadeUp}>
              <span className="section-label mb-4 md:mb-6">Quem é a Elis</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-semibold text-brand-text mb-5">
              Sua jornada de volta ao centro
            </motion.h2>

            <motion.p variants={fadeUp} className="font-body text-base md:text-lg text-brand-muted/70 leading-relaxed mb-4">
              Terapeuta Integrativa registrada na ABRATH, especializada em Práticas
              Integrativas e Complementares com mais de 8 anos de atuação clínica.
            </motion.p>

            <motion.p variants={fadeUp} className="font-body text-base md:text-lg text-brand-muted/70 leading-relaxed mb-4">
              Atendo presencialmente em Franca/SP, com abordagem personalizada que
              combina Radiestesia, Reiki, Barras de Access, Cone Hindu e MTVSS
              para promover equilíbrio físico, emocional e energético.
            </motion.p>

            <motion.p variants={fadeUp} className="font-body text-base md:text-lg text-brand-muted/70 leading-relaxed mb-7">
              Meu compromisso é oferecer um espaço seguro, de escuta atenta e
              presença genuína, onde cada pessoa encontra acolhimento para sua
              jornada de autoconhecimento e cura.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                href="https://wa.me/5516991115518"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-brand-sage text-white rounded-full px-7 py-3 text-base font-medium shadow-lg shadow-brand-sage/10 transition-all hover:bg-brand-sage-dark hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97]"
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
