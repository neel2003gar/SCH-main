import { LofiServicePageTemplate } from '../../components/LofiServicePageTemplate';

export default function LofiDisabilityManagementPage() {
  return (
    <LofiServicePageTemplate
      title="DISABILITY CASE MANAGEMENT"
      subtitle="[Ensuring collaboration between the employee, healthcare professionals, and employer]"
    >
      <div className="space-y-8">
        <div className="border-2 border-gray-400 p-6 bg-gray-50">
          <div className="border-b-2 border-gray-400 pb-3 mb-4">
            <h2 className="text-xl font-bold">[CASE MANAGEMENT APPROACH]</h2>
          </div>
          <div className="border border-gray-300 p-4 bg-white">
            <p className="text-sm text-gray-600">[Content about disability management services]</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-gray-400 p-4 bg-white">
            <div className="font-bold text-sm mb-2">[Component 1]</div>
            <div className="text-xs text-gray-600">[Description]</div>
          </div>
          <div className="border-2 border-gray-400 p-4 bg-white">
            <div className="font-bold text-sm mb-2">[Component 2]</div>
            <div className="text-xs text-gray-600">[Description]</div>
          </div>
        </div>
      </div>
    </LofiServicePageTemplate>
  );
}
