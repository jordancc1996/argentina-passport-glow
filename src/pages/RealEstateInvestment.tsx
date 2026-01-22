import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, TrendingUp, MapPin, CheckCircle, ArrowRight, Landmark, DollarSign } from "lucide-react";
import buenosAiresCityscape from "@/assets/buenos-aires-cityscape.jpg";

const RealEstateInvestment = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Where to Invest: Real Estate & Funds for Argentina Residency",
    "description": "Discover qualifying investments for Argentina's Golden Visa including luxury real estate in Palermo and Puerto Madero, plus approved investment funds.",
    "author": {
      "@type": "Organization",
      "name": "Argentina Residence"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Argentina Residence",
      "url": "https://www.argentinaresidence.com"
    },
    "datePublished": "2026-01-22",
    "dateModified": "2026-01-22"
  };

  const neighborhoods = [
    {
      name: "Puerto Madero",
      description: "Buenos Aires' most exclusive waterfront district with modern high-rises and premium amenities.",
      priceRange: "$150,000 - $2M+",
      highlights: ["Waterfront views", "New construction", "24/7 security", "Premium amenities"],
      appreciation: "12-15% annual growth"
    },
    {
      name: "Palermo",
      description: "The city's largest and most diverse barrio, home to embassies, parks, and trendy neighborhoods.",
      priceRange: "$100,000 - $800K",
      highlights: ["Cultural hub", "Restaurant scene", "Green spaces", "High rental demand"],
      appreciation: "10-12% annual growth"
    },
    {
      name: "Recoleta",
      description: "Classic European-style neighborhood known for French architecture and cultural institutions.",
      priceRange: "$120,000 - $1.5M",
      highlights: ["Historic charm", "Museums & galleries", "Upscale dining", "Central location"],
      appreciation: "8-10% annual growth"
    },
    {
      name: "Belgrano",
      description: "Upscale residential area popular with families and expats, featuring tree-lined streets.",
      priceRange: "$100,000 - $600K",
      highlights: ["Family-friendly", "International schools", "Parks", "Quiet streets"],
      appreciation: "9-11% annual growth"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Argentina Golden Visa Investments | Real Estate & Funds Guide"
        description="Explore qualifying investments for Argentina residency: luxury real estate in Palermo, Puerto Madero & approved funds. From $100K minimum."
        canonical="/guides/argentina-real-estate-investment"
        schema={schema}
      />
      <Hero
        title="Investment Options"
        subtitle="Real Estate & Funds for Residency"
        backgroundImage={buenosAiresCityscape}
      />
      
      <EditorialSection>
        <h1 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Where to Invest: Real Estate & Funds for Argentina Residency
        </h1>
        <p className="text-editorial text-text-secondary mb-8 tracking-wide max-w-3xl mx-auto">
          Argentina's Golden Visa program accepts investments in qualified real estate and approved 
          financial instruments. This guide covers the best opportunities for investors seeking 
          residency through strategic investment.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/tools/investor-eligibility-check">
            <Button size="lg" className="px-8">
              Check Your Eligibility
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/guides/argentina-golden-visa-program">
            <Button variant="outline" size="lg" className="px-8">
              View Program Details
            </Button>
          </Link>
        </div>
      </EditorialSection>
      
      {/* Investment Categories */}
      <EditorialSection className="bg-secondary/30">
        <h2 className="font-serif text-xl-editorial mb-12 tracking-wide text-center">
          Qualifying Investment Categories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background p-8 rounded-lg border border-border">
            <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <Building2 className="h-7 w-7 text-gold" />
            </div>
            <h3 className="font-serif text-lg mb-3">Real Estate</h3>
            <p className="text-3xl font-serif text-gold mb-3">$100K+</p>
            <p className="text-text-secondary text-sm mb-4">
              Residential or commercial property in approved developments and neighborhoods.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gold" />
                Lowest entry point
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gold" />
                Tangible asset ownership
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gold" />
                Rental income potential
              </li>
            </ul>
          </div>
          
          <div className="bg-background p-8 rounded-lg border border-border">
            <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <Landmark className="h-7 w-7 text-gold" />
            </div>
            <h3 className="font-serif text-lg mb-3">Government Bonds</h3>
            <p className="text-3xl font-serif text-gold mb-3">$250K+</p>
            <p className="text-text-secondary text-sm mb-4">
              Argentine government securities with guaranteed returns and capital protection.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gold" />
                Government-backed security
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gold" />
                Fixed returns
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gold" />
                Liquid asset
              </li>
            </ul>
          </div>
          
          <div className="bg-background p-8 rounded-lg border border-border">
            <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="h-7 w-7 text-gold" />
            </div>
            <h3 className="font-serif text-lg mb-3">Approved Funds</h3>
            <p className="text-3xl font-serif text-gold mb-3">$250K+</p>
            <p className="text-text-secondary text-sm mb-4">
              Pre-approved investment funds managed by licensed Argentine fund managers.
            </p>
            <ul className="text-sm text-text-secondary space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gold" />
                Professional management
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gold" />
                Diversified portfolio
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-gold" />
                Regulatory oversight
              </li>
            </ul>
          </div>
        </div>
        
        <p className="text-center text-sm text-text-muted mt-8">
          Learn about the legal benefits of each investment type in our{" "}
          <Link to="/guides/argentina-golden-visa-program" className="text-primary hover:underline font-medium">
            Golden Visa Program Guide →
          </Link>
        </p>
      </EditorialSection>
      
      {/* Luxury Real Estate Neighborhoods */}
      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-4 tracking-wide text-center">
          Prime Investment Neighborhoods
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          Buenos Aires offers exceptional real estate opportunities in world-class neighborhoods. 
          These areas qualify for Golden Visa investment and offer strong appreciation potential.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {neighborhoods.map((neighborhood) => (
            <div 
              key={neighborhood.name}
              className="border border-border rounded-lg overflow-hidden hover:border-gold/50 transition-colors"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-lg-editorial mb-1">{neighborhood.name}</h3>
                    <div className="flex items-center gap-2 text-gold text-sm">
                      <TrendingUp className="h-4 w-4" />
                      {neighborhood.appreciation}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-text-muted">Price Range</p>
                    <p className="font-semibold text-text-primary">{neighborhood.priceRange}</p>
                  </div>
                </div>
                
                <p className="text-text-secondary text-sm mb-4">
                  {neighborhood.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {neighborhood.highlights.map((highlight) => (
                    <span 
                      key={highlight}
                      className="text-xs bg-secondary/50 text-text-secondary px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>
      
      {/* Why Invest Section */}
      <EditorialSection className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-16 text-left">
          <div>
            <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">
              Why Buenos Aires Real Estate?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Undervalued Market</h4>
                  <p className="text-text-secondary text-sm">
                    Buenos Aires property prices are 40-60% below comparable global cities, 
                    offering exceptional value for international investors.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <TrendingUp className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Strong Rental Yields</h4>
                  <p className="text-text-secondary text-sm">
                    Premium neighborhoods offer 6-10% gross rental yields in USD, 
                    significantly outperforming many developed markets.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Building2 className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Quality Construction</h4>
                  <p className="text-text-secondary text-sm">
                    New developments feature European-standard construction with 
                    modern amenities and professional property management.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">
              Investment Process
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-gold pl-6">
                <p className="text-sm text-gold font-semibold uppercase tracking-wider mb-1">Step 1</p>
                <h4 className="font-semibold mb-1">Eligibility Assessment</h4>
                <p className="text-text-secondary text-sm">
                  Complete our quick assessment to confirm your investor profile.
                </p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <p className="text-sm text-text-muted font-semibold uppercase tracking-wider mb-1">Step 2</p>
                <h4 className="font-semibold mb-1">Property Selection</h4>
                <p className="text-text-secondary text-sm">
                  Review curated properties that qualify for the Golden Visa.
                </p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <p className="text-sm text-text-muted font-semibold uppercase tracking-wider mb-1">Step 3</p>
                <h4 className="font-semibold mb-1">Investment & Application</h4>
                <p className="text-text-secondary text-sm">
                  Complete your investment and submit your residency application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </EditorialSection>
      
      {/* CTA Section */}
      <EditorialSection className="bg-dark-teal text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl-editorial mb-6 tracking-wide text-white">
            Ready to Explore Investment Options?
          </h2>
          <p className="text-text-cream mb-8 text-lg">
            Complete our eligibility assessment to receive personalized investment 
            recommendations and join our priority investor waitlist.
          </p>
          <Link to="/tools/investor-eligibility-check">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-primary px-10">
              Start Eligibility Check
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </EditorialSection>
      
      {/* Internal Linking */}
      <EditorialSection>
        <h2 className="font-serif text-lg-editorial mb-8 tracking-wide text-center">
          Related Resources
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link 
            to="/guides/argentina-golden-visa-program" 
            className="p-6 border border-border rounded-lg hover:border-gold/50 hover:bg-secondary/20 transition-all group"
          >
            <h3 className="font-serif text-lg mb-2 group-hover:text-gold transition-colors">
              Program Details
            </h3>
            <p className="text-sm text-text-secondary">
              Full guide to Argentina's Golden Visa program and legal framework.
            </p>
          </Link>
          
          <Link 
            to="/blog/buenos-aires-real-estate-bull-market-analysis" 
            className="p-6 border border-border rounded-lg hover:border-gold/50 hover:bg-secondary/20 transition-all group"
          >
            <h3 className="font-serif text-lg mb-2 group-hover:text-gold transition-colors">
              Market Analysis
            </h3>
            <p className="text-sm text-text-secondary">
              In-depth analysis of Buenos Aires real estate market trends.
            </p>
          </Link>
          
          <Link 
            to="/market-insights" 
            className="p-6 border border-border rounded-lg hover:border-gold/50 hover:bg-secondary/20 transition-all group"
          >
            <h3 className="font-serif text-lg mb-2 group-hover:text-gold transition-colors">
              Market Insights
            </h3>
            <p className="text-sm text-text-secondary">
              Latest data and trends in Argentine investment markets.
            </p>
          </Link>
        </div>
      </EditorialSection>
    </Layout>
  );
};

export default RealEstateInvestment;
