import SectionContainer from '../../../../components/SectionContainer';
import devsImage from '../../../../assets/devs.png';
import styles from './styles.module.css';

export default function CtaSection() {
  return (
    <section id="contato" className={styles.section}>
      {/* 1. Anéis Concêntricos de Fundo (Marca d'água sutil) */}
      <div className={styles.growthRingsBackground} aria-hidden="true">
        <svg viewBox="0 0 500 500" fill="none" className={styles.ringsSvg}>
          <circle cx="250" cy="250" r="230" stroke="#C8E86B" strokeWidth="1" strokeDasharray="6 8" opacity="0.1" />
          <circle cx="250" cy="250" r="170" stroke="#C8E86B" strokeWidth="1" opacity="0.07" />
          <circle cx="250" cy="250" r="110" stroke="#C8E86B" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.12" />
        </svg>
      </div>

      {/* 2. Grandes Ramos e Folhagens Botânicas Preenchendo o Espaço */}
      <div className={`${styles.botanicalFoliage} reveal`} aria-hidden="true">
        <svg viewBox="0 0 650 500" fill="none" className={styles.foliageSvg}>
          {/* Haste Principal Arqueada que nasce atrás dos devs */}
          <path
            d="M320 490 C 350 340, 420 220, 560 140 C 600 115, 630 100, 650 90"
            stroke="#256B42"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="6 6"
            opacity="0.4"
          />
          {/* Haste Secundária que avança para o centro do espaço */}
          <path
            d="M400 270 C 360 200, 310 170, 230 150"
            stroke="#256B42"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.3"
          />

          {/* Folha 1 Superior Direita */}
          <path
            d="M560 140 C 560 140, 610 120, 625 70 C 570 75, 545 105, 560 140 Z"
            fill="#C8E86B"
            fillOpacity="0.22"
            stroke="#C8E86B"
            strokeWidth="1.5"
          />
          {/* Folha 2 Média */}
          <path
            d="M470 200 C 470 200, 520 180, 525 130 C 470 140, 455 170, 470 200 Z"
            fill="#256B42"
            fillOpacity="0.32"
            stroke="#256B42"
            strokeWidth="1.5"
          />
          {/* Folha 3 Esquerda */}
          <path
            d="M420 250 C 420 250, 380 230, 360 180 C 400 190, 420 220, 420 250 Z"
            fill="#C8E86B"
            fillOpacity="0.18"
            stroke="#C8E86B"
            strokeWidth="1.5"
          />
          {/* Folha 4 Central Flutuante */}
          <path
            d="M230 150 C 230 150, 200 120, 170 125 C 180 155, 210 165, 230 150 Z"
            fill="#C8E86B"
            fillOpacity="0.2"
            stroke="#C8E86B"
            strokeWidth="1.2"
          />
          {/* Broto Delicado {🌱} no ápice da haste */}
          <g transform="translate(605, 75) scale(0.8)">
            <path d="M0 25 L0 8" stroke="#C8E86B" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M0 14 C 8 13, 14 7, 14 2 C 7 3, 3 8, 0 14 Z" fill="#C8E86B" opacity="0.85" />
            <path d="M0 18 C -7 17, -12 12, -12 7 C -5 8, -2 12, 0 18 Z" fill="#256B42" opacity="0.85" />
          </g>
        </svg>
      </div>

      {/* 3. Folhas Flutuantes Avulsas em Deriva */}
      <div className={styles.floatingLeavesCluster} aria-hidden="true">
        <span className={`${styles.driftLeaf} ${styles.driftLeaf1}`}>🍃</span>
        <span className={`${styles.driftLeaf} ${styles.driftLeaf2}`}>🌱</span>
        <span className={`${styles.driftLeaf} ${styles.driftLeaf3}`}>🌿</span>
        <span className={`${styles.driftLeaf} ${styles.driftLeaf4}`}>🍃</span>
      </div>

      {/* 4. Esporos e Partículas Luminosas Flutuantes */}
      <div className={styles.sporesCluster} aria-hidden="true">
        <span className={`${styles.spore} ${styles.spore1}`} />
        <span className={`${styles.spore} ${styles.spore2}`} />
        <span className={`${styles.spore} ${styles.spore3}`} />
        <span className={`${styles.spore} ${styles.spore4}`} />
        <span className={`${styles.spore} ${styles.spore5}`} />
        <span className={`${styles.spore} ${styles.spore6}`} />
        <span className={`${styles.spore} ${styles.spore7}`} />
      </div>

      {/* 5. Painel Técnico / Telemetria Editorial Superior Direito */}
      <div className={`${styles.telemetryCard} reveal delay1`}>
        <div className={styles.telemetryHeader}>
          <span className={styles.livePulseDot} />
          <span className={styles.telemetryTag}>GERMINA // DISPONIBILIDADE</span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>STATUS :</span>
          <span className={styles.telemetryValActive}>ACEITANDO NOVOS PROJETOS</span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>EQUIPE :</span>
          <span className={styles.telemetryVal}>DEV & DESIGN INTEGRADOS</span>
        </div>
        <div className={styles.telemetryRow}>
          <span className={styles.telemetryKey}>SLOTS :</span>
          <span className={styles.telemetryVal}>Q4 · 2026 / 2027</span>
        </div>
      </div>

      <SectionContainer>
        <div className={styles.contentWrapper}>
          {/* Título com Efeito Text Split Linha por Linha */}
          <h2 className={`${styles.title} splitText reveal`}>
            <span className="splitLine">
              <span className="splitLineInner">FAÇA PARCERIA COM UM</span>
            </span>
            <span className="splitLine">
              <span className="splitLineInner">ESTÚDIO TÃO AMBICIOSO</span>
            </span>
            <span className="splitLine">
              <span className="splitLineInner">QUANTO VOCÊ.</span>
            </span>
          </h2>

          {/* Botão de Contato Técnico */}
          <div className={`${styles.actionsRow} reveal delay1`}>
            <a
              href="mailto:contato@germinacode.com.br"
              className={styles.contactButton}
              aria-label="Entrar em contato com a Germina Code"
            >
              CONTATO
            </a>
          </div>
        </div>

        {/* Imagem dos Devs Surgindo da Linha */}
        <div className={`${styles.devsContainer} reveal delay2`}>
          <img
            src={devsImage}
            alt="Devs da Germina Code saindo da linha"
            className={styles.devsImage}
            loading="eager"
          />
        </div>
      </SectionContainer>
    </section>
  );
}
