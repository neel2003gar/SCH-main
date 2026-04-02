import { Square } from 'lucide-react';

export default function LofiAboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-200 border-b-2 border-gray-400 py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="border-2 border-gray-500 p-6 bg-white inline-block">
            <h1 className="text-3xl md:text-4xl font-bold">[ABOUT US]</h1>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-[900px] mx-auto">
          <div className="border-2 border-gray-400 p-8 bg-gray-50">
            <div className="border-b-2 border-gray-400 pb-3 mb-4">
              <h2 className="text-2xl font-bold text-center">[OUR MISSION]</h2>
            </div>
            <div className="border border-gray-300 p-6 bg-white">
              <p className="text-sm text-gray-600 text-center">[Mission statement paragraph about helping people return to function and maximize their daily abilities]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="border-2 border-gray-400 p-4 mb-8 text-center bg-white">
            <h2 className="text-2xl font-bold">[WHO WE ARE]</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-gray-400 p-6 bg-white">
              <div className="border border-gray-300 p-4 bg-gray-50 mb-4">
                <p className="text-sm text-gray-600">[Company history paragraph]</p>
              </div>
              <div className="border border-gray-300 p-4 bg-gray-50">
                <p className="text-sm text-gray-600">[Company values paragraph]</p>
              </div>
            </div>

            <div className="border-2 border-gray-400 bg-gray-300 flex items-center justify-center h-64">
              <div className="text-gray-500">[COMPANY IMAGE]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="border-2 border-gray-400 p-4 mb-8 text-center bg-gray-50">
            <h2 className="text-2xl font-bold">[OUR VALUES]</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-gray-400 p-6 text-center bg-gray-50">
              <div className="w-16 h-16 rounded-full border-2 border-gray-400 mx-auto mb-4 flex items-center justify-center">
                <Square size={24} />
              </div>
              <div className="font-bold text-sm mb-2">[Value 1]</div>
              <div className="text-xs text-gray-600">[Description]</div>
            </div>

            <div className="border-2 border-gray-400 p-6 text-center bg-gray-50">
              <div className="w-16 h-16 rounded-full border-2 border-gray-400 mx-auto mb-4 flex items-center justify-center">
                <Square size={24} />
              </div>
              <div className="font-bold text-sm mb-2">[Value 2]</div>
              <div className="text-xs text-gray-600">[Description]</div>
            </div>

            <div className="border-2 border-gray-400 p-6 text-center bg-gray-50">
              <div className="w-16 h-16 rounded-full border-2 border-gray-400 mx-auto mb-4 flex items-center justify-center">
                <Square size={24} />
              </div>
              <div className="font-bold text-sm mb-2">[Value 3]</div>
              <div className="text-xs text-gray-600">[Description]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="border-2 border-gray-400 p-4 mb-8 text-center bg-white">
            <h2 className="text-2xl font-bold">[OUR TEAM]</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-2 border-gray-400 bg-white">
                <div className="h-48 bg-gray-300 border-b-2 border-gray-400 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">[PHOTO]</div>
                </div>
                <div className="p-4">
                  <div className="font-bold text-sm mb-1">[Name]</div>
                  <div className="text-xs text-gray-600">[Title]</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
