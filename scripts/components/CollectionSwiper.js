// import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
// import 'swiper/swiper.scss';

// SwiperCore.use([Navigation]);
// const CollectionSwiper = ({ props }) => {
//   const { collection_name, collection_description, images, linkInfo } = props;

//   return (
//     <div>
//       <div>
//         <h2>{collection_name}</h2>
//         <span>{collection_description}</span>
//         <a href={linkInfo.link_url}>{linkInfo.link_text}</a>
//       </div>

//       <Swiper
//         spaceBetween={50}
//         slidesPerView={3}
//         onSlideChange={() => console.log('slide change')}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//       {images.map((image, i) => (
//         <SwiperSlide>
//           <img key={i} src={image.src}/>
//         </SwiperSlide>
//       ))}
//       </Swiper>
//     </div>
//   );
// }

// export default CollectionSwiper;

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};