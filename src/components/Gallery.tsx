"use client";

import { motion } from "framer-motion";
import { Camera, MessageCircle } from "lucide-react";
import Link from "next/link";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }},
};

const galleryImages = [
  { src: "/images/gallery-01.jpg", alt: "Ambiente terapêutico acolhedor" },
  { src: "/images/gallery-02.jpg", alt: "Sessão de terapia integrativa" },
  { src: "/images/gallery-03.jpg", alt: "Espaço de cuidado e bem-estar" },
  { src: "/images/gallery-04.jpg", alt: "Técnicas de relaxamento" },
  { src: "/images/gallery-05.jpg", alt: "Atendimento personalizado" },
  { src: "/images/gallery-06.jpg", alt: "Momento de autocuidado" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="section-padding bg-brand-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
      <div className="container-peace relative">
        <motion.div className="text-center mb-12 md:mb-16" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
          <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-text mb-3">Momentos de cuidado</motion.h2>
          <motion.p variants={fadeUp} className="font-body text-base md:text-lg text-brand-muted/60 max-w-lg mx-auto">Acompanhe conteúdos e informações sobre o trabalho de Elis nas redes sociais.</motion.p>
        </motion.div>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
          {galleryImages.map((image, index) => (
            <motion.div key={index} variants={fadeUp} whileHover={{ scale: 1.03, zIndex: 10 }} transition={{ duration: 0.3 }} className="relative aspect-square overflow-hidden rounded-xl shadow-md group cursor-pointer">
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
            </motion.div>
          ))}
        </motion.div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="https://www.instagram.com/elisreginaoliveira.terapeuta/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-base font-medium"><Camera size={20} /> Instagram</Link>
          <Link href="https://www.facebook.com/elisreginaoliveira.terapeuta" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-base font-medium"><MessageCircle size={20} /> Facebook</Link>
        </div>
      </div>
    </section>
  );
}
