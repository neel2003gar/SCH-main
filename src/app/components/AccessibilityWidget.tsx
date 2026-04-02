import { useState, useEffect } from 'react';
import {
  X,
  Globe,
  ChevronDown,
  Info,
  Users,
  Eye,
  Palette,
  Brain,
  Zap,
  RotateCcw,
  Search,
  MousePointer2,
  Monitor,
  Link as LinkIcon,
  Type,
  Pause,
  ImageOff,
  BookOpen,
  Droplet,
  AlignLeft,
  FileText,
  Layers,
} from 'lucide-react';
const accessibilityLogo = "https://via.placeholder.com/50x50?text=Acc";

export type Language = 'en' | 'fr';

interface AccessibilityWidgetProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface AccessibilitySettings {
  screenReader: boolean;
  contrastPlus: boolean;
  smartContrast: boolean;
  highlightLinks: boolean;
  biggerText: number;
  textSpacing: boolean;
  pauseAnimations: boolean;
  hideImages: boolean;
  dyslexiaFriendly: boolean;
  cursor: boolean;
  tooltips: boolean;
  pageStructure: boolean;
  lineHeight: boolean;
  textAlign: boolean;
  dictionary: boolean;
  saturation: number;
}

const defaultSettings: AccessibilitySettings = {
  screenReader: false,
  contrastPlus: false,
  smartContrast: false,
  highlightLinks: false,
  biggerText: 0,
  textSpacing: false,
  pauseAnimations: false,
  hideImages: false,
  dyslexiaFriendly: false,
  cursor: false,
  tooltips: false,
  pageStructure: false,
  lineHeight: false,
  textAlign: false,
  dictionary: false,
  saturation: 0,
};

const profiles = [
  { id: 'motor', icon: '🦽', label: 'Motor Impaired' },
  { id: 'blind', icon: '👁', label: 'Blind' },
  { id: 'colorBlind', icon: '🎨', label: 'Color Blind' },
  { id: 'dyslexia', icon: 'Df', label: 'Dyslexia' },
  { id: 'lowVision', icon: '👁', label: 'Low Vision' },
  { id: 'cognitive', icon: '🧠', label: 'Cognitive & Learning' },
  { id: 'seizure', icon: '⚡', label: 'Seizure & Epileptic' },
  { id: 'adhd', icon: '🔄', label: 'ADHD' },
];

