import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { path: "/", label: "home" },
    { path: "/program", label: "program" },
    { path: "/about", label: "about" },
    { path: "/market-insights", label: "market insights" },
    { path: "/faq", label: "faq" },
    { path: "/resources", label: "resources" },
    { path: "/blog", label: "blog" },
    { path: "/contact", label: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between md:gap-12">
          {/* Brand */}
          <Link 
            to="/" 
            className="text-base md:text-xl font-serif tracking-widest text-primary hover:text-text-secondary transition-colors duration-300 cursor-pointer whitespace-nowrap"
            onClick={() => setMobileMenuOpen(false)}
          >
            ARGENTINA RESIDENCE
          </Link>
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
          
          {/* Desktop Navigation Links */}
          {!isMobile && (
            <div className="flex items-center justify-evenly flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-sans tracking-wider uppercase transition-colors duration-300 whitespace-nowrap ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-text-secondary hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="mt-4 pb-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-sans tracking-wider uppercase transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;