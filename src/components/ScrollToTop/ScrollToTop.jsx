import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Défile vers le haut de la page lorsque le chemin change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ce composant ne rend rien
};

export default ScrollToTop;
