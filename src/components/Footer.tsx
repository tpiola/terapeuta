import { Flower2 } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    label: "WhatsApp",
    value: "(16) 99111-5518",
    href: "https://wa.me/5516991115518",
  },
  {
    label: "Email",
    value: "elisreginaoliveira.terapeuta@gmail.com",
    href: "mailto:elisreginaoliveira.terapeuta@gmail.com",
  },
  {
    label: "Instagram",
    value: "@elisreginaoliveira.terapeuta",
    href: "https://www.instagram.com/elisreginaoliveira.terapeuta/",
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white/70 relative">
      {/* ─── Animated Background (dark version): Orbs + Dot Grid ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-sage/8 blur-3xl animate-[drift-1_16s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 -left-20 w-96 h-96 rounded-full bg-brand-lavender/6 blur-3xl animate-[drift-2_18s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl animate-[drift-3_20s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-dot-grid opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>
      {/* Wave Divider */}
      <div className="relative w-full overflow-hidden leading-[0]" aria-hidden="true">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-auto"
        >
          <path
            d="M0 40c60-20 180-40 360-20s360 40 540 15 360-40 540-15v80H0V40z"
            fill="#FAF8F5"
          />
        </svg>
      </div>

      <div className="container-peace relative py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="#hero" className="flex items-center gap-2.5 group">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-white transition-colors group-hover:bg-brand-sage">
                <Flower2 size={18} strokeWidth={1.5} />
              </span>
              <span className="font-display text-lg font-semibold text-white">
                Elis Regina Borges
              </span>
            </Link>
            <p className="font-body text-sm text-white/50 text-center md:text-left max-w-xs">
              Terapia integrativa humanizada em Franca/SP. ABRATH · PICS.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-3">
            {footerLinks.map((link) => (
              <div key={link.label} className="flex items-center gap-2">
                <span className="font-body text-xs text-white/40 min-w-[4.5rem] text-right">
                  {link.label}
                </span>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.value}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            &copy; 2026 Elis Regina Borges
          </p>
          <p className="font-body text-[11px] text-white/30 text-center max-w-md leading-relaxed">
            As Práticas Integrativas e Complementares (PICS) são reconhecidas pelo Ministério da
            Saúde e atuam de forma complementar — não substituem tratamentos médicos convencionais.
          </p>
        </div>
      </div>
    </footer>
  );
}
