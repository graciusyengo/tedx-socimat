import React from 'react';
import { FaLightbulb, FaHandshakeSimple, FaNetworkWired, FaMicrophone } from 'react-icons/fa6';
import './WhyAttend.css';

const WhyAttend = () => {
  const reasons = [
    {
      icon: <FaLightbulb />,
      title: "Idées Innovantes",
      description: "Découvrez des perspectives uniques et des idées novatrices qui peuvent transformer notre façon de voir le monde."
    },
    {
      icon: <FaHandshakeSimple />,
      title: "Networking",
      description: "Rencontrez des personnes passionnées et établissez des connexions précieuses avec des leaders et innovateurs locaux."
    },
    {
      icon: <FaNetworkWired />,
      title: "Impact Local",
      description: "Participez à un événement qui vise à avoir un impact positif sur notre communauté et à inspirer le changement."
    },
    {
      icon: <FaMicrophone />,
      title: "Expérience Unique",
      description: "Vivez l'expérience TEDx en direct avec des talks inspirants dans une ambiance électrisante."
    }
  ];

  return (
    <section className="why-attend">
      <div className="why-attend-container">
        <h2 className="section-title">Pourquoi Participer ?</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">
                {reason.icon}
              </div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
