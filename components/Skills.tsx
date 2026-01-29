"use client";
import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { FaCloud, FaCode, FaDatabase, FaDesktop, FaMicrochip, FaNetworkWired, FaServer } from 'react-icons/fa';
import {
  SiC,
  SiCisco,
  SiDocker,
  SiGit,
  SiKubernetes,
  SiPython
} from 'react-icons/si';

const Skills: FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [clickedCard, setClickedCard] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleCard = (id: string) => {
    setClickedCard(clickedCard === id ? null : id);
  };

  const categories = [
    {
      id: 'programming',
      name: 'Programming',
      icon: FaCode,
      color: "#4F46E5",
      skills: [
        { name: "C", icon: SiC },
        { name: "Python", icon: SiPython },
        { name: "SQL", icon: FaDatabase }
      ]
    },
    {
      id: 'networking',
      name: 'Networking',
      icon: FaNetworkWired,
      color: "#06B6D4",
      skills: [
        { name: "IPv4/IPv6 Addressing & Subnetting", icon: FaNetworkWired },
        { name: "Router & Switch Configuration", icon: SiCisco },
        { name: "VLAN & ACL Implementation", icon: FaNetworkWired }
      ]
    },
    {
      id: 'tools',
      name: 'Simulation',
      icon: FaServer,
      color: "#8B5CF6",
      skills: [
        // { name: "SDN - Mininet and  Ryu Controller", icon: SiLinux },
        { name: "Cisco Packet Tracer", icon: SiCisco },
        // { name: "ZeroMQ", icon: FaCode },
        { name: "LTspice", icon: FaDesktop },
        { name: "Proteus Software", icon: FaMicrochip }
      ]
    },
    {
      id: 'devops',
      name: 'DevOps',
      icon: FaCloud,
      color: "#F97316",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "Docker", icon: SiDocker },
        { name: "Kubernetes", icon: SiKubernetes }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-br from-[#0A0E27] via-[#151932] to-[#0A0E27] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#6366F1] rounded-full filter blur-[150px] animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00D9FF] rounded-full filter blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#00D9FF]">
              Technical Skills
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto px-2">
            Expertise across problem solving, networking, simulation tools, and DevOps technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            const isHovered = hoveredCard === category.id;
            const isClicked = clickedCard === category.id;

            return (
              <motion.div
                key={category.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative h-[300px] sm:h-[350px] md:h-[400px] group cursor-pointer"
                onMouseEnter={() => !isMobile && setHoveredCard(category.id)}
                onMouseLeave={() => !isMobile && setHoveredCard(null)}
                onClick={() => isMobile && toggleCard(category.id)}
              >
                <div className="h-full bg-[#151932]/50 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl overflow-hidden hover:border-[#00D9FF]/50 transition-all duration-300 relative group">
                  
                  {/* Front Content (Logo) */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center p-8"
                    animate={{
                      opacity: isHovered || isClicked ? 0 : 1,
                      scale: isHovered || isClicked ? 0.8 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div className={`p-8 rounded-full bg-gradient-to-r ${category.id === 'programming' ? 'from-[#6366F1]/20 to-[#4F46E5]/20' : category.id === 'networking' ? 'from-[#00D9FF]/20 to-[#06B6D4]/20' : category.id === 'tools' ? 'from-[#8B5CF6]/20 to-[#A78BFA]/20' : 'from-[#F97316]/20 to-[#FB923C]/20'}`}>
                      <Icon className="text-5xl" style={{ color: category.color }} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mt-4">{category.name}</h3>
                  </motion.div>

                  {/* Skills Content */}
                  <motion.div
                    className="absolute inset-0 p-8 flex flex-col"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isHovered || isClicked ? 1 : 0,
                      y: isHovered || isClicked ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-xl font-bold text-white mb-4 text-center">
                      {category.name}
                    </h4>
                    <div className="grid grid-cols-1 gap-3 flex-1 overflow-y-auto">
                      {category.skills.map((skill, index) => {
                        const SkillIcon = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            className="flex items-center gap-3 bg-[#0A0E27]/40 p-3 rounded-lg hover:bg-[#6366F1]/10 transition-colors duration-300 border border-[#6366F1]/10"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: isHovered || isClicked ? 1 : 0, x: isHovered || isClicked ? 0 : -20 }}
                            transition={{ delay: index * 0.08 }}
                          >
                            <SkillIcon className="text-lg flex-shrink-0" style={{ color: category.color }} />
                            <span className="text-[#E2E8F0] font-medium text-sm">{skill.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.id === 'programming' ? 'from-[#6366F1]' : category.id === 'networking' ? 'from-[#00D9FF]' : category.id === 'tools' ? 'from-[#8B5CF6]' : 'from-[#F97316]'} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
