import { useRef, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = () => {
  const swiperElRef = useRef(null);

  return (

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

    /* <swiper-container
            ref={swiperElRef}
            slides-per-view="1"
            loop="true"
            speed="500"
            navigation="true"
            pagination="true"
            autoplay={{delay: 1, disableOnInteraction: false}}
            className="banner-carousel"
          >
            <swiper-slide>
              slide 1
            </swiper-slide>
            <swiper-slide>
              slide 2
            </swiper-slide>
            <swiper-slide>
              slide 3
            </swiper-slide>
           
          </swiper-container> */
  );
};

export default Carousel;
