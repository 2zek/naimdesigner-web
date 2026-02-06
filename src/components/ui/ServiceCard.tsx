'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  index?: number;
}

export function ServiceCard({ title, description, icon, href = '#', index = 0 }: ServiceCardProps) {
  const t = useTranslations('common');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-card rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all border border-border"
    >
      {/* Icon */}
      <div className="w-16 h-16 mb-6 bg-muted rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-all">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
        {description}
      </p>

      {/* Link */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all text-sm uppercase tracking-wider"
      >
        {t('readMore')}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
