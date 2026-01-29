import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import "./globals.css";


const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Kishore Kumar | Portfolio",
  description: "Kishore Kumar's Portfolio",
  icons:{
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} bg-[#090909] text-white antialiased`}>
        <div className="relative min-h-screen">
          {/* Technical Background Pattern */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-[#090909]" />
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, #4F46E5 1px, transparent 1px),
                  linear-gradient(#4F46E5 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </div>
          
          {/* Main Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
