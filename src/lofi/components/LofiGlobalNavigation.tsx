import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

export type Language = 'en' | 'fr';

interface LofiGlobalNavigationProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function LofiGlobalNavigation({ language, setLanguage }: LofiGlobalNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="border-b border-gray-300 bg-gray-100 px-4 py-2">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center text-xs">
          <div className="flex gap-4">
            <div className="border border-gray-400 px-2 py-1 rounded">[Phone Icon] [Phone]</div>
            <div className="border border-gray-400 px-2 py-1 rounded">[Email Icon] [Email]</div>
          </div>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 border ${language === 'en' ? 'bg-gray-300 border-gray-500' : 'border-gray-400'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2 py-1 border ${language === 'fr' ? 'bg-gray-300 border-gray-500' : 'border-gray-400'}`}
            >
              FR
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 bg-white border-b-2 border-gray-400 shadow-sm z-50">
        <div className="max-w-[1200px] mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/lofi" className="flex items-center">
              <div className="w-32 h-10 border-2 border-gray-400 flex items-center justify-center text-xs font-bold">
                [LOGO]
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="border border-gray-400 px-3 py-1.5 text-sm">[Services ▼]</div>
              <div className="border border-gray-400 px-3 py-1.5 text-sm">[Locations ▼]</div>
              <Link to="/lofi/about-us" className="border border-gray-400 px-3 py-1.5 text-sm">[About Us]</Link>
              <div className="border border-gray-400 px-3 py-1.5 text-sm">[Contact ▼]</div>
              <button className="border-2 border-gray-400 px-3 py-1.5 text-sm">[Log In]</button>
              <Link to="/lofi/get-quote" className="bg-gray-800 text-white px-4 py-1.5 text-sm border-2 border-gray-800">
                [Get Quote]
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 border border-gray-400"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-300 bg-white">
            <div className="px-4 py-4 space-y-2">
              <div className="border border-gray-400 px-3 py-2 text-sm">[Services ▼]</div>
              <div className="border border-gray-400 px-3 py-2 text-sm">[Locations ▼]</div>
              <Link to="/lofi/about-us" className="block border border-gray-400 px-3 py-2 text-sm">[About Us]</Link>
              <div className="border border-gray-400 px-3 py-2 text-sm">[Contact ▼]</div>
              <button className="w-full border-2 border-gray-400 px-3 py-2 text-sm">[Log In]</button>
              <Link to="/lofi/get-quote" className="block text-center bg-gray-800 text-white px-3 py-2 text-sm">
                [Get Quote]
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
