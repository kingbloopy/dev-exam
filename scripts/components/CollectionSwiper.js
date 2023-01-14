import React, { useEffect, useState } from "react";

const CollectionSwiper = ({ props }) => {
  const { collection_name, collection_description, images, linkInfo } = props;
  const data = ['1', '2', '3', '4'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length-1){
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex+1);
  }

  useEffect(() => {
    const interval = setInterval(() => {carouselInfiniteScroll()}, 3000);
    return () => clearInterval(interval);
  });

  console.log(props);

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
        {images.map((image, i) => (
          <img 
            className="carousel-item"
            style={{ transform: `translate(-${currentIndex * 100}%)` }} 
            key={i} 
            src={image.src}/>
        ))}
        {/* { data.map((item, index) => (
          <h1
          className="carousel-item"
          style={{transform: `translate(-${currentIndex * 100}%)`}}
          key={index}
          >{item}</h1>
        ))} */}
      </div>
    </div>
  );
}

export default CollectionSwiper;