import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/program", label: "The Program" },
  { path: "/research", label: "Research & Intelligence" },
];

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "border-b border-[hsl(var(--nav-border))]"
          : "border-b border-transparent"
      }`}
      style={{
        backgroundColor:
          isScrolled || mobileMenuOpen
            ? "hsla(var(--nav-bg-dark) / 0.95)"
            : "transparent",
        backdropFilter: isScrolled || mobileMenuOpen ? "blur(8px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-base md:text-xl tracking-widest text-white hover:text-white/80 transition-colors duration-300 whitespace-nowrap"
          style={{ maxHeight: 40 }}
        >
          ARGENTINA RESIDENCE
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <div className="flex items-center" style={{ gap: "8px" }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative whitespace-nowrap transition-colors duration-300"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    fontSize: "17px",
                    letterSpacing: "0.35px",
                    color: isActive
                      ? "hsl(var(--text-cream))"
                      : "hsl(var(--text-cream) / 0.7)",
                    padding: "8px 16px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "hsl(var(--text-cream))")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isActive
                      ? "hsl(var(--text-cream))"
                      : "hsl(var(--text-cream) / 0.7)")
                  }
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px"
                      style={{
                        width: "calc(100% - 32px)",
                        backgroundColor: "hsl(var(--text-cream))",
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Contact Us Pill Button */}
            <Link
              to="/contact"
              className="transition-all duration-300 hover:opacity-90 ml-2"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "17px",
                letterSpacing: "0.35px",
                backgroundColor: "#164D80",
                color: "#FFFFFF",
                padding: "16px 32px",
                borderRadius: "300px",
                border: "none",
              }}
            >
              Contact Us
            </Link>
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </div>

      {/* Mobile Slide-in Menu */}
      {isMobile && (
        <div
          className={`fixed top-[72px] right-0 h-[calc(100vh-72px)] w-72 transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: "hsl(var(--nav-bg-dark))" }}
        >
          <div className="flex flex-col py-6 px-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center transition-colors duration-300"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    fontSize: "17px",
                    letterSpacing: "0.35px",
                    color: isActive
                      ? "hsl(var(--text-cream))"
                      : "hsl(var(--text-cream) / 0.7)",
                    height: "48px",
                    borderBottom: isActive
                      ? "1px solid hsl(var(--text-cream))"
                      : "none",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 text-center transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "17px",
                letterSpacing: "0.35px",
                backgroundColor: "#164D80",
                color: "#FFFFFF",
                padding: "16px 32px",
                borderRadius: "300px",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
