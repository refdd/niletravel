import React from "react";

async function MainHeader() {
  return (
    <div className="">
      <div className="relative  w-full h-[224px]  md:h-[100vh]  ">
        <video
          className=" w-full h-full object-cover"
          src={"assets/slidervideo.mp4"}
          autoPlay
          loop
          muted
        />
        {/* layout */}
        <div
          className="absolute top-0 left-0 h-full w-full "
          style={{
            background:
              "linear-gradient(270deg, rgba(5, 16, 54, 0.5) 0%, #3685fb33 72.43%)",
            opacity: 0.85,
          }}
        ></div>
      </div>
    </div>
  );
}

export default MainHeader;
