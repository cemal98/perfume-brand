"use client";

import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
// YENİ: Yazı eklemek için 'Text' import edildi.
import { ContactShadows, Environment, Float, Text } from "@react-three/drei";

export default function PerfumeBottle({
  scrollY = 0,
  mousePosition = { x: 0, y: 0 },
  // DÜZELTME: Varsayılan doluluk oranı 0 yapıldı.
  // Bu, animasyonun boş şişeyle başlamasını sağlar.
  fill = 0,
}: {
  scrollY?: number;
  mousePosition?: { x: number; y: number };
  fill?: number;
}) {
  const group = useRef<THREE.Group>(null);

  const LIQUID_BOTTOM = -1.0;
  const LIQUID_TOP = 0.4;

  const clipPlane = useMemo(
    () => new THREE.Plane(new THREE.Vector3(0, -1, 0), LIQUID_TOP),
    []
  );

  // --- Materyaller ---
  const glassMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#ffffff"),
        roughness: 0,
        transmission: 1,
        thickness: 1.0,
        ior: 1.5,
        envMapIntensity: 1,
      }),
    []
  );

  const liquidMat = useMemo(() => {
    const m = new THREE.MeshPhysicalMaterial({
      color: "#E5A04D",
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.9,
      transparent: true,
      ior: 1.33,
      thickness: 0.5,
      envMapIntensity: 1.2,
    });
    m.clippingPlanes = [clipPlane];
    m.clipShadows = true;
    return m;
  }, [clipPlane]);

  const capMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#151515",
        roughness: 0.2,
        metalness: 0.9,
      }),
    []
  );

  const goldMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#D4AF37",
        metalness: 1,
        roughness: 0.15,
      }),
    []
  );

  // Animasyon
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = scrollY * 0.4 + mousePosition.x * 0.2;
      group.current.rotation.x = mousePosition.y * -0.2;
    }
    const height = THREE.MathUtils.lerp(
      LIQUID_BOTTOM,
      LIQUID_TOP,
      THREE.MathUtils.clamp(fill, 0, 1)
    );
    clipPlane.constant = height;
  });

  const points: THREE.Vector2[] = useMemo(() => {
    return [
      new THREE.Vector2(0.01, -1.1),
      new THREE.Vector2(0.6, -1.1),
      new THREE.Vector2(0.65, -0.5),
      new THREE.Vector2(0.5, 0.5),
      new THREE.Vector2(0.25, 0.8),
      new THREE.Vector2(0.25, 0.95),
      new THREE.Vector2(0.28, 1.0),
    ];
  }, []);
  const shape = useMemo(() => new THREE.LatheGeometry(points, 70), [points]);

  return (
    <group ref={group} position={[0, -1.0, 0]} dispose={null}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        {/* Şişe Gövdesi */}
        <mesh geometry={shape} material={glassMat} />
        {/* Parfüm Sıvısı */}
        <mesh geometry={shape} material={liquidMat} />

        {/* --- YENİ: Şişe Üzerindeki 'Pugarlov' Yazısı --- */}
        <Text
          font="/fonts/PlayfairDisplay-Regular.ttf" // Örnek font yolu, projenize uygun fontu eklemelisiniz.
          fontSize={0.18}
          color="#1A1A1A"
          position={[0, -0.2, 0.66]} // Şişenin ön yüzeyine yakın konumlandırıldı
          rotation={[0, 0, 0]}
          anchorX="center"
          anchorY="middle"
        >
          Pugarlov
        </Text>

        {/* Püskürtme Mekanizması */}
        <group position={[0, 1.0, 0]}>
          <mesh
            geometry={new THREE.CylinderGeometry(0.3, 0.3, 0.1, 64)}
            material={goldMat}
          />
          <mesh
            geometry={new THREE.CylinderGeometry(0.2, 0.2, 0.08, 64)}
            material={goldMat}
            position={[0, 0.14, 0]}
          />
          <mesh
            geometry={new THREE.CylinderGeometry(0.03, 0.03, 0.08, 32)}
            material={goldMat}
            position={[0, 0.14, 0.2]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
        
        {/* Kapak */}
        <mesh
          geometry={new THREE.CylinderGeometry(0.32, 0.3, 0.8, 64)}
          material={capMat}
          position={[0, 1.54, 0]}
        />
      </Float>

      {/* Gölge ve Çevre */}
      <ContactShadows
        position={[0, -1.8, 0]}
        opacity={0.5}
        scale={10}
        blur={2.5}
      />
      <Environment preset="city" />
    </group>
  );
}