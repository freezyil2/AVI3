import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars, Html, useTexture } from '@react-three/drei';
import { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';

function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  // Load Earth textures
  const [colorMap, bumpMap, specularMap] = useTexture([
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
  ]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0015;
    }
  });

  const routes = [
    { pos: [1.5, 1, 1.8], name: 'נתיב צפוני' },
    { pos: [-1.2, -1.2, 2], name: 'נתיב קריבי' },
    { pos: [0.8, -0.5, 2.3], name: 'נתיב ים תיכוני' },
    { pos: [-2.2, 0.8, 1], name: 'נתיב אלסקה' },
    { pos: [2, -1, 1.2], name: 'נתיב המזרח' },
  ];

  return (
    <group>
      {/* Atmosphere Glow */}
      <Sphere args={[2.55, 64, 64]}>
        <meshPhongMaterial
          color="#40E0D0"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Main Earth Globe */}
      <Sphere ref={meshRef} args={[2.5, 64, 64]}>
        <meshPhongMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.05}
          specularMap={specularMap}
          specular={new THREE.Color('grey')}
          shininess={10}
        />
      </Sphere>

      {/* Clouds Layer */}
      <Sphere args={[2.52, 64, 64]}>
        <meshPhongMaterial
          color="white"
          transparent
          opacity={0.2}
          wireframe={false}
        />
      </Sphere>
      
      {routes.map((route, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh 
            position={route.pos as [number, number, number]}
            onPointerOver={() => setHovered(route.name)}
            onPointerOut={() => setHovered(null)}
          >
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={4} />
            {hovered === route.name && (
              <Html distanceFactor={10}>
                <div className="bg-ocean-deep/95 backdrop-blur-xl text-pearl px-4 py-2 rounded-xl border border-gold/50 text-sm font-bold whitespace-nowrap shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  {route.name}
                </div>
              </Html>
            )}
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function Float({ children, ...props }: any) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      group.current.position.y = Math.sin(t * props.speed) * props.floatIntensity;
    }
  });
  return <group ref={group}>{children}</group>;
}

export default function Globe() {
  return (
    <div className="w-full h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <GlobeMesh />
          <OrbitControls enableZoom={false} autoRotate={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
