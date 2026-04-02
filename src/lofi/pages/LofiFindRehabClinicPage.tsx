import { Square } from 'lucide-react';

export default function LofiFindRehabClinicPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-200 border-b-2 border-gray-400 py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="border-2 border-gray-500 p-6 bg-white inline-block mb-4">
            <h1 className="text-3xl md:text-4xl font-bold">[FIND A REHABILITATION CLINIC]</h1>
          </div>
          <div className="border border-gray-400 p-4 bg-white max-w-2xl mx-auto">
            <p className="text-sm text-gray-600">[Locate a rehabilitation clinic near you]</p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="border-2 border-gray-400 p-6 bg-gray-50 mb-8">
            <div className="border-b-2 border-gray-400 pb-4 mb-4">
              <h2 className="text-xl font-bold">[SEARCH FOR A CLINIC]</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 border-gray-400 p-3 bg-white text-sm text-gray-400">
                [City/Postal Code]
              </div>
              <div className="border-2 border-gray-400 p-3 bg-white text-sm text-gray-400">
                [Province]
              </div>
              <button className="bg-gray-800 text-white py-3 border-2 border-gray-800 font-bold">
                [SEARCH]
              </button>
            </div>
          </div>

          {/* Clinic Results */}
          <div className="space-y-4">
            {/* Clinic 1 */}
            <div className="border-2 border-gray-400 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-2 p-6 border-b-2 md:border-b-0 md:border-r-2 border-gray-400">
                  <div className="font-bold text-lg mb-3">[Clinic Name 1]</div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex gap-2">
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Icon]</div>
                      <div>
                        <div>[Address Line 1]</div>
                        <div>[City, Province Postal Code]</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Icon]</div>
                      <div>[Phone Number]</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Icon]</div>
                      <div>[Email Address]</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <div className="font-bold text-xs mb-2">[Services Offered:]</div>
                    <div className="flex flex-wrap gap-2">
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Service 1]</div>
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Service 2]</div>
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Service 3]</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gray-100">
                  <div className="border-2 border-gray-400 bg-gray-300 h-full min-h-[200px] flex items-center justify-center">
                    <div className="text-xs text-gray-500">[MAP]</div>
                  </div>
                  <button className="w-full mt-4 border-2 border-gray-400 py-2 text-sm font-bold hover:bg-gray-800 hover:text-white">
                    [GET DIRECTIONS]
                  </button>
                </div>
              </div>
            </div>

            {/* Clinic 2 */}
            <div className="border-2 border-gray-400 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-2 p-6 border-b-2 md:border-b-0 md:border-r-2 border-gray-400">
                  <div className="font-bold text-lg mb-3">[Clinic Name 2]</div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex gap-2">
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Icon]</div>
                      <div>
                        <div>[Address Line 1]</div>
                        <div>[City, Province Postal Code]</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Icon]</div>
                      <div>[Phone Number]</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Icon]</div>
                      <div>[Email Address]</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <div className="font-bold text-xs mb-2">[Services Offered:]</div>
                    <div className="flex flex-wrap gap-2">
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Service 1]</div>
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Service 2]</div>
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Service 3]</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gray-100">
                  <div className="border-2 border-gray-400 bg-gray-300 h-full min-h-[200px] flex items-center justify-center">
                    <div className="text-xs text-gray-500">[MAP]</div>
                  </div>
                  <button className="w-full mt-4 border-2 border-gray-400 py-2 text-sm font-bold hover:bg-gray-800 hover:text-white">
                    [GET DIRECTIONS]
                  </button>
                </div>
              </div>
            </div>

            {/* Clinic 3 */}
            <div className="border-2 border-gray-400 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-2 p-6 border-b-2 md:border-b-0 md:border-r-2 border-gray-400">
                  <div className="font-bold text-lg mb-3">[Clinic Name 3]</div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex gap-2">
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Icon]</div>
                      <div>
                        <div>[Address Line 1]</div>
                        <div>[City, Province Postal Code]</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Icon]</div>
                      <div>[Phone Number]</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Icon]</div>
                      <div>[Email Address]</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <div className="font-bold text-xs mb-2">[Services Offered:]</div>
                    <div className="flex flex-wrap gap-2">
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Service 1]</div>
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Service 2]</div>
                      <div className="border border-gray-300 px-2 py-1 text-xs">[Service 3]</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gray-100">
                  <div className="border-2 border-gray-400 bg-gray-300 h-full min-h-[200px] flex items-center justify-center">
                    <div className="text-xs text-gray-500">[MAP]</div>
                  </div>
                  <button className="w-full mt-4 border-2 border-gray-400 py-2 text-sm font-bold hover:bg-gray-800 hover:text-white">
                    [GET DIRECTIONS]
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map View */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="border-2 border-gray-400 p-4 mb-4 text-center bg-white">
            <h2 className="text-xl font-bold">[ALL LOCATIONS MAP]</h2>
          </div>
          <div className="border-2 border-gray-400 bg-gray-300 h-96 flex items-center justify-center">
            <div className="text-2xl font-bold text-gray-500">[INTERACTIVE MAP PLACEHOLDER]</div>
          </div>
        </div>
      </section>
    </>
  );
}
