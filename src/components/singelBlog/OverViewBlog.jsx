import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function OverViewBlog({ description, author }) {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="px-5">
          <div
            className="text-[#777] text-xl textEditor"
            dangerouslySetInnerHTML={{ __html: description ? description : "" }}
          />
        </div>

        <div className="flex flex-col gap-2 bg-[#029e9d] py-5 rounded-lg md:w-[80%] md:mx-auto  ">
          <div className="flex justify-center items-center ">
            <div className="p-6 rounded-full bg-white">
              <FaQuoteLeft color="#029e9d" className="" />{" "}
            </div>{" "}
          </div>
          <p className="text-[20px] text-white  text-center  px-3">
            “{author.bio}
          </p>
          <span className="text-xl text-white font-bold  capitalize text-center">
            By {author.name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OverViewBlog;
