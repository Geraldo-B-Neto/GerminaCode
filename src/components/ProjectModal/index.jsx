import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [currentTab, setCurrentTab] = useState(0);

  // Reseta para a primeira aba sempre que abrir um novo projeto
  useEffect(() => {
    if (isOpen) {
      setCurrentTab(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, project]);

  // Teclas de atalho: ESC para fechar, setas para navegar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextTab();
      if (e.key === 'ArrowLeft') prevTab();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentTab]);

  if (!project) return null;

  const nextTab = () => setCurrentTab((prev) => Math.min(prev + 1, 2));
  const prevTab = () => setCurrentTab((prev) => Math.max(prev - 1, 0));

  const tabs = [
    { id: 0, label: '01. VISUAL / MÍDIA' },
    { id: 1, label: '02. O PROJETO & CLIENTE' },
    { id: 2, label: '03. STACK & FEATURES' },
  ];

  return (
    <div 
      className={`${styles.backdrop} ${isOpen ? styles.open : ''}`} 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        
        {/* Cabeçalho do Modal */}
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <span className={styles.metaInfo}>
              {project.category} · {project.year}
            </span>
            <button 
              className={styles.closeButton} 
              onClick={onClose}
              aria-label="Fechar Modal"
            >
              ✕
            </button>
          </div>

          <h3 className={styles.projectTitle}>
            [{project.title}]
          </h3>

          {/* Abas de Navegação */}
          <nav className={styles.tabsNav} aria-label="Abas do Projeto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabBtn} ${currentTab === tab.id ? styles.active : ''}`}
                onClick={() => setCurrentTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Corpo do Carrossel (Renderiza a tela da aba ativa) */}
        <div className={styles.bodyContent}>
          {/* TELA 1: IMAGEM OU VÍDEO DO PROJETO */}
          {currentTab === 0 && (
            <div className={styles.mediaScreen}>
              <div 
                className={styles.mediaFrame}
                style={{ backgroundColor: project.colorScheme.background }}
              >
                <div style={{ textAlign: 'center' }}>
                  <svg viewBox="0 0 48 48" width="42" height="42" fill="none" style={{ margin: '0 auto 12px auto', opacity: 0.7 }}>
                    <rect x="4" y="6" width="40" height="36" rx="8" stroke="#14201A" strokeWidth="2.5"/>
                    <path d="M14 20 L24 28 L14 36" stroke="#14201A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="28" y1="36" x2="36" y2="36" stroke="#14201A" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span className={styles.mediaPlaceholderText}>
                    [ {project.mediaPlaceholder} ]
                  </span>
                </div>
              </div>

              <p className={styles.mediaCaption}>
                {project.caption}
              </p>
            </div>
          )}

          {/* TELA 2: TEXTO SOBRE O PROJETO & COMENTÁRIO DO CLIENTE */}
          {currentTab === 1 && (
            <div className={styles.storyScreen}>
              <div className={styles.aboutSection}>
                <span className={styles.sectionLabel}>O DESAFIO &amp; A SOLUÇÃO</span>
                <p className={styles.aboutText}>
                  {project.aboutText}
                </p>
              </div>

              {project.clientReview && (
                <div className={styles.reviewCard}>
                  <p className={styles.quoteText}>
                    "{project.clientReview.quote}"
                  </p>
                  <div className={styles.authorMeta}>
                    <span className={styles.authorName}>{project.clientReview.author}</span>
                    <span className={styles.authorRole}>{project.clientReview.role}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TELA 3: TECNOLOGIAS UTILIZADAS & FUNCIONALIDADES */}
          {currentTab === 2 && (
            <div className={styles.techScreen}>
              <div className={styles.aboutSection}>
                <span className={styles.sectionLabel}>TECNOLOGIAS &amp; FERRAMENTAS</span>
                <div className={styles.stackGrid}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.aboutSection}>
                <span className={styles.sectionLabel}>FUNCIONALIDADES ENTREGUES</span>
                <ul className={styles.featuresList}>
                  {project.features.map((feat, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.featureCheck}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer Fixo Separado por uma Linha */}
        <div className={styles.footer}>
          {/* Controles de Navegação do Carrossel */}
          <div className={styles.carouselControls}>
            <button 
              className={styles.navArrowBtn} 
              onClick={prevTab}
              disabled={currentTab === 0}
            >
              ← Anterior
            </button>

            <div className={styles.dotsRow}>
              {[0, 1, 2].map((idx) => (
                <span 
                  key={idx} 
                  className={`${styles.dot} ${currentTab === idx ? styles.active : ''}`}
                  onClick={() => setCurrentTab(idx)}
                />
              ))}
            </div>

            <button 
              className={styles.navArrowBtn} 
              onClick={nextTab}
              disabled={currentTab === 2}
            >
              Próximo →
            </button>
          </div>

          {/* Botão Ver Projeto */}
          <a 
            href={project.projectUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.actionBtn}
          >
            <span>VER PROJETO</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}

