"use client";

import Image from "next/image";

import classes from "./photo-gallery.module.css";
import MySwiper from "../swiper/swiper";
import { useState } from "react";
import platform from "platform";
import clsx from "clsx";

interface IProps {
  // Сделаны гибкие данные для переиспользования компонента
  title: string;
  data: any;
  nameGallery: string;
}

const PhotoGallery = ({ title, data, nameGallery }: IProps) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <section
      className={clsx("container fullW", classes.container)}
      id={nameGallery}
    >
      <div className="containerText">
        <h2 className="title">{title}</h2>
      </div>

      <MySwiper
        data={data}
        nameSwiper={nameGallery + "_mainSwiper"}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        slide={(item: any, _: number) => (
          <Image
            className={clsx(classes.image, classes.pointer)}
            src={item}
            alt="Фотогалерея"
            onClick={() => {
              const gallery = document.getElementById(nameGallery + "gallery");
              //@ts-ignore
              if (gallery) gallery.showModal();
            }}
          />
        )}
      />

      {platform.os?.family === "iOS" &&
      Number(platform.os.version?.split(".")[0]) < 15 ? (
        <></>
      ) : (
        <dialog
          id={nameGallery + "gallery"}
          className={clsx("modal", classes.modal)}
        >
          <div className={clsx("modal-box", classes.modalBox)}>
            <MySwiper
              data={data}
              isGallery
              nameSwiper={nameGallery + "_gallerySwiper"}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
              slide={(item: any, index: number) => (
                <Image className={classes.image} src={item} alt="Фотогалерея" />
              )}
            />
          </div>
          <form method="dialog" className={classes.closeWrapper}>
            <button className={classes.closeBtn}>
              <div className={classes.close}>
                <span />
                <span />
              </div>
            </button>
          </form>
          <form
            method="dialog"
            className={clsx(classes.backdrop, "modal-backdrop")}
          >
            <button />
          </form>
        </dialog>
      )}
    </section>
  );
};

export default PhotoGallery;
