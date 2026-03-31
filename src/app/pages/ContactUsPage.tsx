import { useOutletContext } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';

export type Language = 'en' | 'fr';

interface OutletContext {
  language: Language;
}

const translations = {
  en: {
    title: 'Contact Us',
    subtitle: 'We\'re here to help. Reach out today.',
    phone: 'Phone',
    email: 'Email',
    office: 'Corporate Office',
    formTitle: 'Send us a message',
    firstName: 'First Name',
    lastName: 'Last Name',
    emailLabel: 'Email',
    company: 'Company',
    message: 'Message',
    submit: 'Send Message',
  },
  fr: {
    title: 'Contactez-nous',
    subtitle: 'Nous sommes là pour vous aider. Contactez-nous aujourd\'hui.',
    phone: 'Téléphone',
    email: 'Courriel',
    office: 'Bureau corporatif',
    formTitle: 'Envoyez-nous un message',
    firstName: 'Prénom',
    lastName: 'Nom de famille',
    emailLabel: 'Courriel',
    company: 'Entreprise',
    message: 'Message',
    submit: 'Envoyer le message',
  },
};

export default function ContactUsPage() {
  const { language } = useOutletContext<OutletContext>();
  const t = translations[language];

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6" style={{ backgroundColor: '#0F2A45' }}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="font-serif text-white mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl" style={{ fontFamily: 'DM Serif Display' }}>
            {t.title}
          </h1>
          <p className="text-white/70 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="text-center p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl" style={{ border: '1px solid #EEEDE8' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                <Phone size={24} style={{ color: '#6ABF4B' }} />
              </div>
              <h3 className="font-bold mb-2 text-base sm:text-lg" style={{ color: '#0F2A45' }}>{t.phone}</h3>
              <a href="tel:+18337838088" className="hover:text-[#6ABF4B] text-sm sm:text-base" style={{ color: '#3D3D3A' }}>
                +1 (833) 783-8088
              </a>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl" style={{ border: '1px solid #EEEDE8' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                <Mail size={24} style={{ color: '#6ABF4B' }} />
              </div>
              <h3 className="font-bold mb-2 text-base sm:text-lg" style={{ color: '#0F2A45' }}>{t.email}</h3>
              <a href="mailto:info@santecirclehealth.com" className="hover:text-[#6ABF4B] text-sm sm:text-base break-all" style={{ color: '#3D3D3A' }}>
                info@santecirclehealth.com
              </a>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl" style={{ border: '1px solid #EEEDE8' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                <MapPin size={24} style={{ color: '#6ABF4B' }} />
              </div>
              <h3 className="font-bold mb-2 text-base sm:text-lg" style={{ color: '#0F2A45' }}>{t.office}</h3>
              <p className="text-xs sm:text-sm" style={{ color: '#3D3D3A' }}>
                4711 Yonge Street, 10th Floor<br />
                Toronto, Ontario M2N 6K8
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8" style={{ border: '1px solid #EEEDE8' }}>
            <h2 className="font-serif mb-6 text-2xl sm:text-3xl" style={{ fontFamily: 'DM Serif Display', color: '#0F2A45' }}>
              {t.formTitle}
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium text-sm sm:text-base" style={{ color: '#0F2A45' }}>{t.firstName}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg text-sm sm:text-base"
                    style={{ border: '1px solid #EEEDE8' }}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-sm sm:text-base" style={{ color: '#0F2A45' }}>{t.lastName}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg text-sm sm:text-base"
                    style={{ border: '1px solid #EEEDE8' }}
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium text-sm sm:text-base" style={{ color: '#0F2A45' }}>{t.emailLabel}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg text-sm sm:text-base"
                  style={{ border: '1px solid #EEEDE8' }}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-sm sm:text-base" style={{ color: '#0F2A45' }}>{t.company}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg text-sm sm:text-base"
                  style={{ border: '1px solid #EEEDE8' }}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-sm sm:text-base" style={{ color: '#0F2A45' }}>{t.message}</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg text-sm sm:text-base"
                  style={{ border: '1px solid #EEEDE8' }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-semibold text-sm sm:text-base"
                style={{ backgroundColor: '#6ABF4B' }}
              >
                {t.submit}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}