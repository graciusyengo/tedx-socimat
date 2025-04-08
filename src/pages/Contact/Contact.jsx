import React, { useState } from 'react';
import './Contact.css';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    // Logique d'envoi du formulaire à implémenter
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: "Notre Adresse",
      content: "123 Avenue Example, Ville, Pays"
    },
    {
      icon: HiPhone,
      title: "Téléphone",
      content: "+1 234 567 890"
    },
    {
      icon: HiMail,
      title: "Email",
      content: "contact@tedxsocimat.com"
    }
  ];

  const socialLinks = [
    { icon: FaFacebook, url: "#", label: "Facebook" },
    { icon: FaTwitter, url: "#", label: "Twitter" },
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
    { icon: FaInstagram, url: "#", label: "Instagram" }
  ];

  return (
    <div className="contact">
      <div id="header-carousel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="hero-slide hero-slide-contact">
              <div className="carousel-content">
                <div className="text-content">
                  <h6 className="text-white text-uppercase mb-3 animated slideInDown">CONTACTEZ-NOUS</h6>
                  <h1 className="text-white mb-4 animated slideInDown">Parlons de vos<br />idées innovantes</h1>
                </div>
                <div className="image-content">
                  <img src="/images/tedx1.png" alt="TEDx Logo" className="tedx-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className=".container-contact">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Restons en Contact</h2>
              <p>
                Nous sommes là pour répondre à toutes vos questions et discuter de vos idées innovantes.
                N'hésitez pas à nous contacter par le moyen qui vous convient le mieux.
              </p>
              
              <div className="info-items">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <div className="icon">
                      <info.icon />
                    </div>
                    <div className="text">
                      <h3>{info.title}</h3>
                      <p>{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="social-icons social-icons-contact">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
             
            </div>

            <div className="contact-form">
              <h2>Envoyez-nous un Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre Nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Sujet"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Votre Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647216994976!5m2!1sfr!2sfr"
            allowFullScreen=""
            loading="lazy"
            title="Notre localisation"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
