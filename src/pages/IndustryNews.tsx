import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import NewsCard from "@/components/NewsCard";
import { motion } from "framer-motion";
import { newsArticles } from "@/data/news";

const IndustryNews = () => {
  const sorted = [...newsArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Layout>
      <SEO
        title="Industry News | Argentina Residence"
        description="Latest news and regulatory updates on Argentina's Golden Visa program, residency-by-investment, and the Buenos Aires investment landscape."
        canonical="/industry-news"
      />

      <main>
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-serif mb-6 text-foreground">
                Industry News
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Regulatory updates, market briefings, and the latest developments shaping Argentina's residency-by-investment landscape.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-32 pt-0">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16 md:gap-y-20">
              {sorted.map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default IndustryNews;