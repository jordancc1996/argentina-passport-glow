import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import EditorialSection from "@/components/EditorialSection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { faqData } from "@/data/faqData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FAQDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const currentIndex = faqData.findIndex(faq => faq.slug === slug);
  
  if (currentIndex === -1) {
    return <Navigate to="/faq" replace />;
  }
  
  const currentFAQ = faqData[currentIndex];
  const previousFAQ = currentIndex > 0 ? faqData[currentIndex - 1] : null;
  const nextFAQ = currentIndex < faqData.length - 1 ? faqData[currentIndex + 1] : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": currentFAQ.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": currentFAQ.answer
      }
    }]
  };

  const metaTitle = currentFAQ.metaTitle || `${currentFAQ.question} | Argentina Residence`;
  const metaDesc = currentFAQ.metaDescription || (currentFAQ.answer.substring(0, 155) + (currentFAQ.answer.length > 155 ? '...' : ''));

  return (
    <Layout>
      <SEO 
        title={metaTitle}
        description={metaDesc}
        canonical={`/faq/${slug}`}
        schema={schema}
      />
      <div className="pt-20">
        <EditorialSection>
          <div className="max-w-3xl mx-auto">
            <Link to="/faq">
              <Button variant="ghost" className="mb-8 -ml-4">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to FAQs
              </Button>
            </Link>
            
            {currentFAQ.richContent ? (
              <div 
                className="faq-rich-content text-left"
                dangerouslySetInnerHTML={{ __html: currentFAQ.richContent }}
              />
            ) : (
              <>
                <h1 className="font-serif text-2xl-editorial md:text-3xl-editorial mb-8 tracking-wide text-left">
                  {currentFAQ.question}
                </h1>
                
                <div className="text-body text-text-secondary tracking-wide text-left leading-relaxed">
                  {currentFAQ.answer}
                </div>
              </>
            )}
          </div>
        </EditorialSection>

        <EditorialSection className="bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center gap-4">
              <div className="flex-1">
                {previousFAQ && (
                  <Link to={`/faq/${previousFAQ.slug}`}>
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-4">
                      <div className="flex items-start gap-3">
                        <ChevronLeft className="w-5 h-5 mt-1 flex-shrink-0" />
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Previous</div>
                          <div className="font-medium">{previousFAQ.question}</div>
                        </div>
                      </div>
                    </Button>
                  </Link>
                )}
              </div>
              
              <div className="flex-1">
                {nextFAQ && (
                  <Link to={`/faq/${nextFAQ.slug}`}>
                    <Button variant="outline" className="w-full justify-end text-right h-auto py-4">
                      <div className="flex items-start gap-3">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Next</div>
                          <div className="font-medium">{nextFAQ.question}</div>
                        </div>
                        <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0" />
                      </div>
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </EditorialSection>

        <EditorialSection>
          <p className="text-body text-text-secondary tracking-wide">
            Have more questions? We advise a select number of sophisticated investors on Argentine capital deployment and residency acquisition. For personalized guidance, please request a principal consultation.
          </p>
        </EditorialSection>
      </div>
    </Layout>
  );
};

export default FAQDetail;
