import React from 'react';
import './Schedule.css';

const Schedule = () => {
  const timelineEvents = [
    {
      time: "08:30 - 09:30",
      title: "Accueil & Enregistrement",
      description: "Accueil des participants et remise des badges"
    },
    {
      time: "09:30 - 10:00",
      title: "Ouverture Officielle",
      description: "Mot de bienvenue et présentation de la journée"
    },
    {
      time: "10:00 - 11:30",
      title: "Session 1: Innovation",
      description: "Première série de talks inspirants"
    },
    {
      time: "11:30 - 12:00",
      title: "Pause Networking",
      description: "Échanges et discussions autour d'un café"
    },
    {
      time: "12:00 - 13:30",
      title: "Session 2: Impact Social",
      description: "Deuxième série de talks transformateurs"
    },
    {
      time: "13:30 - 14:30",
      title: "Pause Déjeuner",
      description: "Moment de partage et de networking"
    },
    {
      time: "14:30 - 16:00",
      title: "Session 3: Avenir",
      description: "Dernière série de talks visionnaires"
    },
    {
      time: "16:00 - 17:00",
      title: "Table Ronde & Clôture",
      description: "Discussion interactive et conclusion de l'événement"
    }
  ];

  return (
    <section className="schedule">
      <div className="schedule-container">
        <h2 className="section-title">Programme de la Journée</h2>
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="time-block">{event.time}</div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
