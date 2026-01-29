'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheckCircle, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'i.kishorekumar.ece@gmail.com',
      link: 'mailto:i.kishorekumar.ece@gmail.com',
      color: 'from-[#F59E0B] to-[#EF4444]'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 7845643110',
      link: 'tel:+917845643110',
      color: 'from-[#10D000] to-[#00D9FF]'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Chennai, India',
      // link: '#',
      color: 'from-[#6366F1] to-[#8B5CF6]'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/KishoreKumar-I',
      color: '#E2E8F0',
      handle: '@KishoreKumar-I'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ikishorekumar',
      color: '#00D9FF',
      handle: '@ikishorekumar'
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
    <section id="contact" className="relative py-16 sm:py-24 bg-gradient-to-br from-[#151932] via-[#0A0E27] to-[#151932] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00D9FF] rounded-full filter blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#6366F1] rounded-full filter blur-[150px]" />
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
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? 
            I'm always open to new connections and exciting challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group flex items-center gap-4 p-6 bg-[#151932]/50 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl hover:border-[#00D9FF]/50 transition-all duration-300"
                >
                  <div className={`p-4 bg-gradient-to-br ${info.color} bg-opacity-10 rounded-xl border border-[#00D9FF]/30`}>
                    <info.icon className="text-2xl text-[#00D9FF]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-[#94A3B8] mb-1">{info.label}</div>
                    <div className="text-lg font-semibold text-[#E2E8F0] group-hover:text-[#00D9FF] transition-colors">
                      {info.value}
                    </div>
                  </div>
                  <div className="text-[#00D9FF] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-[#E2E8F0] mb-4">Follow Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="group flex items-center gap-4 p-4 bg-[#151932]/50 backdrop-blur-xl border border-[#6366F1]/20 rounded-xl hover:border-[#00D9FF]/50 transition-all duration-300"
                  >
                    <social.icon 
                      className="text-2xl group-hover:scale-110 transition-transform" 
                      style={{ color: social.color }}
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-[#E2E8F0]">{social.name}</div>
                      <div className="text-sm text-[#94A3B8]">{social.handle}</div>
                    </div>
                    <div className="text-[#00D9FF] opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            {/* <motion.div variants={itemVariants}>
              <div className="p-6 bg-gradient-to-r from-[#10B981]/10 to-[#00D9FF]/10 border border-[#10B981]/30 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
                  </span>
                  <span className="text-[#10B981] font-semibold text-lg">Available for Opportunities</span>
                </div>
                <p className="text-[#94A3B8] text-sm">
                  Open to full-time positions, internships, and collaborative projects in SDN, Network Security, and IoT Development. Expected graduation: May 2026.
                </p>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#151932]/50 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#E2E8F0] mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="inline-block p-6 bg-gradient-to-br from-[#10B981]/20 to-[#00D9FF]/20 rounded-full mb-4"
                  >
                    <FaCheckCircle className="text-6xl text-[#10B981]" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-[#E2E8F0] mb-2">Message Sent! 🚀</h4>
                  <p className="text-[#94A3B8]">
                    Thank you for reaching out! I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0A0E27]/50 border border-[#6366F1]/30 rounded-xl text-[#E2E8F0] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#00D9FF]/50 focus:ring-2 focus:ring-[#00D9FF]/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0A0E27]/50 border border-[#6366F1]/30 rounded-xl text-[#E2E8F0] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#00D9FF]/50 focus:ring-2 focus:ring-[#00D9FF]/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#0A0E27]/50 border border-[#6366F1]/30 rounded-xl text-[#E2E8F0] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#00D9FF]/50 focus:ring-2 focus:ring-[#00D9FF]/20 transition-all resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-[#00D9FF] to-[#6366F1] text-[#0A0E27] font-semibold rounded-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#0A0E27] border-t-transparent rounded-full animate-spin" />
                          Sending Packet...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#00D9FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                </form>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#00D9FF]/20 to-[#6366F1]/20 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#6366F1]/20 to-[#00D9FF]/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}