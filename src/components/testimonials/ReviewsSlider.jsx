"use client";
import React, { useState } from "react";
import image1 from "../../../public/assets/images/author (1).webp";
import image2 from "../../../public/assets/images/author (2).webp";
import image3 from "../../../public/assets/images/author (3).webp";
import image4 from "../../../public/assets/images/author (4).webp";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
function ReviewsSlider() {
  const [selected, setSelected] = useState(0);

  const handelLeftArrow = () => {
    selected === 0
      ? setSelected(testimonialsData?.length - 1)
      : setSelected((prev) => prev - 1);
  };
  const handelRightArrow = () => {
    selected === testimonialsData?.length - 1
      ? setSelected(0)
      : setSelected((prev) => prev + 1);
  };
  return (
    <div>
      <div className="flex flex-col gap-1 justify-center items-center  md:h-full">
        <div className="relative w-[100px] h-[100px]">
          <Image
            alt={"Reviews"}
            title={"Reviews"}
            src={testimonialsData[selected]?.image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={60}
            // placeholder="blur"
            // blurDataURL={modifiedImageUrl}
            className="rounded-full object-cover"
          />
        </div>
        <div className=" flex flex-col gap-1 justify-center items-center">
          <h5 className=" text-xl font-bold  text-[#029e9d] mt-4">
            {testimonialsData[selected].name}
          </h5>
          <h5 className="text-[#777]">{testimonialsData[selected].status}</h5>
        </div>
        <div className="py-4 mx-2">
          <div className="  ml-7  text-xl  flex  gap-1  text-[#777] capitalize ">
            <FaQuoteRight className="mt-[-10px] text-5xl text-bsPrimary" />{" "}
            <p className=" ">{testimonialsData[selected].review}</p>
          </div>
        </div>
        {/* bottons */}
        <div className="flex gap-3 justify-center items-center ">
          <button
            onClick={handelLeftArrow}
            className=" p-4 bg-[#029e9d] rounded-full transition-all hover:scale-90"
          >
            <AiOutlineLeft className="text-3xl text-white" />{" "}
          </button>
          <button
            onClick={handelRightArrow}
            className=" p-4 bg-[#029e9d] rounded-full transition-all hover:scale-90"
          >
            {" "}
            <AiOutlineRight className="text-3xl text-white" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewsSlider;
const testimonialsData = [
  {
    image: image1,
    review:
      "I've utilize Around Egypt Tours numerous times! Professional Guides/Egyptologists, excellent service, and they go above abd beyond for an enriching experience. You won't regret booking with them! They're the best in Egypt!",
    name: "Typhanie L",
    status: "USA",
  },
  {
    image: image2,
    review:
      "Everything we have in our tour was enjoyable experience the rides were nice with our guided tour was so patience.want to be back again with same guided tour.",
    name: "Kuucela G",
    status: "USA",
  },
  {
    image: image3,
    review:
      "Every sight being Visited with our guide we had fun together . Welcomed so well from airport to Aswan.      ",
    name: "Charles G ",
    status: "USA",
  },
  {
    image: image4,
    review:
      "Gawisch and all those who are a part of his group worked tirelessly to ensure we had a wonderful experience. He ensured that our tour guide was versed in the history of Egypt, has an awesome personality, and attentive to our safety. He was always available to fix any unforeseen circumstances. We could never had a better tour group and I look forward to my next adventure with them.",
    name: "VENEICE C",
    status: "USA",
  },
];
