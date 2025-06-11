import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ExternalLink,
  Github,
  Database,
  BarChart3,
  ShoppingCart,
  Users,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card');

      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          x: index % 2 === 0 ? -150 : 150,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'Business Analytics Dashboard',
      description: 'A comprehensive data visualization dashboard...',
      image:
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600',
      technologies: ['React', 'Tableau', 'Python', 'MySQL'],
      github: '#',
      live: '#',
      featured: true,
      icon: BarChart3,
    },
    {
      title: 'ERP System Integration',
      description: 'Custom Odoo ERP implementation...',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600',
      technologies: ['Odoo', 'Python', 'PostgreSQL', 'XML'],
      github: '#',
      live: '#',
      featured: true,
      icon: Users,
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution...',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: '#',
      featured: false,
      icon: ShoppingCart,
    },
    {
      title: 'Database Management System',
      description: 'Oracle-based academic database system...',
      image:
        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600',
      technologies: ['Oracle', 'PHP', 'HTML/CSS', 'JavaScript'],
      github: '#',
      live: '#',
      featured: false,
      icon: Database,
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-white"
      ref={containerRef}
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-secondary-900">Projects</h2>
      <div className="max-w-6xl mx-auto space-y-32">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`project-card bg-white shadow-xl rounded-2xl p-6 md:p-10 flex flex-col items-center ${index % 2 === 0 ? 'md:items-start md:ml-auto' : 'md:items-end md:mr-auto'} w-full md:w-[75%]`}
          >
            <div className="w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold text-secondary-800 mb-2">
                {project.title}
              </h3>
              <p className="text-secondary-600 text-sm mb-4 max-w-xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center space-x-2 px-4 py-2 bg-secondary-800 text-white rounded-lg hover:bg-secondary-700 transition text-sm"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-lg transition text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Live</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
