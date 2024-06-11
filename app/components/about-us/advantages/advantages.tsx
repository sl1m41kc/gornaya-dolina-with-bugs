"use client";

import classes from "./advantages.module.css";
import MySwiper from "../../swiper/swiper";
import useScreenWidth from "@/app/useScreenWidth";
import { data } from "@/data/data";

const Advantages = () => {
  const screenWidth = useScreenWidth();

  return (
    <>
      {screenWidth <= 1024 ? (
        <div className={classes.swiperWrapper}>
          <MySwiper
            data={data.listAdvantages}
            countSlide={1}
            nameSwiper="swiperAdvantages"
            slide={(item: any, index: number) => (
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
            )}
          />
        </div>
      ) : (
        <div className={classes.advantages}>
          {data.listAdvantages.map((item, index) => (
            <div
              className={classes.item}
              key={index + item.title + item.description}
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
