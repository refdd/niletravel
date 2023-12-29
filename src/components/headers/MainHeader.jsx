import React from "react";
async function MainHeader() {
  return (
    <div className="">
      <div className="relative  w-full h-[90vh]  md:h-[80vh]  ">
        <video
          className=" w-full h-full object-cover"
          src={"https://api.nilecruisez.com/video/slidervideo.mp4"}
          autoPlay
          loop
          muted
        />
        {/* layout */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000063]  "></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70&]">
          <h1 className="text-white text-xl md:text-4xl font-bold text-center">
            Sail the Majestic Nile with Unforgettable Nile Cruises
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
