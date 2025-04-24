import React, { useEffect, useState } from 'react';
import './Home.css';

import Team from '../../components/Team/Team'
import Statistics from '../../components/Statistics/Statistics';
import WhyAttend from '../../components/WhyAttend/WhyAttend';
import Schedule from '../../components/Schedule/Schedule';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import Welcome from '../../components/Welcome/Welcome';
import EventInfo from '../../components/EventInfo/EventInfo';
import EventTheme from '../../components/EventTheme/EventTheme';
import SpeakerModal from '../../components/SpeakerModal/SpeakerModal';

const speakerss = [
  {
    id: 1,
    name: 'Gisele',
    title: 'Design Thinking',
    image: '/images/speakers/Gisele.jpg',
    slogan: "Passionnée par l'innovation et le design thinking.",
    bio: "Marie Laurent est une experte reconnue dans le domaine du design thinking. Elle accompagne depuis plus de 10 ans des entreprises et des startups dans la transformation de leurs processus créatifs et l'innovation centrée utilisateur. Elle est également conférencière TEDx, auteure et formatrice internationale. Marie Laurent est une experte reconnue dans le domaine du design thinking. Elle accompagne depuis plus de 10 ans des entreprises et des startups dans la transformation de leurs processus créatifs et l'innovation centrée utilisateur. Elle est également conférencière TEDx, auteure et formatrice internationale. Marie Laurent est une experte reconnue dans le domaine du design thinking. Elle accompagne depuis plus de 10 ans des entreprises et des startups dans la transformation de leurs processus créatifs et l'innovation centrée utilisateur. Elle est également conférencière TEDx, auteure et formatrice internationale.",
  },
  {
    id: 2,
    name: 'Deborah Sabanga',
    title: 'Intelligence Artificielle',
    image: '/images/speakers/Débora_Sabanga.jpeg',
    slogan: "Explorer les possibilités de l'IA dans l'éducation.",
    bio: "Thomas Dubois est chercheur en intelligence artificielle et pédagogue. Il travaille sur l'intégration de l'IA dans les systèmes éducatifs pour améliorer l'apprentissage personnalisé. Il a publié de nombreux articles et intervient régulièrement dans des conférences internationales.",
  },
  {
    id: 3,
    name: 'Danny Byabene',
    title: 'Danny Byabene',
    image: '/images/speakers/DannyByabene.jpg',
    slogan: "Engagée pour un avenir plus vert et durable.",
    bio: "Sophie Martin est consultante en développement durable et militante écologiste. Elle accompagne les entreprises et collectivités dans leur transition écologique et anime de nombreux ateliers de sensibilisation. Son engagement pour la planète et son expertise font d'elle une référence dans son domaine.",
  },
  {
    id: 4,
    name: 'Lucas Petit',
    title: 'Innovation Sociale',
    image: '/images/speakers/MeEmmanual.jpg',
    bio: "Lucas Petit est entrepreneur social et fondateur de l'association Impact+. Il développe des projets innovants pour lutter contre l'exclusion et favoriser l'inclusion sociale. Son parcours inspirant est salué par de nombreux prix internationaux.",
  },
  {
    id: 5,
    name: 'Mme Yvonne CHIKA',
    title: 'Innovation Sociale',
    image: '/images/speakers/Mme Yvonne CHIKA.jpg',
    bio: "Lucas Petit est entrepreneur social et fondateur de l'association Impact+. Il développe des projets innovants pour lutter contre l'exclusion et favoriser l'inclusion sociale. Son parcours inspirant est salué par de nombreux prix internationaux.",
  },
  {
    id: 6,
    name: 'Lucas Petit',
    title: 'Innovation Sociale',
    image: '/images/speakers/Mr_AlainKahasha.jpg',
    bio: "Lucas Petit est entrepreneur social et fondateur de l'association Impact+. Il développe des projets innovants pour lutter contre l'exclusion et favoriser l'inclusion sociale. Son parcours inspirant est salué par de nombreux prix internationaux.",
  },
  {
    id: 7,
    name: 'Lucas Petit',
    title: 'Innovation Sociale',
    image: '/images/speakers/powshilo04.JPG',
    bio: "Lucas Petit est entrepreneur social et fondateur de l'association Impact+. Il développe des projets innovants pour lutter contre l'exclusion et favoriser l'inclusion sociale. Son parcours inspirant est salué par de nombreux prix internationaux.",
  },
];

const Home = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  useEffect(() => {
    if (typeof window.bootstrap !== 'undefined') {
      const carousel = document.getElementById('header-carousel');
      new window.bootstrap.Carousel(carousel, {
        interval: 5000
      });
    }
  }, []);

  const handleSpeakerClick = (speaker) => {
    setSelectedSpeaker(speaker);
  };
  const handleCloseModal = () => {
    setSelectedSpeaker(null);
  };

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
                    <h1 className="text-white mb-4 animated slideInDown fontSize">Des idées prêtes à<br />révolutionner le monde.</h1>
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
                <div className="carousel-content">+
                  <div className="text-content">
                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">TEDXSOCIMAT</h6>
                    <h1 className="text-white mb-4 animated slideInDown">Dans un esprit d'idées<br />dignes d'être partagées.</h1>
                    <a href="/" className="btn btn-primary animated slideInDown">
                      LIRE PLUS
                    </a>
                  </div>
                  <div className="image-content">
                    <img src="/images/tedx-removebg.png" alt="TEDx Event" className="tedx-logo" />
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
      <Welcome />
      <EventInfo />
      <EventTheme />
      <section className="speakers-section">
        <div className="speakers-container">
          <h2 className="section-title">Nos Intervenants</h2>
          <div className="speakers-grid">
            {speakerss.map(speakers => (
              <div key={speakers.id} className="speaker-card" onClick={() => handleSpeakerClick(speakers)} style={{ cursor: 'pointer' }}>
                <div className="speaker-image">
                  <img src={speakers.image} alt={speakers.name} />
                </div>
                <div className="speaker-info">
                  <h3>{speakers.name}</h3>
                  <h4>{speakers.title}</h4>
                  <p>{speakers.slogan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SpeakerModal speaker={selectedSpeaker} onClose={handleCloseModal} />
      </section>
   
      <WhyAttend />
      <Schedule />
      <Statistics />
      <Team />
   
    </>
  );
};

export default Home;
