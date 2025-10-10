import Layout from "@/components/Layout";
import EditorialSection from "@/components/EditorialSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the Argentina Golden Visa program?",
      answer: "The Argentina Golden Visa is an investment-based residency program that allows foreign nationals to obtain temporary residency by making qualifying investments in Argentina. This provides a pathway to permanent residency and eventually citizenship."
    },
    {
      question: "What are the investment requirements?",
      answer: "Investment options include real estate purchases, government bonds, business investments, or establishing a company in Argentina. The minimum investment amounts vary by category, typically starting from $150,000 USD for real estate investments."
    },
    {
      question: "How long does the application process take?",
      answer: "The initial residency application typically takes 6-12 months to process, depending on the investment type and documentation completeness. After obtaining temporary residency, you can apply for permanent residency after maintaining your investment for the required period."
    },
    {
      question: "Do I need to live in Argentina full-time?",
      answer: "No, you don't need to live in Argentina full-time. However, you must visit the country at least once per year to maintain your residency status. Extended absences may affect your eligibility for permanent residency or citizenship."
    },
    {
      question: "Can my family members also obtain residency?",
      answer: "Yes, your spouse and dependent children under 21 can be included in your application. Each family member will need to provide the required documentation and may need to make additional investments depending on the program requirements."
    },
    {
      question: "What documents do I need to apply?",
      answer: "Required documents typically include a valid passport, birth certificate, marriage certificate (if applicable), criminal background check, proof of investment funds, and medical certificates. All foreign documents must be apostilled and officially translated to Spanish."
    },
    {
      question: "Can I work in Argentina with this residency?",
      answer: "Yes, temporary and permanent residents have the right to work in Argentina. You can be employed by local companies or operate your own business without additional work permits."
    },
    {
      question: "What are the tax implications?",
      answer: "Argentina residents are subject to taxation on their worldwide income. However, there are various tax treaties and planning strategies available. It's recommended to consult with a qualified tax advisor familiar with both Argentine tax law and your home country's regulations."
    },
    {
      question: "Can I travel visa-free with Argentine residency?",
      answer: "Argentine residency allows you to live and work in Argentina, but visa-free travel depends on your passport. However, Argentine permanent residents can eventually apply for citizenship, and an Argentine passport provides visa-free access to over 170 countries."
    },
    {
      question: "How do I maintain my residency status?",
      answer: "To maintain temporary residency, you must keep your qualifying investment active and visit Argentina at least once per year. For permanent residency, you need to demonstrate continuous residency and compliance with investment requirements for the specified period."
    }
  ];

  return (
    <Layout>
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
          <div className="max-w-3xl mx-auto text-left">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left font-serif text-lg-editorial tracking-wide hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-text-secondary tracking-wide pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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