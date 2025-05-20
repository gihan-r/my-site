import React, { useRef, useEffect } from 'react';

const DOT_COUNT = 50;
const LINE_DISTANCE = 300;
const COLORS = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541'];

interface Dot {
  x: number;
  y: number;
  size: number;
  color: string;
}

const SpiderBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const banner = canvas.parentElement;
    if (!banner) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Helper to resize canvas and reinit dots
    const resize = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
      // Reinitialize dots
      dotsRef.current = [];
      for (let i = 0; i < DOT_COUNT; i++) {
        dotsRef.current.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3 + 5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)]
        });
      }
      drawDots();
    };

    // Draw all dots
    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dotsRef.current.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      drawDots();
      const rect = banner.getBoundingClientRect();
      const mouse = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      dotsRef.current.forEach(dot => {
        const distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < LINE_DISTANCE) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    // Mouse out handler
    const handleMouseOut = () => {
      drawDots();
    };

    // Initial setup
    resize();

    // Event listeners
    banner.addEventListener('mousemove', handleMouseMove);
    banner.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', resize);

    // Cleanup
    return () => {
      banner.removeEventListener('mousemove', handleMouseMove);
      banner.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none', zIndex: 0 }}
    />
  );
};

export default SpiderBackground; 