import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { Brain, Activity, Network } from 'lucide-react';

export default function OccupationalTherapyPage() {
  const content = (
    <div className="space-y-6">
      <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3D3D3A' }}>
        Our highly trained Occupational Therapists focus on physical, cognitive, and psychoemotional health to ensure people are assessed and treated using a holistic approach. The goal is to assist a person with their return to desired activities, both at work and in their personal life.
      </p>
      <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3D3D3A' }}>
        Occupational therapy at Santé Circle Health goes beyond treating the injury — we look at the whole person, including their work environment, personal circumstances, and functional goals. Our therapists collaborate with employers, physicians, and other healthcare professionals to build a personalized, evidence-based plan that restores independence and maximizes daily ability.
      </p>
    </div>
  );

  const benefits = [
    {
      icon: <Brain size={28} className="text-white" />,
      title: 'Holistic Assessment',
      description: 'Physical, cognitive and psychoemotional health evaluated as one complete picture.',
    },
    {
      icon: <Activity size={28} className="text-white" />,
      title: 'Return to Function',
      description: 'Goal is to restore ability to perform desired activities at work and home.',
    },
    {
      icon: <Network size={28} className="text-white" />,
      title: 'Coordinated Care',
      description: 'OTs collaborate with employers, physicians and all healthcare professionals involved in the case.',
    },
  ];

  const process = [
    {
      title: 'Assess',
      description: 'Comprehensive evaluation of physical, cognitive and psychoemotional health',
    },
    {
      title: 'Treat',
      description: 'Personalized, evidence-based occupational therapy program begins',
    },
    {
      title: 'Return',
      description: 'Supported transition back to work and meaningful daily activities with monitoring',
    },
  ];

  const relatedServices = [
    { title: 'Early Intervention / Workplace Wellness', link: '/services/early-intervention' },
    { title: 'Ergonomics / Job Demands Analysis', link: '/services/ergonomics' },
    { title: 'Disability Management', link: '/services/disability-management' },
  ];

  return (
    <ServicePageTemplate
      breadcrumb="Occupational Therapy"
      tag="Clinical Services"
      title="Occupational Therapy"
      subheading="A holistic approach to restoring function at work and in daily life."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
      content={content}
      benefits={benefits}
      process={process}
      relatedServices={relatedServices}
    />
  );
}
