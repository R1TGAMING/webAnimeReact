import React, { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Swipe({ children }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween= {20}
        breakpoints={{
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        pagination={false}
        modules={[Pagination]}
        className=""
      >
        {children}
      </Swiper>
    </>
  );
}

export default Swipe;
