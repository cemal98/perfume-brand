"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Navbar'ın scroll ile belirmesi için
  const opacity = useTransform(scrollY, [0, 50], [0, 1]);
  const y = useTransform(scrollY, [0, 50], [-50, 0]);

  // Scroll dinleyicisi
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // İYİLEŞTİRME: Mobil menü açıkken body'nin kaymasını engelle
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Component unmount olduğunda stilin sıfırlandığından emin ol
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Scent", href: "#about" },
    { name: "Collection", href: "#collection" },
    { name: "Story", href: "#story" },
  ];

  // İYİLEŞTİRME: Daha temiz animasyonlar için variants kullanımı
  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: { type: "tween", duration: 0.3 },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "tween", duration: 0.3 },
    },
  };

  const menuItemsContainerVariants = {
    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const menuItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          isScrolled ? "bg-luxury-black/80 backdrop-blur-lg" : "bg-transparent"
        }`}
        style={{ opacity, y }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex items-center justify-between">
            <motion.a
              href="#hero"
              className="text-2xl font-serif text-luxury-gold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pugarlov
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-luxury-beige hover:text-luxury-gold transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-luxury-gold z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {/* Buton artık menü açıkken X göstermiyor, çünkü X menünün içinde */}
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* İYİLEŞTİRME: Tam ekran mobil menü (Overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-luxury-black"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Kapatma Butonu */}
            <button
              className="absolute top-6 right-6 text-luxury-gold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} />
            </button>

            <motion.div
              className="flex flex-col items-center space-y-8"
              variants={menuItemsContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-3xl font-serif text-luxury-beige hover:text-luxury-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  variants={menuItemVariants}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}