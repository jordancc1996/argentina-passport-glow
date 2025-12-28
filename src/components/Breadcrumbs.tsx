import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const routeLabels: Record<string, string> = {
  '': 'Home',
  'about': 'About Argentina',
  'program': 'Residency Program',
  'faq': 'FAQ',
  'blog': 'Blog',
  'resources': 'Resources',
  'market-insights': 'Market Insights',
  'contact': 'Contact',
  'privacy': 'Privacy Policy',
  'what-is-argentina-golden-visa': 'What is Argentina Golden Visa',
  'investment-requirements': 'Investment Requirements',
  'application-process-timeline': 'Application Timeline',
  'residency-requirements': 'Residency Requirements',
  'family-members-residency': 'Family Members',
  'required-documents': 'Required Documents',
  'work-rights': 'Work Rights',
  'tax-implications': 'Tax Implications',
  'visa-free-travel': 'Visa-Free Travel',
  'maintain-residency-status': 'Maintain Residency',
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  // Don't show breadcrumbs on homepage
  if (pathSegments.length === 0) return null;
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' }
  ];
  
  let currentPath = '';
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      label: routeLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      path: currentPath
    });
  });
  
  // JSON-LD BreadcrumbList schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://www.argentinaresidence.com${item.path === '/' ? '' : item.path}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <nav 
        aria-label="Breadcrumb" 
        className="py-4 px-4 md:px-8 bg-muted/30 border-b border-border"
      >
        <ol className="flex items-center flex-wrap gap-2 text-sm max-w-6xl mx-auto">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                )}
                {isLast ? (
                  <span 
                    className="text-foreground font-medium"
                    aria-current="page"
                  >
                    {index === 0 && <Home className="w-4 h-4 inline mr-1" aria-hidden="true" />}
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    to={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {index === 0 && <Home className="w-4 h-4 inline mr-1" aria-hidden="true" />}
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
