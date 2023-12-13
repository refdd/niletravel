import React from "react";
import bg from "../../../public/assets/images/bg.webp";
async function MainHeader() {
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${bg?.src})` }}
        className="relative  w-full  pt-[120px] md:pt-[370px] pb-[480px] bg-center bg-no-repeat bg-cover  "
      >
        {/* layout */}
        <div
          className="absolute top-0 left-0 h-[98%] w-full "
          style={{
            background:
              "linear-gradient(270deg, rgba(5, 16, 54, 0.5) 0%, #4037b833 72.43%)",
            opacity: 0.85,
          }}
        ></div>
      </div>
    </div>
  );
}

export default MainHeader;
