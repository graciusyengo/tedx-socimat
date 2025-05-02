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
    name: 'Emmanuella Zandi  ',
    title: '',
    image: '/images/speakers/emmanuella-zandi.jpeg',
    slogan: "",
    bio: "Marie Laurent est une experte reconnue dans le domaine du design thinking. Elle accompagne depuis plus de 10 ans des entreprises et des startups dans la transformation de leurs processus créatifs et l'innovation centrée utilisateur. Elle est également conférencière TEDx, auteure et formatrice internationale. Marie Laurent est une experte reconnue dans le domaine du design thinking. Elle accompagne depuis plus de 10 ans des entreprises et des startups dans la transformation de leurs processus créatifs et l'innovation centrée utilisateur. Elle est également conférencière TEDx, auteure et formatrice internationale. Marie Laurent est une experte reconnue dans le domaine du design thinking. Elle accompagne depuis plus de 10 ans des entreprises et des startups dans la transformation de leurs processus créatifs et l'innovation centrée utilisateur. Elle est également conférencière TEDx, auteure et formatrice internationale.",
  },


  {
    id: 2,
    name: 'Alain Kahasha Ntumwa',
    title: 'ingénieur Civil Electricien ',
    image: '/images/speakers/alain-kahasha.jpeg',
    slogan: "Engagée pour un avenir plus vert et durable.",
    bio: "Alain Kahasha  NTUMWA  est ingénieur Civil Electricien et détenteur d’une Maitrise en Télécommunications de la Faculté Polytechnique de Mons. À ce jour il cumule plus de 25 ans d’expériences professionnelles diverses et variées tant au niveau national qu’international notamment comme Administrateur Indépendant à la Banque Centrale du Congo depuis 2021.Directeur Général au Niger, en RDC, au Gabon et au Congo Brazzaville de 2010 à 2023 pour Airtel (Ex Celtel/Zain).Directeur de plusieurs régions et départements pour Vodacom en RDC où il lance le réseau dans plusieurs zones du pays en 2003.Responsable Commercial en RDC pour The Coca-Cola Company. Ingénieur de Production et Ingénieur Technicien pour British American Tobacco RDC (BAT) En 2023, Alain Kahasha  NTUMWA a participé à la création du Think Tank MANSSAH avec d’autres panafricains."
  },

  {
    id: 3,
    name: ' Yvonne Chika NABINTU  ',
    title: 'Avocate et cheffe d’entreprise et administratrice de société.  ',
    image: '/images/speakers/yvonne-chika.jpeg',
    bio: "Yvonne Chika NABINTU  est avocate inscrite au barreau de Matadi, cheffe d’entreprise et administratrice de société. Titulaire d’un MBA de la Frankfurt School of Finance and Management et d’une licence en droit public international de l’Université de Kinshasa, elle cumule une solide expertise en leadership, ressources humaines et gouvernance. Fondatrice et dirigeante de Hodari Manpower and Services depuis 2019, elle a acquis une solide expérience en tant que Directrice des Ressources Humaines et du Juridique, notamment chez Total RDC (où elle était également membre du comité de direction) et chez Orange.",
  },


  {
    id: 4,
    name: 'Blanchine Mazanga',
    title: '',
    image: '/images/speakers/blanchine-mazanga.jpeg',
    bio: "",
  },

  {
    id: 5,
    name: 'Marc Tshibasu',
    title: '',
    image: '/images/speakers/IMG-20250218-WA0022.jpg',
    bio: ""
  },
  {
    id: 6,
    name: 'Patrick Olondo wa SHILO',
    title: 'réalisateur, auteur, directeur de la photographie et coloriste',
    image: '/images/speakers/powshilo.jpg',
    bio: "Le parcours de Patrick Olondo wa SHILO, réalisateur, auteur, directeur de la photographie et coloriste, est marqué par une solide formation à l'Académie des Beaux-Arts de Kinshasa et à la SAE de Cape Town (animation 3D). Dès 2007, il s'illustre dans la réalisation de publicités, clips et courts-métrages. Son implication dans la seconde unité de la série Amazon Prime Video « The Widow » (en RDC, 2018) témoigne de son envergure. La reconnaissance internationale s'ensuit en 2020 et 2021 avec les multiples récompenses obtenues par « Lies of eyes », un court-métrage produit et réalisé par lui dans des festivals prestigieux (European Cinematography Awards, New York Cinematography Awards (NYCA), Asia Cinematography Awards, RapidLion, The South African Intenational Fim Festival, Ananse Cinema inetrnational Film Festival, Silicon Valley Africa (SVAFF), Festival International de Cinéma de Kinshasa (FICKIN 2021). Son expertise s'étend à divers genres et techniques audiovisuels. Coloriste utilisant Davinci Resolve, Patrick Olondo Wa SHILO étend son expériebce sur divers autres domaines, styles et techniques partant de la publicité, court-métrage, long-métrage, documentaire, clip musical, film d’entreprises et tant d’autres.",
  },
  {
    id: 7,
    name: 'Déborah Tshidibi Sabanga ',
    title: 'Juriste',
    image: '/images/speakers/deborah-sabanga.jpeg',
    slogan: "",
    bio: "Déborah Tshidibi SABANGA  est une jeune juriste congolaise originaire de Tshikapa. Diplômée en droit avec mention distinction de l’Université de Kinshasa (2024), elle se distingue par son excellence oratoire et ses performances en concours de plaidoirie. Finaliste du concours Tshibangu Kalala (2023), elle reçoit en 2024 le prix de la sixième meilleure plaidoirie au concours Charles Rousseau à Bruxelles, puis celui de meilleur orateur en finale du concours de procès simulé devant la CPI à La Haye. Ces distinctions lui valent une reconnaissance académique et institutionnelle notamment un satisfecit au département de droit international public et relations internationales ainsi qu’une médaille d’ambassadrice de la jeunesse estudiantine remise par le recteur de l’UNIKIN. "
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
                    <div className="text-white text-uppercase mb-3 animated slideInDown">  <img src="/images/logo-tedx.png" alt="logo-tedx-socimat" className="logo-tedx"/></div>
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
                <div className="speaker-image" 
                >
                  <img src={speakers.image} alt={speakers.name}    
                  style={
                    (speakers.id === 3|| speakers.id === 7)
                      ? {
              
                          width: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center center',
                          transform: 'translateY(-20px)', // remonte visuellement la tête
                    
                        }
                      : {
                        }
                  } />
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
