"use client";

import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float, Html, PerspectiveCamera, Sparkles, MeshReflectorMaterial, ContactShadows } from "@react-three/drei";

interface DslrCameraProps {
  isZoomed: boolean;
  onScreenClick: () => void;
}

export function DslrCameraModel({ isZoomed, onScreenClick }: DslrCameraProps) {
  const groupRef = useRef<THREE.Group>(null);
  const lensRingRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // High contrast materials for luxury DSLR Camera
  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#2A2A2E", // Lighter charcoal metallic so geometry is clearly defined
        roughness: 0.25,
        metalness: 0.9,
      }),
    []
  );

  const gripMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1A1A1D",
        roughness: 0.6,
        metalness: 0.4,
      }),
    []
  );

  const goldAccentMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#F3E5AB", // Champagne Gold
        roughness: 0.1,
        metalness: 0.95,
      }),
    []
  );

  const lensBarrelMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#3B3B42",
        roughness: 0.2,
        metalness: 0.85,
      }),
    []
  );

  const glassLensMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#2563EB",
        metalness: 0.1,
        roughness: 0.05,
        transmission: 0.9,
        ior: 1.5,
        reflectivity: 0.9,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
      }),
    []
  );

  const screenBorderMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1F1F24",
        roughness: 0.2,
        metalness: 0.9,
      }),
    []
  );

  // Auto-rotation and camera state animation
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!isZoomed) {
      // 360 degree slow rotation on Y axis
      groupRef.current.rotation.y += delta * 0.6;
      // Gentle floating/tilt motion
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.15;
      groupRef.current.position.z = 0;
    } else {
      // Rotate camera back face towards screen when zoomed
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, Math.PI, delta * 4);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, delta * 4);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, 0, delta * 4);
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, 2.8, delta * 3.5);
    }

    if (lensRingRef.current) {
      lensRingRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* --- CAMERA MAIN BODY --- */}
      {/* Center Body Box */}
      <mesh material={bodyMaterial} position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 2.2, 1.4]} />
      </mesh>

      {/* Top Viewfinder Prism / Pentaprism */}
      <mesh material={bodyMaterial} position={[0, 1.3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.7, 1.1, 0.6, 4]} />
      </mesh>

      {/* Top Hotshoe */}
      <mesh material={goldAccentMaterial} position={[0, 1.65, 0]}>
        <boxGeometry args={[0.5, 0.1, 0.5]} />
      </mesh>

      {/* Right Hand Grip */}
      <mesh material={gripMaterial} position={[1.4, -0.1, 0.3]} castShadow receiveShadow>
        <boxGeometry args={[0.6, 2.1, 1.2]} />
      </mesh>

      {/* Red/Gold Accent Line on Grip */}
      <mesh material={goldAccentMaterial} position={[1.2, 0.4, 0.92]}>
        <boxGeometry args={[0.2, 0.6, 0.05]} />
      </mesh>

      {/* Mode Dial Top Left */}
      <mesh material={goldAccentMaterial} position={[-1.1, 1.25, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
      </mesh>

      {/* Shutter Button Top Right */}
      <mesh material={goldAccentMaterial} position={[1.2, 1.15, 0.4]}>
        <cylinderGeometry args={[0.2, 0.2, 0.15, 32]} />
      </mesh>

      {/* --- CAMERA LENS (FRONT) --- */}
      <group position={[0, -0.1, 0.7]}>
        {/* Main Outer Lens Barrel */}
        <mesh material={lensBarrelMaterial} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.95, 1.1, 1.6, 32]} />
        </mesh>

        {/* Gold Accent Ring 1 */}
        <mesh material={goldAccentMaterial} position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.97, 0.04, 16, 32]} />
        </mesh>

        {/* Focus Ring Texture / Ring 2 */}
        <mesh ref={lensRingRef} material={goldAccentMaterial} position={[0, 0, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.93, 0.93, 0.25, 32]} />
        </mesh>

        {/* Front Lens Glass Element */}
        <mesh material={glassLensMaterial} position={[0, 0, 0.82]}>
          <sphereGeometry args={[0.88, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.35]} />
        </mesh>
      </group>

      {/* --- CAMERA REAR LCD DISPLAY SCREEN --- */}
      <group position={[0, -0.05, -0.71]} rotation={[0, Math.PI, 0]}>
        {/* Screen Bezel */}
        <mesh material={screenBorderMaterial}>
          <boxGeometry args={[2.5, 1.7, 0.05]} />
        </mesh>

        {/* LCD Screen Display Surface */}
        <mesh
          position={[0, 0, 0.03]}
          onClick={(e) => {
            e.stopPropagation();
            onScreenClick();
          }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <planeGeometry args={[2.3, 1.5]} />
          <meshBasicMaterial color={hovered ? "#FFF099" : "#000000"} />

          {/* Dynamic HTML Content projected inside 3D Camera LCD Display */}
          <Html
            transform
            distanceFactor={1.2}
            position={[0, 0, 0.02]}
            style={{
              width: "480px",
              height: "310px",
              pointerEvents: "auto",
              userSelect: "none",
            }}
          >
            <div
              onClick={onScreenClick}
              className={`w-full h-full rounded-md overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black border ${
                hovered ? "border-amber-400 shadow-[0_0_25px_rgba(212,175,55,0.8)]" : "border-amber-500/50"
              } flex flex-col justify-between p-4 cursor-pointer transition-all duration-300 relative group`}
            >
              {/* Camera OSD Header Overlay */}
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-amber-400/90 z-10 border-b border-amber-500/20 pb-2 bg-black/60 backdrop-blur-md px-2 rounded">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  REC [4K 60FPS]
                </span>
                <span>LUMIX / ISO 100</span>
                <span>F/1.4 1/1000s</span>
              </div>

              {/* Center Content Preview */}
              <div className="relative my-auto text-center flex flex-col items-center justify-center gap-2">
                <div className="inline-block px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-amber-500/20 text-amber-300 border border-amber-400/40">
                  Luxury Jewelry Agency
                </div>
                <h2 className="text-xl font-extrabold tracking-tight text-white font-serif">
                  AURA <span className="text-amber-400">HAUTE</span> MEDIA
                </h2>
                <p className="text-[11px] text-zinc-300 max-w-[80%] leading-relaxed">
                  {isZoomed
                    ? "Tap anywhere to explore campaigns & services"
                    : "Click to turn camera on & view portfolio"}
                </p>

                <button className="mt-2 px-4 py-1.5 text-xs font-semibold rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg hover:brightness-125 transition-all flex items-center gap-1">
                  {isZoomed ? "ENTER PORTFOLIO" : "INSPECT CAMERA SCREEN"}
                </button>
              </div>

              {/* Camera OSD Footer */}
              <div className="flex justify-between items-center text-[9px] font-mono text-zinc-400 z-10 bg-black/60 px-2 py-1 rounded border-t border-amber-500/20">
                <span>RAW 14-BIT</span>
                <span className="text-amber-400 font-bold">CLICK TO ZOOM IN</span>
                <span>BATTERY 98%</span>
              </div>

              {/* Grid Lines Overlay */}
              <div className="absolute inset-0 border border-amber-500/10 pointer-events-none grid grid-cols-3 grid-rows-3">
                {Array.from({ length: 9 }).map((_, idx) => (
                  <div key={idx} className="border border-amber-500/5"></div>
                ))}
              </div>
            </div>
          </Html>
        </mesh>
      </group>
    </group>
  );
}

