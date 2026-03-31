import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { UserCheck, Handshake, Scale } from 'lucide-react';

export type Language = 'en' | 'fr';

interface AccommodationPageProps {
  language?: Language;
}

const translations = {
  en: {
    breadcrumb: 'Accommodation, Stay at Work and Return to Work',
    tag: 'Return to Work',
    title: 'Accommodation, Stay at Work and Return to Work',
    subheading: 'Helping employees stay productive while recovering — and return safely when they\'re ready.',
    p1: 'A person may need an accommodation to stay at work or return to work, but they are uncertain of what they need or how to tell their employer. Using a functional model, we will work with the employee, healthcare professionals, and the employer to complete the necessary assessments to determine a suitable accommodation for physical, cognitive, mental health, and sensory impairments. A functional, abilities-focused model is used to establish the accommodation requirement and how that can be implemented in the workplace.',
    p2: 'Often people need to be treated differently to consider the person as an individual and help them do their work tasks better. Since employers have a Duty to Accommodate, we will help the employer understand if a person has a disability that needs to be reasonably accommodated.',
    benefit1Title: 'Functional Assessment',
    benefit1Desc: 'Ability-focused model that identifies what the individual can do — not just limitations.',
    benefit2Title: 'Employer–Employee Collaboration',
    benefit2Desc: 'We facilitate communication between all parties to reach a workable, sustainable solution.',
    benefit3Title: 'Duty to Accommodate',
    benefit3Desc: 'We help employers understand and fulfill their legal accommodation obligations.',
    step1Title: 'Assess',
    step1Desc: 'Functional and abilities-focused evaluation of the employee\'s current capacity',
    step2Title: 'Plan',
    step2Desc: 'Collaborative accommodation plan developed with employer, employee and clinicians',
    step3Title: 'Implement',
    step3Desc: 'Monitor and adjust the plan for a safe, productive workplace return',
    related1: 'Early Intervention / Workplace Wellness',
    related2: 'Occupational Therapy',
    related3: 'Disability Case Management',
  },
  fr: {
    breadcrumb: 'Accommodement, maintien au travail et retour au travail',
    tag: 'Retour au travail',
    title: 'Accommodement, maintien au travail et retour au travail',
    subheading: 'Aider les employés à rester productifs pendant leur rétablissement — et à retourner en toute sécurité lorsqu\'ils sont prêts.',
    p1: 'Une personne peut avoir besoin d\'un accommodement pour rester au travail ou retourner au travail, mais elle ne sait pas ce dont elle a besoin ou comment en informer son employeur. En utilisant un modèle fonctionnel, nous travaillerons avec l\'employé, les professionnels de la santé et l\'employeur pour effectuer les évaluations nécessaires afin de déterminer un accommodement approprié pour les déficiences physiques, cognitives, de santé mentale et sensorielles. Un modèle fonctionnel axé sur les capacités est utilisé pour établir l\'exigence d\'accommodement et comment elle peut être mise en œuvre sur le lieu de travail.',
    p2: 'Souvent, les gens doivent être traités différemment pour considérer la personne en tant qu\'individu et l\'aider à mieux accomplir ses tâches professionnelles. Étant donné que les employeurs ont une obligation d\'accommodement, nous aiderons l\'employeur à comprendre si une personne a un handicap qui doit être raisonnablement accommodé.',
    benefit1Title: 'Évaluation fonctionnelle',
    benefit1Desc: 'Modèle axé sur les capacités qui identifie ce que l\'individu peut faire — pas seulement les limitations.',
    benefit2Title: 'Collaboration employeur-employé',
    benefit2Desc: 'Nous facilitons la communication entre toutes les parties pour parvenir à une solution viable et durable.',
    benefit3Title: 'Obligation d\'accommodement',
    benefit3Desc: 'Nous aidons les employeurs à comprendre et à remplir leurs obligations légales en matière d\'accommodement.',
    step1Title: 'Évaluer',
    step1Desc: 'Évaluation fonctionnelle et axée sur les capacités de la capacité actuelle de l\'employé',
    step2Title: 'Planifier',
    step2Desc: 'Plan d\'accommodement collaboratif développé avec l\'employeur, l\'employé et les cliniciens',
    step3Title: 'Mettre en œuvre',
    step3Desc: 'Surveiller et ajuster le plan pour un retour au travail sûr et productif',
    related1: 'Intervention précoce / Mieux-être au travail',
    related2: 'Ergothérapie',
    related3: 'Gestion de cas d\'invalidité',
  },
};

export default function AccommodationPage({ language = 'en' }: AccommodationPageProps) {
  const t = translations[language];

  const content = (
    <div className="space-y-6">
      <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3D3D3A' }}>
        {t.p1}
      </p>
      <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3D3D3A' }}>
        {t.p2}
      </p>
    </div>
  );

  const benefits = [
    {
      icon: <UserCheck size={28} className="text-white" />,
      title: t.benefit1Title,
      description: t.benefit1Desc,
    },
    {
      icon: <Handshake size={28} className="text-white" />,
      title: t.benefit2Title,
      description: t.benefit2Desc,
    },
    {
      icon: <Scale size={28} className="text-white" />,
      title: t.benefit3Title,
      description: t.benefit3Desc,
    },
  ];

  const process = [
    {
      title: t.step1Title,
      description: t.step1Desc,
    },
    {
      title: t.step2Title,
      description: t.step2Desc,
    },
    {
      title: t.step3Title,
      description: t.step3Desc,
    },
  ];

  const relatedServices = [
    { title: t.related1, link: '/services/early-intervention' },
    { title: t.related2, link: '/services/occupational-therapy' },
    { title: t.related3, link: '/services/disability-management' },
  ];

  return (
    <ServicePageTemplate
      breadcrumb={t.breadcrumb}
      tag={t.tag}
      title={t.title}
      subheading={t.subheading}
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
      content={content}
      benefits={benefits}
      process={process}
      relatedServices={relatedServices}
      language={language}
    />
  );
}
