export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  date: string; // ISO date e.g. "2026-04-15"
  summary: string;
  body: string; // HTML allowed
  source?: string;
  image?: string;
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
    image: "/decree-524-2025-investment-visa.jpg",
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
    image: "/buenos-aires-foreign-buyer-activity-q1.jpg",
  },
  {
    id: 3,
    slug: "argentina-citizenship-investment-vs-portugal-golden-visa",
    title: "Argentina Citizenship by Investment vs Portugal Golden Visa",
    date: "2026-06-15",
    summary:
      "A detailed comparison of Argentina's direct citizenship pathway under Decree 524/2025 versus Portugal's established residency-by-investment program, evaluating investment thresholds, global mobility, and family inclusion benefits.",
    image: "/argentina-cbi-vs-portugal-golden-visa.jpg",
    body: `
      <p class="mb-6">The global landscape of investment migration is undergoing a significant realignment. As European nations restrict their residency programs, South America is emerging as a competitive alternative. The introduction of the Argentina citizenship by investment program under Decree 524/2025 provides a new option for investors seeking global mobility. This analysis compares the pending Argentine program with the established Portugal Golden Visa, evaluating their respective legal frameworks, investment requirements, and long-term benefits.</p>
      <h2 class="text-3xl font-serif mb-6 mt-12">The Structural Difference: Citizenship versus Residency</h2>
      <p class="mb-6">The most fundamental distinction between the two programs is their legal outcome. The Argentina citizenship by investment versus residency by investment distinction is critical. Argentina's program, as outlined in Decree 524/2025, is a direct citizenship pathway. Approved applicants receive full Argentine citizenship and a passport without a prior residency period. The legal framework mandates a 30-business-day processing window once an application is submitted to the Agencia de Programas de Ciudadanía por Inversión (APCI).</p>
      <p class="mb-6">Conversely, the Portugal Golden Visa is a residency by investment program. It grants a residence permit that allows the holder to live and work in Portugal and travel freely within the Schengen Area. To maintain this residency, the investor must spend an average of seven days per year in Portugal. Citizenship is not immediate; investors become eligible to apply for Portuguese citizenship only after maintaining legal residency for five years and demonstrating basic proficiency in the Portuguese language.</p>
      <h2 class="text-3xl font-serif mb-6 mt-12">Investment Thresholds and Qualifying Assets</h2>
      <p class="mb-6">Both programs aim to attract foreign capital, but their accepted investment vehicles differ significantly.</p>
      <p class="mb-6">The Portugal Golden Visa recently underwent a major legislative overhaul. The Portuguese government eliminated real estate purchases and capital transfers as qualifying investments to address domestic housing affordability concerns. Currently, the primary route is a €500,000 contribution to qualifying Portuguese investment funds or venture capital funds. Other options include job creation or investments in cultural heritage and scientific research, though these are less commonly utilized by international investors.</p>
      <p class="mb-6">The Argentina golden visa minimum investment amount is expected to be approximately $500,000. While the exact operational regulations are pending following the tender cancellation under Resolution 522/2026, the initial decree indicates that funds will be directed toward productive sectors. Anticipated Argentina citizenship by investment approved investments include projects in renewable energy, agribusiness, technology, tourism, and infrastructure. Unlike Portugal, Argentina is expected to allow investments that directly fund physical infrastructure and development projects, providing a different risk and return profile for the investor.</p>
      <h2 class="text-3xl font-serif mb-6 mt-12">Global Mobility and Passport Strength</h2>
      <p class="mb-6">A primary motivation for investment migration is enhanced global mobility. When evaluating the Argentina passport vs EU golden visa, investors must consider both immediate travel access and long-term settlement rights.</p>
      <p class="mb-6">The Portuguese residence permit provides immediate visa-free access to the 27 countries of the Schengen Area. However, it does not function as a passport for international travel outside of Europe. Only after completing the five-year residency period and successfully acquiring Portuguese citizenship does the investor receive a Portuguese passport, which is consistently ranked among the strongest globally, offering visa-free access to over 185 destinations, including the United States.</p>
      <p class="mb-6">The Argentine passport, acquired directly through the investment program, provides immediate visa-free or visa-on-arrival access to over 170 countries. This includes the Schengen Area, the United Kingdom, Japan, and most of Asia. Furthermore, Argentine citizenship grants full freedom of movement and the right to work across Mercosur member states, including Brazil, Uruguay, and Paraguay. While Argentina is currently not part of the U.S. Visa Waiver Program, the government is actively seeking reentry, which would further elevate the passport's utility.</p>
      <h2 class="text-3xl font-serif mb-6 mt-12">Family Inclusion and Generational Planning</h2>
      <p class="mb-6">Both programs offer robust family inclusion, making them suitable for long-term generational planning.</p>
      <p class="mb-6">The Portugal Golden Visa allows the main applicant to include a spouse, dependent children, and dependent parents. Once Portuguese citizenship is acquired after five years, it can be passed down to future generations.</p>
      <p class="mb-6">The Argentina citizenship by investment family application is expected to follow a similar structure. The program will allow the inclusion of a spouse and dependent children under a single application. Because the Argentine program grants immediate citizenship, the benefits of the second passport—including regional mobility and consular protection—are conferred to the entire family unit simultaneously, without the five-year waiting period required by Portugal.</p>
      <h2 class="text-3xl font-serif mb-6 mt-12">Conclusion</h2>
      <p class="mb-6">The choice between the Argentina citizenship by investment vs Portugal golden visa depends on the investor's specific timeline and objectives. Portugal remains a strong option for those seeking eventual EU citizenship and who are willing to navigate a five-year residency period and a language requirement. The Argentine program is designed for investors who prioritize immediate citizenship, rapid processing times, and direct access to a passport with extensive global mobility, without the obligation of physical relocation or extended waiting periods.</p>
    `,
    source: "Program Analysis",
  },
];

export const getNewsArticleBySlug = (slug: string): NewsArticle | undefined =>
  newsArticles.find((article) => article.slug === slug);