import React from 'react';
import './Schedule.css';
import { BiTime } from 'react-icons/bi';
import { FaMicrophone, FaCoffee, FaUsers } from 'react-icons/fa';

const Schedule = () => {
  const timelineEvents = [
    {
      time: "08:00 - 09:00",
      title: "Accueil & Enregistrement",
      description: "Accueil des participants et remise des badges",
      icon: FaUsers
    },
    {
      time: "09:00 - 10:30",
      title: "Session du Matin",
      description: "Présentations inspirantes sur l'innovation",
      icon: FaMicrophone
    },
    {
      time: "10:30 - 11:00",
      title: "Pause Café",
      description: "Networking et rafraîchissements",
      icon: FaCoffee
    },
    {
      time: "11:00 - 12:30",
      title: "Session Principale",
      description: "Conférences des speakers vedettes",
      icon: FaMicrophone
    },
    {
      time: "12:30 - 14:00",
      title: "Pause & Networking",
      description: "Repas et échanges entre participants",
      icon: FaUsers
    },
    {
      time: "14:00 - 16:00",
      title: "Sessions de l'Après-midi",
      description: "Discussions et présentations innovantes",
      icon: FaMicrophone
    }
  ];

  return (
    <section className="schedule">
      <div className="schedule-container">
        <h2 className="section-title">Programme de la Journée</h2>
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="time-block">
                <BiTime className="clock-icon" />
                <span>{event.time}</span>
              </div>
              <div className="timeline-content">
                <div className="event-icon">
                  <event.icon />
                </div>
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
