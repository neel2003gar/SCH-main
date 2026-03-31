import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-serif text-6xl mb-4" style={{ fontFamily: 'DM Serif Display', color: '#0F2A45' }}>404</h1>
        <p className="text-xl mb-8" style={{ color: '#3D3D3A' }}>Page not found</p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-lg text-white font-semibold"
          style={{ backgroundColor: '#6ABF4B' }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}