import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogData";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import { useParallax, useScrollOpacity } from "@/hooks/useParallax";
import heroImage from "../assets/research-intelligence-hero.jpg";

interface SubscribeData {
  firstName: string;
  lastName: string;
  email: string;
}

const Research = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<SubscribeData>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const parallaxY = useParallax(-0.3);
  const opacity = useScrollOpacity(600);

  const onSubmit = async (data: SubscribeData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formcarry.com/s/1vbKuKjPCBx", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, formType: "newsletter-subscribe" }),
      });
      if (response.ok) {
        toast({ title: "Subscribed", description: "You will receive our quarterly intelligence briefings." });
        reset();
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Research and Intelligence",
    description: "Argentina Residence Advisory research, market intelligence, and investment analysis.",
    publisher: {
      "@type": "Organization",
      name: "Argentina Residence",
    },
  };

  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Layout>
      <SEO
        title="Research and Intelligence | Argentina Residence"
        description="In-depth research and market intelligence on Argentine investment, residency programs, and real estate opportunities."
        canonical="/research"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden -mt-[72px] pt-[72px] md:-mt-[88px] md:pt-[88px]">
        <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: parallaxY }}>
          <img src={heroImage} alt="Financial research and market intelligence" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <motion.div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-8 py-20" style={{ opacity }}>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8 tracking-wide leading-tight">
            Argentina Residence Advisory —<br />Research and Intelligence
          </h1>
          <Separator className="mx-auto max-w-[120px] bg-primary h-[1px]" />
        </motion.div>
      </section>

      {/* Article Grid */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {sortedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-sm mb-5">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-90"
                      loading="lazy"
                    />
                  </AspectRatio>
                </div>
                <p className="font-body text-xs uppercase tracking-[0.08em] text-muted-foreground mb-2">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <h2 className="font-serif text-lg md:text-xl text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="max-w-[600px] mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2 tracking-wide">
            Receive Market Intelligence
          </h2>
          <h3 className="font-serif text-lg md:text-xl text-foreground/80 italic mb-8">
            Subscribe
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-10 leading-relaxed max-w-md mx-auto">
            Sign up to receive our quarterly analysis on Argentine investment conditions, regulatory developments, and residency program updates.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="firstName" className="text-xs uppercase tracking-[0.05em] text-muted-foreground mb-2 block font-body">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  {...register("firstName", { required: "Required" })}
                  className="bg-background border-border text-foreground rounded-sm"
                  placeholder="First name"
                />
                {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <Label htmlFor="lastName" className="text-xs uppercase tracking-[0.05em] text-muted-foreground mb-2 block font-body">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  {...register("lastName", { required: "Required" })}
                  className="bg-background border-border text-foreground rounded-sm"
                  placeholder="Last name"
                />
                {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName.message}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-xs uppercase tracking-[0.05em] text-muted-foreground mb-2 block font-body">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Required",
                  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" },
                })}
                className="bg-background border-border text-foreground rounded-sm"
                placeholder="Email address"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-sm font-body text-xs uppercase tracking-[0.08em] font-semibold py-3 h-auto"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
