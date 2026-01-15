import { useState } from "react";
import Layout from "@/components/Layout";
import EditorialSection from "@/components/EditorialSection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import argentineFlagImage from "@/assets/argentina-flag-background.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    budget: '',
    country: '',
    interest: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formcarry.com/s/1vbKuKjPCBx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          formType: 'contact-inquiry'
        })
      });

      if (response.ok) {
        toast({
          title: "Thank you for your interest",
          description: "We will contact you within 24 hours to discuss your residency objectives.",
        });
        setFormData({ email: '', budget: '', country: '', interest: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    <Layout>
      <SEO 
        title="Free Consultation | Argentina Residence"
        description="Schedule your free Argentina residency consultation. Get expert guidance on investment options and application process."
        canonical="/contact"
        schema={schema}
      />
      <div className="pt-20">
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${argentineFlagImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <EditorialSection className="relative z-10 text-white">
            <h1 className="font-serif text-hero mb-8 tracking-wide">
              Take the First Step
            </h1>
            <p className="text-editorial text-white/90 mb-12 tracking-wide max-w-3xl mx-auto">
              Begin your journey toward Argentine residency. Our team provides personalized guidance for discerning investors seeking South American opportunities.
            </p>
          </EditorialSection>
        </div>
        
        <EditorialSection className="bg-secondary/30">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-sans tracking-wider uppercase text-text-secondary">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="text-body border-border bg-background"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-sm font-sans tracking-wider uppercase text-text-secondary">
                  Investment Budget (USD)
                </Label>
                <Input
                  id="budget"
                  name="budget"
                  type="text"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="text-body border-border bg-background"
                  placeholder="$150,000 - $500,000+"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="country" className="text-sm font-sans tracking-wider uppercase text-text-secondary">
                  Country of Origin
                </Label>
                <Input
                  id="country"
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="text-body border-border bg-background"
                  placeholder="United States, United Kingdom, etc."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interest" className="text-sm font-sans tracking-wider uppercase text-text-secondary">
                  Why are you interested in Argentine residency?
                </Label>
                <Textarea
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="text-body border-border bg-background min-h-32"
                  placeholder="Please describe your residency objectives and investment interests..."
                />
              </div>
              
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-sans tracking-wider uppercase text-sm py-6"
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </div>
            </form>
          </div>
        </EditorialSection>
        
        <EditorialSection>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-xl-editorial mb-8 tracking-wide">
              Expert Guidance Throughout Your Journey
            </h3>
            <p className="text-body text-text-secondary mb-8 tracking-wide">
              Our team provides comprehensive support from initial consultation through residency approval. We understand the complexities of international investment and residency requirements.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">Consultation</h2>
                <p className="text-sm text-text-muted tracking-wide">
                  Personalized assessment of your investment and residency objectives.
                </p>
              </div>
              <div>
                <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">Documentation</h2>
                <p className="text-sm text-text-muted tracking-wide">
                  Complete preparation and submission of all required materials.
                </p>
              </div>
              <div>
                <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">Approval</h2>
                <p className="text-sm text-text-muted tracking-wide">
                  Ongoing support through the approval process and beyond.
                </p>
              </div>
            </div>
          </div>
        </EditorialSection>
      </div>
    </Layout>
  );
};

export default Contact;