"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Gallery from "./gallery/gallery";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./correct-swiper.css";

import ChevronRightSVG from "@/public/sprites/icons/chevron_right.svg";

import classes from "./swiper.module.css";
import clsx from "clsx";

interface IProps {
  data: any;
  nameSwiper: string;
  slide: (item: any, index: number) => JSX.Element;
  isGallery?: boolean;
  countSlide?: number;
}

const MySwiper = ({
  data,
  slide,
  nameSwiper,
  countSlide = 2,
  isGallery = false,
}: IProps) => {
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
          slidesPerView={countSlide}
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
            el: `.${classes.pagination}${nameSwiper}`,
          }}
          onSlideChange={(swiper) => {
            setActiveSlideIDX(swiper.activeIndex);
          }}
        >
          {data.map((item: any, index: number) => (
            <SwiperSlide
              key={index + Object.keys(item).join("")}
              className={classes.slide}
              onClick={() => {
                setActiveSlideIDX(index);
                setIsOpenGallery(true);
              }}
            >
              {slide(item, index)}
            </SwiperSlide>
          ))}

          {isGallery && (
            <Gallery
              data={data}
              isOpenGallery={isOpenGallery}
              setIsOpenGallery={setIsOpenGallery}
              activeSlideIDX={activeSlideIDX}
              setActiveSlideIDX={setActiveSlideIDX}
            />
          )}
        </Swiper>

        {/* стелка вперед */}
        <div className={classes.nextArrow} ref={nextRef}>
          <ChevronRightSVG />
        </div>
      </div>

      <div
        className={clsx(classes.pagination, classes.pagination + nameSwiper)}
      ></div>
    </div>
  );
};

export default MySwiper;
