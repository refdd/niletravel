import React from "react";
import AboutusContent from "./AboutusContent";
import AboutUsImage from "./AboutUsImage";

function AboutUsSection() {
  return (
    <div className="container mx-auto px-4 md:px-10 pt-10 ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AboutusContent />
        <AboutUsImage />
      </div>
    </div>
  );
}

export default AboutUsSection;
