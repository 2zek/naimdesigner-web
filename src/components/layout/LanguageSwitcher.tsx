import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'tr', label: 'TR', flag: '🇹🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
  ];

  const currentLang = languages.find(l => l.code === locale) || languages[0];

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    if (segments[1] === 'tr' || segments[1] === 'en') {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join('/') || '/';
    router.push(newPath);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center p-1 bg-muted/40 backdrop-blur-md border border-border/40 rounded-full shadow-inner">
      {languages.map((lang) => {
        const isActive = locale === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => switchLocale(lang.code)}
            className={`relative px-3.5 py-1.5 text-[11px] font-black transition-all duration-300 uppercase tracking-tight ${
              isActive ? 'text-white' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeLocale"
                className="absolute inset-0 bg-primary rounded-full z-0 shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
}
