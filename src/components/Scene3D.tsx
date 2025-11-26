import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

const AnimatedSphere = ({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00f5ff" />
        
        <AnimatedSphere position={[-3, 1, 0]} color="#00f5ff" speed={1.5} />
        <AnimatedSphere position={[3, -1, -2]} color="#ff006e" speed={1.2} />
        <AnimatedSphere position={[0, 2, -3]} color="#8338ec" speed={1.8} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
