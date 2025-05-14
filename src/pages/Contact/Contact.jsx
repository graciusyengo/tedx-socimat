import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import { HiLocationMarker, HiPhone, HiMail, HiCheckCircle } from 'react-icons/hi';
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

    const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Remplacez ces valeurs par vos propres identifiants EmailJS
      const serviceId = 'service_plgawjv';
      const templateId = 'template_t76k2rs'; // Remplacez par votre template ID
      const publicKey = 'O_mGVzNR9LPqMfLeL'; // Remplacez par votre clé publique EmailJS

      const currentTime = new Date().toLocaleString();
      
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: currentTime
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Afficher un message de succès
      toast.success('Message envoyé avec succès !', {
        icon: <HiCheckCircle className="text-green-500 text-2xl" />,
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      toast.error('Une erreur est survenue lors de l\'envoi du message.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
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
    <>
      <ToastContainer />
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
              <form ref={form} onSubmit={handleSubmit} className="contact-form">
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
                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
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
    </>
  );
};

export default Contact;
