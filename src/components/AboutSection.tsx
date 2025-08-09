import React from 'react';
import '../styles/AboutSection.css';
import aboutImage from '../assets/jus1.jpg';

interface AboutSectionProps {
  language: 'PL' | 'DE';
  translations: any;
  scrollToSection: (sectionId: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ language, translations, scrollToSection }) => {
  const t = translations[language].about;

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        <div className="about-header">
          <h2 className="section-title">{t.title}</h2>
        </div>

        <div className="about-grid">
          <div className="about-image-column">
            <div className="about-image-wrapper">
              <div className="about-image-bg">
                <img
                  src={aboutImage}
                  alt="Justyna Kak - Stylistka Paznokci"
                  className="about-image"
                />
              </div>
              
              {/* ZMIANA: Zestaw bąbelków tylko dla DESKTOPU */}
              <div className="stat-bubble stat-bubble-desktop stat-bubble-1">
                <div className="value">5+</div>
                <div className="label">{t.experience}</div>
              </div>
              <div className="stat-bubble stat-bubble-desktop stat-bubble-2">
                <div className="value">500+</div>
                <div className="label">{t.clients}</div>
              </div>
              <div className="stat-bubble stat-bubble-desktop stat-bubble-3">
                <div className="value">12</div>
                <div className="label">{t.awards}</div>
              </div>

              {/* ZMIANA: NOWY zestaw bąbelków tylko dla MOBILE */}
              <div className="stat-bubble stat-bubble-mobile stat-bubble-mobile-1">
                <div className="value">5+</div>
                <div className="label">{t.experience_short}</div>
              </div>
              <div className="stat-bubble stat-bubble-mobile stat-bubble-mobile-2">
                <div className="value">500+</div>
                <div className="label">{t.clients_short}</div>
              </div>
              <div className="stat-bubble stat-bubble-mobile stat-bubble-mobile-3">
                <div className="value">12</div>
                <div className="label">{t.awards_short}</div>
              </div>
            </div>
          </div>
          
          <div className="about-text-content">
            <h3 className="about-subtitle">
              {t.subtitle_intro}
              <span className="highlight">{t.subtitle_name}</span>
            </h3>
            <p className="about-description">
              {t.description}
            </p>
            
            <div className="stats-box-grid">
              <div className="stats-box">
                <div className="value">5+</div>
                <div className="label">{t.experience}</div>
              </div>
              <div className="stats-box">
                <div className="value">500+</div>
                <div className="label">{t.clients}</div>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('portfolio')}
              className="about-cta-button"
            >
              {t.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;