import React from 'react';
import './SpeakerModal.css';

const SpeakerModal = ({ speaker, onClose }) => {
  if (!speaker) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="modal-image">
          <img src={speaker.image} alt={speaker.name} />
        </div>
        <div className="modal-info">
          <h2>{speaker.name}</h2>
          <h4>{speaker.title}</h4>
          {speaker.slogan && <p className="modal-slogan">{speaker.slogan}</p>}
          <p className="modal-bio">{speaker.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;
