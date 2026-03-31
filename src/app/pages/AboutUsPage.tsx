import { Link, useOutletContext } from 'react-router';

export type Language = 'en' | 'fr';

interface OutletContext {
  language: Language;
}

const translations = {
  en: {
    title: 'About Santé Circle Health',
    subtitle: 'We are a healthcare company dedicated to helping people maximize their daily abilities.',
    p1: 'Santé Circle Health is committed to helping people return to function after an illness, injury, or accident. We listen with purpose and provide solutions that work.',
    p2: 'With offices across North America and a network of 500+ clinics, we deliver workplace health services where you need them — on-site at your location or at one of our partner clinics.',
    p3: 'Our multidisciplinary team includes occupational therapists, physiotherapists, chiropractors, kinesiologists, ergonomists, and disability case managers — all working together to help your employees return to work safely and successfully.',
    ctaTitle: 'Ready to get started?',
    ctaButton: 'Get a Quote',
  },
  fr: {
    title: 'À propos de Santé Circle Health',
    subtitle: 'Nous sommes une entreprise de soins de santé dédiée à aider les gens à maximiser leurs capacités quotidiennes.',
    p1: 'Santé Circle Health s\'engage à aider les gens à retrouver leurs capacités après une maladie, une blessure ou un accident. Nous écoutons avec intention et fournissons des solutions qui fonctionnent.',
    p2: 'Avec des bureaux à travers l\'Amérique du Nord et un réseau de plus de 500 cliniques, nous offrons des services de santé au travail où vous en avez besoin — sur place à votre emplacement ou dans l\'une de nos cliniques partenaires.',
    p3: 'Notre équipe multidisciplinaire comprend des ergothérapeutes, des physiothérapeutes, des chiropraticiens, des kinésiologues, des ergonomes et des gestionnaires de cas d\'invalidité — tous travaillant ensemble pour aider vos employés à retourner au travail en toute sécurité et avec succès.',
    ctaTitle: 'Prêt à commencer?',
    ctaButton: 'Obtenir une soumission',
  },
};

export default function AboutUsPage() {
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
          <p className="text-white/70 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm sm:text-base mb-6" style={{ lineHeight: '1.6', color: '#3D3D3A' }}>
              {t.p1}
            </p>
            <p className="text-sm sm:text-base mb-6" style={{ lineHeight: '1.6', color: '#3D3D3A' }}>
              {t.p2}
            </p>
            <p className="text-sm sm:text-base" style={{ lineHeight: '1.6', color: '#3D3D3A' }}>
              {t.p3}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6" style={{ backgroundColor: '#0F2A45' }}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-serif text-white mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: 'DM Serif Display' }}>
            {t.ctaTitle}
          </h2>
          <Link
            to="/get-quote"
            className="inline-block px-6 sm:px-8 py-3 rounded-lg text-white font-semibold text-sm sm:text-base"
            style={{ backgroundColor: '#6ABF4B' }}
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}