import { Link } from 'react-router';

export type Language = 'en' | 'fr';

interface LofiGlobalFooterProps {
  language: Language;
}

export function LofiGlobalFooter({ language }: LofiGlobalFooterProps) {
  return (
    <footer className="bg-gray-100 border-t-2 border-gray-400 mt-12">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="w-32 h-10 border-2 border-gray-400 flex items-center justify-center text-xs font-bold mb-4">
              [LOGO]
            </div>
            <div className="border border-gray-300 p-3 bg-white">
              <p className="text-xs text-gray-600">[Company description text placeholder]</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="border-b-2 border-gray-400 pb-2 mb-4">
              <h3 className="font-bold text-sm">[SERVICES]</h3>
            </div>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="border border-gray-300 px-2 py-1">[Service Link 1]</li>
              <li className="border border-gray-300 px-2 py-1">[Service Link 2]</li>
              <li className="border border-gray-300 px-2 py-1">[Service Link 3]</li>
              <li className="border border-gray-300 px-2 py-1">[Service Link 4]</li>
              <li className="border border-gray-300 px-2 py-1">[Service Link 5]</li>
              <li className="border border-gray-300 px-2 py-1">[Service Link 6]</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="border-b-2 border-gray-400 pb-2 mb-4">
              <h3 className="font-bold text-sm">[COMPANY]</h3>
            </div>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="border border-gray-300 px-2 py-1">[About Us]</li>
              <li className="border border-gray-300 px-2 py-1">[Our Team]</li>
              <li className="border border-gray-300 px-2 py-1">[Find Rehab]</li>
              <li className="border border-gray-300 px-2 py-1">[Find Occ Health]</li>
              <li className="border border-gray-300 px-2 py-1">[Join Us]</li>
              <li className="border border-gray-300 px-2 py-1">[Contact Us]</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="border-b-2 border-gray-400 pb-2 mb-4">
              <h3 className="font-bold text-sm">[CONTACT]</h3>
            </div>
            <div className="space-y-4">
              <div className="border border-gray-300 p-3 bg-white">
                <div className="font-bold text-xs mb-2">[Corporate Office]</div>
                <div className="text-xs text-gray-600">
                  <div>[Address Line 1]</div>
                  <div>[Address Line 2]</div>
                  <div>[Phone]</div>
                </div>
              </div>
              <div className="border border-gray-300 p-3 bg-white">
                <div className="font-bold text-xs mb-2">[Regional Office]</div>
                <div className="text-xs text-gray-600">
                  <div>[Address Line 1]</div>
                  <div>[Address Line 2]</div>
                  <div>[Phone]</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-gray-600">[© 2026 Company Name. All Rights Reserved]</div>
            <div className="flex gap-4">
              <div className="border border-gray-300 px-2 py-1 text-xs">[Privacy Policy]</div>
              <div className="border border-gray-300 px-2 py-1 text-xs">[Security Policy]</div>
              <div className="border border-gray-300 px-2 py-1 text-xs">[Accessibility]</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
