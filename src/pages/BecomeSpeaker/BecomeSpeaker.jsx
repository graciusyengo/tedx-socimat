import React, { useState } from 'react';
import './BecomeSpeaker.css';

const BecomeSpeaker = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    experience: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement du formulaire
    console.log(formData);
  };

  return (
    <>
      <div className="become-speaker">
        <div id="header-carousel" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="hero-slide hero-slide-become-speaker">
                <div className="carousel-content">
                  <div className="text-content">
                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">DEVENIR SPEAKER</h6>
                    <h1 className="text-white mb-4 animated slideInDown">Partagez votre vision<br />inspirez le monde</h1>
                  </div>
                  <div className="image-content">
                    <img src="/images/tedx1.png" alt="TEDx Logo" className="tedx-logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="speaker-requirements">
          <div className="container-speakers">
            <div className="row">
              <div className="col-lg-6">
                <h2 className='why-title'>Pourquoi devenir speaker ?</h2>
                <div className="requirements-list">
                  <div className="requirement-item">
                    <div className="icon">🌟</div>
                    <div className="text">
                      <h3>Impact Global</h3>
                      <p>Touchez un public international et inspirez des milliers de personnes</p>
                    </div>
                  </div>
                  <div className="requirement-item">
                    <div className="icon">💡</div>
                    <div className="text">
                      <h3>Idées Innovantes</h3>
                      <p>Partagez vos idées uniques et contribuez au changement</p>
                    </div>
                  </div>
                  <div className="requirement-item">
                    <div className="icon">🤝</div>
                    <div className="text">
                      <h3>Networking</h3>
                      <p>Connectez-vous avec des leaders et des innovateurs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 candidate-speaker">
                <div className="speaker-form">
                  <h2 ti>Candidature Speaker</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Votre nom complet"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Votre email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Votre téléphone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="topic"
                        placeholder="Sujet proposé"
                        value={formData.topic}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="experience"
                        placeholder="Votre expérience dans le domaine"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Pourquoi souhaitez-vous devenir speaker ?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                      Envoyer ma candidature
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BecomeSpeaker;
