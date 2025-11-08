"use client";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment, OrbitControls } from "@react-three/drei";
import PerfumeBottle from "./PerfumeBottle";

interface HeroCanvasProps {
  scrollY: number;
  mousePosition: { x: number; y: number };
}

export default function HeroCanvas({ scrollY, mousePosition }: HeroCanvasProps) {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 2]}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5.5]} fov={45} />
      
      {/* Lighting setup */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 10, 6]} intensity={2} color="#ffffff" castShadow />
      <directionalLight position={[-6, 5, -6]} intensity={0.8} color="#F4E4BC" />
      <pointLight position={[4, 8, 4]} intensity={1.5} color="#D4AF37" />
      <pointLight position={[-4, 3, -4]} intensity={0.6} color="#ffffff" />
      <spotLight
        position={[10, 12, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#ffffff"
        castShadow
      />
      
      {/* Environment for realistic reflections */}
      <Environment preset="sunset" />
      
      {/* Perfume bottle */}
      <PerfumeBottle scrollY={scrollY} mousePosition={mousePosition} />
      
      {/* Subtle orbit controls for better viewing (disabled by default, can enable for testing) */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={false}
        autoRotate={false}
      />
    </Canvas>
  );
}
