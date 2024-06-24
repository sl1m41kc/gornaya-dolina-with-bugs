"use client";

import classes from "./advantages.module.css";
import MySwiper from "@/app/components/swiper/swiper";
import useScreenWidth from "@/app/utils/useScreenWidth";

interface IProps {
  advantages: any;
}

const Advantages = ({ advantages }: IProps) => {
  const screenWidth = useScreenWidth();

  return (
    <div className={"container"}>
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
    </div>
  );
};

export default Advantages;
