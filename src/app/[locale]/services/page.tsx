import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Services as ServicesSection } from '@/components/sections/Services';
import { CTA } from '@/components/sections/CTA';

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  
  return {
    title: `${t('title')} | Naim Designer`,
    description: t('subtitle'),
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicesContent />;
}

function ServicesContent() {
  const t = useTranslations('services');

  return (
    <>
      {/* Page header */}
      <section className="pt-20 lg:pt-32 pb-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <ServicesSection />
      
      {/* CTA */}
      <CTA />
    </>
  );
}
