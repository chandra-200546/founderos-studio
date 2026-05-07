import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, Sparkles, Icosahedron, TorusKnot, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function CoreOrb() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.6, 6]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        emissive="#a855f7"
        emissiveIntensity={0.4}
        roughness={0.1}
        metalness={0.85}
        distort={0.45}
        speed={1.6}
      />
    </mesh>
  );
}

function OrbitingShape({ radius, speed, offset, geometry, color }: { radius: number; speed: number; offset: number; geometry: "knot" | "ico" | "tor"; color: string }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    if (!ref.current) return;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 1.4) * 0.6;
    ref.current.rotation.x = t;
    ref.current.rotation.y = t * 0.6;
  });
  return (
    <mesh ref={ref} castShadow>
      {geometry === "knot" && <torusKnotGeometry args={[0.28, 0.09, 100, 16]} />}
      {geometry === "ico" && <icosahedronGeometry args={[0.32, 0]} />}
      {geometry === "tor" && <torusGeometry args={[0.32, 0.1, 16, 60]} />}
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.15} emissive={color} emissiveIntensity={0.35} />
    </mesh>
  );
}

function Rings() {
  const ref = useRef<THREE.Group>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.08;
  });
  return (
    <group ref={ref}>
      {[2.6, 3.1, 3.6].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.15, i * 0.3, 0]}>
          <torusGeometry args={[r, 0.008, 16, 200]} />
          <meshBasicMaterial color={i === 1 ? "#22d3ee" : "#a855f7"} transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  );
}

export function Hero3D() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.6, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#a855f7" />
        <pointLight position={[-5, -3, 2]} intensity={1} color="#22d3ee" />
        <directionalLight position={[0, 5, 5]} intensity={0.6} />

        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
          <CoreOrb />
        </Float>

        <Rings />

        <OrbitingShape radius={2.6} speed={0.5} offset={0} geometry="knot" color="#22d3ee" />
        <OrbitingShape radius={3.1} speed={-0.4} offset={1.5} geometry="ico" color="#ec4899" />
        <OrbitingShape radius={3.6} speed={0.35} offset={3} geometry="tor" color="#8b5cf6" />
        <OrbitingShape radius={2.9} speed={-0.55} offset={4.2} geometry="ico" color="#f59e0b" />
        <OrbitingShape radius={3.3} speed={0.45} offset={2.2} geometry="knot" color="#10b981" />

        <Sparkles count={120} scale={[10, 6, 6]} size={2.5} speed={0.4} color="#a855f7" opacity={0.8} />
        <Sparkles count={80} scale={[12, 8, 8]} size={1.5} speed={0.3} color="#22d3ee" opacity={0.6} />

        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} enableDamping />
      </Suspense>
    </Canvas>
  );
}

/* Floating product card 3D */
function FloatingCard({ position, rotation, color, label }: { position: [number, number, number]; rotation: [number, number, number]; color: string; label: string }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.15;
  });
  return (
    <group position={position} rotation={rotation}>
      <mesh ref={ref} castShadow>
        <boxGeometry args={[1.6, 1, 0.06]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} emissive={color} emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

export function Showcase3D() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true, antialias: true }} className="!absolute inset-0">
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 4, 4]} intensity={1.5} color="#a855f7" />
        <pointLight position={[-4, -2, 2]} intensity={1} color="#22d3ee" />
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
          <FloatingCard position={[-1.8, 0.4, 0]} rotation={[0.1, 0.4, -0.05]} color="#8b5cf6" label="Brand" />
        </Float>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <FloatingCard position={[0, -0.2, 0.5]} rotation={[-0.05, -0.1, 0.05]} color="#22d3ee" label="Site" />
        </Float>
        <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.9}>
          <FloatingCard position={[1.8, 0.5, 0]} rotation={[0.05, -0.4, 0.05]} color="#ec4899" label="Ads" />
        </Float>
        <Sparkles count={60} scale={[8, 5, 4]} size={2} speed={0.3} color="#a855f7" />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
