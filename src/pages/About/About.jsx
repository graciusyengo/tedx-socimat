import React, { useState } from 'react';

import './About.css';
import { HiGlobe, HiLightBulb, HiMicrophone, HiUsers } from 'react-icons/hi';
import Funder from '../../components/Funder/Funder'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const About = () => {


  const videos = [
    {
      title: "Comment passer de l’ordinaire à l’extraordinaire ? | Marion Chatel-Chaix | TEDxRennes",
      videoId: "KOSMlgae0l4",
    },
    {
      title: "Cybersécurité : Faites votre choix en conscience | Yann Allain | TEDxRennes",
      videoId: "r5OEIY7oz6I",
    },
    {
      title: "Les 6 règles pour avoir confiance en soi | Sally | TEDxBrussels",
      videoId: "2E_Kx-MBlEA",
    },
    {
      title: "C'etait pas evident | Salif TRAORE | TEDxGrandBassam",
      videoId: "V0mIPWviaak",
    },
    {
      title: "Rêvez grand, préparez-vous à le réaliser | Patricia ZOUNDI YAO | TEDxWassakara",
      videoId: "cJOFj-jgIqQ",
    },
  ];


  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleClosePopup = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      setSelectedVideo(null);
    }
  };

  return (
    <div className="about">
      <section className="hero-section">
        <div className="hero-slide hero-slide-about">
          <div className="carousel-content">
            <div className="text-content">
              <h6 className="text-white text-uppercase mb-3 animated slideInDown">À PROPOS</h6>
              <h1 className="text-white mb-4 animated slideInDown">Découvrez TEDx<br />Socimat</h1>
            </div>
            {/* <div className="image-content">
              <img src="/images/tedx1.png" alt="TEDx Logo" className="tedx-logo" />
            </div> */}
          </div>
        </div>
      </section>
      <Funder />

      <section className="ted-talks">
        <h2 className="section-title">TED Talks Inspirants</h2>


        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}




          autoplay={{
            delay: 3000, // 3 secondes entre chaque slide
            disableOnInteraction: false, // continue même si on interagit avec le slide
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"


          breakpoints={{
            0:{
              slidesPerView: 1, // Tablette et Desktop : 3 slides visibles

            },

            768: {
              slidesPerView: 3, // Tablette et Desktop : 3 slides visibles
            },
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="video-thumbnail">
                <div
                  className="clickable-overlay"
                  onClick={() => setSelectedVideo(video.videoId)}
                ></div>
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{video.title}</p>
              </div>

            </SwiperSlide>
          ))}

        </Swiper>

        {selectedVideo && (
          <div className="popup-overlay" onClick={handleClosePopup}>
            <div className="popup-content">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Selected Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

      </section>

      <section className="become-about">
        <div className="container-become-about">
          <div className="cta-content">
            <h2>Devenez Sponsor</h2>
            <p>
              Rejoignez-nous dans cette aventure exceptionnelle et associez votre marque
              à l'innovation et aux idées qui changent le monde.
            </p>
            <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">
    Contactez-nous
  </Link>
              <a href="/document/TEDxSocimat%20.pdf.pdf" download="TEDxSocimat .pdf.pdf" rel="noopener noreferrer" className="cta-button secondary">
                Télécharger la Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
