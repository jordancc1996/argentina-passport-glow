import heroImage from "@/assets/hero-buenos-aires.jpg";

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
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Argentina landscape"
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-black/20" />
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        <h1 className="font-serif text-hero md:text-6xl lg:text-7xl xl:text-8xl text-white mb-8 tracking-wide">
          {title}
        </h1>
        
        {subtitle && (
          <h2 className="font-serif text-xl-editorial md:text-3xl text-white/90 mb-12 tracking-wide max-w-3xl mx-auto">
            {subtitle}
          </h2>
        )}
        
        {description && (
          <p className="text-body md:text-lg text-white/80 max-w-2xl mx-auto tracking-wide">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;