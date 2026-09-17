export type CustomerReview = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  datePublished: string;
  source: "google";
};

/**
 * Alleen echte Google-reviews. Leeg laten tot er geverifieerde reviews zijn.
 * Zodra dit array gevuld is, komt AggregateRating automatisch in de JSON-LD.
 */
export const reviews: CustomerReview[] = [];
