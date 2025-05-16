import React, { useEffect } from 'react';
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

  useEffect(() => {
    const animateNumbers = () => {
      const numbers = document.querySelectorAll('.number-animation');
      numbers.forEach((number, index) => {
        const finalValue = parseInt(number.dataset.end);
        let currentValue = 0;
        const duration = 6000; // 6 seconds
        const increment = finalValue / (duration / 16); // 16ms per frame
        
        const updateValue = () => {
          if (currentValue < finalValue) {
            currentValue += increment;
            number.textContent = Math.round(currentValue).toLocaleString();
            requestAnimationFrame(updateValue);
          } else {
            number.textContent = finalValue.toLocaleString();
          }
        };
        
        // Start animation after a small delay
        setTimeout(() => {
          updateValue();
        }, index * 300); // Delay between each number animation
      });
    };

    // Start animation when component mounts
    animateNumbers();
  }, []);

  return (
    <section className="statistics">
      <div className="statistics-overlay">
        <div className="statistics-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                <div className="number-animation" data-end={stat.number}>
                  0
                </div>
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
