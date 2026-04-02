import { LofiServicePageTemplate } from '../../components/LofiServicePageTemplate';

export default function LofiTherapyPage() {
  return (
    <LofiServicePageTemplate
      title="THERAPY – PHYSIOTHERAPY, CHIROPRACTIC AND MASSAGE"
      subtitle="[Physical therapy provided by clinicians trained in sports and industrial therapy]"
    >
      <div className="space-y-8">
        <div className="border-2 border-gray-400 p-6 bg-gray-50">
          <div className="border-b-2 border-gray-400 pb-3 mb-4">
            <h2 className="text-xl font-bold">[THERAPY SERVICES]</h2>
          </div>
          <div className="space-y-3">
            <div className="border border-gray-300 p-3 bg-white">
              <div className="font-bold text-sm mb-1">[Physiotherapy]</div>
              <div className="text-xs text-gray-600">[Description]</div>
            </div>
            <div className="border border-gray-300 p-3 bg-white">
              <div className="font-bold text-sm mb-1">[Chiropractic]</div>
              <div className="text-xs text-gray-600">[Description]</div>
            </div>
            <div className="border border-gray-300 p-3 bg-white">
              <div className="font-bold text-sm mb-1">[Massage Therapy]</div>
              <div className="text-xs text-gray-600">[Description]</div>
            </div>
          </div>
        </div>
      </div>
    </LofiServicePageTemplate>
  );
}
