import React from "react";
import imageAboutus from "../../../public/assets/images/travel.webp";
import Image from "next/image";
function ContactImage() {
  return (
    <div>
      <div className="relative w-full h-[500px]">
        <Image
          alt={"AboutUsImae"}
          title={"AboutUsImae"}
          src={imageAboutus}
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

export default ContactImage;
