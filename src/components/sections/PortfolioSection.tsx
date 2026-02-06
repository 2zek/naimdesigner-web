'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ModelCard } from '../ui/ModelCard';
import { Button } from '../ui/Button';
import { useLocale } from 'next-intl';

export function PortfolioSection() {
  const t = useTranslations('portfolio');
  const locale = useLocale();

  // Mock data for models - replacing with placeholders for now
  const featuredModels = [
    {
      title: 'Futuristic Turbine Engine',
      category: 'Aviation / Industrial',
      price: '₺2,450',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Luxury SUV Concept',
      category: 'Automotive',
      price: '₺3,200',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Dental Implant Base',
      category: 'Medical / Dental',
      price: '₺1,150',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="text-primary">{t('featured')}</span> {t('title')}
            </h2>
            <p className="text-lg text-gray-400">
              {t('subtitle')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button href={`/${locale}/portfolio`} variant="outline">
              {t('allModels')}
            </Button>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredModels.map((model, index) => (
            <ModelCard
              key={index}
              {...model}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
