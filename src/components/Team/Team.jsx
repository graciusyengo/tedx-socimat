import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Team.css';

const Team = () => {
  const teamMembers = [

    {

      id: 1 ,
      
      name: 'Joel Ngungu ',
      role: 'Organisateur TEDxSocimat',
      image: '/images/team/joel.jpg',
      description: "En tant qu’organisateur, Joël incarne la vision et la coordination globale de TEDxSocimat. Il veille à créer une plateforme fidèle à l’esprit TED, mettant en lumière idées novatrices et parcours inspirants. De la sélection des intervenants à la logistique, en passant par la direction artistique, il supervise chaque détail avec passion. Son leadership transforme chaque édition en un espace d’inspiration et de connexion pour la communauté.",
      linkedin: 'https://www.linkedin.com/in/joel-ngungu/',
      portfolio: 'https://joelngungu.com/'
    },

    {

      id: 2 ,
      name: 'Caleb Nday',
      role: 'CO-Organisateur TEDxSocimat',
      image: '/images/team/kaleb.jpg',
      description: 'En tant que co-organisateur, Caleb joue un rôle clé dans la conception et la coordination de TEDxSocimat. Impliqué dans toutes les étapes — de la stratégie à la logistique en passant par la communication — il œuvre avec engagement et créativité pour offrir une expérience inspirante, fidèle à l’esprit TED et ancrée dans l’impact communautaire.',
      linkedin: 'https://www.linkedin.com/in/caleb-nday/',
      portfolio: 'https://calebnday.com/'
    },

    {
      id: 3,
      name: 'Gisele Kabeya',
      role: 'Coach Speaker',
      image: '/images/team/gisele.jpeg',
      imageClass: 'gisele-fix',
      description: 'Gisele est une coach passionnée qui accompagne individus et organisations à libérer leur potentiel par la prise de parole et le développement personnel. Avec une approche authentique et inspirante, elle aide ses clients à clarifier leur message, affirmer leur présence et communiquer avec impact. Sa mission : révéler la voix unique de chacun et en faire un moteur de transformation.',
      linkedin: 'https://www.linkedin.com/in/gisele-kabeya/',
      portfolio: 'https://giselecoaching.com/'
    },


    {

      id: 4 ,
      name: 'Joe Kimbuya',
      role: 'Développeur et Chargé de marketing',
      image: '/images/team/joe.jpg',
      description: 'À la croisée de la technologie et du marketing, Joe conçoit des solutions web performantes tout en pilotant des stratégies de communication innovantes. Grâce à sa double compétence en développement et en marketing digital, il joue un rôle clé dans la création et le succès de produits digitaux à fort impact',
      linkedin: ' https://www.linkedin.com/in/joe-kimbuya-zola-80a779181?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      portfolio: ' https://joe-kimbuya.vercel.app'
    },
    {

      id: 5 ,
      name: 'Aphia Mbumu',
      role: 'Chargée de finance et de Sponring',
      image: '/images/team/team-3.jpg',
      description: "En tant que Chargée de Finance et Sponsoring, Aphia veille à la bonne gestion budgétaire des projets et au développement de partenariats financiers. elle élabore les prévisions financières, suit les dépenses, optimise les ressources et assure la transparence des opérations. Parallèlement, elle identifie, contacte et négocie avec des sponsors stratégiques.",
      linkedin: 'https://www.linkedin.com/in/aphia-mbumu/',
      portfolio: 'https://aphiafinance.com/'
    },

    {

      id: 6 ,
      name: 'Yasmine Mbumu',
      role: 'Chargée des finances ',
      image: '/images/team/mbumu.jpg',
      description: "En tant que Chargée de Finance, Yasmine assure la gestion rigoureuse des ressources financières de l’organisation. elle élabore les budgets, suit les dépenses, prépare les rapports financiers et veille à la transparence comptable. Grâce à son sens de l’analyse et de l’organisation, elle contribue à la prise de décision stratégique et à la pérennité des projets.",
      linkedin: 'https://www.linkedin.com/in/yasmine-mbumu/',
      portfolio: 'https://yasminefinance.com/'
    },
    {

      id: 7,
      name: 'Mariane Kasongo',
      role: 'Volontaire',
      image: '/images/team/mariane.jpg',
      description: 'Mariane est une volontaire engagée, passionnée par le travail d’équipe et l’impact social. Présente sur le terrain, elle apporte un soutien précieux à l’organisation des événements, de l’accueil à la logistique. Son enthousiasme et son sens de la collaboration contribuent à offrir une expérience fluide et mémorable aux participants.',
      linkedin: 'https://www.linkedin.com/in/mariane-kasongo/',
      portfolio: 'https://marianevolunteer.com/'
    },
    {

      id: 8 ,
      name: 'Hanaya Makanzu',
      role: 'Chargée des volontaires',
      image: '/images/team/team-hanaya.jpg',
      description: 'En tant que Chargée de Volontaires, Hanaya coordonne et encadre l’équipe de bénévoles au sein de l’organisation. elle organise le recrutement, l’intégration, la formation et le suivi des volontaires, tout en veillant à leur bien-être et à leur motivation.',
      linkedin: 'https://www.linkedin.com/in/hanaya-makanzu/',
      portfolio: 'https://hanayavolunteer.com/'
    },
    {

      id: 9 ,
      name: 'Cornella kudia ',
      role: 'Chargée de communication',
      image: '/images/team/team-Carel.jpg',
      description: "Cornella joue un rôle central dans la coordination des bénévoles, veillant à leur intégration, leur formation et leur bien-être tout au long de leur mission. Grâce à ses compétences organisationnelles et relationnelles, elle planifie les activités, encadre les équipes et crée un environnement collaboratif propice à l’engagement. Elle s’assure que chaque volontaire comprend l’impact de son action et contribue pleinement à la réussite des projets.",
      linkedin: 'https://www.linkedin.com/in/cornella-kudia/',
      portfolio: 'https://cornellacommunication.com/' 
    },


    {
      id: 11 ,
      name: 'Merveille Kalumba',
      role: 'Chargée des intervenants',
      linkedin: 'https://www.linkedin.com/in/merveille-kalumba/',
      portfolio: 'https://merveilleintervenants.com/',
      image: '/images/team/merveille.jpeg',
      description: 'Merveille assure la coordination avec les conférenciers et experts, de la prise de contact à la logistique de leur intervention. Grâce à son sens de l’organisation et son professionnalisme, elle garantit une expérience fluide et de qualité pour chaque intervenant.'
    },

    {

      id: 12 ,
      name: 'Eunice Kwambo',
      role: 'Chargée des Sponsoring',
      image: '/images/team/eunice.jpeg',
      imageClass: 'eunice-fix',
      description: "En tant que Chargée de Sponsoring, Eunice développe et gère les partenariats stratégiques avec des sponsors afin de soutenir les projets de l’organisation. elle identifie les opportunités de collaboration, conçoit des propositions de valeur attractives et négocie les modalités de partenariat.",
      linkedin: 'https://www.linkedin.com/in/eunice-kwambo/',
      portfolio: 'https://eunicesponsoring.com/'
    },
    {
      id: 13 ,
      name: 'Praise Munanga',
      role: 'Chargée des volontaires',
      image: '/images/team/team-praise.jpg',
      description: 'En tant que chargé de communication, je suis ravie de diffuser les idées puissantes de TEDxSocimat. Cet événement est une plateforme où l\'innovation rencontre l\'inspiration, et je suis fier de faire rayonner ces messages au-delà de notre communauté.',
      linkedin: 'https://www.linkedin.com/in/praise-munanga/',
      portfolio: 'https://praisevolunteer.com/'
    },
      {
      id: 13 ,
      name: 'Grace Yengo',
      role: 'Ingénieur logiciel et Devops',
      image: '/images/team/Gracius.jpeg',
      description: 'Grace Yengo, ingénieure en développement logiciel et DevOps, passionnée par la conception de solutions performantes, sécurisées et évolutives. Mon expertise couvre à la fois le développement d’applications web et API, ainsi que l’automatisation du déploiement et de l’infrastructure grâce aux outils DevOps modernes.',
      linkedin: 'https://www.linkedin.com/in/grace-yengo-1430bb271/',
      portfolio: 'https://my-portfolios-five.vercel.app/'
    },
    {
      id: 14 ,
      name: 'Elie Izungu',
      role: '',
      image: '/images/team/eli.jpeg',
      description: '',
      linkedin: 'https://www.linkedin.com/in/elie-izungu-191a3a2b8',
      portfolio: ''
    },

    {
      id: 14 ,
      name: 'Blessing Mbaku',
      role: '',
      image: '/images/team/blessing.jpeg',
      description: '.',
      linkedin: 'https://www.linkedin.com/in/b%C3%A9n%C3%A9dicte-mbuku-528200378',
      portfolio: ''
    },

    {
      id: 14 ,
      name: 'Uriel Mbemba Lomame ',
      role: '',
      image: '/images/team/uriel.jpeg',
      description: '.',
      linkedin: 'https://www.linkedin.com/in/uriel-mbemba-b32745298/',
      portfolio: ''
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
              <div className={`member-image ${member.imageClass || ''}`}>
                <img src={member.image} alt={member.name} 
                />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
              <div className="member-links">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-link linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
                {member.portfolio && (
                  <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="member-link portfolio">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
