"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxText from "@/components/ParallaxText";
import Collection from "@/components/Collection";

// Dynamic import for Canvas (client-only, prevents SSR issues)
const HeroCanvas = dynamic(() => import("@/components/HeroCanvas"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-luxury-black" />,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollValue, setScrollValue] = useState(0);

  // Smooth scrolling with Lenis + scroll tracking
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Track scroll position with Lenis
    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      setScrollValue(Math.min(scroll / 1000, 1));
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Mouse position tracking for bottle interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <main className="relative">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-black to-luxury-black/80" />

        {/* 3D Bottle Container */}
        <div className="absolute inset-0 w-full h-full">
          <HeroCanvas scrollY={scrollValue} mousePosition={mousePosition} />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6 md:px-12">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-luxury-gold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Pugarlov
          </motion.h1>
          <ParallaxText speed={0.3}>
            <motion.p
              className="text-xl md:text-2xl text-luxury-beige/80 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Timeless fragrance for the modern connoisseur
            </motion.p>
          </ParallaxText>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-luxury-gold/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-3 bg-luxury-gold rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <ParallaxText speed={0.5}>
            <motion.h2
              className="text-5xl md:text-7xl font-serif text-luxury-gold mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              About the Scent
            </motion.h2>
          </ParallaxText>
          <motion.div
            className="space-y-6 text-luxury-beige/80 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              Pugarlov is a sophisticated blend of rare ingredients, carefully
              curated to create an unforgettable olfactory experience. Each
              note tells a story, each layer reveals a new dimension of luxury.
            </p>
            <p>
              Our signature fragrance combines the warmth of golden amber with
              the freshness of white flowers, creating a timeless scent that
              transcends trends and defines elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collection Section */}
      <Collection />

      {/* Brand Story Section */}
      <section
        id="story"
        className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-b from-luxury-black to-luxury-black/95"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif text-luxury-gold mb-4">
              Brand Story
            </h2>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: "Heritage",
                content:
                  "Born from a legacy of craftsmanship and passion, Pugarlov represents generations of perfumery expertise.",
              },
              {
                title: "Craftsmanship",
                content:
                  "Every bottle is a testament to our commitment to excellence, blending traditional techniques with modern innovation.",
              },
              {
                title: "Vision",
                content:
                  "We believe fragrance is an art form, a way to express individuality and evoke emotions that words cannot capture.",
              },
            ].map((story, index) => (
              <ParallaxText key={index} speed={0.4}>
                <motion.div
                  className="max-w-3xl mx-auto"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <h3 className="text-3xl md:text-4xl font-serif text-luxury-gold mb-4">
                    {story.title}
                  </h3>
                  <p className="text-luxury-beige/70 text-lg leading-relaxed">
                    {story.content}
                  </p>
                </motion.div>
              </ParallaxText>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

