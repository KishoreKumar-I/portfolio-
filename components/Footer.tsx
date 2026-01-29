'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaRocket, FaCode } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/KishoreKumar-I', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/ikishorekumar', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:i.kishorekumar.ece@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0A0E27] to-[#151932] border-t border-[#6366F1]/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00D9FF] rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6366F1] rounded-full filter blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-3xl font-bold mb-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D9FF] to-[#6366F1]">
                  Kishore Kumar I
                </span>
              </h3>
              {/* <p className="text-[#94A3B8] leading-relaxed">
                SDN Architect • Network Security Researcher • IoT Developer
              </p> */}
            </motion.div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-[#151932]/50 backdrop-blur-md border border-[#6366F1]/20 rounded-lg hover:border-[#00D9FF]/50 hover:bg-[#00D9FF]/10 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl text-[#94A3B8] group-hover:text-[#00D9FF] transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-[#E2E8F0] mb-4"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-[#00D9FF] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="text-[#00D9FF] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-[#E2E8F0] mb-4"
            >
              Get In Touch
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3 text-[#94A3B8]"
            >
              <p>
                <strong className="text-[#E2E8F0]">Email:</strong>
                <br />
                <a href="mailto:i.kishorekumar.ece@gmail.com" className="hover:text-[#00D9FF] transition-colors">
                  i.kishorekumar.ece@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-[#E2E8F0]">Phone:</strong>
                <br />
                <a href="tel:+917845643110" className="hover:text-[#00D9FF] transition-colors">
                  +91 7845643110
                </a>
              </p>
              <p>
                <strong className="text-[#E2E8F0]">Location:</strong>
                <br />
                Chennai, Tamil Nadu, India
              </p>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/50 to-transparent mb-8"
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#94A3B8] text-sm"
        >
          <p className="flex items-center gap-2">
            © {currentYear} Kishore Kumar I. Built with 
            <FaHeart className="text-[#EF4444] animate-pulse" /> 
          </p>
          
          <p className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            Available for opportunities
          </p>
        </motion.div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-8 text-sm text-[#94A3B8]/50"
        >
          <p><FaCode className="inline mr-1" />Crafted with love and sprinkle of techies❤️✨</p>
        </motion.div>
      </div>
    </footer>
  );
}