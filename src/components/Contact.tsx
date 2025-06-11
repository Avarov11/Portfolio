import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, GraduationCap, Briefcase, MessageCircle, Loader2 } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
}

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const openWhatsApp = (message?: string) => {
    const whatsappNumber = '201019383610';
    const whatsappMessage = message || 'Hi, I would like to connect with you!';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Portfolio Contact*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    
    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Create WhatsApp URL with your number
    const whatsappUrl = `https://wa.me/201019383610?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message and reset
    setShowSuccess(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
      setShowSuccess(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo: ContactInfoItem[] = [
    {
      icon: Mail,
      title: "Email",
      value: "youssef.farid13003@gmail.com",
      href: "mailto:youssef.farid13003@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "01019383610",
      href: "tel:01019383610"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cairo, Heliopolis",
      href: "#"
    }
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      value: "BIS Student at AASTMT",
      description: "Graduating June 2025"
    },
    {
      icon: Briefcase,
      title: "Experience",
      value: "Full-Stack Development",
      description: "MERN Stack & Data Analytics"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 bg-pattern" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Ready to collaborate? Send me a message directly through WhatsApp!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-secondary-800 font-display">
              Let's Start a Conversation
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover-glow"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-800">{info.title}</h4>
                    <p className="text-secondary-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="grid gap-6 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover-glow"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <highlight.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-800">{highlight.title}</h4>
                    <p className="text-primary-600 font-medium">{highlight.value}</p>
                    <p className="text-sm text-secondary-500">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="p-6 bg-white rounded-xl shadow-lg hover-glow"
            >
              <h4 className="text-lg font-semibold mb-3 text-secondary-800">
                Why Work With Me?
              </h4>
              <ul className="space-y-2 text-secondary-600">
                <li>• Business Information Systems expertise</li>
                <li>• Full-stack development skills</li>
                <li>• Data analytics and visualization</li>
                <li>• ERP systems experience</li>
                <li>• Fresh perspective with academic foundation</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl hover-glow relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 to-green-600" />
              
              <div className="flex items-center justify-center mb-6">
                <MessageCircle className="text-green-500 w-8 h-8 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Message via WhatsApp
                </h3>
              </div>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-95 rounded-2xl"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-green-500 mb-2">Opening WhatsApp!</h3>
                    <p className="text-secondary-600">Redirecting you to continue the conversation...</p>
                  </div>
                </motion.div>
              )}
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Hi! I'd like to discuss a project..."
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:hover:bg-green-500"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Opening WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5" />
                      <span>Send via WhatsApp</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  Your message will open in WhatsApp, where we can continue the conversation
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;