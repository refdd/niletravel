import React from "react";

function ProductShcemas({ title, image, description }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    image: image,
    description: description,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      reviewCount: 899,
    },
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

export default ProductShcemas;
