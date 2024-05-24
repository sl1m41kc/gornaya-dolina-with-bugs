import React from "react";
import Gallery from "./gallery/gallery";

const PhotoGallery = () => {
  return (
    <section className="container">
      <div className="containerText">
        <h2 className="title">Фотогалерея</h2>
      </div>

      <Gallery />
    </section>
  );
};

export default PhotoGallery;
