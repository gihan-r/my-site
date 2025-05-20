import React, { useRef, useEffect } from 'react';

const DOT_COUNT = 50;
const DOT_RADIUS = 3;
const LINE_DISTANCE = 120;
const COLORS = ['#fff', '#fbbf24', '#60a5fa', '#f472b6', '#a3e635', '#f87171', '#818cf8'];

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

const SpiderBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const animationRef = useRef<number>();

  // Helper to initialize dots
  const initDots = (width: number, height: number) => {
    dotsRef.current = [];
    for (let i = 0; i < DOT_COUNT; i++) {
      dotsRef.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        color: COLORS[Math.floor(Math.random() * COLORS.length)]
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size and reinitialize dots
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.offsetWidth * dpr;
      const height = canvas.offsetHeight * dpr;
      canvas.width = width;
      canvas.height = height;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      initDots(canvas.width / dpr, canvas.height / dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    // Mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      mouseRef.current = {
        x: (e.clientX - rect.left) * (canvas.width / rect.width) / dpr,
        y: (e.clientY - rect.top) * (canvas.height / rect.height) / dpr
      };
    };
    const handleMouseLeave = () => {
      mouseRef.current = null;
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Move dots
      for (const dot of dotsRef.current) {
        dot.x += dot.vx;
        dot.y += dot.vy;
        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width / (window.devicePixelRatio || 1)) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height / (window.devicePixelRatio || 1)) dot.vy *= -1;
      }
      // Draw lines between dots and mouse
      if (mouseRef.current) {
        for (const dot of dotsRef.current) {
          const dx = dot.x - mouseRef.current.x;
          const dy = dot.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = 'rgba(255,255,255,0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      // Draw dots
      for (const dot of dotsRef.current) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.shadowColor = dot.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default SpiderBackground; 