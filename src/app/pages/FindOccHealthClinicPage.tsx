import { useState } from 'react';
import { ChevronDown, MapPin, Briefcase, Clipboard, CheckCircle } from 'lucide-react';
import { Link, useOutletContext } from 'react-router';
import ClinicMap, { ClinicLocation } from '../components/ClinicMap';

export type Language = 'en' | 'fr';

interface OutletContext {
  language: Language;
}

// Province data with cities (same as rehab clinic page)
const provinces = [
  {
    name: 'Alberta',
    nameEn: 'Alberta',
    nameFr: 'Alberta',
    cityCount: 12,
    cities: ['Calgary', 'Cardston', 'Edmonton', 'Fort McMurray', 'Fort Saskatchewan', 'Gibbons', 'Grande Prairie', 'Lethbridge', 'Medicine Hat', 'Pincher Creek', 'Red Deer', 'Sherwood Park']
  },
  {
    name: 'British Columbia',
    nameEn: 'British Columbia',
    nameFr: 'Colombie-Britannique',
    cityCount: 39,
    cities: ['Abbotsford', 'Burnaby', 'Campbell River', 'Castlegar', 'Chilliwack', 'Coquitlam', 'Courtenay', 'Cranbrook', 'Dawson Creek', 'Delta', 'Duncan', 'Fort Saint-John', 'Gwaii Haanas', 'Kamloops', 'Kelowna', 'Kimberley', 'Kitimat', 'Langley', 'Maple Ridge', 'Mission', 'Nanaimo', 'Nelson', 'Penticton', 'Port Alberni', 'Port Coquitlam', 'Port Moody', 'Powell River', 'Prince George', 'Prince Rupert', 'Richmond', 'Sidney', 'South Surrey', 'Surrey', 'Terrace', 'Trail', 'Vancouver', 'Vernon', 'Victoria', 'Williams Lake']
  },
  {
    name: 'Manitoba',
    nameEn: 'Manitoba',
    nameFr: 'Manitoba',
    cityCount: 6,
    cities: ['Brandon', 'Dauphin', 'Flin Flon', 'Morden', 'Thompson', 'Winnipeg']
  },
  {
    name: 'New Brunswick',
    nameEn: 'New Brunswick',
    nameFr: 'Nouveau-Brunswick',
    cityCount: 7,
    cities: ['Bas Caraquet', 'Bathurst', 'Fredericton', 'Grand Falls', 'Moncton', 'Saint John', 'Woodstock']
  },
  {
    name: 'Newfoundland and Labrador',
    nameEn: 'Newfoundland and Labrador',
    nameFr: 'Terre-Neuve-et-Labrador',
    cityCount: 13,
    cities: ['Clarenville', 'Corner Brook', 'Deer Lake', 'Glovertown', 'Goose Bay', 'Grand Falls-Windsor', 'Happy Valley-Goose Bay', 'Labrador City', "Lewin's Cove", 'Lewsiporte', 'Mount Pearl', "St. John's", 'Shoal Harbour']
  },
  {
    name: 'Northwest Territories',
    nameEn: 'Northwest Territories',
    nameFr: 'Territoires du Nord-Ouest',
    cityCount: 6,
    cities: ['Dawson City', 'Deline', 'Fort Simpson', 'Fort Smith', 'Inuvik', 'Yellowknife']
  },
  {
    name: 'Nova Scotia',
    nameEn: 'Nova Scotia',
    nameFr: 'Nouvelle-Écosse',
    cityCount: 22,
    cities: ['Amherst', 'Antigonish', 'Baddeck', 'Barrington Passage', 'Bridgewater', 'Caledonia', 'Chester', 'Chetticamp', 'Dartmouth', 'Digby', 'Elmsdale', 'Enfield', 'Glace Bay', 'Halifax', 'Neils Harbour', 'New Glasgow', 'Shelburne', 'Sydney', 'Truro', 'Upper Tantallon', 'Wolfville', 'Yarmouth']
  },
  {
    name: 'Nunavut',
    nameEn: 'Nunavut',
    nameFr: 'Nunavut',
    cityCount: 8,
    cities: ['Iqaluit', 'Naujaat', 'Pangnirtung', 'Paulatuk', 'Pond Inlet', 'Rankin Inlet', 'Resolute', 'Resolute Bay']
  },
  {
    name: 'Ontario',
    nameEn: 'Ontario',
    nameFr: 'Ontario',
    cityCount: 68,
    cities: ['Ajax', 'Akwesasne', 'Aurora', 'Barrie', 'Belle River', 'Belleville', 'Bobcaygeon', 'Bowmanville', 'Brampton', 'Brockville', 'Burlington', 'Casselman', 'Dryden', 'East York', 'Etobicoke', 'Fenelon Falls', 'Guelph', 'Hakesbury', 'Hamilton', 'Kanata', 'Kenora', 'Kirkfield', 'Kingston', 'Kingsville', 'Kitchener', 'LaSalle', 'Leamington', 'London', 'Long Sault', 'Marathon', 'Markham', 'Midland', 'Mississauga', 'Nepean', 'Niagara Falls', 'Niagara-on-the-Lake', 'North Bay', 'North York', 'Oakville', 'Oshawa', 'Ottawa', 'Peterborough', 'Pickering', 'Port Severn', 'Sarnia', 'Sault Ste. Marie', 'Scarborough', 'St-Catherines', 'Stittsville', 'Stoney Creek', 'Strathroy', 'Sudbury', 'Thornhill', 'Thunder Bay', 'Timmins', 'Tobermory', 'Toronto', 'Trenton', 'Vaughan', 'Waterloo', 'Whitby', 'Wiarton', 'Windsor', 'Woodbridge', 'Woodstock']
  },
  {
    name: 'Prince Edward Island',
    nameEn: 'Prince Edward Island',
    nameFr: 'Île-du-Prince-Édouard',
    cityCount: 3,
    cities: ['Charlottetown', 'Montague', 'Stratford']
  },
  {
    name: 'Québec',
    nameEn: 'Quebec',
    nameFr: 'Québec',
    cityCount: 48,
    cities: ['Amqui', 'Blainville', 'Boisbriand', 'Bois-Franc', 'Candiac', 'Chicoutimi', 'Dollard-des-Ormeaux', 'Gaspé', 'Gatineau', 'Havre-St Pierre', 'Île-Perrot', 'Lachine', 'LaSalle', 'Laval', 'Les Escoumins', 'Lévis', 'Mascouche', 'Mont-Joli', 'Montmagny', 'Montréal', 'Mont-Saint-Hilaire', 'Piedmont', 'Pointe-Claire', 'Pont-Rouge', 'Québec City', 'Repentigny', 'Rimouski', 'Rivière-des-Prairies', 'Rivière-du-Loup', 'Rosemère', 'Rouyn-Noranda', 'Sainte-Anne-de-Bellevue', 'Saint-Eustache', 'Saint-Hyacinthe', 'Saint-Laurent', 'Saguenay', 'Sept-Iles', 'Shawinigan', 'Sherbrooke', 'St-Bruno', 'St-Jérôme', 'St-Léonard', 'Trois-Rivières', 'Tadoussac', 'Valleyfield', 'Ville de Québec', 'Ville Mont-Royal', 'Westmount']
  },
  {
    name: 'Saskatchewan',
    nameEn: 'Saskatchewan',
    nameFr: 'Saskatchewan',
    cityCount: 11,
    cities: ['Estevan', 'Lloydminster', 'Moose Jaw', 'Muenster', 'North Battleford', 'Prince Albert', 'Regina', 'Saskatoon', 'Swift Current', 'Weyburn', 'Yorkton']
  },
  {
    name: 'Yukon',
    nameEn: 'Yukon',
    nameFr: 'Yukon',
    cityCount: 3,
    cities: ['Dawson City', 'Haines Junction', 'Whitehorse']
  }
];

