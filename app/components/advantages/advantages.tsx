"use client";

import classes from "./advantages.module.css";
import MySwiper from "../swiper/swiper";
import clsx from "clsx";
import { data } from "@/data/data";
import useScreenWidth from "@/app/utils/use-screen-width";
import { Philosopher } from "@/app/fonts/fonts";

const Advantages = () => {
  const screenWidth = useScreenWidth();

  if (screenWidth === 0) return null

  if (screenWidth < 850) {
    return (
      <div className={clsx(classes.swiperWrapper)}>
      <MySwiper
        data={data.listAdvantages}
        countSlide={1}
        nameSwiper="swiperAdvantagesMain"
        slide={(item: any, index: number) => (
          <div
            className={classes.item}
            key={`${index}-${String(item.title)}-${String(item.description)}-advantages`}
          >
            <div className={classes.iconWrapper}>{item.icon}</div>
            <div className={classes.textWrapper}>
              <h3 className={clsx(classes.title, Philosopher.className)}>{item.title}</h3>
              <p className={classes.description}>{item.description}</p>
            </div>
          </div>
        )}
      />
    </div>
    )
  } else {
    return (
      <div className={classes.advantages}>
          {data.listAdvantages.map((item, index) => (
            <div
              className={classes.item}
              key={`${index}-${String(item.title)}-${String(item.description)}`}
            >
              <div className={classes.iconWrapper}>{item.icon}</div>
              <div className={classes.textWrapper}>
                <h3 className={clsx(classes.title, Philosopher.className)}>{item.title}</h3>
                <p className={classes.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
    )
  }
};

export default Advantages;
