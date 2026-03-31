import { ReactNode } from 'react';
import { Link, useOutletContext } from 'react-router';
import { ChevronRight, Phone, Mail } from 'lucide-react';

export type Language = 'en' | 'fr';

interface OutletContext {
  language: Language;
}

interface ServicePageTemplateProps {
  breadcrumb: string;
  tag: string;
  title: string;
  subheading: string;
  heroImage?: string;
  content: ReactNode;
  benefits: Array<{
    icon: ReactNode;
    title: string;
    description: string;
  }>;
  process: Array<{
    title: string;
    description: string;
  }>;
  relatedServices: Array<{
    title: string;
    link: string;
  }>;
}

const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    getQuote: 'Get a Quote',
    contactUs: 'Contact Us',
    benefits: 'Key Benefits',
    process: 'Our Process',
    relatedServices: 'Related Services',
    learnMore: 'Learn More',
    getInTouch: 'Get In Touch',
    getInTouchDesc: 'Ready to learn more about this service?',
    contactToday: 'Contact Us Today',
  },
  fr: {
    home: 'Accueil',
    services: 'Services',
    getQuote: 'Obtenir une soumission',
    contactUs: 'Contactez-nous',
    benefits: 'Avantages clés',
    process: 'Notre processus',
    relatedServices: 'Services connexes',
    learnMore: 'En savoir plus',
    getInTouch: 'Contactez-nous',
    getInTouchDesc: 'Prêt à en savoir plus sur ce service?',
    contactToday: 'Contactez-nous aujourd\'hui',
  },
};

export function ServicePageTemplate({
  breadcrumb,
  tag,
  title,
  subheading,
  heroImage,
  content,
  benefits,
  process,
  relatedServices,
}: ServicePageTemplateProps) {
  const { language } = useOutletContext<OutletContext>();
  const t = translations[language];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-24" style={{ backgroundColor: '#0F2A45', minHeight: '420px' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-white/70">{breadcrumb}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#6ABF4B' }}>
                {tag}
              </div>
              <h1 className="font-serif text-white mb-6" style={{ fontFamily: 'DM Serif Display', fontSize: '44px', lineHeight: '1.2' }}>
                {title}
              </h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                {subheading}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/get-quote"
                  className="px-6 py-3 rounded-lg text-white font-semibold transition-all duration-200 hover:shadow-lg"
                  style={{ backgroundColor: '#6ABF4B' }}
                >
                  {t.getQuote}
                </Link>
                <Link
                  to="/contact-us"
                  className="px-6 py-3 rounded-lg text-white font-semibold transition-all duration-200"
                  style={{ 
                    borderWidth: '1.5px',
                    borderColor: '#ffffff',
                    backgroundColor: 'transparent',
                  }}
                >
                  {t.contactUs}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              {heroImage ? (
                <img src={heroImage} alt={title} className="w-full h-80 object-cover rounded-2xl shadow-xl" />
              ) : (
                <div className="w-full h-80 rounded-2xl shadow-xl" style={{ background: 'linear-gradient(135deg, #6ABF4B 0%, #0F2A45 100%)' }} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {content}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="rounded-2xl p-8" style={{ backgroundColor: '#F3F8F5', border: '1px solid #EEEDE8', borderLeft: '4px solid #6ABF4B' }}>
                <h3 className="font-bold text-xl mb-4" style={{ color: '#0F2A45' }}>
                  Ready to Get Started?
                </h3>
                <p className="mb-6" style={{ color: '#3D3D3A' }}>
                  Contact our team to discuss how this service can support your organization.
                </p>
                <Link
                  to="/get-quote"
                  className="block w-full text-center px-6 py-3 rounded-lg text-white font-semibold mb-4 transition-all duration-200 hover:shadow-lg"
                  style={{ backgroundColor: '#6ABF4B' }}
                >
                  Get a Free Quote
                </Link>
                <div className="space-y-3 text-sm" style={{ color: '#3D3D3A' }}>
                  <a href="tel:+18337838088" className="flex items-center gap-2 hover:text-[#6ABF4B]">
                    <Phone size={16} />
                    <span>+1 (833) 783-8088</span>
                  </a>
                  <a href="mailto:info@santecirclehealth.com" className="flex items-center gap-2 hover:text-[#6ABF4B]">
                    <Mail size={16} />
                    <span>info@santecirclehealth.com</span>
                  </a>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #EEEDE8' }}>
                <h3 className="font-bold mb-4" style={{ color: '#0F2A45', fontSize: '14px' }}>
                  Related Services
                </h3>
                <div className="space-y-3">
                  {relatedServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.link}
                      className="block text-sm hover:text-[#6ABF4B] transition-colors"
                      style={{ color: '#3D3D3A' }}
                    >
                      → {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16" style={{ backgroundColor: '#F7F7F6' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label mb-3">Why Choose SCH</div>
            <h2 className="font-serif" style={{ fontFamily: 'DM Serif Display', fontSize: '32px', color: '#0F2A45' }}>
              What This Service Delivers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-200" style={{ border: '1px solid #EEEDE8' }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#6ABF4B' }}>
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ color: '#0F2A45' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#3D3D3A' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label mb-3">Our Process</div>
            <h2 className="font-serif" style={{ fontFamily: 'DM Serif Display', fontSize: '32px', color: '#0F2A45' }}>
              How It Works
            </h2>
          </div>

          <div className="relative flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-0.5" style={{ backgroundColor: '#6ABF4B', opacity: 0.3 }} />
            
            {process.map((step, index) => (
              <div key={index} className="flex-1 text-center relative">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#6ABF4B' }}>
                  {index + 1}
                </div>
                <h3 className="font-bold mb-3 text-xl" style={{ color: '#0F2A45' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#3D3D3A' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20" style={{ backgroundColor: '#0F2A45' }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-serif text-white mb-4" style={{ fontFamily: 'DM Serif Display', fontSize: '36px' }}>
            Invite us into your circle of care.
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Simple. Transparent. Secure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-quote"
              className="px-8 py-3 rounded-lg text-white font-semibold transition-all duration-200 hover:shadow-lg"
              style={{ backgroundColor: '#6ABF4B' }}
            >
              Get a Quote
            </Link>
            <Link
              to="/find-rehab-clinic"
              className="px-8 py-3 rounded-lg text-white font-semibold transition-all duration-200"
              style={{ 
                borderWidth: '1.5px',
                borderColor: '#ffffff',
                backgroundColor: 'transparent',
              }}
            >
              Find a Clinic Near You
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}