'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ImageSlider } from '@/components/ui/ImageSlider';
import { Button } from '@/components/ui/Button';

export default function ModelDetailPage() {
  const t = useTranslations('portfolio');
  const tc = useTranslations('common');

  // Mock detailed data - in a real app this would be fetched based on params.id
  const modelData = {
    title: 'Futuristic Turbine Engine',
    category: 'Aviation / Industrial',
    price: '₺2,450',
    description: 'A high-precision 3D model of a futuristic turbine engine, designed for aerospace applications. This model features intricate internals and optimized surface geometry for cinematic rendering and engineering visualization.',
    images: [
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop'
    ],
    specs: [
      { label: 'Vertices', value: '450,000' },
      { label: 'Polygons', value: '820,000' },
      { label: 'Textures', value: '4K PBR' },
      { label: 'Format', value: 'OBJ, FBX, BLEND' }
    ]
  };

  return (
    <div className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ImageSlider images={modelData.images} />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <span className="text-primary font-bold mb-4 block uppercase tracking-widest text-sm">{modelData.category}</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                {modelData.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                {modelData.description}
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 mb-8 shadow-sm">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/50">
                <span className="text-muted-foreground font-medium">{t('category')}</span>
                <span className="text-foreground font-bold text-3xl">{modelData.price}</span>
              </div>
              
              <div className="space-y-6 mb-8">
                <h3 className="text-foreground font-bold text-lg">{t('specifications')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {modelData.specs.map((spec, index) => (
                    <div key={index} className="flex flex-col p-4 bg-muted/50 rounded-xl border border-border/50 transition-colors hover:border-primary/30">
                      <span className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-bold">{spec.label}</span>
                      <span className="text-sm text-foreground font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button size="lg" className="w-full">
                {tc('buyNow')}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
