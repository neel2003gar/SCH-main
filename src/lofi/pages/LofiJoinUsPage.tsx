import { Square } from 'lucide-react';

export default function LofiJoinUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-200 border-b-2 border-gray-400 py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="border-2 border-gray-500 p-6 bg-white inline-block mb-4">
            <h1 className="text-3xl md:text-4xl font-bold">[JOIN OUR TEAM]</h1>
          </div>
          <div className="border border-gray-400 p-4 bg-white max-w-2xl mx-auto">
            <p className="text-sm text-gray-600">[Join a team dedicated to helping people return to function]</p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="border-2 border-gray-400 p-4 mb-8 text-center bg-gray-50">
            <h2 className="text-2xl font-bold">[WHY JOIN US?]</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-gray-400 p-6 bg-gray-50">
              <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
                <Square size={20} />
              </div>
              <div className="font-bold text-sm mb-2">[Benefit 1]</div>
              <div className="text-xs text-gray-600">[Description of employee benefit or company culture]</div>
            </div>

            <div className="border-2 border-gray-400 p-6 bg-gray-50">
              <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
                <Square size={20} />
              </div>
              <div className="font-bold text-sm mb-2">[Benefit 2]</div>
              <div className="text-xs text-gray-600">[Description of employee benefit or company culture]</div>
            </div>

            <div className="border-2 border-gray-400 p-6 bg-gray-50">
              <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
                <Square size={20} />
              </div>
              <div className="font-bold text-sm mb-2">[Benefit 3]</div>
              <div className="text-xs text-gray-600">[Description of employee benefit or company culture]</div>
            </div>

            <div className="border-2 border-gray-400 p-6 bg-gray-50">
              <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
                <Square size={20} />
              </div>
              <div className="font-bold text-sm mb-2">[Benefit 4]</div>
              <div className="text-xs text-gray-600">[Description of employee benefit or company culture]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="border-2 border-gray-400 p-4 mb-8 text-center bg-white">
            <h2 className="text-2xl font-bold">[CURRENT OPENINGS]</h2>
          </div>

          <div className="space-y-4">
            {/* Job Posting 1 */}
            <div className="border-2 border-gray-400 p-6 bg-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="font-bold text-lg mb-2">[Job Title 1]</div>
                  <div className="flex gap-4 text-xs text-gray-600">
                    <div className="border border-gray-300 px-2 py-1">[Location]</div>
                    <div className="border border-gray-300 px-2 py-1">[Full-time]</div>
                    <div className="border border-gray-300 px-2 py-1">[Department]</div>
                  </div>
                </div>
                <button className="border-2 border-gray-400 px-6 py-2 text-sm font-bold hover:bg-gray-800 hover:text-white">
                  [VIEW DETAILS]
                </button>
              </div>
            </div>

            {/* Job Posting 2 */}
            <div className="border-2 border-gray-400 p-6 bg-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="font-bold text-lg mb-2">[Job Title 2]</div>
                  <div className="flex gap-4 text-xs text-gray-600">
                    <div className="border border-gray-300 px-2 py-1">[Location]</div>
                    <div className="border border-gray-300 px-2 py-1">[Part-time]</div>
                    <div className="border border-gray-300 px-2 py-1">[Department]</div>
                  </div>
                </div>
                <button className="border-2 border-gray-400 px-6 py-2 text-sm font-bold hover:bg-gray-800 hover:text-white">
                  [VIEW DETAILS]
                </button>
              </div>
            </div>

            {/* Job Posting 3 */}
            <div className="border-2 border-gray-400 p-6 bg-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="font-bold text-lg mb-2">[Job Title 3]</div>
                  <div className="flex gap-4 text-xs text-gray-600">
                    <div className="border border-gray-300 px-2 py-1">[Location]</div>
                    <div className="border border-gray-300 px-2 py-1">[Full-time]</div>
                    <div className="border border-gray-300 px-2 py-1">[Department]</div>
                  </div>
                </div>
                <button className="border-2 border-gray-400 px-6 py-2 text-sm font-bold hover:bg-gray-800 hover:text-white">
                  [VIEW DETAILS]
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-[800px] mx-auto">
          <div className="border-2 border-gray-400 p-8 bg-gray-50">
            <div className="border-b-2 border-gray-400 pb-4 mb-6">
              <h2 className="text-xl font-bold">[SUBMIT YOUR APPLICATION]</h2>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs mb-1">[First Name *]</div>
                  <div className="border-2 border-gray-400 p-3 bg-white text-sm text-gray-400">
                    [Input]
                  </div>
                </div>
                <div>
                  <div className="text-xs mb-1">[Last Name *]</div>
                  <div className="border-2 border-gray-400 p-3 bg-white text-sm text-gray-400">
                    [Input]
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs mb-1">[Email *]</div>
                <div className="border-2 border-gray-400 p-3 bg-white text-sm text-gray-400">
                  [Input]
                </div>
              </div>

              <div>
                <div className="text-xs mb-1">[Phone *]</div>
                <div className="border-2 border-gray-400 p-3 bg-white text-sm text-gray-400">
                  [Input]
                </div>
              </div>

              <div>
                <div className="text-xs mb-1">[Position Applying For *]</div>
                <div className="border-2 border-gray-400 p-3 bg-white text-sm text-gray-400">
                  [Dropdown]
                </div>
              </div>

              <div>
                <div className="text-xs mb-1">[Upload Resume *]</div>
                <div className="border-2 border-dashed border-gray-400 p-8 bg-white text-center">
                  <div className="text-sm text-gray-400">[Click to upload or drag and drop]</div>
                </div>
              </div>

              <div>
                <div className="text-xs mb-1">[Cover Letter]</div>
                <div className="border-2 border-gray-400 p-3 bg-white h-32 text-sm text-gray-400">
                  [Textarea]
                </div>
              </div>

              <button className="w-full bg-gray-800 text-white py-3 border-2 border-gray-800 font-bold">
                [SUBMIT APPLICATION]
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
