import React, { useEffect, useState } from "react";
import Carousel from 'react-grid-carousel'

const CollectionSwiper = ({ props }) => {
  const { collection_name, collection_description, images, linkInfo } = props;

  return (
    <div className="collection-swiper">
      <div className="collection-info-container">
        <div className="collection-info-inner">
          <h2>{collection_name}</h2>
          <span>{collection_description}</span>
          <a href={linkInfo.link_url}>{linkInfo.link_text}</a>
        </div>
      </div>

      <div className="carousel-container">
        <Carousel cols={4} rows={1} gap={10} loop>
          {images.map((image, i) => (
          <Carousel.Item>
            <img className="carousel-img" key={i} src={image.src} />
          </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CollectionSwiper;