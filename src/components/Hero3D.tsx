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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={heroRef}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text and Buttons */}
          <div className="text-center lg:text-left">
            <div className="mb-8 lg:hidden">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Youssef Walaa Fikry"
                    className="w-28 h-28 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

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
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:youssef.farid13003@gmail.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - 3D Model */}
          <div className="hidden lg:block">
            <div className="w-full h-[500px]">
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
