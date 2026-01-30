import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import LuxuryContactCTA from "@/components/LuxuryContactCTA";

const Contact = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Argentina Residence",
    "description": "Get in touch for information about Argentina residency by investment",
    "url": "https://www.argentinaresidence.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Argentina Residence",
      "url": "https://www.argentinaresidence.com"
    }
  };

  return (
    <Layout showBreadcrumbs={false}>
      <SEO 
        title="Free Consultation | Argentina Residence"
        description="Schedule your free Argentina residency consultation. Get expert guidance on investment options and application process."
        canonical="/contact"
        schema={schema}
      />
      <LuxuryContactCTA />
    </Layout>
  );
};

export default Contact;
