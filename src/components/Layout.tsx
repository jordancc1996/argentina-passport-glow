import Navigation from "./Navigation";
import Footer from "./Footer";
import ConsultationCTA from "./ConsultationCTA";
import Breadcrumbs from "./Breadcrumbs";
import FloatingAdvisorCTA from "./FloatingAdvisorCTA";

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
      <Footer />
      <FloatingAdvisorCTA />
    </div>
  );
};

export default Layout;