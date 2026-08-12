import { faqs, services, site } from "@/content";

export function buildStructuredData() {
  const business = {
    "@type": "ProfessionalService",
    "@id": `${site.siteUrl}#studio`,
    name: site.brand.name,
    description: site.brand.description,
    url: site.siteUrl,
    parentOrganization: { "@type": "Organization", name: site.brand.company },
    sameAs: site.social.map((link) => link.href),
    priceRange: "Project-based",
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [business, faqPage],
  };
}
