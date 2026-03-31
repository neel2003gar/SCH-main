import { useState } from 'react';
import { Outlet } from 'react-router';
import { GlobalNavigation } from './GlobalNavigation';
import { GlobalFooter } from './GlobalFooter';
import { AccessibilityWidget } from './AccessibilityWidget';
import { LoginModal } from './modals/LoginModal';

export type Language = 'en' | 'fr';

export function RootLayout() {
  const [language, setLanguage] = useState<Language>('en');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <GlobalNavigation 
        language={language}
        setLanguage={setLanguage}
        onLoginClick={() => setShowLoginModal(true)}
        onAccessibilityClick={() => setShowAccessibilityPanel(true)}
      />
      
      {/* Pass language through context to child routes */}
      <Outlet context={{ language }} />
      
      <GlobalFooter language={language} />
      
      <AccessibilityWidget
        language={language}
        setLanguage={setLanguage}
        isOpen={showAccessibilityPanel}
        setIsOpen={setShowAccessibilityPanel}
      />

      {showLoginModal && (
        <LoginModal
          language={language}
          onClose={() => setShowLoginModal(false)}
        />
      )}
    </div>
  );
}
