import React, { useState } from 'react';
//import './ImageSlideshow.css';

const ImageSlideshow = ({ images }) => {
  
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };



  //<button onClick={() => openModal(selectedImage)}>open</button>
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    
  };

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  

  return (<>
  <div className="slideshow-container">
      {/* Main Image Display */}
      {/* Overlay for zoomed image */}
      {isZoomed && <div className="overlay" onClick={() => setIsZoomed(false)}></div>}
      
      <div className={`main-image ${isZoomed ? 'zoomed' : ''}`} onClick={handleImageClick}>
        <img src={selectedImage} alt="Main Display" />
      </div>

      
      {/* Thumbnail List */}
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${image === selectedImage ? 'active' : ''}`}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>

      

    </div>
    {/* Modal for Fullscreen Image */}
    {isModalOpen && (
        <div className="modal_zoom" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>×</span>
            <img src={selectedImage} alt="Fullscreen View" className="modal-image" />
            <button className="prev-button" onClick={handlePrevImage}>←</button>
            <button className="next-button" onClick={handleNextImage}>→</button>
          </div>
        </div>
        
      )}
  </>
    
  );
};

export default ImageSlideshow;