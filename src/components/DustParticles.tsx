import React, { useEffect, useRef } from 'react';

interface DustParticlesProps {
  theme?: 'dark' | 'light';
  density?: 'low' | 'normal' | 'high';
  className?: string;
}

interface SmokePlume {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  growthSpeed: number;
  color: string;
  alpha: number;
  targetAlpha: number;
  vx: number;
  vy: number;
  angle: number;
  vAngle: number;
  scaleX: number;
  scaleY: number;
  wobbleSpeed: number;
  wobblePhase: number;
  layer: number; // 1 = large slow bg, 2 = medium rolling, 3 = active fast wisps
}

export const DustParticles: React.FC<DustParticlesProps> = ({
  theme = 'dark',
  density = 'normal',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let isVisible = true;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 700;

    // Rich Heavy Machinery Earth, Terra & Clay Smoke Palette
    const darkSmokeColors = [
      '155, 90, 35',   // Rich Earth Brown Heavy Smoke
      '175, 110, 45',  // Terracotta / Warm Clay
      '135, 75, 30',   // Deep Heavy Soil Dust Cloud
      '195, 130, 55',  // Amber Sunlit Earth Vapor
      '120, 65, 25',   // Dense Mud/Exhaust Earth Smoke
      '165, 100, 40',  // Warm Sandbillow
    ];

    const lightSmokeColors = [
      '180, 125, 75',  // Rich Sand Clay Cloud
      '165, 110, 60',  // Terracotta Billow
      '190, 140, 90',  // Light Ochre Earth Smoke
      '150, 100, 55',  // Warm Soil Vapor
    ];

    const smokeColors = theme === 'dark' ? darkSmokeColors : lightSmokeColors;
    let plumes: SmokePlume[] = [];

    const createPlume = (w: number, h: number, spawnAtBottom = false): SmokePlume => {
      const rand = Math.random();
      const layer = rand < 0.35 ? 1 : rand < 0.75 ? 2 : 3;

      let maxRadius = 120;
      let vy = -1.2;
      let vx = (Math.random() - 0.4) * 1.2;
      let targetAlpha = 0.35;
      let growthSpeed = 0.3;

      if (layer === 1) {
        // Deep large background billow
        maxRadius = 180 + Math.random() * 140;
        vy = -(0.8 + Math.random() * 0.8);
        targetAlpha = theme === 'dark' ? 0.28 + Math.random() * 0.20 : 0.18 + Math.random() * 0.15;
        growthSpeed = 0.2 + Math.random() * 0.3;
      } else if (layer === 2) {
        // Rolling mid-layer smoke
        maxRadius = 110 + Math.random() * 90;
        vy = -(1.4 + Math.random() * 1.2);
        targetAlpha = theme === 'dark' ? 0.38 + Math.random() * 0.24 : 0.22 + Math.random() * 0.18;
        growthSpeed = 0.35 + Math.random() * 0.45;
      } else {
        // Fast dynamic swirling wisps
        maxRadius = 70 + Math.random() * 60;
        vy = -(2.0 + Math.random() * 1.6);
        vx = (Math.random() - 0.35) * 2.2;
        targetAlpha = theme === 'dark' ? 0.45 + Math.random() * 0.25 : 0.25 + Math.random() * 0.20;
        growthSpeed = 0.5 + Math.random() * 0.6;
      }

      const initialRadius = spawnAtBottom ? maxRadius * 0.2 : maxRadius * (0.25 + Math.random() * 0.65);
      const startY = spawnAtBottom ? h + initialRadius * 0.5 : Math.random() * (h + 100);

      return {
        x: Math.random() * (w + 100) - 50,
        y: startY,
        radius: initialRadius,
        maxRadius,
        growthSpeed,
        color: smokeColors[Math.floor(Math.random() * smokeColors.length)],
        alpha: targetAlpha * 0.5,
        targetAlpha,
        vx,
        vy,
        angle: Math.random() * Math.PI * 2,
        vAngle: (Math.random() - 0.5) * 0.02,
        scaleX: 0.85 + Math.random() * 0.4,
        scaleY: 0.75 + Math.random() * 0.35,
        wobbleSpeed: 0.02 + Math.random() * 0.03,
        wobblePhase: Math.random() * Math.PI * 2,
        layer,
      };
    };

    const initPlumes = (w: number, h: number) => {
      if (w <= 0 || h <= 0) return;
      const isMobile = window.innerWidth < 768;

      let count = isMobile ? 18 : 34;
      if (density === 'low') count = Math.round(count * 0.75);
      if (density === 'high') count = Math.round(count * 1.4);

      plumes = [];
      for (let i = 0; i < count; i++) {
        plumes.push(createPlume(w, h, false));
      }
    };

    const updateCanvasDimensions = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || 700;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (plumes.length === 0) {
        initPlumes(width, height);
      }
    };

    updateCanvasDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasDimensions();
    });
    resizeObserver.observe(container);

    let globalTime = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }

      globalTime += 0.025;
      // Active rolling horizontal wind / excavation breeze
      const windWave = Math.sin(globalTime * 0.8) * 1.2 + Math.cos(globalTime * 0.35) * 0.8;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < plumes.length; i++) {
        const p = plumes[i];

        // Animate positions with fast, visible flowing currents
        p.wobblePhase += p.wobbleSpeed;
        const drift = Math.sin(p.wobblePhase) * 1.1;

        p.x += p.vx + windWave * (p.layer === 3 ? 1.4 : 0.8) + drift;
        p.y += p.vy;
        p.angle += p.vAngle;
        p.radius += p.growthSpeed;

        // Dynamic breathing opacity curve (fade in, peak, fade out at top)
        const lifeRatio = p.radius / p.maxRadius;
        if (lifeRatio < 0.4) {
          p.alpha = Math.min(p.targetAlpha, p.alpha + 0.015);
        } else if (lifeRatio > 0.8) {
          p.alpha = Math.max(0, p.alpha - 0.008);
        }

        // Render organic rotating & morphing smoke plume
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.scale(p.scaleX, p.scaleY);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.radius);
        gradient.addColorStop(0, `rgba(${p.color}, ${p.alpha * 1.3})`);
        gradient.addColorStop(0.35, `rgba(${p.color}, ${p.alpha * 0.9})`);
        gradient.addColorStop(0.7, `rgba(${p.color}, ${p.alpha * 0.4})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Respawn when dissipated, too big, or out of view
        if (p.y < -p.radius * 1.5 || p.radius > p.maxRadius * 1.4 || p.alpha <= 0.01) {
          plumes[i] = createPlume(width, height, true);
        }

        if (p.x < -p.radius * 2) {
          p.x = width + p.radius;
        } else if (p.x > width + p.radius * 2) {
          p.x = -p.radius;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          isVisible = true;
          if (!animationFrameId) {
            animationFrameId = requestAnimationFrame(render);
          }
        } else {
          isVisible = false;
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
        }
      },
      { rootMargin: '200px 0px', threshold: 0.0 }
    );

    intersectionObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [theme, density]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full block pointer-events-none" />
    </div>
  );
};
