import { Link } from "react-router";
import { Phone, Mail, Printer, MapPin } from "lucide-react";
const logoImage = "https://via.placeholder.com/150x50?text=Logo";

export type Language = "en" | "fr";

interface GlobalFooterProps {
  language: Language;
}

const translations = {
  en: {
    brand: "Santé Circle Health",
    
    description:
      "We are a healthcare company dedicated to helping people maximize their daily abilities. Nous sommes une entreprise de soins de santé dédiée qui aide les gens à maximiser leurs capacités quotidiennes.",
    corporateOffice: "Corporate Office",
    regionalOffice: "Regional Office",
    services: "Services",
    company: "Company",
    legal: "Legal",
    copyright:
      "Copyright 2026 | All Rights Reserved | Santé Circle Health",
    // Services
    accommodation:
      "Accommodation, Stay at Work and Return to Work",
    earlyIntervention:
      "Early Intervention / Workplace Wellness",
    occupationalTherapy: "Occupational Therapy",
    ergonomics: "Ergonomics / Job Demands Analysis",
    therapy:
      "Therapy – Physiotherapy, Chiropractic and Massage",
    disabilityManagement: "Disability Case Management",
    // Company
    aboutUs: "About Us",
    ourTeam: "Our Team",
    findRehab: "Find a Rehabilitation Clinic",
    findOccHealth: "Find an Occupational Health Clinic",
    joinUs: "Join Us",
    contactUs: "Contact Us",
    // Legal
    accessibility: "Accessibility",
    accessibilityFr: "Accessibilité",
    privacyPolicy: "Privacy Policy",
    privacyPolicyFr: "Politique de Confidentialité",
    securityPolicy: "Security Policy",
    securityPolicyFr: "Politique de sécurité",
    getQuote: "Get a Quote",
    // Bottom
    english: "English",
    french: "Français",
    logIn: "Log In",
  },
  fr: {
    brand: "Santé Circle Health",
    
    description:
      "We are a healthcare company dedicated to helping people maximize their daily abilities. Nous sommes une entreprise de soins de santé dédiée qui aide les gens à maximiser leurs capacités quotidiennes.",
    corporateOffice: "Bureau corporatif",
    regionalOffice: "Bureau régional",
    services: "Services",
    company: "Entreprise",
    legal: "Légal",
    copyright:
      "Droits d'auteur 2026 | Tous droits réservés | Santé Circle Health",
    // Services
    accommodation:
      "Accommodation, séjour au travail et retour au travail",
    earlyIntervention:
      "Intervention précoce / Mieux-être au travail",
    occupationalTherapy: "Ergothérapie",
    ergonomics: "Ergonomie / Analyse des exigences du travail",
    therapy:
      "Thérapie – Physiothérapie, chiropratique et massothérapie",
    disabilityManagement: "Gestion de l'invalidité",
    // Company
    aboutUs: "À propos de nous",
    ourTeam: "Notre équipe",
    findRehab: "Trouver une clinique de réadaptation",
    findOccHealth: "Trouver une clinique de santé au travail",
    joinUs: "Joignez-vous à nous",
    contactUs: "Contactez-nous",
    // Legal
    accessibility: "Accessibility",
    accessibilityFr: "Accessibilité",
    privacyPolicy: "Privacy Policy",
    privacyPolicyFr: "Politique de Confidentialité",
    securityPolicy: "Security Policy",
    securityPolicyFr: "Politique de sécurité",
    getQuote: "Obtenir une soumission",
    // Bottom
    english: "English",
    french: "Français",
    logIn: "Se connecter",
  },
};

