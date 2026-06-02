import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';

import 'react-toastify/dist/ReactToastify.css';
import './BecomeSpeaker.css';

const BecomeSpeaker = () => {

  // CONFIG EMAILJS
  const SERVICE_ID = 'service_p01zpxm';
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

  // STATE POUR LES FICHIERS
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  // INITIALISATION EMAILJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // HANDLE FILES CHANGE
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = [];
    const maxSize = 10 * 1024 * 1024; // 10 MB
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png', 'image/jpg', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'];

    for (let file of selectedFiles) {
      if (file.size > maxSize) {
        toast.error(`Le fichier ${file.name} dépasse 10 MB`);
        continue;
      }
      if (!allowedTypes.includes(file.type)) {
        toast.error(`Le fichier ${file.name} n'est pas au format accepté`);
        continue;
      }
      validFiles.push(file);
    }

    if (validFiles.length > 5) {
      toast.error('Vous ne pouvez importer que 5 fichiers maximum');
      setFiles(validFiles.slice(0, 5));
    } else {
      setFiles(validFiles);
    }
  };

  // CONVERSION FICHIERS EN BASE64
  const filesToBase64 = (files) => {
    return Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve({
            name: file.name,
            type: file.type,
            size: file.size,
            content: reader.result
          });
          reader.onerror = (error) => reject(error);
        });
      })
    );
  };

  // ENVOI FORMULAIRE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      // Convertir les fichiers en base64
      let filesData = [];
      if (files.length > 0) {
        filesData = await filesToBase64(files);
      }

      // Préparer le domaine personnalisé
      let domainValue = formData.domain;
      if (formData.domain === 'Autre' && formData.otherDomain) {
        domainValue = `Autre: ${formData.otherDomain}`;
      }

      // Préparer le coaching personnalisé
      let coachingValue = formData.coachingAvailable;
      if (formData.coachingAvailable === 'Autre' && formData.otherCoaching) {
        coachingValue = `Autre: ${formData.otherCoaching}`;
      }

      // Préparer les règles personnalisées
      let rulesValue = formData.acceptTEDxRules;
      if (formData.acceptTEDxRules === 'Autre' && formData.otherRules) {
        rulesValue = `Autre: ${formData.otherRules}`;
      }

      const templateParams = {
        fullName: formData.fullName,
        city: formData.city,
        email: formData.email,
        phone: formData.phone,
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
        files: JSON.stringify(filesData),
        filesCount: files.length,
        submissionDate: new Date().toLocaleString('fr-FR')
      };

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('SUCCESS!', response);

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
      setFiles([]);

      // Reset file input
      const fileInput = document.getElementById('cv-portfolio');
      if (fileInput) fileInput.value = '';

      // TOAST SUCCESS
      toast.success(
        'Merci pour votre candidature ! Nous vous contacterons bientôt.',
        {
          icon: <HiCheckCircle className="text-green-500 text-2xl" />,
          position: "top-center",
          autoClose: 5000,
        }
      );

    } catch (error) {
      console.error('FAILED...', error);
      toast.error(
        "Une erreur est survenue lors de l'envoi de votre candidature.",
        {
          icon: <HiXCircle className="text-red-500 text-2xl" />,
          position: "top-center",
          autoClose: 5000,
        }
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="become-speaker">
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />

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
                    {/* 1. Nom Complet */}
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

                    {/* 2. Ville de résidence */}
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

                    {/* 3. Email */}
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

                    {/* 4. Téléphone WhatsApp */}
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

                    {/* 5. LinkedIn / Site / Portfolio */}
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

                    {/* 6. Sujet exact */}
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

                    {/* 7. Importance du sujet */}
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

                    {/* 8. Domaine */}
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

                    {/* 9. Expérience en prise de parole */}
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

                    {/* 10. Disponibilité à Kinshasa */}
                    <div className="form-group">
                      <label>Serez-vous disponible le jour J à Kinshasa ? *</label>
                      <select name="availableInKinshasa" value={formData.availableInKinshasa} onChange={handleChange} required>
                        <option value="">Sélectionnez une réponse</option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                      </select>
                    </div>

                    {/* 11. Pourquoi TEDxSocimat */}
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

                    {/* 12. Message à retenir */}
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

                    {/* 13. Coaching */}
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

                    {/* 14. Acceptation règles TEDx */}
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

                    {/* 15. CV / Portfolio */}
                    <div className="form-group">
                      <label>Veuillez soumettre votre CV ou Portfolio *</label>
                      <input
                        type="file"
                        id="cv-portfolio"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.ppt,.pptx"
                        onChange={handleFileChange}
                        multiple
                      />
                      <small className="form-text text-muted">
                        Importez jusqu'à 5 fichiers compatibles : PDF, document, image ou presentation. 10 MB max. par fichier.
                      </small>
                      {files.length > 0 && (
                        <div className="files-list mt-2">
                          <strong>Fichiers sélectionnés ({files.length}/5) :</strong>
                          <ul>
                            {files.map((file, index) => (
                              <li key={index}>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <button type="submit" className="submit-btn" disabled={uploading}>
                      {uploading ? 'Envoi en cours...' : 'Envoyer ma candidature'}
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