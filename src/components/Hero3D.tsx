import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import Model3D from './Model3D';

const Hero3D = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current, iconsRef.current], {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 50,
      });

      if (prefersReducedMotion) {
        // Simple fade-in for users who prefer reduced motion
        gsap.to([titleRef.current, subtitleRef.current, buttonsRef.current, iconsRef.current], {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1
        });
      } else {
        // Full animation for users who don't mind motion
        const tl = gsap.timeline();

        tl.to(titleRef.current, {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: 'power2.out',
        })
          .to(
            subtitleRef.current,
            {
              duration: 0.8,
              y: 0,
              opacity: 1,
              ease: 'power2.out',
            },
            '-=0.6'
          )
          .to(
            buttonsRef.current,
            {
              duration: 0.6,
              y: 0,
              opacity: 1,
              ease: 'power2.out',
            },
            '-=0.4'
          )
          .to(
            iconsRef.current,
            {
              duration: 0.6,
              y: 0,
              opacity: 1,
              ease: 'power2.out',
            },
            '-=0.4'
          );
      }
    }, heroRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        ref={heroRef}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text and Buttons */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display mb-4 lg:mb-6 gradient-text leading-tight"
            >
              Youssef Walaa Fikry
            </h1>

            <p
              ref={subtitleRef}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Business Information Systems Student & Full-Stack Developer crafting
              innovative technology solutions that bridge business needs with
              cutting-edge development.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start items-center mb-8 lg:mb-12"
            >
              <button className="w-full sm:w-auto bg-primary-600 text-white px-6 lg:px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors duration-200 text-sm lg:text-base">
                View My Work
              </button>
              <button className="w-full sm:w-auto border-2 border-primary-600 text-primary-600 px-6 lg:px-8 py-3 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                Download CV
              </button>
            </div>

            <div
              ref={iconsRef}
              className="flex justify-center lg:justify-start space-x-4 lg:space-x-6"
            >
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/youssef-farid-351945283/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:youssef.farid13003@gmail.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-200"
                >
                  <social.icon size={18} className="lg:w-5 lg:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - 3D Model */}
          <div className="order-1 lg:order-2">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
              <Model3D
                modelPath="/models/your-model.glb"
                className="w-full h-full"
                autoRotate={!prefersReducedMotion}
                scale={0.4}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {!prefersReducedMotion && (
          <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-primary-600" size={24} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero3D;