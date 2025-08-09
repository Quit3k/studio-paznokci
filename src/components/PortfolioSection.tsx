// src/components/PortfolioSection.tsx
import React, { useState, useEffect } from 'react';
import '../styles/PortfolioSection.css';
import { useWindowSize } from '../hooks/useWindowSize'; // Import haka do sprawdzania szerokości
import { X, ChevronLeft, ChevronRight } from 'lucide-react'; // Import ikon

// Importujemy wszystkie 12 zdjęć
import paz1 from '../assets/paz1.png';
import paz2 from '../assets/paz2.png';
import paz3 from '../assets/paz3.png';
import paz4 from '../assets/paz4.png';
import paz5 from '../assets/paz5.png';
import paz6 from '../assets/paz6.png';
import paz7 from '../assets/paz7.png';
import paz8 from '../assets/paz8.png';
import paz9 from '../assets/paz9.png';
import paz10 from '../assets/paz10.png';
import paz11 from '../assets/paz11.png';
import paz12 from '../assets/paz12.png';

interface PortfolioSectionProps {
  language: 'PL' | 'DE';
  translations: any;
}

const allImages = [paz1, paz2, paz3, paz4, paz5, paz6, paz7, paz8, paz9, paz10, paz11, paz12];
const INITIAL_VISIBLE_IMAGES = 6;

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ language, translations }) => {
  const t = translations[language].portfolio;
  const isMobile = useWindowSize(); // Sprawdzamy, czy widok jest mobilny
  
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_IMAGES);

  // === NOWA LOGIKA DLA POPUPU ===
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    if (isMobile) return; // Nie otwieraj popupa na mobile
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Zapobiega zamknięciu popupa po kliknięciu strzałki
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
  };
  
  // Zamykanie popupa klawiszem Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  // ==============================

  const handleLoadMore = () => {
    setVisibleCount(allImages.length);
  };
  
  const imagesToShow = allImages.slice(0, visibleCount);

  return (
    <>
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
          
          <div className="portfolio-grid">
            {imagesToShow.map((image, index) => (
              <div 
                key={image} 
                className="portfolio-item"
                onClick={() => openLightbox(index)} // Otwieranie popupa po kliknięciu
              >
                <img
                  src={image}
                  alt={`Stylizacja paznokci ${index + 1}`}
                  className="portfolio-image"
                />
                <div className="portfolio-overlay">
                  <div className="overlay-text">
                    {language === 'PL' ? 'Zobacz powiększenie' : 'Größer ansehen'}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {visibleCount < allImages.length && (
            <div className="load-more-container">
              <button onClick={handleLoadMore} className="load-more-button">
                {language === 'PL' ? 'Zobacz więcej' : 'Mehr laden'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* === NOWY KOD: RENDEROWANIE POPUPU (LIGHTBOX) === */}
      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close-btn" onClick={closeLightbox}>
            <X size={40} />
          </button>
          
          <button className="lightbox-nav-btn lightbox-prev-btn" onClick={goToPrev}>
            <ChevronLeft size={48} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={allImages[selectedImageIndex]} 
              alt={`Powiększone zdjęcie ${selectedImageIndex + 1}`} 
              className="lightbox-image"
            />
          </div>

          <button className="lightbox-nav-btn lightbox-next-btn" onClick={goToNext}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </>
  );
};

export default PortfolioSection;