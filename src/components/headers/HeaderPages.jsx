import Link from "next/link";
import React from "react";
import bg from "../../../public/assets/images/bg.webp";
import bgBottom from "../../../public/assets/images/shape8.png";
import Image from "next/image";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
function HeaderPages({ typeList, bgtour, listSlug, singleSlug }) {
  return (
    <div
      //   style={{ backgroundImage: `url(${bg.src})` }}
      className="relative w-full h-[400px] md:h-[700px]"
    >
      <Image
        alt={"image header pages"}
        title={"image header pages"}
        src={bgtour ? bgtour : bg}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
        priority
        // placeholder="blur"
        // blurDataURL={modifiedImageUrl}
        className=""
      />
      {/* layout */}
      <div className="absolute top-0 left-0 bottom-0 w-full h-full bg-[#0000002e]  "></div>
      {/* content  */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/1 w-full flex justify-center flex-col ">
        <h1 className="uppercase text-3xl md:text-5xl text-white font-bold font-playfair text-center ">
          {typeList}
        </h1>
        {/* <p className="text-white font-playfair capitalize text-xl text-center">
          <Link href={"/"}>
            <button className="  cursor-pointer text-[#029e9d]  ">Home</button>
          </Link>
          | {typeList}{" "}
        </p> */}
        <Breadcrumb
          listSlug={listSlug}
          slug={singleSlug}
          pageWithHeader={true}
        />
      </div>

      {/* bottom image */}
      <div
        style={{ backgroundImage: `url(${bgBottom.src})` }}
        className=" absolute -bottom-1  w-full h-24 bg-contain bg-top  mt-[-28px] bg-repeat-x z-10 rotate-[180deg]"
      ></div>
    </div>
  );
}

export default HeaderPages;
