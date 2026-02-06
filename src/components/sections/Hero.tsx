'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/Button';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-background">
      {/* Background decorations - More depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] opacity-30 translate-y-1/4 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content side: Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 p-8 lg:p-12 rounded-[2.5rem] bg-white/40 dark:bg-white/[0.03] backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden group">
              {/* Card glow effect */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6"
              >
                <span className="font-serif block opacity-90">{t('title')}</span>
                <span className="text-primary italic text-3xl sm:text-4xl lg:text-5xl block mt-2">Design Studio</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
              >
                {t('subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button href="#contact" size="lg" className="px-8 shadow-xl shadow-primary/20">
                  {t('cta')}
                </Button>
                <Button href={`/portfolio`} variant="outline" size="lg" className="px-8 border-border text-foreground hover:bg-white/10">
                  Portfolio
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* 3D Scene: Tofaş Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* Floating Base */}
              <motion.div
                animate={{ 
                  y: [-20, 20, -20],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/tofas.jpg"
                    alt="3D Tofaş Design"
                    fill
                    className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_35px_35px_rgba(194,164,77,0.15)]"
                    priority
                  />
                </div>
              </motion.div>

              {/* Backglow for the model */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] scale-75 animate-pulse" />
              
              {/* Decorative tags */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-1/4 -right-4 bg-white/80 dark:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-bold tracking-widest shadow-lg z-20"
              >
                3D MODEL
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                className="absolute bottom-1/4 -left-4 bg-white/80 dark:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-bold tracking-widest shadow-lg z-20"
              >
                PBR TEXTURES
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
