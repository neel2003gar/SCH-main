import { LofiServicePageTemplate } from '../../components/LofiServicePageTemplate';
import { Square } from 'lucide-react';

export default function LofiEarlyInterventionPage() {
  return (
    <LofiServicePageTemplate
      title="EARLY INTERVENTION / WORKPLACE WELLNESS"
      subtitle="[On-site clinicians address individual health barriers early in the injury process]"
    >
      <div className="space-y-8">
        <div className="border-2 border-gray-400 p-6 bg-gray-50">
          <div className="border-b-2 border-gray-400 pb-3 mb-4">
            <h2 className="text-xl font-bold">[SERVICE DESCRIPTION]</h2>
          </div>
          <div className="border border-gray-300 p-4 bg-white">
            <p className="text-sm text-gray-600">[Content about early intervention services]</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-gray-400 p-6 bg-white">
            <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
              <Square size={20} />
            </div>
            <div className="font-bold text-sm mb-2">[Feature 1]</div>
            <div className="text-xs text-gray-600">[Description]</div>
          </div>
          <div className="border-2 border-gray-400 p-6 bg-white">
            <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
              <Square size={20} />
            </div>
            <div className="font-bold text-sm mb-2">[Feature 2]</div>
            <div className="text-xs text-gray-600">[Description]</div>
          </div>
        </div>
      </div>
    </LofiServicePageTemplate>
  );
}
