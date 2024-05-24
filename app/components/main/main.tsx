import React from "react";
import classes from "./main.module.css";
import Image from "next/image";
import Booking from "./booking/booking";

const Main = () => {
  return (
    <main className={classes.main}>
      <Image
        className={classes.image}
        src="/images/main.png"
        alt="фон"
        width={1920}
        height={1080}
      />
      <Booking />
    </main>
  );
};

export default Main;
