import Layout from "@/components/Layout";
import EditorialSection from "@/components/EditorialSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { faqData } from "@/data/faqData";
import { ChevronRight } from "lucide-react";

const FAQ = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Layout>
      <SEO 
        title="Argentina Residency FAQ | Common Questions Answered"
        description="Answers to frequently asked questions about Argentina residency by investment. Learn about requirements, timeline, costs, and process."
        canonical="/faq"
        schema={schema}
      />
      <div className="pt-20">
        <EditorialSection>
          <h1 className="font-serif text-hero mb-8 tracking-wide">
            Frequently Asked Questions
          </h1>
          <p className="text-editorial text-text-secondary mb-12 tracking-wide">
            Common questions about Argentina's residency by investment program
          </p>
        </EditorialSection>

        <EditorialSection className="bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {faqData.map((faq) => (
                <Link 
                  key={faq.slug} 
                  to={`/faq/${faq.slug}`}
                  className="block"
                >
                  <div className="group p-6 bg-background/50 rounded-lg border border-border hover:border-primary transition-all hover:shadow-md">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-serif text-lg-editorial tracking-wide group-hover:text-primary transition-colors text-left flex-1">
                        {faq.question}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </EditorialSection>

        <EditorialSection>
          <p className="text-body text-text-secondary tracking-wide">
            Have more questions? This is a free informational resource. Please conduct your own research and consult with qualified immigration and legal professionals for personalized advice.
          </p>
        </EditorialSection>
      </div>
    </Layout>
  );
};

export default FAQ;