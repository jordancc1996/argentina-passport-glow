import Layout from "@/components/Layout";
import EditorialSection from "@/components/EditorialSection";
import FormCarryForm from "@/components/FormCarryForm";

const Application = () => {
  return (
    <Layout>
      <EditorialSection className="pt-32">
        <h1 className="font-serif text-3xl-editorial mb-8 tracking-wide">
          Start Your Application
        </h1>
        <p className="text-editorial text-text-secondary mb-12 tracking-wide max-w-2xl mx-auto">
          Begin your journey to Argentine residency. Complete this initial application and our team will contact you within 24 hours to discuss your personalized investment strategy.
        </p>
      </EditorialSection>

      <EditorialSection>
        <FormCarryForm
          formType="application"
          buttonText="Submit Application"
          title="Application Form"
          description="Provide your details below and our team will contact you within 24 hours with a customized investment strategy."
        />

        <div className="mt-12 p-6 bg-secondary/30 rounded-lg max-w-2xl mx-auto">
          <h3 className="font-serif text-lg-editorial mb-4 tracking-wide">What Happens Next?</h3>
          <ul className="text-body text-text-secondary space-y-2 tracking-wide">
            <li>• We'll review your application within 24 hours</li>
            <li>• Schedule a personalized consultation call</li>
            <li>• Receive a detailed investment proposal</li>
            <li>• Begin your residency application process</li>
          </ul>
        </div>
      </EditorialSection>
    </Layout>
  );
};

export default Application;