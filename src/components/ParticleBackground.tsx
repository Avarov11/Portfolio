import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if device can handle particles
    const isMobile = window.innerWidth < 768;
    const isLowPerformance = navigator.hardwareConcurrency <= 4;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isMobile || isLowPerformance || prefersReducedMotion) {
      setShouldRender(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Reduce particle count for better performance
    const particleCount = isMobile ? 20 : 30;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      
      const isPrimary = i % 2 === 0;
      const color = isPrimary ? 'rgba(191, 35, 202, 0.08)' : 'rgba(31, 23, 85, 0.08)';
      
      particle.className = 'absolute rounded-full pointer-events-none';
      particle.style.background = color;
      particle.style.willChange = 'transform, opacity';
      
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(particle);
      particles.push(particle);

      // Simplified animations for better performance
      gsap.to(particle, {
        y: -50,
        x: Math.random() * 50 - 25,
        duration: Math.random() * 15 + 10,
        repeat: -1,
        ease: "none",
        delay: Math.random() * 5
      });

      gsap.to(particle, {
        opacity: Math.random() * 0.4 + 0.1,
        duration: Math.random() * 4 + 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default ParticleBackground;