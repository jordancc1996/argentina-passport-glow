import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-lg mb-4">Argentina Residence</h3>
            <p className="text-sm text-muted-foreground">
              A specialized advisory boutique facilitating strategic capital deployment and residency acquisition in Argentina.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/program" className="text-muted-foreground hover:text-primary transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Argentina
                </Link>
              </li>
              <li>
                <Link to="/market-insights" className="text-muted-foreground hover:text-primary transition-colors">
                  Market Insights
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-serif text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Guides & Resources
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal & External */}
          <div>
            <h3 className="font-serif text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-muted-foreground text-sm mb-2">Contact:</p>
              <a href="mailto:rachele@argentinaresidence.com" className="text-primary hover:underline text-sm">
                rachele@argentinaresidence.com
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-muted-foreground text-sm mb-2">External Resources:</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://www.argentina.gob.ar/interior/migraciones" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Argentina Migration Office
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.imidaily.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    IMI Daily
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6">
          <p className="text-center text-muted-foreground text-xs">
            © {new Date().getFullYear()} Argentina Residence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;