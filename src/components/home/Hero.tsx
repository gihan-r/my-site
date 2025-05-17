import React from 'react';
import { Meteors } from '../magicui/meteors';

interface HeroProps {
  cursorPosition: {
    x: number;
    y: number;
  };
  theme: string;
}

const Hero: React.FC<HeroProps> = ({ cursorPosition, theme }) => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20" />
      <Meteors />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            {/* Name with enhanced styling */}
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient"
              style={{
                transform: `translate(${(cursorPosition.x - window.innerWidth / 2) * 0.01}px, ${(cursorPosition.y - window.innerHeight / 2) * 0.01}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              Gihan Samaraweera
        </h1>
            
            {/* Title with enhanced styling */}
            <h2 
              className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8"
              style={{
                transform: `translate(${(cursorPosition.x - window.innerWidth / 2) * 0.02}px, ${(cursorPosition.y - window.innerHeight / 2) * 0.02}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              Computer Science Student & Graphic Designer
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Passionate about creating innovative solutions and beautiful designs that make a difference.
            </p>
          </div>

          {/* Photo Section with enhanced glow */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
            {/* Multiple glow layers for more visible effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            {/* Photo container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img
                src="your-photo.jpg"
                alt="Gihan Samaraweera"
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/your-photo.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;