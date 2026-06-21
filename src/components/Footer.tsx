import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white/55">
      <div className="container-peace py-10">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex flex-col items-center gap-1">
            <p className="font-display text-lg text-white font-medium">
              Elis Regina Borges
            </p>
            <p className="font-body text-xs text-white/30">
              Terapeuta Integrativa · ABRATH · Franca/SP
            </p>
          </div>

          <div className="flex items-center gap-6 font-body text-sm">
            <Link href="https://wa.me/5516991115518" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              WhatsApp
            </Link>
            <Link href="mailto:elisreginaoliveira.terapeuta@gmail.com" className="hover:text-white transition-colors">
              Email
            </Link>
            <Link href="https://www.instagram.com/elisreginaoliveira.terapeuta/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </Link>
          </div>

          {/* CTA */}
          <Link
            href="https://wa.me/5516991115518"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-brand-sage text-white rounded-full px-8 py-3.5 text-base font-medium shadow-lg shadow-brand-sage/25 transition-all hover:bg-brand-sage-dark hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97]"
          >
            <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
            Fale comigo no WhatsApp
          </Link>

          <div className="pt-6 border-t border-white/6 w-full flex flex-col items-center gap-2">
            <p className="font-body text-[11px] text-white/20">
              &copy; 2026 Elis Regina Borges
            </p>
            <p className="font-body text-[11px] text-white/16 text-center max-w-xs leading-relaxed">
              PICS · Práticas Integrativas e Complementares — não substituem atendimento médico.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
