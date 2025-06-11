import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows, useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';

interface Model3DProps {
  modelPath: string;
  className?: string;
  autoRotate?: boolean;
  scale?: number;
}

function Model({
  modelPath,
  autoRotate = true,
  scale = 1,
}: {
  modelPath: string;
  autoRotate?: boolean;
  scale?: number;
}) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<any>();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame(() => {
    if (autoRotate && modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={isMobile ? scale * 0.8 : scale} // Slightly smaller on mobile
      position={[0, isMobile ? -0.8 : -1.2, 0]} // Adjusted position for mobile
    />
  );
}

function LoaderFallback() {
  const { progress } = useProgress();
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      <span className="ml-4 text-primary-600 font-medium">{Math.floor(progress)}%</span>
    </div>
  );
}

const Model3D: React.FC<Model3DProps> = ({
  modelPath,
  className = 'w-full h-full',
  autoRotate = true,
  scale = 1,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Suspense fallback={<LoaderFallback />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />

          <Model
            modelPath={modelPath}
            autoRotate={autoRotate}
            scale={scale}
          />

          <Environment preset="studio" />
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.75}
            scale={10}
            blur={2.5}
            far={4}
          />

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </Suspense>
    </motion.div>
  );
};

export default Model3D;
