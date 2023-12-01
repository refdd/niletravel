"use client";
import Image from "next/image";
import React, { useState } from "react";
import expolorImage from "../../../public/assets/images/test.webp";
import { AiFillPlayCircle } from "react-icons/ai";
import dynamic from "next/dynamic";
const VideoExplor = dynamic(() => import("./VideoExplor"));
function ExpolorVideo() {
  const [showvideo, setShowvideo] = useState(false);

  return (
    <div>
      <div className="relative w-full h-[500px] cursor-pointer">
        <Image
          alt={"expolorImage"}
          title={"expolorImage"}
          src={expolorImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          quality={60}
          // placeholder="blur"
          // blurDataURL={modifiedImageUrl}
          className=" object-cover "
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <AiFillPlayCircle
            className="text-7xl text-bsPrimary"
            onClick={() => setShowvideo(true)}
          />
        </div>
      </div>
      {showvideo && <VideoExplor setShowvideo={setShowvideo} />}
    </div>
  );
}

export default ExpolorVideo;
