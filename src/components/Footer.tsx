import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            Contact us: <a href="mailto:jordan@argentinaresidence.com" className="text-primary hover:underline">jordan@argentinaresidence.com</a>
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
        <p className="text-center text-muted-foreground text-xs mt-6">
          © {new Date().getFullYear()} Argentina Residence. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;