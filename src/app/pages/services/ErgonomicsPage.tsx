import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { Clipboard, Settings, CheckCircle } from 'lucide-react';

export default function ErgonomicsPage() {
  const content = (
    <div className="space-y-6">
      <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3D3D3A' }}>
        In-depth analysis of job tasks to outline the physical, cognitive, psychoemotional, and sensory demands required to complete the essential duties and/or ergonomic risk factors associated with the job.
      </p>
      <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3D3D3A' }}>
        Our ergonomics assessments are conducted by trained specialists who observe and document every aspect of a role's demands. This analysis is used to support accommodation planning, return-to-work programs, and post-offer employment testing. Understanding the true demands of a job allows employers to make informed decisions about placement, accommodation, and workplace design.
      </p>
    </div>
  );

  const benefits = [
    {
      icon: <Clipboard size={28} className="text-white" />,
      title: 'Job Demands Analysis',
      description: 'Detailed documentation of physical, cognitive and sensory requirements for each essential job duty.',
    },
    {
      icon: <Settings size={28} className="text-white" />,
      title: 'Ergonomic Risk Factors',
      description: 'Identify and address workplace design issues before they cause injury or disability claims.',
    },
    {
      icon: <CheckCircle size={28} className="text-white" />,
      title: 'Supports RTW Planning',
      description: 'JDA results directly inform accommodation and return-to-work plans for each individual.',
    },
  ];

  const process = [
    {
      title: 'Observe',
      description: 'Specialist observes and documents all essential job tasks on site',
    },
    {
      title: 'Analyze',
      description: 'Physical, cognitive and sensory demands catalogued and risk-rated',
    },
    {
      title: 'Report',
      description: 'Detailed JDA report delivered to support RTW, accommodation and hiring decisions',
    },
  ];

  const relatedServices = [
    { title: 'Occupational Therapy', link: '/services/occupational-therapy' },
    { title: 'Accommodation, Stay at Work and Return to Work', link: '/services/accommodation-return-to-work' },
    { title: 'Early Intervention / Workplace Wellness', link: '/services/early-intervention' },
  ];

  return (
    <ServicePageTemplate
      breadcrumb="Ergonomics / Job Demands Analysis"
      tag="Assessment Services"
      title="Ergonomics and Job Demands Analysis – Physical and Cognitive Behavioural"
      subheading="In-depth analysis of job tasks to identify physical, cognitive and sensory demands and ergonomic risk factors."
      heroImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
      content={content}
      benefits={benefits}
      process={process}
      relatedServices={relatedServices}
    />
  );
}
