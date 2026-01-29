'use client';

import About from './About';
import Achievements from './Achievements';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-[#0A0E27] text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Custom Cursor Trail Effect (Optional) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0A0E27;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00D9FF, #6366F1);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #00D9FF, #8B5CF6);
        }
        
        /* Shimmer Animation */
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        /* Selection Color */
        ::selection {
          background-color: rgba(0, 217, 255, 0.3);
          color: #E2E8F0;
        }
        
        /* Prevent text selection on interactive elements */
        button, a {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
}