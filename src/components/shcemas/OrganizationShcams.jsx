"use client";
import React from "react";

function OrganizationShcams({}) {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "Around Egypt Tours",
    url: "https://www.nilecruisez.com/",
    logo: "https://www.nilecruisez.com/_next/static/media/logo-new.b01bd2f4.svg",
    aggregateRating: {
      "@type": "AggregateRating",
      bestRating: "5",
      ratingValue: "5",
      reviewCount: "1734",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=100063472283713",
      "https://twitter.com/AroundEgypt",
      "https://plus.google.com/b/116490034668660343534/",
      "https://www.instagram.com/around_egypt_tours/",
      "https://www.tripadvisor.com/Attraction_Review-g294201-d2360117-Reviews-Around_Egypt_Tours_Day_Tours-Cairo_Cairo_Governorate.html",
    ],
  };
  const jsonLdBlog = {
    "@context": "http://schema.org",
    "@type": "Blog",
    url: "https://www.nilecruisez.com/egypt-travel-blog",
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
      />
    </div>
  );
}

export default OrganizationShcams;
