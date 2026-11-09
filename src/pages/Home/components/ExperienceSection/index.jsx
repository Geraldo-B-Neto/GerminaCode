import SectionContainer from '../../../../components/SectionContainer';
import styles from './styles.module.css';

export default function ExperienceSection() {
  return (
    <section className={styles.section}>
      <SectionContainer>
        {/* Título Principal com Efeito Text Split (Desliza suavemente de dentro da máscara) */}
        <h2 className={`${styles.heading} splitText reveal`}>
          <span className="splitLine">
            <span className="splitLineInner">Criamos experiências digitais que</span>
          </span>
          <span className="splitLine">
            <span className="splitLineInner">crescem com o seu negócio e funcionam</span>
          </span>
          <span className="splitLine">
            <span className="splitLineInner">de verdade.</span>
          </span>
        </h2>

        {/* Grid de Conteúdo */}
        <div className={styles.contentGrid}>
          {/* Coluna da Esquerda */}
          <div className={`${styles.leftCol} reveal delay1`}>
            <p className={styles.description}>
              A Germina Code junta design, front-end e engenharia para construir sites, aplicações web e sistemas desktop que as pessoas usam com confiança.
            </p>

            <a href="#metodologia" className={styles.aboutLink}>
              SOBRE A GERMINA <span>→</span>
            </a>
          </div>

          {/* Coluna da Direita: Card com Escala Suave */}
          <div className={`${styles.mediaBox} revealScale delay2`}>
            <span className={styles.mediaLabel}>[VÍDEO OU IMAGEM]</span>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
