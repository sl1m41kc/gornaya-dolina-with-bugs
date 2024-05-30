import React from "react";
import classes from "./page.module.css";
import Main from "@/app/components/main/main";
import { data } from "@/data/data";
import Advantages from "../advantages/advantages";
import Gallery from "@/app/components/swiper/gallery/gallery";
import MySwiper from "@/app/components/swiper/swiper";
import PhotoGallery from "@/app/components/photo-gallery/photo-gallery";
import clsx from "clsx";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  const houseData = data.housesPage[Number(id)];

  return (
    <div className={classes.page}>
      <Main
        imageSrc={houseData.mainImage.src}
        imageAlt={houseData.mainImage.alt}
      />

      <div className={clsx('containerInfo', classes.house)}>
        <h2 className="title">{houseData.title}</h2>
        <div className={classes.info}>
          <p className={clsx('containerText', classes.description)}>{houseData.description}</p>
          <div className={classes.price}>
            <p className={classes.priceValue}>{houseData.price}</p>
            <p className={classes.priceCurrency}>рублей в сутки</p>
          </div>
        </div>
        <div className={classes.buttons}>
          <button type="button" className={clsx('button', classes.button)}>
            Условия бронирования
          </button>
          <button type="button" className={clsx('button', classes.button)}>
            Правила проживания
          </button>
        </div>
      </div>

      <div className={classes.advantages}>
        <Advantages advantages={houseData.advantages} />
      </div>

      <div className={classes.gallery}>
        <PhotoGallery
          title={"Фото"}
          data={houseData.slider}
          nameGallery="housePhotoGallery"
        />
      </div>
    </div>
  );
};

export default Page;
