import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroNightImage from "@/assets/hero-buenos-aires-night.jpg";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Argentina Residence",
        "url": "https://www.argentinaresidence.com",
        "logo": "https://www.argentinaresidence.com/og-image.jpg",
        "description": "Free informational resource about Argentina's golden visa and residency by investment program",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "url": "https://www.argentinaresidence.com",
        "name": "Argentina Residence",
        "description": "Live and invest in South America's most dynamic economy",
        "publisher": {
          "@type": "Organization",
          "name": "Argentina Residence"
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Argentina Residence by Investment | Permanent Residency Program"
        description="Obtain Argentina permanent residency through investment. Learn about requirements, process, timeline, and benefits of Argentina's residence program."
        canonical="/"
        schema={schema}
      />
      <Hero
        title="Argentina Residence"
        subtitle="Live and invest in South America's most dynamic economy"
        backgroundImage={heroNightImage}
      />
      
      <EditorialSection>
        <h1 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Argentina offers unparalleled investment opportunities for global citizens seeking South American residency.
        </h1>
        <p className="text-editorial text-text-secondary mb-8 tracking-wide">
          A free informational resource about Argentina's upcoming golden visa program.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button asChild variant="default" size="lg">
            <Link to="/about">About This Resource</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/faq">FAQ</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/resources">Resources</Link>
          </Button>
        </div>
      </EditorialSection>
      
      <EditorialSection className="bg-secondary/30">
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div>
            <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">Investment Program</h2>
            <p className="text-body text-text-secondary tracking-wide">
              Secure temporary residency through strategic investments in Argentina's most promising sectors, from premium real estate to government bonds.
            </p>
          </div>
          
          <div>
            <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">Strategic Location</h2>
            <p className="text-body text-text-secondary tracking-wide">
              Access South America's second-largest economy while enjoying visa-free travel to over 170 countries worldwide.
            </p>
          </div>
          
          <div>
            <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">Premium Lifestyle</h2>
            <p className="text-body text-text-secondary tracking-wide">
              Experience world-class culture, cuisine, and quality of life in one of South America's most sophisticated destinations.
            </p>
          </div>
        </div>
      </EditorialSection>
      
      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">Your pathway to Argentine residency</h2>
        <p className="text-body text-text-secondary mb-12 max-w-3xl mx-auto tracking-wide">
          Learn about investment requirements, application procedures, and everything you need to know about Argentina's residency by investment program. Explore our comprehensive guides and resources to help you make informed decisions.
        </p>
      </EditorialSection>

      <EditorialSection className="bg-secondary/30">
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">Official Resources & Further Reading</h2>
        <p className="text-body text-text-secondary mb-8 max-w-3xl mx-auto tracking-wide">
          For official government information and comprehensive investment migration news, we recommend the following authoritative sources:
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <a 
            href="https://www.argentina.gob.ar/interior/migraciones" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
          >
            Argentina National Migration Office (DNM)
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
          <a 
            href="https://www.imidaily.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
          >
            IMI Daily - Investment Migration News
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </EditorialSection>
    </Layout>
  );
};

export default Index;
