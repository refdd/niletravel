import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import Link from "next/link";

function CardListTour({
  imgSrc,
  slug,
  slugType,
  metaTitle,
  duration,
  title,
  price,
  description,
  viewTour,
  destinations,
  tourType,
}) {
  return (
    <div className="wrapper cursor-pointer shadow-lg bg-[#fff] rounded-xl overflow-hidden">
      <div
        className={`relative grid grid-cols-1 ${
          viewTour ? "md:grid-cols-1" : "md:grid-cols-3"
        }  gap-3   justify-center items-center `}
      >
        <div className="">
          <Link href={`/Egypt/${slugType}/${slug}`}>
            <div className="relative w-full h-[267px]">
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
            </div>
          </Link>
        </div>
        <div className="md:col-span-2  px-4 pt-5 pb-3">
          <div
            className={`flex flex-col ${
              viewTour ? "md:flex-col" : "md:flex-row"
            } `}
          >
            <div className="flex flex-col gap-3 ">
              {/* title */}
              <Link href={`/Egypt/${slugType}/${slug}`}>
                <h2 className="  text-[#17233e] text-xl md:text-[22px] font-bold cursor-pointer md:hover:text-bsPrimary transition-all ">
                  {title}
                </h2>
              </Link>
              <div className=" flex gap-3   md:flex-row flex-wrap items-center">
                <p className="text-[16px] text-center md:text-left text-[#777]  ">
                  {" "}
                  {duration} Days
                </p>
                <span className="text-[16px] text-center md:text-left text-[#777]">
                  {" "}
                  {tourType}{" "}
                </span>
                <h4 className="text-[16px] text-center md:text-left text-[#777]  capitalize ">
                  {" "}
                  <span className="text-bsDark font-medium">cities</span> :{" "}
                  {destinations}
                </h4>
              </div>
              <div className="">
                <p className="text-[#029e9d] md:text-left text-[16px] leading-6 mb-3 pb-2  ">
                  {description.substring(0, 120)} ...
                </p>
              </div>
            </div>
            <div
              className={` ${
                viewTour
                  ? "md:w-[100%] felx flex-col "
                  : "md:w-[40%] flex flex-col items-end "
              } `}
            >
              {/*  */}
              <div className="flex space-x-2 items-center  ">
                <BsFillStarFill className="text-bsWarning" />
                <BsFillStarFill className="text-bsWarning" />
                <BsFillStarFill className="text-bsWarning" />
                <BsFillStarFill className="text-bsWarning" />
                <BsFillStarFill className="text-bsWarning" />
                <span className="text-[#777] font-sans">({price - 10})</span>
              </div>
              {/*  */}
              <p className=" text-lg text-[#777]  md:mt-3">
                ({price - 10}) review
              </p>
              {/*  */}
              <div
                className={
                  viewTour
                    ? "flex gap-3  md:flex-row md:items-center"
                    : "flex gap-3  md:flex-col "
                }
              >
                <span className="text-[#777] font-playfair text-lg  ">
                  {" "}
                  Start from
                </span>
                <h4 className=" font-mono font-bold text-[24px] ">
                  {" "}
                  $ {price}
                </h4>
                <p className=" text-sm font-playfair capitalize  text-[#029e9d]">
                  Per Person
                </p>
              </div>

              <Link href={`/Egypt/${slugType}/${slug}`}>
                <div className="w-full py-3 px-10 bg-bsPrimary rounded-md flex justify-center items-center md:mt-3">
                  <button className="text-white font-medium text-lg">
                    See More
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute mt-2  bottom-0 b-b-width h-[5px] bg-[#029e9d] rounded-b-[10px]"></div>
    </div>
  );
}

export default CardListTour;
