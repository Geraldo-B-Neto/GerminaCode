import SectionContainer from '../../../../components/SectionContainer';
import { postsData } from '../../../../data/postsData';
import styles from './styles.module.css';

export default function DiarioDeBordo() {
  const getTagClass = (variant) => {
    switch (variant) {
      case 'processo': return styles.tagProcesso;
      case 'codigo': return styles.tagCodigo;
      case 'design': return styles.tagDesign;
      case 'novidades': default: return styles.tagNovidades;
    }
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

        {/* Lista Vertical com Revelação em Cascata */}
        <div className={styles.postsList}>
          {postsData.map((post, index) => (
            <article 
              key={post.id} 
              className={`${styles.postItem} reveal ${delayClasses[index] || ''}`}
            >
              <span className={`${styles.tag} ${getTagClass(post.tagVariant)}`}>
                {post.tag}
              </span>
              <h3 className={styles.postTitle}>
                {post.title}
              </h3>
              <span className={styles.postDate}>
                {post.date}
              </span>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
