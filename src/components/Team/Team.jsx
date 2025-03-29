import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Caleb Nday',
      role: 'CO-Organisateur TEDxSocimat',
      image: '/images/team/caleb-nday.jpg',
      description: 'TEDxSocimat est une plateforme unique où idées et innovation se rencontrent pour inspirer et rayonner l\'avenir. Je suis fier de contribuer à cet événement qui connecte et motive notre communauté.'
    },
    {
      name: 'Aphia Mbumu',
      role: 'Marketing et sponsoring',
      image: '/images/team/aphia-mbumu.jpg',
      description: 'TEDxSocimat est une opportunité unique de connecter marques et idées inspirantes. En tant que chargé du marketing et du sponsoring, je suis fier de contribuer à cet événement qui favorise l\'innovation et le changement.'
    },
    {
      name: 'Josias Tshunza',
      role: 'Chargé de communication',
      image: '/images/team/josias-tshunza.jpg',
      description: 'En tant que chargé de communication, je suis ravi de diffuser les idées puissantes de TEDxSocimat. Cet événement est une plateforme où l\'innovation rencontre l\'inspiration, et je suis fier de faire rayonner ces messages au-delà de notre communauté.'
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
