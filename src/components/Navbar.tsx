"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flower2, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-brand-sage/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container-peace flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-2.5 group shrink-0"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-sage/10 text-brand-sage transition-colors group-hover:bg-brand-sage group-hover:text-white">
            <Flower2 size={18} strokeWidth={1.5} />
          </span>
          <span className="font-display text-base md:text-lg font-semibold text-brand-text tracking-tight">
            Elis Regina Borges
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-brand-muted/80 rounded-lg transition-colors hover:text-brand-sage hover:bg-brand-sage/5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="https://wa.me/5516991115518"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-brand-sage/20 text-brand-sage transition-all hover:bg-brand-sage/10 hover:border-brand-sage/40 active:scale-[0.97]"
            aria-label="WhatsApp"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[18px] h-[18px]"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21z" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
          </Link>
          <Link
            href="#contato"
            className="inline-flex items-center gap-2 bg-brand-sage text-white rounded-full px-6 py-2.5 text-sm font-medium shadow-md shadow-brand-sage/20 transition-all hover:bg-brand-sage-dark hover:shadow-lg hover:shadow-brand-sage/30 active:scale-[0.97]"
          >
            Agendar Consulta
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-brand-text/70 transition-colors hover:bg-brand-sage/10"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 bg-brand-bg/95 backdrop-blur-xl md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col items-center justify-center h-full gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-8 py-3 font-display text-xl text-brand-text/80 transition-colors hover:text-brand-sage"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: 0.3, duration: 0.35 }}
                className="mt-8 flex flex-col items-center gap-3"
              >
                <Link
                  href="#contato"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 bg-brand-sage text-white rounded-full px-8 py-3 text-base font-medium shadow-lg shadow-brand-sage/25 transition-all hover:bg-brand-sage-dark active:scale-[0.97]"
                >
                  Agendar Consulta
                </Link>
                <Link
                  href="https://wa.me/5516991115518"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 border-2 border-brand-sage/25 text-brand-sage rounded-full px-8 py-3 text-base font-medium transition-all hover:border-brand-sage/50 hover:bg-brand-sage/5 active:scale-[0.97]"
                >
                  WhatsApp
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
