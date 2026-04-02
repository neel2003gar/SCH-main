import { Link } from 'react-router';

export default function LofiNotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-[600px] w-full text-center">
        <div className="border-2 border-gray-500 p-8 bg-gray-50 mb-6">
          <div className="text-8xl font-bold text-gray-400 mb-4">[404]</div>
          <div className="border-b-2 border-gray-400 pb-4 mb-4">
            <h1 className="text-3xl font-bold">[PAGE NOT FOUND]</h1>
          </div>
          <div className="border border-gray-300 p-4 bg-white">
            <p className="text-sm text-gray-600">[The page you are looking for does not exist or has been moved.]</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/lofi"
            className="bg-gray-800 text-white px-6 py-3 border-2 border-gray-800 text-sm font-bold"
          >
            [GO TO HOME]
          </Link>
          <Link
            to="/lofi/contact-us"
            className="border-2 border-gray-400 px-6 py-3 text-sm font-bold hover:bg-gray-800 hover:text-white"
          >
            [CONTACT US]
          </Link>
        </div>
      </div>
    </div>
  );
}
