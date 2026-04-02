import { LofiServicePageTemplate } from '../../components/LofiServicePageTemplate';

export default function LofiErgonomicsPage() {
  return (
    <LofiServicePageTemplate
      title="ERGONOMICS / JOB DEMANDS ANALYSIS"
      subtitle="[In-depth analysis of job tasks to outline physical, cognitive, and sensory demands]"
    >
      <div className="space-y-8">
        <div className="border-2 border-gray-400 p-6 bg-gray-50">
          <div className="border-b-2 border-gray-400 pb-3 mb-4">
            <h2 className="text-xl font-bold">[ERGONOMICS SERVICES]</h2>
          </div>
          <div className="border border-gray-300 p-4 bg-white mb-4">
            <p className="text-sm text-gray-600">[Paragraph 1]</p>
          </div>
          <div className="border border-gray-300 p-4 bg-white">
            <p className="text-sm text-gray-600">[Paragraph 2]</p>
          </div>
        </div>
      </div>
    </LofiServicePageTemplate>
  );
}
