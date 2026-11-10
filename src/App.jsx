import { useState, useEffect } from 'react';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import ArticleDetail from './pages/ArticleDetail';
import { useScrollReveal } from './utils/useScrollReveal';
import { startAmbientTrack } from './utils/soundEffects';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#');

  // Ativa o sistema de animações de entrada suave em todo o site
  useScrollReveal();

  // Inicia suavemente a trilha ambiente contínua na primeira interação do usuário
  useEffect(() => {
    const handleFirstGesture = () => {
      startAmbientTrack();
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };

    window.addEventListener('pointerdown', handleFirstGesture, { once: true });
    window.addEventListener('keydown', handleFirstGesture, { once: true });

    return () => {
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderCurrentPage = () => {
    if (currentPath.startsWith('#/artigo/')) {
      const articleId = currentPath.replace('#/artigo/', '');
      return <ArticleDetail articleId={articleId} />;
    }
    if (currentPath === '#/projetos') {
      return <Projetos />;
    }
    if (currentPath === '#/contato') {
      return <Contato />;
    }
    return <Home />;
  };

  return (
    <MainLayout currentPath={currentPath}>
      {renderCurrentPage()}
    </MainLayout>
  );
}
