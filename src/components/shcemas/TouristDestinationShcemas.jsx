import React from "react";

function TouristDestinationShcemas({ title, image, description, urlTour }) {
  const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "TouristDestination",
    description: description,
    image: image,
    name: title,
    touristType: {
      "@type": "Audience",
      audienceType: "Cultural tourism",
    },
    url: urlTour,
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

export default TouristDestinationShcemas;
