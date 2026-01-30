import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [goldenVisaOpen, setGoldenVisaOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll for transparent -> solid transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const goldenVisaItems = [
    { path: "/guides/argentina-golden-visa-program", label: "Program Details (2026)" },
    { path: "/guides/argentina-real-estate-investment", label: "Investment Options" },
    { path: "/tools/investor-eligibility-check", label: "Eligibility Checker (Tool)" },
  ];

  const navItems = [
    { path: "/", label: "home" },
    { path: "/program", label: "program" },
    { type: "dropdown", label: "the golden visa", items: goldenVisaItems },
    { path: "/market-insights", label: "market insights" },
    { path: "/blog", label: "blog" },
    { path: "/contact", label: "contact" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setGoldenVisaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isGoldenVisaActive = goldenVisaItems.some(item => location.pathname.startsWith(item.path));

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || mobileMenuOpen
        ? "bg-background/95 backdrop-blur-sm border-b border-border"
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between md:gap-12">
          {/* Brand */}
          <Link 
            to="/" 
            className={`text-base md:text-xl font-serif tracking-widest transition-colors duration-300 cursor-pointer whitespace-nowrap ${
              isScrolled ? "text-primary hover:text-text-secondary" : "text-white hover:text-white/80"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            ARGENTINA RESIDENCE
          </Link>
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors duration-300 ${isScrolled ? "text-primary" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
          
          {/* Desktop Navigation Links */}
          {!isMobile && (
            <div className="flex items-center justify-evenly flex-1">
              {navItems.map((item, index) => {
                if ('type' in item && item.type === "dropdown") {
                  return (
                    <div key={index} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setGoldenVisaOpen(!goldenVisaOpen)}
                        className={`flex items-center gap-1 text-sm font-sans tracking-wider uppercase transition-colors duration-300 whitespace-nowrap ${
                          isScrolled
                            ? isGoldenVisaActive ? "text-primary" : "text-text-secondary hover:text-primary"
                            : isGoldenVisaActive ? "text-white" : "text-white/80 hover:text-white"
                        }`}
                        aria-expanded={goldenVisaOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown 
                          size={14} 
                          className={`transition-transform duration-200 ${goldenVisaOpen ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      {goldenVisaOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-md shadow-lg py-2 z-50">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => setGoldenVisaOpen(false)}
                              className={`block px-4 py-3 text-sm font-sans tracking-wide transition-colors duration-200 ${
                                location.pathname === subItem.path
                                  ? "text-primary bg-secondary/50"
                                  : "text-text-secondary hover:text-primary hover:bg-secondary/30"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.path}
                    to={item.path!}
                    className={`text-sm font-sans tracking-wider uppercase transition-colors duration-300 whitespace-nowrap ${
                      isScrolled
                        ? location.pathname === item.path ? "text-primary" : "text-text-secondary hover:text-primary"
                        : location.pathname === item.path ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="mt-4 pb-4 flex flex-col space-y-4">
            {navItems.map((item, index) => {
              if ('type' in item && item.type === "dropdown") {
                return (
                  <div key={index} className="space-y-2">
                    <button
                      onClick={() => setGoldenVisaOpen(!goldenVisaOpen)}
                      className={`flex items-center gap-2 text-sm font-sans tracking-wider uppercase transition-colors duration-300 ${
                        isGoldenVisaActive
                          ? "text-primary"
                          : "text-text-secondary hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${goldenVisaOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    {goldenVisaOpen && (
                      <div className="pl-4 space-y-2 border-l-2 border-gold/30">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => {
                              setGoldenVisaOpen(false);
                              setMobileMenuOpen(false);
                            }}
                            className={`block text-sm font-sans tracking-wide transition-colors duration-200 ${
                              location.pathname === subItem.path
                                ? "text-primary"
                                : "text-text-secondary hover:text-primary"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.path}
                  to={item.path!}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-sans tracking-wider uppercase transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-text-secondary hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
