import React from "react";
// import '../styles/CollectionSwiper-styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Lazy } from 'swiper';
// Import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CollectionSwiper = ({ props }) => {
  const { collection_name, collection_description, images, linkInfo } = props;

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}

export default CollectionSwiper;