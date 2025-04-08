import React from 'react';
import './About.css';
import { HiGlobe, HiLightBulb, HiMicrophone, HiUsers } from 'react-icons/hi';
import Funder from '../../components/Funder/Funder'

const About = () => {
  return (
    <div className="about">
      <section className="hero-section">
        <div className="hero-slide hero-slide-about">
          <div className="carousel-content">
            <div className="text-content">
              <h6 className="text-white text-uppercase mb-3 animated slideInDown">À PROPOS</h6>
              <h1 className="text-white mb-4 animated slideInDown">Découvrez TEDx<br />Socimat</h1>
            </div>
            {/* <div className="image-content">
              <img src="/images/tedx1.png" alt="TEDx Logo" className="tedx-logo" />
            </div> */}
          </div>
        </div>
      </section>
      <Funder/>
      <section className="ted-talks">
        <h2 className="section-title">TED Talks Inspirants</h2>
        <div className="container">
          <div className="talks-grid">
            <div className="talk-card">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/RVB3PBPxMWg"
                  title="Comment le sport peut changer une vie | Yoan Stuck | TEDxClermont"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3>Comment le sport peut changer une vie</h3>
              <p>Yoan Stuck - TEDxClermont</p>
            </div>
            <div className="talk-card">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/tXVe4qnhvxU"
                  title="L'intelligence artificielle au service de l'humain | Laurence Devillers | TEDxClermont"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3>L'intelligence artificielle au service de l'humain</h3>
              <p>Laurence Devillers - TEDxClermont</p>
            </div>
          </div>
        </div>
      </section>

      <section className="join-section">
        <div className="container">
          <div className="join-content">
            <h2>Rejoignez l'Aventure</h2>
            <p>
              Participez à TEDx en tant que participant, bénévole ou speaker.
              Ensemble, partageons des idées qui méritent d'être diffusées.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">Contactez-nous</a>
              <a href="/become-speaker" className="cta-button secondary">Devenir Speaker</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
