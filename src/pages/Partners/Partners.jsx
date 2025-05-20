import React from 'react';
import './Partners.css';
import { HiGlobe, HiLightBulb } from 'react-icons/hi';
import { 
  FaHandshake, 
  FaChartLine, 
  FaRocket, 
  FaBullseye,
  FaUsers
} from 'react-icons/fa';

const Partners = () => {
  const benefits = [
    {
      icon: HiGlobe,
      title: "Visibilité Internationale",
      description: "Accédez à une audience mondiale et diversifiée"
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
      icon: HiLightBulb,
      title: "Innovation",
      description: "Associez votre marque à l'innovation et aux idées nouvelles"
    }
  ];

  const partnerLevels = [
    {
      level: "Platine",
      icon: FaRocket,
      benefits: [
        "Logo en position premium sur tous les supports",
        "10 invitations VIP à l'événement",
        "Stand dédié lors de l'événement",
        "Mention dans tous les communiqués de presse",
        "Accès exclusif aux speakers"
      ]
    },
    {
      level: "Or",
      icon: FaBullseye,
      benefits: [
        "Logo sur les supports principaux",
        "5 invitations VIP à l'événement",
        "Espace d'exposition",
        "Visibilité sur les réseaux sociaux",
        "Networking privilégié"
      ]
    },
    {
      level: "Argent",
      icon: FaUsers,
      benefits: [
        "Logo sur le site web",
        "2 invitations à l'événement",
        "Mention sur les réseaux sociaux",
        "Accès au networking",
        "Kit partenaire digital"
      ]
    }
  ];

  const currentPartners = [
    {
      name: "Hamac Communication",
      logo: "/images/partener/h.jpeg",
      description: "Une agence de communication globale, proposant des conseils tout en accompagnant ses clients sur chaque segment de communication.",
      level: "Platine"
    },
    {
      name: "Global Solutions",
      logo: "/images/partner2.png",
      description: "Expert en solutions durables",
      level: "Or"
    },
    {
      name: "Digital Futures",
      logo: "/images/partner3.png",
      description: "Pionnier en transformation numérique",
      level: "Or"
    },
    {
      name: "EcoTech Systems",
      logo: "/images/partner4.png",
      description: "Solutions écologiques innovantes",
      level: "Argent"
    }
  ];

  return (
    <div className="partners">
      <div id="header-carousel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="hero-slide  hero-slide-partners">
              <div className="carousel-content">
                <div className="text-content">
                  <h6 className="text-white text-uppercase mb-3 animated slideInDown">PARTENAIRES</h6>
                  <h1 className="text-white mb-4 animated slideInDown">Devenez Partenaire<br />de l'Innovation</h1>
                </div>
                <div className="image-content">
                  <img src="/images/tedx1.png" alt="TEDx Logo" className="tedx-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="benefits-section">
        <div className="container-partner">
          <h2>Pourquoi devenir partenaire ?</h2>
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

      <section className="partnership-levels">
        <div className="container-partner">
          <h2>Niveaux de Partenariat</h2>
          <div className="levels-grid">
            {partnerLevels.map((level, index) => (
              <div key={index} className="level-card">
                <div className="level-icon">
                  <level.icon />
                </div>
                <h3>{level.level}</h3>
                <ul>
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
                <a href="/contact" className="level-cta">
                  Devenir Partenaire {level.level}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="current-partners">
        <div className="container-partner">
          <h2>Nos Partenaires Actuels</h2>
          <div className="partners-grid">
            {currentPartners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo">
                  <img src={partner.logo} alt={partner.name} />
                </div>
                <div className="partner-info">
                  <span className="partner-level">{partner.level}</span>
                  <h3>{partner.name}</h3>
                  <p>{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="become-partner">
        <div className="container-partner">
          <div className="cta-content">
            <h2>Rejoignez l'Aventure TEDx</h2>
            <p>
              Devenez partenaire de TEDx Socimat et participez à la diffusion d'idées 
              qui peuvent changer le monde. Contactez-nous pour discuter des opportunités 
              de partenariat.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Nous Contacter
              </a>
              <a href="/document/TEDxSocimat%20.pdf.pdf" download="TEDxSocimat .pdf.pdf" rel="noopener noreferrer" target="_blank" className="cta-button secondary">
                Télécharger la Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
