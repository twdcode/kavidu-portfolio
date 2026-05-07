import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import Services from '@/components/Services';
import Tools from '@/components/Tools';
import About from '@/components/About';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import portfolio from '@/data/portfolio.json';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white">
      <Header
        brand={portfolio.brand}
        navigation={portfolio.navigation}
        hireCta={portfolio.hero.primaryCta}
      />

      {/* Main Content with Top Padding for Fixed Header */}
      <div className="pt-0">
        <Hero
          hero={portfolio.hero}
          stats={portfolio.stats}
          brand={portfolio.brand}
        />
        <FeaturedWork work={portfolio.work} />
        <Services services={portfolio.services} />
        <Tools tools={portfolio.tools} />
        <About about={portfolio.about} />
        <ContactCTA contact={portfolio.contact} />
        <Footer footer={portfolio.footer} />
      </div>
    </main>
  );
}
