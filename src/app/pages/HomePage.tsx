import { Link, useOutletContext } from 'react-router';
import { 
  Lock, LogIn, MapPin, List, FileText, 
  Briefcase, Shield, Users, Clipboard, Hand, TrendingUp,
  Lock as LockIcon, ShieldCheck, Database, CheckCircle
} from 'lucide-react';
import heroImage from 'figma:asset/e0e85b4b5db85051a2d2bee6b752b9cd43aa8aa8.png';

export type Language = 'en' | 'fr';

interface OutletContext {
  language: Language;
}

const translations = {
  en: {
    // Hero Section
    heroTag: 'Employee Health Services',
    heroTitle: 'We Help People Return to Function.',
    heroDescription: 'We help people return to function after an illness, injury or accident. We listen with purpose, and we provide solutions. Invite us into your circle of care.',
    heroButton: 'Get a Free Quote',
    heroPricing: 'Simple and transparent pricing. No implementation fees.',
    
    // Quick Actions
    clientPortal: 'Existing Client Portal',
    clientPortalDesc: 'Log in to your account',
    findClinic: 'Find a Clinic Location',
    findClinicDesc: 'Rehab & occupational health',
    exploreServices: 'Explore Our Services',
    exploreServicesDesc: 'See what we offer',
    getQuote: 'Get a Quote',
    getQuoteDesc: 'Five questions. No obligation.',
    
    // Services Section
    servicesTitle: 'Comprehensive Workplace Health Services',
    service1Title: 'Accommodation, Stay at Work and Return to Work',
    service1Desc: 'Using a functional model, we work with employees and employers to determine suitable accommodations for physical, cognitive, mental health and sensory impairments.',
    service2Title: 'Early Intervention and Workplace Wellness',
    service2Desc: 'On-site clinicians address individual health barriers early in the injury process, guiding employees throughout recovery to ensure overall wellness is achieved.',
    service3Title: 'Occupational Therapy',
    service3Desc: 'Highly trained OTs focus on physical, cognitive and psychoemotional health using a holistic approach to return people to desired activities at work and in life.',
    service4Title: 'Ergonomics and Job Demands Analysis',
    service4Desc: 'In-depth analysis of job tasks to outline physical, cognitive, psychoemotional and sensory demands and ergonomic risk factors associated with the role.',
    service5Title: 'Therapy – Physiotherapy, Chiropractic and Massage',
    service5Desc: 'Physical therapy, chiropractic and massage provided on-site or in our clinics by clinicians trained in sports and industrial therapy.',
    service6Title: 'Disability Case Management',
    service6Desc: 'Ensuring collaboration between the employee, their healthcare professionals and their employer for a safe, evidence-based return to work plan.',
    learnMore: 'Learn More ›',
    
    // CTA
    ctaTitle: 'Simple. Transparent. Secure.',
    ctaButton: 'Get Your Free Quote',
    
    // Why Choose Section
    whyTitle: 'Why Choose Santé Circle Health?',
    whyReason1: 'Expert Care',
    whyReason1Desc: 'Our team of healthcare professionals brings decades of combined experience in occupational health and rehabilitation.',
    whyReason2: 'Proven Results',
    whyReason2Desc: 'We\'ve helped thousands of employees successfully return to work and achieve their wellness goals.',
    whyReason3: 'Comprehensive Approach',
    whyReason3Desc: 'From assessment to treatment to follow-up, we provide end-to-end support throughout the recovery journey.',
    whyReason4: 'Client-Focused',
    whyReason4Desc: 'We listen to understand your unique needs and develop customized solutions that work for you.',
    
    // Team Section
    teamTitle: 'Meet Our Expert Team',
    team1: 'Occupational Therapists',
    team1Desc: 'Specialized in workplace rehabilitation',
    team2: 'Physiotherapists',
    team2Desc: 'Certified in sports and industrial therapy',
    team3: 'Disability Managers',
    team3Desc: 'Coordinating your return to work',
    team4: 'Ergonomists & Kinesiologists',
    team4Desc: 'Optimizing workplace safety',
    
    // Testimonials
    testimonialsTitle: 'What Our Clients Say',
    testimonial1: 'Santé Circle Health helped me return to work after a serious injury. Their team was professional, caring, and truly understood my needs.',
    testimonial1Author: 'Michael R.',
    testimonial1Role: 'Manufacturing Worker',
    testimonial2: 'The ergonomic assessment they provided transformed our workplace. We\'ve seen a significant reduction in workplace injuries.',
    testimonial2Author: 'Sarah L.',
    testimonial2Role: 'HR Director',
    testimonial3: 'Their early intervention program has been a game-changer for our organization. Highly recommend their services.',
    testimonial3Author: 'David K.',
    testimonial3Role: 'Operations Manager',
    
    // Final CTA
    finalCtaTitle: 'Ready to Get Started?',
    finalCtaDescription: 'Take the first step towards better workplace health. Our team is here to help.',
    finalCtaButton: 'Contact Us Today',
  },
  fr: {
    // Hero Section
    heroTag: 'Services de santé des employés',
    heroTitle: 'Nous aidons les gens à retrouver leurs capacités.',
    heroDescription: 'Nous aidons les gens à retrouver leurs capacités après une maladie, une blessure ou un accident. Nous écoutons avec intention et fournissons des solutions. Invitez-nous dans votre cercle de soins.',
    heroButton: 'Obtenir une soumission gratuite',
    heroPricing: 'Tarification simple et transparente. Aucuns frais de mise en œuvre.',
    
    // Quick Actions
    clientPortal: 'Portail client existant',
    clientPortalDesc: 'Connectez-vous à votre compte',
    findClinic: 'Trouver un emplacement de clinique',
    findClinicDesc: 'Réadaptation et santé au travail',
    exploreServices: 'Explorez nos services',
    exploreServicesDesc: 'Voir ce que nous offrons',
    getQuote: 'Obtenir une soumission',
    getQuoteDesc: 'Cinq questions. Sans obligation.',
    
    // Services Section
    servicesTitle: 'Services de santé au travail complets',
    service1Title: 'Accommodement, maintien au travail et retour au travail',
    service1Desc: 'En utilisant un modèle fonctionnel, nous travaillons avec les employés et les employeurs pour déterminer des accommodements appropriés pour les déficiences physiques, cognitives, de santé mentale et sensorielles.',
    service2Title: 'Intervention précoce et mieux-être au travail',
    service2Desc: 'Les cliniciens sur place abordent les obstacles individuels à la santé tôt dans le processus de blessure, guidant les employés tout au long de la récupération pour assurer le bien-être global.',
    service3Title: 'Ergothérapie',
    service3Desc: 'Des ergothérapeutes hautement qualifiés se concentrent sur la santé physique, cognitive et psychoémotionnelle en utilisant une approche holistique pour ramener les gens aux activités souhaitées au travail et dans la vie.',
    service4Title: 'Ergonomie et analyse des exigences du travail',
    service4Desc: 'Analyse approfondie des tâches professionnelles pour décrire les exigences physiques, cognitives, psychoémotionnelles et sensorielles et les facteurs de risque ergonomiques associés au poste.',
    service5Title: 'Thérapie – Physiothérapie, chiropratique et massage',
    service5Desc: 'Physiothérapie, chiropratique et massage fournis sur place ou dans nos cliniques par des cliniciens formés en thérapie sportive et industrielle.',
    service6Title: 'Gestion de cas d\'invalidité',
    service6Desc: 'Assurer la collaboration entre l\'employé, ses professionnels de la santé et son employeur pour un plan de retour au travail sûr et fondé sur des preuves.',
    learnMore: 'En savoir plus ›',
    
    // CTA
    ctaTitle: 'Simple. Transparent. Sécurisé.',
    ctaButton: 'Obtenez votre soumission gratuite',
    
    // Why Choose Section
    whyTitle: 'Pourquoi choisir Santé Circle Health?',
    whyReason1: 'Soins d\'experts',
    whyReason1Desc: 'Notre équipe de professionnels de la santé apporte des décennies d\'expérience combinée en santé au travail et en réadaptation.',
    whyReason2: 'Résultats prouvés',
    whyReason2Desc: 'Nous avons aidé des milliers d\'employés à retourner au travail avec succès et à atteindre leurs objectifs de bien-être.',
    whyReason3: 'Approche globale',
    whyReason3Desc: 'De l\'évaluation au traitement en passant par le suivi, nous fournissons un soutien de bout en bout tout au long du parcours de récupération.',
    whyReason4: 'Axé sur le client',
    whyReason4Desc: 'Nous écoutons pour comprendre vos besoins uniques et développons des solutions personnalisées qui fonctionnent pour vous.',
    
    // Team Section
    teamTitle: 'Rencontrez notre équipe d\'experts',
    team1: 'Ergothérapeutes',
    team1Desc: 'Spécialisés en réadaptation au travail',
    team2: 'Physiothérapeutes',
    team2Desc: 'Certifiés en thérapie sportive et industrielle',
    team3: 'Gestionnaires d\'invalidité',
    team3Desc: 'Coordonnant votre retour au travail',
    team4: 'Ergonomes et kinésiologues',
    team4Desc: 'Optimisant la sécurité au travail',
    
    // Testimonials
    testimonialsTitle: 'Ce que disent nos clients',
    testimonial1: 'Santé Circle Health m\'a aidé à retourner au travail après une blessure grave. Leur équipe était professionnelle, attentionnée et comprenait vraiment mes besoins.',
    testimonial1Author: 'Michael R.',
    testimonial1Role: 'Travailleur en fabrication',
    testimonial2: 'L\'évaluation ergonomique qu\'ils ont fournie a transformé notre lieu de travail. Nous avons constaté une réduction significative des blessures au travail.',
    testimonial2Author: 'Sarah L.',
    testimonial2Role: 'Directrice RH',
    testimonial3: 'Leur programme d\'intervention précoce a changé la donne pour notre organisation. Je recommande vivement leurs services.',
    testimonial3Author: 'David K.',
    testimonial3Role: 'Gestionnaire des opérations',
    
    // Final CTA
    finalCtaTitle: 'Prêt à commencer?',
    finalCtaDescription: 'Faites le premier pas vers une meilleure santé au travail. Notre équipe est là pour vous aider.',
    finalCtaButton: 'Contactez-nous aujourd\'hui',
  },
};

