'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaBars, FaEnvelope, FaHome, FaProjectDiagram, FaTimes, FaTrophy, FaUser } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const indiaTime = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setCurrentTime(indiaTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

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
            ? 'bg-[#0A0E27]/95 backdrop-blur-2xl border-b border-[#6366F1]/30 shadow-2xl shadow-[#00D9FF]/5' 
            : 'bg-gradient-to-b from-[#0A0E27]/80 to-transparent backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-4 sm:gap-8">
              <motion.a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 sm:gap-3 group"
              >
                <div className="relative w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl overflow-hidden border-2 border-[#00D9FF]/30 group-hover:border-[#00D9FF]/60 transition-all duration-300 shadow-lg shadow-[#00D9FF]/20">
                  <Image
                    src="/favicon.ico"
                    alt="Logo"
                    width={40}
                    height={40}
                    priority
                    className="object-cover"
                  />
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D9FF] via-[#6366F1] to-[#0bf5ab] font-bold text-lg sm:text-2xl hidden sm:inline tracking-tight">
                  Kishore Kumar
                </span>
              </motion.a>

              {/* Separator Pipe */}
              <div className="hidden lg:block w-px h-6 bg-gradient-to-b from-transparent via-[#6366F1]/50 to-transparent mx-2" />

              {/* India Time Display */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="hidden lg:flex items-center gap-2 px-4 py-2 text-[#94A3B8] hover:text-[#00D9FF] transition-colors duration-300"
              >
                {/* Flag Emoji for Desktop & Mobile */}
                <span className="text-lg md:text-xl">
                  🇮🇳
                </span>

                <span className="text-sm font-semibold tabular-nums">
                  {currentTime}
                </span>
                <span className="text-xs font-medium text-[#6366F1]">IST</span>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-4 py-2.5 text-[#94A3B8] hover:text-[#00D9FF] transition-all duration-300 rounded-lg"
                >
                  <span className="relative z-10 font-semibold text-sm">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#00D9FF]/10 to-[#6366F1]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border border-[#00D9FF]/0 group-hover:border-[#00D9FF]/20"
                  />
                  {/* Active indicator dot */}
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#00D9FF] rounded-full opacity-0 group-hover:opacity-100"
                  />
                </motion.a>
              ))}
              
              {/* Download Resume Button - Enhanced */}
              <motion.a
                href="/Kishore_resume.pdf"
                download
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="ml-3 px-6 py-2.5 bg-gradient-to-r from-[#00D9FF] to-[#6366F1] text-[#0A0E27] font-bold rounded-xl hover:shadow-xl hover:shadow-[#00D9FF]/30 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 text-sm">Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#00D9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 text-[#00D9FF] hover:bg-[#00D9FF]/10 rounded-xl transition-colors border border-[#00D9FF]/20"
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
          className="md:hidden overflow-hidden bg-[#0A0E27]/98 backdrop-blur-2xl border-t border-[#6366F1]/20"
        >
          <div className="px-6 py-4 space-y-2">
            {/* India Time Display - Mobile */}
            <motion.div
              className="flex items-center justify-center gap-3 px-4 py-3 mb-3 bg-gradient-to-r from-[#FF9933]/10 via-transparent to-[#138808]/10 border border-white/10 rounded-xl backdrop-blur-md"
            >
              {/* India Flag Emoji */}
              <span className="text-3xl">🇮🇳</span>
              
              {/* Time Display */}
              <div className="flex items-center gap-2">
                <div className="flex flex-col">
                  <span className="text-xs text-[#94A3B8] font-medium leading-none">India Standard Time</span>
                  <span className="text-lg font-bold text-[#E2E8F0] leading-none mt-1 tabular-nums">
                    {currentTime}
                  </span>
                </div>
              </div>
            </motion.div>

            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-4 py-3 text-[#94A3B8] hover:text-[#00D9FF] hover:bg-gradient-to-r hover:from-[#00D9FF]/10 hover:to-[#6366F1]/10 rounded-xl transition-all border border-transparent hover:border-[#00D9FF]/20"
              >
                <item.icon className="text-lg" />
                <span className="font-semibold">{item.name}</span>
              </motion.a>
            ))}
            <motion.a
              href="/Kishore_resume.pdf"
              download
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#00D9FF] to-[#6366F1] text-[#0A0E27] font-bold rounded-xl shadow-lg shadow-[#00D9FF]/20 mt-2"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>

      {/* Scroll Progress Bar - Enhanced */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D9FF] via-[#6366F1] to-[#0bf5ab] origin-left z-[60] shadow-lg shadow-[#00D9FF]/50"
        style={{
          scaleX: useScroll().scrollYProgress
        }}
      />
    </>
  );
}