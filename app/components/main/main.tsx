import React from "react";
import classes from "./main.module.css";
import Image from "next/image";
import Booking from "./booking/booking";

interface IProps {
  // Сделаны гибкие данные фото чтобы переиспользовать блок
  imageSrc: string;
  imageAlt: string;
}

const Main = ({imageSrc, imageAlt}: IProps) => {
  return (
    <main className={classes.main} id="main">
      <div className={classes.mask}>
        <Image
          className={classes.image}
          src={imageSrc}
          alt={imageAlt}
          width={1920}
          height={1080}
        />
      </div>
      <Booking />
    </main>
  );
};

export default Main;
