import { Link, useOutletContext } from 'react-router';
import { Square } from 'lucide-react';

export type Language = 'en' | 'fr';

interface OutletContext {
  language: Language;
}

export default function LofiHomePage() {
  const { language } = useOutletContext<OutletContext>();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-200 border-b-2 border-gray-400 px-4 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="text-6xl font-bold text-gray-400">[HERO IMAGE]</div>
          </div>

          <div className="relative max-w-md">
            <div className="border-2 border-gray-500 bg-white p-6 shadow-lg">
              {/* Tag */}
              <div className="inline-block border border-gray-400 px-3 py-1 mb-3 text-xs">
                [TAG: Employee Health Services]
              </div>
              
              {/* Heading */}
              <div className="border-2 border-gray-400 p-3 mb-4 bg-gray-50">
                <h1 className="text-2xl md:text-3xl font-bold">[HEADING]</h1>
                <div className="text-xs text-gray-500 mt-1">"We Help People Return to Function."</div>
              </div>

              {/* Description */}
              <div className="border border-gray-300 p-3 mb-4 bg-white">
                <p className="text-sm text-gray-600">[Description paragraph about services and approach]</p>
              </div>

              {/* CTA Button */}
              <Link
                to="/lofi/get-quote"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-2 border-2 border-gray-800 text-sm font-bold"
              >
                <Square size={16} />
                [Get a Free Quote]
              </Link>

              <p className="text-xs text-gray-500 mt-3 italic">[Pricing tagline]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Bar */}
      <section className="relative -mt-12 z-10 px-4">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-white border-2 border-gray-500 shadow-lg p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Action 1 */}
              <div className="border-2 border-gray-400 p-4 text-center hover:bg-gray-50">
                <div className="w-16 h-16 rounded-full border-2 border-gray-400 mx-auto mb-3 flex items-center justify-center">
                  <Square size={24} />
                </div>
                <div className="font-bold text-sm mb-1">[Action Title 1]</div>
                <div className="text-xs text-gray-500">[Description]</div>
              </div>

              {/* Action 2 */}
              <div className="border-2 border-gray-400 p-4 text-center hover:bg-gray-50">
                <div className="w-16 h-16 rounded-full border-2 border-gray-400 mx-auto mb-3 flex items-center justify-center">
                  <Square size={24} />
                </div>
                <div className="font-bold text-sm mb-1">[Action Title 2]</div>
                <div className="text-xs text-gray-500">[Description]</div>
              </div>

              {/* Action 3 */}
              <div className="border-2 border-gray-400 p-4 text-center hover:bg-gray-50">
                <div className="w-16 h-16 rounded-full border-2 border-gray-400 mx-auto mb-3 flex items-center justify-center">
                  <Square size={24} />
                </div>
                <div className="font-bold text-sm mb-1">[Action Title 3]</div>
                <div className="text-xs text-gray-500">[Description]</div>
              </div>

              {/* Action 4 */}
              <div className="border-2 border-gray-400 p-4 text-center hover:bg-gray-50">
                <div className="w-16 h-16 rounded-full border-2 border-gray-400 mx-auto mb-3 flex items-center justify-center">
                  <Square size={24} />
                </div>
                <div className="font-bold text-sm mb-1">[Action Title 4]</div>
                <div className="text-xs text-gray-500">[Description]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-4 mt-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Title */}
          <div className="border-2 border-gray-400 p-4 mb-12 text-center bg-white">
            <h2 className="text-2xl md:text-3xl font-bold">[SERVICES SECTION TITLE]</h2>
            <div className="text-sm text-gray-500 mt-1">"Comprehensive Workplace Health Services"</div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white border-2 border-gray-400 p-6 hover:shadow-lg">
              <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
                <Square size={20} />
              </div>
              <div className="border border-gray-400 px-2 py-1 mb-3 inline-block">
                <h3 className="font-bold text-sm">[Service 1 Title]</h3>
              </div>
              <div className="border border-gray-300 p-3 mb-3 bg-gray-50">
                <p className="text-sm text-gray-600">[Service description paragraph]</p>
              </div>
              <Link to="/lofi/services/accommodation-return-to-work" className="text-sm underline">
                [Learn More →]
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white border-2 border-gray-400 p-6 hover:shadow-lg">
              <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
                <Square size={20} />
              </div>
              <div className="border border-gray-400 px-2 py-1 mb-3 inline-block">
                <h3 className="font-bold text-sm">[Service 2 Title]</h3>
              </div>
              <div className="border border-gray-300 p-3 mb-3 bg-gray-50">
                <p className="text-sm text-gray-600">[Service description paragraph]</p>
              </div>
              <Link to="/lofi/services/early-intervention" className="text-sm underline">
                [Learn More →]
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white border-2 border-gray-400 p-6 hover:shadow-lg">
              <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
                <Square size={20} />
              </div>
              <div className="border border-gray-400 px-2 py-1 mb-3 inline-block">
                <h3 className="font-bold text-sm">[Service 3 Title]</h3>
              </div>
              <div className="border border-gray-300 p-3 mb-3 bg-gray-50">
                <p className="text-sm text-gray-600">[Service description paragraph]</p>
              </div>
              <Link to="/lofi/services/occupational-therapy" className="text-sm underline">
                [Learn More →]
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white border-2 border-gray-400 p-6 hover:shadow-lg">
              <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
                <Square size={20} />
              </div>
              <div className="border border-gray-400 px-2 py-1 mb-3 inline-block">
                <h3 className="font-bold text-sm">[Service 4 Title]</h3>
              </div>
              <div className="border border-gray-300 p-3 mb-3 bg-gray-50">
                <p className="text-sm text-gray-600">[Service description paragraph]</p>
              </div>
              <Link to="/lofi/services/ergonomics" className="text-sm underline">
                [Learn More →]
              </Link>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white border-2 border-gray-400 p-6 hover:shadow-lg">
              <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
                <Square size={20} />
              </div>
              <div className="border border-gray-400 px-2 py-1 mb-3 inline-block">
                <h3 className="font-bold text-sm">[Service 5 Title]</h3>
              </div>
              <div className="border border-gray-300 p-3 mb-3 bg-gray-50">
                <p className="text-sm text-gray-600">[Service description paragraph]</p>
              </div>
              <Link to="/lofi/services/therapy" className="text-sm underline">
                [Learn More →]
              </Link>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white border-2 border-gray-400 p-6 hover:shadow-lg">
              <div className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center mb-4">
                <Square size={20} />
              </div>
              <div className="border border-gray-400 px-2 py-1 mb-3 inline-block">
                <h3 className="font-bold text-sm">[Service 6 Title]</h3>
              </div>
              <div className="border border-gray-300 p-3 mb-3 bg-gray-50">
                <p className="text-sm text-gray-600">[Service description paragraph]</p>
              </div>
              <Link to="/lofi/services/disability-management" className="text-sm underline">
                [Learn More →]
              </Link>
            </div>
          </div>

          {/* CTA Strip */}
          <div className="bg-gray-200 border-2 border-gray-400 p-6 mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="border border-gray-400 px-4 py-2 bg-white">
              <h3 className="font-bold text-lg">[CTA Title: Simple. Transparent. Secure.]</h3>
            </div>
            <Link
              to="/lofi/get-quote"
              className="bg-gray-800 text-white px-6 py-3 border-2 border-gray-800 text-sm font-bold"
            >
              [Get Your Free Quote]
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Title */}
          <div className="border-2 border-gray-400 p-4 mb-12 text-center bg-gray-50">
            <h2 className="text-2xl md:text-3xl font-bold">[WHY CHOOSE US TITLE]</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Reason 1 */}
            <div className="text-center border border-gray-300 p-6">
              <div className="w-16 h-16 rounded-full border-2 border-gray-400 mx-auto mb-4 flex items-center justify-center">
                <Square size={24} />
              </div>
              <div className="font-bold text-sm mb-2">[Reason 1 Title]</div>
              <div className="text-xs text-gray-600">[Description text]</div>
            </div>

            {/* Reason 2 */}
            <div className="text-center border border-gray-300 p-6">
              <div className="w-16 h-16 rounded-full border-2 border-gray-400 mx-auto mb-4 flex items-center justify-center">
                <Square size={24} />
              </div>
              <div className="font-bold text-sm mb-2">[Reason 2 Title]</div>
              <div className="text-xs text-gray-600">[Description text]</div>
            </div>

            {/* Reason 3 */}
            <div className="text-center border border-gray-300 p-6">
              <div className="w-16 h-16 rounded-full border-2 border-gray-400 mx-auto mb-4 flex items-center justify-center">
                <Square size={24} />
              </div>
              <div className="font-bold text-sm mb-2">[Reason 3 Title]</div>
              <div className="text-xs text-gray-600">[Description text]</div>
            </div>

            {/* Reason 4 */}
            <div className="text-center border border-gray-300 p-6">
              <div className="w-16 h-16 rounded-full border-2 border-gray-400 mx-auto mb-4 flex items-center justify-center">
                <Square size={24} />
              </div>
              <div className="font-bold text-sm mb-2">[Reason 4 Title]</div>
              <div className="text-xs text-gray-600">[Description text]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Title */}
          <div className="border-2 border-gray-400 p-4 mb-12 text-center bg-white">
            <h2 className="text-2xl md:text-3xl font-bold">[TEAM SECTION TITLE]</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white border-2 border-gray-400 overflow-hidden hover:shadow-lg">
              <div className="h-48 bg-gray-300 border-b-2 border-gray-400 flex items-center justify-center">
                <div className="text-gray-500 text-sm">[IMAGE]</div>
              </div>
              <div className="p-4">
                <div className="font-bold text-sm mb-1">[Team Member 1]</div>
                <div className="text-xs text-gray-600">[Role/Specialization]</div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white border-2 border-gray-400 overflow-hidden hover:shadow-lg">
              <div className="h-48 bg-gray-300 border-b-2 border-gray-400 flex items-center justify-center">
                <div className="text-gray-500 text-sm">[IMAGE]</div>
              </div>
              <div className="p-4">
                <div className="font-bold text-sm mb-1">[Team Member 2]</div>
                <div className="text-xs text-gray-600">[Role/Specialization]</div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white border-2 border-gray-400 overflow-hidden hover:shadow-lg">
              <div className="h-48 bg-gray-300 border-b-2 border-gray-400 flex items-center justify-center">
                <div className="text-gray-500 text-sm">[IMAGE]</div>
              </div>
              <div className="p-4">
                <div className="font-bold text-sm mb-1">[Team Member 3]</div>
                <div className="text-xs text-gray-600">[Role/Specialization]</div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white border-2 border-gray-400 overflow-hidden hover:shadow-lg">
              <div className="h-48 bg-gray-300 border-b-2 border-gray-400 flex items-center justify-center">
                <div className="text-gray-500 text-sm">[IMAGE]</div>
              </div>
              <div className="p-4">
                <div className="font-bold text-sm mb-1">[Team Member 4]</div>
                <div className="text-xs text-gray-600">[Role/Specialization]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Title */}
          <div className="border-2 border-gray-400 p-4 mb-12 text-center bg-gray-50">
            <h2 className="text-2xl md:text-3xl font-bold">[TESTIMONIALS TITLE]</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="border-2 border-gray-400 p-6 bg-gray-50">
              <div className="border border-gray-300 p-4 mb-4 bg-white">
                <p className="text-sm text-gray-600 italic">"[Testimonial quote text goes here]"</p>
              </div>
              <div className="font-bold text-sm">[Client Name]</div>
              <div className="text-xs text-gray-500">[Client Role]</div>
            </div>

            {/* Testimonial 2 */}
            <div className="border-2 border-gray-400 p-6 bg-gray-50">
              <div className="border border-gray-300 p-4 mb-4 bg-white">
                <p className="text-sm text-gray-600 italic">"[Testimonial quote text goes here]"</p>
              </div>
              <div className="font-bold text-sm">[Client Name]</div>
              <div className="text-xs text-gray-500">[Client Role]</div>
            </div>

            {/* Testimonial 3 */}
            <div className="border-2 border-gray-400 p-6 bg-gray-50">
              <div className="border border-gray-300 p-4 mb-4 bg-white">
                <p className="text-sm text-gray-600 italic">"[Testimonial quote text goes here]"</p>
              </div>
              <div className="font-bold text-sm">[Client Name]</div>
              <div className="text-xs text-gray-500">[Client Role]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-200 border-t-2 border-gray-400 py-16 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="border-2 border-gray-500 p-6 bg-white mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">[FINAL CTA TITLE]</h2>
            <p className="text-sm text-gray-600">[CTA description text]</p>
          </div>
          <Link
            to="/lofi/contact-us"
            className="inline-block bg-gray-800 text-white px-8 py-3 border-2 border-gray-800 text-sm font-bold"
          >
            [Contact Us Today]
          </Link>
        </div>
      </section>
    </>
  );
}
