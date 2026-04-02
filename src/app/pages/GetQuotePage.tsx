import { useState } from 'react';
import { Building, Users, MapPin, Briefcase, Mail, CheckCircle } from 'lucide-react';
import { useOutletContext } from 'react-router';

export type Language = 'en' | 'fr';

interface OutletContext {
  language: Language;
}

export default function GetQuotePage() {
  const { language } = useOutletContext<OutletContext>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = (en: string, fr: string) => language === 'fr' ? fr : en;

  if (submitted) {
    return (
      <>
        {/* Hero */}
        <section className="py-24" style={{ backgroundColor: '#0F2A45' }}>
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h1 className="font-serif text-white mb-6" style={{ fontFamily: 'DM Serif Display', fontSize: '44px' }}>
              {t('Thank You!', 'Merci!')}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {t('Your quote request has been received', 'Votre demande de soumission a été reçue')}
            </p>
          </div>
        </section>

        {/* Success Message */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-12 text-center" style={{ border: '2px solid #6ABF4B' }}>
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                <CheckCircle size={48} style={{ color: '#6ABF4B' }} />
              </div>
              
              <h2 className="font-serif mb-4" style={{ fontFamily: 'DM Serif Display', fontSize: '32px', color: '#0F2A45' }}>
                {t('Quote Request Submitted Successfully!', 'Demande de soumission envoyée avec succès!')}
              </h2>
              
              <p className="text-lg mb-6" style={{ color: '#3D3D3A' }}>
                {t(
                  'Thank you for your interest in Santé Circle Health. Our team will review your request and contact you with a detailed quote via email within 3 to 5 business days.',
                  'Merci de votre intérêt pour Santé Circle Health. Notre équipe examinera votre demande et vous contactera avec une soumission détaillée par courriel dans les 3 à 5 jours ouvrables.'
                )}
              </p>
              
              <div className="bg-[#F7F7F6] rounded-xl p-6 mb-8">
                <p className="text-sm" style={{ color: '#666666' }}>
                  {t(
                    'If you have any urgent questions or need immediate assistance, please contact us at:',
                    'Si vous avez des questions urgentes ou besoin d\'une assistance immédiate, veuillez nous contacter à:'
                  )}
                </p>
                <p className="font-semibold mt-2" style={{ color: '#0F2A45' }}>
                  {t('Phone:', 'Téléphone:')} 1-888-555-HEALTH
                </p>
                <p className="font-semibold" style={{ color: '#0F2A45' }}>
                  {t('Email:', 'Courriel:')} quotes@santecirclehealth.com
                </p>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 rounded-lg text-white font-semibold"
                style={{ backgroundColor: '#6ABF4B' }}
              >
                {t('Submit Another Request', 'Soumettre une autre demande')}
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: '#0F2A45' }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="font-serif text-white mb-6" style={{ fontFamily: 'DM Serif Display', fontSize: '44px' }}>
            {t('Get Your Free Quote', 'Obtenez votre soumission gratuite')}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t(
              'Simple and transparent pricing. Complete the form below and receive your personalized quote within 3-5 business days.',
              'Tarification simple et transparente. Remplissez le formulaire ci-dessous et recevez votre soumission personnalisée dans les 3 à 5 jours ouvrables.'
            )}
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-2xl p-8 space-y-8" style={{ border: '1px solid #EEEDE8' }}>
              
              {/* Organization Information */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: '#EEEDE8' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                    <Building size={24} style={{ color: '#6ABF4B' }} />
                  </div>
                  <h2 className="font-serif" style={{ fontFamily: 'DM Serif Display', fontSize: '24px', color: '#0F2A45' }}>
                    {t('Organization Information', 'Informations sur l\'organisation')}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#0F2A45' }}>
                      {t('Company Name', 'Nom de l\'entreprise')} <span style={{ color: '#6ABF4B' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ABF4B]"
                      style={{ border: '1px solid #EEEDE8' }}
                      placeholder={t('Your company name', 'Nom de votre entreprise')}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#0F2A45' }}>
                      {t('Industry', 'Industrie')} <span style={{ color: '#6ABF4B' }}>*</span>
                    </label>
                    <select 
                      required
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ABF4B]" 
                      style={{ border: '1px solid #EEEDE8' }}
                    >
                      <option value="">{t('Select industry', 'Sélectionnez l\'industrie')}</option>
                      <option>{t('Manufacturing', 'Fabrication')}</option>
                      <option>{t('Healthcare', 'Soins de santé')}</option>
                      <option>{t('Retail', 'Commerce de détail')}</option>
                      <option>{t('Technology', 'Technologie')}</option>
                      <option>{t('Construction', 'Construction')}</option>
                      <option>{t('Transportation', 'Transport')}</option>
                      <option>{t('Other', 'Autre')}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Employee & Location Information */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: '#EEEDE8' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                    <Users size={24} style={{ color: '#6ABF4B' }} />
                  </div>
                  <h2 className="font-serif" style={{ fontFamily: 'DM Serif Display', fontSize: '24px', color: '#0F2A45' }}>
                    {t('Company Size & Location', 'Taille et emplacement de l\'entreprise')}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#0F2A45' }}>
                      {t('Number of Employees', 'Nombre d\'employés')} <span style={{ color: '#6ABF4B' }}>*</span>
                    </label>
                    <select 
                      required
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ABF4B]" 
                      style={{ border: '1px solid #EEEDE8' }}
                    >
                      <option value="">{t('Select range', 'Sélectionnez la plage')}</option>
                      <option>1-50 {t('employees', 'employés')}</option>
                      <option>51-200 {t('employees', 'employés')}</option>
                      <option>201-500 {t('employees', 'employés')}</option>
                      <option>501-1000 {t('employees', 'employés')}</option>
                      <option>1000+ {t('employees', 'employés')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#0F2A45' }}>
                      {t('Location', 'Emplacement')} <span style={{ color: '#6ABF4B' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ABF4B]"
                      style={{ border: '1px solid #EEEDE8' }}
                      placeholder={t('City, Province/State', 'Ville, Province/État')}
                    />
                  </div>
                </div>
              </div>

              {/* Services of Interest */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: '#EEEDE8' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                    <Briefcase size={24} style={{ color: '#6ABF4B' }} />
                  </div>
                  <h2 className="font-serif" style={{ fontFamily: 'DM Serif Display', fontSize: '24px', color: '#0F2A45' }}>
                    {t('Services of Interest', 'Services d\'intérêt')}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { en: 'Accommodation & Return to Work', fr: 'Accommodement et retour au travail' },
                    { en: 'Early Intervention', fr: 'Intervention précoce' },
                    { en: 'Occupational Therapy', fr: 'Ergothérapie' },
                    { en: 'Ergonomics', fr: 'Ergonomie' },
                    { en: 'Physical Therapy', fr: 'Physiothérapie' },
                    { en: 'Disability Management', fr: 'Gestion de l\'invalidité' },
                  ].map((service) => (
                    <label 
                      key={service.en} 
                      className="flex items-center gap-3 p-4 rounded-lg cursor-pointer hover:bg-[#F7F7F6] transition-colors" 
                      style={{ border: '1px solid #EEEDE8' }}
                    >
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 rounded focus:ring-2 focus:ring-[#6ABF4B]"
                        style={{ accentColor: '#6ABF4B' }}
                      />
                      <span style={{ color: '#3D3D3A' }}>{language === 'fr' ? service.fr : service.en}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: '#EEEDE8' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                    <Mail size={24} style={{ color: '#6ABF4B' }} />
                  </div>
                  <h2 className="font-serif" style={{ fontFamily: 'DM Serif Display', fontSize: '24px', color: '#0F2A45' }}>
                    {t('Contact Information', 'Coordonnées')}
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 font-medium" style={{ color: '#0F2A45' }}>
                        {t('Your Name', 'Votre nom')} <span style={{ color: '#6ABF4B' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ABF4B]"
                        style={{ border: '1px solid #EEEDE8' }}
                        placeholder={t('Full name', 'Nom complet')}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium" style={{ color: '#0F2A45' }}>
                        {t('Job Title', 'Titre du poste')}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ABF4B]"
                        style={{ border: '1px solid #EEEDE8' }}
                        placeholder={t('Your position', 'Votre poste')}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 font-medium" style={{ color: '#0F2A45' }}>
                        {t('Email Address', 'Adresse courriel')} <span style={{ color: '#6ABF4B' }}>*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ABF4B]"
                        style={{ border: '1px solid #EEEDE8' }}
                        placeholder={t('email@company.com', 'courriel@entreprise.com')}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium" style={{ color: '#0F2A45' }}>
                        {t('Phone Number', 'Numéro de téléphone')}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ABF4B]"
                        style={{ border: '1px solid #EEEDE8' }}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#0F2A45' }}>
                      {t('Additional Comments or Requirements', 'Commentaires ou exigences supplémentaires')}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ABF4B]"
                      style={{ border: '1px solid #EEEDE8' }}
                      placeholder={t('Tell us more about your needs...', 'Parlez-nous de vos besoins...')}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t" style={{ borderColor: '#EEEDE8' }}>
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all hover:opacity-90"
                  style={{ backgroundColor: '#6ABF4B' }}
                >
                  {t('Submit Quote Request', 'Soumettre la demande de soumission')}
                </button>
                <p className="text-center text-sm mt-4" style={{ color: '#666666' }}>
                  {t(
                    'By submitting this form, you agree to be contacted by Santé Circle Health regarding your quote request.',
                    'En soumettant ce formulaire, vous acceptez d\'être contacté par Santé Circle Health concernant votre demande de soumission.'
                  )}
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}