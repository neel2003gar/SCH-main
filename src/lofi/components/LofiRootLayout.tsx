import { useState } from 'react';
import { Outlet } from 'react-router';
import { LofiGlobalNavigation } from './LofiGlobalNavigation';
import { LofiGlobalFooter } from './LofiGlobalFooter';

export type Language = 'en' | 'fr';

export function LofiRootLayout() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LofiGlobalNavigation language={language} setLanguage={setLanguage} />
      <main className="flex-1">
        <Outlet context={{ language }} />
      </main>
      <LofiGlobalFooter language={language} />
    </div>
  );
}
