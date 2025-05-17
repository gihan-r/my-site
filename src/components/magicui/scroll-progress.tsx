import React, { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[9999]">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
} 