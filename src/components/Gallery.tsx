import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery() {
  const photos = [
    "c6.jpeg",
    "c4.jpeg",
    "c2.jpeg",
    "c3.jpeg",
    "c5.jpeg",
    "c7.jpeg",
    "c11.jpeg",
    "c8.jpeg",
    "c9.jpeg",
    "c10.jpeg",
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-full"
    >
      {photos.map((photo, idx) => (
        <SwiperSlide>
          <img
            src={`/assets/${photo}`}
            alt={`Activity ${idx}`}
            className="h-[350px] object-cover mx-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
