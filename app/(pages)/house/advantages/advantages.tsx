"use client";

import React, { useEffect, useState } from "react";
import classes from "./advantages.module.css";
import MySwiper from "@/app/components/swiper/swiper";

interface IProps {
  advantages: any;
}

const Advantages = ({ advantages }: IProps) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={"container"}>
      {screenWidth > 1024 ? (
        <div className={classes.advantages}>
          {advantages.map((item: any, index: number) => (
            <div
              className={classes.item}
              key={index + item.title + item.description}
            >
              <div className={classes.iconWrapper}>{item.icon}</div>
              <div className={classes.textWrapper}>
                <h4 className={classes.title}>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={classes.swiperWrapper}>
          <MySwiper
            data={advantages}
            countSlide={1}
            nameSwiper="swiperAdvantages"
            slide={(item: any, index: number) => (
              <div
                className={classes.item}
                key={index + item.title + item.description}
              >
                <div className={classes.iconWrapper}>{item.icon}</div>
                <div className={classes.textWrapper}>
                  <h4 className={classes.title}>{item.title}</h4>
                </div>
              </div>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Advantages;
