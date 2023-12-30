"use client";
import React from "react";

function ImagesShcemas({ imageUrl, name }) {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    contentUrl: imageUrl,
    creditText: "nile cruisez",
    creator: {
      "@type": "Person",
      name: name,
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

export default ImagesShcemas;
