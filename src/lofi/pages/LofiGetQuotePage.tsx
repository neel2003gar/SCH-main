import { Square } from 'lucide-react';

export default function LofiGetQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-200 border-b-2 border-gray-400 py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="border-2 border-gray-500 p-6 bg-white inline-block mb-4">
            <h1 className="text-3xl md:text-4xl font-bold">[GET A QUOTE]</h1>
          </div>
          <div className="border border-gray-400 p-4 bg-white max-w-2xl mx-auto">
            <p className="text-sm text-gray-600">[Five questions. No obligation. Simple and transparent pricing.]</p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-[800px] mx-auto">
          <div className="border-2 border-gray-400 p-8 bg-gray-50">
            <div className="border-b-2 border-gray-400 pb-4 mb-6">
              <h2 className="text-xl font-bold">[TELL US ABOUT YOUR NEEDS]</h2>
            </div>

            <form className="space-y-6">
              {/* Question 1 */}
              <div className="border-2 border-gray-400 p-6 bg-white">
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div className="font-bold text-sm">[What type of service are you interested in?]</div>
                </div>
                <div className="space-y-2 ml-11">
                  <div className="border border-gray-300 p-3 flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                    <span className="text-sm">[Option 1]</span>
                  </div>
                  <div className="border border-gray-300 p-3 flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                    <span className="text-sm">[Option 2]</span>
                  </div>
                  <div className="border border-gray-300 p-3 flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                    <span className="text-sm">[Option 3]</span>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="border-2 border-gray-400 p-6 bg-white">
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div className="font-bold text-sm">[How many employees need services?]</div>
                </div>
                <div className="ml-11">
                  <div className="border-2 border-gray-400 p-3 bg-gray-100 text-sm text-gray-400">
                    [Input Field]
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="border-2 border-gray-400 p-6 bg-white">
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div className="font-bold text-sm">[What is your company industry?]</div>
                </div>
                <div className="ml-11">
                  <div className="border-2 border-gray-400 p-3 bg-gray-100 text-sm text-gray-400">
                    [Dropdown Menu]
                  </div>
                </div>
              </div>

              {/* Question 4 */}
              <div className="border-2 border-gray-400 p-6 bg-white">
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div className="font-bold text-sm">[When do you need services to start?]</div>
                </div>
                <div className="space-y-2 ml-11">
                  <div className="border border-gray-300 p-3 flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                    <span className="text-sm">[Immediately]</span>
                  </div>
                  <div className="border border-gray-300 p-3 flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                    <span className="text-sm">[Within 1 month]</span>
                  </div>
                  <div className="border border-gray-300 p-3 flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                    <span className="text-sm">[Within 3 months]</span>
                  </div>
                </div>
              </div>

              {/* Question 5 */}
              <div className="border-2 border-gray-400 p-6 bg-white">
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    5
                  </div>
                  <div className="font-bold text-sm">[Your contact information]</div>
                </div>
                <div className="ml-11 space-y-3">
                  <div>
                    <div className="text-xs mb-1">[Name *]</div>
                    <div className="border-2 border-gray-400 p-3 bg-gray-100 text-sm text-gray-400">
                      [Input Field]
                    </div>
                  </div>
                  <div>
                    <div className="text-xs mb-1">[Email *]</div>
                    <div className="border-2 border-gray-400 p-3 bg-gray-100 text-sm text-gray-400">
                      [Input Field]
                    </div>
                  </div>
                  <div>
                    <div className="text-xs mb-1">[Phone *]</div>
                    <div className="border-2 border-gray-400 p-3 bg-gray-100 text-sm text-gray-400">
                      [Input Field]
                    </div>
                  </div>
                  <div>
                    <div className="text-xs mb-1">[Company Name *]</div>
                    <div className="border-2 border-gray-400 p-3 bg-gray-100 text-sm text-gray-400">
                      [Input Field]
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button className="w-full bg-gray-800 text-white py-4 border-2 border-gray-800 font-bold text-lg">
                  [SUBMIT QUOTE REQUEST]
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-gray-400 p-6 bg-white text-center">
              <div className="w-12 h-12 border-2 border-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Square size={20} />
              </div>
              <div className="font-bold text-sm mb-2">[No Obligation]</div>
              <div className="text-xs text-gray-600">[Free quote with no commitment]</div>
            </div>

            <div className="border-2 border-gray-400 p-6 bg-white text-center">
              <div className="w-12 h-12 border-2 border-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Square size={20} />
              </div>
              <div className="font-bold text-sm mb-2">[Fast Response]</div>
              <div className="text-xs text-gray-600">[We respond within 24 hours]</div>
            </div>

            <div className="border-2 border-gray-400 p-6 bg-white text-center">
              <div className="w-12 h-12 border-2 border-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Square size={20} />
              </div>
              <div className="font-bold text-sm mb-2">[Custom Solutions]</div>
              <div className="text-xs text-gray-600">[Tailored to your needs]</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
