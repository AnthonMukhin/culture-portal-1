import React from 'react';
import ImageGallery from 'react-image-gallery';
import './ImageGallery.css';

function ImageGalleryComponent(props) {
  const images = [];
  props.data.works.forEach((item) => {
    const obj = {
      original: item.image,
      thumbnail: item.image,
      description: item.description,
    };
    images.push(obj);
  });

  return (
    <div>
      <h2>Фотогалерея</h2>
      <ImageGallery items={images} />
    </div>
  );
}

export default ImageGalleryComponent