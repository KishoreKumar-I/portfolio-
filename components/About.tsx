'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBriefcase, FaCertificate, FaGraduationCap } from 'react-icons/fa';

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Education', icon: FaGraduationCap },
    { id: 1, label: 'Internship', icon: FaBriefcase },
    { id: 2, label: 'Certifications', icon: FaCertificate },
    // { id: 3, label: 'Research', icon: FaTrophy }
  ];

  const education = [
    {
      institution: 'R.M.K. Engineering College',
      degree: 'B.E. in Electronics and Communication (Honors)',
      duration: 'May 2022 - May 2026',
      cgpa: '8.12',
      location: 'Chennai, India'
    },
    {
      institution: 'Santhome Higher Secondary School',
      degree: 'Higher Secondary Certificate',
      duration: 'May 2022',
      cgpa: '91.67%',
      location: 'Chennai, India'
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'Oracle Cloud Infrastructure Networking Professional',
      issuer: 'Oracle',
      date: '2024',
      icon: '☁️',
      color: '#F59E0B'
    },
    {
      id: 2,
      title: 'Business Considerations for 5G with Edge, IoT, and AI',
      issuer: 'edX',
      date: '2024',
      icon: '📡',
      color: '#00D9FF'
    },
    {
      id: 3,
      title: 'Introduction to Open Source Networking Technologies',
      issuer: 'edX',
      date: '2024',
      icon: '🌐',
      color: '#10B981'
    },
    {
      id: 4,
      title: 'Python Basics for Data Science',
      issuer: 'edX',
      date: '2024',
      icon: '🐍',
      color: '#6366F1'
    },
    {
      id: 5,
      title: 'The Joy of Computing Using Python',
      issuer: 'NPTEL',
      date: '2023',
      icon: '💻',
      color: '#00D9FF'
    },
    {
      id: 6,
      title: 'Modern Digital Communication Techniques',
      issuer: 'NPTEL',
      date: '2023',
      icon: '📶',
      color: '#F59E0B'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="relative py-16 sm:py-24 bg-gradient-to-br from-[#0A0E27] to-[#151932] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D9FF] rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6366F1] rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D9FF] to-[#6366F1]">
              About Me
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto px-2">
            An innovative developer focused on creating seamless real-time experiences through creative problem-solving and emerging technologies
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300
                ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#00D9FF] to-[#6366F1] text-[#0A0E27] shadow-lg shadow-[#00D9FF]/30'
                  : 'bg-[#151932]/50 backdrop-blur-md border border-[#6366F1]/20 text-[#94A3B8] hover:border-[#00D9FF]/50'
                }
              `}
            >
              <tab.icon className="text-xl" />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-[#151932]/30 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-8 md:p-12"
        >
          {/* Education Tab */}
          {activeTab === 0 && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-[#00D9FF]/30 hover:border-[#00D9FF] transition-colors"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-[#00D9FF] to-[#6366F1] rounded-full border-4 border-[#0A0E27]" />
                  <div className="mb-2 text-[#00D9FF] font-semibold">{edu.duration}</div>
                  <h3 className="text-2xl font-bold text-[#E2E8F0] mb-2">{edu.institution}</h3>
                  <p className="text-lg text-[#94A3B8] mb-2">{edu.degree}</p>
                  <div className="flex items-center gap-4 text-sm text-[#94A3B8]">
                    <span className="px-3 py-1 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-full">
                      {edu.cgpa}
                    </span>
                    <span>📍 {edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Experience Tab */}
          {activeTab === 1 && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-[#00D9FF]/20 to-[#6366F1]/20 rounded-xl border border-[#00D9FF]/30">
                    <FaBriefcase className="text-3xl text-[#00D9FF]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#E2E8F0] mb-2">
                      Telecommunication Intern
                    </h3>
                    <p className="text-lg text-[#00D9FF] mb-2">
                      Bharat Sanchar Nigam Limited (BSNL)
                    </p>
                    <p className="text-[#94A3B8] mb-4">June 2024 • Chennai, India</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-[#00D9FF] mt-1">▹</span>
                        <p className="text-[#94A3B8]">
                          Assisted in the configuration and maintenance of telecom switching systems and operational data networks in a live telecom environment
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#00D9FF] mt-1">▹</span>
                        <p className="text-[#94A3B8]">
                          Analyzed common network faults and assisted in troubleshooting activities to improve service continuity
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#00D9FF] mt-1">▹</span>
                        <p className="text-[#94A3B8]">
                          Simulated network topologies & configurations using Cisco Packet Tracer to strengthen practical networking skills
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {['Cisco Packet Tracer', 'Network Configuration', 'Troubleshooting', 'BSNL Systems'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-[#6366F1]/10 border border-[#6366F1]/30 rounded-full text-sm text-[#6366F1]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Certifications Tab */}
          {activeTab === 2 && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D9FF] to-[#6366F1]">
                    Professional Certifications
                  </span>
                </h3>
              </div>

              {/* Certification Grid */}
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="group relative bg-[#151932]/50 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-6 hover:border-[#00D9FF]/50 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-[#00D9FF]/10 to-[#6366F1]/10 rounded-xl border border-[#00D9FF]/30">
                        <span className="text-3xl">{cert.icon}</span>
                      </div>
                      <FaCertificate 
                        className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity"
                        style={{ color: cert.color }}
                      />
                    </div>

                    {/* Content */}
                    <h4 className="text-lg font-bold text-[#E2E8F0] mb-2 line-clamp-2 leading-tight">
                      {cert.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#94A3B8]">{cert.issuer}</span>
                      <span className="text-[#00D9FF] font-medium">{cert.date}</span>
                    </div>

                    {/* Verification Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                      className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#10B981] to-[#00D9FF] rounded-full flex items-center justify-center text-white text-xs font-bold"
                    >
                      ✓
                    </motion.div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF]/0 via-[#00D9FF]/5 to-[#6366F1]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Certification Count Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="mt-12 text-center"
              >
                <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#00D9FF]/10 to-[#6366F1]/10 border border-[#00D9FF]/30 rounded-full backdrop-blur-md">
                  <FaCertificate className="text-3xl text-[#00D9FF]" />
                  <div className="text-left">
                    <div className="text-3xl font-bold text-[#00D9FF]">5+</div>
                    <div className="text-sm text-[#94A3B8]">Professional Certifications</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Research Tab */}
          {/* {activeTab === 3 && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
              <motion.div variants={itemVariants} className="text-center py-12">
                <div className="inline-block p-6 bg-gradient-to-br from-[#00D9FF]/20 to-[#6366F1]/20 rounded-2xl border border-[#00D9FF]/30 mb-6">
                  <FaTrophy className="text-6xl text-[#00D9FF]" />
                </div>
                <h3 className="text-3xl font-bold text-[#E2E8F0] mb-4">Current Research Focus</h3>
                <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
                  Exploring advanced <span className="text-[#00D9FF] font-semibold">Software-Defined Networking (SDN)</span> architectures 
                  integrated with <span className="text-[#6366F1] font-semibold">Machine Learning</span> for 
                  real-time <span className="text-[#10B981] font-semibold">DDoS detection</span> and 
                  automated <span className="text-[#F59E0B] font-semibold">network security</span> responses
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  {['SDN', 'Machine Learning', 'Network Security', 'IoT', 'Real-time Systems'].map((topic) => (
                    <span key={topic} className="px-4 py-2 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-full text-[#00D9FF]">
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )} */}
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
            </span>
            <span className="text-[#10B981] font-semibold">Available for Opportunities</span>
            <span className="text-[#94A3B8]">•</span>
            <span className="text-[#94A3B8]">Expected Graduation: May 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
