import { LofiServicePageTemplate } from '../../components/LofiServicePageTemplate';
import { Square } from 'lucide-react';

export default function LofiOccupationalTherapyPage() {
  return (
    <LofiServicePageTemplate
      title="OCCUPATIONAL THERAPY"
      subtitle="[Highly trained OTs focus on physical, cognitive and psychoemotional health]"
    >
      <div className="space-y-8">
        <div className="border-2 border-gray-400 p-6 bg-gray-50">
          <div className="border-b-2 border-gray-400 pb-3 mb-4">
            <h2 className="text-xl font-bold">[ABOUT OUR OT SERVICES]</h2>
          </div>
          <div className="border border-gray-300 p-4 bg-white">
            <p className="text-sm text-gray-600">[Content about occupational therapy]</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-300 p-4 text-center">
            <div className="font-bold text-sm mb-2">[Specialization 1]</div>
            <div className="text-xs text-gray-600">[Details]</div>
          </div>
          <div className="border border-gray-300 p-4 text-center">
            <div className="font-bold text-sm mb-2">[Specialization 2]</div>
            <div className="text-xs text-gray-600">[Details]</div>
          </div>
          <div className="border border-gray-300 p-4 text-center">
            <div className="font-bold text-sm mb-2">[Specialization 3]</div>
            <div className="text-xs text-gray-600">[Details]</div>
          </div>
        </div>
      </div>
    </LofiServicePageTemplate>
  );
}
