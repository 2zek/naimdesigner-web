'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '../ui/Button';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaHref: string;
}

export function BannerSlider() {
  const t = useTranslations('hero');
  const [current, setCurrent] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: t('slides.1.title'),
      subtitle: t('slides.1.subtitle'),
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1920&auto=format&fit=crop',
      ctaText: t('cta'),
      ctaHref: '#contact'
    },
    {
      id: 2,
      title: t('slides.2.title'),
      subtitle: t('slides.2.subtitle'),
      image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1920&auto=format&fit=crop',
      ctaText: t('cta'),
      ctaHref: '#contact'
    },
    {
      id: 3,
      title: t('slides.3.title'),
      subtitle: t('slides.3.subtitle'),
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1920&auto=format&fit=crop',
      ctaText: t('cta'),
      ctaHref: '#contact'
    }
  ];

  const next = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
              >
                {slides[current].subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button href={slides[current].ctaHref} size="lg">
                  {slides[current].ctaText}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? 'bg-primary w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
