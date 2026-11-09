import SectionContainer from '../../components/SectionContainer';
import { projectsData } from '../../data/projectsData';
import styles from './styles.module.css';

export default function Projetos() {
  return (
    <div className={styles.section}>
      <SectionContainer>
        <div className={styles.headingWrapper}>
          <span className={styles.eyebrow}>ÍNDICE DE TRABALHOS</span>
          <h1 className={styles.title}>Projetos &amp; Soluções Entregues</h1>
        </div>

        <div className={styles.grid}>
          {projectsData.map((project) => (
            <article 
              key={project.id} 
              className={styles.projectCard}
              style={{ backgroundColor: project.colorScheme.background }}
            >
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                  {project.category} · {project.year}
                </span>
                <h2 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                  [{project.title}]
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-tinta-muted)', lineHeight: '1.5' }}>
                  {project.description}
                </p>
              </div>

              <div>
                <div className={styles.tags}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}

