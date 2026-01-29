'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaNetworkWired, FaShieldAlt, FaMicrochip, FaBrain, FaChartLine, FaCloud } from 'react-icons/fa';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  // const filters = ['All', 'Networking', 'Security', 'IoT', 'Machine Learning'];

  const projects = [
    {
      id: 1,
      title: 'Next-Gen SDN DDoS Detection & Mitigation',
      category: ['Networking', 'Security', 'Machine Learning'],
      featured: true,
      description: 'An advanced Software-Defined Networking system leveraging machine learning for real-time DDoS attack detection and automated mitigation responses.',
      longDescription: 'Designed and implemented a comprehensive SDN-based security framework that uses Random Forest classification to distinguish between normal and malicious network traffic patterns. The system integrates seamlessly with the Ryu controller to enable adaptive port-blocking mechanisms.',
      technologies: ['Ryu Controller', 'Mininet', 'Random Forest', 'ZeroMQ', 'Python', 'SDN'],
      metrics: [
        { label: 'Detection Accuracy', value: '92%', icon: FaChartLine },
        { label: 'Response Time', value: '40% Faster', icon: FaNetworkWired },
        { label: 'Mitigation Success', value: '95%+', icon: FaShieldAlt }
      ],
      highlights: [
        'Real-time traffic classification with ML',
        'Adaptive port-blocking mechanism',
        'Automated threat response system',
        'Network security automation'
      ],
      github: 'https://github.com/KishoreKumar-I/DDoS',
      demo: '#',
      image: '🛡️',
      color: 'from-[#00D9FF] to-[#6366F1]'
    },
    {
      id: 2,
      title: 'Quantum Guard: Radiation Safety Monitor',
      category: ['IoT', 'Security'],
      featured: true,
      description: 'Industrial-grade gamma radiation monitoring system with real-time cloud integration and intelligent alert framework for workplace safety.',
      longDescription: 'Developed a complete IoT solution for continuous radiation monitoring in industrial environments. The system uses ESP32 microcontroller with Geiger-Müller sensor for precise measurements, Firebase for cloud storage, and Flutter for cross-platform mobile monitoring.',
      technologies: ['ESP32', 'Geiger-Müller Sensor', 'Firebase', 'Flutter', 'IoT', 'Cloud Integration'],
      metrics: [
        { label: 'Real-time Monitoring', value: '24/7', icon: FaMicrochip },
        { label: 'Alert Response', value: '<2s', icon: FaShieldAlt },
        { label: 'Cloud Sync', value: 'Instant', icon: FaCloud }
      ],
      highlights: [
        'Continuous radiation measurement',
        'Threshold-based alert generation',
        'Cloud integration for remote monitoring',
        'Cross-platform mobile app'
      ],
      github: 'https://github.com/KishoreKumar-I/Quantum_Guard',
      demo: 'https://quantumguard.vercel.app/',
      image: '☢️',
      color: 'from-[#10B981] to-[#F59E0B]'
    },
    {
      id: 3,
      title: 'Track sense : Rail Track Integrity Monitor',
      category: ['IoT', 'Machine Learning'],
      featured: false,
      description: 'AI-powered crack detection system for railway track monitoring using computer vision and IoT sensors.',
      technologies: ['OpenCV', 'TensorFlow', 'Yolo V8', 'IoT Sensors'],
      github: 'https://github.com/KishoreKumar-I/RAIL_CRACK_DETECTION',
      image: '🚂',
      color: 'from-[#F59E0B] to-[#EF4444]'
    },
    {
      id: 4,
      title: 'UnDebt: AI Financial Assistant',
      category: ['Machine Learning'],
      featured: false,
      description: 'Intelligent financial planning assistant that helps users manage debt and create personalized repayment strategies.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Financial APIs'],
      github: 'https://github.com/KishoreKumar-I/UnDebt',
      image: '💰',
      color: 'from-[#6366F1] to-[#8B5CF6]'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-br from-[#151932] via-[#0A0E27] to-[#151932] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D9FF] rounded-full filter blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6366F1] rounded-full filter blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D9FF] to-[#6366F1]">
              Featured Projects
            </span>
          </h2>
          {/* <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Innovative solutions in SDN, Network Security, and IoT Development
          </p> */}
        </motion.div>

        {/* Filters */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-6 py-2 rounded-full font-medium transition-all duration-300
                ${activeFilter === filter
                  ? 'bg-gradient-to-r from-[#00D9FF] to-[#6366F1] text-[#0A0E27] shadow-lg shadow-[#00D9FF]/30'
                  : 'bg-[#151932]/50 backdrop-blur-md border border-[#6366F1]/20 text-[#94A3B8] hover:border-[#00D9FF]/50'
                }
              `}
            >
              {filter}
            </motion.button>
          ))} */}
        {/* </motion.div> */}

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-[#151932]/50 backdrop-blur-xl border border-[#6366F1]/20 rounded-3xl overflow-hidden hover:border-[#00D9FF]/50 transition-all duration-500"
            >
              {/* Project Card */}
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Content */}
                  <div className="space-y-6">
                    {/* Badge */}
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-[#00D9FF]/20 to-[#6366F1]/20 border border-[#00D9FF]/30 rounded-full text-xs font-semibold text-[#00D9FF] uppercase tracking-wider">
                        Featured Project
                      </span>
                      <span className="text-6xl">{project.image}</span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${project.color}`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-[#94A3B8] leading-relaxed">
                      {project.longDescription || project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && (
                      <div className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-[#94A3B8]">
                            <span className="text-[#00D9FF]">▹</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#6366F1]/10 border border-[#6366F1]/30 rounded-full text-sm text-[#6366F1]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-[#151932] border border-[#00D9FF]/30 rounded-xl text-[#00D9FF] hover:bg-[#00D9FF]/10 transition-all"
                      >
                        <FaGithub />
                        GitHub
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00D9FF] to-[#6366F1] rounded-xl text-[#0A0E27] font-semibold hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Right: Metrics */}
                  {project.metrics && (
                    <div className="space-y-6">
                      <h4 className="text-xl font-bold text-[#E2E8F0] mb-6">Project Impact</h4>
                      {project.metrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05, x: 10 }}
                          className="relative p-6 bg-gradient-to-r from-[#151932] to-[#0A0E27] border border-[#6366F1]/20 rounded-2xl hover:border-[#00D9FF]/50 transition-all group/metric"
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-[#00D9FF]/20 to-[#6366F1]/20 rounded-xl border border-[#00D9FF]/30">
                              <metric.icon className="text-2xl text-[#00D9FF]" />
                            </div>
                            <div>
                              <div className="text-3xl font-bold text-[#00D9FF] mb-1">
                                {metric.value}
                              </div>
                              <div className="text-sm text-[#94A3B8]">
                                {metric.label}
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF]/0 via-[#00D9FF]/5 to-[#00D9FF]/0 opacity-0 group-hover/metric:opacity-100 transition-opacity rounded-2xl" />
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#E2E8F0] mb-8"
            >
              Other Notable Projects
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-[#151932]/50 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-6 hover:border-[#00D9FF]/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{project.image}</span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[#94A3B8] hover:text-[#00D9FF] transition-colors"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </div>

                  <h4 className={`text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${project.color}`}>
                    {project.title}
                  </h4>

                  <p className="text-[#94A3B8] mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-full text-[#6366F1]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2 py-1 text-[#94A3B8]">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl pointer-events-none`} />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}