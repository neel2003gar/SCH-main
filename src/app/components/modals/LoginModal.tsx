import { X } from 'lucide-react';
import { useState } from 'react';

export type Language = 'en' | 'fr';

interface LoginModalProps {
  language: Language;
  onClose: () => void;
}

const translations = {
  en: {
    title: 'Client Portal Login',
    email: 'Email Address',
    password: 'Password',
    signIn: 'Sign In',
    cancel: 'Cancel',
    forgotPassword: 'Forgot Password?',
  },
  fr: {
    title: 'Connexion Portail Client',
    email: 'Adresse Email',
    password: 'Mot de Passe',
    signIn: 'Se Connecter',
    cancel: 'Annuler',
    forgotPassword: 'Mot de Passe Oublié?',
  },
};

export function LoginModal({ language, onClose }: LoginModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Login functionality would be implemented with backend authentication.');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', border: '1px solid #EEEDE8' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:opacity-70 transition-opacity duration-200"
          style={{ color: '#3D3D3A' }}
        >
          <X size={24} />
        </button>

        <h2 className="font-serif mb-6" style={{ fontFamily: 'DM Serif Display', fontSize: '28px', color: '#0F2A45' }}>
          {t.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium" style={{ color: '#0F2A45', fontSize: '15px' }}>
              {t.email}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg focus:ring-2 outline-none transition-all duration-200"
              style={{ 
                border: '1px solid #EEEDE8',
                '--tw-ring-color': '#6ABF4B'
              } as any}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium" style={{ color: '#0F2A45', fontSize: '15px' }}>
              {t.password}
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg focus:ring-2 outline-none transition-all duration-200"
              style={{ 
                border: '1px solid #EEEDE8',
                '--tw-ring-color': '#6ABF4B'
              } as any}
            />
          </div>

          <div className="text-right">
            <button
              type="button"
              className="text-sm hover:underline transition-all duration-200"
              style={{ color: '#6ABF4B' }}
            >
              {t.forgotPassword}
            </button>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-lg transition-all duration-200 font-semibold"
              style={{
                border: '1.5px solid #0F2A45',
                color: '#0F2A45',
                backgroundColor: 'transparent',
              }}
            >
              {t.cancel}
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 rounded-lg text-white transition-all duration-200 font-semibold hover:shadow-lg"
              style={{ backgroundColor: '#6ABF4B' }}
            >
              {t.signIn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}