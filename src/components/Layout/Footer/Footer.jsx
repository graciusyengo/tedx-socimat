import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="legale-info">
        
        <p className="legal-description">
          
          TEDxSocimat est un événement TEDx organisé de manière indépendante
          sous licence TED.
        
        </p>
        <a href="https://www.ted.com/">Site Ted</a>
        <p className="legal-links">Informations Légales | Politique de cookies | Espace Presse  | <a className="site-ted" href="https://www.ted.com/">Site-Officiel-Ted</a></p>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-section">
            <h3>Adresse</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Socimat, Kinshasa-Gombe
            </p>
            <p>
              <i className="fas fa-phone"></i> +243 820 969 718
            </p>
            <p>
              <i className="fas fa-envelope"></i> contact@tedxsocimat.com
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="titre">Heures d'ouverture</h3>
            <p className="time">
              <strong>Lundi - vendredi:</strong> 09h00 - 17h00
            </p>
            <p className="time">
              <strong>Samedi - Dimanche:</strong> 08h00 - 12h00
            </p>
          </div>
          <div className="footer-section liens">
            <h3>Liens</h3>

            <li>
              <Link to="/actualites">Actualités</Link>
            </li>
            <li>
              <Link to="/sponsoring">Sponsoring</Link>
            </li>
            <li>
              <Link to="/devenir-benevole">Devenir Bénévole</Link>
            </li>
            <li>
              <Link to="/devenir-speaker">Devenir Speaker</Link>
            </li>
            <li>
              <Link to="/galerie">Galerie</Link>
            </li>
            <li>
              <Link to="/opportunites">Opportunités</Link>
            </li>
          </div>
          <div className="footer-section ">
            <h3 className="news-letter">Newsletter</h3>
            <p>
              Découvrez nos actualités et inspirations de la semaine dans votre
              newsletter !
            </p>
            <div className="newsletter">
              <input type="email" placeholder="Votre mail" />
              <button>
                <i className="fas fa-paper-plane"></i> S'INSCRIRE
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            
            Tedx Socimat, All Right Reserved.
          </p>
          <div className="footer-links">
            <Link to="/accueil">Accueil</Link>
            <Link to="/cookies">Cookies</Link>
            <Link to="/a-propos">À propos</Link>
            <Link to="/faqs">FAQs</Link>
          </div>
        </div>
        {showScrollTop && (
          <button className="scroll-top" onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
          </button>
        )}
      </footer>
    </>
  );
}

export default Footer;