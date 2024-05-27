import React from "react";
import Swiper from './swiper/swiper'

const PhotoGallery = () => {
  return (
    <section className="container">
      <div className="containerText">
        <h2 className="title">Фотогалерея</h2>
      </div>

      <Swiper />
    </section>
  );
};

export default PhotoGallery;
