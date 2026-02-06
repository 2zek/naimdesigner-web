"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const t = useTranslations('navigation');
  const tc = useTranslations('common');
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/portfolio`, label: t('portfolio') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex flex-col">
      {/* Top Bar - Only shows background on scroll for Hero unity */}
      <div className={`w-full transition-all duration-500 hidden sm:block ${
        isScrolled 
          ? "bg-white/95 dark:bg-background/95 backdrop-blur-md border-b border-border/40 py-2.5" 
          : "bg-transparent border-b border-transparent py-4"
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
          {/* Social Icons Left */}
          <div className="flex items-center gap-7">
            <Link href="https://facebook.com" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-110" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-110" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0 3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </Link>
            <Link href="https://youtube.com" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-110" aria-label="Youtube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-border/40 pr-6">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Link href="https://wa.me/905555555555" target="_blank" className="flex items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20 px-3 py-1 rounded-full transition-all border border-green-500/30 font-extrabold shadow-sm shadow-green-500/20">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WHATSAPP
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Dynamic Sticky with placeholder to avoid jump */}
      <div className={isScrolled ? 'h-24 lg:h-32' : ''}>
        <motion.nav 
          layout
          className={`w-full transition-all duration-500 z-[49] ${
            isScrolled 
              ? 'fixed top-0 left-0 bg-white/95 dark:bg-background/95 backdrop-blur-2xl border-b border-border shadow-xl py-2 animate-in fade-in slide-in-from-top-2' 
              : 'relative bg-transparent py-6 lg:py-8'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20 gap-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href={`/${locale}`} className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl lg:text-4xl font-black text-foreground tracking-tighter"
                  >
                    <span className="text-primary px-3 py-1 bg-primary/10 rounded-2xl">Naim</span> DESIGNER
                  </motion.div>
                </Link>
              </div>

              {/* Desktop Navigation - Centered */}
              <div className="hidden lg:flex flex-1 justify-center items-center gap-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all font-bold text-xs uppercase tracking-[0.2em] relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-3 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
                  </Link>
                ))}
              </div>

              {/* Right side actions */}
              <div className="flex items-center gap-5 flex-shrink-0">
                <motion.a
                  href={`/${locale}/contact`}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(194 164 77 / 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:inline-flex items-center px-10 py-4 bg-primary hover:bg-primary-dark text-white font-black rounded-2xl transition-all shadow-[0_15px_30px_-10px_rgba(194,164,77,0.6)] uppercase text-xs tracking-widest"
                >
                  {tc('contactMe')}
                </motion.a>

                {/* Mobile controls */}
                <div className="lg:hidden flex items-center gap-4">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-3 rounded-2xl text-foreground bg-muted/60 border-2 border-border/50 shadow-sm overflow-hidden relative group"
                    aria-label="Toggle menu"
                  >
                    <div className="relative z-10">
                      {isMobileMenuOpen ? (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                      ) : (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" /></svg>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Navigation - Enhanced */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-3xl rounded-[2rem] mt-4 border-2 border-border/40 shadow-2xl z-[100] mx-4"
                >
                  <div className="py-8 px-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-5">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-3xl font-black text-foreground hover:text-primary transition-all tracking-tight text-center uppercase"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>

                    <div className="pt-10 flex flex-col gap-10 border-t-2 border-border/20">
                      {/* Socials & Tools */}
                      <div className="flex items-center justify-between px-2 bg-muted/30 p-4 rounded-3xl">
                        <div className="flex gap-4">
                           <Link href="https://facebook.com" target="_blank" className="p-3 bg-muted/60 rounded-xl text-muted-foreground hover:text-primary transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></Link>
                           <Link href="https://instagram.com" target="_blank" className="p-3 bg-muted/60 rounded-xl text-muted-foreground hover:text-primary transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0 3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></Link>
                           <Link href="https://youtube.com" target="_blank" className="p-3 bg-muted/60 rounded-xl text-muted-foreground hover:text-primary transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></Link>
                        </div>
                        <div className="flex gap-4 scale-110">
                           <LanguageSwitcher />
                           <ThemeToggle />
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <motion.a
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          href="https://wa.me/905555555555"
                          className="w-full text-center py-6 bg-primary text-white rounded-2xl text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/30"
                        >
                          {tc('contactMe')}
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
