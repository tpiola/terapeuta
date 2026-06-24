"use client";
import { ScrollReveal, TiltCard } from "@/components/motion/ScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ScrollReveal><Hero /></ScrollReveal>
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><Trust /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
