import React from "react";
import Carousel from 'react-grid-carousel'
import '../styles/CollectionSwiper-styles.scss';

const LeftArrow = () => (
  <svg className="left-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RightArrow = () => (
  <svg className="right-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CollectionSwiper = ({ props }) => {
  const { collection_name, collection_description, images, linkInfo, collection_url } = props;

  return (
    <div className="collection-swiper">
      <div className="collection-swiper__info-container">
        <div className="collection-swiper__info-container__inner">
          <h2>{collection_name}</h2>
          <span>{collection_description}</span>
          <a href={linkInfo.link_url}>{linkInfo.link_text}</a>
        </div>
      </div>

      <div className="collection-swiper__carousel-container">
        <Carousel autoplay={4000} mobileBreakpoint={875} arrowLeft={LeftArrow} arrowRight={RightArrow} cols={4} rows={1} gap={10} loop>
          {images.map((image, i) => (
          <Carousel.Item key={i}>
            <a href={collection_url}>
              <img className="carousel-img" src={image.src} />
            </a>
          </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CollectionSwiper;