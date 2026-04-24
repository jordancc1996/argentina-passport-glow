export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  date: string; // ISO date e.g. "2026-04-15"
  summary: string;
  body: string; // HTML allowed
  source?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "decree-524-2025-progress-update",
    title: "Decree 524/2025: Latest Progress on Argentina's Golden Visa Framework",
    date: "2026-04-10",
    summary:
      "Regulators continue to refine the implementation framework for Argentina's anticipated Golden Visa program, with new guidance expected on qualifying investment categories.",
    body: `
      <p class="mb-6">Argentina's Ministry of the Interior has signaled that secondary regulations under Decree 524/2025 are progressing through inter-ministerial review. Industry observers expect clarification on qualifying investment categories, including real estate development, government bonds, and active business creation.</p>
      <h2 class="text-3xl font-serif mb-6 mt-12">What's expected next</h2>
      <p class="mb-6">Final regulatory text is anticipated to address the $500,000 minimum investment threshold (subject to final regulation), maintenance period requirements, and documentation standards for foreign applicants.</p>
      <p class="mb-6">Serious investors are advised to begin organizing source-of-funds documentation and consulting with qualified counsel ahead of the application window opening.</p>
    `,
    source: "Internal Briefing",
  },
  {
    id: 2,
    slug: "buenos-aires-foreign-buyer-activity-q1",
    title: "Foreign Buyer Activity in Buenos Aires Real Estate Climbs in Q1",
    date: "2026-03-28",
    summary:
      "Transaction data from Buenos Aires shows continued growth in foreign buyer participation across Palermo, Recoleta, and Puerto Madero, supported by improved transaction conditions.",
    body: `
      <p class="mb-6">Recent transaction data from the Colegio de Escribanos de la Ciudad de Buenos Aires indicates a measurable uptick in foreign buyer participation across premium neighborhoods. Palermo, Recoleta, and Puerto Madero continue to lead in volume.</p>
      <h2 class="text-3xl font-serif mb-6 mt-12">Drivers of the trend</h2>
      <p class="mb-6">Reduced transaction costs, the gradual return of mortgage availability, and renewed interest from North American and European investors are all contributing factors. The anticipated Golden Visa program is expected to further accelerate this activity.</p>
      <p class="mb-6">Pricing remains favorable relative to comparable global cities, though early signs of selective appreciation have emerged in prime locations.</p>
    `,
    source: "Market Update",
  },
];

export const getNewsArticleBySlug = (slug: string): NewsArticle | undefined =>
  newsArticles.find((article) => article.slug === slug);