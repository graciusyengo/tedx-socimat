import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './EventInfo.css';

const EventInfo = () => {
  return (
    <section className="event-info">
      <div className="event-info-container">
        <h2>Quand et où ?</h2>
        <div className="info-cards">
          <div className="info-card">
            <div className="icon-wrapper">
              <FaCalendarAlt className="info-icon" />
            </div>
            <div className="info-content">
              <h3>Date de l'Événement</h3>
              {/* <p>Samedi 20 Avril 2024</p>
              <p className="time">De 9h00 à 17h00</p> */}
            </div>
          </div>
          <div className="info-card">
            <div className="icon-wrapper">
              <FaMapMarkerAlt className="info-icon" />
            </div>
            <div className="info-content">
              <h3>Lieu</h3>
              {/* <p>Salle de Conférence SOCIMAT</p>
              <p className="address">Avenue du Commerce, Kinshasa</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