export function GlobalFooter({ language }: GlobalFooterProps) {
  const t = translations[language];

  return (
    <footer
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: "#0F2A45" }}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&h=1200&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImage}
                alt="Santé Circle Health"
                className="h-12 w-auto"
              />
            </div>
    
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              {t.description}
            </p>

            <div className="space-y-3 text-white/70 text-sm">
              <div>
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <MapPin size={16} className="text-[#6ABF4B] flex-shrink-0" />
                  <span>{t.corporateOffice}:</span>
                </div>
                <div className="pl-6">
                  4711 Yonge Street, 10th Floor
                  <br />
                  Toronto, Ontario, M2N 6K8, Canada
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <MapPin size={16} className="text-[#6ABF4B] flex-shrink-0" />
                  <span>{t.regionalOffice}:</span>
                </div>
                <div className="pl-6">
                  595 Howe Street, Suite 306
                  <br />
                  Vancouver, British Columbia, V6C 2T5
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <MapPin size={16} className="text-[#6ABF4B] flex-shrink-0" />
                  <span>{t.regionalOffice}:</span>
                </div>
                <div className="pl-6">
                  9160 Forum Corporate Parkway, Suite 350
                  <br />
                  Fort Myers, Florida, USA 33905
                </div>
              </div>
              <div className="pt-2 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-[#6ABF4B] flex-shrink-0" />
                  <span>T: +1 (833) 783-8088</span>
                </div>
                <div className="flex items-center gap-2">
                  <Printer size={16} className="text-[#6ABF4B] flex-shrink-0" />
                  <span>F: +1 (647) 243-5947</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-[#6ABF4B] flex-shrink-0" />
                  <a href="mailto:info@santecirclehealth.com" className="hover:text-[#6ABF4B] transition-colors">
                    info@santecirclehealth.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-base">
              {t.services}
            </h3>
            <div className="space-y-2.5">
              <div className="text-sm">
                <div className="text-white/90 font-semibold mb-2">
                  EN
                </div>
                <Link
                  to="/services/accommodation-return-to-work"
                  className="block text-white/70 hover:text-[#6ABF4B] transition-colors mb-1.5"
                >
                  {translations.en.accommodation}
                </Link>
                <Link
                  to="/services/early-intervention"
                  className="block text-white/70 hover:text-[#6ABF4B] transition-colors mb-1.5"
                >
                  {translations.en.earlyIntervention}
                </Link>
                <Link
                  to="/services/occupational-therapy"
                  className="block text-white/70 hover:text-[#6ABF4B] transition-colors mb-1.5"
                >
                  {translations.en.occupationalTherapy}
                </Link>
                <Link
                  to="/services/ergonomics"
                  className="block text-white/70 hover:text-[#6ABF4B] transition-colors mb-1.5"
                >
                  {translations.en.ergonomics}
                </Link>
                <Link
                  to="/services/therapy"
                  className="block text-white/70 hover:text-[#6ABF4B] transition-colors mb-1.5"
                >
                  {translations.en.therapy}
                </Link>
                <Link
                  to="/services/disability-management"
                  className="block text-white/70 hover:text-[#6ABF4B] transition-colors mb-1.5"
                >
                  {translations.en.disabilityManagement}
                </Link>
              </div>
              <div className="border-t border-white/10 pt-3 text-sm">
                <div className="text-white/90 font-semibold mb-2">
                  FR
                </div>
                <Link
                  to="/services/accommodation-return-to-work"
                  className="block text-white/70 hover:text-[#6ABF4B] transition-colors mb-1.5"
                >
                  {translations.fr.accommodation}
                </Link>
                <Link
                  to="/services/early-intervention"
                  className="block text-white/70 hover:text-[#6ABF4B] transition-colors mb-1.5"
                >
                  {translations.fr.earlyIntervention}
                </Link>
                <Link
                  to="/services/occupational-therapy"
                  className="block text-white/70 hover:text-[#6ABF4B] transition-colors mb-1.5"
                >
                  {translations.fr.occupationalTherapy}
                </Link>
                <Link
                  to="/services/ergonomics"
                  className="block text-white/70 hover:text-[#6ABF4B] transition-colors mb-1.5"
                >
                  {translations.fr.ergonomics}
                </Link>
                <Link
                  to="/services/therapy"
                  className="block text-white/70 hover:text-[#6ABF4B] transition-colors mb-1.5"
                >
                  {translations.fr.therapy}
                </Link>
                <Link
                  to="/services/disability-management"
                  className="block text-white/70 hover:text-[#6ABF4B] transition-colors mb-1.5"
                >
                  {translations.fr.disabilityManagement}
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-white font-bold mb-4 text-base">
              {t.company}
            </h3>
            <div className="space-y-2.5 text-sm">
              <Link
                to="/about-us"
                className="block text-white/70 hover:text-[#6ABF4B] transition-colors"
              >
                {t.aboutUs}
              </Link>
              <Link
                to="/about-us#team"
                className="block text-white/70 hover:text-[#6ABF4B] transition-colors"
              >
                {t.ourTeam}
              </Link>
              <Link
                to="/find-rehab-clinic"
                className="block text-white/70 hover:text-[#6ABF4B] transition-colors"
              >
                {t.findRehab}
              </Link>
              <Link
                to="/find-occ-health-clinic"
                className="block text-white/70 hover:text-[#6ABF4B] transition-colors"
              >
                {t.findOccHealth}
              </Link>
              <Link
                to="/join-us"
                className="block text-white/70 hover:text-[#6ABF4B] transition-colors"
              >
                {t.joinUs}
              </Link>
              <Link
                to="/contact-us"
                className="block text-white/70 hover:text-[#6ABF4B] transition-colors"
              >
                {t.contactUs}
              </Link>
            </div>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="text-white font-bold mb-4 text-base">
              {t.legal}
            </h3>
            <div className="space-y-2.5 text-sm">
              <a
                href="#"
                className="block text-white/70 hover:text-[#6ABF4B] transition-colors"
              >
                {t.accessibility}
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-[#6ABF4B] transition-colors"
              >
                {t.accessibilityFr}
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-[#6ABF4B] transition-colors"
              >
                {t.privacyPolicy}
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-[#6ABF4B] transition-colors"
              >
                {t.privacyPolicyFr}
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-[#6ABF4B] transition-colors"
              >
                {t.securityPolicy}
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-[#6ABF4B] transition-colors"
              >
                {t.securityPolicyFr}
              </a>
              <Link
                to="/get-quote"
                className="block text-[#6ABF4B] hover:text-[#6ABF4B] transition-colors font-semibold"
              >
                {t.getQuote}
              </Link>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <div>{t.copyright}</div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              {t.english}
            </a>
            <span>|</span>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              {t.french}
            </a>
            <span>|</span>
            <button className="hover:text-white transition-colors">
              {t.logIn}
            </button>
            <span>|</span>
            <Link
              to="/get-quote"
              className="hover:text-white transition-colors"
            >
              {t.getQuote}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}