// Occupational Health clinic locations with coordinates
const occHealthClinics: ClinicLocation[] = [
  // Ontario
  { id: '1', name: 'Toronto Occupational Health Services', city: 'Toronto', province: 'Ontario', lat: 43.6532, lng: -79.3832, services: ['Disability Management', 'Ergonomics', 'Post-Offer Testing'], address: '4711 Yonge Street', phone: '+1 (833) 783-8088' },
  { id: '2', name: 'Ottawa Workplace Health', city: 'Ottawa', province: 'Ontario', lat: 45.4215, lng: -75.6972, services: ['Disability Management', 'JDA'], phone: '+1 (833) 783-8088' },
  { id: '3', name: 'Hamilton Occ Health Clinic', city: 'Hamilton', province: 'Ontario', lat: 43.2557, lng: -79.8711, services: ['Ergonomics', 'Post-Offer Testing'], phone: '+1 (833) 783-8088' },
  { id: '4', name: 'Mississauga Employment Health', city: 'Mississauga', province: 'Ontario', lat: 43.5890, lng: -79.6441, services: ['Disability Management', 'Ergonomics', 'JDA'], phone: '+1 (833) 783-8088' },
  { id: '5', name: 'London Workplace Wellness', city: 'London', province: 'Ontario', lat: 42.9849, lng: -81.2453, services: ['Post-Offer Testing', 'Ergonomics'], phone: '+1 (833) 783-8088' },
  // Quebec
  { id: '6', name: 'Montréal Santé au Travail', city: 'Montréal', province: 'Québec', lat: 45.5017, lng: -73.5673, services: ['Disability Management', 'Ergonomics'], phone: '+1 (833) 783-8088' },
  { id: '7', name: 'Québec City Workplace Health', city: 'Québec City', province: 'Québec', lat: 46.8139, lng: -71.2080, services: ['JDA', 'Post-Offer Testing'], phone: '+1 (833) 783-8088' },
  { id: '8', name: 'Laval Occupational Services', city: 'Laval', province: 'Québec', lat: 45.6066, lng: -73.7124, services: ['Disability Management', 'Ergonomics', 'Post-Offer Testing'], phone: '+1 (833) 783-8088' },
  { id: '9', name: 'Gatineau Employment Health', city: 'Gatineau', province: 'Québec', lat: 45.4765, lng: -75.7013, services: ['JDA', 'Ergonomics'], phone: '+1 (833) 783-8088' },
  // British Columbia
  { id: '10', name: 'Vancouver Occupational Health', city: 'Vancouver', province: 'British Columbia', lat: 49.2827, lng: -123.1207, services: ['Disability Management', 'Ergonomics', 'Post-Offer Testing'], address: '595 Howe Street', phone: '+1 (833) 783-8088' },
  { id: '11', name: 'Victoria Workplace Health', city: 'Victoria', province: 'British Columbia', lat: 48.4284, lng: -123.3656, services: ['Ergonomics', 'JDA'], phone: '+1 (833) 783-8088' },
  { id: '12', name: 'Surrey Employment Services', city: 'Surrey', province: 'British Columbia', lat: 49.1913, lng: -122.8490, services: ['Disability Management', 'Post-Offer Testing'], phone: '+1 (833) 783-8088' },
  { id: '13', name: 'Kelowna Occ Health', city: 'Kelowna', province: 'British Columbia', lat: 49.8880, lng: -119.4960, services: ['Ergonomics', 'JDA'], phone: '+1 (833) 783-8088' },
  // Alberta
  { id: '14', name: 'Calgary Workplace Health Centre', city: 'Calgary', province: 'Alberta', lat: 51.0447, lng: -114.0719, services: ['Disability Management', 'Ergonomics', 'Post-Offer Testing'], phone: '+1 (833) 783-8088' },
  { id: '15', name: 'Edmonton Occ Health Services', city: 'Edmonton', province: 'Alberta', lat: 53.5461, lng: -113.4938, services: ['JDA', 'Ergonomics'], phone: '+1 (833) 783-8088' },
  { id: '16', name: 'Red Deer Employment Health', city: 'Red Deer', province: 'Alberta', lat: 52.2681, lng: -113.8111, services: ['Disability Management', 'Post-Offer Testing'], phone: '+1 (833) 783-8088' },
  // Manitoba
  { id: '17', name: 'Winnipeg Occupational Health', city: 'Winnipeg', province: 'Manitoba', lat: 49.8951, lng: -97.1384, services: ['Disability Management', 'Ergonomics', 'JDA'], phone: '+1 (833) 783-8088' },
  { id: '18', name: 'Brandon Workplace Health', city: 'Brandon', province: 'Manitoba', lat: 49.8483, lng: -99.9501, services: ['Post-Offer Testing', 'Ergonomics'], phone: '+1 (833) 783-8088' },
  // Saskatchewan
  { id: '19', name: 'Regina Occ Health Centre', city: 'Regina', province: 'Saskatchewan', lat: 50.4452, lng: -104.6189, services: ['Disability Management', 'Ergonomics'], phone: '+1 (833) 783-8088' },
  { id: '20', name: 'Saskatoon Employment Health', city: 'Saskatoon', province: 'Saskatchewan', lat: 52.1332, lng: -106.6700, services: ['JDA', 'Post-Offer Testing', 'Ergonomics'], phone: '+1 (833) 783-8088' },
  // Nova Scotia
  { id: '21', name: 'Halifax Occupational Health', city: 'Halifax', province: 'Nova Scotia', lat: 44.6488, lng: -63.5752, services: ['Disability Management', 'Ergonomics', 'JDA'], phone: '+1 (833) 783-8088' },
  { id: '22', name: 'Dartmouth Workplace Services', city: 'Dartmouth', province: 'Nova Scotia', lat: 44.6710, lng: -63.5806, services: ['Post-Offer Testing', 'Ergonomics'], phone: '+1 (833) 783-8088' },
  // New Brunswick
  { id: '23', name: 'Moncton Occ Health Clinic', city: 'Moncton', province: 'New Brunswick', lat: 46.0878, lng: -64.7782, services: ['Disability Management', 'Ergonomics'], phone: '+1 (833) 783-8088' },
  { id: '24', name: 'Saint John Employment Health', city: 'Saint John', province: 'New Brunswick', lat: 45.2733, lng: -66.0633, services: ['JDA', 'Post-Offer Testing'], phone: '+1 (833) 783-8088' },
  // Newfoundland
  { id: '25', name: "St. John's Occupational Health", city: "St. John's", province: 'Newfoundland and Labrador', lat: 47.5615, lng: -52.7126, services: ['Disability Management', 'Ergonomics', 'Post-Offer Testing'], phone: '+1 (833) 783-8088' },
  { id: '26', name: 'Corner Brook Workplace Health', city: 'Corner Brook', province: 'Newfoundland and Labrador', lat: 48.9500, lng: -57.9500, services: ['JDA', 'Ergonomics'], phone: '+1 (833) 783-8088' },
  // Prince Edward Island
  { id: '27', name: 'Charlottetown Occ Health', city: 'Charlottetown', province: 'Prince Edward Island', lat: 46.2382, lng: -63.1311, services: ['Disability Management', 'Post-Offer Testing'], phone: '+1 (833) 783-8088' },
  // Yukon
  { id: '28', name: 'Whitehorse Employment Health', city: 'Whitehorse', province: 'Yukon', lat: 60.7212, lng: -135.0568, services: ['Ergonomics', 'JDA'], phone: '+1 (833) 783-8088' },
  // Northwest Territories
  { id: '29', name: 'Yellowknife Occupational Health', city: 'Yellowknife', province: 'Northwest Territories', lat: 62.4540, lng: -114.3718, services: ['Disability Management', 'Ergonomics'], phone: '+1 (833) 783-8088' },
  // Nunavut
  { id: '30', name: 'Iqaluit Workplace Health', city: 'Iqaluit', province: 'Nunavut', lat: 63.7467, lng: -68.5170, services: ['Post-Offer Testing', 'Ergonomics'], phone: '+1 (833) 783-8088' },
];

