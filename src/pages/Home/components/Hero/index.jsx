import { useState, useEffect } from 'react';
import SectionContainer from '../../../../components/SectionContainer';
import { useBrasiliaClock } from '../../../../utils/timeZone';
import { useScrollPosition } from '../../../../utils/useParallax';
import { playWaterDropSound, playBloomSound } from '../../../../utils/soundEffects';
import styles from './styles.module.css';

export default function Hero() {
  const { time } = useBrasiliaClock();
  const scrollY = useScrollPosition();
  const [waterCount, setWaterCount] = useState(0);
  const [isWatering, setIsWatering] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  // Parallax suave do domo e do broto na Hero
  const heroParallax = Math.min(scrollY * 0.15, 120);

  // 1. ANIMAÇÃO DE ENTRADA SUAVE VERTICAL & ATIVAÇÃO DO IDLE
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

  // 2. MICRO-INTERAÇÃO AO CLICAR EM "REGAR O BROTO" (FLORESCIMENTO + TRILHA AMBIENTAL)
  const handleWater = () => {
    if (isWatering) return;

    setIsWatering(true);
    playWaterDropSound();

    setTimeout(() => {
      playBloomSound();
    }, 380);

    setWaterCount((prev) => prev + 1);

    setTimeout(() => {
      setIsWatering(false);
    }, 950);
  };

  // Texto interativo do botão baseado no nível de crescimento
  const getBadgeText = () => {
    if (waterCount === 0) return 'REGAR O BROTO';
    if (waterCount === 1) return `BROTO REGADO 🌱 (${waterCount})`;
    if (waterCount === 2) return `FLORESCENDO 🌸 (${waterCount})`;
    return `JARDIM FLORIDO ✨ (${waterCount})`;
  };

  const isBloomed = waterCount > 0;

  return (
    <section id="hero" className={styles.heroSection}>
      <SectionContainer>
        {/* 1. Bloco Superior Editorial (Entra suavemente de cima para baixo) */}
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

        {/* 2. Palco do Semicírculo Verde e Símbolo Central com Parallax */}
        <div
          className={`${styles.domeStage} ${isEntered ? styles.entered : ''}`}
          style={{ transform: isEntered ? `translate3d(0, ${heroParallax}px, 0)` : undefined }}
        >
          {/* Domo Verde Semente com Pulso Suave ao Regar */}
          <div className={`${styles.dome} ${isWatering ? styles.domeGlow : ''}`}>

            {/* Botão Interativo: REGAR O BROTO (com estados dinâmicos) */}
            <button
              type="button"
              className={styles.waterBadge}
              onClick={handleWater}
              title="Clique para regar e fazer florescer"
              aria-label="Regar o broto"
            >
              <span>{getBadgeText()}</span>
            </button>

            {/* Chuva de Gotas d'Água SVG ao Regar */}
            {isWatering && (
              <div className={styles.dropStream}>
                {/* Gota 1: Principal */}
                <div className={styles.dropTrack1}>
                  <svg viewBox="0 0 24 32" width="22" height="28" fill="none">
                    <path
                      d="M12 2 C12 2 3 14 3 20 C3 25.5 7 30 12 30 C17 30 21 25.5 21 20 C21 14 12 2 12 2 Z"
                      fill="#256B42"
                    />
                    <path
                      d="M8 18 C8 15 11 10 12 7"
                      stroke="rgba(246, 244, 238, 0.7)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Gota 2: Média em Cascata */}
                <div className={styles.dropTrack2}>
                  <svg viewBox="0 0 20 26" width="18" height="23" fill="none">
                    <path
                      d="M10 2 C10 2 2 11 2 16 C2 20.4 5.6 24 10 24 C14.4 24 18 20.4 18 16 C18 11 10 2 10 2 Z"
                      fill="#256B42"
                      opacity="0.85"
                    />
                  </svg>
                </div>

                {/* Gota 3: Menor */}
                <div className={styles.dropTrack3}>
                  <svg viewBox="0 0 16 22" width="14" height="19" fill="none">
                    <path
                      d="M8 2 C8 2 1 9 1 14 C1 17.8 4.1 21 8 21 C11.9 21 15 17.8 15 14 C15 9 8 2 8 2 Z"
                      fill="#256B42"
                      opacity="0.75"
                    />
                  </svg>
                </div>

                {/* Splash Ring ao Tocar no Broto */}
                <div className={styles.splashRing}>
                  <svg viewBox="0 0 60 60" width="56" height="56" fill="none">
                    <circle cx="30" cy="30" r="18" stroke="#256B42" strokeWidth="2.5" opacity="0.6"/>
                    <circle cx="18" cy="18" r="2.5" fill="#256B42" />
                    <circle cx="44" cy="22" r="2.5" fill="#256B42" />
                    <circle cx="32" cy="46" r="2" fill="#256B42" />
                  </svg>
                </div>
              </div>
            )}

            {/* Símbolo Central { 🌱 } com Novas Folhas e Flores Botânicas */}
            <div className={`${styles.symbolContainer} ${isEntered ? styles.entered : styles.initialLoad}`}>
              <svg viewBox="0 0 160 120" fill="none" className={styles.domeSvg}>
                <defs>
                  {/* Pétala botânica orgânica com geometria de lágrima suave */}
                  <path
                    id="germinaPetal"
                    d="M 0,0 C -3,-2 -4.2,-5.5 -3.2,-9.5 C -2,-12.2 2,-12.2 3.2,-9.5 C 4.2,-5.5 3,-2 0,0 Z"
                  />
                  {/* Pétala delicada para os botões florais */}
                  <path
                    id="germinaBudPetal"
                    d="M 0,0 C -1.8,-1.5 -2.4,-3.8 -1.6,-6.2 C -1,-7.8 1,-7.8 1.6,-6.2 C 2.4,-3.8 1.8,-1.5 0,0 Z"
                  />
                </defs>

                {/* Chave Esquerda { */}
                <path
                  className={styles.bracketLeft}
                  d="M42 22 C26 22 23 30 23 48 C23 56 16 60 8 60 C16 60 23 64 23 72 C23 90 26 98 42 98"
                  stroke="#14201A"
                  strokeWidth="8.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Grupo do Broto (Respiração Idle, Absorção e Florescimento) */}
                <g className={`${styles.sproutGroup} ${isBloomed ? styles.bloomed : ''} ${isWatering ? styles.wateringActive : (isIdle ? styles.idleBreath : '')}`}>

                  {/* Caule Principal */}
                  <path
                    className={styles.sproutStem}
                    d="M79 98 C79 78 79 58 79 40"
                    stroke="#256B42"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />

                  {/* Folha Direita Original */}
                  <path
                    className={styles.leafRight}
                    d="M79 56 C79 56 99 54 105 38 C105 25 91 30 79 43 Z"
                    fill="#256B42"
                  />

                  {/* Folha Esquerda Original */}
                  <path
                    className={styles.leafLeft}
                    d="M79 66 C79 66 61 66 55 52 C55 41 68 45 79 57 Z"
                    fill="#256B42"
                  />

                  {/* ===================================================
                      FLORESCIMENTO: EXTENSÃO, NOVAS FOLHAS E FLORES
                      =================================================== */}

                  {/* Extensão Superior do Caule */}
                  <path
                    className={styles.stemExtension}
                    d="M79 42 L79 20"
                    stroke="#256B42"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  {/* Nova Folha Superior Direita (Mais Clara / Broto Novo) */}
                  <path
                    className={styles.extraLeafRight}
                    d="M79 32 C79 32 94 30 98 19 C98 12 88 15 79 23 Z"
                    fill="#C8E86B"
                    stroke="#256B42"
                    strokeWidth="1.8"
                  />

                  {/* Nova Folha Superior Esquerda */}
                  <path
                    className={styles.extraLeafLeft}
                    d="M79 36 C79 36 65 37 60 28 C60 21 69 23 79 29 Z"
                    fill="#C8E86B"
                    stroke="#256B42"
                    strokeWidth="1.8"
                  />

                  {/* Haste Floral Lateral Esquerda */}
                  <path
                    className={styles.sideBranch}
                    d="M79 38 C72 36 65 32 60 25"
                    stroke="#256B42"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Botão Floral Lateral Esquerdo */}
                  <g transform="translate(60, 25)">
                    <g className={styles.flowerSideLeft} transform="rotate(-35)">
                      {/* Cálice / Sépalas verdes */}
                      <path d="M -2.5,0 C -3,3 3,3 2.5,0 Z" fill="#256B42" />
                      {/* Pétalas de botão nascendo */}
                      <g fill="#F6F4EE" stroke="#14201A" strokeWidth="0.75" strokeLinejoin="round">
                        <use href="#germinaBudPetal" transform="rotate(-20)" />
                        <use href="#germinaBudPetal" transform="rotate(20)" />
                        <use href="#germinaBudPetal" transform="rotate(0)" />
                      </g>
                      <circle cx="0" cy="-2.5" r="1.5" fill="#C8E86B" />
                    </g>
                  </g>

                  {/* Haste Floral Lateral Direita */}
                  <path
                    className={styles.sideBranch}
                    d="M79 34 C86 32 92 27 96 20"
                    stroke="#256B42"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Botão Floral Lateral Direito */}
                  <g transform="translate(96, 20)">
                    <g className={styles.flowerSideRight} transform="rotate(35)">
                      {/* Cálice / Sépalas verdes */}
                      <path d="M -2.5,0 C -3,3 3,3 2.5,0 Z" fill="#256B42" />
                      {/* Pétalas de botão nascendo */}
                      <g fill="#F6F4EE" stroke="#14201A" strokeWidth="0.75" strokeLinejoin="round">
                        <use href="#germinaBudPetal" transform="rotate(-20)" />
                        <use href="#germinaBudPetal" transform="rotate(20)" />
                        <use href="#germinaBudPetal" transform="rotate(0)" />
                      </g>
                      <circle cx="0" cy="-2.5" r="1.5" fill="#C8E86B" />
                    </g>
                  </g>

                  {/* Flor Principal Desabrochando no Topo */}
                  <g transform="translate(79, 17)">
                    <g className={styles.flowerTop}>
                      {/* Cálice de apoio */}
                      <circle cx="0" cy="0" r="4.2" fill="#256B42" />

                      {/* 5 Pétalas Botânicas Orgânicas */}
                      <g fill="#F6F4EE" stroke="#14201A" strokeWidth="0.85" strokeLinejoin="round">
                        <use href="#germinaPetal" transform="rotate(0)" />
                        <use href="#germinaPetal" transform="rotate(72)" />
                        <use href="#germinaPetal" transform="rotate(144)" />
                        <use href="#germinaPetal" transform="rotate(216)" />
                        <use href="#germinaPetal" transform="rotate(288)" />
                      </g>

                      {/* Miolo Central Dourado / Semente (#C8E86B) */}
                      <circle cx="0" cy="0" r="3.6" fill="#C8E86B" stroke="#14201A" strokeWidth="0.85" />
                      <circle cx="0" cy="0" r="1.3" fill="#14201A" />
                    </g>
                  </g>

                  {/* Partículas de Pólen e Brilhos Cintilantes */}
                  <g className={styles.pollenSparkles}>
                    <circle cx="68" cy="8" r="1.3" fill="#14201A" />
                    <circle cx="90" cy="7" r="1.6" fill="#C8E86B" stroke="#14201A" strokeWidth="0.5" />
                    <circle cx="106" cy="14" r="1.2" fill="#256B42" />
                    <circle cx="52" cy="15" r="1.2" fill="#256B42" />
                  </g>
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
