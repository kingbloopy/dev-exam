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
    <div className="test">
      <div>
        <h2>{collection_name}</h2>
        <span>{collection_description}</span>
          <a href={linkInfo.link_url}>{linkInfo.link_text}</a>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        modules={[Lazy, Navigation]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
      {images.map((image, i) => (
        <SwiperSlide>
          <img key={i} src={image.src}/>
        </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

export default CollectionSwiper;