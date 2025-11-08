"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface PerfumeItem {
  id: number;
  name: string;
  description: string;
  price: string;
  color: string;
}

const perfumes: PerfumeItem[] = [
  {
    id: 1,
    name: "Midnight Pugarlov",
    description: "A bold, mysterious fragrance",
    price: "$120",
    color: "#1a1a1a",
  },
  {
    id: 2,
    name: "Golden Dawn",
    description: "Radiant and warm",
    price: "$135",
    color: "#D4AF37",
  },
  {
    id: 3,
    name: "Velvet Rose",
    description: "Soft and romantic",
    price: "$125",
    color: "#8B4A6B",
  },
  {
    id: 4,
    name: "Ocean Breeze",
    description: "Fresh and invigorating",
    price: "$115",
    color: "#4A90A4",
  },
];

export default function Collection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="collection" className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-luxury-gold mb-4">
            Collection
          </h2>
          <p className="text-luxury-beige/70 text-lg max-w-2xl mx-auto">
            Discover our curated selection of luxury fragrances, each crafted
            with precision and passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perfumes.map((perfume, index) => (
            <motion.div
              key={perfume.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(perfume.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="relative h-96 bg-luxury-black rounded-lg overflow-hidden border border-luxury-gold/20"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Perfume bottle placeholder */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${perfume.color}15 0%, ${perfume.color}05 100%)`,
                  }}
                >
                  <motion.div
                    className="w-24 h-64 rounded-t-lg border-2 border-luxury-gold/30"
                    style={{ backgroundColor: perfume.color }}
                    animate={{
                      rotateY: hoveredId === perfume.id ? 15 : 0,
                      rotateX: hoveredId === perfume.id ? -5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {/* Bottle cap */}
                    <div className="w-full h-8 bg-luxury-black/50 rounded-t-lg" />
                    {/* Gold accent */}
                    <div className="w-full h-1 bg-luxury-gold mt-4" />
                  </motion.div>
                </div>

                {/* Overlay info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-luxury-black to-transparent">
                  <motion.h3
                    className="text-xl font-serif text-luxury-gold mb-2"
                    animate={{
                      opacity: hoveredId === perfume.id ? 1 : 0.9,
                    }}
                  >
                    {perfume.name}
                  </motion.h3>
                  <p className="text-luxury-beige/70 text-sm mb-2">
                    {perfume.description}
                  </p>
                  <p className="text-luxury-gold font-semibold">
                    {perfume.price}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

