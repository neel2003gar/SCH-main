import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Phone, Mail, ChevronDown, Menu, X, Accessibility } from 'lucide-react';
import logoImage from '../../assets/6eaab89616263b6fb99067c23e8e9c5b8caa7c6c.png';


export type Language = 'en' | 'fr';

interface GlobalNavigationProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onLoginClick: () => void;
  onAccessibilityClick: () => void;
}

const translations = {
  en: {
    contactToday: 'Contact us today!',
    services: 'Services',
    locations: 'Locations',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    logIn: 'Log In',
    getQuote: 'Get a Quote',
    menu: 'Menu',
    close: 'Close',
    // Services dropdown
    accommodation: 'Accommodation, Stay at Work and Return to Work',
    earlyIntervention: 'Early Intervention / Workplace Wellness',
    occupationalTherapy: 'Occupational Therapy',
    ergonomics: 'Ergonomics / Job Demands Analysis',
    therapy: 'Therapy – Physiotherapy, Chiropractic and Massage',
    disabilityManagement: 'Disability Management',
    // Locations dropdown
    findRehab: 'Find a Rehabilitation Clinic',
    findOccHealth: 'Find an Occupational Health Clinic',
    // Contact dropdown
    contact: 'Contact Us',
    joinUs: 'Join Us',
    quote: 'Get a Quote',
  },
  fr: {
    contactToday: 'Contactez-nous aujourd\'hui!',
    services: 'Services',
    locations: 'Emplacements',
    aboutUs: 'À propos de nous',
    contactUs: 'Contactez-nous',
    logIn: 'Se connecter',
    getQuote: 'Obtenir une soumission',
    menu: 'Menu',
    close: 'Fermer',
    // Services dropdown
    accommodation: 'Accommodation, séjour au travail et retour au travail',
    earlyIntervention: 'Intervention précoce / Mieux-être au travail',
    occupationalTherapy: 'Ergothérapie',
    ergonomics: 'Ergonomie / Analyse des exigences du travail',
    therapy: 'Thérapie – Physiothérapie, chiropratique et massothérapie',
    disabilityManagement: 'Gestion de l\'invalidité',
    // Locations dropdown
    findRehab: 'Trouver une clinique de réadaptation',
    findOccHealth: 'Trouver une clinique de santé au travail',
    // Contact dropdown
    contact: 'Contactez-nous',
    joinUs: 'Joignez-vous à nous',
    quote: 'Obtenir une soumission',
  },
};

