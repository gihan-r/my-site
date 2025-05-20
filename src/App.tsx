import React, { useEffect, useState, useCallback } from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ThemeToggle from './components/ui/ThemeToggle';
import { ScrollProgress } from './components/magicui/scroll-progress';
import SpiderCursor from './components/SpiderCursor';

export function App() {
  const [theme, setTheme] = useState('light');
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0
  });
  const [showSpiderCursor, setShowSpiderCursor] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Only update if the position has changed significantly
    setCursorPosition(prev => {
      const newX = e.clientX;
      const newY = e.clientY;
      if (Math.abs(prev.x - newX) > 5 || Math.abs(prev.y - newY) > 5) {
        return { x: newX, y: newY };
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setShowSpiderCursor(true);
      } else {
        setShowSpiderCursor(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        {showSpiderCursor && <SpiderCursor />}
        <main className="w-full">
          <Hero cursorPosition={cursorPosition} theme={theme} />
          <Projects theme={theme} />
          <Skills theme={theme} />
          <About theme={theme} />
          <Contact theme={theme} />
        </main>
        <Footer theme={theme} />
      </div>
    </>
  );
}