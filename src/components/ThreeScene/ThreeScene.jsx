/*
 * File: src/components/ThreeScene/ThreeScene.jsx
 * Description: Lightweight interactive 3D hero scene.
 */

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sphere,
  Stars,
  Torus,
} from "@react-three/drei";
import "./ThreeScene.css";

const CoreObject = () => {
  const groupRef = useRef();
  const innerRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.x = time * 0.18;
      groupRef.current.rotation.y = time * 0.28;
    }

    if (innerRef.current) {
      innerRef.current.rotation.x = -time * 0.35;
      innerRef.current.rotation.z = time * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[1.15, 32, 32]}>
        <meshStandardMaterial
          color="#17141f"
          metalness={0.9}
          roughness={0.2}
          emissive="#4c1d95"
          emissiveIntensity={0.18}
        />
      </Sphere>

      <Torus
        ref={innerRef}
        args={[1.38, 0.018, 12, 64]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#8b5cf6"
          emissiveIntensity={2}
          metalness={0.7}
          roughness={0.15}
        />
      </Torus>

      <Torus
        args={[1.65, 0.012, 12, 64]}
        rotation={[0, Math.PI / 3, Math.PI / 5]}
      >
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={1.8}
          metalness={0.8}
          roughness={0.12}
        />
      </Torus>

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[0.08, 16, 16]} position={[1.8, 0.5, 0]}>
          <meshStandardMaterial
            color="#67e8f9"
            emissive="#22d3ee"
            emissiveIntensity={3}
          />
        </Sphere>
      </Float>

      <Float speed={1.6} rotationIntensity={1} floatIntensity={1.5}>
        <Sphere args={[0.06, 16, 16]} position={[-1.6, -0.8, 0.2]}>
          <meshStandardMaterial
            color="#a78bfa"
            emissive="#8b5cf6"
            emissiveIntensity={3}
          />
        </Sphere>
      </Float>
    </group>
  );
};

const SceneContent = () => (
  <>
    <ambientLight intensity={0.25} />

    <pointLight
      position={[3, 3, 4]}
      intensity={5}
      color="#8b5cf6"
    />

    <pointLight
      position={[-4, -2, 2]}
      intensity={3}
      color="#22d3ee"
    />

    <pointLight
      position={[0, 4, -4]}
      intensity={2}
      color="#ffffff"
    />

    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.35}>
      <CoreObject />
    </Float>

    <Stars
      radius={8}
      depth={5}
      count={250}
      factor={1.8}
      saturation={0}
      fade
      speed={0.4}
    />

    <OrbitControls
      enableZoom={false}
      enablePan={false}
      minPolarAngle={Math.PI / 2.4}
      maxPolarAngle={Math.PI / 1.7}
    />
  </>
);

const ThreeScene = () => (
  <div className="three-scene">
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <SceneContent />
    </Canvas>
  </div>
);

export default ThreeScene;