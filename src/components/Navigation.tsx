import React from 'react';
import { Phone, Menu, X } from 'lucide-react';
import '../styles/Navigation.css';

interface NavigationProps {
  language: 'PL' | 'DE';
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleLanguage: () => void;
  scrollToSection: (sectionId: string) => void;
  translations: any;
}

const Navigation: React.FC<NavigationProps> = ({
  language,
  mobileMenuOpen,
  setMobileMenuOpen,
  toggleLanguage,
  scrollToSection,
  translations
}) => {
  const t = translations[language];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" onClick={() => scrollToSection('home')} className="navbar-logo">
          <h1 className="title">
            <span className="title-main">Nagel</span>
            <span className="title-secondary">Studio</span>
          </h1>
        </a>

        <div className="desktop-nav-links">
          <a onClick={() => scrollToSection('home')} className="nav-link">{t.nav.home}</a>
          <a onClick={() => scrollToSection('about')} className="nav-link">{t.nav.about}</a>
          <a onClick={() => scrollToSection('services')} className="nav-link">{t.nav.services}</a>
          <a onClick={() => scrollToSection('portfolio')} className="nav-link">{t.nav.portfolio}</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">{t.nav.contact}</a>
        </div>

        <div className="desktop-nav-actions">
          <a href="tel:+48123456789" className="call-button">
            <Phone height={16} width={16} />
            <span>{t.nav.call}</span>
          </a>
          
          <button onClick={toggleLanguage} className="language-toggle">
            {/* ZMIANA 3: Wyświetla język, na który można się przełączyć */}
            {language === 'PL' ? 'DE' : 'PL'}
          </button>
        </div>

        <div className="mobile-menu-toggle">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a onClick={() => scrollToSection('home')} className="nav-link">{t.nav.home}</a>
        <a onClick={() => scrollToSection('about')} className="nav-link">{t.nav.about}</a>
        <a onClick={() => scrollToSection('services')} className="nav-link">{t.nav.services}</a>
        <a onClick={() => scrollToSection('portfolio')} className="nav-link">{t.nav.portfolio}</a>
        <a onClick={() => scrollToSection('contact')} className="nav-link">{t.nav.contact}</a>
        <div className="mobile-menu-actions">
          <a href="tel:+48123456789" className="call-button">
            <Phone height={16} width={16} />
            <span>{t.nav.call}</span>
          </a>
          <button onClick={toggleLanguage} className="language-toggle">
            {/* ZMIANA 3: Wyświetla język, na który można się przełączyć */}
            {language === 'PL' ? 'DE' : 'PL'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;