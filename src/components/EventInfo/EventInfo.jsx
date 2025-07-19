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
              <p>01 Novembre 2025</p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon-wrapper">
              <FaMapMarkerAlt className="info-icon" />
            </div>
            <div className="info-content">
              <h3>Lieu</h3>
              <p className="suspense-text">Silikin Village(Socimat)</p>
              <div className="suspense-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
