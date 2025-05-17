import React, { useEffect, useRef } from 'react';
interface CustomCursorProps {
  position: {
    x: number;
    y: number;
  };
}
const CustomCursor: React.FC<CustomCursorProps> = ({
  position
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!cursorRef.current || !cursorDotRef.current) return;
    // Smooth cursor follow with slight delay
    cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    // Dot follows cursor exactly
    cursorDotRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    // Add event listeners for hover effects
    const handleMouseOver = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('scale-[1.5]');
      }
    };
    const handleMouseOut = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('scale-[1.5]');
      }
    };
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });
    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, [position]);
  return <>
      {/* Main cursor */}
      <div ref={cursorRef} className="hidden md:block fixed pointer-events-none w-8 h-8 rounded-full border border-blue-500 -ml-4 -mt-4 z-[9999] transition-transform duration-100 ease-out" style={{
      transform: `translate(${position.x}px, ${position.y}px)`
    }} />
      {/* Cursor dot */}
      <div ref={cursorDotRef} className="hidden md:block fixed pointer-events-none w-2 h-2 bg-blue-500 rounded-full -ml-1 -mt-1 z-[9999]" style={{
      transform: `translate(${position.x}px, ${position.y}px)`
    }} />
    </>;
};
export default CustomCursor;