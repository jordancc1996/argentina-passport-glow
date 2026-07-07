import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

/**
 * Floating "Speak to an Advisor" FAB.
 * - Fixed bottom-right on desktop, bottom-center on mobile.
 * - Uses the same primary color tokens as the hero CTA (bg-primary/text-primary-foreground).
 * - Opens a lightweight lead-capture modal that posts to FormCarry.
 */
const FloatingAdvisorCTA = () => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    try {
      await fetch("https://formcarry.com/s/1vbKuKjPCBx", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setSubmitted(true);
      form.reset();
    } catch {
      /* keep modal open for retry */
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes advisor-pulse {
          0% { transform: scale(1); opacity: 0.55; }
          70% { transform: scale(2.4); opacity: 0; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        .advisor-pulse-ring {
          animation: advisor-pulse 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      <button
        type="button"
        onClick={() => { setSubmitted(false); setOpen(true); }}
        aria-label="Speak to an advisor"
        className="fixed z-[9990] flex items-center gap-2.5 font-sans font-medium bg-primary text-primary-foreground rounded-full
          px-6 py-4 text-base
          hover:scale-[1.03] hover:shadow-[0_8px_28px_rgba(0,0,0,0.28)]
          transition-all duration-300
          bottom-6 right-6
          shadow-[0_6px_20px_rgba(0,0,0,0.2)]
          max-[480px]:px-3.5 max-[480px]:py-3.5 max-[480px]:bottom-4 max-[480px]:right-4"
      >
        <span className="relative flex items-center justify-center w-5 h-5">
          <span className="absolute inset-0 rounded-full bg-white/40 advisor-pulse-ring" />
          <span className="relative w-2.5 h-2.5 rounded-full bg-white" />
        </span>
        <MessageCircle className="w-5 h-5 max-[480px]:hidden" strokeWidth={2} />
        <span className="max-[480px]:hidden">Speak to an advisor</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[10001] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Speak to an advisor"
        >
          <div
            onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-4 text-white/70 hover:text-white"
              style={{ fontSize: 24, background: "none", border: "none", cursor: "pointer" }}
            >
              ×
            </button>

            {submitted ? (
              <div className="text-center">
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 24, color: "hsl(45, 29%, 65%)", marginBottom: 12 }}>
                  Thank you
                </h2>
                <p style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.6 }}>
                  An advisor will reach out shortly to schedule your complimentary call.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 26, color: "#FFFFFF", marginBottom: 8 }}>
                  Speak to an Advisor
                </h2>
                <p style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.5, marginBottom: 24 }}>
                  Share a few details and we'll arrange a complimentary consultation.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input type="hidden" name="_source" value="Floating CTA — Speak to an Advisor" />
                  <input required name="first_name" placeholder="First name" style={inputStyle} />
                  <input required type="email" name="email" placeholder="Email" style={inputStyle} />
                  <input required type="tel" name="phone" placeholder="Phone number" style={inputStyle} />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-300"
                    style={{
                      marginTop: 8,
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      fontSize: 13,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      padding: "14px 24px",
                      border: "none",
                      cursor: submitting ? "not-allowed" : "pointer",
                      opacity: submitting ? 0.7 : 1,
                    }}
                  >
                    {submitting ? "Sending…" : "Book My Free Call"}
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
  width: "100%",
};

export default FloatingAdvisorCTA;
