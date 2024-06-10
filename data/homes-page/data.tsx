import FullScreenSVG from "@/public/sprites/icons/fullscreen.svg";
import BedPlusChairSVG from "@/public/sprites/icons/bedPlusChair.svg";
import SingleBedSVG from "@/public/sprites/icons/singleBed.svg";
import ShowerSVG from "@/public/sprites/icons/shower.svg";
import HairDryerSVG from "@/public/sprites/icons/hairdryer.svg";
import LandScapeSVG from "@/public/sprites/icons/landscape.svg";
import TerraceSVG from "@/public/sprites/icons/landscape.svg";
import HeatSVG from "@/public/sprites/icons/heat.svg";
import BedSVG from "@/public/sprites/icons/bed.svg";
import PetsSVG from "@/public/sprites/icons/pets.svg";
import WifiSVG from "@/public/sprites/icons/wifi.svg";

import houseTerracePhoto from "@/public/images/houses/terrace.jpg";
import houseShampooPhoto from "@/public/images/houses/shampoo.jpg";
import houseTowelsPhoto from "@/public/images/houses/towels.jpg";
import houseRobesPhoto from "@/public/images/houses/robes.jpg";

import houseDoublePhotoGallery1 from "@/public/images/houses/double/1.jpg";
import houseDoublePhotoGallery2 from "@/public/images/houses/double/2.jpg";
import houseDoublePhotoGallery3 from "@/public/images/houses/double/3.jpg";
import houseDoublePhotoGallery4 from "@/public/images/houses/double/4.jpg";

import houseTriplePhotoGallery1 from "@/public/images/houses/triple/1.jpg";
import houseTriplePhotoGallery2 from "@/public/images/houses/triple/2.jpg";
import houseTriplePhotoGallery3 from "@/public/images/houses/triple/3.jpg";
import houseTriplePhotoGallery4 from "@/public/images/houses/triple/4.jpg";
import houseTriplePhotoGallery5 from "@/public/images/houses/triple/5.jpg";
import houseTriplePhotoGallery6 from "@/public/images/houses/triple/6.jpg";
import houseTriplePhotoGallery7 from "@/public/images/houses/triple/7.jpg";

import { homesType } from "./types";

export const homesPageData: homesType = {
  double: {
    title: "2-местный номер",
    href: "/house/double",
    mainImage: {
      src: "/images/houses/double/1.jpg",
      alt: "2-местный номер основное фото",
    },
    description: (
      <>
        Каждый домик оборудован большими панорамными окнами, через которые
        открывается захватывающий вид на&nbsp;величественные горы. Представьте
        себе, как вы&nbsp;просыпаетесь утром и&nbsp;видите рассвет, заливающий
        вершины золотистым светом, или как вечерние сумерки придают горам
        мистическое очарование.
      </>
    ),
    price: <>4&nbsp;000</>,
    advantages: [
      {
        title: <>Площадь номера&nbsp;&mdash; 18&nbsp;м2</>,
        icon: <FullScreenSVG />,
      },
      {
        title: <>Двуспальная кровать</>,
        icon: <BedSVG />,
      },
      {
        title: <>Одно дополнительное место</>,
        icon: <SingleBedSVG />,
      },
      {
        title: <>Санузел и&nbsp;душ в&nbsp;номере</>,
        icon: <ShowerSVG />,
      },
      {
        title: <>Фен, полотенца, халаты, тапочки</>,
        icon: <HairDryerSVG />,
      },
      {
        title: <>Панорамный вид на&nbsp;горы</>,
        icon: <LandScapeSVG />,
      },
      {
        title: <>Терраса у&nbsp;каждого домика</>,
        icon: <TerraceSVG />,
      },
      {
        title: <>К&nbsp;нам можно с&nbsp;животными</>,
        icon: <PetsSVG />,
      },
      {
        title: <>wi-fi</>,
        icon: <WifiSVG />,
      },
      {
        title: <>Обогреватель</>,
        icon: <HeatSVG />,
      },
    ],
    slider: [
      houseDoublePhotoGallery1,
      houseDoublePhotoGallery2,
      houseTerracePhoto,
      houseDoublePhotoGallery3,
      houseDoublePhotoGallery4,
      houseShampooPhoto,
      houseTowelsPhoto,
      houseRobesPhoto,
    ],
  },
  triple: {
    title: "3-местный номер",
    href: "/house/triple",
    mainImage: {
      src: "/images/houses/triple/1.jpg",
      alt: "3-местный номер основное фото",
    },
    description: (
      <>
        Каждый домик оборудован большими панорамными окнами, через которые
        открывается захватывающий вид на&nbsp;величественные горы. Представьте
        себе, как вы&nbsp;просыпаетесь утром и&nbsp;видите рассвет, заливающий
        вершины золотистым светом, или как вечерние сумерки придают горам
        мистическое очарование.
      </>
    ),
    price: <>5&nbsp;000</>,
    advantages: [
      {
        title: <>Площадь номера&nbsp;&mdash; 20&nbsp;м2</>,
        icon: <FullScreenSVG />,
      },
      {
        title: <>Двуспальная кровать и&nbsp;раскладной диван</>,
        icon: <BedPlusChairSVG />,
      },
      {
        title: <>Одно дополнительное место</>,
        icon: <SingleBedSVG />,
      },
      {
        title: <>Санузел и&nbsp;душ в&nbsp;номере</>,
        icon: <ShowerSVG />,
      },
      {
        title: <>Фен, полотенца, халаты, тапочки</>,
        icon: <HairDryerSVG />,
      },
      {
        title: <>Панорамный вид на&nbsp;горы</>,
        icon: <LandScapeSVG />,
      },
      {
        title: <>Терраса у&nbsp;каждого домика</>,
        icon: <TerraceSVG />,
      },
      {
        title: <>К&nbsp;нам можно с&nbsp;животными</>,
        icon: <PetsSVG />,
      },
      {
        title: <>wi-fi</>,
        icon: <WifiSVG />,
      },
      {
        title: <>Обогреватель</>,
        icon: <HeatSVG />,
      },
    ],
    slider: [
      houseTriplePhotoGallery1,
      houseTriplePhotoGallery2,
      houseTriplePhotoGallery3,
      houseTriplePhotoGallery4,
      houseTerracePhoto,
      houseTriplePhotoGallery5,
      houseTriplePhotoGallery6,
      houseTriplePhotoGallery7,
      houseShampooPhoto,
      houseTowelsPhoto,
      houseRobesPhoto,
    ],
  },
};
