import { Square } from 'lucide-react';

export default function LofiContactUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-200 border-b-2 border-gray-400 py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="border-2 border-gray-500 p-6 bg-white inline-block mb-4">
            <h1 className="text-3xl md:text-4xl font-bold">[CONTACT US]</h1>
          </div>
          <div className="border border-gray-400 p-4 bg-white max-w-2xl mx-auto">
            <p className="text-sm text-gray-600">[We'd love to hear from you. Get in touch today.]</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="border-2 border-gray-400 p-6 bg-gray-50">
              <div className="border-b-2 border-gray-400 pb-3 mb-6">
                <h2 className="text-xl font-bold">[SEND US A MESSAGE]</h2>
              </div>

              <form className="space-y-4">
                <div>
                  <div className="border border-gray-400 px-2 py-1 mb-2 text-xs bg-white">
                    [Label: Name *]
                  </div>
                  <div className="border-2 border-gray-400 p-3 bg-white text-sm text-gray-400">
                    [Input Field]
                  </div>
                </div>

                <div>
                  <div className="border border-gray-400 px-2 py-1 mb-2 text-xs bg-white">
                    [Label: Email *]
                  </div>
                  <div className="border-2 border-gray-400 p-3 bg-white text-sm text-gray-400">
                    [Input Field]
                  </div>
                </div>

                <div>
                  <div className="border border-gray-400 px-2 py-1 mb-2 text-xs bg-white">
                    [Label: Phone]
                  </div>
                  <div className="border-2 border-gray-400 p-3 bg-white text-sm text-gray-400">
                    [Input Field]
                  </div>
                </div>

                <div>
                  <div className="border border-gray-400 px-2 py-1 mb-2 text-xs bg-white">
                    [Label: Message *]
                  </div>
                  <div className="border-2 border-gray-400 p-3 bg-white h-32 text-sm text-gray-400">
                    [Textarea Field]
                  </div>
                </div>

                <button className="w-full bg-gray-800 text-white py-3 border-2 border-gray-800 font-bold">
                  [SUBMIT]
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Office 1 */}
              <div className="border-2 border-gray-400 p-6 bg-white">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center flex-shrink-0">
                    <Square size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-2">[Corporate Office]</div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>[Address Line 1]</div>
                      <div>[Address Line 2]</div>
                      <div>[City, Province Postal]</div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-300 pt-4 space-y-2">
                  <div className="flex gap-2 text-xs">
                    <div className="border border-gray-300 px-2 py-1">[Phone Icon]</div>
                    <div className="border border-gray-300 px-2 py-1 flex-1">[Phone Number]</div>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <div className="border border-gray-300 px-2 py-1">[Email Icon]</div>
                    <div className="border border-gray-300 px-2 py-1 flex-1">[Email Address]</div>
                  </div>
                </div>
              </div>

              {/* Office 2 */}
              <div className="border-2 border-gray-400 p-6 bg-white">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center flex-shrink-0">
                    <Square size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-2">[Regional Office]</div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>[Address Line 1]</div>
                      <div>[Address Line 2]</div>
                      <div>[City, Province Postal]</div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-300 pt-4 space-y-2">
                  <div className="flex gap-2 text-xs">
                    <div className="border border-gray-300 px-2 py-1">[Phone Icon]</div>
                    <div className="border border-gray-300 px-2 py-1 flex-1">[Phone Number]</div>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <div className="border border-gray-300 px-2 py-1">[Email Icon]</div>
                    <div className="border border-gray-300 px-2 py-1 flex-1">[Email Address]</div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="border-2 border-gray-400 p-6 bg-gray-50">
                <div className="font-bold text-sm mb-3">[BUSINESS HOURS]</div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span>[Monday - Friday]</span>
                    <span>[8:00 AM - 5:00 PM]</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span>[Saturday]</span>
                    <span>[Closed]</span>
                  </div>
                  <div className="flex justify-between">
                    <span>[Sunday]</span>
                    <span>[Closed]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="border-2 border-gray-400 bg-gray-300 h-96 flex items-center justify-center">
            <div className="text-2xl font-bold text-gray-500">[MAP PLACEHOLDER]</div>
          </div>
        </div>
      </section>
    </>
  );
}
