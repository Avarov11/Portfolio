import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-primary-400 to-accent-500' },
    { name: 'React', level: 85, color: 'from-accent-400 to-primary-600' },
    { name: 'Node.js', level: 80, color: 'from-secondary-600 to-primary-500' },
    { name: 'Python', level: 85, color: 'from-primary-500 to-secondary-700' },
    { name: 'PHP', level: 75, color: 'from-accent-400 to-primary-600' },
    { name: 'Oracle/MySQL', level: 80, color: 'from-secondary-700 to-primary-500' },
    { name: 'Tableau', level: 70, color: 'from-primary-400 to-accent-500' },
    { name: 'Odoo ERP', level: 65, color: 'from-accent-500 to-secondary-600' },
  ];

  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      skills.forEach((skill, index) => {
        gsap.to(`.skill-bar-${index}`, {
          width: `${skill.level}%`,
          duration: 1,
          delay: index * 0.05,
          ease: "power2.out"
        });
      });
    } else if (isInView && prefersReducedMotion) {
      // Instant fill for reduced motion
      skills.forEach((skill, index) => {
        gsap.set(`.skill-bar-${index}`, {
          width: `${skill.level}%`
        });
      });
    }
  }, [isInView, prefersReducedMotion, skills]);

  return (
    <section id="skills" className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-purple-50 bg-pattern" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 lg:mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-lg lg:text-xl text-secondary-600 max-w-3xl mx-auto">
            Technical skills developed through academic studies, practical projects, and professional training.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.8, delay: prefersReducedMotion ? 0 : 0.2 }}
          >
            <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8 text-secondary-800 font-display">
              Technical Proficiency
            </h3>
            <div className="space-y-4 lg:space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-secondary-700 text-sm lg:text-base">{skill.name}</span>
                    <span className="text-xs lg:text-sm text-secondary-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 lg:h-3 overflow-hidden">
                    <div
                      className={`skill-bar-${index} h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300 shadow-sm`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.8, delay: prefersReducedMotion ? 0 : 0.4 }}
            className="space-y-6 lg:space-y-8"
          >
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-secondary-800 font-display">
                Areas of Expertise
              </h3>
              <div className="space-y-4 lg:space-y-6">
                <div className="p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3 text-primary-600">
                    Full-Stack Development
                  </h4>
                  <p className="text-sm lg:text-base text-secondary-600">
                    MERN stack development with experience in building scalable web applications 
                    and RESTful APIs.
                  </p>
                </div>
                <div className="p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3 text-primary-600">
                    Data Analytics & BI
                  </h4>
                  <p className="text-sm lg:text-base text-secondary-600">
                    Data visualization with Tableau, Power BI, and Python for machine learning 
                    and business intelligence.
                  </p>
                </div>
                <div className="p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3 text-primary-600">
                    Business Systems
                  </h4>
                  <p className="text-sm lg:text-base text-secondary-600">
                    ERP systems implementation with Odoo, database management, and business 
                    process optimization.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;