"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PerfumeBottle from "./PerfumeBottle";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 2600;

    const animate = () => {
      const t = Math.min((Date.now() - start) / duration, 1);
      setProgress(t);
      if (t < 1) requestAnimationFrame(animate);
      else {
        setShowLogo(true);
        setTimeout(onComplete, 1000);
      }
    };
    animate();
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-w-5xl h-[70vh]">
        <Canvas
          camera={{ position: [0, 0.3, 3], fov: 40 }}
          gl={{ localClippingEnabled: true }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 6, 5]} intensity={1.4} />
          <PerfumeBottle fill={progress} />
        </Canvas>
      </div>

      {showLogo && (
        <motion.h1
          className="absolute text-5xl md:text-7xl font-serif text-luxury-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pugarlov
        </motion.h1>
      )}
    </motion.div>
  );
}