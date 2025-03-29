import React, { useEffect } from 'react';
import './Home.css';

import Team from '../../components/Team/Team'
import Statistics from '../../components/Statistics/Statistics';
import WhyAttend from '../../components/WhyAttend/WhyAttend';
import Schedule from '../../components/Schedule/Schedule';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';

const speakerss = [
  {
    id: 1,
    name: 'Marie Laurent',
    title: 'Design Thinking',
    image: '/images/speakers/Gisele.jpg',
    description: 'Passionnée par l\'innovation et le design thinking.'
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    title: 'Intelligence Artificielle',
    image: 'https://img.freepik.com/photos-gratuite/tour-taille-entrepreneur-masculin-joyeux-confiant-large-sourire_273609-18909.jpg?t=st=1743113967~exp=1743117567~hmac=d052ec0d57ca628bdf1bb2538897a62c376529be9aaec897b91ff509c741b3f5&w=1380',
    description: 'Explorer les possibilités de l\'IA dans l\'éducation.'
  },
  {
    id: 3,
    name: 'Sophie Martin',
    title: 'Développement Durable',
    image: 'https://img.freepik.com/photos-gratuite/tour-taille-entrepreneur-masculin-joyeux-confiant-large-sourire_273609-18909.jpg?t=st=1743113967~exp=1743117567~hmac=d052ec0d57ca628bdf1bb2538897a62c376529be9aaec897b91ff509c741b3f5&w=1380',
    description: 'Engagée pour un avenir plus vert et durable.'
  },
  {
    id: 4,
    name: 'Lucas Petit',
    title: 'Innovation Sociale',
    image: 'https://img.freepik.com/photos-gratuite/tour-taille-entrepreneur-masculin-joyeux-confiant-large-sourire_273609-18909.jpg?t=st=1743113967~exp=1743117567~hmac=d052ec0d57ca628bdf1bb2538897a62c376529be9aaec897b91ff509c741b3f5&w=1380',
    description: 'Créer des solutions pour un impact social positif.'
  },


];

const Home = () => {
  useEffect(() => {
    if (typeof window.bootstrap !== 'undefined') {
      const carousel = document.getElementById('header-carousel');
      new window.bootstrap.Carousel(carousel, {
        interval: 5000
      });
    }
  }, []);

  return (
    <>
   
      <div className="home">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="hero-slide">
                <div className="carousel-content">
                  <div className="text-content">
                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">TEDXSOCIMAT</h6>
                    <h1 className="text-white mb-4 animated slideInDown">Des idées prêtes à<br />révolutionner le monde.</h1>
                    <a href="/" className="btn btn-primary animated slideInDown">
                      LIRE PLUS
                    </a>
                  </div>
                  <div className="image-content">
                    <img src="/images/tedx1.png" alt="TEDx Logo" className="tedx-logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="hero-slide">
                <div className="carousel-content">
                  <div className="text-content">
                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">TEDXSOCIMAT</h6>
                    <h1 className="text-white mb-4 animated slideInDown">Dans un esprit d'idées<br />dignes d'être partagées.</h1>
                    <a href="/" className="btn btn-primary animated slideInDown">
                      LIRE PLUS
                    </a>
                  </div>
                  <div className="image-content">
                    <img src="/images/tedx.jpg" alt="TEDx Event" className="tedx-logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      <section className="speakers-section">
        <div className="speakers-container">
          <h2 className="section-title">Nos Intervenants</h2>
          <div className="speakers-grid">
            {speakerss.map(speakers => (
              <div key={speakers.id} className="speaker-card">
                <div className="speaker-image">
                  <img src={speakers.image} alt={speakers.name} />
                </div>
                <div className="speaker-info">
                  <h3>{speakers.name}</h3>
                  <h4>{speakers.title}</h4>
                  <p>{speakers.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhyAttend />
      <Schedule />
      <Statistics />
      <Team />
      <WhatsAppButton />
    </>
  );
};

export default Home;
