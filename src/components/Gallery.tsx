import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./gallery.css";

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
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
      className="w-full max-w-4xl h-[550px] rounded-lg overflow-hidden"
    >
      {photos.map((photo, idx) => (
        <SwiperSlide>
          <img
            src={`/assets/${photo}`}
            alt={`Activity ${idx}`}
            loading="lazy"
            className="w-full h-full object-cover mx-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
