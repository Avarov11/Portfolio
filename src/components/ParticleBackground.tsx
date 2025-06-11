import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles with new colors
    const particleCount = 50;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      
      // Alternate between the two main colors
      const isPrimary = i % 2 === 0;
      const color = isPrimary ? 'rgba(191, 35, 202, 0.15)' : 'rgba(31, 23, 85, 0.15)';
      
      particle.className = 'absolute rounded-full';
      particle.style.background = color;
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(particle);
      particles.push(particle);

      // Animate particles
      gsap.to(particle, {
        y: -100,
        x: Math.random() * 100 - 50,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        ease: "none",
        delay: Math.random() * 5
      });

      gsap.to(particle, {
        opacity: Math.random() * 0.6 + 0.2,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      // Add subtle glow effect
      gsap.to(particle, {
        boxShadow: isPrimary 
          ? `0 0 ${Math.random() * 10 + 5}px rgba(191, 35, 202, 0.3)`
          : `0 0 ${Math.random() * 10 + 5}px rgba(31, 23, 85, 0.3)`,
        duration: Math.random() * 2 + 1,
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

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default ParticleBackground;