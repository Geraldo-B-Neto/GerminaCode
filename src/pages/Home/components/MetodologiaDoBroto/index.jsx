import { useRef } from 'react';
import SectionContainer from '../../../../components/SectionContainer';
import { useElementParallax } from '../../../../utils/useParallax';
import styles from './styles.module.css';

export default function MetodologiaDoBroto() {
  const sectionRef = useRef(null);

  // Múltiplos Parallaxes com diferentes velocidades e direções no fundo das etapas
  const leafParallax = useElementParallax(sectionRef, 0.22);
  const secondaryParallax = useElementParallax(sectionRef, -0.16); // Contra-movimento
  const ringsParallax = useElementParallax(sectionRef, 0.32);
  const seedsParallax = useElementParallax(sectionRef, 0.12);

  const stages = [
    {
      id: '01',
      title: 'SEMENTE',
      cardClass: styles.card01,
      delayClass: 'delay1',
      description: 'Conversa, briefing e escopo. Entendemos o problema antes de escrever código.',
      icon: <span className={styles.seedDot} />,
    },
    {
      id: '02',
      title: 'BROTO',
      cardClass: styles.card02,
      delayClass: 'delay2',
      description: 'Design system e prototipação ágil. As primeiras linhas de código e validação de fluxo.',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <path d="M12 22 L12 8" stroke="#14201A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 11 C12 11 18 10 19 5 C19 3 15 3.5 12 7 Z" fill="#14201A" />
        </svg>
      ),
    },
    {
      id: '03',
      title: 'CRESCIMENTO',
      cardClass: styles.card03,
      delayClass: 'delay3',
      description: 'Desenvolvimento full stack, testes contínuos e refinamento constante em sprints.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
          <path d="M12 22 L12 5" stroke="#14201A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 9 C12 9 19 8 19 3 C19 1.5 15 2 12 5 Z" fill="#14201A" />
          <path d="M12 13 C12 13 6 13 4 9 C4 7 8 7.5 12 10.5 Z" fill="#14201A" />
        </svg>
      ),
    },
    {
      id: '04',
      title: 'COLHEITA',
      cardClass: styles.card04,
      delayClass: 'delay4',
      description: 'Deploy, documentação completa e suporte para o projeto escalar com segurança.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
          <path d="M12 22 L12 4" stroke="#14201A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 7 C12 7 20 6 20 1 C20 0 16 0.5 12 3.5 Z" fill="#14201A" />
          <path d="M12 12 C12 12 5 12 3 7 C3 5.5 7 6 12 9.5 Z" fill="#14201A" />
          <circle cx="20" cy="1" r="1.8" fill="#14201A" />
          <circle cx="3" cy="7" r="1.8" fill="#14201A" />
        </svg>
      ),
    },
  ];

  return (
    <section id="metodologia" className={styles.section} ref={sectionRef}>
      {/* 1. Anéis Concêntricos de Crescimento no Fundo (Parallax Rápido) */}
      <div
        className={styles.growthRings}
        style={{ transform: `translate3d(0, ${ringsParallax}px, 0)` }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="190" stroke="#C8E86B" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="200" cy="200" r="140" stroke="#C8E86B" strokeWidth="1" />
          <circle cx="200" cy="200" r="90" stroke="#C8E86B" strokeWidth="1.2" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="40" stroke="#C8E86B" strokeWidth="1" />
        </svg>
      </div>

      {/* 2. Ramo Secundário à Esquerda (Contra-movimento Parallax) */}
      <div
        className={styles.leafSecondary}
        style={{ transform: `translate3d(0, ${secondaryParallax}px, 0)` }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 300" fill="none">
          <path d="M20 280 Q 90 150 160 20" stroke="#256B42" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M80 160 C80 160 140 140 150 60 C90 70 80 120 80 160 Z" stroke="#C8E86B" strokeWidth="1.8" fill="none" />
        </svg>
      </div>

      {/* 3. Partículas e Sementes Flutuantes no Background */}
      <div
        className={styles.floatingSeeds}
        style={{ transform: `translate3d(0, ${seedsParallax}px, 0)` }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 1200 600" width="100%" height="100%" fill="none" style={{ position: 'absolute', inset: 0 }}>
          <circle cx="150" cy="180" r="3" fill="#C8E86B" opacity="0.6" />
          <circle cx="480" cy="90" r="4" fill="#C8E86B" opacity="0.35" />
          <circle cx="820" cy="220" r="2.5" fill="#C8E86B" opacity="0.5" />
          <circle cx="1050" cy="140" r="5" fill="#256B42" opacity="0.8" />
          <circle cx="920" cy="480" r="3" fill="#C8E86B" opacity="0.4" />
          <circle cx="280" cy="420" r="2" fill="#C8E86B" opacity="0.5" />
        </svg>
      </div>

      {/* 4. Linhas de Código / Coordenadas Técnicas */}
      <div
        className={styles.techCoords}
        style={{ transform: `translate3d(0, ${secondaryParallax * 0.8}px, 0)` }}
        aria-hidden="true"
      >
        <span>GERMINA // GROWTH_MATRIX.SYS</span>
        <span>STAGE [01_SEMENTE -&gt; 04_COLHEITA]</span>
        <span>LAT -15.7938 · LONG -47.8828</span>
      </div>

      <SectionContainer>
        {/* Cabeçalho da Seção com Ramo Principal */}
        <div className={`${styles.headerRow} reveal`}>
          <span className={styles.eyebrow}>
            COMO TRABALHAMOS. CADA PROJETO PASSA PELAS MESMAS<br />
            QUATRO ESTAÇÕES.
          </span>

          <h2 className={styles.title}>
            DO BROTO À
            <span className={styles.highlight}>COLHEITA.</span>
          </h2>

          {/* Ramo Ilustrado em Outline Verde com Parallax Principal */}
          <div
            className={styles.leafIllustration}
            style={{ transform: `translate3d(0, ${leafParallax}px, 0)` }}
          >
            <svg viewBox="0 0 280 380" fill="none" className={styles.leafSvg}>
              <path
                d="M140 370 L140 70"
                stroke="#C8E86B"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              <path
                d="M140 180 C140 180 250 160 255 30 C165 40 140 120 140 180 Z"
                stroke="#C8E86B"
                strokeWidth="2.8"
                fill="none"
                strokeLinejoin="round"
              />
              <path
                d="M140 260 C140 260 50 250 20 160 C90 150 135 210 140 260 Z"
                stroke="#C8E86B"
                strokeWidth="2.8"
                fill="none"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* As 4 Estações com Entrada Escalonada */}
        <div className={styles.stagesGrid}>
          {stages.map((st) => (
            <article key={st.id} className={`${styles.stageCard} ${st.cardClass} reveal ${st.delayClass}`}>
              <div className={styles.cardTop}>
                <span className={styles.stageNumber}>{st.id}</span>
                <div className={styles.stageIconBox}>{st.icon}</div>
              </div>
              <div className={styles.cardBottom}>
                <h3 className={styles.stageTitle}>{st.title}</h3>
                <p className={styles.stageDescription}>{st.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
