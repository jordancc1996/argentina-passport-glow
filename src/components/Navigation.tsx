import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
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
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-start justify-between">
          {/* Brand */}
          <Link 
            to="/" 
            className="text-xl font-serif tracking-widest text-primary hover:text-text-secondary transition-colors duration-300 cursor-pointer pl-4"
          >
            ARGENTINA RESIDENCE
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-12 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;