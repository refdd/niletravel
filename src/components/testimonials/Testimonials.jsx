import React from "react";
import dynamic from "next/dynamic";
const HeaderSections = dynamic(() => import("../headers/HeaderSections"));
const RowReviews = dynamic(() => import("./RowReviews"));

function Testimonials() {
  return (
    <div className=" container mx-auto mt-20 px-4">
      <HeaderSections
        title="Our Testimonials"
        partOne="Good Reviews By "
        partTwo="Clients"
        decs="Around Egypt Tours rated 'excellent' by hundreds of travelers on TripAdvisor.
        "
      />
      <RowReviews />
    </div>
  );
}

export default Testimonials;
