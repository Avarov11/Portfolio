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
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Detect low performance devices
    const checkPerformance = () => {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          // Check for integrated graphics or mobile GPUs
          setIsLowPerformance(
            /integrated|mobile|mali|adreno|powervr|videocore/i.test(renderer) ||
            navigator.hardwareConcurrency <= 4
          );
        }
      }
    };

    checkPerformance();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {
    if (autoRotate && modelRef.current && !isLowPerformance) {
      // Reduce rotation speed on mobile for better performance
      const rotationSpeed = isMobile ? 0.005 : 0.01;
      modelRef.current.rotation.y += rotationSpeed;
    }
  });

  // Don't render 3D model on very low performance devices
  if (isLowPerformance && isMobile) {
    return (
      <div className="flex items-center justify-center h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl">
        <div className="text-center p-8">
          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">YF</span>
          </div>
          <p className="text-gray-600">3D Model Optimized for Performance</p>
        </div>
      </div>
    );
  }

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={isMobile ? scale * 0.7 : scale}
      position={[0, isMobile ? -0.8 : -1.2, 0]}
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          performance={{ min: 0.5 }}
          dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}
          gl={{
            antialias: !isMobile,
            alpha: true,
            powerPreference: 'high-performance',
          }}
        >
          <ambientLight intensity={0.4} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={isMobile ? 0.5 : 1}
          />
          <pointLight 
            position={[-10, -10, -10]} 
            intensity={isMobile ? 0.3 : 0.5}
          />

          <Model
            modelPath={modelPath}
            autoRotate={autoRotate}
            scale={scale}
          />

          <Environment preset="studio" />
          {!isMobile && (
            <ContactShadows
              position={[0, -1.4, 0]}
              opacity={0.5}
              scale={8}
              blur={2}
              far={4}
            />
          )}

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={!isMobile}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </Suspense>
    </motion.div>
  );
};

export default Model3D;