export default function HomePage() {
  const { language } = useOutletContext<OutletContext>();
  const t = translations[language];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: '#1A3A5C' }}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Healthcare Professional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A3A5C]/40 via-[#1A3A5C]/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-[1200px] mx-auto py-12 sm:py-16 lg:py-20 w-full z-10">
          <div className="max-w-md">
            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 shadow-2xl">
              <div className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold mb-3 sm:mb-4 border" style={{ backgroundColor: 'rgba(106, 191, 75, 0.20)', color: '#6ABF4B', borderColor: '#6ABF4B' }}>
                {t.heroTag}
              </div>
              <h1 className="font-serif mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: 'DM Serif Display', color: '#1A3A5C', lineHeight: '1.2' }}>
                {t.heroTitle}
              </h1>
              <p className="text-sm sm:text-base mb-4 sm:mb-5" style={{ color: '#333333', lineHeight: '1.6' }}>
                {t.heroDescription}
              </p>
              <Link
                to="/get-quote"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-white font-semibold transition-all duration-200 hover:shadow-lg text-sm"
                style={{ backgroundColor: '#6ABF4B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5aaa3d'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6ABF4B'}
              >
                <Lock size={16} className="sm:w-[18px] sm:h-[18px]" />
                {t.heroButton}
              </Link>
              <p className="text-xs italic mt-2 sm:mt-3" style={{ color: '#777777' }}>
                {t.heroPricing}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Bar */}
      <section className="relative -mt-8 sm:-mt-12 z-10 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" style={{ border: '1px solid #EEEDE8', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
            <Link to="/login" className="group flex flex-col items-center text-center p-4 sm:p-6 rounded-xl transition-all duration-200 hover:bg-[#EAF4FB]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: '#EAF4FB' }}>
                <LogIn size={28} style={{ color: '#2B7DC8' }} />
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#1A3A5C' }}>{t.clientPortal}</h3>
              <p className="text-xs sm:text-sm" style={{ color: '#777777' }}>{t.clientPortalDesc}</p>
            </Link>
            
            <Link to="/find-rehab-clinic" className="group flex flex-col items-center text-center p-4 sm:p-6 rounded-xl transition-all duration-200 hover:bg-[#EAF4FB]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: '#EAF4FB' }}>
                <MapPin size={28} style={{ color: '#2B7DC8' }} />
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#1A3A5C' }}>{t.findClinic}</h3>
              <p className="text-xs sm:text-sm" style={{ color: '#777777' }}>{t.findClinicDesc}</p>
            </Link>
            
            <a href="#services" className="group flex flex-col items-center text-center p-4 sm:p-6 rounded-xl transition-all duration-200 hover:bg-[#EAF4FB]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: '#EAF4FB' }}>
                <List size={28} style={{ color: '#2B7DC8' }} />
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#1A3A5C' }}>{t.exploreServices}</h3>
              <p className="text-xs sm:text-sm" style={{ color: '#777777' }}>{t.exploreServicesDesc}</p>
            </a>
            
            <Link to="/get-quote" className="group flex flex-col items-center text-center p-4 sm:p-6 rounded-xl transition-all duration-200 hover:bg-[#EAF4FB]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: '#EAF4FB' }}>
                <FileText size={28} style={{ color: '#2B7DC8' }} />
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#1A3A5C' }}>{t.getQuote}</h3>
              <p className="text-xs sm:text-sm" style={{ color: '#777777' }}>{t.getQuoteDesc}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: '#EAF4FB' }}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center font-serif mb-12 sm:mb-16 text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: 'DM Serif Display', color: '#1A3A5C' }}>
            {t.servicesTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {/* Card 1 - Odd */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-lg" style={{ border: '1px solid #EEEDE8', borderLeft: '4px solid #6ABF4B', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(106, 191, 75, 0.12)' }}>
                <Briefcase size={24} style={{ color: '#6ABF4B' }} />
              </div>
              <h3 className="font-bold mb-3 text-base sm:text-lg" style={{ color: '#1A3A5C' }}>
                {t.service1Title}
              </h3>
              <p className="mb-4 text-sm sm:text-base" style={{ color: '#777777', lineHeight: '1.6' }}>
                {t.service1Desc}
              </p>
              <Link to="/services/accommodation-return-to-work" className="text-sm font-semibold hover:text-[#1A3A5C] transition-colors" style={{ color: '#6ABF4B' }}>
                {t.learnMore}
              </Link>
            </div>

            {/* Card 2 - Even */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-lg" style={{ border: '1px solid #EEEDE8', borderLeft: '4px solid #2B7DC8', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(43, 125, 200, 0.12)' }}>
                <Shield size={24} style={{ color: '#2B7DC8' }} />
              </div>
              <h3 className="font-bold mb-3 text-base sm:text-lg" style={{ color: '#1A3A5C' }}>
                {t.service2Title}
              </h3>
              <p className="mb-4 text-sm sm:text-base" style={{ color: '#777777', lineHeight: '1.6' }}>
                {t.service2Desc}
              </p>
              <Link to="/services/early-intervention" className="text-sm font-semibold hover:text-[#1A3A5C] transition-colors" style={{ color: '#2B7DC8' }}>
                {t.learnMore}
              </Link>
            </div>

            {/* Card 3 - Odd */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-lg" style={{ border: '1px solid #EEEDE8', borderLeft: '4px solid #6ABF4B', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(106, 191, 75, 0.12)' }}>
                <Users size={24} style={{ color: '#6ABF4B' }} />
              </div>
              <h3 className="font-bold mb-3 text-base sm:text-lg" style={{ color: '#1A3A5C' }}>
                {t.service3Title}
              </h3>
              <p className="mb-4 text-sm sm:text-base" style={{ color: '#777777', lineHeight: '1.6' }}>
                {t.service3Desc}
              </p>
              <Link to="/services/occupational-therapy" className="text-sm font-semibold hover:text-[#1A3A5C] transition-colors" style={{ color: '#6ABF4B' }}>
                {t.learnMore}
              </Link>
            </div>

            {/* Card 4 - Even */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-lg" style={{ border: '1px solid #EEEDE8', borderLeft: '4px solid #2B7DC8', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(43, 125, 200, 0.12)' }}>
                <Clipboard size={24} style={{ color: '#2B7DC8' }} />
              </div>
              <h3 className="font-bold mb-3 text-base sm:text-lg" style={{ color: '#1A3A5C' }}>
                {t.service4Title}
              </h3>
              <p className="mb-4 text-sm sm:text-base" style={{ color: '#777777', lineHeight: '1.6' }}>
                {t.service4Desc}
              </p>
              <Link to="/services/ergonomics" className="text-sm font-semibold hover:text-[#1A3A5C] transition-colors" style={{ color: '#2B7DC8' }}>
                {t.learnMore}
              </Link>
            </div>

            {/* Card 5 - Odd */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-lg" style={{ border: '1px solid #EEEDE8', borderLeft: '4px solid #6ABF4B', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(106, 191, 75, 0.12)' }}>
                <Hand size={24} style={{ color: '#6ABF4B' }} />
              </div>
              <h3 className="font-bold mb-3 text-base sm:text-lg" style={{ color: '#1A3A5C' }}>
                {t.service5Title}
              </h3>
              <p className="mb-4 text-sm sm:text-base" style={{ color: '#777777', lineHeight: '1.6' }}>
                {t.service5Desc}
              </p>
              <Link to="/services/therapy" className="text-sm font-semibold hover:text-[#1A3A5C] transition-colors" style={{ color: '#6ABF4B' }}>
                {t.learnMore}
              </Link>
            </div>

            {/* Card 6 - Even */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-lg" style={{ border: '1px solid #EEEDE8', borderLeft: '4px solid #2B7DC8', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(43, 125, 200, 0.12)' }}>
                <TrendingUp size={24} style={{ color: '#2B7DC8' }} />
              </div>
              <h3 className="font-bold mb-3 text-base sm:text-lg" style={{ color: '#1A3A5C' }}>
                {t.service6Title}
              </h3>
              <p className="mb-4 text-sm sm:text-base" style={{ color: '#777777', lineHeight: '1.6' }}>
                {t.service6Desc}
              </p>
              <Link to="/services/disability-management" className="text-sm font-semibold hover:text-[#1A3A5C] transition-colors" style={{ color: '#2B7DC8' }}>
                {t.learnMore}
              </Link>
            </div>
          </div>

          {/* CTA Strip */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ border: '1px solid #EEEDE8', backgroundColor: '#F0F7F0' }}>
            <h3 className="font-serif text-xl sm:text-2xl text-center md:text-left" style={{ fontFamily: 'DM Serif Display', color: '#1A3A5C' }}>
              {t.ctaTitle}
            </h3>
            <Link
              to="/get-quote"
              className="px-6 py-3 rounded-lg text-white font-semibold transition-all duration-200 hover:shadow-lg whitespace-nowrap text-sm sm:text-base"
              style={{ backgroundColor: '#6ABF4B' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5aaa3d'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6ABF4B'}
            >
              {t.ctaButton}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center font-serif mb-12 sm:mb-16 text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: 'DM Serif Display', color: '#1A3A5C' }}>
            {t.whyTitle}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#EAF4FB' }}>
                <ShieldCheck size={32} style={{ color: '#2B7DC8' }} />
              </div>
              <h3 className="font-bold mb-2 text-base sm:text-lg" style={{ color: '#1A3A5C' }}>{t.whyReason1}</h3>
              <p className="text-sm sm:text-base" style={{ color: '#777777', lineHeight: '1.6' }}>{t.whyReason1Desc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#EAF4FB' }}>
                <CheckCircle size={32} style={{ color: '#2B7DC8' }} />
              </div>
              <h3 className="font-bold mb-2 text-base sm:text-lg" style={{ color: '#1A3A5C' }}>{t.whyReason2}</h3>
              <p className="text-sm sm:text-base" style={{ color: '#777777', lineHeight: '1.6' }}>{t.whyReason2Desc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#EAF4FB' }}>
                <Database size={32} style={{ color: '#2B7DC8' }} />
              </div>
              <h3 className="font-bold mb-2 text-base sm:text-lg" style={{ color: '#1A3A5C' }}>{t.whyReason3}</h3>
              <p className="text-sm sm:text-base" style={{ color: '#777777', lineHeight: '1.6' }}>{t.whyReason3Desc}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#EAF4FB' }}>
                <Users size={32} style={{ color: '#2B7DC8' }} />
              </div>
              <h3 className="font-bold mb-2 text-base sm:text-lg" style={{ color: '#1A3A5C' }}>{t.whyReason4}</h3>
              <p className="text-sm sm:text-base" style={{ color: '#777777', lineHeight: '1.6' }}>{t.whyReason4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: '#F4F4F2' }}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center font-serif mb-12 sm:mb-16 text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: 'DM Serif Display', color: '#1A3A5C' }}>
            {t.teamTitle}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200" style={{ border: '1px solid #EEEDE8', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop"
                alt={t.team1}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-2 text-base sm:text-lg" style={{ color: '#1A3A5C' }}>{t.team1}</h3>
                <p className="text-sm" style={{ color: '#777777' }}>{t.team1Desc}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200" style={{ border: '1px solid #EEEDE8', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=300&fit=crop"
                alt={t.team2}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-2 text-base sm:text-lg" style={{ color: '#1A3A5C' }}>{t.team2}</h3>
                <p className="text-sm" style={{ color: '#777777' }}>{t.team2Desc}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200" style={{ border: '1px solid #EEEDE8', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop"
                alt={t.team3}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-2 text-base sm:text-lg" style={{ color: '#1A3A5C' }}>{t.team3}</h3>
                <p className="text-sm" style={{ color: '#777777' }}>{t.team3Desc}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200" style={{ border: '1px solid #EEEDE8', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
              <img 
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop"
                alt={t.team4}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-2 text-base sm:text-lg" style={{ color: '#1A3A5C' }}>{t.team4}</h3>
                <p className="text-sm" style={{ color: '#777777' }}>{t.team4Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: '#EAF4FB' }}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center font-serif mb-12 sm:mb-16 text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: 'DM Serif Display', color: '#1A3A5C' }}>
            {t.testimonialsTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl" style={{ border: '1px solid #EEEDE8', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
              <p className="mb-6 italic text-sm sm:text-base" style={{ color: '#333333', lineHeight: '1.6' }}>"{t.testimonial1}"</p>
              <div>
                <p className="font-semibold" style={{ color: '#1A3A5C' }}>{t.testimonial1Author}</p>
                <p className="text-sm" style={{ color: '#777777' }}>{t.testimonial1Role}</p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl" style={{ border: '1px solid #EEEDE8', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
              <p className="mb-6 italic text-sm sm:text-base" style={{ color: '#333333', lineHeight: '1.6' }}>"{t.testimonial2}"</p>
              <div>
                <p className="font-semibold" style={{ color: '#1A3A5C' }}>{t.testimonial2Author}</p>
                <p className="text-sm" style={{ color: '#777777' }}>{t.testimonial2Role}</p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl" style={{ border: '1px solid #EEEDE8', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
              <p className="mb-6 italic text-sm sm:text-base" style={{ color: '#333333', lineHeight: '1.6' }}>"{t.testimonial3}"</p>
              <div>
                <p className="font-semibold" style={{ color: '#1A3A5C' }}>{t.testimonial3Author}</p>
                <p className="text-sm" style={{ color: '#777777' }}>{t.testimonial3Role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6" style={{ backgroundColor: '#1A3A5C' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-serif mb-6 text-3xl sm:text-4xl lg:text-5xl" style={{ fontFamily: 'DM Serif Display', color: '#FFFFFF' }}>
            {t.finalCtaTitle}
          </h2>
          <p className="text-lg sm:text-xl mb-8" style={{ color: 'rgba(255, 255, 255, 0.70)' }}>
            {t.finalCtaDescription}
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg text-sm sm:text-base"
            style={{ backgroundColor: '#6ABF4B', color: '#FFFFFF' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5aaa3d'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6ABF4B'}
          >
            {t.finalCtaButton}
          </Link>
        </div>
      </section>
    </>
  );
}