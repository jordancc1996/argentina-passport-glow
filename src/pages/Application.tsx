import Layout from "@/components/Layout";
import EditorialSection from "@/components/EditorialSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface ApplicationForm {
  name: string;
  age: string;
  budget: string;
  countryOfResidence: string;
  workEmail: string;
}

const Application = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ApplicationForm>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ApplicationForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Application Submitted",
        description: "Thank you for your interest. We'll contact you within 24 hours.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

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
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="age" className="text-sm font-medium mb-2 block">
                  Age *
                </Label>
                <Input
                  id="age"
                  type="number"
                  {...register("age", { 
                    required: "Age is required",
                    min: { value: 18, message: "Must be 18 or older" }
                  })}
                  className="w-full"
                  placeholder="Enter your age"
                />
                {errors.age && (
                  <p className="text-destructive text-sm mt-1">{errors.age.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="budget" className="text-sm font-medium mb-2 block">
                Investment Budget (USD) *
              </Label>
              <Input
                id="budget"
                {...register("budget", { required: "Budget is required" })}
                className="w-full"
                placeholder="e.g., $150,000 - $500,000"
              />
              {errors.budget && (
                <p className="text-destructive text-sm mt-1">{errors.budget.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="countryOfResidence" className="text-sm font-medium mb-2 block">
                Current Country of Residence *
              </Label>
              <Input
                id="countryOfResidence"
                {...register("countryOfResidence", { required: "Country of residence is required" })}
                className="w-full"
                placeholder="Enter your country of residence"
              />
              {errors.countryOfResidence && (
                <p className="text-destructive text-sm mt-1">{errors.countryOfResidence.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="workEmail" className="text-sm font-medium mb-2 block">
                Work Email *
              </Label>
              <Input
                id="workEmail"
                type="email"
                {...register("workEmail", { 
                  required: "Work email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="w-full"
                placeholder="Enter your work email"
              />
              {errors.workEmail && (
                <p className="text-destructive text-sm mt-1">{errors.workEmail.message}</p>
              )}
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full mt-8"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>

          <div className="mt-8 p-6 bg-secondary/30 rounded-lg">
            <h3 className="font-serif text-lg-editorial mb-4 tracking-wide">What Happens Next?</h3>
            <ul className="text-body text-text-secondary space-y-2 tracking-wide">
              <li>• We'll review your application within 24 hours</li>
              <li>• Schedule a personalized consultation call</li>
              <li>• Receive a detailed investment proposal</li>
              <li>• Begin your residency application process</li>
            </ul>
          </div>
        </div>
      </EditorialSection>
    </Layout>
  );
};

export default Application;