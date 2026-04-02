import { ReactNode } from 'react';
import { Link } from 'react-router';
import { Square } from 'lucide-react';

interface LofiServicePageTemplateProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export function LofiServicePageTemplate({ title, subtitle, children }: LofiServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-200 border-b-2 border-gray-400 py-16 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="border-2 border-gray-500 p-6 bg-white inline-block mb-4">
            <h1 className="text-3xl md:text-4xl font-bold">[{title}]</h1>
          </div>
          <div className="border border-gray-400 p-4 bg-white max-w-3xl mx-auto">
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-[1000px] mx-auto">
          {children}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="border-2 border-gray-400 p-4 mb-8 text-center bg-white">
            <h2 className="text-2xl font-bold">[KEY BENEFITS]</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-gray-400 p-6 bg-white">
              <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
                <Square size={20} />
              </div>
              <div className="font-bold text-sm mb-2">[Benefit 1]</div>
              <div className="text-xs text-gray-600">[Description]</div>
            </div>

            <div className="border-2 border-gray-400 p-6 bg-white">
              <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
                <Square size={20} />
              </div>
              <div className="font-bold text-sm mb-2">[Benefit 2]</div>
              <div className="text-xs text-gray-600">[Description]</div>
            </div>

            <div className="border-2 border-gray-400 p-6 bg-white">
              <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
                <Square size={20} />
              </div>
              <div className="font-bold text-sm mb-2">[Benefit 3]</div>
              <div className="text-xs text-gray-600">[Description]</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-12 px-4 border-t-2 border-gray-900">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="border-2 border-white p-6 mb-6">
            <h2 className="text-2xl font-bold mb-2">[Ready to Get Started?]</h2>
            <p className="text-sm">[Contact us today to learn more]</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/lofi/get-quote"
              className="bg-white text-gray-800 px-6 py-3 border-2 border-white text-sm font-bold"
            >
              [Get a Quote]
            </Link>
            <Link
              to="/lofi/contact-us"
              className="border-2 border-white px-6 py-3 text-sm font-bold hover:bg-white hover:text-gray-800"
            >
              [Contact Us]
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
