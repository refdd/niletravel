import Image from "next/image";
import React from "react";

function CardPartner({ imgSrc }) {
  return (
    <div>
      <div className="relative w-full h-[90px]">
        <Image
          alt={"images partners"}
          title={"images partners"}
          src={imgSrc}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          quality={60}
          // placeholder="blur"
          // blurDataURL={modifiedImageUrl}
          className=" object-contain "
        />
      </div>
    </div>
  );
}

export default CardPartner;
