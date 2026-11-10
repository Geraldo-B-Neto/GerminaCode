import { useState } from 'react';
import SectionContainer from '../SectionContainer';
import Button from '../Button';
import { isMuted, toggleAudioMute, playSproutPopSound } from '../../utils/soundEffects';
import styles from './styles.module.css';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [muted, setMuted] = useState(isMuted());

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  const handleToggleSound = () => {
    const nextMuted = toggleAudioMute();
    setMuted(nextMuted);
    if (!nextMuted) {
      playSproutPopSound();
    }
  };

  return (
    <header className={styles.headerWrapper}>
      <SectionContainer>
        <div className={styles.topBar}>
          {/* Logotipo fiel: {🌱} germinacode */}
          <a href="#" className={styles.logoLink} aria-label="Germina Code - Página Inicial">
            <svg viewBox="0 0 200 42" fill="none" className={styles.logoSvg}>
              {/* Chave Esquerda { */}
              <path d="M12 8 C6 8 5 12 5 17 C5 20 2 21 0 21 C2 21 5 22 5 25 C5 30 6 34 12 34"
                    stroke="#14201A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>

              {/* Broto Central 🌱 */}
              <path d="M21 34 C21 26 21 20 21 14" stroke="#256B42" strokeWidth="2.4" strokeLinecap="round"/>
              <path d="M21 20 C21 20 27.5 19 29 13.5 C29 9 23.5 11 21 15 Z" fill="#256B42"/>
              <path d="M21 23 C21 23 15.5 23 14 18.5 C14 15 18 16.5 21 19 Z" fill="#256B42"/>

              {/* Chave Direita } */}
              <path d="M30 8 C36 8 37 12 37 17 C37 20 40 21 42 21 C40 21 37 22 37 25 C37 30 36 34 30 34"
                    stroke="#14201A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>

              {/* Texto: germinacode em Space Grotesk */}
              <text x="52" y="27" fill="#14201A" fontFamily="'Space Grotesk', sans-serif" fontSize="22" fontWeight="500" letterSpacing="-0.03em">
                germinacode
              </text>
            </svg>
          </a>

          {/* Controles da Direita: Equalizador de Áudio & Menu Hambúrguer */}
          <div className={styles.rightControls}>
            <button
              type="button"
              className={styles.soundButton}
              onClick={handleToggleSound}
              title={muted ? "Ativar Áudio & Trilhas Ambientais" : "Mutar Efeitos Sonoros"}
              aria-label={muted ? "Ativar Som" : "Desativar Som"}
            >
              <span className={styles.soundBars} aria-hidden="true">
                <span className={`${styles.eqBar} ${styles.eqBar1} ${muted ? styles.eqBarMuted : ''}`} />
                <span className={`${styles.eqBar} ${styles.eqBar2} ${muted ? styles.eqBarMuted : ''}`} />
                <span className={`${styles.eqBar} ${styles.eqBar3} ${muted ? styles.eqBarMuted : ''}`} />
              </span>
              <span className={styles.soundText}>{muted ? 'ÁUDIO OFF' : 'ÁUDIO ON'}</span>
            </button>

            <button
              type="button"
              className={styles.menuButton}
              onClick={toggleNav}
              aria-label="Abrir Menu de Navegação"
              aria-expanded={isNavOpen}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>
        </div>
      </SectionContainer>

      {/* Drawer Overlay */}
      <div
        className={`${styles.navOverlay} ${isNavOpen ? styles.open : ''}`}
        onClick={closeNav}
        aria-hidden={!isNavOpen}
      />

      {/* Drawer Lateral */}
      <nav className={`${styles.navDrawer} ${isNavOpen ? styles.open : ''}`}>
        <div className={styles.drawerHeader}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-semente)' }}>
            GERMINA_MENU.SYS
          </span>
          <button className={styles.drawerClose} onClick={closeNav} aria-label="Fechar Menu">
            ✕
          </button>
        </div>

        <ul className={styles.navList}>
          <li>
            <a href="#hero" className={styles.navItem} onClick={closeNav}>
              <span>01. Início</span>
              <span>→</span>
            </a>
          </li>
          <li>
            <a href="#projetos" className={styles.navItem} onClick={closeNav}>
              <span>02. Trabalhos</span>
              <span>→</span>
            </a>
          </li>
          <li>
            <a href="#metodologia" className={styles.navItem} onClick={closeNav}>
              <span>03. Metodologia</span>
              <span>→</span>
            </a>
          </li>
          <li>
            <a href="#diario" className={styles.navItem} onClick={closeNav}>
              <span>04. Diário de Bordo</span>
              <span>→</span>
            </a>
          </li>
          <li>
            <a href="#contato" className={styles.navItem} onClick={closeNav}>
              <span>05. Contato</span>
              <span>→</span>
            </a>
          </li>
        </ul>

        <div className={styles.drawerFooter}>
          <p style={{ marginBottom: '1.25rem', color: 'var(--color-papel)', lineHeight: '1.5' }}>
            Pronto para transformar sua ideia em um software sustentável e escalável?
          </p>
          <Button variant="primary" as="a" href="#contato" onClick={closeNav}>
            Iniciar Projeto
          </Button>
        </div>
      </nav>
    </header>
  );
}
