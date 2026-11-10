import { useEffect } from 'react';
import SectionContainer from '../../components/SectionContainer';
import { postsData } from '../../data/postsData';
import styles from './styles.module.css';

export default function ArticleDetail({ articleId }) {
  // Localiza o artigo pelo ID ou utiliza o primeiro por padrão
  const articleIndex = postsData.findIndex((p) => p.id === articleId);
  const article = articleIndex !== -1 ? postsData[articleIndex] : postsData[0];

  const prevArticle = articleIndex > 0 ? postsData[articleIndex - 1] : postsData[postsData.length - 1];
  const nextArticle = articleIndex < postsData.length - 1 ? postsData[articleIndex + 1] : postsData[0];

  // Rola ao topo suavemente ao entrar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [articleId]);

  const handleBackToDiary = () => {
    window.location.hash = '#diario';
  };

  const handleNavigateToArticle = (id) => {
    window.location.hash = `#/artigo/${id}`;
  };

  const getTagClass = (variant) => {
    switch (variant) {
      case 'processo': return styles.tagProcesso;
      case 'codigo': return styles.tagCodigo;
      case 'design': return styles.tagDesign;
      case 'novidades': default: return styles.tagNovidades;
    }
  };

  return (
    <article className={styles.articlePage}>
      {/* Motion Line de Adentrar no Topo da Página */}
      <div className={styles.entranceMotionLineTrack}>
        <div className={styles.entranceMotionLine} />
      </div>

      <SectionContainer>
        {/* Barra de Navegação Superior / Breadcrumb */}
        <nav className={styles.topNav} aria-label="Navegação do Artigo">
          <button
            type="button"
            onClick={handleBackToDiary}
            className={styles.backButton}
          >
            ← VOLTAR AO DIÁRIO DE BORDO
          </button>

          <div className={styles.navMetaRight}>
            <span className={`${styles.tag} ${getTagClass(article.tagVariant)}`}>
              {article.tag}
            </span>
            <span className={styles.readTimeText}>{article.readTime} DE LEITURA</span>
          </div>
        </nav>

        {/* Cabeçalho do Artigo */}
        <header className={styles.header}>
          <div className={styles.metaRow}>
            <span className={styles.metaDate}>{article.date}</span>
            <span className={styles.metaSeparator}>//</span>
            <span className={styles.metaAuthor}>{article.author}</span>
          </div>

          <h1 className={styles.articleTitle}>
            {article.title}
          </h1>

          <p className={styles.articleSubtitle}>
            {article.subtitle}
          </p>
        </header>

        {/* Imagem Hero Panorâmica (Disposição Ampla) */}
        {article.heroImage && (
          <figure className={styles.heroFigure}>
            <div
              className={styles.heroMediaBox}
              style={{ backgroundColor: article.heroImage.accentColor }}
            >
              <div className={styles.mediaOverlayBadge}>
                {article.heroImage.badge}
              </div>
              <div className={styles.generativeIllustration}>
                <svg viewBox="0 0 600 240" fill="none" className={styles.blueprintSvg}>
                  <line x1="40" y1="120" x2="560" y2="120" stroke="#14201A" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.4" />
                  <circle cx="120" cy="120" r="38" stroke="#14201A" strokeWidth="2" fill="rgba(246, 244, 238, 0.4)" />
                  <circle cx="300" cy="120" r="54" stroke="#14201A" strokeWidth="2.5" fill="rgba(200, 232, 107, 0.35)" />
                  <circle cx="480" cy="120" r="38" stroke="#14201A" strokeWidth="2" fill="rgba(246, 244, 238, 0.4)" />
                  <path d="M158 120 L246 120" stroke="#14201A" strokeWidth="2" markerEnd="url(#arrow)" />
                  <path d="M354 120 L442 120" stroke="#14201A" strokeWidth="2" />
                  <text x="120" y="125" textAnchor="middle" fill="#14201A" fontFamily="monospace" fontSize="12">01_SEED</text>
                  <text x="300" y="125" textAnchor="middle" fill="#14201A" fontFamily="monospace" fontSize="13" fontWeight="bold">02_GROWTH</text>
                  <text x="480" y="125" textAnchor="middle" fill="#14201A" fontFamily="monospace" fontSize="12">03_FRUIT</text>
                </svg>
              </div>
              <span className={styles.mediaTitleLabel}>[{article.heroImage.title}]</span>
            </div>
            <figcaption className={styles.figureCaption}>
              {article.heroImage.caption}
            </figcaption>
          </figure>
        )}

        {/* Corpo Editorial Focado em Texto com Imagens em Múltiplas Disposições */}
        <div className={styles.articleBody}>
          {article.contentSections.map((section, sIndex) => (
            <section key={sIndex} className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>
                {section.heading}
              </h2>

              <div className={styles.paragraphsCol}>
                {section.paragraphs.map((p, pIndex) => (
                  <p
                    key={pIndex}
                    className={`${styles.paragraph} ${sIndex === 0 && pIndex === 0 ? styles.dropCapParagraph : ''}`}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Citação em Destaque (Pull Quote) */}
              {section.quote && (
                <blockquote className={styles.pullQuote}>
                  <p className={styles.quoteText}>“{section.quote}”</p>
                  <cite className={styles.quoteCite}>// NOTA DE ENGENHARIA & DESIGN</cite>
                </blockquote>
              )}

              {/* Disposição 1: Diptych (2 Colunas Lado a Lado) */}
              {section.mediaLayout === 'diptych' && section.mediaItems && (
                <div className={styles.diptychGrid}>
                  {section.mediaItems.map((item, iIndex) => (
                    <figure key={iIndex} className={styles.subFigure}>
                      <div
                        className={styles.diptychMediaBox}
                        style={{ backgroundColor: item.accentColor }}
                      >
                        <span className={styles.subMediaBadge}>{item.badge}</span>
                        <div className={styles.subIllustration}>
                          <span className={styles.subItemTitle}>[{item.title}]</span>
                        </div>
                      </div>
                      <figcaption className={styles.subCaption}>{item.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {/* Disposição 2: Offset Right (Imagem Retrato Lateral Flutuante com Texto) */}
              {section.mediaLayout === 'offset-right' && section.mediaItems && (
                <div className={styles.offsetRightContainer}>
                  {section.mediaItems.map((item, iIndex) => (
                    <figure key={iIndex} className={styles.offsetFigure}>
                      <div
                        className={styles.offsetMediaBox}
                        style={{ backgroundColor: item.accentColor }}
                      >
                        <span className={styles.offsetBadge}>{item.badge}</span>
                        <div className={styles.offsetInnerContent}>
                          <span className={styles.offsetTitle}>[{item.title}]</span>
                        </div>
                      </div>
                      <figcaption className={styles.subCaption}>{item.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {/* Disposição 3: Triptych (3 Passos Sequenciais em Coluna Tripla) */}
              {section.mediaLayout === 'triptych' && section.mediaItems && (
                <div className={styles.triptychGrid}>
                  {section.mediaItems.map((item, iIndex) => (
                    <figure key={iIndex} className={styles.triptychFigure}>
                      <div
                        className={styles.triptychMediaBox}
                        style={{ backgroundColor: item.accentColor }}
                      >
                        <span className={styles.triptychBadge}>{item.badge}</span>
                        <span className={styles.triptychTitle}>[{item.title}]</span>
                      </div>
                      <figcaption className={styles.subCaption}>{item.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {/* Disposição 4: Technical Box (Inspeção Técnica / Terminal de Métricas) */}
              {section.mediaLayout === 'technical-box' && section.mediaItems && (
                <div className={styles.technicalBoxContainer}>
                  {section.mediaItems.map((item, iIndex) => (
                    <div key={iIndex} className={styles.terminalBox}>
                      <div className={styles.terminalHeader}>
                        <div className={styles.terminalDots}>
                          <span className={styles.dot} />
                          <span className={styles.dot} />
                          <span className={styles.dot} />
                        </div>
                        <span className={styles.terminalTitle}>{item.badge}</span>
                        <span className={styles.terminalStatus}>[ONLINE · 60 FPS]</span>
                      </div>
                      <div className={styles.terminalBody}>
                        <div className={styles.terminalCodeLine}>
                          <span className={styles.prompt}>germina@core:~$</span>
                          <span className={styles.command}>run --inspect --metrics "{item.title}"</span>
                        </div>
                        <div className={styles.terminalOutput}>
                          &gt; {item.caption}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* ==================================================================
            FINAL DA NAVEGAÇÃO: LINK OFICIAL AO MEIO DE COMUNICAÇÃO / DOCUMENTO
            ================================================================== */}
        <footer className={styles.articleFooter}>
          <div className={styles.footerDivider} />

          {/* Cartão de Acesso ao Meio de Comunicação Associado */}
          {article.externalLink && (
            <div className={styles.externalMediaCard}>
              <div className={styles.externalMediaMeta}>
                <span className={styles.externalMediaBadge}>DOCUMENTAÇÃO ASSOCIADA</span>
                <span className={styles.externalMediaSource}>// {article.externalLink.sourceType}</span>
              </div>

              <div className={styles.externalMediaActionRow}>
                <div className={styles.externalMediaInfo}>
                  <h3 className={styles.externalMediaTitle}>
                    {article.externalLink.label}
                  </h3>
                  <p className={styles.externalMediaDesc}>
                    Acesse o documento original, repositório de testes ou publicação oficial deste estudo de caso.
                  </p>
                </div>

                <a
                  href={article.externalLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.externalMediaButton}
                  aria-label={`Acessar link externo: ${article.externalLink.label}`}
                >
                  <span>ACESSAR MATÉRIA COMPLETA</span>
                  <span className={styles.extIcon}>↗</span>
                </a>
              </div>
            </div>
          )}

          {/* Navegação Entre Artigos (Anterior / Próximo) */}
          <div className={styles.paginationRow}>
            <button
              type="button"
              onClick={() => handleNavigateToArticle(prevArticle.id)}
              className={styles.paginationButton}
            >
              <span className={styles.paginationLabel}>← ARTIGO ANTERIOR</span>
              <span className={styles.paginationTitle}>{prevArticle.title}</span>
            </button>

            <button
              type="button"
              onClick={() => handleNavigateToArticle(nextArticle.id)}
              className={`${styles.paginationButton} ${styles.paginationNext}`}
            >
              <span className={styles.paginationLabel}>PRÓXIMO ARTIGO →</span>
              <span className={styles.paginationTitle}>{nextArticle.title}</span>
            </button>
          </div>

          <div className={styles.bottomActions}>
            <button
              type="button"
              onClick={handleBackToDiary}
              className={styles.returnButton}
            >
              VOLTAR AO DIÁRIO DE BORDO
            </button>
          </div>
        </footer>
      </SectionContainer>
    </article>
  );
}
