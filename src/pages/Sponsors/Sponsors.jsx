import React from 'react';
import './Sponsors.css';
import { HiGlobe } from 'react-icons/hi';
import { FaHandshake, FaChartLine, FaAward } from 'react-icons/fa';

const Sponsors = () => {
  const sponsorCategories = [
    {
      title: "Platine",
      icon: FaAward,
      description: "Nos partenaires principaux qui rendent possible cet événement",
      sponsors: [
        {
          name: "TechCorp International",
          logo: "/images/sponsor1.png",
          description: "Leader mondial en innovation technologique"
        },
        {
          name: "Digital Future",
          logo: "/images/sponsor3.png",
          description: "Pionnier en transformation numérique"
        },
        {
          name: "Global Solutions",
          logo: "/images/sponsor2.png",
          description: "Expert en solutions durables"
        },
        {
          name: "EcoTech Systems",
          logo: "/images/sponsor4.png",
          description: "Solutions écologiques innovantes"
        }
      ]
    }
  ]
   

  const benefits = [
    {
      icon: HiGlobe,
      title: "Visibilité Internationale",
      description: "Accédez à une audience mondiale passionnée par l'innovation"
    },
    {
      icon: FaHandshake,
      title: "Networking Premium",
      description: "Connectez-vous avec des leaders et innovateurs"
    },
    {
      icon: FaChartLine,
      title: "Impact Mesurable",
      description: "Suivez le retour sur investissement de votre partenariat"
    },

    {
      icon: FaChartLine,
      title: "Impact Mesurable",
      description: "Suivez le retour sur investissement de votre partenariat"
    },

    {
      icon: FaChartLine,
      title: "Impact Mesurable",
      description: "Suivez le retour sur investissement de votre partenariat"
    },

    
    {
      icon: FaChartLine,
      title: "Impact Mesurable",
      description: "Suivez le retour sur investissement de votre partenariat"
    }



  ];

  return (
    <div className="sponsors">
      <div id="header-carousel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="hero-slide hero-slide-sponsors">
              <div className="carousel-content">
                <div className="text-content">
                  <h6 className="text-white text-uppercase mb-3 animated slideInDown">SPONSORS</h6>
                  <h1 className="text-white mb-4 animated slideInDown">Nos Partenaires<br />de Confiance</h1>
                </div>
                <div className="image-content">
                  <img src="/images/tedx1.png" alt="TEDx Logo" className="tedx-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="sponsor-categories">
        <div className="container-sponsors">
          <h2>Nos Sponsors</h2>
          <div className="categories-grid">
            {sponsorCategories.map((category, index) => (
              <div key={index} className="category-section">
                <div className="sponsors-grid">
                  {category.sponsors.map((sponsor, idx) => (
                    <div key={idx} className="sponsor-card">
                      <div className="sponsor-logo">
                        <img src={sponsor.logo} alt={sponsor.name} />
                      </div>
                      <h4>{sponsor.name}</h4>
                      <p>{sponsor.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container-benefits">
          <h2>Pourquoi Devenir Sponsor ?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <benefit.icon />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="become-sponsor">
        <div className="container-become-sponsor">
          <div className="cta-content">
            <h2>Devenez Sponsor</h2>
            <p>
              Rejoignez-nous dans cette aventure exceptionnelle et associez votre marque
              à l'innovation et aux idées qui changent le monde.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">Contactez-nous</a>
              <a href="#" className="cta-button secondary">Télécharger la Brochure</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
