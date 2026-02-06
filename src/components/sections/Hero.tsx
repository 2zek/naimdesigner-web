'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/Button';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center pt-48 lg:pt-56 overflow-hidden bg-background">
      {/* Background decorations - Technical Blueprint Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(#80808025_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] opacity-30 translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content side: Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-20"
          >
            {/* Subtle glow behind text for legibility */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[0.95] tracking-tighter mb-8"
            >
              <span className="font-serif block opacity-100 mb-2">{t('title')}</span>
              <span className="text-primary italic text-2xl lg:text-3xl block mt-6 font-medium tracking-normal">
                Industrial Atelier & Design
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-semibold"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 mt-12"
            >
              <Button href="#contact" size="lg" className="px-12 py-8 text-xl font-bold shadow-2xl shadow-primary/40 hover:scale-105 transition-transform">
                {t('cta')}
              </Button>
              <Button href={`/portfolio`} variant="outline" size="lg" className="px-12 py-8 text-xl font-bold border-2 border-foreground/10 text-foreground hover:bg-foreground/5 transition-all">
                Portfolio
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Scene: Tofaş Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-3xl mx-auto">
              {/* Floating Base */}
              <motion.div
                animate={{ 
                  y: [-20, 20, -20],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/hero-model.svg"
                      alt="3D Technical Blueprint"
                      fill
                      className="object-contain text-primary/40 drop-shadow-[0_20px_50px_rgba(194,164,77,0.1)] scale-110"
                      priority
                    />
                  </div>
              </motion.div>

              {/* Backglow for the model */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] scale-75 animate-pulse" />
              
              {/* Decorative technical tags */}
              <motion.div 
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-24 -right-20 bg-white/90 dark:bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-primary/30 shadow-lg z-20 font-mono text-[10px]"
              >
                <div className="text-primary font-bold mb-1">DATA_STREAM: ACTIVE</div>
                <div className="text-foreground opacity-70">COORD_X: 42.82</div>
                <div className="text-foreground opacity-70">COORD_Y: -12.42</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                className="absolute bottom-20 -left-20 bg-white/90 dark:bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-primary/30 shadow-lg z-20 font-mono text-[10px]"
              >
                <div className="text-primary font-bold mb-1">PROTOTYPE: V2.1</div>
                <div className="text-foreground opacity-70">MESH_QUALITY: ULTRA</div>
                <div className="text-foreground opacity-70">S_ENGINE: PBR_READY</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
