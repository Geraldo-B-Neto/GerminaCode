import { useState, useEffect } from 'react';

/**
 * Hook para obter a posição atual de scroll da página otimizada com requestAnimationFrame.
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

/**
 * Hook de parallax relativo a um elemento de referência (Section / Container).
 * Retorna o deslocamento em pixels calculado com um multiplicador de velocidade.
 */
export function useElementParallax(elementRef, speed = 0.15) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!elementRef.current || ticking) return;

      window.requestAnimationFrame(() => {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Se o elemento estiver visível na tela
        if (rect.top < windowHeight && rect.bottom > 0) {
          const relativeCenter = rect.top - windowHeight / 2;
          setOffset(relativeCenter * speed);
        }
        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Dispara o cálculo inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementRef, speed]);

  return offset;
}

