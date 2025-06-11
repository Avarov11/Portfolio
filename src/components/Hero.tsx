// import React, { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

// const Hero = () => {
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
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={heroRef}>
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="mb-8"
//         >
//           <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary-400 to-purple-500 p-1">
//             <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
//               <img
//                 src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
//                 alt="Youssef Walaa Fikry"
//                 className="w-28 h-28 rounded-full object-cover"
//               />
//             </div>
//           </div>
//         </motion.div>

//         <h1
//           ref={titleRef}
//           className="text-5xl md:text-7xl font-bold font-display mb-6 gradient-text"
//         >
//           Youssef Walaa Fikry
//         </h1>

//         <p
//           ref={subtitleRef}
//           className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
//         >
//           Business Information Systems Student & Full-Stack Developer crafting innovative 
//           technology solutions that bridge business needs with cutting-edge development.
//         </p>

//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)" }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all"
//           >
//             View My Work
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all"
//           >
//             Download CV
//           </motion.button>
//         </motion.div>

//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 1, duration: 0.6 }}
//           className="flex justify-center space-x-6 mb-16"
//         >
//           {[
//             { icon: Github, href: "#", label: "GitHub" },
//             { icon: Linkedin, href: "#", label: "LinkedIn" },
//             { icon: Mail, href: "mailto:youssef.farid13003@gmail.com", label: "Email" }
//           ].map((social, index) => (
//             <motion.a
//               key={social.label}
//               href={social.href}
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all"
//             >
//               <social.icon size={20} />
//             </motion.a>
//           ))}
//         </motion.div>

//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <ChevronDown className="text-primary-600" size={32} />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;