"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, Camera, MapPin } from "lucide-react";

const contactSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.email("Email inválido"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
  mensagem: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Em produção, enviar para API/WhatsApp
    console.log("Form data:", data);
    setSubmitted(true);
  };

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-peace">
        <motion.div
          className="text-center mb-14 md:mb-18"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-text mb-4"
          >
            Agende sua consulta
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ─── Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-sage/10 text-brand-sage flex items-center justify-center mx-auto mb-4">
                  <Send size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-brand-text mb-2">
                  Mensagem enviada!
                </h3>
                <p className="font-body text-brand-muted/70">
                  Retornaremos em breve. Obrigada pelo contato.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Nome */}
                <div>
                  <label htmlFor="nome" className="block font-body text-sm font-medium text-brand-text mb-1.5">
                    Nome *
                  </label>
                  <input
                    id="nome"
                    type="text"
                    {...register("nome")}
                    className={`w-full rounded-xl border bg-brand-bg/50 px-4 py-3 font-body text-sm text-brand-text placeholder:text-brand-muted/40 outline-none transition-colors focus:border-brand-sage focus:ring-2 focus:ring-brand-sage/20 ${
                      errors.nome ? "border-red-400" : "border-brand-sage/15"
                    }`}
                    placeholder="Seu nome completo"
                  />
                  {errors.nome && (
                    <p className="mt-1 font-body text-xs text-red-500">{errors.nome.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-body text-sm font-medium text-brand-text mb-1.5">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full rounded-xl border bg-brand-bg/50 px-4 py-3 font-body text-sm text-brand-text placeholder:text-brand-muted/40 outline-none transition-colors focus:border-brand-sage focus:ring-2 focus:ring-brand-sage/20 ${
                      errors.email ? "border-red-400" : "border-brand-sage/15"
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 font-body text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <label htmlFor="telefone" className="block font-body text-sm font-medium text-brand-text mb-1.5">
                    Telefone *
                  </label>
                  <input
                    id="telefone"
                    type="tel"
                    {...register("telefone")}
                    className={`w-full rounded-xl border bg-brand-bg/50 px-4 py-3 font-body text-sm text-brand-text placeholder:text-brand-muted/40 outline-none transition-colors focus:border-brand-sage focus:ring-2 focus:ring-brand-sage/20 ${
                      errors.telefone ? "border-red-400" : "border-brand-sage/15"
                    }`}
                    placeholder="(16) 99999-9999"
                  />
                  {errors.telefone && (
                    <p className="mt-1 font-body text-xs text-red-500">{errors.telefone.message}</p>
                  )}
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="mensagem" className="block font-body text-sm font-medium text-brand-text mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    rows={4}
                    {...register("mensagem")}
                    className="w-full rounded-xl border border-brand-sage/15 bg-brand-bg/50 px-4 py-3 font-body text-sm text-brand-text placeholder:text-brand-muted/40 outline-none transition-colors focus:border-brand-sage focus:ring-2 focus:ring-brand-sage/20 resize-none"
                    placeholder="Conte como podemos ajudar..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-brand-sage text-white rounded-full px-8 py-3.5 text-base font-medium shadow-lg shadow-brand-sage/25 transition-all hover:bg-brand-sage-dark hover:shadow-xl hover:shadow-brand-sage/30 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </button>
              </form>
            )}
          </motion.div>

          {/* ─── Contact Info + Map ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              <a
                href="https://wa.me/5516999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-brand-sage/10 bg-brand-sage/5 hover:bg-brand-sage/10 transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-brand-sage/15 text-brand-sage flex items-center justify-center shrink-0">
                  <MessageCircle size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block font-body text-sm font-medium text-brand-text">
                    WhatsApp
                  </span>
                  <span className="block font-body text-sm text-brand-muted/60">
                    (16) 99999-9999
                  </span>
                </div>
              </a>

              <a
                href="mailto:elis@example.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-brand-sage/10 bg-brand-sage/5 hover:bg-brand-sage/10 transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-brand-sage/15 text-brand-sage flex items-center justify-center shrink-0">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block font-body text-sm font-medium text-brand-text">
                    Email
                  </span>
                  <span className="block font-body text-sm text-brand-muted/60">
                    elis@example.com
                  </span>
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-brand-sage/10 bg-brand-sage/5 hover:bg-brand-sage/10 transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-brand-sage/15 text-brand-sage flex items-center justify-center shrink-0">
                  <Camera size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block font-body text-sm font-medium text-brand-text">
                    Instagram
                  </span>
                  <span className="block font-body text-sm text-brand-muted/60">
                    @elisreginaborges
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-brand-sage/10 bg-brand-sage/5">
                <div className="w-11 h-11 rounded-full bg-brand-sage/15 text-brand-sage flex items-center justify-center shrink-0">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block font-body text-sm font-medium text-brand-text">
                    Endereço
                  </span>
                  <span className="block font-body text-sm text-brand-muted/60">
                    Franca/SP — Atendimento presencial e online
                  </span>
                </div>
              </div>
            </div>

            {/* Google Maps iframe */}
            <div className="rounded-xl overflow-hidden border border-brand-sage/10 shadow-sm">
              <iframe
                title="Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37383.769394344085!2d-47.4203802877629!3d-20.538649937412087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a5b3b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sFranca%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
