import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function Ocean() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      // Simple wave animation
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[100, 100, 50, 50]} />
      <meshPhongMaterial 
        color="#001B3D" 
        transparent 
        opacity={0.8} 
        wireframe 
        emissive="#003366"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function ShipModel() {
  const shipRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (shipRef.current) {
      const t = state.clock.getElapsedTime();
      // Ship rocking motion
      shipRef.current.rotation.z = Math.sin(t * 0.8) * 0.05;
      shipRef.current.rotation.x = Math.cos(t * 0.5) * 0.03;
      shipRef.current.position.y = Math.sin(t * 1.2) * 0.1;
    }
  });

  return (
    <group ref={shipRef}>
      {/* Hull */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1.5, 0.8, 5]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Bow (Front) */}
      <mesh position={[0, 0.4, 2.8]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.8, 1.2, 4]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Superstructure (Cabins) */}
      <mesh position={[0, 1.2, -0.5]}>
        <boxGeometry args={[1.2, 1, 3]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      
      {/* Upper Deck */}
      <mesh position={[0, 1.8, -1]}>
        <boxGeometry args={[1, 0.5, 2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Funnels */}
      <mesh position={[0, 2.2, -1.5]}>
        <cylinderGeometry args={[0.2, 0.2, 0.8, 16]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      <mesh position={[0, 2.2, -0.8]}>
        <cylinderGeometry args={[0.2, 0.2, 0.8, 16]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Windows (Emissive) */}
      <mesh position={[0.61, 1.2, -0.5]}>
        <planeGeometry args={[0.1, 0.1]} />
        <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

function Wake() {
  const points = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (points.current) {
      const time = state.clock.getElapsedTime();
      const positions = points.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] -= 0.1; // Move back
        if (positions[i + 2] < -10) {
          positions[i + 2] = 2; // Reset to front
          positions[i] = (Math.random() - 0.5) * 2;
        }
        positions[i + 1] = Math.sin(time + positions[i + 2]) * 0.1;
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const count = 200;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 2;
    pos[i * 3 + 1] = 0;
    pos[i * 3 + 2] = Math.random() * 10 - 5;
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={pos}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#40E0D0" size={0.05} transparent opacity={0.6} />
    </points>
  );
}

export default function ShipScene() {
  return (
    <div className="w-full h-[500px] glass-morphism rounded-[40px] overflow-hidden border-gold/20 shadow-2xl relative">
      <div className="absolute top-6 left-6 z-10">
        <h3 className="text-gold font-black text-sm tracking-widest uppercase">מערכת ניווט בזמן אמת</h3>
        <p className="text-pearl/40 text-[10px]">סימולציה של הפלגת יוקרה</p>
      </div>
      
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[8, 5, 10]} fov={40} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
          
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <ShipModel />
          </Float>
          
          <Ocean />
          <Wake />
          
          <OrbitControls 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 2.1} 
            minPolarAngle={Math.PI / 4}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
