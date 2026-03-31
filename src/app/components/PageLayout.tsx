import { useState, ReactNode, cloneElement, isValidElement } from 'react';
import { GlobalNavigation } from './GlobalNavigation';
import { GlobalFooter } from './GlobalFooter';
import { AccessibilityWidget } from './AccessibilityWidget';
import { LoginModal } from './modals/LoginModal';

export type Language = 'en' | 'fr';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [language, setLanguage] = useState<Language>('en');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false);

  // Clone children and pass language prop if it's a valid React element
  const childrenWithProps = isValidElement(children)
    ? cloneElement(children, { language } as any)
    : children;

  return (
    <div className="min-h-screen bg-white">
      <GlobalNavigation 
        language={language}
        setLanguage={setLanguage}
        onLoginClick={() => setShowLoginModal(true)}
        onAccessibilityClick={() => setShowAccessibilityPanel(true)}
      />
      
      {childrenWithProps}
      
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