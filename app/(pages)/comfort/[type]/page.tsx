"use client";

import Main from "@/app/components/main/main";
import classes from "./page.module.css";
import { data } from "@/data/data";
import clsx from "clsx";
import PhotoGallery from "@/app/components/photo-gallery/photo-gallery";
import { comfortPageItemName } from "@/data/comfort-page/types";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const page = ({
  params: { type },
}: {
  params: { type: comfortPageItemName };
}) => {
  const pageData = data.comfortPage.find((item) => item.type === type);
  if (!pageData) {
    useEffect(() => {
      redirect("/");
    }, []);
    return null;
  }

  return (
    <div className={classes.page}>
      <Main imageSrc={pageData.imageSrc} imageAlt={pageData.title} />
      <div className={clsx("containerInfo", classes.info)}>
        <h3 className="title">{pageData.title}</h3>
        <p className={classes.description}>{pageData.description}</p>
      </div>
      <div className={clsx("container", classes.gallery)}>
        <PhotoGallery
          title={"Фото"}
          data={pageData.slider}
          nameGallery="comfortPhotoGallery"
        />
      </div>
    </div>
  );
};

export default page;
