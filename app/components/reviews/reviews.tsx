"use client";

import React, { useEffect, useState } from "react";
import MySwiper from "../swiper/swiper";
import { data } from "@/data/data";
import Review from "./review/review";
import classes from "./reviews.module.css";

const Reviews = () => {
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
    <section className="container" id="reviews">
      <h2 className="title">Отзывы</h2>

      <div className={classes.container}>
        <MySwiper
          countSlide={screenWidth <= 1024 ? 1 : 2}
          nameSwiper="swiperReviews"
          data={data.reviews}
          slide={(item: any, index: number) => (
            <Review key={index + item.name} item={item} />
          )}
        />
      </div>
    </section>
  );
};

export default Reviews;
