import React, { useEffect, useRef } from 'react';
interface PatternBackgroundProps {
  cursorPosition: {
    x: number;
    y: number;
  };
  theme: string;
  intensity?: number;
}
const PatternBackground: React.FC<PatternBackgroundProps> = ({
  cursorPosition,
  theme,
  intensity = 1
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate relative cursor position
    const relX = cursorPosition.x - rect.left;
    const relY = cursorPosition.y - rect.top;
    // Calculate distance from center (normalized)
    const distX = (relX - centerX) / centerX;
    const distY = (relY - centerY) / centerY;
    // Apply transformation to patterns based on cursor position
    const patterns = svg.querySelectorAll('.pattern-element');
    patterns.forEach((pattern, index) => {
      const depth = 1 - index % 3 * 0.2;
      const translateX = -distX * 20 * depth * intensity;
      const translateY = -distY * 20 * depth * intensity;
      const rotate = (distX + distY) * 2 * depth * intensity;
      pattern.setAttribute('transform', `translate(${translateX}, ${translateY}) rotate(${rotate}, ${centerX}, ${centerY})`);
    });
  }, [cursorPosition, intensity]);
  const primaryColor = theme === 'dark' ? '#3B82F6' : '#2563EB';
  const secondaryColor = theme === 'dark' ? '#EC4899' : '#DB2777';
  const tertiaryColor = theme === 'dark' ? '#8B5CF6' : '#7C3AED';
  const bgColor = theme === 'dark' ? '#111827' : '#F9FAFB';
  return <svg ref={svgRef} className="absolute inset-0 w-full h-full -z-10 opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke={primaryColor} strokeWidth="1" opacity="0.3" />
        </pattern>
        <pattern id="circles" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="20" fill="none" stroke={secondaryColor} strokeWidth="1" opacity="0.5" />
          <circle cx="0" cy="0" r="10" fill="none" stroke={tertiaryColor} strokeWidth="1" opacity="0.3" />
          <circle cx="100" cy="100" r="10" fill="none" stroke={tertiaryColor} strokeWidth="1" opacity="0.3" />
        </pattern>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="1" fill={primaryColor} opacity="0.5" />
          <circle cx="15" cy="15" r="1" fill={secondaryColor} opacity="0.5" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill={bgColor} />
      <g className="pattern-element">
        <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
      </g>
      <g className="pattern-element">
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circles)" />
      </g>
      <g className="pattern-element">
        <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
      </g>
      <path className="pattern-element" d="M0,0 L1000,1000 M1000,0 L0,1000" stroke={primaryColor} strokeWidth="0.5" opacity="0.2" />
    </svg>;
};
export default PatternBackground;