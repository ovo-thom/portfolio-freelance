import { useEffect, useRef } from 'react';

/* eslint-disable react/prop-types */
const StarField = ({ density = 100, speed = 0.5 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Fonction pour créer une étoile
    const createStar = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      driftX: (Math.random() - 0.5) * speed,
      driftY: (Math.random() - 0.5) * speed,
      twinklePhase: Math.random() * Math.PI * 2
    });

    // Initialiser les étoiles
    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < density; i++) {
        starsRef.current.push(createStar());
      }
    };

    // Animation des étoiles
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      starsRef.current.forEach(star => {
        // Déplacement lent
        star.x += star.driftX;
        star.y += star.driftY;

        // Scintillement
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;

        // Repositionner si hors écran
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Dessiner l'étoile
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.fill();

        // Effet de lueur subtile pour les plus grosses étoiles
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(173, 216, 230, ${(star.opacity * twinkle) * 0.1})`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Redimensionnement
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    // Initialisation
    initStars();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [density, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ opacity: 0.6 }}
    />
  );
};

export default StarField;
