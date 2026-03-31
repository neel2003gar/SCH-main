import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { Users, FileCheck, TrendingUp } from 'lucide-react';

export default function DisabilityManagementPage() {
  const content = (
    <div className="space-y-6">
      <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3D3D3A' }}>
        Disability case management ensures effective collaboration between the employee, their healthcare professionals, and their employer to create a safe, evidence-based return-to-work plan. Our disability managers act as the central point of coordination, facilitating communication and ensuring all parties are aligned on goals and timelines.
      </p>
      <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3D3D3A' }}>
        We monitor progress closely, adjust plans as needed, and provide ongoing support to both employees and employers throughout the disability and return-to-work process. Our evidence-based approach reduces claim duration, minimizes disruption, and supports positive outcomes for all stakeholders.
      </p>
    </div>
  );

  const benefits = [
    {
      icon: <Users size={28} className="text-white" />,
      title: 'Coordinated Collaboration',
      description: 'Facilitates communication between employee, healthcare professionals, and employer for aligned goals.',
    },
    {
      icon: <FileCheck size={28} className="text-white" />,
      title: 'Evidence-Based Planning',
      description: 'Safe, structured return-to-work plans based on medical evidence and functional capacity.',
    },
    {
      icon: <TrendingUp size={28} className="text-white" />,
      title: 'Reduced Claim Duration',
      description: 'Active management and monitoring reduces time away from work and overall claim costs.',
    },
  ];

  const process = [
    {
      title: 'Coordinate',
      description: 'Establish communication between all parties and gather medical and functional information',
    },
    {
      title: 'Plan',
      description: 'Develop evidence-based return-to-work plan with clear goals and timelines',
    },
    {
      title: 'Monitor',
      description: 'Track progress, adjust plan as needed, and support successful return to work',
    },
  ];

  const relatedServices = [
    { title: 'Accommodation, Stay at Work and Return to Work', link: '/services/accommodation-return-to-work' },
    { title: 'Occupational Therapy', link: '/services/occupational-therapy' },
    { title: 'Early Intervention / Workplace Wellness', link: '/services/early-intervention' },
  ];

  return (
    <ServicePageTemplate
      breadcrumb="Disability Management"
      tag="Case Management"
      title="Disability Case Management"
      subheading="Ensuring collaboration between the employee, their healthcare professionals, and their employer for a safe, evidence-based return to work plan."
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
      content={content}
      benefits={benefits}
      process={process}
      relatedServices={relatedServices}
    />
  );
}
