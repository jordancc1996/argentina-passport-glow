import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import EditorialSection from "./EditorialSection";

interface GoldenVisaApplicationData {
  fullName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  investmentAmount: string;
}

const GoldenVisaApplicationCTA = () => {
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<GoldenVisaApplicationData>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countryCodes = [
    { code: "+1", country: "US/Canada" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+82", country: "South Korea" },
    { code: "+61", country: "Australia" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+55", country: "Brazil" },
    { code: "+52", country: "Mexico" },
    { code: "+54", country: "Argentina" },
    { code: "+971", country: "UAE" },
    { code: "+966", country: "Saudi Arabia" },
  ];

  const investmentRanges = [
    "$50,000 to $100,000",
    "$100,000 to $250,000",
    "$250,000 to $500,000",
    "$500,000 to $1,000,000",
    "Over $1,000,000",
    "Prefer to discuss"
  ];

  const onSubmit = async (data: GoldenVisaApplicationData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formcarry.com/s/1vbKuKjPCBx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          phone: `${data.countryCode} ${data.phoneNumber}`,
          formType: 'golden-visa-application'
        })
      });

      if (response.ok) {
        toast({
          title: "Application Received!",
          description: "Thank you for your interest in Argentina's Golden Visa program. Our team will contact you within 24 hours to discuss your application.",
        });
        reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <EditorialSection className="bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 text-left items-center">
        {/* Content Side */}
        <div>
          <h2 className="font-serif text-2xl-editorial md:text-3xl-editorial mb-6 tracking-wide">
            Start Your Journey to Argentine Residency
          </h2>
          <p className="text-editorial text-text-secondary tracking-wide mb-6">
            Gain Argentine residency and unlock access to South America's most dynamic markets. 
            Our Golden Visa program offers a streamlined path to living, working, and investing 
            in one of the continent's most promising economies.
          </p>
          <ul className="space-y-3 text-editorial text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Fast-track residency with investment options from $50,000</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Access to MERCOSUR markets and business opportunities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Path to citizenship after just 2 years of residency</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Favorable tax environment for foreign investors</span>
            </li>
          </ul>
        </div>

        {/* Form Side */}
        <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-border/50">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <Label htmlFor="fullName" className="text-sm font-medium mb-2 block">
                Full Name *
              </Label>
              <Input
                id="fullName"
                {...register("fullName", { required: "Full name is required" })}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                Business/Education Email *
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address"
                  }
                })}
                placeholder="your.name@company.com"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <Label htmlFor="countryCode" className="text-sm font-medium mb-2 block">
                  Code *
                </Label>
                <Controller
                  name="countryCode"
                  control={control}
                  rules={{ required: "Country code is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger id="countryCode">
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                      <SelectContent>
                        {countryCodes.map((item) => (
                          <SelectItem key={item.code} value={item.code}>
                            {item.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.countryCode && (
                  <p className="text-destructive text-sm mt-1">{errors.countryCode.message}</p>
                )}
              </div>
              
              <div className="col-span-2">
                <Label htmlFor="phoneNumber" className="text-sm font-medium mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  id="phoneNumber"
                  {...register("phoneNumber", { 
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{6,15}$/,
                      message: "Please enter a valid phone number"
                    }
                  })}
                  placeholder="1234567890"
                />
                {errors.phoneNumber && (
                  <p className="text-destructive text-sm mt-1">{errors.phoneNumber.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="investmentAmount" className="text-sm font-medium mb-2 block">
                Expected Investment Amount *
              </Label>
              <Controller
                name="investmentAmount"
                control={control}
                rules={{ required: "Investment amount is required" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="investmentAmount">
                      <SelectValue placeholder="Select investment range" />
                    </SelectTrigger>
                    <SelectContent>
                      {investmentRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.investmentAmount && (
                <p className="text-destructive text-sm mt-1">{errors.investmentAmount.message}</p>
              )}
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Start My Application"}
            </Button>

            <p className="text-xs text-text-secondary text-center mt-4">
              We respect your privacy. Your information is secure and will never be shared.
            </p>
          </form>
        </div>
      </div>
    </EditorialSection>
  );
};

export default GoldenVisaApplicationCTA;
