import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Team.css';

const Team = () => {
  const teamMembers = [

    {
      name: 'Joel Ngungu ',
      role: 'Organisateur TEDxSocimat',
      image: '/images/team/joel.jpg',
      description: "En tant qu’organisateur, Joël incarne la vision et la coordination globale de TEDxSocimat. Il veille à créer une plateforme fidèle à l’esprit TED, mettant en lumière idées novatrices et parcours inspirants. De la sélection des intervenants à la logistique, en passant par la direction artistique, il supervise chaque détail avec passion. Son leadership transforme chaque édition en un espace d’inspiration et de connexion pour la communauté."
    },

    {
      name: 'Caleb Nday',
      role: 'CO-Organisateur TEDxSocimat',
      image: '/images/team/kaleb.jpg',
      description: 'En tant que co-organisateur, Caleb joue un rôle clé dans la conception et la coordination de TEDxSocimat. Impliqué dans toutes les étapes — de la stratégie à la logistique en passant par la communication — il œuvre avec engagement et créativité pour offrir une expérience inspirante, fidèle à l’esprit TED et ancrée dans l’impact communautaire.'
    },

    {
      name: 'Gisele Kabeya',
      role: 'Coach Speaker',
      image: '/images/team/gisele.jpg',
      description: 'Gisele est une coach passionnée qui accompagne individus et organisations à libérer leur potentiel par la prise de parole et le développement personnel. Avec une approche authentique et inspirante, elle aide ses clients à clarifier leur message, affirmer leur présence et communiquer avec impact. Sa mission : révéler la voix unique de chacun et en faire un moteur de transformation.'
    },


    {
      name: 'Joe Kimbuya',
      role: ' Developpeur et Chargé de marketing',
      image: '/images/team/joe.jpg',
      description: 'À la croisée de la technologie et du marketing, Joe conçoit des solutions web performantes tout en pilotant des stratégies de communication innovantes. Grâce à sa double compétence en développement et en marketing digital, il joue un rôle clé dans la création et le succès de produits digitaux à fort impact'
    },
    {
      name: 'Aphia Mbumu',
      role: 'Chargé de finace et Sponring ',
      image: '/images/team/team-3.jpg',
      description: "En tant que Chargée de Finance et Sponsoring, Aphia veille à la bonne gestion budgétaire des projets et au développement de partenariats financiers. elle élabore les prévisions financières, suit les dépenses, optimise les ressources et assure la transparence des opérations. Parallèlement, elle identifie, contacte et négocie avec des sponsors stratégiques."
    },

    {
      name: 'Yasmine Mbumu',
      role: 'Chargée de finance ',
      image: '/images/team/mbumu.jpg',
      description: "En tant que Chargée de Finance, Yasmine assure la gestion rigoureuse des ressources financières de l’organisation. elle élabore les budgets, suit les dépenses, prépare les rapports financiers et veille à la transparence comptable. Grâce à son sens de l’analyse et de l’organisation, elle contribue à la prise de décision stratégique et à la pérennité des projets."
    },
    {
      name: 'Mariane ',
      role: 'Volontaire',
      image: '/images/team/mariane.jpg',
      description: 'Mariane est une volontaire engagée, passionnée par le travail d’équipe et l’impact social. Présente sur le terrain, elle apporte un soutien précieux à l’organisation des événements, de l’accueil à la logistique. Son enthousiasme et son sens de la collaboration contribuent à offrir une expérience fluide et mémorable aux participants.'
    },
    {
      name: 'Hanaya',
      role: 'Chargée de volontaires',
      image: '/images/team/team-hanaya.jpg',
      description: 'En tant que Chargée de Volontaires, Hanaya coordonne et encadre l’équipe de bénévoles au sein de l’organisation. elle organise le recrutement, l’intégration, la formation et le suivi des volontaires, tout en veillant à leur bien-être et à leur motivation.'
    },
    {
      name: 'Cornella kudia ',
      role: 'Chargée de communication',
      image: '/images/team/team-Carel.jpg',
      description: "Cornella joue un rôle central dans la coordination des bénévoles, veillant à leur intégration, leur formation et leur bien-être tout au long de leur mission. Grâce à ses compétences organisationnelles et relationnelles, elle planifie les activités, encadre les équipes et crée un environnement collaboratif propice à l’engagement. Elle s’assure que chaque volontaire comprend l’impact de son action et contribue pleinement à la réussite des projets." 
    },

    {
      name: 'Josias',
      role: "Membre de L'equipe de communication",
      image: '/images/team/josias.jpg',
      description: 'Josias met sa passion des relations humaines et des mots au service de la communication stratégique. Il conçoit des messages percutants, gère les campagnes et anime les réseaux sociaux pour refléter nos valeurs et valoriser nos projets. Créatif et à l’écoute, il assure une présence cohérente en ligne et sur le terrain.'
    },
    {
      name: 'Merveille Kalumba',
      role: 'Chargé des intervenants',
      image: '/images/team/merveille.jpeg',
      description: 'Merveille assure la coordination avec les conférenciers et experts, de la prise de contact à la logistique de leur intervention. Grâce à son sens de l’organisation et son professionnalisme, elle garantit une expérience fluide et de qualité pour chaque intervenant.'
    },

    {
      name: 'Eunice Kwambo',
      role: 'Chargé des Sponsoring',
      image: '/images/team/eunice.jpeg',
      description: "En tant que Chargée de Sponsoring, Eunice développe et gère les partenariats stratégiques avec des sponsors afin de soutenir les projets de l’organisation. Il/elle identifie les opportunités de collaboration, conçoit des propositions de valeur attractives et négocie les modalités de partenariat. Grâce à son sens du relationnel et à sa capacité de persuasion, il/elle assure une visibilité optimale pour les partenaires tout en garantissant des ressources nécessaires à la réussite des événements et initiatives."
    },
    {
      name: 'Praise Munanga',
      role: 'Chargé des volontaires',
      image: '/images/team/team-praise.jpg',
      description: 'En tant que chargé de communication, je suis ravie de diffuser les idées puissantes de TEDxSocimat. Cet événement est une plateforme où l\'innovation rencontre l\'inspiration, et je suis fier de faire rayonner ces messages au-delà de notre communauté.'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="team-section">
      <div className="team-container">
        <h3 className="team-title">INSPIRATION</h3>
        <h2 className="team-subtitle">Des voix qui inspirent le changement</h2>
        
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
