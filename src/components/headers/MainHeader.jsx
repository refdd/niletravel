import React from "react";
import bg from "../../../public/assets/images/bg.webp";
import Image from "next/image";
async function MainHeader() {
  return (
    <div className="">
      <div className="relative  w-full pt-40 pb-48 md:h-[80vh] md:pt-[235px]">
        <Image
          alt="tourImage"
          src={bg}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          priority
          quality={60}
          // placeholder="blur"
          // blurDataURL={modifiedImageUrl}
          className=" object-cover"
        />
        {/* layout */}
        <div
          className="absolute top-0 left-0 h-full w-full "
          style={{
            background:
              "linear-gradient(270deg, rgba(5, 16, 54, 0.5) 0%, #051036 72.43%)",
            opacity: 0.85,
          }}
        ></div>
        {/* content */}
      </div>
    </div>
  );
}

export default MainHeader;
