import { Swiper, SwiperSlide } from "swiper/react";


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
import { getDefaultImageAvator } from "@/utility/imageUtility";

export default function SliderMainComponent({ images }: any) { // eslint-disable-line @typescript-eslint/no-explicit-any

  return (
    <div className="w-full order-1  sm:order-2 col-span-3 relative ">
      <Swiper
        className="w-full h-60"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        // navigation={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        effect="slide"

      >
        {images.map((image: any) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
          <SwiperSlide key={image.name}>

            <img
              src={getDefaultImageAvator(image.name)}
              width={500}
              height={500}
              className="w-full h-36 aspect-video"
              alt={image.alt}
            // crossOrigin="anonymous"
            />

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
