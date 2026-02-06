'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ModelCard } from '@/components/ui/ModelCard';

export default function PortfolioPage() {
  const t = useTranslations('portfolio');

  // Expanded mock data for portfolio page
  const allModels = [
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
    },
    {
      title: 'Cyberpunk Drone',
      category: 'Consumer Tech',
      price: '₺1,800',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Industrial Robot Arm',
      category: 'Industrial',
      price: '₺4,500',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Modern Architecture House',
      category: 'Architecture',
      price: '₺5,000',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
            <span className="text-primary">{t('title')}</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allModels.map((model, index) => (
            <ModelCard
              key={index}
              {...model}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
