'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // 3D Network Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      connections: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.connections = 0;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.connections > 2 ? '#00D9FF' : '#6366F1';
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = 120;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Reset connections
      particles.forEach(p => p.connections = 0);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            particles[i].connections++;
            particles[j].connections++;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distance / 150})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const dockItems = [
    { 
      label: 'About', 
      href: '#about', 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      color: '#00D9FF'
    },
    { 
      label: 'Tech Skills', 
      href: '#skills', 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      color: '#6366F1'
    },
    { 
      label: 'Projects', 
      href: '#projects', 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      color: '#F59E0B'
    },
    { 
      label: 'Achievements', 
      href: '#achievements', 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      color: '#10B981'
    },
    { 
      label: 'GitHub', 
      href: 'https://github.com/KishoreKumar-I', 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      ),
      color: '#E2E8F0'
    },
    { 
      label: 'Email', 
      href: 'mailto:i.kishorekumar.ece@gmail.com', 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      color: '#EA4335'
    }
  ];

  // Calculate scale based on distance from hovered item
  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.7;
    if (distance === 1) return 1.4;
    if (distance === 2) return 1.15;
    return 1;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0E27] via-[#151932] to-[#0A0E27]">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0E27]/50 to-[#0A0E27] z-[1]" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-full text-[#00D9FF] text-xs sm:text-sm font-medium backdrop-blur-sm">
                  🤞🏻 Heyy, I'm
              </span>
            </motion.div>

            {/* Name - Made Bigger */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-5xl font-bold mb-4 sm:mb-8 tracking-tight leading-[0.95]"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D9FF] via-[#6366F1] to-[#0bf5ab] drop-shadow-2xl">
                Kishore Kumar I
              </span>
            </motion.h1>

            {/* Main Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#94A3B8] mb-8 sm:mb-14 leading-relaxed"
            >
              From <span className="text-[#00D9FF] font-semibold">Coding to Connectivity</span> – I <span className="text-[#63f1d5] font-semibold">Build, Break, and Reimagine</span> Tech!
            </motion.p>

            {/* macOS-Style Floating Dock - Made Bigger */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-8 sm:mb-14"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative"
              >
                {/* Main Dock Container */}
                <div 
                  className="relative flex items-end gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-[#2A2A2A]/80 backdrop-blur-2xl rounded-[20px] sm:rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10"
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {dockItems.map((item, index) => {
                    const scale = getScale(index);
                    const isHovered = hoveredIndex === index;
                    
                    return (
                      <div key={index} className="relative flex flex-col items-center">
                        {/* Tooltip */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? 0 : 10
                          }}
                          transition={{ duration: 0.2 }}
                          className="absolute -top-14 px-4 py-2 bg-[#2A2A2A]/95 backdrop-blur-xl rounded-lg text-sm font-medium text-white whitespace-nowrap shadow-xl border border-white/10 pointer-events-none"
                        >
                          {item.label}
                        </motion.div>

                        {/* Dock Icon */}
                        <motion.a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          onMouseEnter={() => setHoveredIndex(index)}
                          animate={{
                            scale: scale,
                            y: isHovered ? -20 : 0
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                          }}
                          className="relative flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#3A3A3A] to-[#2A2A2A] cursor-pointer shadow-lg overflow-hidden"
                          style={{
                            transformOrigin: "bottom"
                          }}
                        >
                          {/* Icon Glow on Hover */}
                          <motion.div 
                            className="absolute inset-0 rounded-2xl opacity-0"
                            animate={{
                              opacity: isHovered ? 0.4 : 0
                            }}
                            style={{
                              background: `radial-gradient(circle at center, ${item.color}, transparent 70%)`
                            }}
                          />
                          
                          {/* Icon Background Gradient */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                          
                          {/* Icon with Color */}
                          <motion.div 
                            className="relative z-10 filter drop-shadow-lg"
                            animate={{
                              color: isHovered ? item.color : '#E2E8F0'
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.icon}
                          </motion.div>

                          {/* Reflection Effect */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent opacity-30" 
                            style={{
                              maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)"
                            }}
                          />
                        </motion.a>
                      </div>
                    );
                  })}
                </div>

                {/* Dock Shadow/Reflection */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-3 bg-black/25 blur-xl rounded-full" />
              </motion.div>
            </motion.div>

            {/* CTA Buttons - Aligned and Same Size */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-12"
            >
              <motion.a
                href="https://www.linkedin.com/in/ikishorekumar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-5 sm:px-8 py-3 sm:py-4 min-w-[150px] sm:min-w-[220px] text-sm sm:text-base bg-gradient-to-r from-[#00D9FF] to-[#6366F1] text-[#0A0E27] font-semibold rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  LinkedIn
                  <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform text-xs sm:text-base" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#00D9FF] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="/Kishore_resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-5 sm:px-8 py-3 sm:py-4 min-w-[150px] sm:min-w-[220px] text-sm sm:text-base bg-[#151932]/50 backdrop-blur-md border-2 border-[#00D9FF]/50 text-[#00D9FF] font-semibold rounded-lg sm:rounded-xl hover:bg-[#00D9FF]/10 transition-all duration-300 flex items-center justify-center"
              >
                <span className="flex items-center gap-2">
                  <FaDownload className="group-hover:animate-bounce text-xs sm:text-base" />
                  Resume
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center mt-8 sm:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96"
            >
              {/* Image Container */}
              <div className="relative rounded-xl sm:rounded-2xl p-1 w-full h-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/kishore_profile_rbg.png"
                  alt="Profile Picture"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-[#00D9FF]/50 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-3 bg-[#00D9FF] rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}