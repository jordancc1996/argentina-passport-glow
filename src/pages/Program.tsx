import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import goldenVisaHero from "@/assets/argentina-golden-visa-2026.jpg";

const Program = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Residency by Investment Program",
    "provider": {
      "@type": "Organization",
      "name": "Argentina Residence"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    },
    "description": "Argentina's Residency by Investment Program offers opportunities for global investors seeking South American residency through strategic investments.",
    "offers": {
      "@type": "Offer",
      "description": "Temporary residence visa with work authorization, pathway to permanent residency, and access to healthcare system"
    }
  };

  return (
    <Layout showBreadcrumbs={false}>
      <SEO 
        title="Argentina Golden Visa Program | Argentina Residence"
        description="Invest $100K+ for Argentina residency. Get work rights, tax benefits, and pathway to citizenship. Full program details inside."
        canonical="/program"
        schema={schema}
      />
      <Hero
        title="Argentina Residency by Investment: The Fastest Path to a Global Passport"
        subtitle="Secure permanent residency in one of South America's most vibrant economies. With a strategic investment, you can qualify for Argentine citizenship in as little as two years, gaining visa-free access to over 170 destinations and a gateway to the MERCOSUR region."
        backgroundImage={goldenVisaHero}
        ctaText="Request Program Details"
        ctaLink="/contact"
      />
      
      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Argentina's Residency by Investment Program offers unparalleled opportunities for global investors seeking South American residency.
        </h2>
        <p className="text-editorial text-text-secondary mb-12 tracking-wide">
          Our program is synonymous with exceptional value and strategic advantage.
        </p>
      </EditorialSection>
      
      <EditorialSection className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-16 text-left">
          <div>
            <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">Investment Requirements</h2>
            <p className="text-body text-text-secondary mb-6 tracking-wide">
              The Argentina Residency by Investment program requires a minimum investment of USD $500,000 in approved sectors including real estate, government bonds, or establishing a local business.
            </p>
            <p className="text-body text-text-secondary tracking-wide mb-4">
              Investments must be maintained for a minimum period of three years, with clear pathways to permanent residency and eventual citizenship.
            </p>
            <Link to="/faq/investment-requirements" className="text-primary hover:underline text-sm font-medium">
              See detailed requirements →
            </Link>
          </div>
          
          <div>
            <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">Program Benefits</h2>
            <ul className="text-body text-text-secondary space-y-4 tracking-wide mb-4">
              <li>• Temporary residence visa with <Link to="/faq/work-rights" className="text-primary hover:underline">work authorization</Link></li>
              <li>• Access to Argentina's comprehensive healthcare system</li>
              <li>• Favorable <Link to="/faq/tax-implications" className="text-primary hover:underline">tax treatment</Link> for foreign investors</li>
              <li>• Pathway to permanent residency after two years</li>
              <li>• <Link to="/faq/visa-free-travel" className="text-primary hover:underline">Visa-free travel</Link> to 170+ countries</li>
              <li>• <Link to="/faq/family-members-residency" className="text-primary hover:underline">Family inclusion</Link> for spouse and dependent children</li>
            </ul>
          </div>
        </div>
      </EditorialSection>
      
      <EditorialSection centered={false}>
        <ScrollytellingSteps
          eyebrow="A Bespoke Process"
          heading="From first conversation to approved residency"
          intro="Our advisory team guides qualified investors through every stage — discreetly, methodically, and in close coordination with licensed immigration counsel."
          steps={[
            {
              label: "Step 1",
              title: "Initial Consultation",
              description:
                "Comprehensive assessment of your investment objectives and residency goals. Our team provides detailed guidance on investment options and program requirements.",
            },
            {
              label: "Step 2",
              title: "Eligibility & Strategy",
              description:
                "We evaluate your profile against the program's qualifying criteria and design an investment route tailored to your timeline, family situation, and risk tolerance.",
            },
            {
              label: "Step 3",
              title: "Documentation & Investment",
              description:
                "Complete preparation of required documentation and facilitation of your investment. We handle all legal requirements and coordinate with local authorities.",
            },
            {
              label: "Step 4",
              title: "Application Filing",
              description:
                "Your dossier is filed with the Dirección Nacional de Migraciones by licensed immigration counsel, with full ongoing case management until decision.",
            },
            {
              label: "Step 5",
              title: "Residency Approval",
              description:
                "Final review and approval process typically completed within 6-8 months. Upon approval, receive your temporary residence visa and begin your Argentine residency journey.",
            },
          ]}
        />

        <div className="mt-16 text-center">
          <p className="text-body text-text-secondary mb-6 tracking-wide">
            Ready to begin your application?
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-12">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </EditorialSection>
      
    </Layout>
  );
};

export default Program;