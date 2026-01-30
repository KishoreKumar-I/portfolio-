import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showLoadingText, setShowLoadingText] = useState(false);
  const [particlePositions, setParticlePositions] = useState<Array<{x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    // Generate particle positions on client side
    const positions = [...Array(20)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setParticlePositions(positions);

    // Start progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2; // Increment by 2% every 50ms for smooth animation
      });
    }, 50);

    // Show loading text after logo appears
    const textTimer = setTimeout(() => {
      setShowLoadingText(true);
    }, 800);

    // Complete loading after 4 seconds
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 4000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    isVisible && (
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white z-50 overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
      >
        {/* Background particles effect */}
        <div className="absolute inset-0">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              initial={{
                x: `${pos.x}%`,
                y: `${pos.y}%`,
                scale: 0
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 2,
                delay: pos.delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 3
              }}
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`
              }}
            />
          ))}
        </div>

        {/* Logo */}
        <motion.div
          className="relative z-10 mb-8"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Image
              src="/loading.png"
              alt="Logo"
              className="relative w-24 h-24 rounded-full border-2 border-white/20 shadow-2xl"
              width={96}
              height={96}
              priority
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        {showLoadingText && (
          <motion.div
            className="relative z-10 text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-xl font-light mb-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {/* Loading Portfolio */}
            </motion.h2>
            <div className="flex justify-center space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Progress Bar */}
        {showLoadingText && (
          <motion.div
            className="relative z-10 w-64 h-1 bg-white/20 rounded-full overflow-hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </motion.div>
        )}

        {/* Progress Percentage */}
        {showLoadingText && (
          <motion.p
            className="relative z-10 mt-4 text-sm text-white/70 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {Math.round(progress)}%
          </motion.p>
        )}
      </motion.div>
    )
  );
}
