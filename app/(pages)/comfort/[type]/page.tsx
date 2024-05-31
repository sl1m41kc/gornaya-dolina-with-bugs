"use client";

import Main from "@/app/components/main/main";
import classes from "./page.module.css";
import { data } from "@/data/data";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import MySwiper from "@/app/components/swiper/swiper";
import Image from "next/image";
import PhotoGallery from "@/app/components/photo-gallery/photo-gallery";

const page = ({ params: { type } }: { params: { type: string } }) => {
  const router = useRouter();

  // @ts-ignore
  if (!data.comfortPage[type]) return router.replace("/");
  // @ts-ignore
  const pageData = data.comfortPage[type];

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
