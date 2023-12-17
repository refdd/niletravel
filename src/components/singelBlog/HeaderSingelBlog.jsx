import Image from "next/image";
import React from "react";
import { BsClock } from "react-icons/bs";
import { FaComment, FaUser } from "react-icons/fa";

function HeaderSingelBlog({ title, updated_at, author, image }) {
  return (
    <div className="container mx-auto px-4 md:px-10 pt-7">
      <div className="flex flex-col gap-4   md:gap-7 ">
        <h1 className="text-center text-[#17233e]  font-bold text-2xl capitalize  md:text-4xl md:text-left  ">
          {title}
        </h1>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start text-[#777] text-lg   capitalize">
          <span className="flex items-center gap-2">
            {" "}
            <BsClock /> Posted On :{updated_at}
          </span>
          <span className="flex items-center gap-1">
            {" "}
            <FaUser /> {author.name} <FaComment />
            50
          </span>
        </div>
        <div className=" w-full mx-auto  h-48 md:h-[600px] relative bg-white rounded-lg">
          <Image
            alt={"single Image blog"}
            title={"single Image blog"}
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            // placeholder="blur"
            // blurDataURL={modifiedImageUrl}
            className=" object-cover  rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderSingelBlog;
