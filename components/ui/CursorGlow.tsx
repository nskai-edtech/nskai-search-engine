"use client";

import { useEffect, useRef } from "react";

const SPACING = 28;
const DOT_RADIUS = 1.2;
const REVEAL_RADIUS = 140;

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const accent =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-primary")
        .trim() || "#d85a30";

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const { x: mx, y: my } = mouse.current;
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const dx = c * SPACING - mx;
          const dy = r * SPACING - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > REVEAL_RADIUS) continue;

          const alpha = (1 - dist / REVEAL_RADIUS) * 0.7;
          ctx.beginPath();
          ctx.arc(c * SPACING, r * SPACING, DOT_RADIUS, 0, Math.PI * 2);
          ctx.fillStyle = accent.startsWith("#")
            ? accent +
              Math.round(alpha * 255)
                .toString(16)
                .padStart(2, "0")
            : `rgba(216,90,48,${alpha})`;
          ctx.fill();
        }
      }

      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ willChange: "transform" }}
    />
  );
}
