import React, { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let mouse = { x: -9999, y: -9999 };

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    const onResize = () => setSize();
    const onMouse = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);

    const COUNT = 100;
    const MAX_DIST = 160;
    const RED = "255, 59, 63";

    const pts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 1.8 + 0.8,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of pts) {
        // drift
        p.x += p.vx;
        p.y += p.vy;

        // wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // mouse repel
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 120 && md > 0) {
          const force = (120 - md) / 120;
          p.vx += (mdx / md) * force * 0.4;
          p.vy += (mdy / md) * force * 0.4;
        }

        // speed cap + damping
        const spd = Math.hypot(p.vx, p.vy);
        if (spd > 1.5) { p.vx = (p.vx / spd) * 1.5; p.vy = (p.vy / spd) * 1.5; }
        p.vx *= 0.995;
        p.vy *= 0.995;

        // draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${RED}, 0.85)`;
        ctx.fill();
      }

      // draw connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.35;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(${RED}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}