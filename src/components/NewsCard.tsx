import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import type { NewsArticle } from "@/data/news";

interface NewsCardProps {
  article: NewsArticle;
  index?: number;
}

const NewsCard = ({ article, index = 0 }: NewsCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link
        to={`/industry-news/${article.slug}`}
        className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
      >
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
            {article.source && (
              <span className="text-primary font-medium">{article.source}</span>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>

          <h2 className="text-2xl font-serif mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
            {article.title}
          </h2>

          <p className="text-text-secondary flex-1">{article.summary}</p>
        </div>
      </Link>
    </motion.article>
  );
};

export default NewsCard;