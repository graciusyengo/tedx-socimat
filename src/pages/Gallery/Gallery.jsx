import React, { useState } from 'react';
import './Gallery.css';
import { HiX } from 'react-icons/hi';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Tableau des images du dossier
  const galleryImages = [
    'DIEZ EVENTS TED X-141.jpg',
    'DIEZ EVENTS TED X-148.jpg',
    'DIEZ EVENTS TED X-15.jpg',
    'DIEZ EVENTS TED X-154.jpg',
    'DIEZ EVENTS TED X-157.jpg',
    'DIEZ EVENTS TED X-172.jpg',
    'DIEZ EVENTS TED X-177.jpg',
    'DIEZ EVENTS TED X-18.jpg',
    'DIEZ EVENTS TED X-21.jpg',
    'DIEZ EVENTS TED X-218.jpg',
    'DIEZ EVENTS TED X-219.jpg',
    'DIEZ EVENTS TED X-22.jpg',
    'DIEZ EVENTS TED X-220.jpg',
    'DIEZ EVENTS TED X-221.jpg',
    'DIEZ EVENTS TED X-222.jpg',
    'DIEZ EVENTS TED X-224.jpg',
    'DIEZ EVENTS TED X-225.jpg',
    'DIEZ EVENTS TED X-238.jpg',
    'DIEZ EVENTS TED X-246.jpg',
    'DIEZ EVENTS TED X-249.jpg',
    'DIEZ EVENTS TED X-252.jpg',
    'DIEZ EVENTS TED X-253.jpg',
    'DIEZ EVENTS TED X-256.jpg',
    'DIEZ EVENTS TED X-258.jpg',
    'DIEZ EVENTS TED X-265.jpg',
    'DIEZ EVENTS TED X-266.jpg',
    'DIEZ EVENTS TED X-273.jpg',
    'DIEZ EVENTS TED X-275.jpg',
    'DIEZ EVENTS TED X-281.jpg',
    'DIEZ EVENTS TED X-306.jpg',
    'DIEZ EVENTS TED X-309.jpg',
    'DIEZ EVENTS TED X-31.jpg',
    'DIEZ EVENTS TED X-310.jpg',
    'DIEZ EVENTS TED X-318.jpg',
    'DIEZ EVENTS TED X-320.jpg',
    'DIEZ EVENTS TED X-321.jpg',
    'DIEZ EVENTS TED X-323.jpg',
    'DIEZ EVENTS TED X-324.jpg',
    'DIEZ EVENTS TED X-333.jpg',
    'DIEZ EVENTS TED X-334.jpg',
    'DIEZ EVENTS TED X-339.jpg',
    'DIEZ EVENTS TED X-340.jpg',
    'DIEZ EVENTS TED X-341.jpg',
    'DIEZ EVENTS TED X-345.jpg',
    'DIEZ EVENTS TED X-346.jpg',
    'DIEZ EVENTS TED X-350.jpg',
    'DIEZ EVENTS TED X-351.jpg',
    'DIEZ EVENTS TED X-352.jpg',
    'DIEZ EVENTS TED X-353.jpg',
    'DIEZ EVENTS TED X-354.jpg',
    'DIEZ EVENTS TED X-355.jpg',
    'DIEZ EVENTS TED X-356.jpg',
    'DIEZ EVENTS TED X-357.jpg',
    'DIEZ EVENTS TED X-358.jpg',
    'DIEZ EVENTS TED X-359.jpg',
    'DIEZ EVENTS TED X-361.jpg',
    'DIEZ EVENTS TED X-363.jpg',
    'DIEZ EVENTS TED X-371.jpg',
    'DIEZ EVENTS TED X-372.jpg',
    'DIEZ EVENTS TED X-373.jpg',
    'DIEZ EVENTS TED X-396.jpg',
    'DIEZ EVENTS TED X-397.jpg',
    'DIEZ EVENTS TED X-398.jpg',
    'DIEZ EVENTS TED X-404.jpg',
    'DIEZ EVENTS TED X-407.jpg',
    'DIEZ EVENTS TED X-408.jpg',
    'DIEZ EVENTS TED X-41.jpg',
    'DIEZ EVENTS TED X-413.jpg',
    'DIEZ EVENTS TED X-416.jpg',
    'DIEZ EVENTS TED X-417.jpg',
    'DIEZ EVENTS TED X-418.jpg',
    'DIEZ EVENTS TED X-419.jpg',
    'DIEZ EVENTS TED X-420.jpg',
    'DIEZ EVENTS TED X-421.jpg',
    'DIEZ EVENTS TED X-422.jpg',
    'DIEZ EVENTS TED X-423.jpg',
    'DIEZ EVENTS TED X-424.jpg',
    'DIEZ EVENTS TED X-425.jpg',
    'DIEZ EVENTS TED X-426.jpg',
    'DIEZ EVENTS TED X-427.jpg',
    'DIEZ EVENTS TED X-428.jpg',
    'DIEZ EVENTS TED X-429.jpg',
    'DIEZ EVENTS TED X-430.jpg',
    'DIEZ EVENTS TED X-431.jpg',
    'DIEZ EVENTS TED X-432.jpg',
    'DIEZ EVENTS TED X-433.jpg',
    'DIEZ EVENTS TED X-434.jpg',
    'DIEZ EVENTS TED X-435.jpg',
    'DIEZ EVENTS TED X-436.jpg',
    'DIEZ EVENTS TED X-45.jpg',
    'DIEZ EVENTS TED X-48.jpg',
    'DIEZ EVENTS TED X-52.jpg',
    'DIEZ EVENTS TED X-57.jpg',
    'DIEZ EVENTS TED X-6.jpg',
    'DIEZ EVENTS TED X-60.jpg',
    'DIEZ EVENTS TED X-63.jpg',
    'DIEZ EVENTS TED X-7.jpg',
    'DIEZ EVENTS TED X.jpg',
    'DIEZ EVENTS TED-104.jpg',
    'DIEZ EVENTS TED-105.jpg',
    'DIEZ EVENTS TED-11.jpg',
    'DIEZ EVENTS TED-111.jpg',
    'DIEZ EVENTS TED-117.jpg',
    'DIEZ EVENTS TED-124.jpg',
    'DIEZ EVENTS TED-132.jpg',
    'DIEZ EVENTS TED-142.jpg',
    'DIEZ EVENTS TED-145.jpg',
    'DIEZ EVENTS TED-158.jpg',
    'DIEZ EVENTS TED-160.jpg',
    'DIEZ EVENTS TED-161.jpg',
    'DIEZ EVENTS TED-164.jpg',
    'DIEZ EVENTS TED-168.jpg',
    'DIEZ EVENTS TED-169.jpg',
    'DIEZ EVENTS TED-184.jpg',
    'DIEZ EVENTS TED-185.jpg',
    'DIEZ EVENTS TED-196.jpg',
    'DIEZ EVENTS TED-2.jpg',
    'DIEZ EVENTS TED-204.jpg',
    'DIEZ EVENTS TED-206.jpg',
    'DIEZ EVENTS TED-218.jpg',
    'DIEZ EVENTS TED-219.jpg',
    'DIEZ EVENTS TED-222.jpg',
    'DIEZ EVENTS TED-223.jpg',
    'DIEZ EVENTS TED-224.jpg',
    'DIEZ EVENTS TED-225.jpg',
    'DIEZ EVENTS TED-226.jpg',
    'DIEZ EVENTS TED-227.jpg',
    'DIEZ EVENTS TED-247.jpg',
    'DIEZ EVENTS TED-248.jpg',
    'DIEZ EVENTS TED-249.jpg',
    'DIEZ EVENTS TED-252.jpg',
    'DIEZ EVENTS TED-29.jpg',
    'DIEZ EVENTS TED-3.jpg',
    'DIEZ EVENTS TED-30.jpg',
    'DIEZ EVENTS TED-33.jpg',
    'DIEZ EVENTS TED-45.jpg',
    'DIEZ EVENTS TED-46.jpg',
    'DIEZ EVENTS TED-57.jpg',
    'DIEZ EVENTS TED-58.jpg',
    'DIEZ EVENTS TED-69.jpg',
    'DIEZ EVENTS TED-72.jpg',
    'DIEZ EVENTS TED-73.jpg',
    'DIEZ EVENTS TED-8.jpg',
    'DIEZ EVENTS TED.jpg',
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    const currentIndex = galleryImages.indexOf(selectedImage);
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = galleryImages.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  return (
    <div className="gallery">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-slide hero-slide-gallery">
          <div className="carousel-content">
            <div className="text-content">
              <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                GALERIE
              </h6>
              <h1 className="text-white mb-4 animated slideInDown">
                Revivez les moments
                <br />
                inoubliables de TEDx Socimat
              </h1>
            </div>
            <div className="image-content">
              <img
                src="/images/tedx1.png"
                alt="TEDx Logo"
                className="tedx-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section">
        <div className="gallery-container">
          <h2 className="gallery-title">Moments Mémorables</h2>
          
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={`/images/tedx_socimat_galerie/${image}`}
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                />
                <div className="overlay">
                  <span className="zoom-icon">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={handleCloseModal}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={handleCloseModal}>
              <HiX size={30} />
            </button>

            <button className="lightbox-prev" onClick={handlePrevImage}>
              ❮
            </button>

            <img
              src={`/images/tedx_socimat_galerie/${selectedImage}`}
              alt="Enlarged"
              className="lightbox-image"
            />

            <button className="lightbox-next" onClick={handleNextImage}>
              ❯
            </button>

            <div className="lightbox-counter">
              {galleryImages.indexOf(selectedImage) + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
