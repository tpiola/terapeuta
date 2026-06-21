"use client";

import { motion } from "framer-motion";
import { Award, Clock, Shield } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const badges = [
  { icon: Shield, label: "ABRATH" },
  { icon: Clock, label: "+8 anos" },
  { icon: Award, label: "PICS" },
] as const;

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-brand-cream">
      <div className="container-peace">
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

            {/* Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              {badges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-sage/5 text-brand-sage font-body text-sm font-medium border border-brand-sage/10"
                >
                  <Icon size={14} strokeWidth={1.5} />
                  {label}
                </span>
              ))}
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
