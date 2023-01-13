import React from "react";

const CollectionSwiper = ({ props }) => {
  const { collection_name, collection_description, images, linkInfo } = props;

  console.log(props);

  return (
    <div>
      <div>
        <h2>{collection_name}</h2>
        <span>{collection_description}</span>
          <a href={linkInfo.link_url}>{linkInfo.link_text}</a>
      </div>

      {images.map((image, i) => (
        <img key={i} src={image.src}/>
      ))}
    </div>
  );
}

export default CollectionSwiper;