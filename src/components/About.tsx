import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, BarChart3, Users } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in MERN stack with experience in building scalable web applications."
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Skilled in Oracle, MySQL, and database design for business applications."
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Experience with Tableau, Power BI, and Python for data-driven insights."
    },
    {
      icon: Users,
      title: "Business Solutions",
      description: "Understanding of ERP systems like Odoo and business process optimization."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const iconContainerVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-purple-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Motivated Business Information Systems student at AASTMT, graduating in 2025. 
            Passionate about building technology solutions that support business goals and empower users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 opacity-80"></div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Youssef"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover-glow"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-secondary-800 font-display">
              Bridging Business & Technology
            </h3>
            <p className="text-secondary-600 leading-relaxed">
              As a Business Information Systems student at AASTMT, I combine technical expertise 
              with business acumen to create solutions that drive real value. My experience spans 
              full-stack development, data analytics, and ERP systems.
            </p>
            <p className="text-secondary-600 leading-relaxed">
              With hands-on experience in sales and IT training, I understand both the technical 
              and business sides of technology implementation. I'm passionate about continuous 
              learning and staying updated with the latest technologies.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['React', 'Node.js', 'Python', 'Oracle', 'Tableau', 'Odoo', 'PHP', 'JavaScript'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-medium text-center hover:from-primary-200 hover:to-accent-200 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center"
              style={{
                background: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
              }}
            >
              <motion.div
                variants={iconContainerVariants}
                whileHover="hover"
                className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mb-4"
              >
                <feature.icon className="text-white w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
