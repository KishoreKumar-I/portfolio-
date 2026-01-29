'use client';

import { motion } from 'framer-motion';
import { FaAward, FaMedal, FaTrophy, FaUsers } from 'react-icons/fa';

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'Runner-Up, SSN Envision Hackathon',
      event: 'SSN Envision 2025',
      date: 'February 2025',
      description: 'Developed UnDebt, an AI-based financial assistant that helps users manage debt and create personalized repayment strategies',
      icon: FaTrophy,
      color: 'from-[#F59E0B] to-[#EF4444]',
      iconBg: 'from-[#F59E0B]/20 to-[#EF4444]/20',
      badge: '🥈'
    },
    {
      id: 2,
      title: 'Runner-Up, Paper Presentation, IETE',
      event: 'IETE Technical Conference',
      date: 'July 2024',
      description: 'Presented comprehensive research on SDN-based DDoS Detection and Mitigation with Machine Learning integration',
      icon: FaMedal,
      color: 'from-[#00D9FF] to-[#6366F1]',
      iconBg: 'from-[#00D9FF]/20 to-[#6366F1]/20',
      badge: '🥈'
    },
    {
      id: 3,
      title: 'Best Project Award, IETE',
      event: 'IETE Project Competition',
      date: 'February 2024',
      description: 'Awarded for Quantum Guard: Industrial Gamma Radiation Safety Monitoring and Alert Framework',
      icon: FaAward,
      color: 'from-[#10B981] to-[#00D9FF]',
      iconBg: 'from-[#10B981]/20 to-[#00D9FF]/20',
      badge: '🏆'
    },
    {
      id: 4,
      title: 'Chairperson, IETE (2023-2025)',
      event: 'Institution of Electronics and Telecommunication Engineers',
      date: '2023 - 2025',
      description: 'Recognized for Exemplary Leadership in Organizing Technical Events, Workshops, and Student Development Programs',
      icon: FaUsers,
      color: 'from-[#6366F1] to-[#8B5CF6]',
      iconBg: 'from-[#6366F1]/20 to-[#8B5CF6]/20',
      badge: '👑'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="achievements" className="relative py-16 sm:py-24 bg-gradient-to-br from-[#0A0E27] via-[#151932] to-[#0A0E27] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#F59E0B] rounded-full filter blur-[150px] animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#6366F1] rounded-full filter blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] to-[#EF4444]">
              Achievements & Recognition
            </span>
          </h2>
          {/* <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Celebrating milestones in technical competitions, leadership, and continuous learning
          </p> */}
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Line */}
              {index !== achievements.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-[#00D9FF]/50 to-transparent" />
              )}

              {/* Achievement Card */}
              <div className="relative flex gap-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative flex-shrink-0 w-16 h-16 bg-gradient-to-br ${achievement.iconBg} backdrop-blur-md border border-[#00D9FF]/30 rounded-2xl flex items-center justify-center z-10`}
                >
                  <span className="text-3xl">{achievement.badge}</span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl`} />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex-1 bg-[#151932]/50 backdrop-blur-xl border border-[#6366F1]/20 rounded-2xl p-6 hover:border-[#00D9FF]/50 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${achievement.color}`}>
                        {achievement.title}
                      </h3>
                      <p className="text-[#00D9FF] font-semibold mb-1">{achievement.event}</p>
                    </div>
                    <span className="px-4 py-2 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-full text-[#00D9FF] text-sm font-medium">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-[#94A3B8] leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl pointer-events-none`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}