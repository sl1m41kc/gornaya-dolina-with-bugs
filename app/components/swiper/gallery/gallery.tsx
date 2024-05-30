import React from "react";

import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "../../nextJsImage/nextJsImage";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./correct-yarl.css";

import { useSwiper } from "swiper/react";
import { StaticImageData } from "next/image";

interface IProps {
  data: StaticImageData[];
  isOpenGallery: boolean;
  activeSlideIDX: number;
  setIsOpenGallery: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveSlideIDX: React.Dispatch<React.SetStateAction<number>>;
}

const Gallery = ({
  data,
  isOpenGallery,
  setIsOpenGallery,
  activeSlideIDX,
  setActiveSlideIDX,
}: IProps) => {
  const swiper = useSwiper();

  return (
    <Lightbox
      index={activeSlideIDX}
      open={isOpenGallery}
      close={() => setIsOpenGallery(false)}
      slides={data}
      on={{
        view: ({ index }: { index: number }) => {
          // Когда открыт новый слайд - меняем активный слайд у свайпера
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
