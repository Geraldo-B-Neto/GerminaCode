import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './styles.module.css';

export default function MainLayout({ children, currentPath = '/' }) {
  return (
    <div className={styles.layout}>
      <Header currentPath={currentPath} />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

