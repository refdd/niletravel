import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
function InstagramButton() {
  return (
    <div>
      <div className=" flex justify-center items-center w-full h-full cursor-pointer">
        <Link href={`https://www.instagram.com/around_egypt_tours/`}>
          <div className=" flex  gap-2 bg-white px-9 py-4 rounded-xl w-auto ring-2  ">
            <span>
              {" "}
              <BsInstagram size={24} color="#1a1a1a" />{" "}
            </span>
            <h2 className="text-[#1a1a1a]">follow on instagram</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default InstagramButton;
