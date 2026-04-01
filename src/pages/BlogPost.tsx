import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import ShareButtons from "@/components/ShareButtons";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Find next and previous posts
  const currentIndex = blogPosts.findIndex(p => p.slug === post.slug);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.seoTitle || post.title,
    "description": post.seoDescription || post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Argentina Residence",
      "url": "https://www.argentinaresidence.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.argentinaresidence.com/og-image.jpg"
      }
    },
    "image": post.image ? `https://www.argentinaresidence.com${post.image}` : "https://www.argentinaresidence.com/og-image.jpg",
    "url": `https://www.argentinaresidence.com/blog/${post.slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.argentinaresidence.com/blog/${post.slug}`
    },
    "keywords": post.keywords ? post.keywords.join(", ") : undefined,
    "articleSection": post.category,
    "wordCount": post.content.replace(/<[^>]*>/g, '').split(/\s+/).length
  };

  return (
    <Layout>
      <SEO 
        title={post.seoTitle || post.title}
        description={(post.seoDescription || post.excerpt).substring(0, 155) + ((post.seoDescription || post.excerpt).length > 155 ? '...' : '')}
        canonical={`/blog/${post.slug}`}
        ogImage={post.image}
        schema={schema}
      />
      
      <main className="section-padding">
        <article className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-text-secondary">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8 mb-12"></div>

            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:text-foreground
                prose-p:text-text-secondary prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:text-text-secondary prose-li:text-text-secondary
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Buttons Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <ShareButtons
                url={`https://www.argentinaresidence.com/blog/${post.slug}`}
                title={post.title}
                excerpt={post.excerpt}
              />
            </div>

            <div className="border-t border-border mt-12 pt-8">
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <h3 className="text-xl font-serif mb-3 text-foreground">
                  Ready to Start Your Argentina Residency Journey?
                </h3>
                <p className="text-text-secondary mb-4">
                  Request a principal consultation to discuss the Argentina residence program and how we can guide you through the process.
                </p>
                <Button asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            {/* Related Articles Section */}
            {blogPosts.filter(p => p.slug !== post.slug).length > 0 && (
              <section className="mt-12 pt-8 border-t border-border">
                <h2 className="text-2xl font-serif mb-6 text-foreground">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts
                    .filter(p => p.slug !== post.slug)
                    .slice(0, 3)
                    .map((relatedPost) => (
                      <Link 
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
                      >
                        {relatedPost.image && (
                          <div className="aspect-[16/9] overflow-hidden">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-4">
                          <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                          <h3 className="text-lg font-serif text-foreground group-hover:text-primary transition-colors mt-1 line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-text-secondary mt-2 line-clamp-2">{relatedPost.excerpt}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </section>
            )}

            {(previousPost || nextPost) && (
              <nav className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {previousPost && (
                    <Link 
                      to={`/blog/${previousPost.slug}`}
                      className="group p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                    >
                      <div className="text-sm text-text-secondary mb-2">Previous Article</div>
                      <div className="text-lg font-serif text-foreground group-hover:text-primary transition-colors">
                        {previousPost.title}
                      </div>
                    </Link>
                  )}
                  {nextPost && (
                    <Link 
                      to={`/blog/${nextPost.slug}`}
                      className="group p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors md:text-right"
                    >
                      <div className="text-sm text-text-secondary mb-2">Next Article</div>
                      <div className="text-lg font-serif text-foreground group-hover:text-primary transition-colors">
                        {nextPost.title}
                      </div>
                    </Link>
                  )}
                </div>
              </nav>
            )}
          </motion.div>
        </article>
      </main>
    </Layout>
  );
};

export default BlogPost;