export function HeroCanvas({
  isZoomed,
  onScreenClick,
}: {
  isZoomed: boolean;
  onScreenClick: () => void;
}) {
  return (
    <div className="relative w-full h-full min-h-[550px] md:min-h-[700px] flex items-center justify-center">
      {/* Background Sparkles / Studio Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/20 via-black to-black opacity-80" />

      {/* R3F Canvas */}
      <React.Suspense
        fallback={
          <div className="flex flex-col items-center justify-center h-full text-amber-400 font-serif">
            <div className="w-12 h-12 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm tracking-widest uppercase">Loading 3D Studio Camera...</p>
          </div>
        }
      >
        <CanvasContainer isZoomed={isZoomed} onScreenClick={onScreenClick} />
      </React.Suspense>
    </div>
  );
}

import { Canvas } from "@react-three/fiber";

function CanvasContainer({
  isZoomed,
  onScreenClick,
}: {
  isZoomed: boolean;
  onScreenClick: () => void;
}) {
  return (
    <Canvas
      shadows
      className="w-full h-full"
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={45} />

      {/* Vibrant Studio Lighting Setup to outline 3D DSLR Camera */}
      <ambientLight intensity={1.8} />
      <directionalLight
        position={[6, 10, 8]}
        intensity={3.5}
        color="#FFFBF0"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-6, 4, -5]} intensity={2.5} color="#D4AF37" />
      <directionalLight position={[0, -4, 5]} intensity={2.0} color="#FFFFFF" />
      <pointLight position={[0, 5, 4]} intensity={3.0} color="#FFD700" />
      <pointLight position={[-4, 2, 3]} intensity={2.5} color="#F3E5AB" />

      <Sparkles count={50} scale={10} size={2.5} speed={0.4} color="#D4AF37" />

      {/* 3D Camera Object */}
      <Float speed={isZoomed ? 0 : 1.5} rotationIntensity={isZoomed ? 0 : 0.2} floatIntensity={isZoomed ? 0 : 0.3}>
        <DslrCameraModel isZoomed={isZoomed} onScreenClick={onScreenClick} />
      </Float>

      {/* Mirror Ground Reflection */}
      <mesh position={[0, -2.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={512}
          mirror={0.6}
          mixBlur={0.8}
          mixStrength={2.0}
          roughness={0.4}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#121215"
          metalness={0.9}
        />
      </mesh>
    </Canvas>
  );
}
