import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

const AnimatedSphere = ({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.5}
          speed={speed}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#00D9FF" />
        <pointLight position={[10, -10, -5]} intensity={0.6} color="#B026FF" />
        <spotLight position={[0, 10, 0]} intensity={0.5} color="#FF006B" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <AnimatedSphere position={[-3, 1, 0]} color="#00D9FF" speed={1.5} />
        <AnimatedSphere position={[3, -1, -2]} color="#B026FF" speed={2} />
        <AnimatedSphere position={[0, 2, -3]} color="#FF006B" speed={1} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
