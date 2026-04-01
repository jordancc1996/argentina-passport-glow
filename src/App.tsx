import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Program from "./pages/Program";
import GoldenVisaProgram from "./pages/GoldenVisaProgram";
import RealEstateInvestment from "./pages/RealEstateInvestment";
import InvestorEligibility from "./pages/InvestorEligibility";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MarketInsights from "./pages/MarketInsights";
import FAQ from "./pages/FAQ";
import FAQDetail from "./pages/FAQDetail";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/program" element={<Program />} />
          <Route path="/guides/argentina-golden-visa-program" element={<GoldenVisaProgram />} />
          <Route path="/guides/argentina-real-estate-investment" element={<RealEstateInvestment />} />
          <Route path="/argentina-golden-visa-eligibility-checker" element={<InvestorEligibility />} />
          <Route path="/about" element={<About />} />
          <Route path="/market-insights" element={<MarketInsights />} />
          <Route path="/research" element={<Research />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faq/:slug" element={<FAQDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
