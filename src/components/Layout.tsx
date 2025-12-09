import Navigation from "./Navigation";
import Footer from "./Footer";
import GoldenVisaApplicationCTA from "./GoldenVisaApplicationCTA";
import ConsultationCTA from "./ConsultationCTA";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-14 md:pt-20">
        {children}
      </main>
      <ConsultationCTA />
      <GoldenVisaApplicationCTA />
      <Footer />
    </div>
  );
};

export default Layout;