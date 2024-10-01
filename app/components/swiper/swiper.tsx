"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// В этом файле можно менять стили уже заданные в swiper
import "./correct-swiper.css";

import ChevronRightSVG from "@/public/sprites/icons/chevron_right.svg";
import classes from "./swiper.module.css";

import clsx from "clsx";

interface IProps {
  data: any;
  countSlide?: number;
  onSwiper?: (swiper: any) => void;
  controller?: {
    control: any;
  };
  isGallery?: boolean;

  // Кол-во слайдов на экране
  slidesPewView?: number;

  // Активный слайд
  activeSlide?: number;

  // Переменная чтобы разделить слайдеры по условному id
  // Без ее указания swiper pagination не будет работать и они все будут восприниматься как одина
  nameSwiper: string;

  // Для гибкой верстки слайда
  slide: (item: any, index: number) => JSX.Element;
}

const MySwiper = ({
  data,
  slide,
  nameSwiper,
  isGallery = false,
  onSwiper = () => {},
  controller = { control: null },
  slidesPewView = 1.5,
}: IProps) => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={classes.container}>
      {/* swiper */}
      <Swiper
        modules={[Navigation, Pagination, Controller]}
        ref={swiperRef}
        onSwiper={onSwiper}
        controller={controller}
        spaceBetween={20}
        slidesPerView={slidesPewView}
        centeredSlides={true}
        navigation={{
          prevEl: `.${classes.navigationPrev}${nameSwiper}`,
          nextEl: `.${classes.navigationNext}${nameSwiper}`,
        }}
        pagination={{
          clickable: true,
          el: `.${classes.pagination}${nameSwiper}`,
        }}
      >
        <div className={clsx(classes.transparentLeft, isGallery && classes.gallery)} />
        <div className={clsx(classes.transparentRight, isGallery && classes.gallery)} />

        {data.map((item: any, index: number) => (
          <SwiperSlide
            key={index + Object.keys(item).join("")}
            className={classes.slide}
          >
            {slide(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* стелка назад */}
      <div
        className={clsx(
          classes.navigationPrev + nameSwiper,
          classes.prevArrowWrapper,
          isGallery && classes.prevArrowWrapperGallery
        )}
        ref={prevRef}
      >
        <div className={classes.prevArrow}>
          <ChevronRightSVG />
        </div>
      </div>
      {/* стелка вперед */}
      <div
        className={clsx(
          classes.navigationNext + nameSwiper,
          classes.nextArrowWrapper,
          isGallery && classes.nextArrowWrapperGallery
        )}
        ref={nextRef}
      >
        <div className={classes.nextArrow}>
          <ChevronRightSVG />
        </div>
      </div>

      <div
        className={clsx(
          classes.pagination,
          classes.pagination + nameSwiper,
          isGallery && classes.paginationGallery
        )}
      />
    </div>
  );
};

export default MySwiper;
