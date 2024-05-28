"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "@/data/data";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import Gallery from "../gallery/gallery";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./correct-swiper.css";

import ChevronRightSVG from "@/public/sprites/icons/chevron_right.svg";

import classes from "./swiper.module.css";

const MySwiper = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isOpenGallery, setIsOpenGallery] = useState(false);
  const [activeSlideIDX, setActiveSlideIDX] = useState(0);

  return (
    <div className={classes.container}>
      <div className={classes.navigation}>
        {/* стелка назад */}
        <div className={classes.prevArrow} ref={prevRef}>
          <ChevronRightSVG />
        </div>

        {/* swiper */}
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          modules={[Navigation, Pagination]}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          pagination={{
            clickable: true,
            el: `.${classes.pagination}`,
          }}
        >
          {data.gallery.map((item, index) => (
            <SwiperSlide
              key={index + item.src}
              className={classes.slide}
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

          <Gallery
            isOpenGallery={isOpenGallery}
            setIsOpenGallery={setIsOpenGallery}
            activeSlideIDX={activeSlideIDX}
            setActiveSlideIDX={setActiveSlideIDX}
          />
        </Swiper>

        {/* стелка вперед */}
        <div className={classes.nextArrow} ref={nextRef}>
          <ChevronRightSVG />
        </div>
      </div>

      <div className={classes.pagination}></div>
    </div>
  );
};

export default MySwiper;
