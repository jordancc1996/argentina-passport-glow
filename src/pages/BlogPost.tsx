import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blogData";
import { Button } from "@/components/ui/button";

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
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Argentina Residence",
      "url": "https://www.argentinaresidence.com"
    },
    "url": `https://www.argentinaresidence.com/blog/${post.slug}`
  };

  return (
    <Layout>
      <SEO 
        title={`${post.title} | Argentina Residence Blog`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
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

            <div className="border-t border-border mt-12 pt-8">
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <h3 className="text-xl font-serif mb-3 text-foreground">
                  Ready to Start Your Argentina Residency Journey?
                </h3>
                <p className="text-text-secondary mb-4">
                  Contact us today to learn more about the Argentina residence program and how we can help guide you through the process.
                </p>
                <Button asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            {(previousPost || nextPost) && (
              <nav className="mt-12 pt-8 border-t border-border">
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
