import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface GoldenVisaApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  relocateTimeline: string;
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

  const relocateTimelines = [
    "Within 3 months",
    "3-6 months",
    "6-12 months",
    "1-2 years",
    "2+ years",
    "Just exploring options"
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
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: `${data.countryCode} ${data.phoneNumber}`,
          relocateTimeline: data.relocateTimeline,
          investmentAmount: data.investmentAmount,
          formType: 'golden-visa-application'
        })
      });

      if (response.ok) {
        toast({
          title: "Thank you for signing up!",
          description: "We'll send you exclusive guides and updates about Argentina's Golden Visa program.",
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
    <section className="section-padding bg-secondary/20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-gold mb-6">
          LEARN MORE & SIGN UP FOR UPDATES
        </h2>
        <p className="text-base md:text-lg text-text-secondary mb-12 leading-relaxed">
          The goal of our website is to be a lead magnet and offer value in the form of guides and 
          checklists. Get exclusive access to our comprehensive Argentina residency planning resources.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-left">
              <Label htmlFor="firstName" className="text-sm font-medium mb-2 block text-gold">
                First Name*
              </Label>
              <Input
                id="firstName"
                {...register("firstName", { required: "First name is required" })}
                placeholder=""
                className="bg-background"
              />
              {errors.firstName && (
                <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div className="text-left">
              <Label htmlFor="lastName" className="text-sm font-medium mb-2 block text-gold">
                Last Name*
              </Label>
              <Input
                id="lastName"
                {...register("lastName", { required: "Last name is required" })}
                placeholder=""
                className="bg-background"
              />
              {errors.lastName && (
                <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="text-left">
            <Label htmlFor="email" className="text-sm font-medium mb-2 block text-gold">
              Email*
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
              placeholder=""
              className="bg-background"
            />
            <p className="text-sm text-text-secondary/70 italic mt-1">
              Please use a work or .edu email address
            </p>
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="text-left">
            <Label htmlFor="phoneNumber" className="text-sm font-medium mb-2 block text-gold">
              Phone Number*
            </Label>
            <div className="grid grid-cols-3 gap-3">
              <Controller
                name="countryCode"
                control={control}
                rules={{ required: "Country code is required" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="countryCode" className="bg-background">
                      <SelectValue placeholder="United..." />
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map((item) => (
                        <SelectItem key={item.code} value={item.code}>
                          {item.country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              
              <div className="col-span-2">
                <Input
                  id="phoneNumber"
                  {...register("phoneNumber", { 
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{6,15}$/,
                      message: "Please enter a valid phone number"
                    }
                  })}
                  placeholder=""
                  className="bg-background"
                />
              </div>
            </div>
            {(errors.countryCode || errors.phoneNumber) && (
              <p className="text-destructive text-sm mt-1">
                {errors.countryCode?.message || errors.phoneNumber?.message}
              </p>
            )}
          </div>

          <div className="text-left">
            <Label htmlFor="relocateTimeline" className="text-sm font-medium mb-2 block text-gold">
              Do you intend to relocate to Argentina within the next 12 months?*
            </Label>
            <p className="text-xs text-text-secondary/70 italic mb-2">
              ** PLEASE READ ** You might not need to invest at all! Relocating to Argentina can make you eligible for residency with no investment required
            </p>
            <Controller
              name="relocateTimeline"
              control={control}
              rules={{ required: "Please select a timeline" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="relocateTimeline" className="bg-background">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {relocateTimelines.map((timeline) => (
                      <SelectItem key={timeline} value={timeline}>
                        {timeline}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.relocateTimeline && (
              <p className="text-destructive text-sm mt-1">{errors.relocateTimeline.message}</p>
            )}
          </div>

          <div className="text-left">
            <Label htmlFor="investmentAmount" className="text-sm font-medium mb-2 block text-gold">
              Which Golden Visa program are you interested in?*
            </Label>
            <Controller
              name="investmentAmount"
              control={control}
              rules={{ required: "Please select an investment range" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="investmentAmount" className="bg-background">
                    <SelectValue placeholder="Please Select" />
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
            className="w-full mt-8 bg-gold hover:bg-gold/90 text-primary-foreground font-medium text-base py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "SUBMITTING..." : "I WANT TO LEARN MORE"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default GoldenVisaApplicationCTA;
