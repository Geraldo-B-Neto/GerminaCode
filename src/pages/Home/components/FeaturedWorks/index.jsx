import { useState } from 'react';
import SectionContainer from '../../../../components/SectionContainer';
import ProjectModal from '../../../../components/ProjectModal';
import { projectsData } from '../../../../data/projectsData';
import { playSproutPopSound, playTerminalGlitchSound, playHarvestSound } from '../../../../utils/soundEffects';
import styles from './styles.module.css';

export default function FeaturedWorks() {
  const [activeTile, setActiveTile] = useState(null);
  const [anim1Key, setAnim1Key] = useState(0);
  const [anim2Key, setAnim2Key] = useState(0);
  const [anim3Key, setAnim3Key] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTileClick = (index) => {
    setActiveTile(index);
    if (index === 1) {
      setAnim1Key(k => k + 1);
      playSproutPopSound();
    }
    if (index === 2) {
      setAnim2Key(k => k + 1);
      playTerminalGlitchSound();
    }
    if (index === 3) {
      setAnim3Key(k => k + 1);
      playHarvestSound();
    }
  };

  const project1 = projectsData[0];
  const project2 = projectsData[1];
  const project3 = projectsData[2];

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projetos" className={styles.section}>
      <SectionContainer>
        {/* Título Principal com Revelação Suave */}
        <div className={`${styles.headingWrapper} reveal`}>
          <h2 className={styles.sectionTitle}>
            Trabalhos em destaque onde o<br />
            código resolve o problema e o<br />
            projeto cresce.
          </h2>
        </div>

        <div className={styles.worksGrid}>
          {/* Linha Superior: Projeto 01 (delay1) e Projeto 02 (delay2) */}
          <div className={styles.rowTop}>
              <article
                className={`${styles.projectItem} reveal delay1`}
                onClick={() => handleOpenProject(project1)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleOpenProject(project1)}
                aria-label={`Abrir detalhes do ${project1.title}`}
              >
                <div className={`${styles.mediaBox} ${styles.card01}`}>
                  <span className={styles.mediaLabel}>[IMAGEM DO PROJETO]</span>
                </div>
                <h3 className={styles.projectTitle}>[{project1.title}]</h3>
              </article>

                <article
                  className={`${styles.projectItem} reveal delay2`}
                  onClick={() => handleOpenProject(project2)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleOpenProject(project2)}
                  aria-label={`Abrir detalhes do ${project2.title}`}
                >
                  <div className={`${styles.mediaBox} ${styles.card02}`}>
                    <span className={styles.mediaLabel}>[IMAGEM DO PROJETO]</span>
                  </div>
                  <h3 className={styles.projectTitle}>[{project2.title}]</h3>
                </article>
              </div>

              {/* Linha Inferior: Projeto 03 e Bloco de Controle */}
              <div className={styles.rowBottom}>
                  <article
                    className={`${styles.projectItem} reveal delay1`}
                    onClick={() => handleOpenProject(project3)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleOpenProject(project3)}
                    aria-label={`Abrir detalhes do ${project3.title}`}
                  >
                    <div className={`${styles.mediaBox} ${styles.card03}`}>
                      <span className={styles.mediaLabel}>[IMAGEM DO PROJETO]</span>
                    </div>
                    <h3 className={styles.projectTitle}>[{project3.title}]</h3>
                  </article>

                  <div className={styles.stageControlCol}>
                    <div className={`${styles.interactiveBox} reveal delay2`}>
                      {/* Bloco 1: {🌱} - Animação Botânica de Broto e Expansão Orgânica */}
                      <div className={styles.tileWrapper}>
                        <div
                          className={`${styles.interactiveTile} ${styles.tile01} ${activeTile === 1 ? styles.tileActive : ''} ${anim1Key > 0 ? styles.tileBounce1 : ''}`}
                          key={`tile1-${anim1Key}`}
                          onClick={() => handleTileClick(1)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && handleTileClick(1)}
                          aria-label="Bloco interativo 1: Broto Orgânico"
                          title="Clique para florescer {🌱}"
                        >
                          <span className={styles.tileIcon}>{'{🌱}'}</span>
                        </div>

                        {/* Efeitos e Partículas Botânicas ao Clicar */}
                        {anim1Key > 0 && (
                          <div className={styles.sproutBurstContainer} key={`burst1-${anim1Key}`}>
                            <span className={`${styles.sproutLeaf} ${styles.leafNW}`}>🌱</span>
                            <span className={`${styles.sproutLeaf} ${styles.leafNE}`}>🌱</span>
                            <span className={`${styles.sproutLeaf} ${styles.leafSW}`}>🍃</span>
                            <span className={`${styles.sproutLeaf} ${styles.leafSE}`}>🍃</span>
                            <span className={styles.sproutWave} />
                          </div>
                        )}
                      </div>

                      {/* Bloco 2: >_ - Animação Cyber-Terminal Scanline & Matrix Glitch */}
                      <div className={styles.tileWrapper}>
                        <div
                          className={`${styles.interactiveTile} ${styles.tile02} ${activeTile === 2 ? styles.tileActive : ''} ${anim2Key > 0 ? styles.tileGlitch2 : ''}`}
                          key={`tile2-${anim2Key}`}
                          onClick={() => handleTileClick(2)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && handleTileClick(2)}
                          aria-label="Bloco interativo 2: Terminal Glitch"
                          title="Clique para executar o terminal >_"
                        >
                          <span className={styles.tileIcon}>&gt;_</span>
                          {anim2Key > 0 && <span className={styles.terminalScanline} />}
                        </div>

                        {/* Partículas de Código Terminal ao Clicar */}
                        {anim2Key > 0 && (
                          <div className={styles.glitchBurstContainer} key={`burst2-${anim2Key}`}>
                            <span className={`${styles.codeBit} ${styles.bit1}`}>01</span>
                            <span className={`${styles.codeBit} ${styles.bit2}`}>&lt;/&gt;</span>
                            <span className={`${styles.codeBit} ${styles.bit3}`}>EXEC</span>
                            <span className={`${styles.codeBit} ${styles.bit4}`}>_</span>
                          </div>
                        )}
                      </div>

                      {/* Bloco 3: 🌿 - Animação de Colheita / Giro 360° e Onda de Choque */}
                      <div className={styles.tileWrapper}>
                        <div
                          className={`${styles.interactiveTile} ${styles.tile03} ${activeTile === 3 ? styles.tileActive : ''}`}
                          key={`tile3-${anim3Key}`}
                          onClick={() => handleTileClick(3)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && handleTileClick(3)}
                          aria-label="Bloco interativo 3: Giro de Colheita"
                          title="Clique para girar a colheita 🌿"
                        >
                          <span className={`${styles.tileIcon} ${anim3Key > 0 ? styles.leafSpin360 : ''}`}>
                            🌿
                          </span>
                        </div>

                        {/* Ondas e Brilhos de Colheita ao Clicar */}
                        {anim3Key > 0 && (
                          <div className={styles.harvestWaveContainer} key={`burst3-${anim3Key}`}>
                            <span className={styles.harvestRing1} />
                            <span className={styles.harvestRing2} />
                            <span className={`${styles.pollenSpark} ${styles.spark1}`}>✨</span>
                            <span className={`${styles.pollenSpark} ${styles.spark2}`}>✦</span>
                            <span className={`${styles.pollenSpark} ${styles.spark3}`}>✨</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </SectionContainer>

      {/* Modal Interativo com Carrossel de 3 Abas */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
