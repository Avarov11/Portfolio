import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ExternalLink,
  Github,
  Database,
  BarChart3,
  ShoppingCart,
  Users,
  ArrowRight,
  Calendar,
  Star,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;
    
    if (!container || !horizontal) return;

    const ctx = gsap.context(() => {
      // Get the width of the horizontal container
      const scrollWidth = horizontal.scrollWidth;
      const containerWidth = container.offsetWidth;
      const scrollDistance = scrollWidth - containerWidth;

      // Create horizontal scroll animation
      const horizontalTween = gsap.to(horizontal, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update active project based on scroll progress
            const progress = self.progress;
            const projectIndex = Math.floor(progress * projects.length);
            setActiveProject(Math.min(projectIndex, projects.length - 1));
          }
        }
      });

      // Animate project cards on scroll
      const cards = gsap.utils.toArray<HTMLElement>('.project-card');
      cards.forEach((card, index) => {
        gsap.fromTo(card, 
          {
            opacity: 0.6,
            scale: 0.9,
            rotateY: 15
          },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              start: "left 80%",
              end: "left 20%",
              horizontal: true,
              containerAnimation: horizontalTween,
              scrub: 1,
              toggleActions: "play reverse play reverse"
            }
          }
        );
      });

    }, container);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'Business Analytics Dashboard',
      description: 'A comprehensive data visualization dashboard built with React and Tableau integration. Features real-time data processing, interactive charts, and automated reporting capabilities for business intelligence.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600',
      technologies: ['React', 'Tableau', 'Python', 'MySQL', 'D3.js'],
      github: '#',
      live: '#',
      featured: true,
      icon: BarChart3,
      category: 'Data Analytics',
      date: '2024',
      status: 'Completed'
    },
    {
      title: 'ERP System Integration',
      description: 'Custom Odoo ERP implementation for small to medium businesses. Includes inventory management, CRM integration, automated workflows, and comprehensive reporting modules.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600',
      technologies: ['Odoo', 'Python', 'PostgreSQL', 'XML', 'JavaScript'],
      github: '#',
      live: '#',
      featured: true,
      icon: Users,
      category: 'Enterprise Software',
      date: '2024',
      status: 'In Progress'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI/UX, secure payment processing, inventory management, and admin dashboard. Built with MERN stack and optimized for performance.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: '#',
      live: '#',
      featured: false,
      icon: ShoppingCart,
      category: 'Web Development',
      date: '2023',
      status: 'Completed'
    },
    {
      title: 'Database Management System',
      description: 'Oracle-based academic database system for university management. Features student records, course management, grade tracking, and automated report generation.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600',
      technologies: ['Oracle', 'PHP', 'HTML/CSS', 'JavaScript', 'Bootstrap'],
      github: '#',
      live: '#',
      featured: false,
      icon: Database,
      category: 'Database Systems',
      date: '2023',
      status: 'Completed'
    },
    {
      title: 'AI-Powered Analytics Tool',
      description: 'Machine learning application for predictive analytics and data insights. Utilizes Python libraries for data processing and provides interactive visualizations.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Flask', 'Chart.js'],
      github: '#',
      live: '#',
      featured: true,
      icon: BarChart3,
      category: 'Machine Learning',
      date: '2024',
      status: 'In Progress'
    }
  ];

  return (
    <section id="projects" className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Section Header */}
      <div className="relative z-10 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Explore my portfolio of innovative solutions that bridge technology and business needs
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Scroll horizontally</span>
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="relative h-screen">
        <div 
          ref={horizontalRef}
          className="flex items-center h-full px-8 space-x-8"
          style={{ width: `${projects.length * 100}vw` }}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card flex-shrink-0 w-[90vw] max-w-6xl h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden transform-gpu ${
                index === activeProject ? 'ring-4 ring-purple-400' : ''
              }`}
            >
              <div className="grid lg:grid-cols-2 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden lg:order-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-black'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-6 right-6">
                      <div className="flex items-center space-x-1 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                        <Star className="w-4 h-4 fill-current" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Project Icon */}
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-2">
                  <div className="mb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200 hover:from-purple-100 hover:to-pink-100 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-semibold"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all font-semibold shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeProject 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      </div>
    </section>
  );
};

export default Projects;