"use client";
import React from "react";

function CarouselShcmas({ data }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://www.nilecruisez.com/Egypt/egypt-tour-packages/cairo-and-luxor-tour",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://www.nilecruisez.com/Egypt/river-nile-cruises/ms-mayfair-nile-cruise",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://www.nilecruisez.com/Egypt/christmas-offers/egypt-christmas-tour",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://www.nilecruisez.com/Egypt/honeymoon-travel-packages/egypt-honeymoon-trip",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://www.nilecruisez.com/egypt-travel-blog/Temple-of-Luxor",
      },
    ],
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

export default CarouselShcmas;
