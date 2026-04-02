import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/program", label: "The Program" },
  { path: "/research", label: "Research & Intelligence" },
  { path: "/contact", label: "Contact Us" },
];

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  return (
    <>
      {/* ── Top Bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: 72,
          backgroundColor: isScrolled || isOpen
            ? "hsla(150, 5%, 6%, 0.95)"
            : "transparent",
          backdropFilter: isScrolled || isOpen ? "blur(8px)" : "none",
          borderBottom: isScrolled || isOpen
            ? "1px solid hsl(150, 3%, 17%)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl tracking-widest text-white hover:text-white/80 transition-colors duration-300"
            style={{ fontWeight: 400 }}
          >
            ARGENTINA RESIDENCE
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Contact pill */}
            <Link
              to="/contact"
              className="hidden md:inline-flex transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: 17,
                letterSpacing: "0.35px",
                backgroundColor: "rgb(21, 76, 126)",
                color: "#FFFFFF",
                padding: "16px 32px",
                borderRadius: 300,
              }}
            >
              Contact Us
            </Link>

            {/* Hamburger / Close */}
            <button
              onClick={toggle}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="relative flex flex-col items-center justify-center w-12 h-12 z-[10000]"
            >
              <span
                className="block bg-white rounded-full transition-all duration-300 absolute"
                style={{
                  width: 28,
                  height: 1.5,
                  transform: isOpen
                    ? "rotate(45deg) translateY(0)"
                    : "translateY(-5px)",
                }}
              />
              <span
                className="block bg-white rounded-full transition-all duration-300 absolute"
                style={{
                  width: 28,
                  height: 1.5,
                  opacity: isOpen ? 0 : 1,
                }}
              />
              <span
                className="block bg-white rounded-full transition-all duration-300 absolute"
                style={{
                  width: 28,
                  height: 1.5,
                  transform: isOpen
                    ? "rotate(-45deg) translateY(0)"
                    : "translateY(5px)",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Full-screen overlay ── */}
      <div
        className="fixed inset-0 z-[9999] flex flex-col transition-all duration-[400ms] ease-in-out"
        style={{
          backgroundColor: "hsla(150, 5%, 6%, 0.98)",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {/* Spacer for top bar */}
        <div style={{ height: 72, flexShrink: 0 }} />

        {/* Nav links */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <ul className="list-none p-0 m-0 flex flex-col gap-2 md:gap-4">
            {navLinks.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <li
                  key={item.path}
                  className="transition-all duration-500 ease-out"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
                  }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="inline-block transition-colors duration-300"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "clamp(36px, 5vw, 56px)",
                      fontWeight: 400,
                      color: isActive
                        ? "hsl(45, 29%, 65%)"
                        : "#ffffff",
                      lineHeight: 1.2,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "hsl(45, 29%, 65%)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = isActive
                        ? "hsl(45, 29%, 65%)"
                        : "#ffffff")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Bottom CTA */}
          <div
            className="mt-12 transition-all duration-500 ease-out"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: isOpen ? `${navLinks.length * 50 + 100}ms` : "0ms",
            }}
          >
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-block transition-all duration-300 hover:bg-white hover:text-foreground"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                color: "#ffffff",
                border: "1px solid #ffffff",
                backgroundColor: "transparent",
                padding: "16px 40px",
                textDecoration: "none",
              }}
            >
              Request an Advisory Briefing
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
