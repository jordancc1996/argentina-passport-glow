interface EditorialSectionProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

const EditorialSection = ({ 
  children, 
  className = "", 
  centered = true 
}: EditorialSectionProps) => {
  return (
    <section className={`section-padding ${className}`}>
      <div className={`max-w-4xl mx-auto px-8 ${centered ? 'text-center' : ''}`}>
        {children}
      </div>
    </section>
  );
};

export default EditorialSection;