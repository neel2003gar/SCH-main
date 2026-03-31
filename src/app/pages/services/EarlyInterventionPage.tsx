import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { Clock, MapPin, TrendingDown } from 'lucide-react';

export default function EarlyInterventionPage() {
  const content = (
    <div className="space-y-6">
      <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3D3D3A' }}>
        Early intervention programs are provided on-site at the employee's place of work by a clinician. Employees are seen early in the injury or discomfort process to address individual health barriers. They are assisted throughout their recovery journey to ensure overall wellness is achieved.
      </p>
      <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3D3D3A' }}>
        Our clinicians work directly within your workplace environment to understand the specific demands and risk factors your employees face. By intervening early, we significantly reduce the likelihood of short-term discomfort escalating into a long-term disability claim — protecting both the employee's wellbeing and your organization's bottom line.
      </p>
    </div>
  );

  const benefits = [
    {
      icon: <Clock size={28} className="text-white" />,
      title: 'Early Action',
      description: 'On-site clinicians address discomfort before it becomes a long-term disability claim.',
    },
    {
      icon: <MapPin size={28} className="text-white" />,
      title: 'On-Site Delivery',
      description: 'Services delivered directly at the employee\'s place of work for maximum convenience and accessibility.',
    },
    {
      icon: <TrendingDown size={28} className="text-white" />,
      title: 'Reduced Claims',
      description: 'Early intervention dramatically lowers the rate and cost of disability claims for your organization.',
    },
  ];

  const process = [
    {
      title: 'Identify',
      description: 'On-site clinician identifies employees experiencing discomfort or injury in its earliest stages',
    },
    {
      title: 'Intervene',
      description: 'Targeted clinical treatment and guidance provided immediately at the workplace',
    },
    {
      title: 'Support',
      description: 'Ongoing wellness monitoring to ensure full recovery and prevent recurrence',
    },
  ];

  const relatedServices = [
    { title: 'Accommodation, Stay at Work and Return to Work', link: '/services/accommodation-return-to-work' },
    { title: 'Occupational Therapy', link: '/services/occupational-therapy' },
    { title: 'Disability Management', link: '/services/disability-management' },
  ];

  return (
    <ServicePageTemplate
      breadcrumb="Early Intervention / Workplace Wellness"
      tag="Prevention & Wellness"
      title="Early Intervention and Workplace Wellness"
      subheading="Addressing health barriers at the source — before they become long-term disabilities."
      heroImage="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&h=600&fit=crop"
      content={content}
      benefits={benefits}
      process={process}
      relatedServices={relatedServices}
    />
  );
}
