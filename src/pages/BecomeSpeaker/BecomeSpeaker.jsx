import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import './BecomeSpeaker.css';

const BecomeSpeaker = () => {
  // EmailJS configuration
  const SERVICE_ID = 'service_77gerzg';
  const TEMPLATE_ID = 'service_gis4vea';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    experience: '',
    why: ''
  });

  useEffect(() => {
    // Initialize EmailJS
    try {
      emailjs.init("O_mGVzNR9LPqMfLeL");
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Error initializing EmailJS:', error);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    try {
      const currentTime = new Date().toLocaleString();
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        experience: formData.experience,
        why: formData.why,
        time: currentTime
      };

      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, "O_mGVzNR9LPqMfLeL");

       // Réinitialiser le formulaire
       setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        experience: '',
        why: '',
        
      });

      console.log('Email sent successfully:', result);
      toast.success('Merci pour votre demande ! Nous vous contacterons bientôt.', {
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
      console.error('Error sending email:', error);
      toast.error("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.", {
        icon: <HiXCircle className="text-red-500 text-2xl" />,
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

    }
  };

  

  

  return (
    <div className="become-speaker">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="become-speaker-container">
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
                  <h2>Candidature Speaker</h2>
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
                        name="subject"
                        placeholder="Sujet proposé"
                        value={formData.subject}
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
                        name="why"
                        placeholder="Pourquoi souhaitez-vous devenir speaker ?"
                        value={formData.why}
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
    </div>
  );
};

export default BecomeSpeaker;
