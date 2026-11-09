import { useState, useEffect } from 'react';
import SectionContainer from '../../../../components/SectionContainer';
import { useBrasiliaClock } from '../../../../utils/timeZone';
import { useScrollPosition } from '../../../../utils/useParallax';
import styles from './styles.module.css';

export default function Hero() {
  const { time } = useBrasiliaClock();
  const scrollY = useScrollPosition();
  const [waterCount, setWaterCount] = useState(0);
  const [isWatering, setIsWatering] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  // Parallax suave do domo e do broto na Hero (deslocamento sutil com o scroll)
  const heroParallax = Math.min(scrollY * 0.15, 120);

  // 1. ANIMAÇÃO DE ENTRADA SUAVE VERTICAL (CIMA PARA BAIXO) & ATIVAÇÃO DO IDLE
  useEffect(() => {
    const enterTimer = setTimeout(() => {
      setIsEntered(true);
  }, 100);

  const idleTimer = setTimeout(() => {
    setIsIdle(true);
}, 1250);

return () => {
  clearTimeout(enterTimer);
  clearTimeout(idleTimer);
};
  }, []);

// 2. MICRO-INTERAÇÃO AO CLICAR EM "REGAR O BROTO"
const handleWater = () => {
  if (isWatering) return;

  setIsWatering(true);
  setWaterCount((prev) => prev + 1);

  setTimeout(() => {
    setIsWatering(false);
  }, 900);
};

return (
  <section id="hero" className={styles.heroSection}>
    <SectionContainer>
        {/* 1. Bloco Superior Editorial (Entra primeiro suavemente de cima para baixo) */}
        <div className={`${styles.heroTopArea} ${isEntered ? styles.entered : ''}`}>
          <div className={styles.manifestoBlock}>
            {/* Versão Desktop */}
            <div className={styles.desktopOnly}>
              <div className={styles.manifestoPara}>
                O ESTÚDIO DE CÓDIGO QUE<br />
                ADORA VER IDEIAS<br />
                CRESCEREM.
              </div>
              <div className={styles.manifestoPara}>
                COMEÇANDO PELO SEU<br />
                PROJETO.
              </div>
            </div>

            {/* Versão Mobile (quebras exatas da imagem) */}
            <div className={styles.mobileOnly}>
              <div className={styles.manifestoPara}>
                O ESTÚDIO DE<br />
                CÓDIGO QUE ADORA<br />
                VER IDEIAS<br />
                CRESCEREM.
              </div>
              <div className={styles.manifestoPara}>
                COMEÇANDO PELO<br />
                SEU PROJETO.
              </div>
            </div>
          </div>

          <div className={styles.servicesBlock}>
            {/* Versão Desktop */}
            <div className={styles.desktopOnly}>
              SITES, APLICAÇÕES WEB E<br />
              SISTEMAS DESKTOP SOB MEDIDA
            </div>

            {/* Versão Mobile (4 linhas alinhadas à direita) */}
            <div className={styles.mobileOnly}>
              SITES, APLICAÇÕES<br />
              WEB E SISTEMAS<br />
              DESKTOP SOB<br />
              MEDIDA
            </div>
          </div>
        </div>

        {/* 2. Palco do Semicírculo Verde e Símbolo Central (Entra em seguida) */}
        <div
          className={`${styles.domeStage} ${isEntered ? styles.entered : ''}`}
          style={{ transform: isEntered ? `translate3d(0, ${heroParallax}px, 0)` : undefined }}
        >
          {/* Domo Verde Semente com Pulso Suave ao Regar */}
          <div className={`${styles.dome} ${isWatering ? styles.domeGlow : ''}`}>

            {/* Botão Interativo: REGAR O BROTO */}
            <button
              type="button"
              className={styles.waterBadge}
              onClick={handleWater}
              title="Clique para regar o broto"
              aria-label="Regar o broto"
            >
              <span>REGAR O BROTO</span>
              {waterCount > 0 && <span style={{ opacity: 0.8 }}>({waterCount})</span>}
            </button>

            {/* Animação da Gota d'Água SVG ao Regar */}
            {isWatering && (
              <>
                <div className={styles.dropTrack}>
                  <svg viewBox="0 0 24 32" width="22" height="28" fill="none">
                    <path
                      d="M12 2 C12 2 3 14 3 20 C3 25.5 7 30 12 30 C17 30 21 25.5 21 20 C21 14 12 2 12 2 Z"
                      fill="#256B42"
                    />
                    <path
                      d="M8 18 C8 15 11 10 12 7"
                      stroke="rgba(246, 244, 238, 0.6)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className={styles.splashRing}>
                  <svg viewBox="0 0 60 60" width="54" height="54" fill="none">
                    <circle cx="30" cy="30" r="16" stroke="#256B42" strokeWidth="2.5" opacity="0.6" />
                    <circle cx="20" cy="18" r="2.5" fill="#256B42" />
                    <circle cx="42" cy="22" r="2.5" fill="#256B42" />
                    <circle cx="32" cy="44" r="2" fill="#256B42" />
                  </svg>
                </div>
              </>
            )}

            {/* Símbolo Central { 🌱 } */}
            <div className={`${styles.symbolContainer} ${isEntered ? styles.entered : styles.initialLoad}`}>
              <svg viewBox="0 0 160 120" fill="none" className={styles.domeSvg}>
                {/* Chave Esquerda { */}
                <path
                  className={styles.bracketLeft}
                  d="M42 22 C26 22 23 30 23 48 C23 56 16 60 8 60 C16 60 23 64 23 72 C23 90 26 98 42 98"
                  stroke="#14201A"
                  strokeWidth="8.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Grupo do Broto (com Respiração Idle e Absorção ao Regar) */}
                <g className={`${styles.sproutGroup} ${isWatering ? styles.wateringActive : (isIdle ? styles.idleBreath : '')}`}>
                  <path
                    className={styles.sproutStem}
                    d="M79 98 C79 78 79 58 79 40"
                    stroke="#256B42"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <path
                    className={styles.leafRight}
                    d="M79 56 C79 56 99 54 105 38 C105 25 91 30 79 43 Z"
                    fill="#256B42"
                  />
                  <path
                    className={styles.leafLeft}
                    d="M79 66 C79 66 61 66 55 52 C55 41 68 45 79 57 Z"
                    fill="#256B42"
                  />
                </g>

                {/* Chave Direita } */}
                <path
                  className={styles.bracketRight}
                  d="M118 22 C134 22 137 30 137 48 C137 56 144 60 152 60 C144 60 137 64 137 72 C137 90 134 98 118 98"
                  stroke="#14201A"
                  strokeWidth="8.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

            {/* 3. Cantos Inferiores (Entram por último completando o fluxo vertical) */}
            <div className={`${styles.bottomInfoRow} ${isEntered ? styles.entered : ''}`}>
              <div className={styles.cornerLeft}>
                <div>WHATSAPP :</div>
                <a href="https://wa.me/5561999999999" target="_blank" rel="noopener noreferrer" className={styles.cornerLink}>
                  [SEU NÚMERO]
                </a>
              </div>

              <div className={styles.cornerRight}>
                <div>BRASÍLIA :</div>
                <div>{time}</div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>
      );
}
