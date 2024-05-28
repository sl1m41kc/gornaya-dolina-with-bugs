"use client";

import React, { useEffect, useState } from "react";
import Swiper from "../swiper/swiper";
import Image from "next/image";

import classes from "./photo-gallery.module.css";

interface IProps {
  title: string;
  data: any;
  nameGallery: string;
}

const PhotoGallery = ({ title, data, nameGallery }: IProps) => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <section className="container" id={nameGallery}>
      <div className="containerText">
        <h2 className="title">{title}</h2>
      </div>

      <div className={classes.container}>
        <Swiper
          data={data}
          isGallery={true}
          nameSwiper={nameGallery}
          countSlide={screenWidth <= 1024 ? 1 : 2}
          slide={(item: any, index: number) => {
            return (
              <Image
              className={classes.image}
                src={item.src}
                alt={`Картинка галереи ${index + 1}`}
                width={1920}
                height={1080}
              />
            );
          }}
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
