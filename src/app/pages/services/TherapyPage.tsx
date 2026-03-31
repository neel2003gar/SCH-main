import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { Hand, MapPin, Zap } from 'lucide-react';

export default function TherapyPage() {
  const content = (
    <div className="space-y-6">
      <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3D3D3A' }}>
        Physical Therapy, chiropractic, and massage therapy are provided on-site or in our clinics. Clinicians are trained in sports and industrial therapy to restore physical function and movement using a range of manual, mobilization, and exercise techniques.
      </p>
      <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3D3D3A' }}>
        Whether delivered on-site at the workplace or at one of our 500+ network clinic locations, our physiotherapists, chiropractors, and massage therapists work together with the broader care team to ensure each employee receives coordinated, goal-oriented treatment. The focus is always on restoring function and returning the person to productive work and daily life as quickly and safely as possible.
      </p>
    </div>
  );

  const benefits = [
    {
      icon: <Hand size={28} className="text-white" />,
      title: 'Manual Therapy',
      description: 'Hands-on mobilization, manipulation and exercise techniques by industry-trained specialists.',
    },
    {
      icon: <MapPin size={28} className="text-white" />,
      title: 'On-Site or In-Clinic',
      description: 'Delivered at the workplace or at any of our 500+ network clinic locations across Canada.',
    },
    {
      icon: <Zap size={28} className="text-white" />,
      title: 'Sports & Industrial Focus',
      description: 'Clinicians trained specifically for workplace and industrial injury recovery and prevention.',
    },
  ];

  const process = [
    {
      title: 'Evaluate',
      description: 'Initial assessment of injury, range of motion and functional limitations',
    },
    {
      title: 'Treat',
      description: 'Manual therapy, mobilization and targeted exercise program begins',
    },
    {
      title: 'Progress',
      description: 'Graduated return-to-activity plan with continuous progress monitoring',
    },
  ];

  const relatedServices = [
    { title: 'Early Intervention / Workplace Wellness', link: '/services/early-intervention' },
    { title: 'Occupational Therapy', link: '/services/occupational-therapy' },
    { title: 'Disability Management', link: '/services/disability-management' },
  ];

  return (
    <ServicePageTemplate
      breadcrumb="Therapy"
      tag="Physical Therapy"
      title="Therapy – Physiotherapy, Chiropractic and Massage Therapy"
      subheading="Restoring physical function and movement through expert hands-on clinical care — on-site or in clinic."
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
      content={content}
      benefits={benefits}
      process={process}
      relatedServices={relatedServices}
    />
  );
}
