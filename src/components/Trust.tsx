"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
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

/* ─── Animated Counter ─── */
function AnimatedCounter({
  target,
  suffix = "",
  isInView,
}: {
  target: number;
  suffix?: string;
  isInView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const display = useTransform(rounded, (v) => `${v}${suffix}`);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(count, target, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [isInView, target, count]);

  return <motion.span>{display}</motion.span>;
}

const stats = [
  {
    value: 8,
    suffix: "+",
    label: "Anos de Prática",
    description: "Atendendo com dedicação desde 2016, acumulando experiência clínica em terapias integrativas.",
    icon: Clock,
  },
  {
    value: 1500,
    suffix: "+",
    label: "Sessões Realizadas",
    description: "Mais de mil e quinhentos atendimentos com resultados transformadores.",
    icon: HeartPulse,
  },
  {
    value: 5,
    suffix: "",
    label: "Abordagens Terapêuticas",
    description: "Radiestesia, Reiki, Barras de Access, Cone Hindu e MTVSS combinadas para você.",
    icon: BadgeCheck,
  },
] as const;

export default function Trust() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" className="section-padding bg-white relative" ref={sectionRef}>
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
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(107,143,113,0.12)" }}
              transition={{ duration: 0.25 }}
              className="glass-card p-7 md:p-8 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-sage/8 text-brand-sage flex items-center justify-center mb-4 group-hover:bg-brand-sage group-hover:text-white transition-colors duration-300">
                <stat.icon size={21} strokeWidth={1.5} />
              </div>
              <span className="font-display text-4xl md:text-5xl font-bold text-brand-sage mb-2 tabular-nums">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
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
