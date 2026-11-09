import { useState } from 'react';
import SectionContainer from '../../../../components/SectionContainer';
import ProjectModal from '../../../../components/ProjectModal';
import { projectsData } from '../../../../data/projectsData';
import styles from './styles.module.css';

export default function FeaturedWorks() {
  const [activeStage, setActiveStage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stagesInfo = {
    1: 'ETAPA 01 · SEMENTE / DISCOVERY & WIREFRAMES',
    2: 'ETAPA 02 · BROTO / DESIGN SYSTEM & PROTÓTIPO',
    3: 'ETAPA 03 · CRESCIMENTO / CÓDIGO FULL STACK',
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
                      <div className={styles.badgeGroup}>
                        <button
                          type="button"
                          className={`${styles.stageButton} ${styles.stageBtn1}`}
                          onClick={() => setActiveStage(1)}
                          title="Etapa 1: Semente"
                          aria-label="Etapa 1: Semente"
                        >
                          {'{🌱}'}
                        </button>
                        <button
                          type="button"
                          className={`${styles.stageButton} ${styles.stageBtn2}`}
                          onClick={() => setActiveStage(2)}
                          title="Etapa 2: Broto"
                          aria-label="Etapa 2: Broto"
                        >
                          &gt;_
                        </button>
                        <button
                          type="button"
                          className={`${styles.stageButton} ${styles.stageBtn3}`}
                          onClick={() => setActiveStage(3)}
                          title="Etapa 3: Crescimento"
                          aria-label="Etapa 3: Crescimento"
                        >
                          🌿
                        </button>
                      </div>
                      <div className={styles.stageLabel}>
                        {stagesInfo[activeStage]}
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
