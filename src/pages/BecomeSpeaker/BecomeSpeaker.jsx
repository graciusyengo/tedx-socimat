import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BecomeSpeaker.css';

const BecomeSpeaker = () => {
  // CONFIG EMAILJS
  const SERVICE_ID = 'service_wantq4b';
  const TEMPLATE_ID = 'template_23sd8aq';
  const PUBLIC_KEY = 'Kr2nRKP_ZL81x2ck5';

  // STATE FORMULAIRE
  const [formData, setFormData] = useState({
    fullName: '',
    city: '',
    email: '',
    phone: '',
    linkedin: '',
    subject: '',
    importance: '',
    domain: '',
    publicSpeaking: '',
    availableInKinshasa: '',
    whyTEDxSocimat: '',
    publicTakeaway: '',
    coachingAvailable: '',
    acceptTEDxRules: '',
    otherDomain: '',
    otherCoaching: '',
    otherRules: ''
  });

  const [uploading, setUploading] = useState(false);

  // Générer un ID unique pour la candidature
  const generateCandidateId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    const name = formData.fullName?.replace(/\s/g, '').substring(0, 5) || 'CANDIDAT';
    return `TEDX-${timestamp}-${random}-${name.toUpperCase()}`;
  };

  // INITIALISATION EMAILJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // ENVOI FORMULAIRE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const candidateId = generateCandidateId();

      let domainValue = formData.domain;
      if (formData.domain === 'Autre' && formData.otherDomain) {
        domainValue = `Autre: ${formData.otherDomain}`;
      }

      let coachingValue = formData.coachingAvailable;
      if (formData.coachingAvailable === 'Autre' && formData.otherCoaching) {
        coachingValue = `Autre: ${formData.otherCoaching}`;
      }

      let rulesValue = formData.acceptTEDxRules;
      if (formData.acceptTEDxRules === 'Autre' && formData.otherRules) {
        rulesValue = `Autre: ${formData.otherRules}`;
      }

      const templateParams = {
        candidateId: candidateId,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        linkedin: formData.linkedin,
        subject: formData.subject,
        importance: formData.importance,
        domain: domainValue,
        publicSpeaking: formData.publicSpeaking,
        availableInKinshasa: formData.availableInKinshasa,
        whyTEDxSocimat: formData.whyTEDxSocimat,
        publicTakeaway: formData.publicTakeaway,
        coachingAvailable: coachingValue,
        acceptTEDxRules: rulesValue,
        submissionDate: new Date().toLocaleString('fr-FR')
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
// Dans handleSubmit, remplacer toast.success par :

toast.success(
  <div className="toast-success-content">
    <div className="toast-success-header">
      <div className="toast-success-icon">✓</div>
      <h3>Candidature envoyée</h3>
      <button 
        className="toast-success-close"
        onClick={() => toast.dismiss()}
      >
        ✕
      </button>
    </div>

  

    <div className="toast-success-email-card">
      <div className="toast-email-label">
        <span>📧</span>
        <span>ENVOYER VOS DOCUMENTS</span>
      </div>
      <div className="toast-email-address">
       bulangamelissa@gmail.com
      </div>
      <div className="toast-subject-line">
        Objet : <strong>{candidateId}</strong>
      </div>
    </div>

    <div className="toast-success-note">
      <span>💡</span>
      <span>Conservez cet identifiant pour le suivi</span>
    </div>
  </div>,
  {
    icon: false,
    position: "top-center",
    autoClose: 15000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    className: 'toast-success-card',
    bodyClassName: 'toast-success-body',
  }
);



      // RESET FORM
      setFormData({
        fullName: '',
        city: '',
        email: '',
        phone: '',
        linkedin: '',
        subject: '',
        importance: '',
        domain: '',
        publicSpeaking: '',
        availableInKinshasa: '',
        whyTEDxSocimat: '',
        publicTakeaway: '',
        coachingAvailable: '',
        acceptTEDxRules: '',
        otherDomain: '',
        otherCoaching: '',
        otherRules: ''
      });

    } catch (error) {
      console.error('Erreur:', error);
      
      // AFFICHER POPUP ÉLÉGANT D'ERREUR
      toast.error(
        <div className="toast-error-content">
          <div className="toast-error-icon">⚠️</div>
          <div className="toast-error-text">
            <strong>Erreur d'envoi</strong>
            <p>Une erreur technique est survenue. Veuillez réessayer ou nous contacter directement.</p>
          </div>
        </div>,
        {
          icon: false,
          position: "top-center",
          autoClose: 5000,
          className: 'toast-error-card',
        }
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="become-speaker">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeButton={true}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={true}
      />

      <div className="become-speaker-container">
        {/* HERO SECTION */}
        <div id="header-carousel" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="hero-slide hero-slide-become-speaker">
                <div className="carousel-content">
                  <div className="text-content">
                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                      DEVENIR SPEAKER
                    </h6>
                    <h1 className="text-white mb-4 animated slideInDown">
                      Partagez votre vision
                      <br />
                      inspirez le monde
                    </h1>
                  </div>
                  <div className="image-content">
                    <img src="/images/tedx1.png" alt="TEDx Logo" className="tedx-logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION FORMULAIRE */}
        <section className="speaker-requirements">
          <div className="container-speakers">
            <div className="row">
              {/* LEFT CONTENT */}
              <div className="col-lg-5">
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

              {/* RIGHT FORM */}
              <div className="col-lg-7 candidate-speaker">
                <div className="speaker-form">
                  <h2>Candidature Speaker TEDxSocimat</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Nom Complet *</label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Votre nom complet"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Ville de résidence *</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Votre ville de résidence"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Adresse email *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Numéro de téléphone (WhatsApp) *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+243 XXX XXX XXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Lien vers votre profil LinkedIn / Site / Portfolio *</label>
                      <input
                        type="url"
                        name="linkedin"
                        placeholder="https://linkedin.com/in/votre-profil"
                        value={formData.linkedin}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Sujet exact sur lequel vous voulez intervenir *</label>
                      <textarea
                        name="subject"
                        placeholder="Décrivez précisément le sujet de votre talk..."
                        value={formData.subject}
                        onChange={handleChange}
                        rows="3"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>En 3 lignes, expliquez pourquoi ce sujet est important maintenant *</label>
                      <textarea
                        name="importance"
                        placeholder="Pourquoi ce sujet est crucial aujourd'hui..."
                        value={formData.importance}
                        onChange={handleChange}
                        rows="3"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>À quel domaine appartient votre talk ? *</label>
                      <select name="domain" value={formData.domain} onChange={handleChange} required>
                        <option value="">Sélectionnez un domaine</option>
                        <option value="La Technologie">La Technologie</option>
                        <option value="La Finance">La Finance</option>
                        <option value="L'Entrepreneuriat">L'Entrepreneuriat</option>
                        <option value="L'Art et la Culture">L'Art et la Culture</option>
                        <option value="La Santé">La Santé</option>
                        <option value="L'Education">L'Education</option>
                        <option value="Le Marketing">Le Marketing</option>
                        <option value="Autre">Autre</option>
                      </select>
                      {formData.domain === 'Autre' && (
                        <input
                          type="text"
                          name="otherDomain"
                          placeholder="Précisez votre domaine"
                          value={formData.otherDomain}
                          onChange={handleChange}
                          className="mt-2"
                          required
                        />
                      )}
                    </div>

                    <div className="form-group">
                      <label>Avez-vous déjà pris la parole en public ? Si oui, où et devant combien de personnes ? *</label>
                      <textarea
                        name="publicSpeaking"
                        placeholder="Décrivez votre expérience..."
                        value={formData.publicSpeaking}
                        onChange={handleChange}
                        rows="3"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Serez-vous disponible le jour J à Kinshasa ? *</label>
                      <select name="availableInKinshasa" value={formData.availableInKinshasa} onChange={handleChange} required>
                        <option value="">Sélectionnez une réponse</option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Pourquoi voulez-vous monter sur la scène du TEDxSocimat en particulier ? *</label>
                      <textarea
                        name="whyTEDxSocimat"
                        placeholder="Expliquez votre motivation..."
                        value={formData.whyTEDxSocimat}
                        onChange={handleChange}
                        rows="3"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Que retiendra le public après votre intervention ? *</label>
                      <textarea
                        name="publicTakeaway"
                        placeholder="Quel est le message clé que vous voulez transmettre ?"
                        value={formData.publicTakeaway}
                        onChange={handleChange}
                        rows="3"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Êtes-vous disponible pour un coaching ou un accompagnement si votre candidature est retenue ? *</label>
                      <select name="coachingAvailable" value={formData.coachingAvailable} onChange={handleChange} required>
                        <option value="">Sélectionnez une réponse</option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                        <option value="Autre">Autre</option>
                      </select>
                      {formData.coachingAvailable === 'Autre' && (
                        <input
                          type="text"
                          name="otherCoaching"
                          placeholder="Précisez"
                          value={formData.otherCoaching}
                          onChange={handleChange}
                          className="mt-2"
                          required
                        />
                      )}
                    </div>

                    <div className="form-group">
                      <label>Êtes-vous prêt à accepter les normes TEDx : formats, durées et lignes éditoriales ? *</label>
                      <select name="acceptTEDxRules" value={formData.acceptTEDxRules} onChange={handleChange} required>
                        <option value="">Sélectionnez une réponse</option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                        <option value="Autre">Autre</option>
                      </select>
                      {formData.acceptTEDxRules === 'Autre' && (
                        <input
                          type="text"
                          name="otherRules"
                          placeholder="Précisez"
                          value={formData.otherRules}
                          onChange={handleChange}
                          className="mt-2"
                          required
                        />
                      )}
                    </div>

                    <div className="form-group">
                      <label>CV / Portfolio *</label>
                      <div className="cv-message" style={{ 
                        background: '#f0f7ff', 
                        padding: '15px', 
                        borderRadius: '8px',
                        borderLeft: '4px solid #e62b1e'
                      }}>
                        <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', color: '#0B2154' }}>
                          📄 Comment soumettre votre CV et portfolio :
                        </p>
                        <p style={{ margin: '0 0 5px 0' }}>1️⃣ Remplissez et envoyez ce formulaire</p>
                        <p style={{ margin: '0 0 5px 0' }}>2️⃣ Vous recevrez un <strong>numéro unique</strong> après envoi</p>
                        <p style={{ margin: '0 0 5px 0' }}>3️⃣ Envoyez votre CV et portfolio à : <strong>candidature@tedxsocimat.com</strong></p>
                        <p style={{ margin: '0 0 5px 0' }}>4️⃣ Utilisez ce numéro comme <strong>OBJET</strong> de votre email</p>
                        <p style={{ margin: '10px 0 0 0', fontSize: '12px', color: '#666' }}>
                          ⚠️ Les candidatures sans numéro de référence ne pourront pas être traitées
                        </p>
                      </div>
                    </div>

                    <button type="submit" className="submit-btn" disabled={uploading}>
                      {uploading ? 'Envoi en cours...' : '📤 Envoyer ma candidature'}
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