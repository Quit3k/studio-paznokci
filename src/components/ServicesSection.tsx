import React from 'react';
import { Star } from 'lucide-react';
import '../styles/ServicesSection.css';

interface ServicesSectionProps {
  language: 'PL' | 'DE';
  translations: any;
}

// Mały sub-komponent dla pojedynczej karty usługi
const ServiceCard = ({ icon, title_part1, title_part2, description, price }: any) => (
  <div className="service-card">
    <div className="service-card-icon-wrapper">{icon}</div>
    <h3 className="service-card-title">
      {title_part1}
      <br />
      {title_part2}
    </h3>
    <p className="service-card-description">{description}</p>
    <div className="service-card-price">{price}</div>
  </div>
);

const ServicesSection: React.FC<ServicesSectionProps> = ({ language, translations }) => {
  const t = translations[language].services;

  const services = [
    {
      icon: <Star />,
      ...t.classic
    },
    {
      icon: <Star />,
      ...t.hybrid
    },
    {
      icon: <Star />,
      ...t.nailart
    },
    {
      icon: <Star />,
      ...t.extensions
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;