import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
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
          Argentina offers unparalleled investment opportunities for sophisticated global citizens seeking South American residency.
        </h2>
        <p className="text-editorial text-text-secondary mb-12 tracking-wide">
          Our expertise is synonymous with strategic insight and exceptional value.
        </p>
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
          With expert knowledge of investment requirements and a customized approach, we guide discerning clients through every stage of the residency process. We are collaborative and meticulous, bringing these qualities to every engagement, from initial consultation to residency approval.
        </p>
      </EditorialSection>
    </Layout>
  );
};

export default Index;
