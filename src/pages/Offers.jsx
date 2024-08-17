import React from "react";
import { Compare } from "@/components/ui/compare";
import image1 from '../../public/images/access_img_2.png'
import image2 from '../../public/images/access_img_1.png'

export function OffersComponent() {
  return (
    <div className=" h-[60vh] px-1 md: flex items-center justify-center [perspective:800px] [transform-style:preserve-3d] offers    ">
      <div
        style={{
          transform: "rotateX(10deg) translateZ(90px)",
        }}
        className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
      >
        <Compare
          firstImage={image1}
          secondImage={image2}
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassName="object-cover object-left-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
}
