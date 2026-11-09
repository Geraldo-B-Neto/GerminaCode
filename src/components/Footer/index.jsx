import SectionContainer from '../SectionContainer';
import styles from './styles.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <SectionContainer>
        <div className={`${styles.grid} reveal`}>
          {/* Coluna 1: Marca & Filosofia */}
          <div className={styles.brandCol}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
                <rect width="32" height="32" rx="8" fill="#256B42"/>
                <path d="M10 9 C7.5 9 7 11 7 13.5 C7 15 6 16 5 16 C6 16 7 17 7 18.5 C7 21 7.5 23 10 23" 
                      stroke="#F6F4EE" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M16 23 C16 19 16 15 16 12" stroke="#C8E86B" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M16 15 C16 15 19.5 14 20.5 11 C20.5 8.5 17.5 9.5 16 12 Z" fill="#C8E86B"/>
                <path d="M16 17 C16 17 13 17 12 14.5 C12 12.5 14.5 13.5 16 15 Z" fill="#F6F4EE"/>
                <path d="M22 9 C24.5 9 25 11 25 13.5 C25 15 26 16 27 16 C26 16 25 17 25 18.5 C25 21 24.5 23 22 23" 
                      stroke="#F6F4EE" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: '1.25rem' }}>
                germina<span style={{ color: 'var(--color-semente)' }}>code</span>
              </span>
            </div>
            <p className={styles.brandDesc}>
              O estúdio de código que transforma ideias em softwares vivos, sustentáveis e de alta performance.
            </p>
            <div className={styles.terminalBadge}>
              <span>$</span>
              <span>npm run germina --seed</span>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <div className={styles.columnTitle}>Navegação</div>
            <ul className={styles.linkList}>
              <li><a href="#hero" className={styles.link}>Início</a></li>
              <li><a href="#projetos" className={styles.link}>Trabalhos</a></li>
              <li><a href="#metodologia" className={styles.link}>Metodologia</a></li>
              <li><a href="#diario" className={styles.link}>Diário de Bordo</a></li>
              <li><a href="#contato" className={styles.link}>Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3: Redes Compartilhadas */}
          <div>
            <div className={styles.columnTitle}>Redes Compartilhadas</div>
            <ul className={styles.linkList}>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Instagram ↗
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Envie um E-mail */}
          <div>
            <div className={styles.columnTitle}>Envie um E-mail</div>
            <div className={styles.emailBox}>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-papel-muted)' }}>
                Vamos conversar sobre o seu próximo projeto?
              </p>
              <a href="mailto:contato@germinacode.com.br" className={styles.emailLink}>
                contato@germinacode.com.br
              </a>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-papel-light)', marginTop: '0.5rem' }}>
                Tempo médio de resposta: &lt; 24h úteis.
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className={`${styles.bottomBar} reveal delay1`}>
          <div>
            © {currentYear} GERMINA CODE. TODOS OS DIREITOS RESERVADOS.
          </div>
          <div className={styles.bottomRight}>
            <span>BRASÍLIA // BR</span>
            <span>DERIVADA DO BROTO ENTRE CHAVES</span>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
