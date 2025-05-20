import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-container">
        <h2>Découverte de TEDx Socimat</h2>
        <p>
          Bienvenue à TEDx Socimat, un événement unique qui réunit des esprits 
          brillants pour partager des idées qui façonnent l'avenir. Inspiré par 
          le célèbre format TED, notre édition TEDx Socimat offre une plateforme 
          où innovation, savoir et inspiration se rencontrent.
          <br/>

          <span className='mission'> Notre mission est d'encourager la créativité, le partage et l'exploration de nouvelles perspectives pour un monde meilleur.</span>


        </p>
      </div>
    </div>
  );
};

export default Welcome;
