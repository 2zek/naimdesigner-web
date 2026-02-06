import { setRequestLocale } from 'next-intl/server';
import { BannerSlider } from '@/components/sections/BannerSlider';
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
      <BannerSlider />
      <Services />
      <PortfolioSection />
      <CTA />
    </>
  );
}
