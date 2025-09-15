import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import casaRosadaImage from "@/assets/casa-rosada-program.jpg";

const Program = () => {
  return (
    <Layout>
      <Hero
        title="Residency Program"
        subtitle="Your pathway to South American residency"
        backgroundImage={casaRosadaImage}
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
            <h3 className="font-serif text-xl-editorial mb-6 tracking-wide">Investment Requirements</h3>
            <p className="text-body text-text-secondary mb-6 tracking-wide">
              The Argentina Residency by Investment program requires a minimum investment of USD $150,000 in approved sectors including real estate, government bonds, or establishing a local business.
            </p>
            <p className="text-body text-text-secondary tracking-wide">
              Investments must be maintained for a minimum period of three years, with clear pathways to permanent residency and eventual citizenship.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-xl-editorial mb-6 tracking-wide">Program Benefits</h3>
            <ul className="text-body text-text-secondary space-y-4 tracking-wide">
              <li>• Temporary residence visa with work authorization</li>
              <li>• Access to Argentina's comprehensive healthcare system</li>
              <li>• Favorable tax treatment for foreign investors</li>
              <li>• Pathway to permanent residency after two years</li>
              <li>• Visa-free travel to 170+ countries</li>
              <li>• Family inclusion for spouse and dependent children</li>
            </ul>
          </div>
        </div>
      </EditorialSection>
      
      <EditorialSection>
        <h3 className="font-serif text-xl-editorial mb-8 tracking-wide">Application Process</h3>
        <div className="max-w-3xl mx-auto text-left space-y-8">
          <div className="border-l-2 border-gold pl-8">
            <h4 className="font-serif text-lg-editorial mb-4 tracking-wide">Initial Consultation</h4>
            <p className="text-body text-text-secondary tracking-wide">
              Comprehensive assessment of your investment objectives and residency goals. Our team provides detailed guidance on investment options and program requirements.
            </p>
          </div>
          
          <div className="border-l-2 border-gold pl-8">
            <h4 className="font-serif text-lg-editorial mb-4 tracking-wide">Documentation & Investment</h4>
            <p className="text-body text-text-secondary tracking-wide">
              Complete preparation of required documentation and facilitation of your investment. We handle all legal requirements and coordinate with local authorities.
            </p>
          </div>
          
          <div className="border-l-2 border-gold pl-8">
            <h4 className="font-serif text-lg-editorial mb-4 tracking-wide">Residency Approval</h4>
            <p className="text-body text-text-secondary tracking-wide">
              Final review and approval process typically completed within 6-8 months. Upon approval, receive your temporary residence visa and begin your Argentine residency journey.
            </p>
          </div>
        </div>
      </EditorialSection>
    </Layout>
  );
};

export default Program;