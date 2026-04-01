import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import heroNightImage from "@/assets/hero-buenos-aires-night.jpg";
import { blogPosts } from "@/data/blogData";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Argentina Residence",
        "url": "https://www.argentinaresidence.com",
        "logo": "https://www.argentinaresidence.com/og-image.jpg",
        "description": "A specialized advisory boutique facilitating strategic capital deployment and residency acquisition in Argentina",
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

  // Get the 3 most recent blog posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <Layout showBreadcrumbs={false}>
      <SEO 
        title="Argentina Residency by Investment | Golden Visa 2026"
        description="Get Argentina residency through investment. $100K minimum. Fast-track to citizenship with visa-free travel to 170+ countries."
        canonical="/"
        schema={schema}
      />
      <Hero
        title="Argentina Residence & Citizenship by Investment"
        subtitle="Live and invest in South America's most dynamic economy"
        backgroundImage={heroNightImage}
      />
      
      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Argentina offers unparalleled investment opportunities for global citizens seeking South American residency.
        </h2>
        <p className="text-editorial text-text-secondary mb-8 tracking-wide">
          A specialized advisory boutique facilitating strategic capital deployment and residency acquisition in Argentina.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button asChild variant="outline" size="lg" className="bg-white hover:bg-white/90">
            <Link to="/about">About This Resource</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white hover:bg-white/90">
            <Link to="/faq">FAQ</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white hover:bg-white/90">
            <Link to="/resources">Resources</Link>
          </Button>
        </div>
      </EditorialSection>
      
      <EditorialSection className="bg-secondary/30">
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div>
            <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">Investment Program</h2>
            <p className="text-body text-text-secondary tracking-wide mb-4">
              Secure temporary residency through strategic investments in Argentina's most promising sectors, from premium real estate to government bonds.
            </p>
            <Link to="/program" className="text-primary hover:underline text-sm font-medium">
              Learn about the program →
            </Link>
          </div>
          
          <div>
            <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">Strategic Location</h2>
            <p className="text-body text-text-secondary tracking-wide mb-4">
              Access South America's second-largest economy while enjoying visa-free travel to over 170 countries worldwide.
            </p>
            <Link to="/faq/visa-free-travel" className="text-primary hover:underline text-sm font-medium">
              Explore travel benefits →
            </Link>
          </div>
          
          <div>
            <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">Premium Lifestyle</h2>
            <p className="text-body text-text-secondary tracking-wide mb-4">
              Experience world-class culture, cuisine, and quality of life in one of South America's most sophisticated destinations.
            </p>
            <Link to="/about" className="text-primary hover:underline text-sm font-medium">
              Discover Argentina →
            </Link>
          </div>
        </div>
      </EditorialSection>

      {/* Trust & Credibility Section */}
      <EditorialSection className="bg-secondary/30">
        <h2 className="font-serif text-xl-editorial mb-4 tracking-wide">
          Guided by Legal Excellence
        </h2>
        <p className="text-body text-text-secondary mb-12 max-w-2xl mx-auto tracking-wide">
          Our content and guidance are developed in close partnership with licensed immigration attorneys who specialize in Argentine residency and citizenship law.
        </p>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">Attorney-Reviewed Content</h3>
            <p className="text-sm text-text-secondary tracking-wide">
              Every guide and resource is reviewed by qualified immigration professionals to ensure accuracy and compliance with current Argentine law.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">Licensed Legal Network</h3>
            <p className="text-sm text-text-secondary tracking-wide">
              We work exclusively with Buenos Aires–based attorneys who hold active matriculation with the Colegio Público de Abogados and specialize in migration law.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">Transparent & Independent</h3>
            <p className="text-sm text-text-secondary tracking-wide">
              Argentina Residence is an independent advisory practice — we provide unbiased intelligence to help you make informed decisions about your residency journey.
            </p>
          </div>
        </div>
      </EditorialSection>

      {/* Blog Preview Section */}
      <EditorialSection>
        <div className="text-center mb-12">
          <h2 className="font-serif text-xl-editorial mb-4 tracking-wide">Latest Insights & Guides</h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Stay informed with our latest articles on Argentina residency, investment opportunities, and expat lifestyle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              {post.image && (
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="text-primary font-medium">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-serif text-lg mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span className="text-primary font-medium group-hover:underline flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog" className="inline-flex items-center gap-2">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </EditorialSection>
      
      <EditorialSection className="bg-secondary/30">
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">Your pathway to Argentine residency</h2>
        <p className="text-body text-text-secondary mb-12 max-w-3xl mx-auto tracking-wide">
          Learn about investment requirements, application procedures, and everything you need to know about Argentina's residency by investment program. Explore our comprehensive guides and resources to help you make informed decisions.
        </p>
      </EditorialSection>

      <EditorialSection>
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
