'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from './Button';

interface ModelCardProps {
  title: string;
  category: string;
  price?: string;
  image: string;
  index?: number;
}

export function ModelCard({ title, category, price, image, index = 0 }: ModelCardProps) {
  const t = useTranslations('common');
  const locale = useLocale();

  return (
    <Link href={`/${locale}/portfolio/${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all cursor-pointer"
      >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <p className="text-white text-sm font-medium">{category}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {price && (
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm">{t('price')}</span>
            <span className="text-primary font-bold text-lg">{price}</span>
          </div>
        )}

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 text-xs">
            {t('viewDetails')}
          </Button>
          <Button variant="primary" size="sm" className="flex-1 text-xs px-2">
            {t('buyNow')}
          </Button>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
