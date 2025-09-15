import { useState } from "react";
import Layout from "@/components/Layout";
import EditorialSection from "@/components/EditorialSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    budget: '',
    country: '',
    interest: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest",
      description: "We will contact you within 24 hours to discuss your residency objectives.",
    });
    setFormData({ email: '', budget: '', country: '', interest: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="pt-20">
        <EditorialSection>
          <h1 className="font-serif text-hero mb-8 tracking-wide">
            Take the First Step
          </h1>
          <p className="text-editorial text-text-secondary mb-12 tracking-wide max-w-3xl mx-auto">
            Begin your journey toward Argentine residency. Our team provides personalized guidance for discerning investors seeking South American opportunities.
          </p>
        </EditorialSection>
        
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
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-sans tracking-wider uppercase text-sm py-6"
                >
                  Submit Inquiry
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
                <h4 className="font-serif text-lg-editorial mb-4 tracking-wide">Consultation</h4>
                <p className="text-sm text-text-muted tracking-wide">
                  Personalized assessment of your investment and residency objectives.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg-editorial mb-4 tracking-wide">Documentation</h4>
                <p className="text-sm text-text-muted tracking-wide">
                  Complete preparation and submission of all required materials.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg-editorial mb-4 tracking-wide">Approval</h4>
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