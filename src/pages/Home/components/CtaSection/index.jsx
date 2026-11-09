import SectionContainer from '../../../../components/SectionContainer';
import styles from './styles.module.css';

export default function CtaSection() {
  return (
    <section id="contato" className={styles.section}>
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
      </SectionContainer>
    </section>
  );
}
