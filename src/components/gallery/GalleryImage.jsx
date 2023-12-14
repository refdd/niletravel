import Image from "next/image";
import React from "react";

function GalleryImage({ imgSrc, metaTitle, galleryIndex }) {
  return (
    <div className={`"relative w-full h-[300px] md:h-[500px] rounded-lg`}>
      <Image
        src={imgSrc}
        alt={metaTitle ? metaTitle : "imgaeGallery"}
        title={metaTitle ? metaTitle : "imgaeGallery"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
        priority={galleryIndex == 0 ? true : false}
        quality={60}
        placeholder="blur"
        blurDataURL={imgSrc}
        className="rounded-lg object-cover"
      />
    </div>
  );
}

export default GalleryImage;
