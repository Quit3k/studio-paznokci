import React from 'react';
import { Instagram, Facebook, Star, Calendar } from 'lucide-react';
import '../styles/HeroSection.css';
import heroImage from '../assets/paz0.png';

interface HeroSectionProps {
  language: 'PL' | 'DE';
  translations: any;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, translations, scrollToSection }) => {
  const t = translations[language];
  
  // ZMIANA 4: Dzielimy tekst na dwie części, aby dodać nową linię
  const subtitleParts = t.hero.subtitle.split(' & ');

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-bubbles">
        <div className="bubble-1"></div>
        <div className="bubble-2"></div>
        <div className="bubble-3"></div>
        <div className="bubble-4"></div>
        <div className="bubble-5"></div>
      </div>
      
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text-content">
            <h1 className="hero-title">
              <span className="block">{t.hero.title}</span>
              <span className="subtitle">
                {subtitleParts[0]}
                {subtitleParts.length > 1 && (
                  <>
                    <br />
                    & {subtitleParts[1]}
                  </>
                )}
              </span>
            </h1>
            <p className="hero-description">
              {t.hero.description}
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => scrollToSection('contact')}
                className="hero-cta-primary"
              >
                <Calendar height={20} width={20} />
                <span>{t.hero.cta}</span>
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="hero-cta-secondary"
              >
                <span>{t.hero.watch}</span>
              </button>
            </div>
          </div>
          
          <div className="hero-image-content">
            <div className="hero-image-wrapper">
              <div className="hero-image-bg">
                <img
                  src={heroImage}
                  alt="Profesjonalna stylizacja paznokci"
                  className="hero-image"
                />
              </div>
              
              <a href="https://www.facebook.com/NagelStudioJustynaKak/" className="hero-social-bubble bubble-instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.instagram.com/nagelstudio_j.kak/" className="hero-social-bubble bubble-facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hero-social-bubble bubble-star">
                <Star size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;