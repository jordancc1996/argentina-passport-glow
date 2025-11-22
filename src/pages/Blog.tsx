import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import EditorialSection from "@/components/EditorialSection";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogData";
import heroImage from "@/assets/blog-hero-argentina-mountains.jpg";

const Blog = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Argentina Residence Blog",
    "description": "Latest insights, guides, and updates about Argentina residency, investment, and living as an expat in Argentina.",
    "url": "https://www.argentinaresidence.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Argentina Residence",
      "url": "https://www.argentinaresidence.com"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "url": `https://www.argentinaresidence.com/blog/${post.slug}`
    }))
  };

  return (
    <Layout>
      <SEO 
        title="Blog | Argentina Residence Insights & Guides"
        description="Read the latest insights, guides, and updates about Argentina residency by investment, living in Argentina, market trends, and expat lifestyle."
        canonical="/blog"
        schema={schema}
      />
      
      <main>
        <section className="relative min-h-[50vh] flex items-start justify-center overflow-hidden -mt-10 md:-mt-14">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          
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
                For detailed inquiries, please <Link to="/contact" className="text-black underline hover:no-underline drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]">contact us</Link>.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col hover:border-primary transition-colors duration-300">
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                        <span className="text-primary font-medium">{post.category}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </time>
                        </div>
                      </div>
                      
                      <Link to={`/blog/${post.slug}`}>
                        <h2 className="text-2xl font-serif mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h2>
                      </Link>
                      
                      <p className="text-text-secondary mb-6 flex-1">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-text-secondary">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
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
