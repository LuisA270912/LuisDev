"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./HomePage.module.css";


export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
}

const particles: Particle[] = [];


    const numParticles = 150;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2 + 0.3, // Más delgadas
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0f0";
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx.fill();
        p.y -= p.speed;
        if (p.y < 0) p.y = canvas.height;
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className={styles.container}>
     
      <canvas ref={canvasRef} className={styles.canvas}></canvas>

      <main className={styles.main}>
        <Image
          src="/logo.png"
          alt="LuisDev logo"
          width={150}
          height={150}
          className={styles.logo}
        />
        <h1 className={styles.title}>LuisDev | Desarrollador Full Stack</h1>
        <div className={styles.buttons}>
  <a
    href="https://buymeacoffee.com/luisdev"
    className={styles.button}
    target="_blank"
    rel="noopener noreferrer"
  >
    Códigos Completos Gratis
  </a>
  <a
    href="https://luis-dev-portafolio.vercel.app/"
    className={styles.button}
    target="_blank"
    rel="noopener noreferrer"
  >
    Portafolio Web
  </a>
  <a
    href="https://github.com/LuisDevCode27"
    className={styles.button}
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>
  <a
    href="https://www.tiktok.com/@luis.dev3"
    className={styles.button}
    target="_blank"
    rel="noopener noreferrer"
  >
    Tiktok
  </a>
</div>

      </main>

      <footer className={styles.footer}>
        © Copyright Luis Dev. Todos los derechos reservados.
      </footer>
    </div>
  );
}