// Available occupational health services
const occHealthServices = ['Disability Management', 'Ergonomics', 'JDA', 'Post-Offer Testing'];

export default function FindOccHealthClinicPage() {
  const [expandedProvince, setExpandedProvince] = useState<string | null>(null);
  const { language } = useOutletContext<OutletContext>();

  const toggleProvince = (provinceName: string) => {
    setExpandedProvince(expandedProvince === provinceName ? null : provinceName);
  };

  const t = (en: string, fr: string) => language === 'fr' ? fr : en;

  return (
    <>
      {/* Breadcrumb and Hero */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0F2A45' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <p className="text-white/50 text-sm">
              {t('Home › Locations › Find an Occupational Health Clinic', 'Accueil › Emplacements › Trouver une clinique de santé au travail')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              {/* Tag pill */}
              <div className="inline-block px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: '#6ABF4B' }}>
                <span className="text-white text-sm font-semibold">
                  {t('Occupational Health', 'Santé au travail')}
                </span>
              </div>

              <h1 className="text-white mb-6" style={{ fontFamily: 'DM Serif Display', fontSize: '44px', lineHeight: '1.2' }}>
                {t('Find an Occupational Health Clinic', 'Trouver une clinique de santé au travail')}
              </h1>

              <p className="text-white/70 text-lg mb-8">
                {t('477 locations and 2,280+ service providers across all provinces and territories. Workplace health assessment and disability management where your employees are.', '477 emplacements et plus de 2 280 fournisseurs de services dans toutes les provinces et tous les territoires. Évaluation de la santé au travail et gestion de l\'invalidité là où se trouvent vos employés.')}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/get-quote"
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-all"
                  style={{ backgroundColor: '#6ABF4B' }}
                >
                  {t('Get a Quote', 'Obtenir une soumission')}
                </Link>
                <Link
                  to="/contact-us"
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-all"
                  style={{ border: '2px solid white' }}
                >
                  {t('Contact Us', 'Nous contacter')}
                </Link>
              </div>
            </div>

            {/* Right side - Stats cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#6ABF4B' }}>477</div>
                <div className="text-white/80 text-sm">{t('Clinic Locations', 'Emplacements de cliniques')}</div>
              </div>
              <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#6ABF4B' }}>2,280+</div>
                <div className="text-white/80 text-sm">{t('Service Providers', 'Fournisseurs de services')}</div>
              </div>
              <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#6ABF4B' }}>All</div>
                <div className="text-white/80 text-sm">{t('Provinces & Territories', 'Provinces et territoires')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[760px] mx-auto text-center mb-12">
            <div className="mb-4">
              <span className="text-sm font-bold uppercase tracking-wide" style={{ color: '#6ABF4B' }}>
                {t('Occupational Health Network', 'Réseau de santé au travail')}
              </span>
            </div>
            <h2 className="mb-6" style={{ fontFamily: 'DM Serif Display', fontSize: '36px', color: '#1A3A5C' }}>
              {t('Let Us Help You Get Back to Work', 'Laissez-nous vous aider à reprendre le travail')}
            </h2>
            <p className="text-lg" style={{ color: '#333333' }}>
              {t('We help people after an illness, accident or injury by understanding what they can and cannot do. Our healthcare team will assess your needs and develop a treatment plan to help get you better. Our occupational health clinics provide employer-focused services including disability management, ergonomic assessments, and post-offer employment testing.', "Nous aidons les personnes après une maladie, un accident ou une blessure en comprenant ce qu'elles peuvent et ne peuvent pas faire. Notre équipe de soins de santé évaluera vos besoins et élaborera un plan de traitement pour vous aider à aller mieux. Nos cliniques de santé au travail offrent des services axés sur l'employeur, notamment la gestion de l'invalidité, les évaluations ergonomiques et les tests d'emploi après l'offre.")}
            </p>
          </div>

          {/* Icon cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 text-center" style={{ border: '1px solid #EEEDE8' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#2B7DC8' }}>
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#1A3A5C' }}>
                {t('Disability Management', 'Gestion de l\'invalidité')}
              </h3>
              <p className="text-sm" style={{ color: '#777777' }}>
                {t('On-site and remote case management services', 'Services de gestion de cas sur place et à distance')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center" style={{ border: '1px solid #EEEDE8' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#2B7DC8' }}>
                <Clipboard className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#1A3A5C' }}>
                {t('Ergonomics & JDA', 'Ergonomie et ADT')}
              </h3>
              <p className="text-sm" style={{ color: '#777777' }}>
                {t('Job demands analysis and risk assessments', 'Analyse des exigences du poste et évaluations des risques')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center" style={{ border: '1px solid #EEEDE8' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#2B7DC8' }}>
                <CheckCircle className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#1A3A5C' }}>
                {t('Post-Offer Testing', 'Tests après l\'offre')}
              </h3>
              <p className="text-sm" style={{ color: '#777777' }}>
                {t('Pre-employment functional screening', 'Dépistage fonctionnel avant l\'emploi')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="text-sm font-bold uppercase tracking-wide" style={{ color: '#6ABF4B' }}>
                {t('Interactive Map', 'Carte interactive')}
              </span>
            </div>
            <h2 className="mb-4" style={{ fontFamily: 'DM Serif Display', fontSize: '36px', color: '#1A3A5C' }}>
              {t('Occupational Health Clinics Across Canada', 'Cliniques de santé au travail à travers le Canada')}
            </h2>
            <p className="text-lg max-w-[700px] mx-auto" style={{ color: '#777777' }}>
              {t('Click on any marker to view clinic details and available services. Our occupational health clinics offer Disability Management, Ergonomics assessments, Job Demands Analysis, and Post-Offer Testing.', 'Cliquez sur n\'importe quel marqueur pour voir les détails de la clinique et les services disponibles. Nos cliniques de santé au travail offrent la gestion de l\'invalidité, des évaluations ergonomiques, l\'analyse des exigences du poste et des tests après l\'offre.')}
            </p>
          </div>

          <ClinicMap clinics={occHealthClinics} markerColor="#6ABF4B" language={language} availableServices={occHealthServices} />
        </div>
      </section>

      {/* Province Clinic Directory */}
      <section className="py-20" style={{ backgroundColor: '#F4F4F2' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[760px] mx-auto text-center mb-12">
            <div className="mb-4">
              <span className="text-sm font-bold uppercase tracking-wide" style={{ color: '#6ABF4B' }}>
                {t('Occupational Health Locations', 'Emplacements de santé au travail')}
              </span>
            </div>
            <h2 className="mb-4" style={{ fontFamily: 'DM Serif Display', fontSize: '36px', color: '#1A3A5C' }}>
              {t('Find an Occupational Health Clinic Near You', 'Trouver une clinique de santé au travail près de chez vous')}
            </h2>
            <p style={{ color: '#777777' }}>
              {t('Click a province to expand the full list of occupational health clinic cities in that area.', 'Cliquez sur une province pour développer la liste complète des villes de cliniques de santé au travail dans cette région.')}
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {provinces.map((province) => (
              <div key={province.name} className="bg-white rounded-2xl overflow-hidden transition-all" style={{ border: '1px solid #EEEDE8' }}>
                <button
                  onClick={() => toggleProvince(province.name)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  style={{ backgroundColor: expandedProvince === province.name ? '#EAF4FB' : 'transparent' }}
                >
                  <span className="font-bold text-lg" style={{ color: '#1A3A5C' }}>
                    {language === 'fr' ? province.nameFr : province.nameEn}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: '#6ABF4B' }}>
                      {province.cityCount} {t('cities', 'villes')}
                    </span>
                    <ChevronDown
                      size={20}
                      style={{ color: '#1A3A5C', transform: expandedProvince === province.name ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }}
                    />
                  </div>
                </button>

                {expandedProvince === province.name && (
                  <div className="px-6 py-6 border-t" style={{ borderColor: '#EEEDE8' }}>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {province.cities.map((city) => (
                        <div key={city} className="px-3 py-2 bg-white rounded-full text-sm text-center" style={{ border: '1px solid #EEEDE8', color: '#333333' }}>
                          {city}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cannot Find Your City */}
      <section className="py-20 bg-white">
        <div className="max-w-[760px] mx-auto px-6 text-center">
          <h3 className="mb-4" style={{ fontFamily: 'DM Serif Display', fontSize: '32px', color: '#1A3A5C' }}>
            {t("Don't See Your City?", 'Vous ne voyez pas votre ville?')}
          </h3>
          <p className="mb-8 text-lg" style={{ color: '#777777' }}>
            {t('Our occupational health network is continuously growing. If you don\'t see a clinic in your area, contact us — on-site services may be available at your workplace location directly.', "Notre réseau de santé au travail est en croissance continue. Si vous ne voyez pas de clinique dans votre région, contactez-nous — des services sur place peuvent être disponibles directement sur le lieu de travail.")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact-us"
              className="px-8 py-3 rounded-lg font-semibold text-white"
              style={{ backgroundColor: '#6ABF4B' }}
            >
              {t('Contact Our Team', 'Contacter notre équipe')}
            </Link>
            <Link
              to="/get-quote"
              className="px-8 py-3 rounded-lg font-semibold"
              style={{ border: '2px solid #1A3A5C', color: '#1A3A5C' }}
            >
              {t('Get a Quote', 'Obtenir une soumission')}
            </Link>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20" style={{ backgroundColor: '#0F2A45' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="text-sm font-bold uppercase tracking-wide" style={{ color: '#6ABF4B' }}>
                {t('Our Offices', 'Nos bureaux')}
              </span>
            </div>
            <h2 className="text-white" style={{ fontFamily: 'DM Serif Display', fontSize: '36px' }}>
              {t('Corporate & Regional Offices', 'Bureaux corporatifs et régionaux')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              <MapPin className="mb-4" size={32} style={{ color: '#6ABF4B' }} />
              <div className="text-white font-bold text-sm mb-3">{t('Corporate Office', 'Bureau corporatif')}</div>
              <p className="text-white mb-1">4711 Yonge Street, 10th Floor</p>
              <p className="text-white/70 mb-3">Toronto, Ontario, M2N 6K8, Canada</p>
              <p className="text-white/70">+1 (833) 783-8088</p>
            </div>

            <div className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              <MapPin className="mb-4" size={32} style={{ color: '#6ABF4B' }} />
              <div className="text-white font-bold text-sm mb-3">{t('Regional Office — West', 'Bureau régional — Ouest')}</div>
              <p className="text-white mb-1">595 Howe Street, Suite 306</p>
              <p className="text-white/70 mb-3">Vancouver, British Columbia, V6C 2T5</p>
              <p className="text-white/70">+1 (833) 783-8088</p>
            </div>

            <div className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              <MapPin className="mb-4" size={32} style={{ color: '#6ABF4B' }} />
              <div className="text-white font-bold text-sm mb-3">{t('Regional Office — USA', 'Bureau régional — États-Unis')}</div>
              <p className="text-white mb-1">9160 Forum Corporate Parkway, Suite 350</p>
              <p className="text-white/70 mb-3">Fort Myers, Florida, USA 33905</p>
              <p className="text-white/70">+1 (833) 783-8088</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner - Navy background for differentiation */}
      <section className="py-20" style={{ backgroundColor: '#0F2A45' }}>
        <div className="max-w-[760px] mx-auto px-6 text-center">
          <h2 className="text-white mb-4" style={{ fontFamily: 'DM Serif Display', fontSize: '36px' }}>
            {t('Partner with Our Occupational Health Team', 'Associez-vous à notre équipe de santé au travail')}
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            {t('We provide on-site and remote occupational health services for employers across Canada and the USA.', 'Nous offrons des services de santé au travail sur place et à distance pour les employeurs au Canada et aux États-Unis.')}
          </p>
          <Link
            to="/get-quote"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white"
            style={{ backgroundColor: '#6ABF4B' }}
          >
            {t('Get a Quote', 'Obtenir une soumission')}
          </Link>
        </div>
      </section>
    </>
  );
}