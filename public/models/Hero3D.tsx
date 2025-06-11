// import React, { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
// import Model3D from './Model3D';

// const Hero3D = () => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const subtitleRef = useRef<HTMLParagraphElement>(null);

//   useEffect(() => {
//     const tl = gsap.timeline();
    
//     tl.from(titleRef.current, {
//       duration: 1.2,
//       y: 100,
//       opacity: 0,
//       ease: "power3.out"
//     })
//     .from(subtitleRef.current, {
//       duration: 1,
//       y: 50,
//       opacity: 0,
//       ease: "power2.out"
//     }, "-=0.5");
//   }, []);

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={heroRef}>
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left side - Text content */}
//           <div className="text-center lg:text-left">
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="mb-8 lg:hidden"
//             >
//               <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-primary p-1 animate-pulse-glow">
//                 <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
//                   <img
//                     src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
//                     alt="Youssef Walaa Fikry"
//                     className="w-28 h-28 rounded-full object-cover"
//                   />
//                 </div>
//               </div>
//             </motion.div>

//             <h1
//               ref={titleRef}
//               className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 gradient-text"
//             >
//               Youssef Walaa Fikry
//             </h1>

//             <p
//               ref={subtitleRef}
//               className="text-lg md:text-xl text-secondary-700 mb-8 max-w-2xl mx-auto lg:mx-0"
//             >
//               Business Information Systems Student & Full-Stack Developer crafting innovative 
//               technology solutions that bridge business needs with cutting-edge development.
//             </p>

//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.8, duration: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(191, 35, 202, 0.4)" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all hover-glow"
//               >
//                 View My Work
//               </motion.button>
              
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-full font-semibold hover:bg-gradient-primary hover:text-white hover:border-transparent transition-all"
//               >
//                 Download CV
//               </motion.button>
//             </motion.div>

//             <motion.div
//               initial={{ y: 30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 1, duration: 0.6 }}
//               className="flex justify-center lg:justify-start space-x-6"
//             >
//               {[
//                 { icon: Github, href: "#", label: "GitHub" },
//                 { icon: Linkedin, href: "#", label: "LinkedIn" },
//                 { icon: Mail, href: "mailto:youssef.farid13003@gmail.com", label: "Email" }
//               ].map((social, index) => (
//                 <motion.a
//                   key={social.label}
//                   href={social.href}
//                   whileHover={{ scale: 1.2, rotate: 5 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-secondary-600 hover:text-primary-500 hover:shadow-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 transition-all"
//                 >
//                   <social.icon size={20} />
//                 </motion.a>
//               ))}
//             </motion.div>
//           </div>

//           {/* Right side - 3D Model */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="hidden lg:block"
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse-glow"></div>
//               <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 glass">
//                 <Model3D 
//                   modelPath="/models/your-model.glb" 
//                   className="w-full h-[500px]"
//                   autoRotate={true}
//                   scale={0.4}
//                 />
//                 <div className="text-center mt-4">
//                   <p className="text-sm text-secondary-500">
//                     Interactive 3D Model - Drag to rotate
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <ChevronDown className="text-primary-500" size={32} />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero3D;