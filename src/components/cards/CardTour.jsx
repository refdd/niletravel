import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import Link from "next/link";

function CardTour({
  imgSrc,
  slug,
  slugType,
  metaTitle,
  duration,
  title,
  price,
  description,
}) {
  return (
    <div className="wrapper cursor-pointer">
      <div className="relative flex flex-col gap-3  shadow-lg bg-[#fff] justify-center items-center rounded-xl overflow-hidden  ">
        <Link href={`/Egypt/${slugType}/${slug}`} className="w-full h-full">
          <div className="relative w-full h-[267px] md:h-[240px]">
            <Image
              alt={metaTitle}
              title={metaTitle}
              src={imgSrc}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              quality={60}
              // placeholder="blur"
              // blurDataURL={modifiedImageUrl}
              className=" object-cover "
            />
            <div
              style={{
                background: "linear-gradient(to bottom,transparent,#000)",
              }}
              className="absolute top-0 left-0 w-full h-full  opacity-[0.4]"
            ></div>
            <div className="absolute bottom-[-28px] right-3 flex justify-end">
              <div className=" flex justify-center gap-2 items-center bg-[#029e9d] p-3 px-9 rounded-xl">
                <FaRegCalendarAlt className="text-white text-2xl" />
                <span className="text-white font-sans font-medium text-center">
                  {duration} Days
                </span>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-3  px-4 pt-5 ">
          {/* title */}
          <Link href={`/Egypt/${slugType}/${slug}`}>
            <h2 className="  text-[#17233e] text-xl md:text-[22px] font-bold cursor-pointer md:hover:text-bsPrimary transition-all ">
              {title}
            </h2>
          </Link>

          {/* reatiog */}
          <div className="flex space-x-2 items-center  ">
            <BsFillStarFill className="text-bsWarning" />
            <BsFillStarFill className="text-bsWarning" />
            <BsFillStarFill className="text-bsWarning" />
            <BsFillStarFill className="text-bsWarning" />
            <BsFillStarFill className="text-bsWarning" />
            <span className="text-bsDark font-sans">({price - 10})</span>
          </div>
          {/* description */}
          <div className="">
            <p className="text-bsDark text-left leading-6 mb-3 pb-2 border-b border-dashed border-[#f1f1f1f1] ">
              {description.substring(0, 120)} ...
            </p>
          </div>
          <div className=" flex  items-center gap-2 w-full mb-3 px-4">
            <p className="font-bold font-sans  text-xl text-[#029e9d]">
              $ {price}
              <span className="font-thin text-base text-bsDark">
                {" "}
                | Per Person{" "}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute mt-2  bottom-0 b-b-width h-[5px] bg-[#029e9d] rounded-b-[10px]"></div>
    </div>
  );
}

export default CardTour;