export function AccessibilityWidget({ language, setLanguage, isOpen, setIsOpen }: AccessibilityWidgetProps) {
  const [position, setPosition] = useState<'left' | 'right' | 'hide'>('left');
  const [oversizedWidget, setOversizedWidget] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showProfiles, setShowProfiles] = useState(true);
  const [showMoveHide, setShowMoveHide] = useState(false);
  const [activeProfile, setActiveProfile] = useState<string | null>(null);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  // Handle keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
        setIsOpen(isOpen ? false : true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen]);

  // Apply accessibility settings to the page
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // Build filter string
    let filters: string[] = [];

    // Contrast+
    if (settings.contrastPlus) {
      filters.push('contrast(150%)');
    }

    // Saturation
    if (settings.saturation === 1) {
      filters.push('saturate(0%)');
    } else if (settings.saturation === 2) {
      filters.push('saturate(200%)');
    }

    // Apply combined filters
    body.style.filter = filters.length > 0 ? filters.join(' ') : '';

    // Bigger Text
    if (settings.biggerText > 0) {
      html.style.fontSize = `${100 + settings.biggerText * 20}%`;
    } else {
      html.style.fontSize = '';
    }

    // Text Spacing
    if (settings.textSpacing) {
      body.style.letterSpacing = '0.12em';
      body.style.wordSpacing = '0.16em';
    } else {
      body.style.letterSpacing = '';
      body.style.wordSpacing = '';
    }

    // Pause Animations
    const pauseStyle = document.getElementById('pause-animations');
    if (settings.pauseAnimations) {
      if (!pauseStyle) {
        const style = document.createElement('style');
        style.id = 'pause-animations';
        style.textContent = '* { animation-play-state: paused !important; transition-duration: 0s !important; }';
        document.head.appendChild(style);
      }
    } else {
      if (pauseStyle) pauseStyle.remove();
    }

    // Hide Images
    const hideImagesStyle = document.getElementById('hide-images');
    if (settings.hideImages) {
      if (!hideImagesStyle) {
        const style = document.createElement('style');
        style.id = 'hide-images';
        style.textContent = 'img { opacity: 0.1 !important; }';
        document.head.appendChild(style);
      }
    } else {
      if (hideImagesStyle) hideImagesStyle.remove();
    }

    // Dyslexia Friendly Font
    if (settings.dyslexiaFriendly) {
      body.style.fontFamily = 'Comic Sans MS, Arial, sans-serif';
    } else {
      body.style.fontFamily = '';
    }

    // Highlight Links
    const highlightStyle = document.getElementById('highlight-links');
    if (settings.highlightLinks) {
      if (!highlightStyle) {
        const style = document.createElement('style');
        style.id = 'highlight-links';
        style.textContent = 'a { background-color: #ffeb3b !important; padding: 2px 4px !important; text-decoration: underline !important; font-weight: 600 !important; }';
        document.head.appendChild(style);
      }
    } else {
      if (highlightStyle) highlightStyle.remove();
    }

    // Line Height
    if (settings.lineHeight) {
      body.style.lineHeight = '2';
    } else {
      body.style.lineHeight = '';
    }

    // Text Align
    if (settings.textAlign) {
      body.style.textAlign = 'left';
    } else {
      body.style.textAlign = '';
    }

    // Cursor
    if (settings.cursor) {
      body.style.cursor = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'48\' height=\'48\' viewBox=\'0 0 48 48\'%3E%3Cpath d=\'M4 4 L4 36 L16 28 L22 42 L28 40 L22 26 L36 26 Z\' fill=\'black\' stroke=\'white\' stroke-width=\'2\'/%3E%3C/svg%3E") 4 4, auto';
    } else {
      body.style.cursor = '';
    }

    // Smart Contrast (invert colors)
    const smartContrastStyle = document.getElementById('smart-contrast');
    if (settings.smartContrast) {
      if (!smartContrastStyle) {
        const style = document.createElement('style');
        style.id = 'smart-contrast';
        style.textContent = 'html { filter: invert(1) hue-rotate(180deg) !important; } img, video { filter: invert(1) hue-rotate(180deg) !important; }';
        document.head.appendChild(style);
      }
    } else {
      if (smartContrastStyle) smartContrastStyle.remove();
    }

    // Screen Reader Mode
    const screenReaderStyle = document.getElementById('screen-reader-mode');
    if (settings.screenReader) {
      if (!screenReaderStyle) {
        const style = document.createElement('style');
        style.id = 'screen-reader-mode';
        style.textContent = `
          * { outline: none !important; }
          *:focus { outline: 3px solid #0066CC !important; outline-offset: 2px !important; }
          a:focus, button:focus, input:focus, select:focus, textarea:focus { 
            outline: 3px solid #0066CC !important; 
            outline-offset: 2px !important;
            box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.2) !important;
          }
        `;
        document.head.appendChild(style);
      }
      // Add aria-live region for announcements
      if (!document.getElementById('sr-announcer')) {
        const announcer = document.createElement('div');
        announcer.id = 'sr-announcer';
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
        document.body.appendChild(announcer);
      }
    } else {
      if (screenReaderStyle) screenReaderStyle.remove();
      const announcer = document.getElementById('sr-announcer');
      if (announcer) announcer.remove();
    }

    // Tooltips
    if (settings.tooltips) {
      // Add title attributes to elements that don't have them
      const elements = document.querySelectorAll('button, a, input, select, textarea');
      elements.forEach((el) => {
        if (!el.getAttribute('title') && !el.getAttribute('aria-label')) {
          const text = (el as HTMLElement).innerText || (el as HTMLElement).textContent || '';
          if (text.trim()) {
            el.setAttribute('data-temp-title', text.trim().substring(0, 50));
            el.setAttribute('title', text.trim().substring(0, 50));
          }
        }
      });
    } else {
      // Remove temporary titles
      const elements = document.querySelectorAll('[data-temp-title]');
      elements.forEach((el) => {
        el.removeAttribute('title');
        el.removeAttribute('data-temp-title');
      });
    }

    // Page Structure
    const pageStructureStyle = document.getElementById('page-structure');
    if (settings.pageStructure) {
      if (!pageStructureStyle) {
        const style = document.createElement('style');
        style.id = 'page-structure';
        style.textContent = `
          h1, h2, h3, h4, h5, h6 { 
            outline: 2px solid #FF6B6B !important; 
            outline-offset: 2px !important;
            background-color: rgba(255, 107, 107, 0.1) !important;
          }
          nav, header, footer, main, aside, section { 
            outline: 2px dashed #4ECDC4 !important; 
            outline-offset: 2px !important;
            position: relative !important;
          }
          nav::before, header::before, footer::before, main::before, aside::before, section::before {
            content: attr(data-landmark) !important;
            position: absolute !important;
            top: -20px !important;
            left: 0 !important;
            background: #4ECDC4 !important;
            color: white !important;
            padding: 2px 6px !important;
            font-size: 10px !important;
            font-weight: bold !important;
            z-index: 10000 !important;
          }
        `;
        document.head.appendChild(style);
      }
      // Label landmarks
      document.querySelectorAll('nav').forEach(el => el.setAttribute('data-landmark', 'NAV'));
      document.querySelectorAll('header').forEach(el => el.setAttribute('data-landmark', 'HEADER'));
      document.querySelectorAll('footer').forEach(el => el.setAttribute('data-landmark', 'FOOTER'));
      document.querySelectorAll('main').forEach(el => el.setAttribute('data-landmark', 'MAIN'));
      document.querySelectorAll('aside').forEach(el => el.setAttribute('data-landmark', 'ASIDE'));
      document.querySelectorAll('section').forEach(el => el.setAttribute('data-landmark', 'SECTION'));
    } else {
      if (pageStructureStyle) pageStructureStyle.remove();
    }

    // Dictionary (double-click to define)
    const handleDoubleClick = (e: MouseEvent) => {
      const selection = window.getSelection();
      const text = selection?.toString().trim();
      if (text && text.split(' ').length === 1) {
        const announcer = document.getElementById('sr-announcer');
        if (announcer) {
          announcer.textContent = `Looking up definition for: ${text}`;
        }
        // Simple definition lookup
        alert(`Definition lookup for: "${text}"\n\nThis would normally open a dictionary popup or fetch from an API.`);
      }
    };

    if (settings.dictionary) {
      document.addEventListener('dblclick', handleDoubleClick);
    }

    return () => {
      if (settings.dictionary) {
        document.removeEventListener('dblclick', handleDoubleClick);
      }
    };
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings((prev) => {
      if (key === 'biggerText') {
        const current = prev.biggerText;
        return { ...prev, biggerText: current >= 3 ? 0 : current + 1 };
      }
      if (key === 'saturation') {
        const current = prev.saturation;
        return { ...prev, saturation: current >= 2 ? 0 : current + 1 };
      }
      return { ...prev, [key]: !prev[key] };
    });
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    setActiveProfile(null);
  };

  const activateProfile = (profileId: string) => {
    setActiveProfile(profileId);
    let newSettings = { ...defaultSettings };

    switch (profileId) {
      case 'motor':
        newSettings = { ...newSettings, cursor: true, biggerText: 1, pauseAnimations: true, highlightLinks: true };
        break;
      case 'blind':
        newSettings = { ...newSettings, screenReader: true, biggerText: 2, highlightLinks: true };
        break;
      case 'colorBlind':
        newSettings = { ...newSettings, smartContrast: true, highlightLinks: true };
        break;
      case 'dyslexia':
        newSettings = { ...newSettings, dyslexiaFriendly: true, textSpacing: true, lineHeight: true };
        break;
      case 'lowVision':
        newSettings = { ...newSettings, biggerText: 2, contrastPlus: true, cursor: true };
        break;
      case 'cognitive':
        newSettings = { ...newSettings, pauseAnimations: true, textSpacing: true, lineHeight: true, textAlign: true };
        break;
      case 'seizure':
        newSettings = { ...newSettings, pauseAnimations: true, saturation: 1 };
        break;
      case 'adhd':
        newSettings = { ...newSettings, pauseAnimations: true, textSpacing: true, hideImages: true };
        break;
    }

    setSettings(newSettings);
  };

  const tools = [
    { id: 'screenReader', icon: Monitor, label: 'Screen Reader' },
    { id: 'contrastPlus', icon: Eye, label: 'Contrast +' },
    { id: 'smartContrast', icon: Palette, label: 'Smart Contrast' },
    { id: 'highlightLinks', icon: LinkIcon, label: 'Highlight Links' },
    { id: 'biggerText', icon: Type, label: 'Bigger Text' },
    { id: 'textSpacing', icon: AlignLeft, label: 'Text Spacing' },
    { id: 'pauseAnimations', icon: Pause, label: 'Pause Animations' },
    { id: 'hideImages', icon: ImageOff, label: 'Hide Images' },
    { id: 'dyslexiaFriendly', icon: BookOpen, label: 'Dyslexia Friendly' },
    { id: 'cursor', icon: MousePointer2, label: 'Cursor' },
    { id: 'tooltips', icon: FileText, label: 'Tooltips' },
    { id: 'pageStructure', icon: Layers, label: 'Page Structure' },
    { id: 'lineHeight', icon: AlignLeft, label: 'Line Height' },
    { id: 'textAlign', icon: AlignLeft, label: 'Text Align' },
    { id: 'dictionary', icon: BookOpen, label: 'Dictionary' },
    { id: 'saturation', icon: Droplet, label: 'Saturation' },
  ];

  if (position === 'hide') {
    return null;
  }

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed left-6 bottom-6 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 group flex items-center justify-center`}
        style={{
          width: '50px',
          height: '50px',
          zIndex: 99999,
          backgroundColor: '#0F2A45',
        }}
        title="Accessibility Menu (CTRL+U)"
      >
        <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img 
          src={accessibilityLogo} 
          alt="Accessibility" 
          className="relative z-10 w-7 h-7 object-contain brightness-0 invert"
        />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
            onClick={() => setIsOpen(false)}
            style={{
              animation: 'fadeIn 300ms ease-out',
            }}
          />

          {/* Panel */}
          <div
            className="fixed left-0 top-0 bottom-0 w-full sm:w-[380px] md:w-[360px] bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30 shadow-2xl z-[9999] overflow-y-auto"
            style={{
              animation: 'slideInLeft 400ms cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <style>
              {`
                @keyframes slideInLeft {
                  from {
                    transform: translateX(-100%);
                    opacity: 0;
                  }
                  to {
                    transform: translateX(0);
                    opacity: 1;
                  }
                }
                
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
              `}
            </style>

            {/* Header */}
            <div
              className="sticky top-0 text-white p-5 flex items-center justify-between z-10 backdrop-blur-md border-b border-white/20"
              style={{
                background: 'linear-gradient(135deg, #1A6B9A 0%, #2BAE8E 100%)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm p-2">
                  <img 
                    src={accessibilityLogo} 
                    alt="Accessibility" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold text-base">Accessibility</div>
                  <div className="text-xs text-white/80"></div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-all duration-200 hover:scale-110"
              >
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 space-y-5">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="w-full flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Globe size={18} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {language === 'en' ? 'English (USA)' : 'Français'}
                    </span>
                  </div>
                  <ChevronDown size={18} className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                </button>

                {showLanguageDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-xl shadow-2xl z-20 max-h-64 overflow-hidden">
                    <div className="p-3 border-b border-gray-100">
                      <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search language"
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A6B9A]/30 focus:border-[#1A6B9A] outline-none bg-gray-50/50 transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div className="p-2 overflow-y-auto max-h-48">
                      {[
                        { code: 'en', label: 'English (USA)', flag: '🇺🇸' },
                        { code: 'fr', label: 'Français', flag: '🇫🇷' },
                        { code: 'es', label: 'Español', flag: '🇪🇸' },
                        { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
                        { code: 'ar', label: 'العربية', flag: '🇸🇦' },
                      ].map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            if (lang.code === 'en' || lang.code === 'fr') {
                              setLanguage(lang.code as Language);
                            }
                            setShowLanguageDropdown(false);
                          }}
                          className={`w-full flex items-center gap-3 p-3 text-sm rounded-lg transition-all duration-200 ${
                            language === lang.code 
                              ? 'bg-gradient-to-r from-blue-50 to-teal-50 text-[#1A6B9A] font-medium' 
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          <span className="text-xl">{lang.flag}</span>
                          <span className="flex-1 text-left">{lang.label}</span>
                          {language === lang.code && (
                            <div className="w-5 h-5 bg-[#1A6B9A] rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Accessibility Profiles */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                <button
                  onClick={() => setShowProfiles(!showProfiles)}
                  className="w-full flex items-center justify-between mb-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-gray-800">Accessibility Profiles</span>
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Info size={12} className="text-[#1A6B9A]" />
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 text-gray-400 ${showProfiles ? 'rotate-180' : ''}`}
                  />
                </button>

                {showProfiles && (
                  <div className="space-y-2 mt-3">
                    {profiles.map((profile) => (
                      <button
                        key={profile.id}
                        onClick={() => activateProfile(profile.id)}
                        className={`w-full flex items-center gap-3 p-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                          activeProfile === profile.id
                            ? 'bg-gradient-to-r from-[#1A6B9A] to-[#2BAE8E] text-white shadow-lg scale-[1.02]'
                            : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md text-gray-700'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                          activeProfile === profile.id 
                            ? 'bg-white/20' 
                            : 'bg-gradient-to-br from-blue-50 to-teal-50'
                        }`}>
                          {profile.icon}
                        </div>
                        <span className="text-sm font-medium">{profile.label}</span>
                        {activeProfile === profile.id && (
                          <div className="ml-auto w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                            <span className="text-xs">✓</span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Oversized Widget Toggle */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-800">XL Oversized Widget</span>
                  </div>
                  <button
                    onClick={() => setOversizedWidget(!oversizedWidget)}
                    className={`relative w-14 h-7 rounded-full transition-all duration-300 shadow-inner ${
                      oversizedWidget 
                        ? 'bg-gradient-to-r from-[#1A6B9A] to-[#2BAE8E]' 
                        : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md ${
                        oversizedWidget ? 'translate-x-7' : 'translate-x-0.5'
                      }`}
                    >
                      {oversizedWidget && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#1A6B9A] rounded-full" />
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              </div>

              {/* Accessibility Tools Grid */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                <div className="mb-3">
                  <h3 className="font-bold text-sm text-gray-800">Accessibility Tools</h3>
                  <p className="text-xs text-gray-500 mt-1">Customize your browsing experience</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool) => {
                    const Icon = tool.icon;
                    const settingValue = settings[tool.id as keyof AccessibilitySettings];
                    const isActive = typeof settingValue === 'boolean' ? settingValue : settingValue > 0;
                    const isCyclic = tool.id === 'biggerText' || tool.id === 'saturation';
                    
                    return (
                      <button
                        key={tool.id}
                        onClick={() => toggleSetting(tool.id as keyof AccessibilitySettings)}
                        className={`relative p-4 rounded-xl flex flex-col items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-105 ${
                          isActive
                            ? 'bg-gradient-to-br from-[#1A6B9A] to-[#2BAE8E] text-white shadow-lg'
                            : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md text-gray-700'
                        }`}
                      >
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          isActive ? 'bg-white/20' : 'bg-gradient-to-br from-blue-50 to-teal-50'
                        }`}>
                          <Icon 
                            size={22} 
                            className={isActive ? 'text-white' : 'text-[#1A6B9A]'} 
                            strokeWidth={2} 
                          />
                        </div>
                        <span className={`text-[11px] text-center font-medium leading-tight ${
                          isActive ? 'text-white' : 'text-gray-700'
                        }`}>
                          {tool.label}
                        </span>
                        {isActive && (
                          <div className="absolute top-2 right-2 w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">
                            {isCyclic ? (
                              <span className="text-white text-xs font-bold">{settingValue}</span>
                            ) : (
                              <span className="text-white text-xs">✓</span>
                            )}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full text-white py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #1A6B9A 0%, #2BAE8E 100%)',
                }}
              >
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <RotateCcw size={18} strokeWidth={2.5} />
                </div>
                <span>Reset All Settings</span>
              </button>

              {/* Move/Hide Widget */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                <button
                  onClick={() => setShowMoveHide(!showMoveHide)}
                  className="w-full flex items-center justify-between"
                >
                  <span className="text-sm font-bold text-gray-800">Move/Hide Widget</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 text-gray-400 ${showMoveHide ? 'rotate-180' : ''}`}
                  />
                </button>

                {showMoveHide && (
                  <div className="space-y-2 mt-3">
                    {[
                      { value: 'left', label: 'Left', icon: '←' },
                      { value: 'right', label: 'Right', icon: '→' },
                      { value: 'hide', label: 'Hide', icon: '✕' },
                    ].map((option) => (
                      <label 
                        key={option.value} 
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                          position === option.value 
                            ? 'bg-gradient-to-r from-blue-50 to-teal-50 border border-[#1A6B9A]' 
                            : 'bg-white border border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="position"
                          value={option.value}
                          checked={position === option.value}
                          onChange={(e) => setPosition(e.target.value as 'left' | 'right' | 'hide')}
                          className="w-4 h-4 text-[#1A6B9A] focus:ring-[#1A6B9A] focus:ring-2"
                        />
                        <span className="text-lg">{option.icon}</span>
                        <span className={`text-sm font-medium ${
                          position === option.value ? 'text-[#1A6B9A]' : 'text-gray-700'
                        }`}>
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 pt-4 pb-2">
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <a href="#" className="hover:text-[#1A6B9A] transition-colors duration-200">
                    Manage
                  </a>
                  <span>•</span>
                  <span className="font-semibold">Santé Accessibility</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}