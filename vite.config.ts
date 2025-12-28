import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Generate static HTML entrypoints so routes like /faq and /blog return 200 HTML on
  // hosts without SPA rewrite support.
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),

        about: path.resolve(__dirname, "about/index.html"),
        blog: path.resolve(__dirname, "blog/index.html"),
        contact: path.resolve(__dirname, "contact/index.html"),
        faq: path.resolve(__dirname, "faq/index.html"),
        marketInsights: path.resolve(__dirname, "market-insights/index.html"),
        program: path.resolve(__dirname, "program/index.html"),
        privacy: path.resolve(__dirname, "privacy/index.html"),
        resources: path.resolve(__dirname, "resources/index.html"),

        // FAQ detail pages
        faqWhatIsGoldenVisa: path.resolve(__dirname, "faq/what-is-argentina-golden-visa/index.html"),
        faqInvestmentRequirements: path.resolve(__dirname, "faq/investment-requirements/index.html"),
        faqApplicationTimeline: path.resolve(__dirname, "faq/application-process-timeline/index.html"),
        faqResidencyRequirements: path.resolve(__dirname, "faq/residency-requirements/index.html"),
        faqFamilyMembers: path.resolve(__dirname, "faq/family-members-residency/index.html"),
        faqRequiredDocuments: path.resolve(__dirname, "faq/required-documents/index.html"),
        faqWorkRights: path.resolve(__dirname, "faq/work-rights/index.html"),
        faqTaxImplications: path.resolve(__dirname, "faq/tax-implications/index.html"),
        faqVisaFreeTravel: path.resolve(__dirname, "faq/visa-free-travel/index.html"),
        faqMaintainResidency: path.resolve(__dirname, "faq/maintain-residency-status/index.html"),

        // Blog posts
        blogPostResidence2025: path.resolve(__dirname, "blog/argentina-residence-program-2025/index.html"),
        blogPostTopCities: path.resolve(__dirname, "blog/top-cities-argentina-expats/index.html"),
        blogPostGoldenVisaIntro: path.resolve(__dirname, "blog/argentina-golden-visa-program-introduction/index.html"),
        blogPostCBIAmericanInvestors: path.resolve(__dirname, "blog/argentina-citizenship-investment-american-investors/index.html"),
      },
    },
  },
}));
