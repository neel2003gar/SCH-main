import { LofiServicePageTemplate } from '../../components/LofiServicePageTemplate';
import { Square } from 'lucide-react';

export default function LofiAccommodationPage() {
  return (
    <LofiServicePageTemplate
      title="ACCOMMODATION, STAY AT WORK AND RETURN TO WORK"
      subtitle="[Using a functional model, we work with employees and employers to determine suitable accommodations]"
    >
      {/* Overview */}
      <div className="border-2 border-gray-400 p-6 mb-8 bg-gray-50">
        <div className="border-b-2 border-gray-400 pb-3 mb-4">
          <h2 className="text-xl font-bold">[OVERVIEW]</h2>
        </div>
        <div className="space-y-4">
          <div className="border border-gray-300 p-4 bg-white">
            <p className="text-sm text-gray-600">[Overview paragraph 1 about accommodation services]</p>
          </div>
          <div className="border border-gray-300 p-4 bg-white">
            <p className="text-sm text-gray-600">[Overview paragraph 2 about stay at work programs]</p>
          </div>
          <div className="border border-gray-300 p-4 bg-white">
            <p className="text-sm text-gray-600">[Overview paragraph 3 about return to work solutions]</p>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="border-2 border-gray-400 p-6 mb-8 bg-white">
        <div className="border-b-2 border-gray-400 pb-3 mb-4">
          <h2 className="text-xl font-bold">[WHAT WE DO]</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-300 p-4 flex gap-3">
            <div className="w-8 h-8 border border-gray-400 flex items-center justify-center flex-shrink-0">
              <Square size={16} />
            </div>
            <div>
              <div className="font-bold text-sm mb-1">[Service Item 1]</div>
              <div className="text-xs text-gray-600">[Description]</div>
            </div>
          </div>

          <div className="border border-gray-300 p-4 flex gap-3">
            <div className="w-8 h-8 border border-gray-400 flex items-center justify-center flex-shrink-0">
              <Square size={16} />
            </div>
            <div>
              <div className="font-bold text-sm mb-1">[Service Item 2]</div>
              <div className="text-xs text-gray-600">[Description]</div>
            </div>
          </div>

          <div className="border border-gray-300 p-4 flex gap-3">
            <div className="w-8 h-8 border border-gray-400 flex items-center justify-center flex-shrink-0">
              <Square size={16} />
            </div>
            <div>
              <div className="font-bold text-sm mb-1">[Service Item 3]</div>
              <div className="text-xs text-gray-600">[Description]</div>
            </div>
          </div>

          <div className="border border-gray-300 p-4 flex gap-3">
            <div className="w-8 h-8 border border-gray-400 flex items-center justify-center flex-shrink-0">
              <Square size={16} />
            </div>
            <div>
              <div className="font-bold text-sm mb-1">[Service Item 4]</div>
              <div className="text-xs text-gray-600">[Description]</div>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="border-2 border-gray-400 p-6 bg-gray-50">
        <div className="border-b-2 border-gray-400 pb-3 mb-4">
          <h2 className="text-xl font-bold">[OUR PROCESS]</h2>
        </div>
        <div className="space-y-4">
          <div className="border-2 border-gray-400 p-4 bg-white flex gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center flex-shrink-0 font-bold">
              1
            </div>
            <div>
              <div className="font-bold text-sm mb-1">[Step 1 Title]</div>
              <div className="text-xs text-gray-600">[Step description]</div>
            </div>
          </div>

          <div className="border-2 border-gray-400 p-4 bg-white flex gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center flex-shrink-0 font-bold">
              2
            </div>
            <div>
              <div className="font-bold text-sm mb-1">[Step 2 Title]</div>
              <div className="text-xs text-gray-600">[Step description]</div>
            </div>
          </div>

          <div className="border-2 border-gray-400 p-4 bg-white flex gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center flex-shrink-0 font-bold">
              3
            </div>
            <div>
              <div className="font-bold text-sm mb-1">[Step 3 Title]</div>
              <div className="text-xs text-gray-600">[Step description]</div>
            </div>
          </div>

          <div className="border-2 border-gray-400 p-4 bg-white flex gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center flex-shrink-0 font-bold">
              4
            </div>
            <div>
              <div className="font-bold text-sm mb-1">[Step 4 Title]</div>
              <div className="text-xs text-gray-600">[Step description]</div>
            </div>
          </div>
        </div>
      </div>
    </LofiServicePageTemplate>
  );
}
