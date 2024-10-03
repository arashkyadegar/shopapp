import { Swiper, SwiperSlide } from "swiper/react";

import Image from 'next/image'
import 'swiper/swiper-bundle.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import React from "react";
import {
  Navigation,
  Pagination,
  Autoplay
} from "swiper/modules";
import getDefaultImageAvator from "@/utility/imageUtility";

export default function SliderBrandComponent({ images }: any) { // eslint-disable-line @typescript-eslint/no-explicit-any

  return (
    <div className="w-full  col-span-3 relative bg-transparent">
      <Swiper
        className="w-full h-60"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        //  navigation={true}
        autoplay={true}
        loop={true}
        effect="slide"
      >
        {images.map((image: any) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
          <SwiperSlide key={image.image}>
            <Image
              src={getDefaultImageAvator(image.image)}
              alt={image.name}
              width={500}
              height={500}
            />
            {/* <img
              src={getDefaultImageAvator(image.image)}
              width={500}
              height={500}
              className="w-full h-36 aspect-video  bg-transparent"
              alt={image.name}
            // crossOrigin="anonymous"
            /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
