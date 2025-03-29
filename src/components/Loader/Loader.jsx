import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Durée du loader : 2.5 secondes

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="tedx-text">
          <span className="ted">TEDx</span>
        </div>
        <div className="socimat-text">Socimat</div>
        <div className="spinner">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
