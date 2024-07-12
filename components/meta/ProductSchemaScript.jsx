export default function ProductSchemaScript({ product }) {
  const formattedData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product?.title,
    image: product?.img_url,
    description: product?.detail,
    sku: product?.SKU,
    mpn: "925872",
    brand: {
      "@type": "Brand",
      name: product?.brand,
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 4,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: "Fred Benson",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.4,
      reviewCount: 89,
    },
    offers: {
      "@type": "Offer",
      url: "https://example.com/anvil",
      priceCurrency: "USD",
      price: product?.price,
      priceValidUntil: "2024-11-20",
      itemCondition: "https://schema.org/UsedCondition",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(formattedData),
        }}
      />
    </>
  );
}
