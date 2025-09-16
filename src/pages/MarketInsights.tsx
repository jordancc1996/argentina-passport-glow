import Layout from "../components/Layout";
import Hero from "../components/Hero";
import EditorialSection from "../components/EditorialSection";
import heroImage from "../assets/buenos-aires-cityscape.jpg";

const MarketInsights = () => {
  return (
    <Layout>
      <Hero
        backgroundImage={heroImage}
        title="Market Insights"
        subtitle="Understanding Argentina's Investment Landscape"
        description="Comprehensive analysis of economic trends, investment opportunities, and market dynamics shaping Argentina's future."
      />
      
      <EditorialSection>
        <h2 className="font-serif text-2xl-editorial mb-8 tracking-wide">Economic Overview</h2>
        <p className="text-editorial text-text-secondary mb-8 tracking-wide">
          Argentina's economy presents unique opportunities for savvy investors. With a diverse industrial base, 
          abundant natural resources, and a highly educated workforce, the country offers compelling investment 
          prospects across multiple sectors.
        </p>
        <p className="text-editorial text-text-secondary mb-8 tracking-wide">
          Recent economic reforms have created a more favorable environment for foreign investment, 
          with streamlined regulations and enhanced legal protections for international investors.
        </p>
      </EditorialSection>

      <EditorialSection className="bg-secondary/30">
        <h2 className="font-serif text-2xl-editorial mb-8 tracking-wide">Key Investment Sectors</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-xl-editorial mb-4 tracking-wide">Agriculture & Agribusiness</h3>
            <p className="text-editorial text-text-secondary mb-6 tracking-wide">
              Argentina is one of the world's leading agricultural producers, offering opportunities in 
              crop production, livestock, and food processing technologies.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl-editorial mb-4 tracking-wide">Technology & Innovation</h3>
            <p className="text-editorial text-text-secondary mb-6 tracking-wide">
              Buenos Aires has emerged as a major tech hub in Latin America, with a thriving startup 
              ecosystem and world-class software development talent.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl-editorial mb-4 tracking-wide">Real Estate</h3>
            <p className="text-editorial text-text-secondary mb-6 tracking-wide">
              Premium properties in Buenos Aires and coastal regions offer excellent value compared 
              to other major international cities, with strong rental yield potential.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl-editorial mb-4 tracking-wide">Energy & Mining</h3>
            <p className="text-editorial text-text-secondary mb-6 tracking-wide">
              With vast shale oil reserves and renewable energy potential, Argentina presents 
              significant opportunities in the energy sector.
            </p>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection>
        <h2 className="font-serif text-2xl-editorial mb-8 tracking-wide">Market Trends</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-xl-editorial mb-4 tracking-wide">Currency Dynamics</h3>
            <p className="text-editorial text-text-secondary mb-6 tracking-wide">
              Understanding peso dynamics and hedging strategies is crucial for foreign investors. 
              Our team provides comprehensive guidance on currency risk management and optimal 
              investment timing.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl-editorial mb-4 tracking-wide">Regulatory Environment</h3>
            <p className="text-editorial text-text-secondary mb-6 tracking-wide">
              Recent legislative changes have simplified foreign investment procedures and enhanced 
              legal protections. We stay current with all regulatory developments to ensure 
              compliant investment strategies.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl-editorial mb-4 tracking-wide">Growth Projections</h3>
            <p className="text-editorial text-text-secondary mb-6 tracking-wide">
              Economic forecasts indicate strong growth potential across key sectors, supported by 
              government initiatives to attract foreign investment and modernize infrastructure.
            </p>
          </div>
        </div>
      </EditorialSection>
    </Layout>
  );
};

export default MarketInsights;