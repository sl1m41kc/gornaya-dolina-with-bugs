import React from "react";
import classes from "./page.module.css";
import Main from "@/app/components/main/main";
import { data } from "@/data/data";
import Advantages from "../advantages/advantages";
import PhotoGallery from "@/app/components/photo-gallery/photo-gallery";
import clsx from "clsx";
import Actions from "../actions/actions";
import { homeItemName } from "@/data/homes-page/types";

const Page = ({ params: { house } }: { params: { house: string } }) => {
  const houseData = data.housesPage[house as homeItemName];

  return (
    <div className={classes.page}>
      <Main
        imageSrc={houseData.mainImage.src as string}
        imageAlt={houseData.mainImage.alt}
      />

      <div className={clsx("containerInfo", classes.house)}>
        <h2 className="title">{houseData.title}</h2>
        <div className={classes.info}>
          <p className={clsx("containerText", classes.description)}>
            {houseData.description}
          </p>
          <div className={classes.price}>
            <p className={classes.priceValue}>{houseData.price}</p>
            <p className={classes.priceCurrency}>рублей в сутки</p>
          </div>
        </div>
        <Actions />
      </div>

      <div className={classes.advantages}>
        <Advantages advantages={houseData.advantages} />
      </div>

      <PhotoGallery
        title={"Фото"}
        data={houseData.slider}
        nameGallery="housePhotoGallery"
      />
    </div>
  );
};

export default Page;
