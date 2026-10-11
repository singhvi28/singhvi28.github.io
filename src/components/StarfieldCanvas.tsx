import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  color: string;
  twinkleSpeed: number;
  twinklePhase: number;
  baseAlpha: number;
  speedMultiplier: number;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  color: string;
}

interface StarfieldCanvasProps {
  scrollVelocity?: number;
}

export const StarfieldCanvas: React.FC<StarfieldCanvasProps> = ({ scrollVelocity = 0 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    const starColors = ['#FFFFFF', '#00F0FF', '#FFB800', '#FF2E93', '#D0E6FF'];
    let stars: Star[] = [];
    const meteors: Meteor[] = [];

    const initStars = () => {
      const count = Math.min(220, Math.floor((width * height) / 6000));
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() < 0.8 ? Math.random() * 1.5 + 0.5 : Math.random() * 2.2 + 1.2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
          baseAlpha: Math.random() * 0.6 + 0.3,
          speedMultiplier: Math.random() * 0.8 + 0.2
        });
      }
    };

    initStars();

    let lastTime = performance.now();
    let meteorCooldown = 0;

    const render = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Warp factor based on scroll velocity
      const vel = Math.min(Math.abs(scrollVelocity) * 0.05, 12);
      const isWarping = vel > 1.2;

      // Draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.twinklePhase += star.twinkleSpeed;
        const alpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.25;

        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));

        if (isWarping) {
          // Stretch star vertically into a streak
          const streakLen = Math.min(star.size + vel * star.speedMultiplier * 2.5, 30);
          ctx.beginPath();
          ctx.roundRect(star.x - star.size / 2, star.y, star.size, streakLen, 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Handle meteors
      meteorCooldown += delta;
      if (meteorCooldown > 4 && Math.random() < 0.02) {
        meteorCooldown = 0;
        meteors.push({
          x: Math.random() * width * 0.8 + width * 0.1,
          y: Math.random() * height * 0.3,
          length: Math.random() * 120 + 80,
          speed: Math.random() * 700 + 500,
          angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2, // ~45 deg downward
          alpha: 1,
          color: Math.random() < 0.5 ? '#00F0FF' : '#FFB800'
        });
      }

      for (let j = meteors.length - 1; j >= 0; j--) {
        const m = meteors[j];
        m.x += Math.cos(m.angle) * m.speed * delta;
        m.y += Math.sin(m.angle) * m.speed * delta;
        m.alpha -= delta * 1.2;

        if (m.alpha <= 0 || m.x > width || m.y > height) {
          meteors.splice(j, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = m.alpha;
        const grad = ctx.createLinearGradient(
          m.x,
          m.y,
          m.x - Math.cos(m.angle) * m.length,
          m.y - Math.sin(m.angle) * m.length
        );
        grad.addColorStop(0, '#FFFFFF');
        grad.addColorStop(0.3, m.color);
        grad.addColorStop(1, 'transparent');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(
          m.x - Math.cos(m.angle) * m.length,
          m.y - Math.sin(m.angle) * m.length
        );
        ctx.stroke();
        ctx.restore();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollVelocity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
};
