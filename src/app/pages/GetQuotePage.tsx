import { useState } from 'react';
import { Building, Users, MapPin, Briefcase, Mail } from 'lucide-react';

export default function GetQuotePage() {
  const [step, setStep] = useState(1);

  return (
    <>
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: '#0F2A45' }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="font-serif text-white mb-6" style={{ fontFamily: 'DM Serif Display', fontSize: '44px' }}>
            Get Your Free Quote
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Simple and transparent pricing. Five questions. No obligation. No implementation fees.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {/* Progress */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                    num <= step ? 'opacity-100' : 'opacity-30'
                  }`}
                  style={{ backgroundColor: '#6ABF4B' }}
                >
                  {num}
                </div>
              ))}
            </div>
            <div className="h-2 rounded-full" style={{ backgroundColor: '#F7F7F6' }}>
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ backgroundColor: '#6ABF4B', width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid #EEEDE8' }}>
            {step === 1 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                    <Building size={24} style={{ color: '#6ABF4B' }} />
                  </div>
                  <h2 className="font-serif" style={{ fontFamily: 'DM Serif Display', fontSize: '24px', color: '#0F2A45' }}>
                    Tell us about your organization
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#0F2A45' }}>Company Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg"
                      style={{ border: '1px solid #EEEDE8' }}
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#0F2A45' }}>Industry</label>
                    <select className="w-full px-4 py-3 rounded-lg" style={{ border: '1px solid #EEEDE8' }}>
                      <option>Select industry</option>
                      <option>Manufacturing</option>
                      <option>Healthcare</option>
                      <option>Retail</option>
                      <option>Technology</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                    <Users size={24} style={{ color: '#6ABF4B' }} />
                  </div>
                  <h2 className="font-serif" style={{ fontFamily: 'DM Serif Display', fontSize: '24px', color: '#0F2A45' }}>
                    How many employees do you have?
                  </h2>
                </div>
                <div className="space-y-3">
                  {['1-50', '51-200', '201-500', '501-1000', '1000+'].map((range) => (
                    <label key={range} className="flex items-center gap-3 p-4 rounded-lg cursor-pointer hover:bg-[#F7F7F6]" style={{ border: '1px solid #EEEDE8' }}>
                      <input type="radio" name="employees" value={range} className="w-5 h-5" />
                      <span style={{ color: '#3D3D3A' }}>{range} employees</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                    <MapPin size={24} style={{ color: '#6ABF4B' }} />
                  </div>
                  <h2 className="font-serif" style={{ fontFamily: 'DM Serif Display', fontSize: '24px', color: '#0F2A45' }}>
                    Where are you located?
                  </h2>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg"
                    style={{ border: '1px solid #EEEDE8' }}
                    placeholder="City, Province/State"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                    <Briefcase size={24} style={{ color: '#6ABF4B' }} />
                  </div>
                  <h2 className="font-serif" style={{ fontFamily: 'DM Serif Display', fontSize: '24px', color: '#0F2A45' }}>
                    Which services are you interested in?
                  </h2>
                </div>
                <div className="space-y-3">
                  {[
                    'Accommodation & Return to Work',
                    'Early Intervention',
                    'Occupational Therapy',
                    'Ergonomics',
                    'Physical Therapy',
                    'Disability Management',
                  ].map((service) => (
                    <label key={service} className="flex items-center gap-3 p-4 rounded-lg cursor-pointer hover:bg-[#F7F7F6]" style={{ border: '1px solid #EEEDE8' }}>
                      <input type="checkbox" className="w-5 h-5" />
                      <span style={{ color: '#3D3D3A' }}>{service}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F3F8F5' }}>
                    <Mail size={24} style={{ color: '#6ABF4B' }} />
                  </div>
                  <h2 className="font-serif" style={{ fontFamily: 'DM Serif Display', fontSize: '24px', color: '#0F2A45' }}>
                    Where should we send your quote?
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#0F2A45' }}>Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg"
                      style={{ border: '1px solid #EEEDE8' }}
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#0F2A45' }}>Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg"
                      style={{ border: '1px solid #EEEDE8' }}
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#0F2A45' }}>Phone Number (Optional)</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg"
                      style={{ border: '1px solid #EEEDE8' }}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t" style={{ borderColor: '#EEEDE8' }}>
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 rounded-lg font-semibold"
                  style={{ border: '1.5px solid #0F2A45', color: '#0F2A45' }}
                >
                  Back
                </button>
              ) : (
                <div />
              )}
              {step < 5 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-3 rounded-lg text-white font-semibold"
                  style={{ backgroundColor: '#6ABF4B' }}
                >
                  Next
                </button>
              ) : (
                <button
                  className="px-6 py-3 rounded-lg text-white font-semibold"
                  style={{ backgroundColor: '#6ABF4B' }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}