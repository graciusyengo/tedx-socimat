import React from 'react';
import './EventTheme.css';

const EventTheme = () => {
  return (
    <section className="event-theme">
      <div className="theme-container">
        <h2>Thème 2025</h2>
        <div className="theme-content">
          <div className="theme-title">
            "Le talent seul ne suffit pas : Allez au-delà de vos capacités"
          </div>
          <p className="theme-description">
            Découvrez comment la persévérance, l'effort et l'apprentissage continu 
            façonnent l'avenir. Dans un monde en constante évolution, le véritable 
            succès réside dans notre capacité à repousser nos limites et à 
            transformer nos potentiels en réalisations concrètes.
          </p>
          <div className="theme-decoration">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTheme;
