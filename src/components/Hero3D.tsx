import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, Sparkles, OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useState, useMemo } from "react";
import * as THREE from "three";

/* ============ HERO 3D SCENE ============ */
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
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0.6, 6], fov: 45 }} gl={{ antialias: true, alpha: true }} className="!absolute inset-0">
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#a855f7" />
        <pointLight position={[-5, -3, 2]} intensity={1} color="#22d3ee" />
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

/* ============ FIXED PAGE BACKGROUND ============ */
function BgParticles() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    ref.current.rotation.x = state.clock.elapsedTime * 0.015;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={800} array={positions} itemSize={3} args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#a855f7" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function BgFloater({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.3} wireframe />
      </mesh>
    </Float>
  );
}

export function PageBackground3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 55 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#a855f7" />
          <pointLight position={[-10, -10, 5]} intensity={0.6} color="#22d3ee" />
          <BgParticles />
          <BgFloater position={[-6, 3, -4]} color="#8b5cf6" scale={1.2} />
          <BgFloater position={[6, -2, -5]} color="#22d3ee" scale={1} />
          <BgFloater position={[4, 4, -6]} color="#ec4899" scale={0.8} />
          <BgFloater position={[-5, -4, -3]} color="#f59e0b" scale={0.9} />
          <Sparkles count={50} scale={[20, 12, 10]} size={1.5} speed={0.2} color="#a855f7" opacity={0.4} />
        </Suspense>
      </Canvas>
    </div>
  );
}

/* ============ 3D STEP BADGE ============ */
function StepShape({ index }: { index: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  const colors = ["#8b5cf6", "#22d3ee", "#ec4899", "#f59e0b", "#10b981"];
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.4;
    ref.current.rotation.y = state.clock.elapsedTime * 0.5;
  });
  const geom = index % 3;
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
      <mesh ref={ref}>
        {geom === 0 && <torusKnotGeometry args={[0.7, 0.22, 100, 16]} />}
        {geom === 1 && <icosahedronGeometry args={[1, 0]} />}
        {geom === 2 && <octahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial color={colors[index]} metalness={0.85} roughness={0.15} emissive={colors[index]} emissiveIntensity={0.4} />
      </mesh>
    </Float>
  );
}

export function Step3D({ index }: { index: number }) {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3.2], fov: 45 }} gl={{ alpha: true, antialias: true }} className="!absolute inset-0">
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} intensity={1.2} color="#a855f7" />
        <pointLight position={[-3, -2, 2]} intensity={0.8} color="#22d3ee" />
        <StepShape index={index} />
        <Sparkles count={30} scale={[4, 3, 3]} size={1.5} speed={0.3} color="#a855f7" />
      </Suspense>
    </Canvas>
  );
}

/* ============ CTA / SCORE 3D ============ */
function CtaTorus() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1, 0.32, 200, 32]} />
      <MeshDistortMaterial color="#8b5cf6" emissive="#a855f7" emissiveIntensity={0.5} metalness={0.9} roughness={0.1} distort={0.3} speed={2} />
    </mesh>
  );
}

export function Cta3D() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4.5], fov: 50 }} gl={{ alpha: true, antialias: true }} className="!absolute inset-0">
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[4, 4, 4]} intensity={1.5} color="#a855f7" />
        <pointLight position={[-4, -2, 2]} intensity={1} color="#22d3ee" />
        <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
          <CtaTorus />
        </Float>
        <Sparkles count={80} scale={[8, 6, 4]} size={2} speed={0.3} color="#a855f7" />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}

/* ============ TILT CARD WRAPPER (CSS 3D) ============ */
export function TiltCard({ children, className = "", intensity = 12 }: { children: React.ReactNode; className?: string; intensity?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(1000px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateZ(10px)`);
  };
  const onLeave = () => setTransform("perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)");
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform, transformStyle: "preserve-3d", transition: "transform 0.2s ease-out" }}
      className={className}
    >
      {children}
    </div>
  );
}
