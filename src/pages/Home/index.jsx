import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import FeaturedWorks from './components/FeaturedWorks';
import MetodologiaDoBroto from './components/MetodologiaDoBroto';
import DiarioDeBordo from './components/DiarioDeBordo';
import CtaSection from './components/CtaSection';
import styles from './styles.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      {/* 01. Hero com o Domo Verde Semente e Relógio de Brasília */}
      <Hero />

      {/* 02. Seção de Manifesto / Experiências Digitais com Box de Vídeo/Imagem */}
      <ExperienceSection />

      {/* 03. Trabalhos em Destaque */}
      <FeaturedWorks />

      {/* 04. Metodologia: Do Broto à Colheita */}
      <MetodologiaDoBroto />

      {/* 05. Diário de Bordo */}
      <DiarioDeBordo />

      {/* 06. Chamada para Ação Final */}
      <CtaSection />
    </div>
  );
}
