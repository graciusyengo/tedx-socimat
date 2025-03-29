import React from 'react';
import CountUp from 'react-countup';
import { FaCalendarAlt, FaGlobeAmericas, FaUsers, FaEye } from 'react-icons/fa';
import './Statistics.css';

const Statistics = () => {
  const stats = [
    {
      number: 13000,
      label: 'Événements TEDx organisés',
      icon: <FaCalendarAlt />
    },
    {
      number: 150,
      label: 'Pays',
      icon: <FaGlobeAmericas />
    },
    {
      number: 50000000,
      label: 'Participants TEDx',
      icon: <FaUsers />
    },
    {
      number: 800000000,
      label: 'Vues TEDx',
      icon: <FaEye />
    }
  ];

  return (
    <section className="statistics">
      <div className="statistics-overlay">
        <div className="statistics-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                <CountUp
                  end={stat.number}
                  duration={2.5}
                  separator=","
                  useEasing={true}
                  useGrouping={true}
                />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
