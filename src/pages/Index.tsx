import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroNightImage from "@/assets/hero-buenos-aires-night.jpg";

const Index = () => {
  return (
    <Layout>
      <Hero
        title="Argentina Residence"
        subtitle="Live and invest in South America's most dynamic economy"
        backgroundImage={heroNightImage}
      />
      
      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Argentina offers unparalleled investment opportunities for global citizens seeking South American residency.
        </h2>
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
            <h3 className="font-serif text-lg-editorial mb-4 tracking-wide">Investment Program</h3>
            <p className="text-body text-text-secondary tracking-wide">
              Secure temporary residency through strategic investments in Argentina's most promising sectors, from premium real estate to government bonds.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg-editorial mb-4 tracking-wide">Strategic Location</h3>
            <p className="text-body text-text-secondary tracking-wide">
              Access South America's second-largest economy while enjoying visa-free travel to over 170 countries worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg-editorial mb-4 tracking-wide">Premium Lifestyle</h3>
            <p className="text-body text-text-secondary tracking-wide">
              Experience world-class culture, cuisine, and quality of life in one of South America's most sophisticated destinations.
            </p>
          </div>
        </div>
      </EditorialSection>
      
      <EditorialSection>
        <h3 className="font-serif text-xl-editorial mb-8 tracking-wide">Your pathway to Argentine residency</h3>
        <p className="text-body text-text-secondary mb-12 max-w-3xl mx-auto tracking-wide">
          Learn about investment requirements, application procedures, and everything you need to know about Argentina's residency by investment program. Explore our comprehensive guides and resources to help you make informed decisions.
        </p>
      </EditorialSection>
    </Layout>
  );
};

export default Index;
