"use client";

import React, { useEffect, useRef } from 'react';

const SmokeEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Disable on ALL devices below high-end threshold and touch devices
    if (typeof window === 'undefined') return;
    if (window.innerWidth < 1024) return;
    // Detect low-end devices via hardwareConcurrency
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    interface TrailPoint {
      x: number;
      y: number;
      life: number;
      color: string;
    }

    const trail: TrailPoint[] = [];
    let colorIndex = 0;
    let animationId: number;
    let isMoving = false;
    let moveTimeout: ReturnType<typeof setTimeout>;

    const PALETTE = ['#00f2ff', '#00ffcc', '#ffb800'];
    const MAX_TRAIL = 18; // Reduced from unlimited

    function resize() {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    }
    window.addEventListener('resize', resize, { passive: true });
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      colorIndex = (colorIndex + 0.06) % PALETTE.length;
      const color = PALETTE[Math.floor(colorIndex)];
      trail.push({ x: e.clientX, y: e.clientY, life: 1.0, color });
      // Trim to max to avoid unbounded growth
      if (trail.length > MAX_TRAIL) trail.shift();

      isMoving = true;
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => { isMoving = false; }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Skip frame when mouse isn't moving to save GPU cycles
      if (!isMoving && trail.length === 0) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Decay trail
      for (let i = trail.length - 1; i >= 0; i--) {
        trail[i].life -= 0.04;
        if (trail[i].life <= 0) { trail.splice(i, 1); }
      }

      // Draw trail — NO shadowBlur (massive perf win)
      if (trail.length > 1) {
        for (let i = 1; i < trail.length; i++) {
          const p1 = trail[i - 1];
          const p2 = trail[i];
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineWidth = p2.life * 4;
          ctx.strokeStyle = p2.color;
          ctx.globalAlpha = Math.max(0, p2.life * 0.6);
          ctx.lineCap = 'round';
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      clearTimeout(moveTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden lg:block"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen',
        willChange: 'auto',
      }}
    />
  );
};

export default SmokeEffect;
