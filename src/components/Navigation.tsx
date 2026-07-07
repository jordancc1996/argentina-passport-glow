import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/program", label: "The Program" },
  { path: "/research", label: "Research and Intelligence" },
  { path: "/industry-news", label: "Industry News" },
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
    document.body.style.overflow = isOpen || isAdvisorOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen, isAdvisorOpen]);

  useEffect(() => {
    setIsAdvisorOpen(false);
  }, [location.pathname]);

  const handleAdvisorSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setAdvisorSubmitting(true);
    try {
      await fetch("https://formcarry.com/s/1vbKuKjPCBx", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setAdvisorSubmitted(true);
      form.reset();
    } catch {
      // no-op; keep modal open so user can retry
    } finally {
      setAdvisorSubmitting(false);
    }
  };

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
            {/* Speak to an Advisor — high-contrast gold CTA */}
            <button
              type="button"
              onClick={() => { setAdvisorSubmitted(false); setIsAdvisorOpen(true); }}
              className="hidden md:inline-flex transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: 17,
                letterSpacing: "0.35px",
                backgroundColor: "hsl(45, 78%, 52%)",
                color: "#0F1210",
                padding: "16px 32px",
                borderRadius: 300,
                border: "none",
                cursor: "pointer",
              }}
            >
              Speak to an Advisor
            </button>

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

      {/* ── Backdrop ── */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className="fixed inset-0 z-[9998] transition-opacity duration-[250ms] ease-in-out"
        style={{
          backgroundColor: "hsla(150, 5%, 4%, 0.55)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      />

      {/* ── Left slide-out sidebar ── */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        className="fixed top-0 left-0 h-full z-[9999] flex flex-col transition-transform duration-[250ms] ease-in-out"
        style={{
          width: "min(340px, 88vw)",
          backgroundColor: "hsla(150, 5%, 6%, 0.98)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRight: "1px solid hsla(45, 29%, 65%, 0.18)",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          boxShadow: isOpen ? "0 0 60px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Spacer for top bar */}
        <div style={{ height: 72, flexShrink: 0 }} />

        {/* Gold hairline divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(to right, transparent, hsla(45, 29%, 65%, 0.35), transparent)",
            marginInline: 32,
          }}
        />

        {/* Nav links */}
        <nav className="flex-1 flex flex-col px-8 pt-10">
          <ul className="list-none p-0 m-0 flex flex-col">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path} className="py-1">
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block transition-opacity duration-[250ms] ease-in-out hover:opacity-70"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 22,
                      fontWeight: 400,
                      letterSpacing: "0.01em",
                      color: isActive
                        ? "hsl(45, 29%, 65%)"
                        : "rgba(255,255,255,0.92)",
                      lineHeight: 1.4,
                      textDecoration: "none",
                      paddingBlock: 10,
                    }}
                  >
                    {item.label}
                  </Link>
                  <div
                    style={{
                      height: 1,
                      backgroundColor: "hsla(45, 29%, 65%, 0.14)",
                    }}
                  />
                </li>
              );
            })}
          </ul>

          {/* Bottom CTA */}
          <div className="mt-auto pb-10 pt-12">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-block w-full text-center transition-all duration-[250ms] ease-in-out hover:bg-white hover:text-foreground"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.92)",
                border: "1px solid hsla(45, 29%, 65%, 0.5)",
                backgroundColor: "transparent",
                padding: "14px 28px",
                textDecoration: "none",
              }}
            >
              Explore Your Options
            </Link>
          </div>
        </nav>
      </aside>

      {/* ── Speak to an Advisor modal ── */}
      {isAdvisorOpen && (
        <div
          className="fixed inset-0 z-[10001] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Speak to an advisor"
        >
          <div
            onClick={() => setIsAdvisorOpen(false)}
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundColor: "hsla(150, 5%, 4%, 0.7)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          />
          <div
            className="relative w-full max-w-md rounded-lg"
            style={{
              backgroundColor: "hsl(150, 5%, 8%)",
              border: "1px solid hsla(45, 29%, 65%, 0.25)",
              padding: "40px 32px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
            }}
          >
            <button
              type="button"
              onClick={() => setIsAdvisorOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-4 text-white/70 hover:text-white"
              style={{ fontSize: 24, background: "none", border: "none", cursor: "pointer" }}
            >
              ×
            </button>

            {advisorSubmitted ? (
              <div className="text-center">
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 24,
                    color: "hsl(45, 29%, 65%)",
                    marginBottom: 12,
                  }}
                >
                  Thank you
                </h2>
                <p style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.6 }}>
                  An advisor will reach out shortly to schedule your complimentary call.
                </p>
              </div>
            ) : (
              <>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 26,
                    color: "#FFFFFF",
                    marginBottom: 8,
                  }}
                >
                  Speak to an Advisor
                </h2>
                <p style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.5, marginBottom: 24 }}>
                  Share a few details and we'll arrange a complimentary consultation.
                </p>
                <form onSubmit={handleAdvisorSubmit} className="flex flex-col gap-3">
                  <input type="hidden" name="_source" value="Header — Speak to an Advisor" />
                  <input
                    required
                    name="first_name"
                    placeholder="First name"
                    className="w-full"
                    style={inputStyle}
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full"
                    style={inputStyle}
                  />
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full"
                    style={inputStyle}
                  />
                  <button
                    type="submit"
                    disabled={advisorSubmitting}
                    style={{
                      marginTop: 8,
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      fontSize: 15,
                      letterSpacing: "0.35px",
                      backgroundColor: "hsl(45, 78%, 52%)",
                      color: "#0F1210",
                      padding: "14px 24px",
                      borderRadius: 300,
                      border: "none",
                      cursor: advisorSubmitting ? "not-allowed" : "pointer",
                      opacity: advisorSubmitting ? 0.7 : 1,
                    }}
                  >
                    {advisorSubmitting ? "Sending…" : "Book My Free Call"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const inputStyle: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: 15,
  color: "#FFFFFF",
  backgroundColor: "hsla(0, 0%, 100%, 0.04)",
  border: "1px solid hsla(45, 29%, 65%, 0.25)",
  borderRadius: 6,
  padding: "12px 14px",
  outline: "none",
};

export default Navigation;
