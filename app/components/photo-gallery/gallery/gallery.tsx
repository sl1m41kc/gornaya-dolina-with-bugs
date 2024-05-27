import React from "react";

import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "../../nextJsImage/nextJsImage";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./correct-yarl.css";

import classes from "./gallery.module.css";
import { useSwiper } from "swiper/react";
import { data } from "@/data/data";

interface IProps {
    isOpenGallery: boolean;
    setIsOpenGallery: React.Dispatch<React.SetStateAction<boolean>>;
    activeSlideIDX: number;
    setActiveSlideIDX: React.Dispatch<React.SetStateAction<number>>
}

const Gallery = ({isOpenGallery, setIsOpenGallery, activeSlideIDX, setActiveSlideIDX}: IProps) => {
  const swiper = useSwiper();

  return (
    <Lightbox
      index={activeSlideIDX}
      open={isOpenGallery}
      close={() => setIsOpenGallery(false)}
      slides={data.gallery}
      on={{
        view: ({ index }: { index: number }) => {
          setActiveSlideIDX(index);
          swiper.slideTo(index);
        },
      }}
      render={{ slide: NextJsImage, thumbnail: NextJsImage }}
      plugins={[Thumbnails]}
    />
  );
};

export default Gallery;
