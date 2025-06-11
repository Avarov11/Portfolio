import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
    if (isInView) {
      skills.forEach((skill, index) => {
        gsap.to(`.skill-bar-${index}`, {
          width: `${skill.level}%`,
          duration: 1.5,
          delay: index * 0.1,
          ease: "power3.out"
        });
      });
    }
  }, [isInView, skills]);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 bg-pattern" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Technical skills developed through academic studies, practical projects, and professional training.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-secondary-800 font-display">
              Technical Proficiency
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-secondary-700">{skill.name}</span>
                    <span className="text-sm text-secondary-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`skill-bar-${index} h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300 shadow-lg`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-secondary-800 font-display">
                Areas of Expertise
              </h3>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover-glow">
                  <h4 className="text-xl font-semibold mb-3 text-primary-600">
                    Full-Stack Development
                  </h4>
                  <p className="text-secondary-600">
                    MERN stack development with experience in building scalable web applications 
                    and RESTful APIs.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover-glow">
                  <h4 className="text-xl font-semibold mb-3 text-primary-600">
                    Data Analytics & BI
                  </h4>
                  <p className="text-secondary-600">
                    Data visualization with Tableau, Power BI, and Python for machine learning 
                    and business intelligence.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover-glow">
                  <h4 className="text-xl font-semibold mb-3 text-primary-600">
                    Business Systems
                  </h4>
                  <p className="text-secondary-600">
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