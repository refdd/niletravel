import React from "react";
async function MainHeader() {
  return (
    <div className="">
      <div className="relative  w-full h-[224px]  md:h-[80vh]  ">
        <video
          className=" w-full h-full object-cover"
          src={"https://api.nilecruisez.com/video/slidervideo.mp4"}
          autoPlay
          loop
          muted
        />
        {/* layout */}
        <div className="absolute top-0 left-0 w-full h-full bg-[##0000005e]  "></div>
      </div>
    </div>
  );
}

export default MainHeader;
