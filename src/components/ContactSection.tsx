import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import '../styles/ContactSection.css';

interface ContactSectionProps {
  language: 'PL' | 'DE';
  translations: any;
}

const ContactSection: React.FC<ContactSectionProps> = ({ language, translations }) => {
  const t = translations[language].contact;

  // ZMIANA: Prawidłowy link do wyszukiwania w Google Maps dla przycisku "PROWADŹ DO NAS"
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.address)}`;

  // ZMIANA: Prawidłowy link do osadzenia mapy w ramce <iframe>
  const iframeSrc = `https://maps.google.com/maps?q=${encodeURIComponent(t.address)}&output=embed`;

  const dayIndex = new Date().getDay();
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const today = days[dayIndex];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>

        <div className="contact-grid">
          {/* Lewy kafelek z detalami */}
          <div className="contact-details-card">
            <div className="contact-info">
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>{t.phone}</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <a href={`mailto:${t.email}`} className="contact-email-link">{t.email}</a>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>{t.address}</span>
              </div>
            </div>

            <h3 className="hours-title">{t.hours}</h3>
            <ul className="opening-hours-list">
              <li className={today === 'mon' ? 'current-day' : ''}>
                <span>{t.schedule.mon}</span><span>{t.hours_week}</span>
              </li>
              <li className={today === 'tue' ? 'current-day' : ''}>
                <span>{t.schedule.tue}</span><span>{t.hours_week}</span>
              </li>
              <li className={today === 'wed' ? 'current-day' : ''}>
                <span>{t.schedule.wed}</span><span>{t.hours_week}</span>
              </li>
              <li className={today === 'thu' ? 'current-day' : ''}>
                <span>{t.schedule.thu}</span><span>{t.hours_week}</span>
              </li>
              <li className={today === 'fri' ? 'current-day' : ''}>
                <span>{t.schedule.fri}</span><span>{t.hours_week}</span>
              </li>
              <li className={today === 'sat' ? 'current-day' : ''}>
                <span>{t.schedule.sat}</span><span>{t.hours_sat}</span>
              </li>
              <li className={today === 'sun' ? 'current-day' : ''}>
                <span>{t.schedule.sun}</span><span>{t.hours_sun}</span>
              </li>
            </ul>

            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="directions-button">
              {t.directions}
              <ArrowRight />
            </a>
          </div>

          {/* Prawy kafelek z mapą */}
          <div className="contact-map-card">
            <iframe
              src={iframeSrc}
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja salonu"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;