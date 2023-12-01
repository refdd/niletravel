import Image from "next/image";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";

function CardBlog({
  imgSrc,
  slug,
  slugType,
  metaTitle,
  title,
  description,
  authorImage,
  authorName,
}) {
  return (
    <div className="wrapper cursor-pointer">
      <div className="relative flex flex-col gap-3  shadow-lg bg-[#fff] justify-center items-center rounded-xl overflow-hidden  ">
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
        <div className="flex flex-col gap-3  px-4 pt-5 ">
          {/* title */}
          <h2 className="  text-[#17233e] text-xl md:text-[22px] font-bold cursor-pointer md:hover:text-bsPrimary transition-all ">
            {title}
          </h2>

          {/* description */}
          <div className="">
            <div
              dangerouslySetInnerHTML={{
                __html: description ? description.substring(0, 120) : "",
              }}
              className="text-[#777] text-left leading-6 mb-3 pb-2 border-b border-dashed border-[#f1f1f1f1] "
            ></div>
          </div>
          {/*  */}
          <div className="flex items-center justify-between -mt-4 py-3">
            <div className="flex items-center gap-2">
              <div className="relative w-[60px] h-[60px] ">
                <Image
                  alt={authorName}
                  title={authorName}
                  src={authorImage}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  quality={60}
                  // placeholder="blur"
                  // blurDataURL={modifiedImageUrl}
                  className=" object-contain rounded-full "
                />
              </div>
              <div className=" text-sm font-medium text-bsDark">
                <span>{authorName}</span>
              </div>
            </div>
            <div className="">
              <div className="  group flex justify-center items-center  ">
                <button className=" wrapper  group-hover:text-white bg-[#029e9d] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
                  <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107] -z-10 h-full"></span>
                  read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute mt-2  bottom-0 b-b-width h-[5px] bg-[#029e9d] rounded-b-[10px]"></div>
    </div>
  );
}

export default CardBlog;
