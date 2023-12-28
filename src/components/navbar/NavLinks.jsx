import Link from "next/link";
import React from "react";

function NavLinks({}) {
  return (
    <div className="">
      <div className=" flex items-center  justify-between ">
        <ul className="flex items-center flex-1 gap-20">
          <li className="text-lg uppercase text-bsDark transition  hover:text-[#029e9d] ">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg uppercase text-bsDark transition  hover:text-[#029e9d] ">
            <Link href={`/Egypt/egypt-tour-packages`}>Traval Packages</Link>
          </li>
          <li className=" text-lg uppercase  text-bsDark transition  hover:text-[#029e9d] ">
            <Link href={`/Egypt/river-nile-cruises`}>Egypt Cruises</Link>
          </li>
          <li className=" text-lg uppercase text-bsDark transition  hover:text-[#029e9d] ">
            <Link href={`/egypt-travel-blog`}>Blog</Link>
          </li>
        </ul>
        {/* button inquery */}
        <Link href={`/InquireNow`}>
          <div className=" wrapper w-40 flex justify-center items-center  bg-[#029e9d] px-4 py-3 rounded-2xl z-10  overflow-hidden  ">
            <span className="absolute w-0 top-0 left-0 b-b-width bg-[#ffc107]  -z-10 h-full"></span>
            <button className=" text-lg font-medium group-hover:text-white text-white ">
              Inquire now
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
