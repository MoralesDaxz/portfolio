// components/BackgroundEffect.tsx
import { useEffect, useRef } from "react";

const BackgroundEffect = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  // Almacena la posición actual de la esfera
  const currentPos = useRef({ x: 0, y: 0 });
  // Diámetro de la esfera (debe coincidir con las clases de Tailwind)
  const circleDiameter = 300;
 
  useEffect(() => {
    // Función de easing para suavizar la transición (easeInOutQuad)
    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    function animateMove() {
      
      if (!circleRef.current) return;

      // Obtener límites: ancho de la ventana y alto total del documento
      const landingWidth = window.innerWidth;
      const landingHeight = document.body.scrollHeight;
   
      // Calcular límites para que la esfera se mantenga dentro del contenedor
      const maxX = Math.max(landingWidth - circleDiameter, 0);
      const maxY = Math.max(landingHeight - circleDiameter, 0);

      // Generar posiciones aleatorias dentro de los límites permitidos
      const targetX = Math.random() * maxX;
      const targetY = Math.random() * maxY;

      const startX = currentPos.current.x;
      const startY = currentPos.current.y;
      const dx = targetX - startX;
      const dy = targetY - startY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Define una velocidad constante (píxeles por segundo)
      const speed = 200; // Puedes ajustar este valor según lo deseado
      const duration = (distance / speed) * 1000; // Duración en milisegundos

      let startTime: number | null = null;

      // Función recursiva que se invoca en cada frame
      const step = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        let t = Math.min(elapsed / duration, 1);
        t = easeInOutQuad(t);

        const newX = startX + dx * t;
        const newY = startY + dy * t;
        currentPos.current = { x: newX, y: newY };

        if (circleRef.current) {
          circleRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
        }

        if (elapsed < duration) {
          requestAnimationFrame(step);
        } else {
          // Al finalizar la animación, se inicia un nuevo movimiento
          animateMove();
        }
        
      };

      requestAnimationFrame(step);
    }

    // Establecer una posición inicial aleatoria dentro de los límites
    const landingWidth = window.innerWidth;
    const landingHeight = document.body.scrollHeight;
    const maxX = Math.max(landingWidth - circleDiameter, 0);
    const maxY = Math.max(landingHeight - circleDiameter, 0);

    currentPos.current = {
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    };

    if (circleRef.current) {
      circleRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
    }

    // Inicia la animación continua
    animateMove();
   
    // Cleanup (opcional)
    return () => {
      // Aquí podrías cancelar la animación si fuese necesario
    };
  }, []);

  return (
    /* min-w-[300px] max-w-[350px] md:min-w-[400px] md:max-w-[650px] lg:min-w-[650px] lg:max-w-max */
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <div
        ref={circleRef}
        className="w-[300px] h-[300px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40"
      ></div>
    </div>
  );
};

export default BackgroundEffect;
