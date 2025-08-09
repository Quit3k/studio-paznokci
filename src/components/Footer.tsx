import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import '../styles/Footer.css';

interface FooterProps {
  language: 'PL' | 'DE';
  translations: any;
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ language, translations, scrollToSection }) => {
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-about">
            <h3 className="footer-logo">
              <span className="logo-main">Nagel</span>
              <span className="logo-secondary">Studio</span>
            </h3>
            {/* ZMIANA: Wyświetlamy opis w dwóch częściach ze znacznikiem <br> */}
            <p className="footer-description">
              {t.footer.description_part1}
              <br className="br-desktop" />
              {t.footer.description_part2}
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">{t.footer.quickLinks}</h4>
            <ul className="footer-list">
              <li><a onClick={() => scrollToSection('home')} className="footer-link">{t.nav.home}</a></li>
              <li><a onClick={() => scrollToSection('about')} className="footer-link">{t.nav.about}</a></li>
              <li><a onClick={() => scrollToSection('services')} className="footer-link">{t.nav.services}</a></li>
              <li><a onClick={() => scrollToSection('portfolio')} className="footer-link">{t.nav.portfolio}</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-title">{t.footer.contact}</h4>
            <ul className="footer-list">
              <li>{t.contact.phone}</li>
              <li>{t.contact.email}</li>
              <li className="address">{t.contact.address}</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;