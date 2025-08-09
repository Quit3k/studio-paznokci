import { useState } from 'react';
import './styles/Global.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const translations = {
  PL: {
    nav: { home: 'Home', about: 'O mnie', services: 'Usługi', portfolio: 'Realizacje', contact: 'Kontakt', call: 'Zadzwoń' },
    hero: { title: 'Profesjonalny', subtitle: 'Manicure & Nail Art', description: 'Tworzymy unikalne i zachwycające wzory na paznokciach, które podkreślają Twoją wyjątkową osobowość. Pozwól, aby Twoje dłonie stały się prawdziwym dziełem sztuki.', cta: 'Umów wizytę', watch: 'Zobacz realizacje' },
    about: { 
      title: 'O mnie', 
      subtitle_intro: 'Cześć, nazywam się ', 
      subtitle_name: 'Justyna Kak',
      description: 'Moją największą pasją jest sztuka stylizacji paznokci. W mojej pracy nie ma miejsca na pośpiech – liczy się każdy, nawet najdrobniejszy szczegół. Poświęcam tyle czasu, ile potrzeba, aby każda stylizacja była absolutnie doskonała. Precyzja i dokładność to fundamenty mojej pracy, dzięki którym zdobyłam zaufanie wielu zadowolonych klientek. Ich uśmiech i satysfakcja są dla mnie największą nagrodą.',
      experience: 'Lat doświadczenia', 
      clients: 'Zadowolonych klientek', 
      awards: 'Certyfikatów',
      experience_short: 'Dośw.',
      clients_short: 'Klientek',
      awards_short: 'Certyf.',
      cta: 'Zobacz moje realizacje'
    },
    services: { 
      title: 'Moje Usługi', 
      subtitle: 'Kompleksowa i profesjonalna pielęgnacja paznokci', 
      classic: { title_part1: 'Manicure', title_part2: 'Klasyczny', description: 'Profesjonalna pielęgnacja skórek i paznokci z malowaniem.', price: 'od 80 PLN' }, 
      hybrid: { title_part1: 'Manicure', title_part2: 'Hybrydowy', description: 'Trwały manicure utrzymujący się do 3 tygodni.', price: 'od 120 PLN' }, 
      nailart: { title_part1: 'Nail Art', title_part2: '& Zdobienia', description: 'Nietuzinkowe, ręcznie malowane wzory i dekoracje.', price: 'od 150 PLN' }, 
      extensions: { title_part1: 'Przedłużanie', title_part2: 'Paznokci', description: 'Przedłużanie i modelowanie paznokci metodą żelową.', price: 'od 200 PLN' } 
    },
    portfolio: { title: 'Moje Realizacje', subtitle: 'Zobacz moje najnowsze prace' },
    contact: { 
      title: 'Skontaktuj się', 
      subtitle: 'Umów się na wizytę lub zadaj pytanie', 
      address: 'Berliner Str. 123, 10115 Berlin, Niemcy',
      phone: '+49 123 456 789',
      email: 'kontakt@nagelstudio.de',
      hours: 'Godziny otwarcia:', 
      directions: 'PROWADŹ DO NAS',
      schedule: { mon: 'Poniedziałek', tue: 'Wtorek', wed: 'Środa', thu: 'Czwartek', fri: 'Piątek', sat: 'Sobota', sun: 'Niedziela' },
      hours_week: '9:00 - 17:00',
      hours_sat: '10:00 - 14:00',
      hours_sun: 'Nieczynne'
    },
    // ZMIANA: Podział opisu w stopce na dwie części
    footer: { 
      description_part1: 'Profesjonalne studio manicure',
      description_part2: 'w sercu Berlina.',
      quickLinks: 'Szybkie linki', 
      contact: 'Kontakt', 
      rights: '© 2025 NagelStudio. Wszelkie prawa zastrzeżone.' 
    }
  },
  DE: {
    nav: { home: 'Home', about: 'Über mich', services: 'Leistungen', portfolio: 'Portfolio', contact: 'Kontakt', call: 'Anrufen' },
    hero: { title: 'Professionelle', subtitle: 'Maniküre & Nail Art', description: 'Wir kreieren einzigartige und atemberaubende Nageldesigns, die Ihre individuelle Persönlichkeit unterstreichen. Lassen Sie Ihre Hände zu einem wahren Kunstwerk werden.', cta: 'Termin buchen', watch: 'Portfolio ansehen' },
    about: { 
      title: 'Über mich', 
      subtitle_intro: 'Hallo, mein Name ist ', 
      subtitle_name: 'Justyna Kak',
      description: 'Meine größte Leidenschaft ist die Kunst des Nageldesigns. In meiner Arbeit gibt es keinen Platz für Eile – jedes noch so kleine Detail zählt. Ich nehme mir so viel Zeit wie nötig, damit jedes Styling absolut perfekt wird. Präzision und Gründlichkeit sind die Grundpfeiler meiner Arbeit, dank derer ich das Vertrauen zahlreicher zufriedener Kundinnen gewonnen habe. Ihr Lächeln und ihre Zufriedenheit sind für mich die größte Belohnung.',
      experience: 'Jahre Erfahrung', 
      clients: 'Zufriedene Kundinnen', 
      awards: 'Zertifikate',
      experience_short: 'Erf.',
      clients_short: 'Kundinnen',
      awards_short: 'Zert.',
      cta: 'Siehe mein Portfolio'
    },
    services: { 
      title: 'Meine Leistungen', 
      subtitle: 'Umfassende und professionelle Nagelpflege', 
      classic: { title_part1: 'Klassische', title_part2: 'Maniküre', description: 'Professionelle Nagelhaut- und Nagelpflege mit Lackierung.', price: 'ab 25 €' }, 
      hybrid: { title_part1: 'Gel-Lack', title_part2: 'Maniküre', description: 'Langanhaltende Maniküre, die bis zu 3 Wochen hält.', price: 'ab 35 €' }, 
      nailart: { title_part1: 'Nail Art', title_part2: '& Designs', description: 'Einzigartige, handgemalte Muster und Dekorationen.', price: 'ab 45 €' }, 
      extensions: { title_part1: 'Nagel-', title_part2: 'verlängerung', description: 'Verlängerung und Modellierung der Nägel mit Gel-Technik.', price: 'ab 60 €' } 
    },
    portfolio: { title: 'Mein Portfolio', subtitle: 'Sehen Sie meine neuesten Arbeiten' },
    contact: { 
      title: 'Kontakt aufnehmen', 
      subtitle: 'Vereinbaren Sie einen Termin oder stellen Sie eine Frage', 
      address: 'Berliner Str. 123, 10115 Berlin, Deutschland',
      phone: '+49 123 456 789',
      email: 'kontakt@nagelstudio.de',
      hours: 'Öffnungszeiten:', 
      directions: 'ROUTE PLANEN',
      schedule: { mon: 'Montag', tue: 'Dienstag', wed: 'Mittwoch', thu: 'Donnerstag', fri: 'Freitag', sat: 'Samstag', sun: 'Sonntag' },
      hours_week: '9:00 - 17:00',
      hours_sat: '10:00 - 14:00',
      hours_sun: 'Geschlossen'
    },
    // ZMIANA: Podział opisu w stopce po niemiecku
    footer: { 
      description_part1: 'Professionelles Maniküre-Studio',
      description_part2: 'im Herzen Berlins.',
      quickLinks: 'Schnellzugriff', 
      contact: 'Kontakt', 
      rights: '© 2025 NagelStudio. Alle Rechte vorbehalten.' 
    }
  }
};

function App() {
  const [language, setLanguage] = useState<'PL' | 'DE'>('PL');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'PL' ? 'DE' : 'PL');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Navigation
        language={language}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        toggleLanguage={toggleLanguage}
        scrollToSection={scrollToSection}
        translations={translations}
      />
      <main>
        <HeroSection
          language={language}
          translations={translations}
          scrollToSection={scrollToSection}
        />
        <AboutSection
          language={language}
          translations={translations}
          scrollToSection={scrollToSection}
        />
        <ServicesSection
          language={language}
          translations={translations}
        />
        <PortfolioSection
          language={language}
          translations={translations}
        />
        <ContactSection
          language={language}
          translations={translations}
        />
      </main>
      <Footer
        language={language}
        translations={translations}
        scrollToSection={scrollToSection}
      />
    </>
  );
} 

export default App;