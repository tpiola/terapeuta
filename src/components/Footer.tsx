import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white/60">
      <div className="container-peace py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-display text-lg text-white font-medium">
              Elis Regina Borges
            </p>
            <p className="font-body text-xs text-white/35">
              Terapeuta Integrativa · ABRATH · Franca/SP
            </p>
          </div>

          <div className="flex items-center gap-6 font-body text-sm">
            <Link
              href="https://wa.me/5516991115518"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </Link>
            <Link
              href="mailto:elisreginaoliveira.terapeuta@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </Link>
            <Link
              href="https://www.instagram.com/elisreginaoliveira.terapeuta/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </Link>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="https://wa.me/5516991115518"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-brand-sage text-white rounded-full px-9 py-4 text-base font-medium shadow-xl shadow-brand-sage/30 transition-all hover:bg-brand-sage-dark hover:shadow-2xl hover:shadow-brand-sage/35 hover:-translate-y-0.5 active:scale-[0.97]"
          >
            <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
            Fale comigo no WhatsApp
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[11px] text-white/25">
            &copy; 2026 Elis Regina Borges
          </p>
          <p className="font-body text-[11px] text-white/20 text-center max-w-sm leading-relaxed">
            PICS · Práticas Integrativas e Complementares — não substituem atendimento médico.
          </p>
        </div>
      </div>
    </footer>
  );
}
