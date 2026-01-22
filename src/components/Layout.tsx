import Navigation from "./Navigation";
import Footer from "./Footer";
import GoldenVisaApplicationCTA from "./GoldenVisaApplicationCTA";
import ConsultationCTA from "./ConsultationCTA";
import Breadcrumbs from "./Breadcrumbs";

interface LayoutProps {
  children: React.ReactNode;
  showBreadcrumbs?: boolean;
}

const Layout = ({ children, showBreadcrumbs = true }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {showBreadcrumbs && <Breadcrumbs />}
        {children}
      </main>
      <ConsultationCTA />
      <GoldenVisaApplicationCTA />
      <Footer />
    </div>
  );
};

export default Layout;