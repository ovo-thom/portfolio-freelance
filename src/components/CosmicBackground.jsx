import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
const CosmicBackground = ({
  starDensity = 120,
  shootingStarFrequency = 0.002,
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);
  const shootingStarsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const createStar = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      twinklePhase: Math.random() * Math.PI * 2,
      color: Math.random() < 0.1 ? "blue" : "white",
    });

    const createShootingStar = () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.5,
      length: Math.random() * 100 + 50,
      speed: Math.random() * 8 + 4,
      angle: (Math.random() * Math.PI) / 4 + Math.PI / 8,
      opacity: 1,
      decay: 0.02,
    });

    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < starDensity; i++) {
        starsRef.current.push(createStar());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      starsRef.current.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.4 + 0.6;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);

        if (star.color === "blue") {
          ctx.fillStyle = `rgba(100, 120, 180, ${star.opacity * twinkle})`;
        } else {
          ctx.fillStyle = `rgba(220, 220, 240, ${star.opacity * twinkle})`;
        }
        ctx.fill();

        if (star.size > 1.2 && twinkle > 0.8) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 200, 220, ${
            star.opacity * twinkle * 0.05
          })`;
          ctx.fill();
        }
      });

      if (Math.random() < shootingStarFrequency) {
        shootingStarsRef.current.push(createShootingStar());
      }

      shootingStarsRef.current = shootingStarsRef.current.filter(
        (shootingStar) => {
          shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
          shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
          shootingStar.opacity -= shootingStar.decay;

          if (shootingStar.opacity > 0) {
            const gradient = ctx.createLinearGradient(
              shootingStar.x,
              shootingStar.y,
              shootingStar.x -
                Math.cos(shootingStar.angle) * shootingStar.length,
              shootingStar.y -
                Math.sin(shootingStar.angle) * shootingStar.length
            );

            gradient.addColorStop(
              0,
              `rgba(180, 180, 200, ${shootingStar.opacity})`
            );
            gradient.addColorStop(
              0.5,
              `rgba(80, 100, 140, ${shootingStar.opacity * 0.6})`
            );
            gradient.addColorStop(1, "rgba(180, 180, 200, 0)");

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.moveTo(shootingStar.x, shootingStar.y);
            ctx.lineTo(
              shootingStar.x -
                Math.cos(shootingStar.angle) * shootingStar.length,
              shootingStar.y -
                Math.sin(shootingStar.angle) * shootingStar.length
            );
            ctx.stroke();

            return true;
          }
          return false;
        }
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    initStars();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [starDensity, shootingStarFrequency]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ opacity: 0.7 }}
    />
  );
};

export default CosmicBackground;
