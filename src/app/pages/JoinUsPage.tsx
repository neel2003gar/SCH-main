import { Heart, TrendingUp, Users } from 'lucide-react';

export default function JoinUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: '#0F2A45' }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="font-serif text-white mb-6" style={{ fontFamily: 'DM Serif Display', fontSize: '44px' }}>
            Join Our Team
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Help us help people maximize their daily abilities. Careers with purpose at Santé Circle Health.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-serif text-center mb-12" style={{ fontFamily: 'DM Serif Display', fontSize: '32px', color: '#0F2A45' }}>
            Why Join SCH?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl" style={{ border: '1px solid #EEEDE8' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                <Heart size={24} style={{ color: '#6ABF4B' }} />
              </div>
              <h3 className="font-bold text-xl mb-3" style={{ color: '#0F2A45' }}>Meaningful Work</h3>
              <p style={{ color: '#3D3D3A' }}>
                Make a real difference in people's lives every day.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl" style={{ border: '1px solid #EEEDE8' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                <TrendingUp size={24} style={{ color: '#6ABF4B' }} />
              </div>
              <h3 className="font-bold text-xl mb-3" style={{ color: '#0F2A45' }}>Career Growth</h3>
              <p style={{ color: '#3D3D3A' }}>
                Professional development and advancement opportunities.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl" style={{ border: '1px solid #EEEDE8' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                <Users size={24} style={{ color: '#6ABF4B' }} />
              </div>
              <h3 className="font-bold text-xl mb-3" style={{ color: '#0F2A45' }}>Collaborative Team</h3>
              <p style={{ color: '#3D3D3A' }}>
                Work alongside multidisciplinary healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20" style={{ backgroundColor: '#F7F7F6' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-serif text-center mb-12" style={{ fontFamily: 'DM Serif Display', fontSize: '32px', color: '#0F2A45' }}>
            Current Openings
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { title: 'Occupational Therapist', location: 'Toronto, ON', type: 'Full-time' },
              { title: 'Physiotherapist', location: 'Vancouver, BC', type: 'Full-time' },
              { title: 'Disability Case Manager', location: 'Remote', type: 'Full-time' },
              { title: 'Ergonomist', location: 'Fort Myers, FL', type: 'Contract' },
            ].map((job, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition-all duration-200" style={{ border: '1px solid #EEEDE8' }}>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#0F2A45' }}>{job.title}</h3>
                  <p className="text-sm" style={{ color: '#3D3D3A' }}>{job.location} • {job.type}</p>
                </div>
                <button className="px-6 py-2 rounded-lg text-white font-semibold" style={{ backgroundColor: '#6ABF4B' }}>
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#0F2A45' }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-serif text-white mb-4" style={{ fontFamily: 'DM Serif Display', fontSize: '32px' }}>
            Don't see a role for you?
          </h2>
          <p className="text-white/70 mb-8">
            We're always looking for talented healthcare professionals. Send us your resume.
          </p>
          <a
            href="mailto:careers@santecirclehealth.com"
            className="inline-block px-8 py-3 rounded-lg text-white font-semibold"
            style={{ backgroundColor: '#6ABF4B' }}
          >
            Email Careers Team
          </a>
        </div>
      </section>
    </>
  );
}