"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#090909] overflow-hidden"
    >
      {/* Mouse Follow Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(60, 130, 246, 0.15), transparent 60%)`,
        }}
      />

      {/* Floating Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Profile Picture Animation */}
        <motion.div
          className="relative w-40 h-40 md:w-52 md:h-52 profile-pic"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 p-1 animate-spin-slow">
            <div className="bg-[#090909] w-full h-full rounded-full p-2">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/kishore_profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Title & Subtitle */}
        <motion.div className="mt-8 space-y-4">
          <motion.h1
            className="hero-title text-5xl md:text-7xl font-bold text-white uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Kishore Kumar
          </motion.h1>

          <motion.div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-10 bg-blue-600/50" />
            <motion.p
              className="hero-subtitle text-xl text-[#4F46E5] font-mono uppercase"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              IoT | SDN | Cloud | Fullstack
            </motion.p>
            <div className="h-[1px] w-10 bg-blue-600/50" />
          </motion.div>
        </motion.div>

        {/* Social Links & CV Download */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 mt-10 social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          {/* Download CV */}
          <motion.a
            href="/Kishore_resume.pdf"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-[#4F46E5] text-white hover:bg-[#4F46E5]/90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
          >
            <FaFileDownload className="text-lg" />
            Download CV
          </motion.a>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: FaGithub, url: "https://github.com/KISHOREKUMAR2506" },
              { icon: FaLinkedin, url: "https://www.linkedin.com/in/kishore-kumar-i-ece/" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl p-4 rounded-full bg-blue-600/5 border border-blue-400/20 text-blue-400 hover:text-white hover:bg-blue-600/90 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
