import { useState, useEffect } from 'react';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import { useScrollReveal } from './utils/useScrollReveal';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#');

  // Ativa o sistema de animações de entrada suave em todo o site
  useScrollReveal();

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderCurrentPage = () => {
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
