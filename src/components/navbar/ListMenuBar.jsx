import Link from "next/link";
import React from "react";

function ListMenuBar({ menuBar, dataManu, handleCloseMenu }) {
  return (
    <ul
      className={` ${
        menuBar ? "flex" : "hidden"
      }  lg:hidden flex-col p-6 bg-white border-y overflow-y-auto h-screen pb-40 `}
    >
      <li className="border-b-2  text-left w-full p-2 uppercase  transition-all hover:bg-[#cccccc] ">
        <Link href="/">Home</Link>
      </li>
      <li className="border-b-2  text-left w-full p-2 uppercase transition-all hover:bg-[#cccccc] ">
        <Link href={`/Egypt/egypt-tour-packages`}>Traval Packages</Link>
      </li>
      <li className="border-b-2 text-left w-full p-2 uppercase  transition-all hover:bg-[#cccccc] ">
        <Link href={`/Egypt/river-nile-cruises`}>egypt Cruises</Link>
      </li>
      <li className="border-b-2  text-left w-full p-2 uppercase  transition-all hover:bg-[#cccccc] ">
        <Link href={`/egypt-travel-blog`}>Blog</Link>
      </li>
      <li className="bg-[#029e9d] flex justify-center items-center text-white text-lg  capitalize rounded-xl py-1 mt-2 cursor-pointer">
        <Link href={`/InquireNow`}>Inquire Now</Link>
      </li>
    </ul>
  );
}

export default ListMenuBar;
