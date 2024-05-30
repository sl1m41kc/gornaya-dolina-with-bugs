"use client";

import MySwiper from "../swiper/swiper";
import Review from "./review/review";
import classes from "./reviews.module.css";
import useScreenWidth from "@/app/useScreenWidth";
import { data } from "@/data/data";

const Reviews = () => {
  const screenWidth = useScreenWidth();

  return (
    <section className="container" id="reviews">
      <h2 className="title">Отзывы</h2>

      <div className={classes.container}>
        <MySwiper
          nameSwiper="swiperReviews"
          countSlide={screenWidth <= 1024 ? 1 : 2}
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
