import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { CTA } from '@/components/sections/CTA';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Services />
      <PortfolioSection />
      <CTA />
    </>
  );
}
