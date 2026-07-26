"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function InstagramIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.6v8h3.1Z" />
    </svg>
  );
}

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
  { src: "/images/gallery-03.jpg", alt: "Espaço de cura e bem-estar" },
  { src: "/images/gallery-04.jpg", alt: "Técnicas de relaxamento" },
  { src: "/images/gallery-05.jpg", alt: "Atendimento personalizado" },
  { src: "/images/gallery-06.jpg", alt: "Momento de transformação" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="section-padding bg-brand-bg relative overflow-hidden">
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
            Momentos de Transformação
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-base md:text-lg text-brand-muted/60 max-w-lg mx-auto">
            Acompanhe meu trabalho nas redes sociais e veja depoimentos de quem já transformou sua vida
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square overflow-hidden rounded-xl shadow-md group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Media CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="https://www.instagram.com/elisreginaoliveira.terapeuta/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white rounded-full px-8 py-3.5 text-base font-medium shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97]"
            >
              <InstagramIcon size={20} className="transition-transform group-hover:scale-110" />
              Siga no Instagram
            </Link>
            
            <Link
              href="https://www.facebook.com/elisreginaoliveira.terapeuta"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-blue-600 text-white rounded-full px-8 py-3.5 text-base font-medium shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97]"
            >
              <FacebookIcon size={20} className="transition-transform group-hover:scale-110" />
              Curta no Facebook
            </Link>
          </div>
          
          <p className="font-body text-sm text-brand-muted/50 max-w-md mx-auto">
            Acompanhe conteúdos diários, depoimentos, dicas de bem-estar e muito mais nas minhas redes sociais
          </p>
        </motion.div>
      </div>
    </section>
  );
}
