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

import house0PhotoGallery1 from "@/public/images/houses/0/1.jpg";
import house0PhotoGallery2 from "@/public/images/houses/0/2.jpg";
import house0PhotoGallery3 from "@/public/images/houses/0/3.jpg";
import house0PhotoGallery4 from "@/public/images/houses/0/4.jpg";
import house0PhotoGallery5 from "@/public/images/houses/0/5.jpg";
import house0PhotoGallery6 from "@/public/images/houses/0/6.jpg";
import house0PhotoGallery7 from "@/public/images/houses/0/7.jpg";

import house1PhotoGallery1 from "@/public/images/houses/1/1.jpg";
import house1PhotoGallery2 from "@/public/images/houses/1/2.jpg";
import house1PhotoGallery3 from "@/public/images/houses/1/3.jpg";
import house1PhotoGallery4 from "@/public/images/houses/1/4.jpg";
import { IHome } from "./types";

export const homesPageData: IHome[] = [
  {
    title: "2-местный номер",
    href: "/house/0",
    mainImage: {
      src: "/images/houses/0/1.jpg",
      alt: "2-местный номер основное фото",
    },
    description: (
      <>
        Наши номера&nbsp;&mdash; это идеальное сочетание уюта и&nbsp;комфорта
        с&nbsp;великолепным видом на&nbsp;горы. Удобные двуспальные кровати
        гарантируют отличный сон, а&nbsp;террасы приглашают насладиться утренним
        кофе. Кроме того, каждый номер оснащен собственным санузлом
        и&nbsp;душем, обеспечивая максимальный комфорт для наших гостей.
      </>
    ),
    price: 4000,
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
      house0PhotoGallery1,
      house0PhotoGallery2,
      house0PhotoGallery3,
      house0PhotoGallery4,
      houseTerracePhoto,
      house0PhotoGallery5,
      house0PhotoGallery6,
      house0PhotoGallery7,
      houseShampooPhoto,
      houseTowelsPhoto,
      houseRobesPhoto,
    ],
  },
  {
    title: "3-местный номер",
    href: "/house/1",
    mainImage: {
      src: "/images/houses/1/1.jpg",
      alt: "3-местный номер основное фото",
    },
    description: (
      <>
        Наши номера&nbsp;&mdash; это идеальное сочетание уюта и&nbsp;комфорта
        с&nbsp;великолепным видом на&nbsp;горы. Удобные двуспальные кровати
        гарантируют отличный сон для взрослых, а&nbsp;для маленьких гостей
        предусмотрен раскладной диванчик, где они могут отдохнуть после дня
        полного впечатлений. Террасы приглашают насладиться утренним кофе
        в&nbsp;атмосфере умиротворенной природы. Кроме того, каждый номер
        оснащен собственным санузлом и&nbsp;душем, обеспечивая максимальный
        комфорт для наших гостей.
      </>
    ),
    price: 5000,
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
      house1PhotoGallery1,
      house1PhotoGallery2,
      houseTerracePhoto,
      house1PhotoGallery3,
      house1PhotoGallery4,
      houseShampooPhoto,
      houseTowelsPhoto,
      houseRobesPhoto,
    ],
  },
];
