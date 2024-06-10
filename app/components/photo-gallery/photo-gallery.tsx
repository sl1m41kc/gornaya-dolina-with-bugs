"use client";

import Swiper from "../swiper/swiper";
import Image from "next/image";

import classes from "./photo-gallery.module.css";
import useScreenWidth from "@/app/useScreenWidth";

interface IProps {
  // Сделаны гибкие данные для переиспользования компонента
  title: string;
  data: any;
  nameGallery: string;
}

const PhotoGallery = ({ title, data, nameGallery }: IProps) => {
  const screenWidth = useScreenWidth();
  
  return (
    <section className="container" id={nameGallery}>
      <div className="containerText">
        <h2 className="title">{title}</h2>
      </div>

      <div className={classes.container}>
        <Swiper
          nameSwiper={nameGallery}
          data={data}
          isGallery={true}
          countSlide={screenWidth <= 1024 ? 1 : 2}
          slide={(item: any, index: number) => {
            return (
              <Image
              className={classes.image}
                src={item.src}
                alt={`Картинка галереи ${index + 1}`}
                width={1920}
                height={1080}
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            );
          }}
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
