import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import Model3D from './Model3D';

const Hero3D = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure all elements are visible from the start
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current, iconsRef.current], {
        opacity: 0,
        y: 50,
      });

      const tl = gsap.timeline();

      tl.to(titleRef.current, {
        duration: 1.2,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
      })
        .to(
          subtitleRef.current,
          {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: 'power2.out',
          },
          '-=0.8'
        )
        .to(
          buttonsRef.current,
          {
            duration: 0.8,
            y: 0,
            opacity: 1,
            ease: 'power2.out',
          },
          '-=0.6'
        )
        .to(
          iconsRef.current,
          {
            duration: 0.8,
            y: 0,
            opacity: 1,
            ease: 'power2.out',
          },
          '-=0.6'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        ref={heroRef}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text and Buttons */}
          <div className="text-center lg:text-left">
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 gradient-text"
            >
              Youssef Walaa Fikry
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 will-change-transform"
            >
              Business Information Systems Student & Full-Stack Developer crafting
              innovative technology solutions that bridge business needs with
              cutting-edge development.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            >
              <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all">
                View My Work
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all">
                Download CV
              </button>
            </div>

            <div
              ref={iconsRef}
              className="flex justify-center lg:justify-start space-x-6"
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
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - 3D Model */}
          <div className="order-first lg:order-last">
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Model3D
                modelPath="/models/your-model.glb"
                className="w-full h-full"
                autoRotate={true}
                scale={0.4}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary-600" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
