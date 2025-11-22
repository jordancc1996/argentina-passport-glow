import heroImage from "@/assets/hero-aerial-buenos-aires.jpg";
import { motion } from 'framer-motion';
import { useParallax, useScrollOpacity } from '@/hooks/useParallax';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage = heroImage,
  overlay = true 
}: HeroProps) => {
  const parallaxY = useParallax(-0.3);
  const opacity = useScrollOpacity(600);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 scale-110"
        style={{ y: parallaxY }}
      >
        <img
          src={backgroundImage}
          alt="Argentina landscape"
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-black/20" />
        )}
      </motion.div>
      
      {/* Content with Parallax Effects */}
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-8"
        style={{ opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1 
          className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-6 md:mb-8 tracking-wide leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.h2 
            className="font-serif text-lg sm:text-xl md:text-3xl text-white/90 mb-8 md:mb-12 tracking-wide max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {subtitle}
          </motion.h2>
        )}
        
        {description && (
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;