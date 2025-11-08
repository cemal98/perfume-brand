"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroCanvas from "./HeroCanvas"; // HeroCanvas bileşenini import ediyoruz

export default function Hero() {
  // Fare ve scroll pozisyonunu takip etmek için state'ler
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Scroll olayını dinle
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fare hareketlerini dinle
  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);
    setMousePosition({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove} // Fare hareketlerini tüm section'dan alıyoruz
      className="relative w-full h-screen" // Arka plan rengi buradan veya CSS'den gelebilir
    >
      {/* Sayfanın metin içeriği. Canvas'ın önünde olmalı (z-10) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center pointer-events-none">
        <motion.h1
          className="text-6xl md:text-8xl font-serif text-luxury-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Pugarlov
        </motion.h1>
        <motion.p
          className="text-luxury-beige mt-4 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The Essence of Elegance
        </motion.p>
      </div>

      {/* 
        --- MOBİL SCROLL ÇÖZÜMÜ BURADA UYGULANIYOR ---
        HeroCanvas'ı bu özel div ile sarmalıyoruz.
        - pointer-events-none: Mobil için dokunmayı devre dışı bırakır, scroll çalışır.
        - md:pointer-events-auto: Masaüstü için dokunmayı/fareyi tekrar aktif eder.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto">
        <HeroCanvas scrollY={scrollY} mousePosition={mousePosition} />
      </div>
    </section>
  );
}