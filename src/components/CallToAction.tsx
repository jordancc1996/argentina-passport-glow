import EditorialSection from "./EditorialSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <EditorialSection className="bg-secondary/30">
      <h3 className="font-serif text-xl-editorial mb-8 tracking-wide">Ready to Begin?</h3>
      <p className="text-editorial text-text-secondary mb-12 tracking-wide max-w-2xl mx-auto">
        Take the first step toward your Argentine residency. Our team will personally review your application and contact you within 24 hours with a customized investment strategy.
      </p>
      <Link to="/application">
        <Button size="lg" className="px-12">
          Start Your Application
        </Button>
      </Link>
    </EditorialSection>
  );
};

export default CallToAction;