export function GlobalNavigation({ language, setLanguage, onLoginClick, onAccessibilityClick }: GlobalNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [closeTimer, setCloseTimer] = useState<NodeJS.Timeout | null>(null);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Clear timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
      }
    };
  }, [closeTimer]);

  const handleMouseEnter = (dropdown: string) => {
    // Clear any existing timer
    if (closeTimer) {
      clearTimeout(closeTimer);
      setCloseTimer(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    // Set a delay before closing
    const timer = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay
    setCloseTimer(timer);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileActiveDropdown(null);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="w-full hidden md:block" style={{ backgroundColor: '#0F2A45', padding: '7px 0' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between text-white text-xs sm:text-sm">
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="tel:+18337838088" className="flex items-center gap-1 sm:gap-2 hover:text-[#6ABF4B] transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">+1 (833) 783-8088</span>
            </a>
            <a href="mailto:info@santecirclehealth.com" className="hidden lg:flex items-center gap-2 hover:text-[#6ABF4B] transition-colors">
              <Mail size={14} />
              <span>info@santecirclehealth.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-xs hidden sm:inline">{t.contactToday}</span>
            <div className="flex items-center bg-[#1A3A5C] rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-[#6ABF4B] text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  language === 'fr'
                    ? 'bg-[#6ABF4B] text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 bg-white z-40 transition-shadow duration-200 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
        style={{ borderBottom: '1px solid #EEEDE8' }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 sm:h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0" onClick={closeMobileMenu}>
            <img 
              src={logoImage} 
              alt="Santé Circle Health" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 py-2 px-3 rounded-full text-[13.5px] font-medium transition-all duration-200"
                style={{ 
                  color: '#3D3D3A',
                  backgroundColor: activeDropdown === 'services' ? '#F7F7F6' : 'transparent',
                }}
              >
                {t.services}
                <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-[#EEEDE8] py-2 z-50">
                  <Link to="/services/accommodation-return-to-work" className="block px-4 py-2.5 text-sm text-[#3D3D3A] hover:bg-[#EAF4FB] transition-colors">
                    {t.accommodation}
                  </Link>
                  <Link to="/services/early-intervention" className="block px-4 py-2.5 text-sm text-[#3D3D3A] hover:bg-[#EAF4FB] transition-colors">
                    {t.earlyIntervention}
                  </Link>
                  <Link to="/services/occupational-therapy" className="block px-4 py-2.5 text-sm text-[#3D3D3A] hover:bg-[#EAF4FB] transition-colors">
                    {t.occupationalTherapy}
                  </Link>
                  <Link to="/services/ergonomics" className="block px-4 py-2.5 text-sm text-[#3D3D3A] hover:bg-[#EAF4FB] transition-colors">
                    {t.ergonomics}
                  </Link>
                  <Link to="/services/therapy" className="block px-4 py-2.5 text-sm text-[#3D3D3A] hover:bg-[#EAF4FB] transition-colors">
                    {t.therapy}
                  </Link>
                  <Link to="/services/disability-management" className="block px-4 py-2.5 text-sm text-[#3D3D3A] hover:bg-[#EAF4FB] transition-colors">
                    {t.disabilityManagement}
                  </Link>
                </div>
              )}
            </div>

            {/* Locations */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('locations')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 py-2 px-3 rounded-full text-[13.5px] font-medium transition-all duration-200"
                style={{ 
                  color: '#3D3D3A',
                  backgroundColor: activeDropdown === 'locations' ? '#F7F7F6' : 'transparent',
                }}
              >
                {t.locations}
                <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'locations' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'locations' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-[#EEEDE8] py-2 z-50">
                  <Link to="/find-rehab-clinic" className="block px-4 py-2.5 text-sm text-[#3D3D3A] hover:bg-[#EAF4FB] transition-colors">
                    {t.findRehab}
                  </Link>
                  <Link to="/find-occ-health-clinic" className="block px-4 py-2.5 text-sm text-[#3D3D3A] hover:bg-[#EAF4FB] transition-colors">
                    {t.findOccHealth}
                  </Link>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link
              to="/about-us"
              className="py-2 px-3 rounded-full text-[13.5px] font-medium transition-all duration-200 hover:bg-[#F7F7F6]"
              style={{ color: '#3D3D3A' }}
            >
              {t.aboutUs}
            </Link>

            {/* Contact Us */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 py-2 px-3 rounded-full text-[13.5px] font-medium transition-all duration-200"
                style={{ 
                  color: '#3D3D3A',
                  backgroundColor: activeDropdown === 'contact' ? '#F7F7F6' : 'transparent',
                }}
              >
                {t.contactUs}
                <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'contact' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'contact' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-[#EEEDE8] py-2 z-50">
                  <Link to="/contact-us" className="block px-4 py-2.5 text-sm text-[#3D3D3A] hover:bg-[#EAF4FB] transition-colors">
                    {t.contact}
                  </Link>
                  <Link to="/join-us" className="block px-4 py-2.5 text-sm text-[#3D3D3A] hover:bg-[#EAF4FB] transition-colors">
                    {t.joinUs}
                  </Link>
                  <Link to="/get-quote" className="block px-4 py-2.5 text-sm text-[#3D3D3A] hover:bg-[#EAF4FB] transition-colors">
                    {t.quote}
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Accessibility Button */}
            <button
              onClick={onAccessibilityClick}
              className="p-2 rounded-lg transition-all duration-200 hover:bg-[#F7F7F6]"
              style={{ color: '#6ABF4B' }}
              aria-label="Accessibility"
              title="Accessibility Options"
            >
              <Accessibility size={20} />
            </button>

            <button
              onClick={onLoginClick}
              className="px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-200"
              style={{
                borderWidth: '1.5px',
                borderColor: '#0F2A45',
                color: '#0F2A45',
                backgroundColor: 'transparent',
              }}
            >
              {t.logIn}
            </button>

            <Link
              to="/get-quote"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200"
              style={{
                backgroundColor: '#6ABF4B',
              }}
            >
              {t.getQuote}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Accessibility Button */}
            <button
              onClick={onAccessibilityClick}
              className="p-2 rounded-lg transition-colors"
              style={{ color: '#6ABF4B' }}
              aria-label="Accessibility"
            >
              <Accessibility size={22} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: '#0F2A45' }}
              aria-label={mobileMenuOpen ? t.close : t.menu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={closeMobileMenu}
          />
          <div className="fixed top-[64px] md:top-[75px] left-0 right-0 bottom-0 bg-white z-40 lg:hidden overflow-y-auto">
            <div className="p-6 space-y-4">
              {/* Language Toggle Mobile */}
              <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: '#EEEDE8' }}>
                <span className="text-sm font-medium" style={{ color: '#0F2A45' }}>Language</span>
                <div className="flex items-center bg-[#0F2A45] rounded-full p-1">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      language === 'en'
                        ? 'bg-[#6ABF4B] text-white'
                        : 'text-white/70'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      language === 'fr'
                        ? 'bg-[#6ABF4B] text-white'
                        : 'text-white/70'
                    }`}
                  >
                    FR
                  </button>
                </div>
              </div>

              {/* Services */}
              <div>
                <button
                  onClick={() => setMobileActiveDropdown(mobileActiveDropdown === 'services' ? null : 'services')}
                  className="w-full flex items-center justify-between py-3 text-left font-medium"
                  style={{ color: '#0F2A45' }}
                >
                  {t.services}
                  <ChevronDown size={20} className={`transition-transform ${mobileActiveDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveDropdown === 'services' && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link to="/services/accommodation-return-to-work" className="block py-2 text-sm" style={{ color: '#3D3D3A' }} onClick={closeMobileMenu}>
                      {t.accommodation}
                    </Link>
                    <Link to="/services/early-intervention" className="block py-2 text-sm" style={{ color: '#3D3D3A' }} onClick={closeMobileMenu}>
                      {t.earlyIntervention}
                    </Link>
                    <Link to="/services/occupational-therapy" className="block py-2 text-sm" style={{ color: '#3D3D3A' }} onClick={closeMobileMenu}>
                      {t.occupationalTherapy}
                    </Link>
                    <Link to="/services/ergonomics" className="block py-2 text-sm" style={{ color: '#3D3D3A' }} onClick={closeMobileMenu}>
                      {t.ergonomics}
                    </Link>
                    <Link to="/services/therapy" className="block py-2 text-sm" style={{ color: '#3D3D3A' }} onClick={closeMobileMenu}>
                      {t.therapy}
                    </Link>
                    <Link to="/services/disability-management" className="block py-2 text-sm" style={{ color: '#3D3D3A' }} onClick={closeMobileMenu}>
                      {t.disabilityManagement}
                    </Link>
                  </div>
                )}
              </div>

              {/* Locations */}
              <div>
                <button
                  onClick={() => setMobileActiveDropdown(mobileActiveDropdown === 'locations' ? null : 'locations')}
                  className="w-full flex items-center justify-between py-3 text-left font-medium"
                  style={{ color: '#0F2A45' }}
                >
                  {t.locations}
                  <ChevronDown size={20} className={`transition-transform ${mobileActiveDropdown === 'locations' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveDropdown === 'locations' && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link to="/find-rehab-clinic" className="block py-2 text-sm" style={{ color: '#3D3D3A' }} onClick={closeMobileMenu}>
                      {t.findRehab}
                    </Link>
                    <Link to="/find-occ-health-clinic" className="block py-2 text-sm" style={{ color: '#3D3D3A' }} onClick={closeMobileMenu}>
                      {t.findOccHealth}
                    </Link>
                  </div>
                )}
              </div>

              {/* About Us */}
              <Link
                to="/about-us"
                className="block py-3 font-medium"
                style={{ color: '#0F2A45' }}
                onClick={closeMobileMenu}
              >
                {t.aboutUs}
              </Link>

              {/* Contact Us */}
              <div>
                <button
                  onClick={() => setMobileActiveDropdown(mobileActiveDropdown === 'contact' ? null : 'contact')}
                  className="w-full flex items-center justify-between py-3 text-left font-medium"
                  style={{ color: '#0F2A45' }}
                >
                  {t.contactUs}
                  <ChevronDown size={20} className={`transition-transform ${mobileActiveDropdown === 'contact' ? 'rotate-180' : ''}`} />
                </button>
                {mobileActiveDropdown === 'contact' && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link to="/contact-us" className="block py-2 text-sm" style={{ color: '#3D3D3A' }} onClick={closeMobileMenu}>
                      {t.contact}
                    </Link>
                    <Link to="/join-us" className="block py-2 text-sm" style={{ color: '#3D3D3A' }} onClick={closeMobileMenu}>
                      {t.joinUs}
                    </Link>
                    <Link to="/get-quote" className="block py-2 text-sm" style={{ color: '#3D3D3A' }} onClick={closeMobileMenu}>
                      {t.quote}
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Action Buttons */}
              <div className="pt-6 space-y-3 border-t" style={{ borderColor: '#EEEDE8' }}>
                <button
                  onClick={() => {
                    onLoginClick();
                    closeMobileMenu();
                  }}
                  className="w-full px-4 py-3 rounded-lg font-semibold border transition-all duration-200"
                  style={{
                    borderWidth: '1.5px',
                    borderColor: '#0F2A45',
                    color: '#0F2A45',
                    backgroundColor: 'transparent',
                  }}
                >
                  {t.logIn}
                </button>

                <Link
                  to="/get-quote"
                  className="block w-full px-4 py-3 rounded-lg font-semibold text-white text-center transition-all duration-200"
                  style={{
                    backgroundColor: '#6ABF4B',
                  }}
                  onClick={closeMobileMenu}
                >
                  {t.getQuote}
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-6 space-y-3 border-t" style={{ borderColor: '#EEEDE8' }}>
                <a href="tel:+18337838088" className="flex items-center gap-3 text-sm" style={{ color: '#3D3D3A' }}>
                  <Phone size={18} style={{ color: '#6ABF4B' }} />
                  <span>+1 (833) 783-8088</span>
                </a>
                <a href="mailto:info@santecirclehealth.com" className="flex items-center gap-3 text-sm" style={{ color: '#3D3D3A' }}>
                  <Mail size={18} style={{ color: '#6ABF4B' }} />
                  <span>info@santecirclehealth.com</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}