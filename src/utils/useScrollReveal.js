import { useEffect } from 'react';
import { playLeafRustleSound } from './soundEffects';

/**
 * Hook utilitário para ativar animações suaves de entrada conforme os elementos entram na tela.
 * Observa qualquer elemento com as classes: .reveal, .revealFade, .revealLeft, .revealScale
 * e aciona um som sutil de folhas farfalhando (com cooldown anti-poluição).
 */
export function useScrollReveal(threshold = 0.12) {
  useEffect(() => {
    // Se não suportar IntersectionObserver (ex: navegadores muito antigos), revela tudo direto
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal, .revealFade, .revealLeft, .revealScale').forEach((el) => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Toca suavemente o farfalhar de folhas ao revelar nova seção/bloco importante
            playLeafRustleSound();
            observer.unobserve(entry.target); // Revela uma vez e desconecta o elemento
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px', // Revela um pouco antes de atingir o fundo da tela
      }
    );

    // Seleciona e observa todos os elementos marcados para animação de entrada
    const elements = document.querySelectorAll('.reveal, .revealFade, .revealLeft, .revealScale');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold]);
}

