import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const ConsultationCTA = () => {
  return (
    <section className="bg-primary/10 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
        <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
          Schedule Your Free Consultation
        </h3>
        <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
          Have questions about Argentina's residency program? Schedule a principal consultation 
          with our team to discuss your eligibility and next steps.
        </p>
        <Button asChild size="lg" className="px-8">
          <Link to="/contact">
            <Calendar className="w-4 h-4 mr-2" />
            Book Free Consultation
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ConsultationCTA;
