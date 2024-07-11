"use client";

import classes from "./advantages.module.css";
import MySwiper from "../swiper/swiper";
import clsx from "clsx";
import { data } from "@/data/data";
import useScreenWidth from "@/app/utils/use-screen-width";

const Advantages = () => {
  const screenWidth = useScreenWidth();

  return (
    <>
      {screenWidth < 850 && screenWidth !== 0 ? (
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
                  <h3 className={classes.title}>{item.title}</h3>
                  <p className={classes.description}>{item.description}</p>
                </div>
              </div>
            )}
          />
        </div>
      ) : (
        <div className={classes.advantages}>
          {data.listAdvantages.map((item, index) => (
            <div
              className={classes.item}
              key={`${index}-${String(item.title)}-${String(item.description)}`}
            >
              <div className={classes.iconWrapper}>{item.icon}</div>
              <div className={classes.textWrapper}>
                <h3 className={classes.title}>{item.title}</h3>
                <p className={classes.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Advantages;
