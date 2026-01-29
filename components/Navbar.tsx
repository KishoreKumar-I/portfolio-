'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaEnvelope, FaHome, FaProjectDiagram, FaTimes, FaTrophy, FaUser } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { name: 'Home', href: '#hero', icon: FaHome },
    { name: 'About', href: '#about', icon: FaUser },
    { name: 'Skills', href: '#skills', icon: FaUser },
    { name: 'Projects', href: '#projects', icon: FaProjectDiagram },
    { name: 'Achievements', href: '#achievements', icon: FaTrophy },
    { name: 'Contact', href: '#contact', icon: FaEnvelope }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0A0E27]/90 backdrop-blur-xl border-b border-[#6366F1]/20 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <div className="relative w-8 h-8">
                <Image
                  src="/favicon.ico"
                  alt="Logo"
                  width={32}
                  height={32}
                  priority
                  className="rounded"
                />
              </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D9FF] to-[#6366F1] font-bold text-xl md:text-2xl hidden sm:inline">
              Kishore
            </span>



            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-4 py-2 text-[#94A3B8] hover:text-[#00D9FF] transition-colors duration-300"
                >
                  <span className="relative z-10 font-medium">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-[#00D9FF]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              ))}
              
              {/* Download Resume Button */}
              <motion.a
                href="/Kishore_resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-[#00D9FF] to-[#6366F1] text-[#0A0E27] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all"
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#00D9FF] hover:bg-[#00D9FF]/10 rounded-lg transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-[#0A0E27]/95 backdrop-blur-xl border-b border-[#6366F1]/20"
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-4 py-3 text-[#94A3B8] hover:text-[#00D9FF] hover:bg-[#00D9FF]/10 rounded-lg transition-all"
              >
                <item.icon />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              download
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#00D9FF] to-[#6366F1] text-[#0A0E27] font-semibold rounded-lg"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D9FF] via-[#6366F1] to-[#F59E0B] origin-left z-[60]"
        style={{
          scaleX: useScroll().scrollYProgress
        }}
      />
    </>
  );
}