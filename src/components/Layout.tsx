import Navigation from "./Navigation";
import Footer from "./Footer";
import CallToAction from "./CallToAction";

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
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Layout;