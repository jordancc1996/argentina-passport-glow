import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import EditorialSection from "@/components/EditorialSection";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogData";
import { useParallax } from "@/hooks/useParallax";
import heroImage from "@/assets/blog-hero-argentina-mountains.jpg";

const Blog = () => {
  const parallaxY = useParallax(-0.3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Argentina Residence Blog",
    "description": "Latest insights, guides, and updates about Argentina residency, investment, and living as an expat in Argentina.",
    "url": "https://argentinaresidence.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Argentina Residence",
      "url": "https://argentinaresidence.com"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "url": `https://argentinaresidence.com/blog/${post.slug}`
    }))
  };

  return (
    <Layout>
      <SEO 
        title="Argentina Residency Blog | Argentina Residence"
        description="Expert insights on Argentina golden visa, real estate investment, and expat life. Stay updated with the latest immigration news."
        canonical="/blog"
        schema={schema}
      />
      
      <main>
        <section className="relative min-h-[50vh] flex items-start justify-center overflow-hidden -mt-10 md:-mt-14">
          {/* Background Image with parallax */}
          <motion.div
            className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})`, y: parallaxY }}
          />
          {/* Top gradient for nav readability */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent z-[1]" />
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center section-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-serif mb-6 text-black drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]">
                Blog
              </h1>
              <p className="text-xl text-black max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]">
                Insights, guides, and updates about Argentina residency and living as an expat. 
                For institutional inquiries, please <Link to="/contact" className="text-black underline hover:no-underline drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]">request a principal consultation</Link>.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-20 md:gap-y-24">
              {[...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="bg-card border border-border/60 rounded-xl overflow-hidden h-full flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.18)] hover:-translate-y-1 hover:border-border transition-all duration-500 ease-out cursor-pointer block"
                  >
                    {post.image && (
                      <div className="aspect-[3/2] overflow-hidden rounded-t-xl">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                        />
                      </div>
                    )}
                    <div className="px-8 md:px-10 pt-8 pb-10 md:pt-10 md:pb-12 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground mb-7">
                        <span className="text-primary font-medium">{post.category}</span>
                        <span className="text-border">·</span>
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                        </time>
                      </div>
                      
                      <h2 className="text-2xl md:text-[1.75rem] font-serif font-light leading-[1.25] tracking-[0.005em] mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h2>
                      
                      <p className="text-text-secondary leading-[1.75] mb-10 flex-1 font-light">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground pt-6 border-t border-border/50">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Blog;
