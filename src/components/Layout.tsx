import Navigation from "./Navigation";
import Footer from "./Footer";
import GoldenVisaApplicationCTA from "./GoldenVisaApplicationCTA";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <GoldenVisaApplicationCTA />
      <Footer />
    </div>
  );
};

export default Layout;