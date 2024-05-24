"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "@/data/data";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";

import NextJsImage from "../../nextJsImage/nextJsImage";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { Navigation, Pagination } from "swiper/modules";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import './correct-yarl.css'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './correct-swiper.css'

import classes from "./gallery.module.css";

const Gallery = () => {
  const swiperRef = useRef(null);
  const [isOpenGallery, setIsOpenGallery] = useState(false);
  const [activeSlideIDX, setActiveSlideIDX] = useState(1);

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={2}
        initialSlide={activeSlideIDX}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          clickable: true,
        }}
      >
        {data.gallery.map((item, index) => (
          <SwiperSlide
            className={classes.slide}
            key={index + item.src}
            onClick={() => {
              setActiveSlideIDX(index);
              setIsOpenGallery(true);
            }}
          >
            <Image
              src={item.src}
              alt={`Картинка галереи ${index + 1}`}
              width={1920}
              height={1080}
            />
          </SwiperSlide>
        ))}

        <Lightbox
          index={activeSlideIDX}
          open={isOpenGallery}
          close={() => setIsOpenGallery(false)}
          slides={data.gallery}
          on={{
            view: ({ index }: { index: number }) => {
              setActiveSlideIDX(index);
            },
          }}
          render={{ slide: NextJsImage, thumbnail: NextJsImage }}
          plugins={[Thumbnails]}
        />
      </Swiper>
    </>
  );
};

export default Gallery;
