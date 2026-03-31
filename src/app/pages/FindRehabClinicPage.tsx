import { useState } from 'react';
import { MapPin, Search, Phone, Clock } from 'lucide-react';

export default function FindRehabClinicPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const clinics = [
    { name: 'Toronto Rehab Centre', address: '123 Main St, Toronto, ON M5V 2T6', phone: '+1 (416) 555-0100', hours: 'Mon-Fri: 8am-6pm' },
    { name: 'Vancouver Wellness Clinic', address: '456 Granville St, Vancouver, BC V6C 1T2', phone: '+1 (604) 555-0200', hours: 'Mon-Fri: 7am-7pm' },
    { name: 'Calgary Physiotherapy', address: '789 17th Ave SW, Calgary, AB T2S 0A1', phone: '+1 (403) 555-0300', hours: 'Mon-Sat: 8am-6pm' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: '#0F2A45' }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="font-serif text-white mb-6" style={{ fontFamily: 'DM Serif Display', fontSize: '44px' }}>
            Find a Rehabilitation Clinic
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Access our network of 500+ rehabilitation clinics across North America.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2" size={20} style={{ color: '#3D3D3A', opacity: 0.5 }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter city, postal code, or address"
                className="w-full pl-12 pr-4 py-4 rounded-lg text-lg"
                style={{ border: '1px solid #EEEDE8' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-6">
            <p style={{ color: '#3D3D3A' }}>
              <strong>{clinics.length}</strong> clinics found
            </p>
          </div>

          <div className="space-y-6">
            {clinics.map((clinic, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-200" style={{ border: '1px solid #EEEDE8' }}>
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3" style={{ color: '#0F2A45' }}>{clinic.name}</h3>
                    
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-start gap-2">
                        <MapPin size={18} className="mt-0.5" style={{ color: '#6ABF4B' }} />
                        <span style={{ color: '#3D3D3A' }}>{clinic.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={18} style={{ color: '#6ABF4B' }} />
                        <a href={`tel:${clinic.phone}`} className="hover:text-[#6ABF4B]" style={{ color: '#3D3D3A' }}>{clinic.phone}</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={18} style={{ color: '#6ABF4B' }} />
                        <span style={{ color: '#6ABF4B' }}>{clinic.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button className="px-6 py-2 rounded-lg text-white font-semibold whitespace-nowrap" style={{ backgroundColor: '#6ABF4B' }}>
                      Book Appointment
                    </button>
                    <button className="px-6 py-2 rounded-lg font-semibold whitespace-nowrap" style={{ border: '1.5px solid #0F2A45', color: '#0F2A45' }}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#0F2A45' }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-serif text-white mb-4" style={{ fontFamily: 'DM Serif Display', fontSize: '32px' }}>
            Need help finding the right clinic?
          </h2>
          <p className="text-white/70 mb-8">
            Our team can help you find the perfect location for your needs.
          </p>
          <a
            href="tel:+18337838088"
            className="inline-block px-8 py-3 rounded-lg text-white font-semibold"
            style={{ backgroundColor: '#6ABF4B' }}
          >
            Call +1 (833) 783-8088
          </a>
        </div>
      </section>
    </>
  );
}