import { useState } from 'react';
import SectionContainer from '../../../../components/SectionContainer';
import { postsData } from '../../../../data/postsData';
import { playMotionLineSound } from '../../../../utils/soundEffects';
import styles from './styles.module.css';

export default function DiarioDeBordo() {
  const [navigatingId, setNavigatingId] = useState(null);

  const getTagClass = (variant) => {
    switch (variant) {
      case 'processo': return styles.tagProcesso;
      case 'codigo': return styles.tagCodigo;
      case 'design': return styles.tagDesign;
      case 'novidades': default: return styles.tagNovidades;
    }
  };

  const handleArticleClick = (postId) => {
    setNavigatingId(postId);
    playMotionLineSound();
    setTimeout(() => {
      window.location.hash = `#/artigo/${postId}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 280);
  };

  const delayClasses = ['delay1', 'delay2', 'delay3', 'delay4'];

  return (
    <section id="diario" className={styles.section}>
      <SectionContainer>
        {/* Cabeçalho com Revelação Suave */}
        <div className={`${styles.headerRow} reveal`}>
          <span className={styles.sectionTitle}>DIÁRIO DE BORDO</span>
          <a href="#diario" className={styles.viewAllLink}>
            VER TODOS <span>→</span>
          </a>
        </div>

        {/* Lista Vertical com Revelação em Cascata e Motion Line */}
        <div className={styles.postsList}>
          {postsData.map((post, index) => (
            <article 
              key={post.id} 
              className={`${styles.postItem} ${navigatingId === post.id ? styles.postNavigating : ''} reveal ${delayClasses[index] || ''}`}
              onClick={() => handleArticleClick(post.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleArticleClick(post.id)}
              aria-label={`Ler artigo: ${post.title}`}
            >
              <div className={styles.postMetaTop}>
                <span className={`${styles.tag} ${getTagClass(post.tagVariant)}`}>
                  {post.tag}
                </span>
                <span className={styles.readTimeBadge}>
                  {post.readTime}
                </span>
              </div>

              <div className={styles.postTitleRow}>
                <h3 className={styles.postTitle}>
                  {post.title}
                </h3>
                <span className={styles.arrowIcon}>↗</span>
              </div>

              <div className={styles.postFooterMeta}>
                <span className={styles.postDate}>{post.date}</span>
                <span className={styles.postAuthor}>// {post.author}</span>
              </div>

              {/* Motion Line de Adentrar no Artigo */}
              <div className={styles.motionLineTrack}>
                <div className={`${styles.motionLine} ${navigatingId === post.id ? styles.motionLineActive : ''}`} />
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
