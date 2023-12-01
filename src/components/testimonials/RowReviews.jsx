import React from "react";
import dynamic from "next/dynamic";
const ImageReviews = dynamic(() => import("./ImageReviews"));
const ReviewsSlider = dynamic(() => import("./ReviewsSlider"));
function RowReviews() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2">
        <ReviewsSlider />
        <ImageReviews />
      </div>
    </div>
  );
}

export default RowReviews;
