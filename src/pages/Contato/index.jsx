import { useState } from 'react';
import SectionContainer from '../../components/SectionContainer';
import Button from '../../components/Button';
import styles from './styles.module.css';

export default function Contato() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.section}>
      <SectionContainer>
        <div className={styles.grid}>
          {/* Lado Esquerdo: Info de Contato */}
          <div>
            <h1 className={styles.title}>Vamos germinar uma ideia juntos?</h1>
            <p className={styles.subtitle}>
              Conte-nos sobre o seu projeto, desafios técnicos ou necessidades de design system. Respondemos em até 24h úteis.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>E-mail Direto</span>
                <a href="mailto:contato@germinacode.com.br" className={styles.infoValue}>
                  contato@germinacode.com.br
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Localização &amp; Fuso</span>
                <span className={styles.infoValue}>Brasília, DF · Brasil (GMT-3)</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Disponibilidade</span>
                <span className={styles.infoValue}>Aceitando novos projetos para o próximo trimestre</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <div>
            {submitted ? (
              <div style={{
                background: 'var(--color-etapa-crescimento)',
                padding: '2.5rem',
                borderRadius: 'var(--radius-2xl)',
                border: '1px solid rgba(20, 32, 26, 0.1)',
                textAlign: 'center',
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Mensagem Recebida!</h3>
                <p style={{ color: 'var(--color-tinta-muted)', marginBottom: '1.5rem' }}>
                  Obrigado pelo contato. Em breve entraremos em contato para agendar nossa conversa inicial.
                </p>
                <Button variant="dark" onClick={() => setSubmitted(false)}>
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">Seu Nome / Empresa</label>
                  <input className={styles.input} id="name" type="text" required placeholder="Ex: Ana Silva (TechCorp)" />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">Seu E-mail</label>
                  <input className={styles.input} id="email" type="email" required placeholder="ana@techcorp.com" />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="service">Tipo de Serviço Desejado</label>
                  <select className={styles.input} id="service" defaultValue="web">
                    <option value="web">Aplicações web e front-end</option>
                    <option value="landing">Sites e landing pages</option>
                    <option value="desktop">Sistemas desktop em Java</option>
                    <option value="maintenance">Manutenção e evolução</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="message">Conte sobre o projeto</label>
                  <textarea 
                    className={styles.textarea} 
                    id="message" 
                    required 
                    placeholder="Objetivos do projeto, prazos estimados, tecnologia..."
                  ></textarea>
                </div>

                <Button variant="primary" size="lg" type="submit">
                  Enviar Mensagem
                </Button>
              </form>
            )}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

