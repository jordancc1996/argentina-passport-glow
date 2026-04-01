import EditorialSection from "./EditorialSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <EditorialSection className="bg-secondary/30">
      <h3 className="font-serif text-xl-editorial mb-8 tracking-wide">Ready to Review Details?</h3>
      <p className="text-editorial text-text-secondary mb-12 tracking-wide max-w-2xl mx-auto">
        Explore our comprehensive resources and guides to learn everything you need to know about Argentina's golden visa program.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/resources">
          <Button size="lg" className="px-12">
            Explore Resources
          </Button>
        </Link>
        <Link to="/faq">
          <Button size="lg" variant="outline" className="px-12">
            View FAQ
          </Button>
        </Link>
      </div>
    </EditorialSection>
  );
};

export default CallToAction;