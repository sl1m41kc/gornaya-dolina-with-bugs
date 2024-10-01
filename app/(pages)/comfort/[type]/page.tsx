'use client'
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Main from "@/app/components/main/main";
import classes from "./page.module.css";
import { data } from "@/data/data";
import clsx from "clsx";
import PhotoGallery from "@/app/components/photo-gallery/photo-gallery";
import { comfortPageItemName } from "@/data/comfort-page/types";
import { Title } from "@/app/components/UI/Title/Title";

const Page = ({
  params: { type },
}: {
  params: { type: comfortPageItemName };
}) => {
  const pageData = data.comfortPage.find((item) => item.type === type);
  
  useEffect(() => {
    if (!pageData) {
      redirect("/");
    }
  }, [pageData]);

  if (!pageData) {
    return null;
  }

  return (
    <div className={classes.page}>
      <Main imageSrc={pageData.imageSrc} imageAlt={pageData.title as string} />
      <div className={clsx("containerInfo", classes.info)}>
        <Title>{pageData.title}</Title>
        <p className={classes.description}>{pageData.description}</p>
      </div>
      <div className={classes.gallery}>
        <PhotoGallery
          title={"Фото"}
          data={pageData.slider}
          nameGallery="comfortPhotoGallery"
        />
      </div>
    </div>
  );
};

export default Page;

